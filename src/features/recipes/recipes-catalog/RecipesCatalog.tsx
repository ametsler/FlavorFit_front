import { GetRecipesQuery } from '@/__generated__/graphql'
import { BookHeart, Star } from 'lucide-react'

import { RecipeCarousel } from '@/features/recipe-carousel/RecipeCarousel'

interface Props {
  recommended: GetRecipesQuery['recipesPageable']
  popular: GetRecipesQuery['recipesPageable']
}

export function RecipesCatalog({ recommended, popular }: Props) {
  return (
    <div>
      <RecipeCarousel
        Icon={BookHeart}
        title="Рекомендовано"
        size="default"
        recipes={recommended}
      />

      <RecipeCarousel
        Icon={Star}
        title="Популярные"
        size="sm"
        recipes={popular}
      />
    </div>
  )
}
