import z from 'zod'

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'loginform.email.error.required',
      invalid_type_error: 'loginform.email.error.type',
    })
    .email({
      message: 'loginform.email.error.mail',
    }),
  password: z
    .string({
      required_error: 'loginform.email.error.required',
      invalid_type_error: 'loginform.email.error.type',
    })
    .min(8, {
      message: 'loginform.password.error.min',
    }),
})

export type Login = z.infer<typeof loginSchema>
