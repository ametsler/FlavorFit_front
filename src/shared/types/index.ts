export interface ISelectItem {
  value: string
  label: string
  badgeValue?: string
}

export const MealType = {
  Breakfast: 'BREAKFAST',
  Dessert: 'DESSERT',
  Dinner: 'DINNER',
  Drinks: 'DRINKS',
  Lunch: 'LUNCH',
  Snack: 'SNACK'
} as const

export type MealType = (typeof MealType)[keyof typeof MealType]
