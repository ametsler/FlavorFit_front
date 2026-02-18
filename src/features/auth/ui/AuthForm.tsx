'use client'

import {
  AuthInput,
  LoginDocument,
  RegisterDocument
} from '@/__generated__/graphql'
import { cn } from '@/shared/utils'
import { useMutation } from '@apollo/client/react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { AuthChangeTypeForm } from '@/features/auth/ui/AuthChangeTypeForm'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
  const isLogin = type === 'login'

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

  const [auth, { loading }] = useMutation(
    isLogin ? LoginDocument : RegisterDocument,
    {
      onError: error => {
        toast.error(
          (isLogin ? 'Ошибка при входе' : 'Ошибка при регистрация') +
            error.errors[0] && ' ' + error.errors[0].message,
          {
            id: 'auth-error'
          }
        )
      },
      onCompleted: () => {
        toast.success(
          isLogin ? 'Выполнен вход' : 'Регистрация прошла успешно',
          {
            id: 'auth-success'
          }
        )
      }
    }
  )

  const handleAuth = (data: AuthInput) => {
    auth({
      variables: {
        data
      }
    })
  }

  return (
    <div className={'flex h-screen'}>
      <div
        className={
          'm-auto w-sm bg-linear-to-tr from-[#8062ee] to-[#a088fc] p-5 text-white shadow-lg'
        }
      >
        <h1 className={'mb-5 text-center text-4xl font-semibold'}>
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </h1>

        <form
          className={'space-y-3'}
          onSubmit={handleSubmit(handleAuth)}
        >
          <Input
            {...register('email', {
              required: true,
              pattern: {
                value: /^\S+@\S+\.\w{2,4}$/i,
                message: 'Некорректный формат почты.'
              }
            })}
            type="email"
            placeholder={'Email'}
            className={cn(
              'border border-transparent transition-colors',
              errors.email && 'border-red-500'
            )}
          />
          {errors.email && (
            <p className={'text-sm text-red-500'}>{errors.email.message}</p>
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
            placeholder={'Пароль'}
            className={cn(
              'border border-transparent transition-colors',
              errors.email && 'border-red-500'
            )}
          />
          {errors.password && (
            <p className={'text-sm text-red-500'}>{errors.password.message}</p>
          )}

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
      </div>
    </div>
  )
}
