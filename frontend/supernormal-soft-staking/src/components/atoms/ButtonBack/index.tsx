import { FC } from 'react'
import styles from './ButtonBack.module.scss'

interface Props {
  href: string;
}

const ButtonBack: FC<Props> = (props) => {
  const { href } = props
  return (
    <a href={href} className={styles.link}>
      <strong>←</strong>
&nbsp;Back
    </a>
  )
}

export { ButtonBack }
