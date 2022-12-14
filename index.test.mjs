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

await test.run({ noVarOutput: true })
