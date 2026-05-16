'use client'

import { RecipesBanners } from './recipes-banners/RecipesBanners'
import { RecipeSidebar } from './recipes-sidebar/RecipeSidebar'
import { GetRecipesDocument, RecipeFilterInput } from '@/__generated__/graphql'
import { MealType } from '@/shared/types'
import { useQuery } from '@apollo/client/react'
import { parseAsStringEnum, useQueryState, useQueryStates } from 'nuqs'
import { useMemo } from 'react'

import { RecipesCatalog } from '@/features/recipes/recipes-catalog/RecipesCatalog'
import { RecipesCatalogLoader } from '@/features/recipes/recipes-catalog/RecipesCatalogLoader'

import { useDebounce } from '@/shared/hooks/useDebounce'

export function RecipesDashboard() {
  const [searchTerm, setSearchTerm] = useQueryState('q', {
    defaultValue: ''
  })

  const [filters, setFilters] = useQueryStates({
    mealType: parseAsStringEnum(Object.values(MealType))
  })

  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  const commonInput: RecipeFilterInput = useMemo(
    () => ({
      // ...filters,
      searchTerm: debouncedSearchTerm
    }),
    [filters, debouncedSearchTerm]
  )

  const { data: recommendedRecipes, loading } = useQuery(GetRecipesDocument, {
    variables: {
      input: {
        ...commonInput,
        skip: 0,
        take: 10,
        sortBy: 'recommended'
      }
    },
    notifyOnNetworkStatusChange: true
  })

  const { data: popularRecipes, loading: popularLoading } = useQuery(
    GetRecipesDocument,
    {
      variables: {
        input: {
          ...commonInput,
          skip: 0,
          take: 10,
          sortBy: 'popularity'
        }
      },
      notifyOnNetworkStatusChange: true
    }
  )

  const isInitialLoading =
    (loading && !recommendedRecipes) || (popularLoading && !popularRecipes)

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
        {isInitialLoading ? (
          <RecipesCatalogLoader />
        ) : (
          <>
            <RecipesCatalog
              recommended={recommendedRecipes?.recipesPageable || []}
              popular={popularRecipes?.recipesPageable || []}
            />
          </>
        )}
      </main>
    </div>
  )
}
