import type { Metadata } from 'next'
import { Suspense } from 'react'

import { RecipesDashboard } from '@/features/recipes/RecipesDashboard'
import { RecipesCatalogLoader } from '@/features/recipes/recipes-catalog/RecipesCatalogLoader'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Recipes',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return (
    <Suspense fallback={<RecipesCatalogLoader />}>
      <RecipesDashboard />
    </Suspense>
  )
}
