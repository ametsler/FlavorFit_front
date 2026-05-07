'use client'

import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  type: 'login' | 'register'
}

export function AuthChangeTypeForm({ type }: Props) {
  const isLogin = type === 'login'
  return (
    <div className={'mt-4 text-center text-sm'}>
      {isLogin ? (
        <div>
          <div>
            Нет аккаунта?{' '}
            <Link
              href={PAGES.REGISTER}
              className={'link-simple'}
            >
              Регистрация
            </Link>
          </div>
          <div className="mt-2">
            <Link
              href={PAGES.FORGOT_PASSWORD}
              className="link-simple"
            >
              Забыли пароль?
            </Link>
          </div>
        </div>
      ) : (
        <div>
          Есть акканут?{' '}
          <Link
            href={PAGES.LOGIN}
            className={'link-simple'}
          >
            Войти
          </Link>
        </div>
      )}
    </div>
  )
}
