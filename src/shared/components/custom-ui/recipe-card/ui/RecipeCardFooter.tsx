import { TRecipeCardSize } from '../types/recipe-card.types'
import { RecipeCardDifficultyBadge } from './badges/RecipeCardDifficultyBadge'
import { Difficulty } from '@/__generated__/graphql'

import { RecipeCardStatistic } from '@/shared/components/custom-ui/recipe-card/ui/badges/RecipeCardStatictic'

interface Props {
  hasLike: boolean
  views?: number | null
  likes?: number | null
  difficultyLevel?: Difficulty
  size: TRecipeCardSize
}

export function RecipeCardFooter({
  hasLike,
  views,
  likes,
  difficultyLevel,
  size
}: Props) {
  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      <RecipeCardDifficultyBadge
        difficultyLevel={difficultyLevel || Difficulty.Easy}
        size={size}
      />

      <RecipeCardStatistic
        hasLike={hasLike}
        views={views}
        likes={likes}
        size={size}
      />
    </div>
  )
}
