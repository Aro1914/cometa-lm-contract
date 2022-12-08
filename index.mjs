import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const reach = loadStdlib()
const fmt = (x) => reach.formatCurrency(x, 4)
const b2N = (x) => reach.bigNumberToNumber(x)

const adminStartingBalance = reach.parseCurrency(100)
const creatorStartingBalance = reach.parseCurrency(2_000_000)
const startingBalance = reach.parseCurrency(100)

const admin = await reach.newTestAccount(adminStartingBalance)
admin.setDebugLabel('admin')
console.log('[+] admin account created')

const creator = await reach.newTestAccount(creatorStartingBalance)
creator.setDebugLabel('creator')
console.log('[+] creator account created')

const user = await reach.newTestAccount(startingBalance)
user.setDebugLabel('user')
console.log('[+] user account created')

const testAccounts = await reach.newTestAccounts(4, startingBalance)
testAccounts.forEach((acc, i) => {
	acc.setDebugLabel(`tAcc${i + 1}`)
})

console.log('[+] test accounts created')

const opts = {
	decimals: 6,
	supply: 1_000_000_000,
}

const token1 = await reach.launchToken(admin, 'Aro1914', 'A19', opts)
const rewardToken = token1.id
console.log('[+] admin minted the reward token') // token earned by users overtime for thier stake

const token2 = await reach.launchToken(admin, 'Lonewolf1914', 'LONE19', opts)
const stakeToken = token2.id
console.log('[+] admin minted the stake token') // token to be staked by users, usually LP tokens, but in this case could be DAO tokens

const transferSTokToTestAccts = async (tA) => {
	const len = tA.length
	let i = 0
	for (i; i < len; i++) {
		await tA[i].tokenAccept(stakeToken)
		await tA[i].tokenAccept(rewardToken)
		await reach.transfer(admin, tA[i], 1_000, stakeToken)
	}
}
await transferSTokToTestAccts(testAccounts)
console.log('[+] transferred stake tokens to test accounts') // this is to enable the test users own the stake token to use for staking

await creator.tokenAccept(stakeToken)
await creator.tokenAccept(rewardToken)
await reach.transfer(admin, creator, 2_000_000, rewardToken)
console.log('[+] transferred reward tokens to creator') // this is to enable the creator send in some reward tokens to be distributed to users in rewards

const params = {
	beneficiary: admin.getAddress(),
	creationFee: 10, // 0.1%,
	// 1. attracts a 1,000 Algo creationAlgoFeeToPay from the totalAlgoRewardAmount of 1,000,000 Algos
	// 2. attracts a 10,000 Aro1914 creationRewardFeeToPay from the totalRewardAmount of 10,000,000 Aro1914s
	flatAlgoCreationFee: reach.parseCurrency(100), // 100 Algos
	stakeToken,
	rewardToken,
	beginBlock: (await reach.getNetworkTime()).add(100), // 100 blocks from the point of creation
	endBlock: (await reach.getNetworkTime()).add(200), // 100 blocks after the begin block begins, 200 blocks from the point of creation
	totalRewardAmount: 1_000_000, // 1,000,000 Aro1914 tokens
	totalAlgoRewardAmount: reach.parseCurrency(1_000_000), // 1,000,000 Algos
	lockLengthBlocks: 50, // 1. 50 farm blocks from the point of staking, this leaves a window of 50 blocks for the staked tokens to attract claimable rewards,
	// after which users can then decide to un-stake their stake tokens
}

/**
 * Runs the first two test accounts through these steps:
 * stake -> claim -> unstake
 */
