import { test } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
import {
	reach,
	logView,
	logBalances,
	deploy,
	claimFees,
	b2N,
} from './index.func.0.js'
import * as f1 from './index.func.1.js'
import * as f2 from './index.func.2.js'
const users = ['admin', 'creator', 'user', 'tAcc1', 'tAcc2', 'tAcc3', 'tAcc4']

test.one('Users can stake, claim, and unstake', async () => {
	const { admin, creator, user, testAccounts, stakeToken, rewardToken } =
		await f1.setup()
	const ctc = deploy(creator)

	const info = ctc.getInfo()
	const ctcUser = user.contract(backend, info)
	console.log('[+] attached user to the main contract')

	return await Promise.all([
		reach.withDisconnect(() =>
			ctc.p.Creator({
				getParams: async () => await f1.params(admin, stakeToken, rewardToken),
				deployed: async () => {
					const info = await ctc.getInfo()
					const tAcc4LocalViewAfterUnStake = await f1.runAccts(
						ctc,
						info,
						testAccounts,
						stakeToken,
						rewardToken
					)
					await claimFees(admin, ctc, info, stakeToken, rewardToken) // this has the beneficiary retrieve the
					// percentage fee from the total Algo rewards (1000 Algo), Reward token (Aro1914) rewards (1000 Aro1914)
					// and the flat Algo fee amount (100 Algo). IT DOES NOT RETRIEVE USERS' REWARDS
					// as proven here
					const tAcc4LocalViewPresent = await ctc.v.local(testAccounts[3])
					const tAcc4LocalViewPresentValue = tAcc4LocalViewPresent[1]
					test.chk(
						// this goes to show that tAcc4 left rewards in the contract
						'tAcc4 rewards value after unstaking == rewards retained after beneficiary claimFees',
						b2N(tAcc4LocalViewPresentValue.reward),
						tAcc4LocalViewAfterUnStake.reward
					)
					const balances = await logBalances(
						users,
						[admin, creator, user, ...testAccounts],
						stakeToken,
						rewardToken
					)
					f1.confirmBalances(testAccounts, balances)
					const global = await ctc.v.global()
					logView('global', global)
					reach.disconnect(null)
				},
			})
		),
		reach.withDisconnect(() =>
			ctcUser.p.User({
				deployed: () => {
					console.log('[+] user saw deploy confirmed')
					reach.disconnect(null)
				},
			})
		),
	])
})

test.one('Flat ALGO creation fee cannot be more than 1000 ALGO', async () => {
	const { admin, creator, stakeToken, rewardToken } = await f2.setup()
	const ctc = deploy(creator)

	return await test.chkErr(
		'Params with flatAlgoCreationFee of 1001 throws a check failure',
		'Flat ALGO creation fee cannot be more than 1000 ALGO',
		async () => {
			await ctc.p.Creator({
				getParams: async () =>
					await f2.params_1(admin, stakeToken, rewardToken),
				deployed: () =>
					reach.withDisconnect(() => {
						console.log('[+] admin (beneficiary) saw deploy confirmed')
						reach.disconnect(null)
					}),
			})
		}
	)
})

test.one(
	'Reach requires all tokens to be different. Consider using distribution contract instead.',
	async () => {
		const { admin, creator, stakeToken } = await f2.setup()
		const ctc = deploy(creator)

		return await test.chkErr(
			'Params with the same tokenID for reward and stakeToken throws a check failure',
			'Reach requires all tokens to be different. Consider using distribution contract instead.',
			async () => {
				await ctc.p.Creator({
					getParams: async () => await f2.params_2(admin, stakeToken),
					deployed: () =>
						reach.withDisconnect(() => {
							console.log('[+] admin (beneficiary) saw deploy confirmed')
							reach.disconnect(null)
						}),
				})
			}
		)
	}
)

test.one('Maximum possible creation fee is 20%', async () => {
	const { admin, creator, stakeToken, rewardToken } = await f2.setup()
	const ctc = deploy(creator)

	return await test.chkErr(
		'Params with a creation fee greater than 20% throws a check failure',
		'Maximum possible creation fee is 20%',
		async () => {
			await ctc.p.Creator({
				getParams: async () =>
					await f2.params_3(admin, stakeToken, rewardToken),
				deployed: () =>
					reach.withDisconnect(() => {
						console.log('[+] admin (beneficiary) saw deploy confirmed')
						reach.disconnect(null)
					}),
			})
		}
	)
})

