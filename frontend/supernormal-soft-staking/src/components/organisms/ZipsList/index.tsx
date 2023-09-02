import { FC } from 'react'
import { ZipItem } from '@/components/organisms/ZipsList/ZipItem'
import { Zip } from '@/types/Zip'
import styles from './ZipsList.module.scss'

interface Props {
  button: 'upgrade' | 'transition' | 'not';
  zips: Zip[];
  onClick: () => void
}

const buttons = {
  upgrade:
    {
      className: styles.upgrade,
      text: 'Upgrade'
    },
  transition:
    {
      className: styles.transition,
      text: 'Transition'
    },
  not:
    {
      className: styles.not,
      text: ''
    }
}

const ZipList: FC<Props> = ({ button, zips, onClick }) => (
  <div className={styles.bottom}>
    <div className={styles.topBar}>
      <div className={styles.listTitle}>
        {zips.length}
        {' '}
        ZIPS
      </div>
      <button onClick={() => onClick()} className={buttons[button].className}>{buttons[button].text}</button>
    </div>
    {zips.map((zip) => <ZipItem key={zip.id} id={zip.id} harvesting={zip.harvesting} />)}
  </div>
)

export default ZipList
