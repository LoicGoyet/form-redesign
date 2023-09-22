'use client'

import cc from 'classcat'
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
import styles from './styles.module.scss'
import { useInitialValue } from './useInitialValue'

type Props<Values extends object> = {
  className?: string
  children: React.ReactNode | ((props: FormikProps<Values>) => React.ReactNode)
  onSubmit: (
    values: Values,
    helpers: FormikHelpers<Values>
  ) => void | Promise<unknown>
  schema?: z.ZodSchema<Values>
  validate?: (values: Values) => FormikErrors<Values>
  initialValues: Values
  promiseInitialValues?: Promise<Values>
}

export const Form = <Values extends object>({
  className,
  children,
  onSubmit,
  initialValues,
  promiseInitialValues,
  schema,
  validate = () => ({}),
}: Props<Values>) => {
  const [initValues, status] = useInitialValue(
    initialValues,
    promiseInitialValues
  )

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
      initialValues={initValues}
      onSubmit={onSubmit}
      validate={handleValidate}
      enableReinitialize={true}
    >
      {(formikProps) => (
        <FormikForm
          className={cc([className, styles[`form--${status}`]])}
          aria-disabled={status === 'ready'}
        >
          {typeof children === 'function' ? children(formikProps) : children}
        </FormikForm>
      )}
    </Formik>
  )
}
