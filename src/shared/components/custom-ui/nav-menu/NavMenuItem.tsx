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
        'hover:text-primary flex items-center gap-2 rounded-2xl px-4 py-2 ' +
          'text-sm font-medium transition-colors',
        isActive
          ? 'bg-[#1f2023] text-white hover:text-white'
          : 'bg-[#e9e9e9] text-gray-500 hover:bg-gray-200'
      )}
    >
      <menuItem.icon className={'size-5'} />
      {menuItem.label}
    </Link>
  )
}
