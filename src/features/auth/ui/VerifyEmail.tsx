'use client'

import { VerifyEmailDocument } from '@/__generated__/graphql'
import { useMutation } from '@apollo/client/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

import { PAGES } from '@/shared/config/page.config'

export function VerifyEmail() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const token = searchParams.get('token')

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
    if (token) {
      verifyEmail({ variables: { token } })
    }
  }, [token, verifyEmail])

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-lg">Verifying email...</p>
    </div>
  )
}