const run1st2tAccs = async (x) => {
	let initial = await ctc.v.initial()
	let initialState = initial[1]
	let present = await reach.getNetworkTime()
	const stake = 120

	const len = 2
	let i = 0
	for (i; i < len; i++) {
		const ctc = testAccounts[i].contract(backend, x)
		try {
			// try to stake
			console.log({
				beginBlock: b2N(initialState.beginBlock),
				currentBlock: b2N(present),
			})
			// console.log({ safe: ctc.safeApis, unsafe: ctc.apis, error: ctc.apis.Api })
			// const call = await ctc.safeApis.stake(stake) // we have each make the stake
			// const response = call[1]apis.stake(stake) // we have each make the stake
			const response = await ctc.apis.stake(stake)
			const { now, result } = response
			console.log('[*] stake successful', {
				assertResultEqualToStake: b2N(result) == stake,
				stake,
				result: b2N(result),
				timeOfStake: parseInt(now),
			})
		} catch (error) {
			console.log('[!] failed to stake', { error })
		}
	}

	i = 0
	present = await reach.getNetworkTime() // update the current network time
	while (present.lt(initialState.endBlock)) {
		// this loops until after the endBlock
		await reach.waitUntilTime(present)
		present = present.add(1)
		// have the user wait until just about 10 blocks before the endBlock, before an attempt to claim
		if (
			b2N(await reach.getNetworkTime()) >=
			b2N(initialState.beginBlock) + 90
		) {
			for (i; i < len; i++) {
				const [algoBalanceBeforeClaim, rewardTokBalanceBeforeClaim] =
					await testAccounts[i].balancesOf([null, rewardToken])
				const ctc = testAccounts[i].contract(backend, x)
				try {
					// try to claim
					const response = await ctc.apis.claim() // we have each make the stake
					const {
						now,
						result: [
							claimedReward /* in Aro1914 tokens */,
							extraAlgoReward /* in Algos */,
						],
					} = response
					const [algoBalanceAfterClaim, rewardTokBalanceAfterClaim] =
						await testAccounts[i].balancesOf([null, rewardToken])
					const [earnedAlgo, earnedReward] = [
						fmt(algoBalanceAfterClaim) - fmt(algoBalanceBeforeClaim),
						b2N(rewardTokBalanceAfterClaim) - b2N(rewardTokBalanceBeforeClaim),
					]
					console.log('[*] claim call successful', {
						claimedReward: fmt(claimedReward),
						extraAlgoReward: fmt(extraAlgoReward),
						algoBalBefore: fmt(algoBalanceBeforeClaim),
						rewardTokenBalBefore: b2N(rewardTokBalanceBeforeClaim),
						algoBalAfter: fmt(algoBalanceAfterClaim),
						rewardTokBalAfter: b2N(rewardTokBalanceAfterClaim),
						earnedAlgo: earnedAlgo,
						earnedReward: earnedReward,
						timeOfClaim: b2N(now),
					})
				} catch (error) {
					console.log('[!] failed to claim', { error })
				}
			}
			i = 0
			break
		} else {
			if (b2N(present) % 10 == 0)
				console.log(
					'[-] blocksRemaining',
					b2N(initialState.endBlock) - 10 - b2N(await reach.getNetworkTime()),
					'beginBlock:',
					b2N(initialState.beginBlock),
					'endBlock:',
					b2N(initialState.endBlock),
					'present:',
					b2N(present)
				)
		}
	}

	i = 0
	for (i; i < len; i++) {
		const [algoBalanceBeforeClaim, stakeTokBalanceBeforeClaim] =
			await testAccounts[i].balancesOf([null, stakeToken])
		const ctc = testAccounts[i].contract(backend, x)
		try {
			// try to unStake
			const response = await ctc.apis.unstake(stake)
			const { now, result } = response
			const [algoBalanceAfterClaim, stakeTokBalanceAfterClaim] =
				await testAccounts[i].balancesOf([null, stakeToken])
			const [earnedAlgo, unStakedAmount] = [
				fmt(algoBalanceAfterClaim) - fmt(algoBalanceBeforeClaim), // this could return a negative value if the amount of rewards did not offset the gas fees for the API call
				b2N(stakeTokBalanceAfterClaim) - b2N(stakeTokBalanceBeforeClaim),
			]
			console.log('[*] unstake call successful', {
				toUnSkate: b2N(result),
				algoBalBefore: fmt(algoBalanceBeforeClaim),
				stakeTokenBalBefore: b2N(stakeTokBalanceBeforeClaim),
				algoBalAfter: fmt(algoBalanceAfterClaim),
				stakeTokBalAfter: b2N(stakeTokBalanceAfterClaim),
				earnedAlgo: earnedAlgo, // applying stdlib.formatCurrency is simply redundant at this point. If you are reading this diff, know I got slapped in the face for actually doing that
				unStakedAmount: unStakedAmount, // applying stdlib.formatCurrency here, is, also redundant. Ignore the use of the term 'redundant', believe me you don't want to do that
				timeOfClaim: b2N(now),
			})
		} catch (error) {
			console.log('[!] failed to unstake', { error })
		}
	}
}

