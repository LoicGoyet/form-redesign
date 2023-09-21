import { ErrorMessage } from 'formik'
import * as React from 'react'
import { FormError } from '@components/design-system/FormError'

type Props = {
  className?: string
  name: string
}

export const Error = ({ className, name }: Props) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <FormError className={className}>{msg}</FormError>}
    </ErrorMessage>
  )
}
