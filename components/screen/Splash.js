import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(
      () => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'home' })],
        });
        this.props.navigation.dispatch(resetAction);
      },
      0.5 * 1000
    );
  }

  render() {
    return (
      <View>
        <Text> Splash </Text>
      </View>
    );
  }
}
