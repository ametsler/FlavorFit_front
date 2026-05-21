import { GetRecipeBySlugQuery } from '@/__generated__/graphql'
import { Heart, Share, ShoppingCart } from 'lucide-react'
import toast from 'react-hot-toast'

export function RecipeDetailsActions({
  recipeIngredients
}: {
  recipeIngredients: GetRecipeBySlugQuery['recipeBySlug']['ingredients']
}) {
  return (
    <div className="flex items-center gap-3 pt-1">
      <button
        className="opacity-60 transition-opacity hover:opacity-100"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href)
          toast.success('Link copied to clipboard!')
        }}
      >
        <Share size={20} />
      </button>

      <button className="opacity-60 transition-opacity hover:opacity-100">
        <ShoppingCart size={20} />
      </button>

      <button>
        <Heart
          size={24}
          fill="#e96e65"
          strokeOpacity={0}
        />
      </button>
    </div>
  )
}
