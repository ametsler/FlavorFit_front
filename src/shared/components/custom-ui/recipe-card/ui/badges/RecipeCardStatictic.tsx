import { recipeCardFooterTextVariants } from '../../styles/recipe-card.styles'
import { TRecipeCardSize } from '../../types/recipe-card.types'
import { Eye, Heart } from 'lucide-react'

import { formatCompactNumber } from '@/shared/utils/format-compact-number.util'

interface Props {
  hasLike: boolean
  views?: number | null
  likes?: number | null
  size: TRecipeCardSize
}

export function RecipeCardStatistic({ hasLike, views, likes, size }: Props) {
  return (
    <div className="flex items-center gap-4">
      <span className={recipeCardFooterTextVariants({ size })}>
        <Heart
          className={`${size === 'sm' ? 'size-3.5' : 'size-4'} ${hasLike ? 'text-red-500' : ''}`}
          fill={hasLike ? 'currentColor' : 'none'}
        />
        {formatCompactNumber(likes)}
      </span>

      <span className={recipeCardFooterTextVariants({ size })}>
        <Eye className={size === 'sm' ? 'size-3.5' : 'size-4'} />
        {formatCompactNumber(views)}
      </span>
    </div>
  )
}
