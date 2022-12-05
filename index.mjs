import { loadStdlib } from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const reach = loadStdlib()

const adminStartingBalance = stdlib.parseCurrency(100)
const creatorStartingBalance = stdlib.parseCurrency(100010)
const startingBalance = stdlib.parseCurrency(100)

const admin = await reach.newTestAccount(adminStartingBalance)
admin.setDebugLabel('admin')
console.log('[+] admin account created')

const creator = await reach.newTestAccount(creatorStartingBalance)
creator.setDebugLabel('admin')
console.log('[+] creator account created')

const testAccounts = await reach.newTestAccounts(startingBalance, 4)
const [add1, add2, add3, add4] = testAccounts.map((acc) =>
	reach.formatAddress(acc.getAddress())
)
const [tAcc1, tAcc2, tAcc3, tAcc4] = testAccounts
console.log('[+] test accounts created')

const opts = {
	decimals: 6,
	supply: 1000000000,
}

const token1 = await reach.launchToken(admin, 'Aro1914', 'A19', opts)
const rewardToken = token1.id
console.log('[+] admin minted the reward token') // token earned by users overtime for there stake

const token2 = await reach.launchToken(admin, 'Lonewolf1914', 'LONE19', opts)
const stakeToken = token2.id
console.log('[+] admin minted the stake token') // token to be staked by users, usually LP tokens, but in this case could be DAO tokens

const transferSTokToTestAccts = async (tA) => {
	const len = tA.length
	let i = 0
	for (i; i < len; i++) {
		await reach.transfer(admin, tA[i], 1000, stakeToken)
	}
}
transferSTokToTestAccts([tAcc1, tAcc2, tAcc3, tAcc4])
console.log('[+] transferred stake tokens to test accounts') // this is to enable the test users own the stake token to use for staking

reach.transfer(admin, creator, 1000010, rewardToken)
console.log('[+] transferred reward tokens to creator') // this is to enable the creator send in some reward tokens to be distributed to users in rewards

const cF = 10
const cFTP = 1 * (cF / 100)
const tRA = 1000000
const cFV = tRA * cFTP
const fACF = 100

const params = {
	beneficiary: admin.getAddress(),
	creationFee: cf, // 0.1%,
	flatAlgoCreationFee: reach.parseCurrency(fACF), // 100 Algos
	stakeToken,
	rewardToken,
	beginBlock: (async () => (await reach.getNetworkTime()) + 1000)(), // 1000 blocks from the point of creation
	endBlock: (async () => (await reach.getNetworkTime()) + 2000)(), // 1000 blocks after the begin block begins
	totalRewardAmount: reach.parseCurrency(tRA), // 1000000 Reward tokens
	totalAlgoRewardAmount: reach.parseCurrency(tRA + cFV + fACF + 10), // 1. 100000 Algos, this is in view that the creator would have to pay 0.1% of the Reward token amount
	// in Algos, along with the totalAlgoRewardAmount plus the flatAlgoCreationFee
	lockLengthBlocks: 1500, // 1. 1500 blocks from the point of creation, this leaves a window of 500 blocks for the contract to start giving out rewards,
	// afterwhich users can then decide to unstake their stake tokens
}

const ctc = await admin.contract(backend)
console.log('[+] deployed the admin contract')

const run1st2tAccs = async (x) => {
    let watcher = await reach.contract(backend, x)
    let initialState = {} 
    let time = 0
    do {
        initialState = await watcher.v.initial()[1]
        const result = initialState.result
        time = initialState.now

        if (time >= result.beginBlock) {
            [tAcc1, tAcc2].forEach(element => {
                const ctc = element.contract(backend, x)
                try {
                   await ctc.a.stake(reach.parseCurrency(120))
                } catch (error) {
                    console.log({error})
                }
                
            });
        }
    }while(initialState.result.beginBlock < (await reach.getNetworkTime()))
    
}

await ctc.p.Creator({
	getParams: params,
	deployed: async () => {
		console.log('deployed', ctc.getInfo)
	},
})
