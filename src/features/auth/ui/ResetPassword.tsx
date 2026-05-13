'use client'

import { ResetPasswordDocument } from '@/__generated__/graphql'
import { useMutation } from '@apollo/client/react'
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile'
import { useRouter } from 'next/navigation'
import { use, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { PAGES } from '@/shared/config/page.config'

interface FormData {
  password: string
}

export default function ResetPassword({
  searchParams
}: {
  searchParams: Promise<{ token: string }>
}) {
  const router = useRouter()

  const params = use(searchParams)

  const { register, handleSubmit } = useForm<FormData>()

  const [resetPassword, { loading }] = useMutation(ResetPasswordDocument, {
    onCompleted: () => {
      toast.success('Пароль успешно изменен')
      router.replace(PAGES.LOGIN)
    },
    onError: () => {
      toast.error('Некорректная или истекшая ссылка')
      ref.current?.reset()
      setCaptchaToken(null)
    }
  })

  const ref = useRef<TurnstileInstance | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const onSubmit = (data: FormData) => {
    if (!captchaToken) {
      toast.error('Пожалуйста, пройдите CAPTCHA', {
        id: 'captcha-error'
      })
      return
    }

    resetPassword({
      variables: {
        data: {
          token: params.token,
          newPassword: data.password
        }
      },
      context: {
        headers: {
          'cf-turnstile-token': captchaToken
        }
      }
    })
  }

  return (
    <div className="flex h-screen">
      <div className="relative m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-white shadow-lg">
        <h1 className="mb-5 text-center text-[2.3rem] font-bold">
          Reset Password
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3"
        >
          <Input
            type="password"
            {...register('password', { required: true, minLength: 6 })}
            placeholder="Введите новый пароль"
          />

          <div className="flex scale-80 justify-center pt-2">
            <Turnstile
              ref={ref}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={token => setCaptchaToken(token)}
              onExpire={() => setCaptchaToken(null)}
              options={{
                theme: 'light'
              }}
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              disabled={loading}
              variant="secondary"
            >
              Reset password
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
