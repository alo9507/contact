import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ActivityIndicator } from 'react-native';
import { withApollo } from 'react-apollo';

import { Ionicons } from '@expo/vector-icons';

import Settings from './components/settings/Settings';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import { View, Text, Button } from 'react-native';

import Home from './components/screen/Home';
import Post from './components/screen/Post';
import NewPost from './components/screen/NewPost';
import Splash from './components/screen/Splash';
import Login from './components/user/screen/Login';
import UpdatePost from './components/screen/UpdatePost';
import MyProfile from './components/screen/MyProfile';

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
  },
  {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#652450",
      borderBottomWidth: 0
    },
    headerTitleStyle: {
      color: "#3DE9E3"
    },
    headerTintColor: "#3DE9E3"
  }
  });

const SettingsStack = createStackNavigator({
  Settings: {
    screen: withApollo(Settings)
  }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#652450",
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        color: "#3DE9E3"
      },
      headerTintColor: "#3DE9E3"
    }
  }
);

const ProfileStack = createStackNavigator({
  MyProfile: {
    screen: withApollo(MyProfile)
  }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#652450",
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        color: "#3DE9E3"
      },
      headerTintColor: "#3DE9E3"
    }
  }
);

const MainStack = createAppContainer(createBottomTabNavigator({
  SpotFeed: {
    screen: AppNavigator,
    navigationOptions: {
      header:null,
      tabBarIcon: ({focused}) => (
          <Ionicons
              name={'ios-planet'}
              size={45}
              style={{ color: focused ? '#33A3F4' : '#949494'}}
          />
      )
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      header: null,
      tabBarIcon: ({focused}) => (
        <Ionicons
            name={'md-settings'}
            size={45}
            style={{ color: focused ? '#33A3F4' : '#949494'}}
        />
    )
      }
    },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      header: null,
      tabBarIcon: ({focused}) => (
        <Ionicons
            name={'md-person'}
            size={45}
            style={{ color: focused ? '#33A3F4' : '#949494'}}
        />
      )
      }
    }
  },
  {
    initialRouteName: 'SpotFeed',
    order: ['Profile', 'SpotFeed', 'Settings'],
    tabBarOptions: {
      style: {backgroundColor: '#652450'},
      activeTintColor: "#3DE9E3",
      inactiveTintColor: 'grey',
      showLabel: false
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