test.one('End block must be greater than begin block', async () => {
	const { admin, creator, stakeToken, rewardToken } = await f2.setup()
	const ctc = deploy(creator)

	return await test.chkErr(
		'Params with a begin block greater than the end block throws a check failure',
		'',
		async () => {
			await ctc.p.Creator({
				getParams: async () =>
					await f2.params_4(admin, stakeToken, rewardToken),
				deployed: () =>
					reach.withDisconnect(() => {
						console.log('[+] admin (beneficiary) saw deploy confirmed')
						reach.disconnect(null)
					}),
			})
		}
	)
})

test.one(
	'End block minus begin block must be less than 10000000 blocks',
	async () => {
		const { admin, creator, stakeToken, rewardToken } = await f2.setup()
		const ctc = deploy(creator)

		return await test.chkErr(
			'Params with a difference between the end block and the begin block greater than 10000000 blocks throws a check failure',
			'',
			async () => {
				await ctc.p.Creator({
					getParams: async () =>
						await f2.params_5(admin, stakeToken, rewardToken),
					deployed: () =>
						reach.withDisconnect(() => {
							console.log('[+] admin (beneficiary) saw deploy confirmed')
							reach.disconnect(null)
						}),
				})
			}
		)
	}
)

test.one(
	'lockLenghtBlocks block must be less than 10000000 blocks',
	async () => {
		const { admin, creator, stakeToken, rewardToken } = await f2.setup()
		const ctc = deploy(creator)

		return await test.chkErr(
			'Params with a lockLenghtBlocks greater than 10000000 blocks throws a check failure',
			'',
			async () => {
				await ctc.p.Creator({
					getParams: async () =>
						await f2.params_6(admin, stakeToken, rewardToken),
					deployed: () =>
						reach.withDisconnect(() => {
							console.log('[+] admin (beneficiary) saw deploy confirmed')
							reach.disconnect(null)
						}),
				})
			}
		)
	}
)

test.one(
	'lockLenghtBlocks block must be <= end block - begin block',
	async () => {
		const { admin, creator, stakeToken, rewardToken } = await f2.setup()
		const ctc = deploy(creator)

		return await test.chkErr(
			'Params with a lockLenghtBlocks > end block - begin block throws a check failure',
			'',
			async () => {
				await ctc.p.Creator({
					getParams: async () =>
						await f2.params_7(admin, stakeToken, rewardToken),
					deployed: () =>
						reach.withDisconnect(() => {
							console.log('[+] admin (beneficiary) saw deploy confirmed')
							reach.disconnect(null)
						}),
				})
			}
		)
	}
)

test.one('totalRewardAmount must be > 0', async () => {
	const { admin, creator, stakeToken, rewardToken } = await f2.setup()
	const ctc = deploy(creator)

	return await test.chkErr(
		'Params with a totalRewardAmount <= 0 throws a check failure',
		'',
		async () => {
			await ctc.p.Creator({
				getParams: async () =>
					await f2.params_8(admin, stakeToken, rewardToken),
				deployed: () =>
					reach.withDisconnect(() => {
						console.log('[+] admin (beneficiary) saw deploy confirmed')
						reach.disconnect(null)
					}),
			})
		}
	)
})

test.one('flatAlgoCreationFee must be <= 1000 Algo', async () => {
	const { admin, creator, stakeToken, rewardToken } = await f2.setup()
	const ctc = deploy(creator)

	return await test.chkErr(
		'Params with a flatAlgoCreationFee > 1000 Algo throws a check failure',
		'',
		async () => {
			await ctc.p.Creator({
				getParams: async () =>
					await f2.params_9(admin, stakeToken, rewardToken),
				deployed: () =>
					reach.withDisconnect(() => {
						console.log('[+] admin (beneficiary) saw deploy confirmed')
						reach.disconnect(null)
					}),
			})
		}
	)
})

test.one('Only the beneficiary address is allowed to claimFees', async () => {
	const { admin, creator, stakeToken, user, rewardToken } = await f2.setup()
	const ctc = deploy(creator)

	const info = ctc.getInfo()
	const ctcUser = user.contract(backend, info)
	console.log('[+] attached user to the main contract')

	return await Promise.all([
		reach.withDisconnect(() => {
			ctc.p.Creator({
				getParams: async () => await f1.params(admin, stakeToken, rewardToken),
				deployed: async () => {
					console.log('[+] admin (beneficiary) saw deploy confirmed')
					const info = await ctc.getInfo()
					const ctcCreator = creator.contract(backend, info)
					await test.chkErr(
						'Only the beneficiary address is allowed to claimFees',
						'only beneficiary can claim creation fees',
						async () => {
							await ctcCreator.apis.claimFees()
						}
					)
					reach.disconnect(null)
				},
			})
		}),
		reach.withDisconnect(() => {
			ctcUser.p.User({
				deployed: () => {
					console.log('[+] user saw deploy confirmed')
					reach.disconnect(null)
				},
			})
		}),
	])
})

await test.run({ noVarOutput: true })
