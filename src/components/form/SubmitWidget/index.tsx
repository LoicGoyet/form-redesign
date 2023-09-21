import { useFormikContext } from 'formik'
import * as React from 'react'

type Props = {
  className?: string
  children: React.ReactNode
}

export const SubmitWidget = ({ className, children }: Props) => {
  const { isSubmitting } = useFormikContext()

  return (
    <button type="submit" className={className} disabled={isSubmitting}>
      {children}
    </button>
  )
}
