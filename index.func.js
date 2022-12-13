import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
export const reach = loadStdlib()
export const fmt = (x) => reach.formatCurrency(x, 4)
export const b2N = (x) => reach.bigNumberToNumber(x)

export const setup = async () => {
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

	const opts = {
		decimals: 6,
		supply: 1_000_000_000,
	}

	const token1 = await reach.launchToken(admin, 'Aro1914', 'A19', opts)
	const rewardToken = token1.id
	console.log(
		'[+] admin minted the reward token: Aro1914, supply: 1,000,000,000'
	) // token earned by users overtime for thier stake

	const token2 = await reach.launchToken(admin, 'Lonewolf1914', 'LONE19', opts)
	const stakeToken = token2.id
	console.log(
		'[+] admin minted the stake token: Lonewolf1914, supply: 1,000,000,000'
	) // token to be staked by users, usually LP tokens, but in this case could be DAO tokens

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
	console.log('[+] transferred 1,000 Lonewolf1914 to each test account') // this is to enable the test users own the stake token to use for staking

	await creator.tokenAccept(stakeToken)
	await creator.tokenAccept(rewardToken)
	await reach.transfer(admin, creator, 2_000_000, rewardToken)
	console.log('[+] transferred 2,000,000 Aro1914 to creator') // this is to enable the creator send in some reward tokens to be distributed to users in rewards

	return {
		admin,
		creator,
		user,
		testAccounts,
		stakeToken,
		rewardToken,
	}
}

export const params = async (admin, stakeToken, rewardToken) => ({
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
})

/**
 * This logs to the console the formatted values of a view
 */
export const logView = (state, view) => {
	if (view[1] == null) console.log('[!] view is not set')
	else {
		const values = {}
		const keys = Object.keys(view[1])
		const len = keys.length
		let i = 0
		for (i; i < len; i++) {
			const key = keys[i]
			let value = view[1][key]
			if (reach.isBigNumber(value))
				try {
					value = b2N(value)
					values[key] = value
				} catch (error) {
					if (error.reason == 'overflow') {
						value = fmt(value)
						values[key + ' (fmt)'] = value
					} else {
						console.log({ error })
					}
				}
		}
		console.log(`[*] current ${state} view`, values)
		return values
	}
}

export const logBalances = async (users, userAccts, stakeToken, rewardToken) => {
	if (userAccts.length !== users.length)
		throw Error('Arguments passed do not fit')
	const len = userAccts.length
	let i = 0
	const accounts = {}
	for (i; i < len; i++) {
		const [
			algoBalanceBeforeClaim,
			stakeTokBalanceBeforeClaim,
			rewardTokBalanceBeforeClaim,
		] = await userAccts[i].balancesOf([null, stakeToken, rewardToken])
		console.log('Current account balances')
		accounts[users[i]] = {
			Algo: fmt(algoBalanceBeforeClaim),
			Aro1914: b2N(rewardTokBalanceBeforeClaim),
			Lonewolf1914: b2N(stakeTokBalanceBeforeClaim),
		}
		console.log('[*] ' + users[i], accounts[users[i]])
	}

	return accounts
}

export const deploy = (creator) => {
	return creator.contract(backend)
}

export const claimFees = async (admin, ctc, stakeToken, rewardToken) => {
	// by this time it should be past the endBlock, so we make the beneficiary claimFees that may have been lost
	console.log('[>] initiating claimFee call for beneficiary')
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

	const local = await ctc.v.local(admin)
	logView(`${admin.getDebugLabel()} local`, local)
	const global = await ctc.v.global()
	const globalState = logView('global', global)
}
