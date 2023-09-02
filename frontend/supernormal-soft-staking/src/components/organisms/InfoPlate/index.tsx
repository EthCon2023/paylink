import { FC, ReactNode } from 'react'
import Image from 'next/image'
import styles from './InfoPlate.module.scss'

interface Props {
  title: string;
  description: ReactNode;
  iconSrc: string;
}

const InfoPlate: FC<Props> = (props) => {
  const { title, description, iconSrc } = props
  return (
    <div className={styles.info}>
      <div className={styles.left}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{description}</div>
      </div>
      <div className={styles.right}>
        <Image unoptimized src={iconSrc} alt={title} height={60} width={60} />
      </div>
    </div>
  )
}

export default InfoPlate
