import { GraphQLClient } from 'graphql-request'

const BASE_API = 'https://graphqlzero.almansi.me/api'

export const client = new GraphQLClient(BASE_API)