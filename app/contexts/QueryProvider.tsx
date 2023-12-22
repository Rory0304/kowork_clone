import React from "react";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useAuth } from "./AuthProvider";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

interface QueryProviderProps {
  children: React.ReactNode;
}

// - Apollo provider ref: https://www.apollographql.com/docs/react/get-started/
const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  const { accessToken } = useAuth();

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 3,
          },
        },
      })
  );

  const getHeaders = (accessToken: string | null) => {
    const headers: Record<string, string> = {
      apikey: process.env.SUPABASE_API_KEY!,
    };
    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return headers;
  };

  let apolloClient = new ApolloClient({
    link: new HttpLink({
      uri: process.env.SUPABASE_STORE_GRAPHQL_URL,
      headers: getHeaders(accessToken),
      fetch,
    }),
    cache: new InMemoryCache(),
  });


  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </QueryClientProvider>
  );
};

export default QueryProvider;
