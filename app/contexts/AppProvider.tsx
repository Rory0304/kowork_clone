import React from "react";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../graphql/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface AppProviderProps {
  children: React.ReactNode;
}

// - Apollo provider ref: https://www.apollographql.com/docs/react/get-started/
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
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

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </QueryClientProvider>
  );
};
export default AppProvider;
