import React, { useState } from 'react'
import { useReach, cf } from '../hooks'
import s from '../styles/Shared.module.css'
// import a from '../styles/App.module.css'
import p from '../styles/Pool.module.css'
import Pool from './Pool'

const ConnectWallet = () => {
	const { connectToWallet } = useReach()
	return (
		<div className={cf(s.wMax, s.flex, s['flex_dColumn'], s.g10)}>
			<button
				className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
				onClick={() => {
					connectToWallet('MyAlgoConnect')
				}}
			>
				My Algo
			</button>
			<button
				className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
				onClick={() => {
					connectToWallet('WalletConnect')
				}}
			>
				WalletConnect
			</button>
			<button
				className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
				onClick={() => {
					connectToWallet('Mnemonic')
				}}
			>
				Mnemonic
			</button>
		</div>
	)
}

const Launch = () => {
	const { launch, attach } = useReach()
	const [ctcInput, setCtcInput] = useState('')
	const handleChange = (e) => {
		setCtcInput(e.currentTarget.value)
	}

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter)}>
			<button
				className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
				onClick={launch}
			>
				Launch
			</button>
			<span className={cf(s.wMax, s.flexCenter, s.tCenter, s.dInlineBlock)}>
				---OR---
			</span>
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='appID'
			>
				<input
					id='appID'
					name='appID'
					type='number'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
				<button
					className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
					disabled={!ctcInput}
					onClick={() => {
						attach(ctcInput)
					}}
				>
					Attach
				</button>
			</label>
		</div>
	)
}

const Mint = () => {
	const { mint } = useReach()
	const [tokenInfo, setTokenInfo] = useState({})

	const handleChange = (e) => {
		const name = e.currentTarget.name
		const value = e.currentTarget.value

		setTokenInfo({
			...tokenInfo,
			[name]: value,
		})
	}

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, s.tCenter)}>
			Mint Token
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='name'
			>
				<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>Name</span>
				<input
					id='name'
					name='name'
					type='text'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
			</label>
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='symbol'
			>
				<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>Symbol</span>
				<input
					id='symbol'
					name='symbol'
					type='text'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
			</label>
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='supply'
			>
				<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>Supply</span>
				<input
					id='supply'
					name='supply'
					type='number'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
			</label>
			<button
				onClick={() => {
					mint(tokenInfo)
				}}
				className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
				disabled={!tokenInfo.name || !tokenInfo.symbol || !tokenInfo.supply}
			>
				Mint
			</button>
		</div>
	)
}

const Create = () => {
	const { create } = useReach()
	const [farmInfo, setFarmInfo] = useState({})

	const handleChange = (e) => {
		const name = e.currentTarget.name
		const value = e.currentTarget.value

		setFarmInfo({
			...farmInfo,
			[name]: value,
		})
	}

	return (
		<div className={cf(s.wMax, s.flex, s.flexCenter, s.tCenter)}>
			Create Farm
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='stakeToken'
			>
				<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
					Stake Token ID
				</span>
				<input
					id='stakeToken'
					name='stakeToken'
					type='text'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
			</label>
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='rewardToken'
			>
				<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
					Reward Token ID
				</span>
				<input
					id='rewardToken'
					name='rewardToken'
					type='text'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
			</label>
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='beginBlock'
			>
				<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
					Begin Block
				</span>
				<input
					id='beginBlock'
					name='beginBlock'
					type='number'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
			</label>
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='endBlock'
			>
				<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>End Block</span>
				<input
					id='endBlock'
					name='endBlock'
					type='number'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
			</label>
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='totalAlgoRewardAmount'
			>
				<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
					Total Algo Rewards
				</span>
				<input
					id='totalAlgoRewardAmount'
					name='totalAlgoRewardAmount'
					type='number'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
			</label>
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='totalRewardAmount'
			>
				<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
					Total Reward Token Amount
				</span>
				<input
					id='totalRewardAmount'
					name='totalRewardAmount'
					type='number'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
			</label>
			<label
				className={cf(s.flex, s.flex_dColumn, s.wMax)}
				htmlFor='lockLengthBlocks'
			>
				<span className={cf(s.wMax, s.dInlineBlock, s.tCenter)}>
					Lock Period
				</span>
				<input
					id='lockLengthBlocks'
					name='lockLengthBlocks'
					type='number'
					onChange={handleChange}
					className={cf(s.wMax, s.dInlineBlock, p.input)}
				/>
			</label>
			<button
				onClick={() => {
					create(farmInfo)
				}}
				className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
				disabled={
					!farmInfo.stakeToken ||
					!farmInfo.rewardToken ||
					!farmInfo.endBlock ||
					!farmInfo.totalRewardAmount ||
					!farmInfo.totalAlgoRewardAmount ||
					!farmInfo.lockLengthBlocks
				}
			>
				Create
			</button>
		</div>
	)
}

const App = () => {
	const { contract, user, pools } = useReach()

	return (
		<>
			{!user.address ? (
				<ConnectWallet />
			) : !contract.addID ? (
				<Launch />
			) : (
				<div className={cf(s.window, s.wMax, s.flex, s.flexCenter)}>
					<h1>Pools</h1>
					{pools.map((el, i) => (
						<Pool
							key={i}
							poolCtc={el.poolCtc}
						/>
					))}
					<h2>Mint</h2>
					<Mint />
					<h2>Create</h2>
					<Create />
				</div>
			)}
		</>
	)
}

export default App
