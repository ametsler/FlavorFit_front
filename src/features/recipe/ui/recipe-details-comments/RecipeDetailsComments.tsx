import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

interface Props {
  comments?: GetRecipeBySlugQuery['recipeBySlug']['comments']
  likes?: number | null
  views?: number | null
  recipeId?: string
}

export function RecipeDetailsComments({
  comments,
  likes,
  views,
  recipeId
}: Props) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white p-5">
      RecipeDetailsComments
    </div>
  )
}
