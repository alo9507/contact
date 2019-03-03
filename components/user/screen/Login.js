import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { withApollo } from 'react-apollo';

import CreateUser from '../CreateUser';
import LoginUser from '../LoginUser';

class Login extends Component {
  
  state = {
    register: false
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.logo}
          source={require('../../../assets/Contact.png')}
        />
      {
        this.state.register ? (
          <CreateUser {...this.props}/>
        ) : (
          <LoginUser {...this.props}/>
        )
      }
      <Button 
      onPress={() => this.setState({ register: !this.state.register })}
      title={this.state.register ? 'Switch to Login' : 'Switch to Register'}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#7B466A"
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  }
});

export default withApollo(Login);
