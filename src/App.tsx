import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Sample } from "./Sample";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

export const App = () => (
  <ApolloProvider client={client}>
    <Sample />
  </ApolloProvider>
);
