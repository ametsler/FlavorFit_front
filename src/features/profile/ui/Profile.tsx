'use client'

import { ProfileForm } from './ProfileForm'
import { GetProfileDocument } from '@/__generated__/graphql'
import { useQuery } from '@apollo/client/react'

export function Profile() {
  const { data, loading } = useQuery(GetProfileDocument)

  if (loading || !data?.me) {
    return <div>Загрузка...</div>
  }

  return <ProfileForm data={data} />
}
