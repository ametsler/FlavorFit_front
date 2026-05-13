'use client'

import { isEmailRegex } from '../utils/is-email.regex'
import {
  AuthInput,
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
  MeDocument,
  RegisterDocument,
  RegisterMutation,
  RegisterMutationVariables
} from '@/__generated__/graphql'
import { useApolloClient, useMutation } from '@apollo/client/react'
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { AuthChangeTypeForm } from '@/features/auth/ui/AuthChangeTypeForm'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
  const isLogin = type === 'login'

  const ref = useRef<TurnstileInstance | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)

  const client = useApolloClient()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<AuthInput>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [auth, { loading }] = useMutation<
    LoginMutation | RegisterMutation,
    LoginMutationVariables | RegisterMutationVariables
  >(isLogin ? LoginDocument : RegisterDocument, {
    onError: error => {
      toast.error(
        (isLogin ? 'Ошибка при входе' : 'Ошибка при регистрация') +
          (error as any).errors[0] && ' ' + (error as any).errors[0].message,
        {
          id: 'auth-error'
        }
      )
      ref.current?.reset()
      setCaptchaToken(null)
    },
    onCompleted: data => {
      const authData = 'login' in data ? data?.login : data?.register

      client.resetStore()

      client.writeQuery({
        query: MeDocument,
        data: {
          me: authData.user
        }
      })

      toast.success(isLogin ? 'Выполнен вход' : 'Регистрация прошла успешно', {
        id: 'auth-success'
      })

      router.replace(PAGES.DASHBOARD)
    }
  })

  const handleAuth = (data: AuthInput) => {
    if (!captchaToken) {
      toast.error('Пожалуйста, пройдите CAPTCHA', {
        id: 'captcha-error'
      })
      return
    }

    auth({
      variables: {
        data
      },
      context: {
        headers: {
          'cf-turnstile-token': captchaToken
        }
      }
    })
  }

  return (
    <div className={'flex h-screen'}>
      <div
        className={
          'relative m-auto w-sm rounded-lg bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-10 text-white shadow-lg'
        }
      >
        <h1 className={'mb-5 text-center text-4xl font-semibold'}>
          {isLogin ? 'Вход' : 'Регистрация'}
        </h1>

        <form
          className={'space-y-3'}
          onSubmit={handleSubmit(handleAuth)}
        >
          <Input
            {...register('email', {
              required: true,
              pattern: {
                value: isEmailRegex,
                message: 'Некорректный формат почты.'
              }
            })}
            type="email"
            placeholder={'почта'}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className={'text-destructive -mt-1 block text-xs'}>
              {errors.email.message}
            </p>
          )}

          <Input
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: 'Пароль должен содержать не менее 6 символов.'
              }
              // pattern: {
              //   value: /^(?=.*[A-Z])[\d\W]{8}/gimu,
              //   message:
              //     'Пароль должен содержать минимум одну заглавную букву и быть не менее 8 символов.'
              // }
            })}
            type="password"
            placeholder={'пароль'}
            aria-invalid={!!errors.password}
          />
          {errors.password && (
            <p className={'text-destructive -mt-1 block text-xs'}>
              {errors.password.message}
            </p>
          )}

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

          <div className={'text-center'}>
            <Button
              type="submit"
              disabled={loading || !isValid}
            >
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </div>
        </form>

        <AuthChangeTypeForm type={type} />

        <Image
          src={'/images/emotions/salad.png'}
          alt={'Salad'}
          width={200}
          height={200}
          className={'absolute -bottom-16 -left-16 -rotate-12'}
          draggable={false}
        />
      </div>
    </div>
  )
}
