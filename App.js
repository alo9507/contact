import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context'
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

import { getToken } from './shared/loginUtils';

import NavWrapper from './Navigator';

const httpLink = new HttpLink({
  uri: "https://api.graph.cool/simple/v1/cjrxwgr884n110117rtupf3j8"
});

const wsLink = new WebSocketLink({
  uri: 'wss://subscriptions.us-west-2.graph.cool/v1/cjrxwgr884n110117rtupf3j8',
  options: {
    reconnect: true
  }
});

const wsAndHttpLink = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const authLink = setContext(async (req, { headers }) => {
  const token = await getToken();
  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  };
});

const link = authLink.concat(wsAndHttpLink);

const client = new ApolloClient({
  link,
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
