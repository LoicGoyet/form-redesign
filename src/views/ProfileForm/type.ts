import z from 'zod'

export const profileFormSchema = z.object({
  email: z
    .string({
      required_error: 'profileform.email.error.required',
      invalid_type_error: 'profileform.email.error.type',
    })
    .email({
      message: 'profileform.email.error.mail',
    }),
  password: z
    .string({
      required_error: 'profileform.email.error.required',
      invalid_type_error: 'profileform.email.error.type',
    })
    .min(8, {
      message: 'profileform.password.error.min',
    }),
  confirmPassword: z
    .string({
      required_error: 'profileform.email.error.required',
      invalid_type_error: 'profileform.email.error.type',
    })
    .min(8, {
      message: 'profileform.password.error.min',
    }),
})

export type ProfileForm = z.infer<typeof profileFormSchema>
