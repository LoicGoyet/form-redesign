'use client'

import dynamic from 'next/dynamic'

const LoginForm = dynamic(() => import('../src/views/LoginForm'), {
  ssr: false,
})

export default function Home() {
  return <LoginForm />
}
