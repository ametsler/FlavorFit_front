'use server'

import { CombinedGraphQLErrors } from '@apollo/client'
import { NextRequest } from 'next/server'

import { GRAPHQL_SERVER_URL } from '@/shared/config/api.config'

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/app.constants'

export async function getTokens(req: NextRequest) {
  const refreshToken = req.cookies.get(REFRESH_TOKEN)?.value
  if (!refreshToken) {
    req.cookies.delete(ACCESS_TOKEN)
    return null
  }
  const accessToken = req.cookies.get(ACCESS_TOKEN)?.value
  if (!accessToken) {
    try {
      const refreshResponse = await fetch(GRAPHQL_SERVER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          cookie: req.headers.get('cookie') ?? ''
        },
        body: JSON.stringify({
          query:
            'query {\n' +
            '    refreshToken {\n' +
            '        user {\n' +
            '            email\n' +
            '            role\n' +
            '        }\n' +
            '    }\n' +
            '}'
        })
      })

      if (!refreshResponse.ok) {
        return null
      }

      const setCookie = refreshResponse.headers.get('set-cookie')

      return {
        isRefreshedToken: true,
        setCookie
      }
    } catch (error) {
      if (!CombinedGraphQLErrors.is(error)) return

      for (const gqlError of error.errors) {
        if (
          gqlError.message.includes('Invalid token') &&
          gqlError.extensions?.code == 'UNAUTHENTICATED'
        ) {
          console.log('Access token is invalid. Deleting it.')
          req.cookies.delete(ACCESS_TOKEN)
          req.cookies.delete(REFRESH_TOKEN)
          return null
        }
      }
      return null
    }
  }
  return {
    refreshToken,
    accessToken
  }
}
