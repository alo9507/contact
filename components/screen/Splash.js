import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

import { defaultContainerStyles } from '../../styles/defaultContainerStyles';

export default class Splash extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    setTimeout(
      () => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'home' })],
        });
        this.props.navigation.dispatch(resetAction);
      },
      3 * 1000
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('../../assets/contact.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderRadius: 75
  }
});
