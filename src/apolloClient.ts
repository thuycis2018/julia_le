// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: process.env.URI_GRAPHQL_AWS_YELP,
//   }),
//   cache: new InMemoryCache(),
// });

// export default client;

import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';

// Function to create a dynamic HttpLink
const createHttpLink = (uri: string) => new HttpLink({ uri });

const dynamicLink = new ApolloLink((operation) => {
  // Dynamically set the URI based on operation
  const context = operation.getContext();
  const { uri } = context;

  // Create a new HttpLink for the request
  const link = createHttpLink(uri);
  
  return link.request(operation);
});

const client = new ApolloClient({
  link: from([dynamicLink]),
  cache: new InMemoryCache(),
});

export default client;
