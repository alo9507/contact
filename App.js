import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';

import NavWrapper from './Navigator';

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cjrxwgr884n110117rtupf3j8"
  }),
  cache: new InMemoryCache()
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <NavWrapper />
      </ApolloProvider>
    );
  }
}
