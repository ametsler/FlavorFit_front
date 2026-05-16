'use client'

import { RecipesBanners } from './recipes-banners/RecipesBanners'
import { RecipeSidebar } from './recipes-sidebar/RecipeSidebar'
import { MealType } from '@/shared/types'
import { parseAsStringEnum, useQueryState, useQueryStates } from 'nuqs'

import { useDebounce } from '@/shared/hooks/useDebounce'

export function RecipesDashboard() {
  const [searchTerm, setSearchTerm] = useQueryState('q', {
    defaultValue: ''
  })

  const [filters, setFilters] = useQueryStates({
    mealType: parseAsStringEnum(Object.values(MealType))
  })

  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  return (
    <div className="grid grid-cols-[1fr_minmax(0,5fr)] gap-7">
      <RecipeSidebar
        searchTerm={searchTerm}
        filters={filters}
        setSearchTerm={setSearchTerm}
        setFilters={setFilters}
      />
      <main>
        <RecipesBanners />
      </main>
    </div>
  )
}
