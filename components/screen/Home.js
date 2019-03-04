import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableHighlight, ActivityIndicator, Alert } from 'react-native';
import { Fab, Icon } from 'native-base';
import Profiles from '../Profiles';

import { Ionicons } from '@expo/vector-icons';

import defaultNavigationStyles from '../../styles/defaultNavigationStyles';

import Posts from '../Posts';
import defaultContainerStyles from '../../styles/defaultContainerStyles';
import { signOut } from '../../shared/loginUtils';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Spot Feed',
      headerLeft:  (
      <Ionicons 
        name={'ios-menu'} 
        size={35} 
        style={{ color: '#3DE9E3'}} 
        onPress={() => navigation.openDrawer()}
      />),
      headerLeftContainerStyle: {marginLeft: 22}
      }
    }

    constructor(props) {
      super(props);
  
      this.state = {
        location: null,
        error: null,
      };
    }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = JSON.stringify(position);

          this.setState({ location });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    }

  render() {
    return (
      <View style = {styles.container}>
        <Profiles {...this.props}/>
        <Text>Location: {this.state.location}</Text>
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
