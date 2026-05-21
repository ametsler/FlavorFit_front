import { ArrowUp } from 'lucide-react'
import { useState } from 'react'

import { Input } from '@/shared/components/ui/input'

interface Props {
  recipeId?: string
}

export function AddNewComment({ recipeId }: Props) {
  const [comment, setComment] = useState('')

  return (
    <form className="focus-within:border-primary/80 border-border mt-4 flex w-full items-center gap-2 rounded-4xl border-2 px-3 py-1 transition-colors">
      <Input
        type="text"
        placeholder="Add a new comment..."
        value={comment}
        onChange={e => setComment(e.target.value)}
        className="p-0 text-[0.92rem] tracking-normal"
      />
      <button
        className="rounded-full bg-[#222] p-1 text-white transition-colors hover:bg-[#222]/90 disabled:bg-gray-400"
        disabled={!comment.trim()}
        type="submit"
      >
        <ArrowUp className="size-5" />
      </button>
    </form>
  )
}
