'use client'

// eslint-disable-next-line import/named
import { Formik, Form as FormikForm, FormikHelpers, FormikProps } from 'formik'
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
}

export const Form = <Values extends object>({
  className,
  children,
  onSubmit,
  initialValues,
  schema,
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

    return error
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
