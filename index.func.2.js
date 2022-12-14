




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