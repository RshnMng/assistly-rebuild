import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const defaultOptions: ApolloClient.DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  mutate: {
    errorPolicy: "all",
  },
};

export const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000"; // if the app is in development use url of local host, if not use url from hosted vercel url

const httpLink = new HttpLink({
  uri: `${BASE_URL}/api/graphql`,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

export default client;
