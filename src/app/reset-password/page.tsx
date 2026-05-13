import type { Metadata } from 'next'
import { Suspense } from 'react'

import ResetPassword from '@/features/auth/ui/ResetPassword'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Восстановление пароля',
  ...NO_INDEX_PAGE
}

export default function Page({
  searchParams
}: {
  searchParams: Promise<{ token: string }>
}) {
  return (
    <Suspense fallback={<>...</>}>
      <ResetPassword searchParams={searchParams} />
    </Suspense>
  )
}
