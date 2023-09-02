'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { redirect } from 'next/navigation'

const ConnectWallet = () => {
  const { isConnected } = useAccount()

  if (isConnected) redirect('/sender')

  return (
    <ConnectButton />
  )
}

export default ConnectWallet
