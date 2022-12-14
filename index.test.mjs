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
	runAccts,
} from './index.func.js'
const users = ['admin', 'creator', 'user', 'tAcc1', 'tAcc2', 'tAcc3', 'tAcc4']

test.one('Users can stake, claim, and unstake', async () => {
	const { admin, creator, user, testAccounts, stakeToken, rewardToken } =
		await setup()
	const ctc = deploy(creator)
	ctc.p.Creator({
		getParams: async () => await params(admin, stakeToken, rewardToken),
		deployed: async () => {
			const info = await ctc.getInfo()
			await runAccts(ctc, info, testAccounts, stakeToken, rewardToken)
			await claimFees(admin, ctc, info, stakeToken, rewardToken)
			await logBalances(
				users,
				[admin, creator, user, ...testAccounts],
				stakeToken,
				rewardToken
			)
			const global = await ctc.v.global()
			logView('global', global)
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
})

await test.run({ noVarOutput: true })
