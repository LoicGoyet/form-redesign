import cc from 'classcat'
import * as React from 'react'
import AppendBtn from './compounds/AppendBtn'
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

export type Props = {
  className?: string
  value: string | number
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onBlur: React.FocusEventHandler<HTMLInputElement>
  type?: (typeof types)[number]
  id?: string
  append?: React.ReactNode
  status?: 'idle' | 'error'
}

export const Input = ({
  className,
  value,
  onChange,
  onBlur,
  type = 'text',
  id,
  append,
  status = 'idle',
}: Props) => {
  return (
    <div
      className={cc([className, styles['input'], styles[`input--${status}`]])}
    >
      <input
        className={cc({
          [styles['input__native']]: true,
          [styles['input__native--has-append']]: !!append,
        })}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
      />
      {append}
    </div>
  )
}

Input.AppendBtn = AppendBtn
