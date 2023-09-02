import Image from 'next/image'
import honey from '@/assets/icons/honey.png'

import { FC } from 'react'
import { MenuItemProps } from '@/types/Menu'
import Item from './Item'
import styles from './MenuList.module.scss'

const MenuList: FC<{ items: MenuItemProps[] }> = ({ items }) => (
  <div className={styles.menu}>
    <div className={styles.topSection}>
      <div className={styles.left}>
        <div className={styles.menuTitle}>Menu</div>
        <div className={styles.menuDesc}>
          Select which type of ZIPS you are upgrading to Soft Harvesting. If you own
          ZIPS in multiple categories, you will need to upgrade them separately on each page.
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.honey}>
          <Image unoptimized src={honey} alt="honey" height={25} width={25} />
        </div>
        <h1>622 SN</h1>
      </div>
    </div>
    <div className={styles.menuItems}>
      {
        items.map((item) => (
          <Item
            key={item.href}
            href={item.href}
            title={item.title}
            description={item.description}
            iconSrc={item.iconSrc}
          />
        ))
      }
    </div>
  </div>
)
export default MenuList
