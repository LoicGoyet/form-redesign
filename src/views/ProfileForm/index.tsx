'use client'

// eslint-disable-next-line import/named
import { FormikHelpers } from 'formik'
import * as React from 'react'
import { PasswordWidget } from '@components/form/PasswordWidget'
import { SubmitWidget } from '@components/form/SubmitWidget'
import { TextWidget } from '@components/form/TextWidget'
import { Form } from '../../components/form/Form'

import {
  ProfileForm,
  ProfileForm as ProfileFormType,
  profileFormSchema,
} from './type'

const initialValue = {
  email: '',
  password: '',
  confirmPassword: '',
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

const ProfileForm = () => {
  const handleSubmit = async (
    values: ProfileFormType,
    formikHelper: FormikHelpers<ProfileFormType>
  ) => {
    const response = await serviceFn(values)

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
        initialValues={initialValue}
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
