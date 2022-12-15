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

	await creator.tokenAccept(stakeToken)
	await creator.tokenAccept(rewardToken)
	await reach.transfer(admin, creator, 2_000_000, rewardToken)
	console.log('[+] transferred 2,000,000 Aro1914 to creator') // this is to enable the creator send in some reward tokens to be distributed to users in rewards

	return {
		admin,
		creator,
		user,
		stakeToken,
		rewardToken,
	}
}

export const params_1 = async (admin, stakeToken, rewardToken) => ({
	beneficiary: admin.getAddress(),
	creationFee: 10, // 0.1%,
	// 1. attracts a 1,000 Algo creationAlgoFeeToPay from the totalAlgoRewardAmount of 1,000,000 Algos
	// 2. attracts a 1,000 Aro1914 creationRewardFeeToPay from the totalRewardAmount of 1,000,000 Aro1914s
	flatAlgoCreationFee: reach.parseCurrency(1001), // 1001 Algos
	stakeToken,
	rewardToken,
	beginBlock: (await reach.getNetworkTime()).add(100), // 100 blocks from the point of creation
	endBlock: (await reach.getNetworkTime()).add(200), // 100 blocks after the begin block begins, 200 blocks from the point of creation
	totalRewardAmount: 1_000_000, // 1,000,000 Aro1914 tokens
	totalAlgoRewardAmount: reach.parseCurrency(1_000_000), // 1,000,000 Algos
	lockLengthBlocks: 50, // 1. 50 farm blocks from the point of staking, this leaves a window of 50 blocks for the staked tokens to attract claimable rewards,
	// after which users can then decide to un-stake their stake tokens
})

export const params_2 = async (admin, stakeToken) => ({
	beneficiary: admin.getAddress(),
	creationFee: 10, // 0.1%,
	// 1. attracts a 1,000 Algo creationAlgoFeeToPay from the totalAlgoRewardAmount of 1,000,000 Algos
	// 2. attracts a 1,000 Aro1914 creationRewardFeeToPay from the totalRewardAmount of 1,000,000 Aro1914s
	flatAlgoCreationFee: reach.parseCurrency(100), // 100 Algos
	stakeToken,
	rewardToken: stakeToken,
	beginBlock: (await reach.getNetworkTime()).add(100), // 100 blocks from the point of creation
	endBlock: (await reach.getNetworkTime()).add(200), // 100 blocks after the begin block begins, 200 blocks from the point of creation
	totalRewardAmount: 1_000_000, // 1,000,000 Aro1914 tokens
	totalAlgoRewardAmount: reach.parseCurrency(1_000_000), // 1,000,000 Algos
	lockLengthBlocks: 50, // 1. 50 farm blocks from the point of staking, this leaves a window of 50 blocks for the staked tokens to attract claimable rewards,
	// after which users can then decide to un-stake their stake tokens
})

export const params_3 = async (admin, stakeToken, rewardToken) => ({
	beneficiary: admin.getAddress(),
	creationFee: 2010, // 20.1%,
	// 1. attracts a 201,000 Algo creationAlgoFeeToPay from the totalAlgoRewardAmount of 1,000,000 Algos
	// 2. attracts a 201,000 Aro1914 creationRewardFeeToPay from the totalRewardAmount of 1,000,000 Aro1914s
	flatAlgoCreationFee: reach.parseCurrency(100), // 100 Algos
	stakeToken,
	rewardToken,
	beginBlock: (await reach.getNetworkTime()).add(100), // 300 blocks from the point of creation
	endBlock: (await reach.getNetworkTime()).add(200), // 100 blocks after the begin block begins, 200 blocks from the point of creation
	totalRewardAmount: 1_000_000, // 1,000,000 Aro1914 tokens
	totalAlgoRewardAmount: reach.parseCurrency(1_000_000), // 1,000,000 Algos
	lockLengthBlocks: 50, // 1. 50 farm blocks from the point of staking, this leaves a window of 50 blocks for the staked tokens to attract claimable rewards,
	// after which users can then decide to un-stake their stake tokens
})

export const params_4 = async (admin, stakeToken, rewardToken) => ({
	beneficiary: admin.getAddress(),
	creationFee: 10, // 0.1%,
	// 1. attracts a 1,000 Algo creationAlgoFeeToPay from the totalAlgoRewardAmount of 1,000,000 Algos
	// 2. attracts a 1,000 Aro1914 creationRewardFeeToPay from the totalRewardAmount of 1,000,000 Aro1914s
	flatAlgoCreationFee: reach.parseCurrency(100), // 100 Algos
	stakeToken,
	rewardToken,
	beginBlock: (await reach.getNetworkTime()).add(300), // 300 blocks from the point of creation
	endBlock: (await reach.getNetworkTime()).add(200), // 100 blocks after the begin block begins, 200 blocks from the point of creation
	totalRewardAmount: 1_000_000, // 1,000,000 Aro1914 tokens
	totalAlgoRewardAmount: reach.parseCurrency(1_000_000), // 1,000,000 Algos
	lockLengthBlocks: 50, // 1. 50 farm blocks from the point of staking, this leaves a window of 50 blocks for the staked tokens to attract claimable rewards,
	// after which users can then decide to un-stake their stake tokens
})

