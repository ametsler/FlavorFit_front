import { GetRecipesQuery } from '@/__generated__/graphql'
import { cn } from '@/shared/utils'
import { BookHeart, Star } from 'lucide-react'

import { HeadingWithIcon } from '@/shared/components/custom-ui/heading-with-icon/HeadingWithIcon'
import { RecipeCard } from '@/shared/components/custom-ui/recipe-card/RecipeCard'

interface Props {
  recommended: GetRecipesQuery['recipesPageable']
  popular: GetRecipesQuery['recipesPageable']
}

export function RecipesCatalog({ recommended, popular }: Props) {
  return (
    <div>
      <div className="mb-6">
        <HeadingWithIcon
          className="mb-4"
          Icon={BookHeart}
        >
          Recommended
        </HeadingWithIcon>

        <div className="flex gap-4">
          {recommended &&
            recommended.map((recipe, index) => (
              <div
                key={index}
                className={cn(
                  'group transition-transform duration-300 will-change-transform hover:scale-[1.02]',
                  'basis-[22%] hover:-rotate-3'
                )}
              >
                <RecipeCard
                  recipe={recipe}
                  size={'default'}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="mb-6">
        <HeadingWithIcon
          className="mb-4"
          Icon={Star}
        >
          Popular
        </HeadingWithIcon>

        <div className="flex gap-4">
          {popular &&
            popular.map((recipe, index) => (
              <div
                key={index}
                className={cn(
                  'group transition-transform duration-300 will-change-transform hover:scale-[1.02]',
                  'basis-[12%] hover:-rotate-3'
                )}
              >
                <RecipeCard
                  recipe={recipe}
                  size={'sm'}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
