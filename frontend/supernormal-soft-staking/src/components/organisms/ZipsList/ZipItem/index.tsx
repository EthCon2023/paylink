import Image from 'next/image'

import red from '@/assets/icons/lock_red.png'
import orange from '@/assets/icons/lock_orange.png'
import green from '@/assets/icons/lock_green.png'

import { FC } from 'react'
import { Zip } from '@/types/Zip'
import styles from './Item.module.scss'

export const ZipItem: FC<Zip> = (props) => {
  const { id, harvesting: type } = props

  const indicatorMapping = {
    hard:
      {
        name: 'HARD HARVESTING',
        className: 'hard',
        image: <Image className={styles.indicatorImage} unoptimized src={green} alt="green-lock" height={10} width={10} />
      },
    soft:
      {
        name: 'SOFT HARVESTING',
        className: 'soft',
        image: <Image className={styles.indicatorImage} unoptimized src={orange} alt="orange-lock" height={10} width={10} />
      },
    not:
      {
        name: 'NOT HARVESTING',
        className: 'not',
        image: <Image className={styles.indicatorImage} unoptimized src={red} alt="red-lock" height={10} width={10} />
      }
  }

  const { name: indicatorName, image: indicatorImage, className } = indicatorMapping[type]

  return (
    <div className={`${styles.listItem} ${styles[className]}`}>
      <div className={styles.itemLeft}>
        ZIPS #
        {id}
      </div>
      <div className={styles.indicator}>
        <div className={styles.indicatorName}>{indicatorName}</div>
        {indicatorImage}
      </div>
    </div>
  )
}
