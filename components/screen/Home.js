import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Fab, Icon } from 'native-base';

import defaultNavigationStyles from '../../styles/defaultNavigationStyles';

import Posts from '../Posts';
import defaultContainerStyles from '../../styles/defaultContainerStyles';
import { signOut } from '../../shared/loginUtils';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    ...defaultNavigationStyles
  }

  render() {
    return (
      <View style = {styles.container}>
        <Posts {...this.props}/>
        <Fab
          onPress={() => this.props.navigation.navigate('newPost')}
          style={styles.fab}
        >
          <Icon name="add" style={{color: "#652450"}} />
        </Fab>
        <Fab
          onPress={() => this.props.navigation.navigate('newPost')}
          style={styles.fab}
        >
          <Icon name="add" style={{color: "#3DE9E3", fontWeight: 'bold',}} />
        </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    ...defaultContainerStyles
  },
  newPost: {
    backgroundColor: '#82D8D8',
    padding: 20
  },
  fab: {
    backgroundColor: "#652450"
  }
})

export default Home;
