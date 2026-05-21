import {
  GetRecipeBySlugQuery,
  ToggleRecipeLikeDocument
} from '@/__generated__/graphql'
import { useMutation } from '@apollo/client/react'
import { Heart, Share, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

export function RecipeDetailsActions({
  recipeIngredients,
  recipeId,
  hasLike
}: {
  recipeIngredients: GetRecipeBySlugQuery['recipeBySlug']['ingredients']
  recipeId: string | undefined
  hasLike: boolean
}) {
  const [liked, setLiked] = useState<boolean>(hasLike)
  const [toggle] = useMutation(ToggleRecipeLikeDocument, {
    onCompleted: () => {
      setLiked(!liked)
    },
    onError: () => {
      toast.error('Произошла непредвиденная ошибка. Повторите позже')
    }
  })

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

      <button onClick={() => recipeId && toggle({ variables: { recipeId } })}>
        <Heart
          className={`size-5 ${liked ? 'text-red-500' : ''}`}
          fill={liked ? 'currentColor' : 'none'}
        />
      </button>
    </div>
  )
}
