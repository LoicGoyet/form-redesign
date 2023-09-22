'use client'

import {
  Formik,
  // eslint-disable-next-line import/named
  FormikErrors,
  Form as FormikForm,
  // eslint-disable-next-line import/named
  FormikHelpers,
  // eslint-disable-next-line import/named
  FormikProps,
} from 'formik'
import { assocPath } from 'ramda'
import * as React from 'react'
import z from 'zod'

type Props<Values extends object> = {
  className?: string
  children: React.ReactNode | ((props: FormikProps<Values>) => React.ReactNode)
  onSubmit: (
    values: Values,
    helpers: FormikHelpers<Values>
  ) => void | Promise<unknown>
  initialValues: Values
  schema?: z.ZodSchema<Values>
  validate?: (values: Values) => FormikErrors<Values>
}

export const Form = <Values extends object>({
  className,
  children,
  onSubmit,
  initialValues,
  schema,
  validate = () => ({}),
}: Props<Values>) => {
  const handleValidate = (values: Values) => {
    let error = {}

    if (schema) {
      const parse = schema.safeParse(values)
      if (!parse.success)
        error = parse.error.issues.reduce(
          (errors, { path, message }) => assocPath(path, message, errors),
          {}
        )
    }

    return { ...error, ...validate(values) }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={handleValidate}
    >
      {(formikProps) => (
        <FormikForm className={className}>
          {typeof children === 'function' ? children(formikProps) : children}
        </FormikForm>
      )}
    </Formik>
  )
}
