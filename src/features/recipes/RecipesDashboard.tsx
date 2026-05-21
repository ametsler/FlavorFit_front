'use client'

import { RecipesBanners } from './recipes-banners/RecipesBanners'
import { RecipeSidebar } from './recipes-sidebar/RecipeSidebar'
import {
  GetRecipesDocument,
  RecipeFilterInput,
  Sorting
} from '@/__generated__/graphql'
import { useQuery } from '@apollo/client/react'
import { parseAsString, useQueryState, useQueryStates } from 'nuqs'
import { useMemo, useState } from 'react'

import { useFetchMoreRecipes } from '@/features/recipes/hooks/useFetchMoreRecipes'
import { RecipesCatalog } from '@/features/recipes/recipes-catalog/RecipesCatalog'
import { RecipesCatalogLoader } from '@/features/recipes/recipes-catalog/RecipesCatalogLoader'

import { useDebounce } from '@/shared/hooks/useDebounce'

export function RecipesDashboard() {
  const [searchTerm, setSearchTerm] = useQueryState('q', {
    defaultValue: ''
  })

  const [filters, setFilters] = useQueryStates({
    category: parseAsString.withDefault('')
  })

  const [recommendedPage, setRecommendedPage] = useState(1)
  const [popularPage, setPopularPage] = useState(1)

  const debouncedSearchTerm = useDebounce(searchTerm, 400)

  const commonInput: RecipeFilterInput = useMemo(
    () => ({
      ...filters,
      searchTerm: debouncedSearchTerm
    }),
    [filters, debouncedSearchTerm]
  )

  const {
    data: recommendedRecipes,
    loading,
    fetchMore: fetchMoreRecommended
  } = useQuery(GetRecipesDocument, {
    variables: {
      input: {
        ...commonInput,
        page: 1,
        limit: 4,
        sortBy: Sorting.Recommended
      }
    },
    notifyOnNetworkStatusChange: true
  })

  const {
    data: popularRecipes,
    loading: popularLoading,
    fetchMore: fetchMorePopular
  } = useQuery(GetRecipesDocument, {
    variables: {
      input: {
        ...commonInput,
        page: 1,
        limit: 5,
        sortBy: Sorting.Popularity
      }
    },
    notifyOnNetworkStatusChange: true
  })

  const recommendedPagination = useFetchMoreRecipes({
    fetchMore: fetchMoreRecommended,
    page: recommendedPage,
    setPage: setRecommendedPage,
    input: {
      ...commonInput,
      limit: 4
    },
    sort: Sorting.Recommended,
    hasMore: recommendedRecipes?.recipes.hasMore
  })

  const popularPagination = useFetchMoreRecipes({
    fetchMore: fetchMorePopular,
    page: popularPage,
    setPage: setPopularPage,
    input: {
      ...commonInput,
      limit: 5
    },
    sort: Sorting.Popularity,
    hasMore: popularRecipes?.recipes.hasMore
  })

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
              recommended={recommendedRecipes?.recipes.items || []}
              popular={popularRecipes?.recipes.items || []}
              recommendedHasMore={recommendedRecipes?.recipes.hasMore}
              popularHasMore={popularRecipes?.recipes.hasMore}
              isRecommendedFetchingMore={recommendedPagination.isFetchingMore}
              isPopularFetchingMore={popularPagination.isFetchingMore}
              onLoadMoreRecommended={recommendedPagination.loadMore}
              onLoadMorePopular={popularPagination.loadMore}
            />
          </>
        )}
      </main>
    </div>
  )
}
