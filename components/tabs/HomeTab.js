import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name='ios-home-outline' style={{color: tintColor}} />
    }
  }

  render() {
    return (
      <View>
        <Text> HomeTab </Text>
      </View>
    );
  }
}
