'use client'

import Link from 'next/link'

import { PAGES } from '@/shared/config/page.config'

interface Props {
  type: 'login' | 'register'
}

export function AuthChangeTypeForm({ type }: Props) {
  const isLogin = type === 'login'
  return (
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
  )
}