const logBalances = async () => {
	const len = [admin, creator, user, ...testAccounts].length
	let i = 0
	for (i; i < len; i++) {
		const [
			algoBalanceBeforeClaim,
			stakeTokBalanceBeforeClaim,
			rewardTokBalanceBeforeClaim,
		] = await [admin, creator, user, ...testAccounts][i].balancesOf([
			null,
			stakeToken,
			rewardToken,
		])
		console.log(
			'[*] ' +
				['admin', 'creator', 'user', 'tAcc1', 'tAcc2', 'tAcc3', 'tAcc4'][i],
			{
				Algo: fmt(algoBalanceBeforeClaim),
				Aro1914: b2N(rewardTokBalanceBeforeClaim),
				Lonewolf1914: b2N(stakeTokBalanceBeforeClaim),
			}
		)
	}
}

await logBalances()

const ctc = creator.contract(backend)
console.log('[+] deployed the main contract')
ctc.p.Creator({
	getParams: () => params,
	deployed: async () => {
		console.log('[+] creator saw deploy confirmed')
		const info = await ctc.getInfo()
		await run1st2tAccs(info)
		// by this time it should be past the endBlock, so we make the beneficiary claimFees that may have been lost
		const [
			algoBalanceBeforeClaim,
			stakeTokBalanceBeforeClaim,
			rewardTokBalanceBeforeClaim,
		] = await admin.balancesOf([null, stakeToken, rewardToken])
		try {
			const ctcAdmin = admin.contract(backend, info)
			console.log('[+] attached admin (beneficiary) to the main contract')
			const response = await ctcAdmin.apis.claimFees()
			const {
				now,
				result: [
					claimedReward /* in Aro1914 tokens */,
					extraAlgoReward /* in Algos */,
				],
			} = response
			const [
				algoBalanceAfterClaim,
				stakeTokBalanceAfterClaim,
				rewardTokBalanceAfterClaim,
			] = await admin.balancesOf([null, stakeToken, rewardToken])
			const [earnedAlgo, earnedReward] = [
				fmt(algoBalanceAfterClaim) - fmt(algoBalanceBeforeClaim),
				b2N(rewardTokBalanceAfterClaim) - b2N(rewardTokBalanceBeforeClaim),
			]
			console.log('[*] admin (beneficiary) claimFees call successful', {
				claimedReward: b2N(claimedReward),
				extraAlgoReward: fmt(extraAlgoReward),
				algoBalBefore: fmt(algoBalanceBeforeClaim),
				rewardTokenBalBefore: b2N(rewardTokBalanceBeforeClaim),
				stakeTokBalanceBefore: b2N(stakeTokBalanceBeforeClaim),
				algoBalAfter: fmt(algoBalanceAfterClaim),
				rewardTokBalAfter: b2N(rewardTokBalanceAfterClaim),
				stakeTokBalanceAfter: b2N(stakeTokBalanceAfterClaim),
				earnedAlgo: earnedAlgo,
				earnedReward: earnedReward,
				timeOfClaim: b2N(now),
			})
		} catch (error) {
			console.log('[!] admin (beneficiary) failed to claimFees', { error })
		}

		await logBalances()
		process.exit(0)
	},
})

const info = await ctc.getInfo()
const ctcUser = user.contract(backend, info)
console.log('[+] attached user to the main contract')

ctcUser.p.User({
	deployed: () => {
		console.log('[+] user saw deploy confirmed')
	},
})
