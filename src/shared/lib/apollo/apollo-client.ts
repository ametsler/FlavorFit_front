import { IS_CLIENT } from '@/shared/constants/app.constants'
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'

import { errorLink } from '@/shared/lib/apollo/links/apollo-error.link'
import { httpLink } from '@/shared/lib/apollo/links/apollo-http.link'

const clientApolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  devtools: {
    enabled: true
  }
})

export const simpleApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  devtools: {
    enabled: true
  }
})

export const serverApolloClient = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache(),
  devtools: {
    enabled: true
  },
  ssrMode: true,
  defaultContext: {
    query: {
      fetchPolicy: 'no-cache'
    }
  }
})

export function getApolloClient() {
  return IS_CLIENT ? clientApolloClient : serverApolloClient
}
