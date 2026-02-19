'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { NavMenuItem } from '@/shared/components/custom-ui/nav-menu/NavMenuItem'
import type { IMenuItem } from '@/shared/components/custom-ui/nav-menu/nav-menu.types'

interface Props {
  menu: IMenuItem[]
}

export function NavMenu({ menu }: Props) {
  const pathName = usePathname()
  return (
    <nav className={'flex items-center gap-2'}>
      {menu.map(item => (
        <NavMenuItem
          key={item.href}
          menuItem={item}
          isActive={!!match(item.href)(pathName)}
        />
      ))}
    </nav>
  )
}
