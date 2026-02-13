'use client'

import { useLoginMutation } from '@/__generated__/output'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

interface Props {
  type: 'login' | 'register'
}

export function AuthForm({ type }: Props) {
  const {} = useLoginMutation()
  return (
    <div>
      <h1>{type === 'register' ? 'Регистрация' : 'Авторизация'}</h1>

      <form>
        <Input
          type="email"
          name={'email'}
          placeholder={'Email'}
          required
        />

        <Button>{type === 'register' ? 'Зарегистрироваться' : 'Войти'}</Button>
      </form>
    </div>
  )
}
