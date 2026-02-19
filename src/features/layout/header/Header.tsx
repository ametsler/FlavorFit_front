'use client'
import { navMenuItem } from '@/features/layout/header/nav.data'

import { NavMenu } from '@/shared/components/custom-ui/nav-menu/NavMenu'

export function Header() {
  return (
    <header className={'p-4'}>
      <NavMenu menu={navMenuItem} />
    </header>
  )
}
