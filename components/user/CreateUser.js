import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { StackActions, NavigationActions } from 'react-navigation';

import UserForm from './UserForm';

class CreateUser extends Component {
  
  createUser = async ({ email, password }) => {
    try {
      const user = await this.props.createUser({
        variables: {email, password}
      });
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
        <UserForm 
          type="Register"
          onSubmit={this.createUser}
        />
      </View>
    );
  }
}

const createUser = gql`
  mutation createUser($email: String!, $password: String!) {
    createUser(authProvider: { email: {email: $email, password: $password } }) {
      id
    }
  }
`;

const signinUser = gql`
  mutation signinUser($email: String!, $password: String!) {
    signinUser(email: {email: $email, password: $password}) {
      token
    }
  }
`;

const styles = StyleSheet.create({
  header: {
    color: "white"
  }
});

export default compose(
  graphql(createUser, { name: 'createUser' }),
  graphql(signinUser, { name: 'signinUser' })
)(CreateUser);