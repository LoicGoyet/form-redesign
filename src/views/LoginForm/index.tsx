'use client'

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

const LoginForm = () => {
  const handleSubmit = async (values: Login) => {
    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return null
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
