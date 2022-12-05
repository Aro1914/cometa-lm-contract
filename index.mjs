import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const reach = loadStdlib()

const adminStartingBalance = stdlib.parseCurrency(100)
const creatorStartingBalance = stdlib.parseCurrency(10000)
const startingBalance = stdlib.parseCurrency(100)

const admin = await reach.newTestAccount(adminStartingBalance)
admin.setDebugLabel('admin')
console.log('admin account created')

const creator = await reach.newTestAccount(creatorStartingBalance)
creator.setDebugLabel('admin')
console.log('creator account created')

const testAccounts = await reach.newTestAccounts(startingBalance, 4)
const [add1, add2, add3, add4] = testAccounts.map((acc) =>
	reach.formatAddress(acc.getAddress())
)
const [tAcc1, tAcc2, tAcc3, tAcc4] = testAccounts
console.log('test accounts created')

const opts = {
	decimals: 6,
	supply: 1000000000,
}

const token1 = await reach.launchToken(admin, 'Aro1914', 'A19', opts)
const rewardToken = token1.id

const token2 = await reach.launchToken(admin, 'Lonewolf1914', 'LONE19', opts)
const stakeToken = token2.id

const params = {
	beneficiary: admin.getAddress(),
	creationFee: 10, // 0.1%,
	flatAlgoCreationFee: reach.parseCurrency(100), // 100 Algos
	stakeToken,
	rewardToken,
	beginBlock: (async () => (await reach.getNetworkTime()) + 1000)(), // 1000 blocks from the point of creation
	endBlock: (async () => (await reach.getNetworkTime()) + 2000)(), // 1000 blocks after the begin block begins
}
