'use client'

import { VerifyEmailDocument } from '@/__generated__/graphql'
import { useMutation } from '@apollo/client/react'
import { useRouter } from 'next/navigation'
import { use, useEffect } from 'react'
import toast from 'react-hot-toast'

import { PAGES } from '@/shared/config/page.config'

export function VerifyEmail({
  searchParams
}: {
  searchParams: Promise<{ token: string }>
}) {
  const router = useRouter()

  const params = use(searchParams)

  const [verifyEmail] = useMutation(VerifyEmailDocument, {
    onCompleted: () => {
      toast.success('Электронная почта подтверждена')
      router.replace(PAGES.LOGIN)
    },
    onError: () => {
      toast.error('Неверная или истекшая ссылка')
    }
  })

  useEffect(() => {
    if (params.token) {
      verifyEmail({ variables: { token: params.token } })
    }
  }, [params.token, verifyEmail])

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg">Verifying email...</p>
    </div>
  )
}
