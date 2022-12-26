import React, { useState, useEffect } from 'react'
import * as poolCtc from '../contracts/build/index.main.mjs'
import p from '../styles/Pool.module.css'
import s from '../styles/Shared.module.css'
import { useReach, cf } from '../hooks'
import { loadStdlib } from '@reach-sh/stdlib'
import { Arc69 } from '../ARC69/arc.js'
const reach = loadStdlib(process.env)
const arc69 = new Arc69()

const Pool = ({ poolInfo }) => {
	const { user } = useReach()
	const [ctc] = useState(user.account.contract(poolCtc, JSON.parse(poolInfo)))
	const [sTok, setSTok] = useState('...')
	const [rTok, setRTok] = useState('...')
	const [staking, setStaking] = useState('...')
	const [rewards, setRewards] = useState('...')
	const [[stakeTok, setStakeTok], [rewardTok, setRewardTok]] = [
		useState(0),
		useState(0),
	]
	const [showClaim, setShowClaim] = useState(false)
	const [optRT, setOptRT] = useState(false)
	const [optST, setOptST] = useState(false)
	const [end, setEnd] = useState(0)
	const [created, setCreated] = useState(0)
	const [totalSTokens, setTotalSTokens] = useState(0)
	const [inputs, setInputs] = useState({})
	const [beneficiary, setBeneficiary] = useState('')

	const b2N = (x) => reach.bigNumberToNumber(x)
	const fmt = (x) => reach.formatCurrency(x, 4)

	const optIn = async (token, isRewardToken = true) => {
		try {
			await user.account.tokenAccept(token)
			alert('Opt-in Success')
			if (isRewardToken) setOptRT(false)
			else setOptST(false)
		} catch (error) {
			console.log({ error })
			alert('Opt-in Failed')
		}
	}

	const stake = async (amount) => {
		if ((await reach.balanceOf(user.account, stakeTok)) >= amount) {
			try {
				const { result } = await ctc.apis.stake(amount)
				alert(`Stake of ${b2N(result)} ${sTok}, was successful`)
			} catch (error) {
				console.log({ error })
				alert('Stake Failed')
			}
		}
	}

	const claim = async () => {
		try {
			const {
				result: [claimReward, extraAlgoReward],
			} = await ctc.apis.claim()
			alert(
				`Reward claim of ${b2N(claimReward)} ${rTok} and ${fmt(
					extraAlgoReward
				)} ${reach.standardUnit} was successful`
			)
		} catch (error) {
			console.log({ error })
			alert('Reward claim Failed')
		}
	}

	const claimFees = async () => {
		if (String(beneficiary) === String(user.address)) {
			try {
				const {
					result: [claimReward, extraAlgoReward],
				} = await ctc.apis.claimFees()
				alert(
					`Fees claim of ${b2N(claimReward)} ${rTok} and ${fmt(
						extraAlgoReward
					)} ${reach.standardUnit} was successful`
				)
			} catch (error) {
				console.log({ error })
				alert('Fees claim Failed')
			}
		}
	}

	const withdraw = async (amount) => {
		if (
			b2N(((await ctc.v.local(user.address)[1]) ?? { staked: 0 })?.staked) >=
			amount
		)
			try {
				const { result } = await ctc.apis.unstake(amount)
				alert(`Withdrawal of ${b2N(result)} ${sTok}, was successful`)
			} catch (error) {
				console.log({ error })
				alert('Withdrawal Failed')
			}
	}

	const handleChange = (e) => {
		const name = e.currentTarget.name
		let value = e.currentTarget.value

		if (
			value[value.length - 1] !== '.'
				? !isNaN(value[value.length - 1])
				: value.length === 1 || value[value.length - 2] !== '.'
		) {
			setInputs({
				...inputs,
				[name]: value,
			})
		} else {
			while (
				value[value.length - 1] !== '.'
					? !isNaN(value[value.length - 1])
					: value.length === 1 || value[value.length - 2] !== '.'
			) {
				value = value.slice(0, value.length - 1)
				e.currentTarget.value = value
			}
		}
	}

	useEffect(
		() => {
			let waiter = undefined
			const setUp = async () => {
				const {
					beneficiary: ben,
					stakeToken,
					rewardToken,
					beginBlock,
					endBlock,
				} = (await ctc.v.initial)[1]
				setBeneficiary(reach.formatAddress(ben))
				if (reach.formatAddress(ben) === String(user.address))
					setShowClaim(true)
				setStakeTok(b2N(stakeToken))
				setRewardTok(b2N(rewardToken))
				if (!(await user.account.tokenAccepted(b2N(stakeToken)))) setOptST(true)
				setStakeTok(b2N(stakeToken))
				if (!(await user.account.tokenAccepted(b2N(rewardToken))))
					setOptRT(true)
				setRewardTok(b2N(rewardToken))
				setCreated(b2N(beginBlock))
				const [sTokData, rTokData] = [
					await arc69.fetch(b2N(stakeToken)),
					await arc69.fetch(b2N(rewardToken)),
				]
				setSTok(sTokData?.['unit-name'] ?? 'STOK')
				setRTok(rTokData?.['unit-name'] ?? 'RTOK')
				waiter = setInterval(async () => {
					const present = b2N(await reach.getNetworkTime())
					const left = b2N(endBlock) - present
					setEnd(left)
					const localView = (await ctc.v.local(user.address))[1] ?? {
						reward: 0,
						staked: 0,
					}
					setStaking(
						reach.isBigNumber(localView.staked)
							? b2N(localView.staked)
							: localView.staked
					)
					setRewards(
						reach.isBigNumber(localView.reward)
							? b2N(localView.reward)
							: localView.reward
					)
					const { totalStaked } = b2N(await ctc.v.global()) ?? {
						totalStaked: 0,
					}
					setTotalSTokens(totalStaked)
				}, 3700)
			}
			setUp()
			return () => {
				clearInterval(waiter)
				waiter = undefined
			}
		},
		[
			// ctc.v,
			// ctc.v.initial,
			// poolInfo,
			// setRewardTok,
			// setStakeTok,
			// user.account,
			// user.address,
		]
	)
	return (
		<div className={cf(s.wMax, s.flexCenter, s.flex)}>
			<div className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.pool)}>
				<div className={cf(s.flex, s['flex_dColumn'], p.section)}>
					<div className={cf(p.head)}>Farm</div>
					<div className={cf(s.wMax, s.flex, s.flexBottom, p.lowerHalf)}>
						{sTok} - {rTok}
						{optST && (
							<button
								className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
								onClick={() => {
									optIn(stakeTok, false)
								}}
							>
								Opt-in {sTok}
							</button>
						)}
						{optRT && (
							<button
								className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
								onClick={() => {
									optIn(rewardTok)
								}}
							>
								Opt-in {rTok}
							</button>
						)}
					</div>
				</div>
				<div className={cf(s.flex, s['flex_dColumn'], p.section)}>
					<div className={cf(p.head)}>TVL</div>
					<div className={cf(s.wMax, s.flex, s.flexBottom, p.lowerHalf)}>
						{totalSTokens}
					</div>
				</div>
				<div className={cf(s.flex, s['flex_dColumn'], p.section)}>
					<div className={cf(p.head)}>Your Stake</div>
					<div className={cf(s.wMax, s.flex, s.flexBottom, p.lowerHalf)}>
						{staking}
						<div className={cf(s.wMax, s.flex, s.flexCenter)}>
							<label
								className={cf(s.flex, s.flex_dColumn, s.wMax)}
								htmlFor='stake'
							>
								<input
									id='stake'
									name='stake'
									type='text'
									onChange={handleChange}
									className={cf(s.wMax, s.dInlineBlock, p.input)}
								/>
								<button
									className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
									disabled={!inputs.stake}
									onClick={() => {
										stake(inputs.stake)
									}}
								>
									Stake
								</button>
							</label>

							<label
								className={cf(s.flex, s.flex_dColumn, s.wMax)}
								htmlFor='withdraw'
							>
								<input
									id='withdraw'
									name='withdraw'
									type='text'
									onChange={handleChange}
									className={cf(s.wMax, s.dInlineBlock, p.input)}
								/>
								<button
									className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
									disabled={!inputs.withdraw}
									onClick={() => {
										withdraw(inputs.withdraw)
									}}
								>
									Withdraw
								</button>
							</label>
						</div>
					</div>
				</div>
				<div className={cf(s.flex, s['flex_dColumn'], p.section)}>
					<div className={cf(p.head)}>Your Rewards</div>
					<div className={cf(s.wMax, s.flex, s.flexBottom, p.lowerHalf)}>
						{rewards}
					</div>
					<button
						className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
						onClick={claim}
					>
						Claim
					</button>
					{showClaim && (
						<button
							className={cf(s.wMax, s.p5, s.flex, s.flexCenter, p.button)}
							onClick={claimFees}
						>
							Claim Fees
						</button>
					)}
				</div>
				<div className={cf(s.wMax, s.flex, s.flexCenter, p.dates)}>
					Block Created: {created}, Ends In: {end} Blocks
				</div>
			</div>
		</div>
	)
}

export default Pool
