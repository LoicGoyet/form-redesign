import cc from 'classcat'
import * as React from 'react'
import styles from './styles.module.scss'

type Props = {
  className?: string
  children: React.ReactNode
}

export const FormError = ({ className, children }: Props) => {
  return <div className={cc([className, styles['form-error']])}>{children}</div>
}
