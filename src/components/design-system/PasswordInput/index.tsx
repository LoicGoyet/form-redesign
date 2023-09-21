import * as React from 'react'
import { Input, Props as InputProps } from '../Input'

type Props = Omit<InputProps, 'type'>

const PasswordInput = (props: Props) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const handleVisibleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      setIsVisible((isVisible) => !isVisible)
    },
    [setIsVisible]
  )

  return (
    <Input
      type={isVisible ? 'text' : 'password'}
      {...props}
      append={<Input.AppendBtn onClick={handleVisibleClick}>0</Input.AppendBtn>}
    />
  )
}

export default PasswordInput
