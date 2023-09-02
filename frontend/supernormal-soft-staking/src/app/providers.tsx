// TODO: uncomment when we'll inject some providers, like store, ethereum provider, etc., into the app

'use client'

import React, { FC, ReactNode } from 'react'
import '@rainbow-me/rainbowkit/styles.css'
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme
} from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, goerli, lineaTestnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import AuthGuard from '@/components/templates/AuthGuard'

const { chains, publicClient, webSocketPublicClient } = configureChains([goerli, lineaTestnet], [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: 'SuperNormal Soft Staking',
  chains,
  projectId: process.env.NEXT_PUBLIC_RAINBOW_KIT_PROJECT_ID as string
})

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
})

export const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <WagmiConfig config={config}>
    <RainbowKitProvider
      coolMode
      chains={chains}
      theme={darkTheme()}
    >
      <AuthGuard>
        {children}
      </AuthGuard>
    </RainbowKitProvider>
  </WagmiConfig>
)

export default Providers
