'use client'

// eslint-disable-next-line import/named
import { FormikHelpers } from 'formik'
import * as React from 'react'
import { PasswordWidget } from '@components/form/PasswordWidget'
import { SubmitWidget } from '@components/form/SubmitWidget'
import { TextWidget } from '@components/form/TextWidget'
import { Form } from '../../components/form/Form'

import { postLogin } from '../../service/postLogin'
import { Login, loginSchema } from './type'

const initialValue = {
  email: '',
  password: '',
}

const LoginForm = () => {
  const handleSubmit = async (
    values: Login,
    formikHelper: FormikHelpers<Login>
  ) => {
    const response = await postLogin(values)

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
        {({ errors, touched }) => (
          <>
            <TextWidget name="email" label="Email" />
            {!errors.email && !!touched.email ? (
              <>
                <PasswordWidget name="password" label="Password" />
                <SubmitWidget>Submit</SubmitWidget>
              </>
            ) : null}
          </>
        )}
      </Form>
    </div>
  )
}

export default LoginForm
