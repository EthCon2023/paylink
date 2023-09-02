import { FC } from 'react'
import Image from 'next/image'

import arrowRight from '@/assets/icons/arrow-right.png'
import Link from 'next/link'
import { MenuItemProps } from '@/types/Menu'
import styles from './Item.module.scss'

const Item: FC<MenuItemProps> = (props) => {
  const {
    href, iconSrc, title, description
  } = props

  return (
    <Link href={href}>
      <div className={styles.menuItem}>
        <div className={styles.menuItemWrapper}>
          <Image unoptimized src={iconSrc} alt="submit" height={50} width={50} />
          <div className={styles.categoryText}>
            <div className={styles.categoryTitle}>
              {title}
            </div>
            <div className={styles.categoryDesc}>
              {description}
            </div>
          </div>
        </div>
        <div className={styles.menuItemArrow}>
          <Image unoptimized src={arrowRight} alt="arrow-right" height={30} width={30} />
        </div>
      </div>
    </Link>
  )
}

export default Item
