import { test } from '@reach-sh/stdlib'
import { reach, fmt, b2N, logView, logBalances, tAcc } from './index.func.0.js'
import * as backend from './build/index.main.mjs'

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
	console.log('[+] test accounts created')

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
	// 2. attracts a 1,000 Aro1914 creationRewardFeeToPay from the totalRewardAmount of 1,000,000 Aro1914s
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

export const runAccts = async (
	ctc,
	info,
	testAccounts,
	stakeToken,
	rewardToken
) => {
	console.log('[+] creator saw deploy confirmed')
	const initial = await ctc.v.initial()
	const initialState = logView('initial', initial)
	let global = await ctc.v.global()
	let globalState = logView('global', global)
	let present = await reach.getNetworkTime()
	const stake = 120

	console.log('[>] initiating stake calls for test accounts except: tAcc3')
	const len = 4
	let i = 0
	for (i; i < len; i++) {
		if (i === 2) continue // we have the third test account skip out on staking
		const testAccount = testAccounts[i].getDebugLabel()
		const ctc = testAccounts[i].contract(backend, info)
		try {
			// try to stake
			const response = await ctc.apis.stake(stake) // we have each make the stake
			const { now, result } = response
			console.log(`[*] ${testAccount} stake successful`, {
				assertResultEqualToStake: b2N(result) == stake,
				stake,
				result: b2N(result),
				timeOfStake: parseInt(now),
			})
			const balances = await logBalances(
				[testAccount],
				[testAccounts[i]],
				stakeToken,
				rewardToken
			)
			test.chk(
				`${testAccount} Lonewolf1914 balance == 880`,
				balances[testAccount]['Lonewolf1914'],
				880
			)
			test.chk(
				`${testAccount} Aro1914 balance == 0`,
				balances[testAccount]['Aro1914'],
				0
			)
			test.chk(`${testAccount} stake result == stake`, b2N(result), stake)

			const local = await ctc.v.local(testAccounts[i])
			const values = logView(`${testAccount} local`, local)
			test.chk('returned stake value == stake', values['staked'], stake)
		} catch (error) {
			console.log(
				`[!] ${testAccount} attempted to stake but failed with error:`,
				{ error }
			)
		}
	}

	console.log(
		'[>] initiating claim and unstake calls for test account (before lock is lifted): tAcc4'
	)
	const [algoBalanceBeforeClaim, stakeTokBalanceBeforeClaim] =
		await testAccounts[3].balancesOf([null, stakeToken])
	const _ctc = testAccounts[3].contract(backend, info)
	const testAccount = testAccounts[3].getDebugLabel()
	await reach.wait(30) // this is to confirm if rewards are accumulated during the period of the lockLenghtBlocks
	try {
		// try to unStake
		const response = await _ctc.apis.unstake(stake) // we have tAcc4 attempt to unstake before the lock is lifted
		const { now, result } = response
		const [algoBalanceAfterClaim, stakeTokBalanceAfterClaim] =
			await testAccounts[3].balancesOf([null, stakeToken])
		const [earnedAlgo, unStakedAmount] = [
			fmt(algoBalanceAfterClaim) - fmt(algoBalanceBeforeClaim),
			b2N(stakeTokBalanceAfterClaim) - b2N(stakeTokBalanceBeforeClaim),
		]
		console.log(`[*] ${testAccount} unstake call successful`, {
			toUnSkate: b2N(result),
			algoBalBefore: fmt(algoBalanceBeforeClaim),
			stakeTokenBalBefore: b2N(stakeTokBalanceBeforeClaim),
			algoBalAfter: fmt(algoBalanceAfterClaim),
			stakeTokBalAfter: b2N(stakeTokBalanceAfterClaim),
			earnedAlgo: earnedAlgo,
			unStakedAmount: unStakedAmount,
			timeOfClaim: b2N(now),
		})
		test.chk('result == stake', b2N(result), stake)
		test.chk(
			'stakeTokBalanceBeforeClaim == 880',
			b2N(stakeTokBalanceBeforeClaim),
			880
		)
		test.chk(
			'stakeTokBalanceAfterClaim == 1000',
			b2N(stakeTokBalanceAfterClaim),
			1000
		)
		test.chk('unStakedAmount == stake', unStakedAmount, stake)
	} catch (error) {
		console.log(
			`[!] ${testAccount} attempted to unstake but failed with error:`,
			{ error }
		)
	}
	const _local = await _ctc.v.local(testAccounts[3])
	const tAcc4LV = logView(`${testAccount} local`, _local)

	global = await ctc.v.global()
	globalState = logView('global', global)

	console.log('[>] initiating claim calls for test accounts except: tAcc4')
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
				if (i === 3) continue // we have the forth test account skip out on claiming rewards
				const testAccount = testAccounts[i].getDebugLabel()
				const [algoBalanceBeforeClaim, rewardTokBalanceBeforeClaim] =
					await testAccounts[i].balancesOf([null, rewardToken])
				const ctc = testAccounts[i].contract(backend, info)
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
					console.log(`[*] ${testAccount} claim call successful`, {
						claimedReward: b2N(claimedReward),
						extraAlgoReward: fmt(extraAlgoReward),
						algoBalBefore: fmt(algoBalanceBeforeClaim),
						rewardTokenBalBefore: b2N(rewardTokBalanceBeforeClaim),
						algoBalAfter: fmt(algoBalanceAfterClaim),
						rewardTokBalAfter: b2N(rewardTokBalanceAfterClaim),
						earnedAlgo: earnedAlgo,
						earnedReward: earnedReward,
						timeOfClaim: b2N(now),
					})
					// expect(b2N(claimedReward)).toBeTruthy()
					// expect(fmt(extraAlgoReward)).toBeTruthy()
					// expect(
					// 	b2N(rewardTokBalanceBeforeClaim) <
					// 		b2N(rewardTokBalanceAfterClaim)
					// ).toBeTruthy()
					if (i === 2)
						// this is because tAcc3 never made a stake,
						// so the attempt to claim rewards should only result in a reduction of Algo,
						// as the attempt would only end up costing wasted fees
						test.chk(
							'algoBalanceBeforeClaim > algoBalanceAfterClaim',
							fmt(algoBalanceBeforeClaim) > fmt(algoBalanceAfterClaim),
							true
						)
					// but for the other two accounts, tAcc1 & tAcc2, that staked,
					// their calls should result in an increase in their Algo balance,
					// as a result of the claimed rewards
					else
						test.chk(
							'algoBalanceBeforeClaim < algoBalanceAfterClaim',
							fmt(algoBalanceBeforeClaim) < fmt(algoBalanceAfterClaim),
							true
						)
				} catch (error) {
					console.log(
						`[!] ${testAccount} attempted to claim rewards but failed with error:`,
						{ error }
					)
				}
				const local = await ctc.v.local(testAccounts[i])
				logView(`${testAccount} local`, local)
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

	global = await ctc.v.global()
	globalState = logView('global', global)

	console.log('[>] initiating unstake calls for test accounts except: tAcc3')
	i = 0
	const unstake = async (i) => {
		const testAccount = testAccounts[i].getDebugLabel()
		const [algoBalanceBeforeClaim, stakeTokBalanceBeforeClaim] =
			await testAccounts[i].balancesOf([null, stakeToken])
		const ctc = testAccounts[i].contract(backend, info)
		// try to unStake
		const response = await ctc.apis.unstake(stake)
		const { now, result } = response
		const [algoBalanceAfterClaim, stakeTokBalanceAfterClaim] =
			await testAccounts[i].balancesOf([null, stakeToken])
		const [earnedAlgo, unStakedAmount] = [
			fmt(algoBalanceAfterClaim) - fmt(algoBalanceBeforeClaim), // this could return a negative value if the amount of rewards did not offset the gas fees for the API call
			b2N(stakeTokBalanceAfterClaim) - b2N(stakeTokBalanceBeforeClaim),
		]
		console.log(`[*] ${testAccount} unstake call successful`, {
			toUnSkate: b2N(result),
			algoBalBefore: fmt(algoBalanceBeforeClaim),
			stakeTokenBalBefore: b2N(stakeTokBalanceBeforeClaim),
			algoBalAfter: fmt(algoBalanceAfterClaim),
			stakeTokBalAfter: b2N(stakeTokBalanceAfterClaim),
			earnedAlgo: earnedAlgo, // applying stdlib.formatCurrency is simply redundant at this point. If you are reading this diff, know I got slapped in the face for actually doing that
			unStakedAmount: unStakedAmount, // applying stdlib.formatCurrency here, is, also redundant. Ignore the use of the term 'redundant', believe me you don't want to do that
			timeOfClaim: b2N(now),
		})
		test.chk('result == stake', b2N(result), stake)
		test.chk(
			'stakeTokBalanceBeforeClaim == 880',
			b2N(stakeTokBalanceBeforeClaim),
			880
		)
		test.chk(
			'stakeTokBalanceAfterClaim == 1000',
			b2N(stakeTokBalanceAfterClaim),
			1000
		)
		test.chk('unStakedAmount == stake', unStakedAmount, stake)
	}
	for (i; i < len; i++) {
		if (i === 2) continue
		if (i === 3)
			await test.chkErr(
				testAccounts[i].getDebugLabel(),
				'tried to unstake more than staked on record',
				async () => {
					await unstake(i)
				}
			)
		else await unstake(i)
		const local = await ctc.v.local(testAccounts[i])
		logView(`${testAccount} local`, local)
	}

	global = await ctc.v.global()
	globalState = logView('global', global)
	return tAcc4LV
}

export const confirmBalances = (testAccounts, balances) => {
	let i = 0
	for (i; i < 2; i++) {
		const testAccount = tAcc(testAccounts, i)
		test.chk(
			`${testAccount} Lonewolf1914 balance == 1000`,
			balances[testAccount]['Lonewolf1914'],
			1000
		)
		test.chk(
			`${testAccount} has some Aro1914 rewards`,
			balances[testAccount]['Aro1914'] > 0,
			true
		)
	}
	let testAccount = tAcc(testAccounts, i)
	test.chk(
		`${testAccount} Lonewolf1914 balance == 1000`,
		balances[testAccount]['Lonewolf1914'],
		1000
	)
	test.chk(
		`${testAccount} has no Aro1914 reward`,
		balances[testAccount]['Aro1914'],
		0
	)
	i++
	testAccount = tAcc(testAccounts, i)
	test.chk(
		`${testAccount} Lonewolf1914 balance == 1000`,
		balances[testAccount]['Lonewolf1914'],
		1000
	)
	test.chk(
		`${testAccount} has no Aro1914 reward`,
		balances[testAccount]['Aro1914'],
		0
	)
}
