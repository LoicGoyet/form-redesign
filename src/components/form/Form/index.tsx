'use client'

// eslint-disable-next-line import/named
import { Formik, Form as FormikForm, FormikHelpers } from 'formik'
import { assocPath } from 'ramda'
import * as React from 'react'
import z from 'zod'

type Props<Values extends object> = {
  className?: string
  children: React.ReactNode
  onSubmit: (
    values: Values,
    helpers: FormikHelpers<Values>
  ) => void | Promise<unknown>
  initialValues: Values
  schema: z.ZodSchema<Values>
}

export const Form = <Values extends object>({
  className,
  children,
  onSubmit,
  initialValues,
  schema,
}: Props<Values>) => {
  const handleValidate = (values: Values) => {
    const parse = schema.safeParse(values)
    if (parse.success) return {}

    return parse.error.issues.reduce(
      (errors, { path, message }) => assocPath(path, message, errors),
      {}
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={handleValidate}
    >
      <FormikForm className={className}>{children}</FormikForm>
    </Formik>
  )
}