export const params_5 = async (admin, stakeToken, rewardToken) => ({
	beneficiary: admin.getAddress(),
	creationFee: 10, // 0.1%,
	// 1. attracts a 1,000 Algo creationAlgoFeeToPay from the totalAlgoRewardAmount of 1,000,000 Algos
	// 2. attracts a 1,000 Aro1914 creationRewardFeeToPay from the totalRewardAmount of 1,000,000 Aro1914s
	flatAlgoCreationFee: reach.parseCurrency(100), // 100 Algos
	stakeToken,
	rewardToken,
	beginBlock: (await reach.getNetworkTime()).add(100), // 100 blocks from the point of creation
	endBlock: (await reach.getNetworkTime()).add(10000101), // 10000001 blocks after the begin block begins, 10000101 blocks from the point of creation
	totalRewardAmount: 1_000_000, // 1,000,000 Aro1914 tokens
	totalAlgoRewardAmount: reach.parseCurrency(1_000_000), // 1,000,000 Algos
	lockLengthBlocks: 50, // 1. 50 farm blocks from the point of staking, this leaves a window of 50 blocks for the staked tokens to attract claimable rewards,
	// after which users can then decide to un-stake their stake tokens
})

export const params_6 = async (admin, stakeToken, rewardToken) => ({
	beneficiary: admin.getAddress(),
	creationFee: 10, // 0.1%,
	// 1. attracts a 1,000 Algo creationAlgoFeeToPay from the totalAlgoRewardAmount of 1,000,000 Algos
	// 2. attracts a 1,000 Aro1914 creationRewardFeeToPay from the totalRewardAmount of 1,000,000 Aro1914s
	flatAlgoCreationFee: reach.parseCurrency(100), // 100 Algos
	stakeToken,
	rewardToken,
	beginBlock: (await reach.getNetworkTime()).add(100), // 100 blocks from the point of creation
	endBlock: (await reach.getNetworkTime()).add(10000100), // 10000000 blocks after the begin block begins, 10000100 blocks from the point of creation
	totalRewardAmount: 1_000_000, // 1,000,000 Aro1914 tokens
	totalAlgoRewardAmount: reach.parseCurrency(1_000_000), // 1,000,000 Algos
	lockLengthBlocks: 10000001, // 1. 10000001 farm blocks from the point of staking, this leaves a window of 10000001 blocks for the staked tokens to attract claimable rewards,
	// after which users can then decide to un-stake their stake tokens
});

export const params_7 = async (admin, stakeToken, rewardToken) => ({
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
	lockLengthBlocks: 101, // 1. 101 farm blocks from the point of staking, this leaves a window of 101 blocks for the staked tokens to attract claimable rewards,
	// after which users can then decide to un-stake their stake tokens
});

export const params_8 = async (admin, stakeToken, rewardToken) => ({
	beneficiary: admin.getAddress(),
	creationFee: 10, // 0.1%,
	// 1. attracts a 1,000 Algo creationAlgoFeeToPay from the totalAlgoRewardAmount of 1,000,000 Algos
	// 2. attracts a 1,000 Aro1914 creationRewardFeeToPay from the totalRewardAmount of 1,000,000 Aro1914s
	flatAlgoCreationFee: reach.parseCurrency(100), // 100 Algos
	stakeToken,
	rewardToken,
	beginBlock: (await reach.getNetworkTime()).add(100), // 100 blocks from the point of creation
	endBlock: (await reach.getNetworkTime()).add(200), // 100 blocks after the begin block begins, 200 blocks from the point of creation
	totalRewardAmount: 0, // 0 Aro1914 tokens
	totalAlgoRewardAmount: reach.parseCurrency(1_000_000), // 1,000,000 Algos
	lockLengthBlocks: 50, // 1. 50 farm blocks from the point of staking, this leaves a window of 50 blocks for the staked tokens to attract claimable rewards,
	// after which users can then decide to un-stake their stake tokens
});

export const params_9 = async (admin, stakeToken, rewardToken) => ({
	beneficiary: admin.getAddress(),
	creationFee: 10, // 0.1%,
	// 1. attracts a 1,000 Algo creationAlgoFeeToPay from the totalAlgoRewardAmount of 1,000,000 Algos
	// 2. attracts a 1,000 Aro1914 creationRewardFeeToPay from the totalRewardAmount of 1,000,000 Aro1914s
	flatAlgoCreationFee: reach.parseCurrency(1001), // 1001 Algos
	stakeToken,
	rewardToken,
	beginBlock: (await reach.getNetworkTime()).add(100), // 100 blocks from the point of creation
	endBlock: (await reach.getNetworkTime()).add(200), // 100 blocks after the begin block begins, 200 blocks from the point of creation
	totalRewardAmount: 1_000_000, // 1,000,000 Aro1914 tokens
	totalAlgoRewardAmount: reach.parseCurrency(1_000_000), // 1,000,000 Algos
	lockLengthBlocks: 50, // 1. 50 farm blocks from the point of staking, this leaves a window of 50 blocks for the staked tokens to attract claimable rewards,
	// after which users can then decide to un-stake their stake tokens
})