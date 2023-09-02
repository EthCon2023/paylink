import {
  getNewTokens, getOldTokens, nonUpgradedContract, upgradedContract
} from '@/lib/wagmi'
import { useState, useEffect } from 'react'
import { readContracts } from 'wagmi/actions'
import { useAccount } from 'wagmi'
import { getDatabaseTokens } from '@/lib/db'

export function useGetUserATokens() {
  const [zips, setZips] = useState<BigInt[]>([])
  const { isConnected, address } = useAccount()

  async function handleSC() {
    const tokens = await getOldTokens(address as `0${string}`)
    setZips(tokens)
  }

  useEffect(() => {
    if (isConnected) handleSC()
  }, [isConnected])

  return { zips, refetch: handleSC }
}

export function useGetUserBTokens() {
  const [zips, setZips] = useState<BigInt[]>([])
  const { isConnected, address } = useAccount()

  async function handleSC() {
    const dbTokens = await getDatabaseTokens(address!)
    console.log(dbTokens)

    const contracts = dbTokens.reduce((acc: any, curr: number) => [...acc, {
      ...nonUpgradedContract,
      functionName: 'ownerOf',
      args: [curr]
    }], [])

    const addresses = await readContracts({ contracts })
    const newContracts = addresses.filter((a) => a.result === process.env.NEXT_PUBLIC_BURN_WALLET_ADDRESS).reduce((acc: any, curr, index: number) => [...acc, {
      ...upgradedContract,
      functionName: 'isClaimed',
      args: [dbTokens[index] as number]
    }], [] as unknown as Parameters<typeof readContracts>)

    if (newContracts.length) {
      const areTokensClaimed = await readContracts({ contracts: newContracts })
      setZips(dbTokens.filter((token: number, index: number) => !areTokensClaimed[index].result))
    }
  }

  useEffect(() => {
    if (isConnected) handleSC()
  }, [isConnected])

  return zips
}

export function useGetUserDTokens() {
  const [zips, setZips] = useState<BigInt[]>([])
  const { isConnected, address } = useAccount()

  async function handleSC() {
    const dbTokens = await getDatabaseTokens(address!)

    const contracts = dbTokens.reduce((acc: any, curr: number) => [...acc, {
      ...upgradedContract,
      functionName: 'ownerOf',
      args: [curr]
    }], [])

    const addresses = await readContracts({ contracts })
    const newContracts = addresses.filter((a) => a.result === process.env.NEXT_PUBLIC_MIGRATION_CONTRACT_ADDRESS).reduce((acc: any, curr, index: number) => [...acc, {
      ...upgradedContract,
      functionName: 'isClaimed',
      args: [dbTokens[index]]
    }], [])

    if (newContracts.length) {
      const areTokensClaimed = await readContracts({ contracts: newContracts })
      setZips(dbTokens.filter((token: number, index: number) => areTokensClaimed[index].result))
    }
  }

  useEffect(() => {
    if (isConnected) handleSC()
  }, [isConnected])

  return zips
}

export function useGetUserCTokens() {
  const [zips, setZips] = useState<BigInt[]>([])
  const { isConnected, address } = useAccount()

  async function handleSC() {
    const tokens = await getNewTokens(address!)
    setZips(tokens)
  }

  useEffect(() => {
    if (isConnected) handleSC()
  }, [isConnected])

  return zips
}
