'use client'

import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

interface Props {
  recipe?: GetRecipeBySlugQuery['recipeBySlug']
}

export function RecipeDetailsContent({ recipe }: Props) {
  return (
    <div>
      <div className="rounded-2xl bg-white p-5">RecipeDetailsContent</div>
    </div>
  )
}
