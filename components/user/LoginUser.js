import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { StackActions, NavigationActions } from 'react-navigation';

import { signIn } from '../../shared/loginUtils';
import UserForm from './UserForm';

class LoginUser extends Component {
  
  signinUser = async ({ email, password }) => {
    try {
      const signin = await this.props.signinUser({
        variables: {email, password}
      });
      signIn(signin.data.signinUser.token);
      this.props.client.resetStore();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <UserForm 
          type="Login"
          onSubmit={this.signinUser}
        />
      </View>
    );
  }
}

const signinUser = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(email: {email: $email, password: $password}) {
      token
    }
  }
`;

export default graphql(signinUser, { name: 'signinUser' })(LoginUser);
