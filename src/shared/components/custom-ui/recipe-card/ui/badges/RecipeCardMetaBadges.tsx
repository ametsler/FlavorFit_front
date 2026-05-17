import { TRecipeCardSize } from '../../types/recipe-card.types'
import { RecipeCardBadge } from './RecipeCardBadge'
import { GetRecipesQuery } from '@/__generated__/graphql'
import { Clock4, Flame } from 'lucide-react'

interface Props {
  recipe: GetRecipesQuery['recipesPageable'][0]
  size: TRecipeCardSize
}

export function RecipeCardMetaBadges({ recipe, size }: Props) {
  return (
    <div className="mt-4 flex items-center gap-2">
      <RecipeCardBadge size={size}>{recipe.cuisineType}</RecipeCardBadge>

      <RecipeCardBadge
        Icon={Flame}
        size={size}
      >
        {recipe.calories}kcal
      </RecipeCardBadge>

      {size !== 'sm' ? (
        <RecipeCardBadge
          Icon={Clock4}
          size={size}
        >
          {recipe.cookTime}min
        </RecipeCardBadge>
      ) : (
        <RecipeCardBadge size={size}>+1</RecipeCardBadge>
      )}
    </div>
  )
}
