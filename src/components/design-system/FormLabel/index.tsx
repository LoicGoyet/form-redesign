import cc from 'classcat'
import * as React from 'react'
import styles from './styles.module.scss'

type Props = {
  className?: string
  children: React.ReactNode
  htmlFor?: string
}

export const FormLabel = ({ className, children, htmlFor }: Props) => {
  return (
    <label className={cc([className, styles['form-label']])} htmlFor={htmlFor}>
      {children}
    </label>
  )
}
