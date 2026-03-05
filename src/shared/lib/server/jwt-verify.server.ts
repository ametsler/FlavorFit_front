'use server'

import { Role } from '@/__generated__/graphql'
import { jwtVerify } from 'jose'

type TAuthTokenData = { id: string; role: Role }
export async function jwtVerifyServer(accessToken: string) {
  try {
    const { payload }: { payload: TAuthTokenData } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )
    return payload
  } catch (e) {
    if (e instanceof Error && e.message.includes('exp claim')) {
      console.log('Token is expired')
      return null
    }

    console.log('Error verifying JWT:', e)
    return null
  }
}
