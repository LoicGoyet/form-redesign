// eslint-disable-next-line import/named
import { Field, FieldProps, useField } from 'formik'
import * as React from 'react'
import { FormGroup } from '@components/design-system/FormGroup'
import PasswordInput from '@components/design-system/PasswordInput'
import { Error } from '../Error'

type Props = {
  name: string
  label?: string
  className?: string
}

export const PasswordWidget = ({ name, label, className }: Props) => {
  const [, meta] = useField(name)
  const isError = !!meta.error && meta.touched

  return (
    <FormGroup className={className} label={label} name={name}>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <PasswordInput
            {...field}
            id={name}
            status={isError ? 'error' : 'idle'}
          />
        )}
      </Field>
      <Error name={name} />
    </FormGroup>
  )
}
