// eslint-disable-next-line import/named
import { Field, FieldProps } from 'formik'
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
  return (
    <FormGroup className={className} label={label} name={name}>
      <Field name={name}>
        {({ field }: FieldProps) => <Input {...field} id={name} />}
      </Field>
      <Error name={name} />
    </FormGroup>
  )
}
