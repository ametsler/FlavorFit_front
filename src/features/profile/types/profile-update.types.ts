import type { UpdateUserInput } from '@/__generated__/graphql'

export type TProfileForm = Omit<UpdateUserInput, 'password'>
