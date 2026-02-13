'use client'

import { LoginDocument, RegisterDocument } from '@/__generated__/graphql'
import { useMutation } from '@apollo/client/react'
import Link from 'next/link'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
  const isLogin = type === 'login'
  const [register, { data, loading }] = useMutation(
    isLogin ? LoginDocument : RegisterDocument
  )

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

        <form className={'space-y-3'}>
          <Input
            type="email"
            name={'email'}
            placeholder={'Email'}
            required
          />

          <div className={'text-center'}>
            <Button
              type="submit"
              disabled={loading}
            >
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </div>
        </form>

        <div className={'mt-3 text-center'}>
          {isLogin ? (
            <div>
              <Link
                href={PAGES.REGISTER}
                className={'underline'}
              >
                Нет аккаунта? Заполните форму регистрации
              </Link>
            </div>
          ) : (
            <div>
              <Link
                href={PAGES.LOGIN}
                className={'underline'}
              >
                Есть акканут?
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
