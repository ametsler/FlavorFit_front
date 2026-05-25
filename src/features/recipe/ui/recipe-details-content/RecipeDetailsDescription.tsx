import { GetRecipeBySlugQuery } from '@/__generated__/graphql'

interface Props {
  recipe?: GetRecipeBySlugQuery['recipeBySlug']
}

export function RecipeDetailsDescription({ recipe }: Props) {
  return (
    <div className="mt-5">
      <div className="mb-1 font-semibold">Описание:</div>

      <div className="mb-1 text-sm opacity-65">{recipe?.description}</div>

      <div className="flex flex-wrap items-center gap-1">
        {recipe?.tags?.map(tag => (
          <span
            key={tag.name}
            className="text-primary-dark mb-2 text-sm font-semibold"
          >
            #{tag.name}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="font-semibold">{recipe?.carbohydrates}g</span>
          <span className="text-sm opacity-65">Углеводы</span>
        </div>

        <span className="mb-0.5 text-3xl">·</span>

        <div className="flex items-center gap-1">
          <span className="font-semibold">{recipe?.protein}g</span>
          <span className="text-sm opacity-65">Белки</span>
        </div>

        <span className="mb-0.5 text-3xl">·</span>

        <div className="flex items-center gap-1">
          <span className="font-semibold">{recipe?.fats}g</span>
          <span className="text-sm opacity-65">Жиры</span>
        </div>

        <span className="mb-0.5 text-3xl">·</span>

        <div className="flex items-center gap-1">
          <span className="font-semibold">{recipe?.fiber}g</span>
          <span className="text-sm opacity-65">Волокна</span>
        </div>
      </div>
    </div>
  )
}
