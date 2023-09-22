'use client'

// eslint-disable-next-line import/named
import { FormikHelpers } from 'formik'
import * as React from 'react'
import { PasswordWidget } from '@components/form/PasswordWidget'
import { SubmitWidget } from '@components/form/SubmitWidget'
import { TextWidget } from '@components/form/TextWidget'
import { Form } from '../../components/form/Form'

import { getProfile } from '../../service/getProfile'
import { postProfile } from '../../service/postProfile'
import {
  ProfileForm,
  ProfileForm as ProfileFormType,
  profileFormSchema,
} from './type'

const ProfileForm = () => {
  const handleSubmit = async (
    values: ProfileFormType,
    formikHelper: FormikHelpers<ProfileFormType>
  ) => {
    const response = await postProfile(values)

    if (response.ok) {
      // Then we do whatever we want
      return null
    } else {
      return formikHelper.setErrors(response.errors)
    }
  }

  const validate = (values: ProfileForm) => {
    if (values.password !== values.confirmPassword) {
      return {
        confirmPassword: 'profileform.confirmPassword.error.diff',
      }
    }

    return {}
  }

  return (
    <div style={{ margin: '2rem auto', maxWidth: '27rem' }}>
      <Form
        onSubmit={handleSubmit}
        promiseInitialValues={getProfile()}
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        schema={profileFormSchema}
        validate={validate}
      >
        <TextWidget name="email" label="Email" />
        <PasswordWidget name="password" label="Password" />
        <PasswordWidget name="confirmPassword" label="Confirm password" />
        <SubmitWidget>Submit</SubmitWidget>
      </Form>
    </div>
  )
}

export default ProfileForm
