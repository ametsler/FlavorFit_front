import type { Metadata } from 'next'
import { Suspense } from 'react'

import { VerifyEmail } from '@/features/auth/ui/VerifyEmail'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Подтверждение почты',
  ...NO_INDEX_PAGE
}

export default function Page({
  searchParams
}: {
  searchParams: Promise<{ token: string }>
}) {
  return (
    <Suspense fallback={<>...</>}>
      <VerifyEmail searchParams={searchParams} />
    </Suspense>
  )
}
