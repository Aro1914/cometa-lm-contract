import React, { useState } from 'react'
import {
	loadStdlib,
	ALGO_MyAlgoConnect as MyAlgoConnect,
	ALGO_WalletConnect as WalletConnect,
	ALGO_MakePeraConnect as MakePeraConnect,
	ALGO_PeraConnect as PeraConnect,
} from '@reach-sh/stdlib'
import { PeraWalletConnect } from '@perawallet/connect'
import * as poolCtc from '../contracts/build/index.main.mjs'
import * as mainCtc from '../contracts/build/main.main.mjs'

const reach = loadStdlib({
	...process.env,
	REACH_NO_WARN: 'Y',
	REACH_CONNECTOR_MODE: 'ALGO',
})

const providerEnv = 'TestNet'

export const ReachContext = React.createContext()

const ReachContextProvider = ({ children }) => {
	// states
	const [pools, setPools] = useState([])
	const [user, setUser] = useState({
		account: null,
		balance: null,
		address: null,
	})
	const [contract, setContract] = useState({})
	const [beneficiary, setBeneficiary] = useState('')
	const [contractInstance, setContractInstance] = useState({})

	// functionalities
	const connectToWallet = async (
		walletPreference,
		mnemonic = false,
		secret = ''
	) => {
		delete window.algorand
		const instantReach = loadStdlib({
			...process.env,
			REACH_NO_WARN: 'Y',
			REACH_CONNECTOR_MODE: 'ALGO',
		})
		switch (walletPreference) {
			case 'PeraConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({
						providerEnv,
						WalletConnect: MakePeraConnect(PeraWalletConnect),
					})
				)
				break
			case 'MyAlgoConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, MyAlgoConnect })
				)
				break
			case 'WalletConnect':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, WalletConnect })
				)
				break
			case 'Mnemonic':
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, PeraConnect })
				)
				break
			default:
				instantReach.setWalletFallback(
					instantReach.walletFallback({ providerEnv, WalletConnect })
				)
				break
		}

		try {
			const account = mnemonic
				? await instantReach.newAccountFromMnemonic(secret)
				: await instantReach.getDefaultAccount()
			if (process.env.REACT_APP_ADMIN_CONTRACT_INFO) {
				try {
					const postPool = async ({ what }) => {
						const currentPools = pools
						currentPools.push({
							poolCtc: JSON.stringify(what[0]),
						})
						setPools([...currentPools])
					}
					const ctc = account.contract(
						mainCtc,
						parseInt(process.env.REACT_APP_ADMIN_CONTRACT_INFO)
					)
					setContract({
						appID: parseInt(process.env.REACT_APP_ADMIN_CONTRACT_INFO),
					})

					ctc.events.postPool.monitor(postPool)
					ctc.events.postBeneficiary.monitor(({ what }) => {
						setBeneficiary(reach.formatAddress(what[0]))
					})
					setContractInstance(ctc)
				} catch (error) {
					console.log({ error })
				}
			}

			setUser({
				account,
				balance: async (tokenContract = null) => {
					const balAtomic = tokenContract
						? await reach.balanceOf(account, tokenContract)
						: await reach.balanceOf(account)
					const balance = reach.formatCurrency(balAtomic, 4)
					return balance
				},
				address: reach.formatAddress(account.getAddress()),
			})
			alert('Connection to wallet was successful')
		} catch (error) {
			console.error({ error })
			alert('An error occurred, unable to connect to wallet. Please try again')
		}
	}

	const postPool = async ({ what }) => {
		const currentPools = pools
		currentPools.push({
			poolCtc: JSON.stringify(what[0]),
		})
		setPools([...currentPools])
	}

	const launch = async () => {
		const ctc = user.account.contract(mainCtc)
		ctc.events.postPool.monitor(postPool)
		ctc.events.postBeneficiary.monitor(async ({ what }) => {
			setBeneficiary(reach.formatAddress(what[0]))
			setContract({ appID: await ctc.getInfo() })
		})
	}

	const attach = async (ctcInfo) => {
		try {
			const ctc = user.account.contract(mainCtc, Number(ctcInfo))
			setContract({ appID: ctcInfo })
			ctc.events.postPool.monitor(postPool)
			ctc.events.postBeneficiary.monitor(({ what }) => {
				setBeneficiary(reach.formatAddress(what[0]))
			})
		} catch (error) {
			console.log({ error })
			alert('Error attaching to main contract')
		}
	}

	const mint = async (assetInfo) => {
		try {
			const { id } = await reach.launchToken(
				user.account,
				assetInfo['name'],
				assetInfo['symbol'],
				{ supply: assetInfo['supply'] }
			)
			alert(`${assetInfo['name']} successfully mint with ID: ${id}`)
		} catch (error) {
			console.log({ error })
			alert('Mint Failed')
		}
	}

	const create = async (farmInfo) => {
		try {
			const farmCtc = user.account.contract(poolCtc)
			farmCtc.p.Creator({
				getParams: async () => ({
					beneficiary,
					creationFee: 10,
					flatAlgoCreationFee: reach.parseCurrency(50),
					beginBlock: reach.bigNumberToNumber(await reach.getNetworkTime()),
					endBlock: Number(farmInfo.endBlock),
					totalRewardAmount: Number(farmInfo.totalRewardAmount),
					totalAlgoRewardAmount: Number(farmInfo.totalAlgoRewardAmount),
					lockLengthBlocks: Number(farmInfo.lockLengthBlocks),
					stakeToken: Number(farmInfo.stakeToken),
					rewardToken: Number(farmInfo.rewardToken),
				}),
				deployed: async () => {
					alert(
						'Farm deployed with APP ID: ' +
							reach.bigNumberToNumber(await farmCtc.getInfo()) +
							'. Please sign the next transaction to save your farm on the platform'
					)
					try {
						const id = contractInstance.apis.notify(await farmCtc.getInfo())
						alert('Farm uploaded with ID: ' + reach.bigNumberToNumber(id))
					} catch (error) {
						console.log({ error })
						alert('Failed to upload')
					}
				},
			})
		} catch (error) {
			console.log({ error })
			alert('Farm creation Failed')
		}
	}

	const ReachContextValue = {
		// ...states
		user,
		contract,
		connectToWallet,
		pools,
		launch,
		attach,
		mint,
		create,
	}

	return (
		<ReachContext.Provider value={ReachContextValue}>
			{children}
		</ReachContext.Provider>
	)
}

export default ReachContextProvider
