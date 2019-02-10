import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator } from 'react-native';
import { withApollo } from 'react-apollo';

import Ionicons from '@expo/vector-icons';

import Settings from './components/settings/Settings';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { View, Text, Button } from 'react-native';

import Home from './components/screen/Home';
import Post from './components/screen/Post';
import NewPost from './components/screen/NewPost';
import Splash from './components/screen/Splash';
import Login from './components/user/screen/Login';
import UpdatePost from './components/screen/UpdatePost';

import HomeTab from './components/tabs/HomeTab';

const AppNavigator = createStackNavigator({
  home: {
    screen: Home
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

const SettingsStack = createStackNavigator({
  Settings: withApollo(Settings)
});

const MainStack = createAppContainer(createBottomTabNavigator({
  Home: AppNavigator,
  Settings: SettingsStack
  },
  {
    tabBarOptions: {
      style: {backgroundColor: '#652450'},
      activeTintColor: "#3DE9E3",
      inactiveTintColor: 'grey',
    }
  })
);

const NavWrapper = ({ loading, user }) => {
  if (loading) return <ActivityIndicator size="large" />;
  if (!user) return <Login />
  return <MainStack screenProps={{user}} />;
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