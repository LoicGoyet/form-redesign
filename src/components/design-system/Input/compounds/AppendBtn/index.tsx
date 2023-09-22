import cc from 'classcat'
import * as React from 'react'
import styles from './styles.module.scss'

type Props = {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}

const AppendBtn = ({ className, onClick, children }: Props) => {
  return (
    <button
      className={cc([styles['btn__append-btn'], className])}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default AppendBtn
