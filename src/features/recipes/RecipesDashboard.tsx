'use client'

import { RecipeSidebar } from './recipes-sidebar/RecipeSidebar'
import { MealType } from '@/shared/types'
import { useState } from 'react'

import { TRecipeFilters } from '@/features/recipes/recipes-sidebar/recipe-sidebar-menu.types'

export function RecipesDashboard() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filters, setFilters] = useState<TRecipeFilters>({
    mealType: MealType.Dessert
  })

  const setNewFilters = (f: Partial<TRecipeFilters>) => {
    setFilters(f as TRecipeFilters)
  }

  return (
    <div className="grid grid-cols-[1fr_minmax(0,5fr)] gap-7">
      <RecipeSidebar
        searchTerm={searchTerm}
        filters={filters}
        setSearchTerm={setSearchTerm}
        setFilters={setNewFilters}
      />
      <main>
        <div>Рецепт</div>
      </main>
    </div>
  )
}
