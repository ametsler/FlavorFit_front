import { TRecipeFilters } from './recipe-sidebar-menu.types'
import { MealType } from '@/shared/types'
import { CookingPot } from 'lucide-react'

import { ISidebarMenuAccordionItem } from '@/shared/components/custom-ui/sidebar-menu-accordion/sidebar-menu-accordion.types'

export const recipeSidebarMenuData: ISidebarMenuAccordionItem<
  keyof TRecipeFilters
>[] = [
  {
    isInitialOpen: true,
    icon: CookingPot,
    name: 'Meal Type',
    key: 'mealType',
    items: [
      {
        label: 'Breakfast',
        value: MealType.Breakfast
      },
      {
        label: 'Lunch',
        value: MealType.Lunch,
        badgeValue: '+1'
      },
      {
        label: 'Dinner',
        value: MealType.Dinner
      },
      {
        label: 'Snack',
        value: MealType.Snack
      },
      {
        label: 'Dessert',
        value: MealType.Dessert
      },
      {
        label: 'Drinks',
        value: MealType.Drinks
      }
    ]
  }
]
