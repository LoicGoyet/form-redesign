'use client'

import { ErrorMessage, Field } from 'formik'
import * as React from 'react'
import { TextWidget } from '@components/form/TextWidget'
import { Form } from '../../components/form/Form'

import { Login, loginSchema } from './type'

const LoginForm = () => {
  const handleSubmit = (values: Login) => {
    console.log(values)
  }

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        password: '',
      }}
      schema={loginSchema}
    >
      <TextWidget name="email" label="Email" />
      <TextWidget name="password" label="Password" />
      <button type="submit">Submit</button>
    </Form>
  )
}

export default LoginForm
