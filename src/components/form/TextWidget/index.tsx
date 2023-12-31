// eslint-disable-next-line import/named
import { Field, FieldProps, useField } from 'formik'
import * as React from 'react'
import { FormGroup } from '@components/design-system/FormGroup'
import { Input } from '@components/design-system/Input'
import { Error } from '../Error'

type Props = {
  name: string
  label?: string
  className?: string
}

export const TextWidget = ({ name, label, className }: Props) => {
  const [, meta] = useField(name)
  const isError = !!meta.error && meta.touched

  return (
    <FormGroup className={className} label={label} name={name}>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <Input {...field} id={name} status={isError ? 'error' : 'idle'} />
        )}
      </Field>
      <Error name={name} />
    </FormGroup>
  )
}
