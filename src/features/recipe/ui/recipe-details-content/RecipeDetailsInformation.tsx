import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

interface Props {
  recipe?: GetRecipeBySlugQuery['recipeBySlug']
}

export function RecipeDetailsInformation({ recipe }: Props) {
  return (
    <div>
      <div className="flex items-start justify-between">
        <h1 className="text-4xl leading-tight font-bold italic">
          {recipe?.title}
        </h1>
      </div>
    </div>
  )
}
