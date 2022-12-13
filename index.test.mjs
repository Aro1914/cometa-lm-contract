import { test } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
import {
	reach,
	fmt,
	b2N,
	setup,
	params,
	logView,
	logBalances,
	deploy,
	claimFees,
} from './index.func.js'
const users = ['admin', 'creator', 'user', 'tAcc1', 'tAcc2', 'tAcc3', 'tAcc4']

test.one('Users can stake, claim, and unstake', async () => {
	const { admin, creator, user, testAccounts, stakeToken, rewardToken } =
		await setup()
	const ctc = deploy(creator)

	return ctc.p.Creator({
		getParams: async () => await params(admin, stakeToken, rewardToken),
		deployed: async () => {
			console.log('[+] creator saw deploy confirmed')
			const info = await ctc.getInfo()
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
					// expect(balances[testAccount]['Lonewolf1914']).toEqual(880)
					// expect(balances[testAccount]['Aro1914']).toEqual(0)
					// expect(b2N(result)).toBe(stake)

					const local = await ctc.v.local(testAccounts[i])
					const values = logView(`${testAccount} local`, local)
					// expect(values['staked']).toBe(stake)
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
				// expect(b2N(result)).toBe(stake)
				// expect(b2N(stakeTokBalanceBeforeClaim)).toBe(880)
				// expect(b2N(stakeTokBalanceAfterClaim)).toBe(1000)
				// expect(unStakedAmount).toBe(stake)
			} catch (error) {
				console.log(
					`[!] ${testAccount} attempted to unstake but failed with error:`,
					{ error }
				)
			}
			const _local = await _ctc.v.local(testAccounts[3])
			logView(`${testAccount} local`, _local)

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
								b2N(rewardTokBalanceAfterClaim) -
									b2N(rewardTokBalanceBeforeClaim),
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
							// expect(
							// 	fmt(algoBalanceBeforeClaim) < fmt(algoBalanceAfterClaim)
							// ).toBe(stake)
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
							b2N(initialState.endBlock) -
								10 -
								b2N(await reach.getNetworkTime()),
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

			console.log(
				'[>] initiating unstake calls for test accounts except: tAcc3'
			)
			i = 0
			const unstake = async (i) => {
				const testAccount = testAccounts[i].getDebugLabel()
				const [algoBalanceBeforeClaim, stakeTokBalanceBeforeClaim] =
					await testAccounts[i].balancesOf([null, stakeToken])
				const ctc = testAccounts[i].contract(backend, info)
				// try {
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
				// expect(b2N(result)).toBe(stake)
				// expect(b2N(stakeTokBalanceBeforeClaim)).toBe(880)
				// expect(b2N(stakeTokBalanceAfterClaim)).toBe(1000)
				// expect(unStakedAmount).toBe(stake)
				// } catch (error) {
				// 	console.log(
				// 		`[!] ${testAccount} attempted to unstake but failed with error:`,
				// 		{ error }
				// 	)
				// }
			}
			for (i; i < len; i++) {
				if (i === 2) continue
				if (i === 3)
					await test.chkErr(
						testAccounts[i].getDebugLabel(),
							'tried to unstake more than what is on record',
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
			await claimFees(admin, ctc, stakeToken, rewardToken)
			await logBalances(
				users,
				[admin, creator, user, ...testAccounts],
				stakeToken,
				rewardToken
			)
		},
	})
})

await test.run({ noVarOutput: true })
