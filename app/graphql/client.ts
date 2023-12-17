import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

/**
 * GraphQL client.
 * - ref: https://www.apollographql.com/docs/react/api/core/ApolloClient/
 */
const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.SUPABASE_STORE_GRAPHQL_URL,
    headers: {
      apikey: process.env.SUPABASE_API_KEY || '',
    },
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
