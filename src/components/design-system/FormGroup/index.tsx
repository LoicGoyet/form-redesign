import cc from 'classcat'
import * as React from 'react'
import { FormLabel } from '../FormLabel'
import styles from './styles.module.scss'

type Props = {
  className?: string
  children: React.ReactNode
  label?: React.ReactNode
  name: string
}

export const FormGroup = ({ className, children, label, name }: Props) => {
  return (
    <div className={cc([className, styles['form-group']])}>
      {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
      {children}
    </div>
  )
}
