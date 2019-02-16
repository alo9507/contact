// GENERAL IMPORTS
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

// COMPONENT IMPORTS
  // 3rd Party Components
import { ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

  // Custom Components
import Splash from './components/screen/Splash';
import Home from './components/screen/Home';
import Settings from './components/settings/Settings';
import Login from './components/user/screen/Login';
import MyProfile from './components/screen/MyProfile';
import DetailProfile from './components/screen/DetailProfile';
import Chat from './components/screen/Chat';

import Post from './components/screen/Post';
import NewPost from './components/screen/NewPost';
import UpdatePost from './components/screen/UpdatePost';

// StackNavigators
const SpotFeedStack = createStackNavigator({
  home: {
    screen: Home
  },
  detailProfile: {
    screen: DetailProfile
  },
  chat: {
    screen: Chat
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

const TabNav = createAppContainer(createBottomTabNavigator({
  SpotFeed: {
    screen: SpotFeedStack,
    navigationOptions: {
      header:null,
      tabBarIcon: ({focused}) => (
          <Ionicons
              name={'ios-planet'}
              size={45}
              style={{ color: focused ? '#3DE9E3' : '#949494'}}
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
            style={{ color: focused ? '#3DE9E3' : '#949494'}}
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
            style={{ color: focused ? '#3DE9E3' : '#949494'}}
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
  return <TabNav screenProps={{user}} />;
}

// QUERIES
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

// DEFAULT EXPORT
export default graphql(userQuery, {
  props: ({data}) => ({...data})
})(NavWrapper);