'use client'

import * as React from 'react'
import { PasswordWidget } from '@components/form/PasswordWidget'
import { TextWidget } from '@components/form/TextWidget'
import { Form } from '../../components/form/Form'

import { Login, loginSchema } from './type'

const initialValue = {
  email: '',
  password: '',
}

const LoginForm = () => {
  const handleSubmit = (values: Login) => {
    console.log(values)
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
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}

export default LoginForm
