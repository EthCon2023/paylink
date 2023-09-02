'use client'

import { encodePacked } from 'viem'
import { writeContract } from 'wagmi/actions'

import { axelarContract, contract } from '@/lib/wagmi'

const UserA = () => {
  async function send() {
    const { hash } = await writeContract({
      address: axelarContract.address,
      abi: axelarContract.abi,
      functionName: 'callContract',
      args: ['linea', contract.address, encodePacked(
          ["string"],
        ["Hello from contract A"]
      )]
    })
    console.log(hash)
  }

  return (
    <div>
      <button onClick={() => send()}>Send</button>
    </div>
  )
}

export default UserA
