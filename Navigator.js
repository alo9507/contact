import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';

import Home from './components/screen/Home';
import Post from './components/screen/Post';
import NewPost from './components/screen/NewPost';
import Splash from './components/screen/Splash';
import Login from './components/user/screen/Login';

const AppNavigator = createStackNavigator({
  auth: {
    screen: Login
  },
  splash: {
    screen: Splash
  },
  home: {
    screen: Home
  },
  post: {
    screen: Post
  },
  newPost: {
    screen: NewPost
  }
});

const AppContainer = createAppContainer(AppNavigator);

const NavWrapper = (props) => {
  return <AppContainer />;
  return <Login />;
}

export default NavWrapper;