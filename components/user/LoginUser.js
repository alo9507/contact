import React, { Component } from 'react';
import { View, Text } from 'react-native';

import UserForm from './UserForm';

export default class LoginUser extends Component {

  loginUser = () => {
    
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <UserForm 
          type="Login"
          onSubmit={this.loginUser()}
        />
      </View>
    );
  }
}
