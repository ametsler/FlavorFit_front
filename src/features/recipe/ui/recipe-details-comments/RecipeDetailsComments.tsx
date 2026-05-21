import { AddNewComment } from './AddNewComment'
import { GetRecipeBySlugQuery } from '@/__generated__/graphql'
import dayjs from 'dayjs'
import { MessageCircleMore } from 'lucide-react'
import Image from 'next/image'

import { RecipeCardStatistic } from '@/shared/components/custom-ui/recipe-card/ui/badges/RecipeCardStatictic'

interface Props {
  comments?: GetRecipeBySlugQuery['recipeBySlug']['comments']
  hasLike: boolean
  likes?: number | null
  views?: number | null
  recipeId?: string
}

export function RecipeDetailsComments({
  comments,
  hasLike,
  likes,
  views,
  recipeId
}: Props) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-white p-5">
      <div>
        <div className={'mb-1.5 flex items-center'}>
          <MessageCircleMore className="mr-2 opacity-70" />
          <h2 className="text-xl font-semibold text-[#222222]">Comments</h2>
          <div className="ml-1.5 rounded-lg bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">
            {comments?.length}
          </div>
        </div>

        <RecipeCardStatistic
          hasLike={hasLike}
          views={views}
          likes={likes}
          size={'default'}
        />

        <div className="mt-3">
          {comments?.length ? (
            comments.map(comment => (
              <div
                key={comment.id}
                className="border-border mt-4 rounded-2xl border p-3"
              >
                <div className="flex items-center gap-1.5">
                  <Image
                    src={comment?.author.profile?.photo || ''}
                    alt={comment?.author.profile?.fullName || ''}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full object-cover"
                    draggable={false}
                  />
                  <span className="font-medium">
                    @{comment?.author.profile?.fullName || 'anonymous'}
                  </span>
                </div>

                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-600">
                    {comment.content}
                  </p>

                  <p className="mt-1.5 text-xs font-medium text-gray-500">
                    {dayjs(comment.createdAt).format('MMMM D, YYYY')}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">
              Нет комментариев. Станьте первыми!
            </p>
          )}
        </div>
      </div>

      <AddNewComment recipeId={recipeId} />
    </div>
  )
}
