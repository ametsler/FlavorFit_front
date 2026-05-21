'use client'

import {
  GetRecipesQuery,
  GetRecipesQueryVariables,
  RecipeFilterInput,
  Sorting
} from '@/__generated__/graphql'
import { useCallback, useState } from 'react'

interface Props {
  fetchMore: (options: {
    variables: GetRecipesQueryVariables
    updateQuery: (
      previousQueryResult: GetRecipesQuery,
      options: { fetchMoreResult?: GetRecipesQuery }
    ) => GetRecipesQuery
  }) => Promise<unknown>
  page: number
  setPage: (page: number) => void
  input: RecipeFilterInput
  sort: Sorting
  hasMore?: boolean
}

export function useFetchMoreRecipes({
  fetchMore,
  page,
  setPage,
  input,
  sort,
  hasMore
}: Props) {
  const [isFetchingMore, setIsFetchingMore] = useState(false)

  const loadMore = useCallback(async () => {
    if (isFetchingMore || !hasMore) return

    const nextPage = page + 1
    setIsFetchingMore(true)

    try {
      await fetchMore({
        variables: {
          input: {
            ...input,
            page: nextPage,
            sortBy: sort
          }
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev

          setPage(nextPage)

          return {
            ...prev,
            recipes: {
              ...fetchMoreResult.recipes,
              items: [...prev.recipes.items, ...fetchMoreResult.recipes.items]
            }
          }
        }
      })
    } finally {
      setIsFetchingMore(false)
    }
  }, [fetchMore, hasMore, input, isFetchingMore, page, setPage, sort])

  return {
    loadMore,
    isFetchingMore
  }
}
