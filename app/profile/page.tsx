'use client'

import dynamic from 'next/dynamic'

const ProfileForm = dynamic(() => import('../../src/views/ProfileForm'), {
  ssr: false,
})

export default function Profile() {
  return <ProfileForm />
}
