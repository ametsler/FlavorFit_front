import type { Metadata } from 'next'
import { Suspense } from 'react'

import { RecipeDetails } from '@/features/recipe/RecipeDetails'
import { RecipesCatalogLoader } from '@/features/recipes/recipes-catalog/RecipesCatalogLoader'

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'Recipe' }
}

export default function Page() {
  return (
    <Suspense fallback={<RecipesCatalogLoader />}>
      <RecipeDetails />
    </Suspense>
  )
}
