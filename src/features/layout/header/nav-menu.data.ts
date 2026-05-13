import {
  BookMarked,
  CalendarDays,
  ChartColumn,
  House,
  Settings,
  Store,
  Users,
  Utensils
} from 'lucide-react'

import { IMenuItem } from '@/shared/components/custom-ui/nav-menu/nav-menu.types'

import { PAGES } from '@/shared/config/page.config'

export const navMenuItem: IMenuItem[] = [
  {
    icon: House,
    label: 'Главная',
    href: PAGES.DASHBOARD
  },
  {
    icon: CalendarDays,
    label: 'Планы питания',
    href: PAGES.MEAL_PLANS
  },
  {
    icon: Utensils,
    label: 'Питание',
    href: PAGES.NUTRITION
  },
  {
    icon: ChartColumn,
    label: 'Аналитика',
    href: PAGES.ANALYTICS
  },
  {
    icon: Store,
    label: 'Заказать продукты',
    href: PAGES.ORDER_GROCERIES
  },
  {
    icon: BookMarked,
    label: 'Рецепты',
    href: PAGES.RECIPES
  },
  {
    icon: Settings,
    label: 'Профиль',
    href: PAGES.PROFILE
  }
]
