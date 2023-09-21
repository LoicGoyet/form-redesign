import cc from 'classcat'
import * as React from 'react'
import styles from './styles.module.scss'

export const types = [
  'date',
  'datetime-local',
  'email',
  'hidden',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
] as const

type Props = {
  className?: string
  value: string | number
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur: React.FocusEventHandler<HTMLInputElement>
  type?: (typeof types)[number]
  id?: string
}

export const Input = ({
  className,
  value,
  onChange,
  onBlur,
  type = 'text',
  id,
}: Props) => {
  return (
    <input
      type={type}
      className={cc([className, styles['input']])}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      id={id}
    />
  )
}
