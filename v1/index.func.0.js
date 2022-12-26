import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
export const reach = loadStdlib()

export const fmt = (x) => reach.formatCurrency(x, 4)
export const b2N = (x) => reach.bigNumberToNumber(x)

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

export const logBalances = async (
	users,
	userAccts,
	stakeToken,
	rewardToken
) => {
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

export const claimFees = async (admin, ctc, info, stakeToken, rewardToken) => {
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
	logView('global', global)
}

export const tAcc = (testAccounts, i) => testAccounts[i].getDebugLabel()
