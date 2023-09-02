'use client'

import { FC } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ConnectButton } from '@rainbow-me/rainbowkit'

import styles from './Navbar.module.scss'

type Route = {
  title: string
  to: string
}

type Props = {
  routes: Array<Route>
}

const Navbar: FC<Props> = () => {
  const pathname = usePathname()

  return (
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <span>supernormal</span>
      </div>

      <div className={styles.navMenu}>
        <Link href="/menu">
          <div className={clsx(styles.menuItem, pathname !== '/your-zips' && styles.selected)}>
            Menu
          </div>
        </Link>
        <Link href="/your-zips">
          <div className={clsx(styles.menuItem, pathname === '/your-zips' && styles.selected)}>
            Your ZIPS
          </div>
        </Link>
      </div>

      <div className={styles.walletAddress}>
        <ConnectButton accountStatus="address" chainStatus="none" showBalance={false} />
      </div>
    </div>
  )
}

export default Navbar
