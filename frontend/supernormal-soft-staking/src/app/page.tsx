import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import bg from '@/assets/images/bg.jpeg'
import logo from '@/assets/images/logo.png'
import styles from './page.module.scss'

const Home = () => (
  <div className={styles.main}>
    <div className={styles.left}>
      <div className={styles.centered}>
        <div className={styles.logo}>
          <Image className={styles.image} unoptimized src={logo} alt="logo" height={30} width={30} />
          <div className={styles.supernormal}>PayLink</div>
        </div>
        <div className={styles.description}>Connect your wallet to start</div>
        <div className={styles.connect}><ConnectButton /></div>
      </div>
    </div>
    <div className={styles.right}>
      <Image unoptimized src={bg} alt="background" />
    </div>
  </div>
)
export default Home
