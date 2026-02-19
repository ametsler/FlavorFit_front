import { cn } from '@/shared/utils'
import Link from 'next/link'

import { IMenuItem } from '@/shared/components/custom-ui/nav-menu/nav-menu.types'

interface Props {
  menuItem: IMenuItem
  isActive: boolean
}
export function NavMenuItem({ menuItem, isActive }: Props) {
  return (
    <Link
      href={menuItem.href}
      className={cn(
        'hover:text-primary flex items-center gap-2 rounded-xl px-3 py-2 ' +
          'text-sm font-medium text-gray-50 transition-colors',
        isActive
          ? 'bg-[#1f2023] text-white hover:text-white'
          : 'bg-[#e9e9e9] text-[#696969] hover:bg-gray-200'
      )}
    >
      <menuItem.icon className={'size-5'} />
      {menuItem.label}
    </Link>
  )
}
