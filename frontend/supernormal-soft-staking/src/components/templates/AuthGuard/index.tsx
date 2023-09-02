'use client'

import { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { redirect, usePathname } from 'next/navigation'

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { status } = useAccount()
  const pathname = usePathname()

  useEffect(() => {
    if (status === 'connected' && pathname === '/') redirect('/menu')
    if (status === 'disconnected' && pathname !== '/') redirect('/')
  }, [status])

  return (
    <div>
      { children }
    </div>
  )
}

export default AuthGuard
