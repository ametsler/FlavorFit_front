'use client'
import { Bell, Headset } from 'lucide-react'
import Link from 'next/link'

import { useAuth } from '@/features/auth/hooks/useAuth'
import { Logout } from '@/features/auth/ui/Logout'
import { navMenuItem } from '@/features/layout/header/nav.data'

import { NavMenu } from '@/shared/components/custom-ui/nav-menu/NavMenu'
import { UserInfo } from '@/shared/components/custom-ui/user-info/UserInfo'
import { Button } from '@/shared/components/ui/button'

import { PAGES } from '@/shared/config/page.config'

export function Header() {
  const { user } = useAuth()

  return (
    <header className={'flex items-center justify-between p-5'}>
      <div className={'flex items-center gap-8'}>
        <Link
          href={PAGES.DASHBOARD}
          className="from-primary to-primary-dark flex size-9 items-center justify-center rounded-full bg-linear-to-b text-xl font-black text-white"
        >
          F
        </Link>
        <NavMenu menu={navMenuItem} />
      </div>

      <div className={'flex items-center'}>
        <Button
          variant={'soft'}
          className={'mr-2 rounded-full'}
        >
          <Headset className={'size-5'} />
        </Button>
        <Button
          variant={'soft'}
          className={'mr-6 rounded-full'}
        >
          <Bell className={'size-5'} />
        </Button>

        <Logout />

        <UserInfo
          avatarUrl="https://avatars.githubusercontent.com/u/0?v=4"
          name={'Без имени'}
          email={user?.email ?? ''}
        />
      </div>
    </header>
  )
}
