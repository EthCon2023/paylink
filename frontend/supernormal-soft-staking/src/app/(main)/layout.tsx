import React from 'react'
import styles from './layout.module.scss'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <section>
    <div className={styles.wrapper}>
      {children}
    </div>
  </section>
)

export default RootLayout
