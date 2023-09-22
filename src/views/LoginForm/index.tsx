'use client'

// eslint-disable-next-line import/named
import { FormikHelpers } from 'formik'
import * as React from 'react'
import { PasswordWidget } from '@components/form/PasswordWidget'
import { SubmitWidget } from '@components/form/SubmitWidget'
import { TextWidget } from '@components/form/TextWidget'
import { Form } from '../../components/form/Form'

import { Login, loginSchema } from './type'

const initialValue = {
  email: '',
  password: '',
}

const serviceFn = async <Values extends object>(
  values: Values
): Promise<
  | {
      ok: true
    }
  | {
      ok: false
      errors: Partial<Record<keyof Values, string>>
    }
> => {
  console.log(values)
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const isOk = Math.random() > 0.5

  if (isOk) {
    return { ok: true }
  }

  return {
    ok: false,
    errors: Object.keys(values).reduce(
      (acc, key) => ({
        ...acc,
        [key]: 'test',
      }),
      {}
    ),
  }
}

const LoginForm = () => {
  const handleSubmit = async (
    values: Login,
    formikHelper: FormikHelpers<Login>
  ) => {
    const response = await serviceFn(values)

    if (response.ok) {
      // Then we do whatever we want
      return null
    } else {
      return formikHelper.setErrors(response.errors)
    }
  }

  return (
    <div style={{ margin: '2rem auto', maxWidth: '27rem' }}>
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValue}
        schema={loginSchema}
      >
        <TextWidget name="email" label="Email" />
        <PasswordWidget name="password" label="Password" />
        <SubmitWidget>Submit</SubmitWidget>
      </Form>
    </div>
  )
}

export default LoginForm
