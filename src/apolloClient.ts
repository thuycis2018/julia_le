import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';

const dynamicLink = new ApolloLink((operation) => {
  const { uri } = operation.getContext();
  const link = new HttpLink({ uri });
  
  return link.request(operation);
});

const client = new ApolloClient({
  link: from([dynamicLink]),
  cache: new InMemoryCache(),
});

export default client;
