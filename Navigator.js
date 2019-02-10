import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator } from 'react-native';
import { withApollo } from 'react-apollo';

import Home from './components/screen/Home';
import Post from './components/screen/Post';
import NewPost from './components/screen/NewPost';
import Splash from './components/screen/Splash';
import Login from './components/user/screen/Login';
import UpdatePost from './components/screen/UpdatePost';

const AppNavigator = createStackNavigator({
  home: {
    screen: withApollo(Home)
  },
  post: {
    screen: Post
  },
  newPost: {
    screen: NewPost
  },
  updatePost: {
    screen: UpdatePost
  }
});

const AppContainer = createAppContainer(AppNavigator);

const NavWrapper = ({ loading, user }) => {
  if (loading) return <ActivityIndicator size="large" />;
  if (!user) return <Login />
  return <AppContainer screenProps={{user}} />;
}

const userQuery = gql`
  query userQuery {
    user {
      id
      email
      posts(orderBy: createdAt_DESC) {
        id
        title
        body
      }
    }
  }
`

export default graphql(userQuery, {
  props: ({data}) => ({...data})
})(NavWrapper);