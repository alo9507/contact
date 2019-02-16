import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default class DetailProfile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.name}`,
      headerRight:  (
      <Ionicons 
        name={'ios-chatbubbles'} 
        size={35} 
        style={{ color: '#3DE9E3'}} 
        onPress={() => navigation.navigate('chat')}
      />),
      headerRightContainerStyle: {marginRight: 22}
      }
  }

  render() {

    const { navigation } = this.props;

    return (
      <View>
        <Image
          style={styles.profileImage}
          source={{uri: `${navigation.state.params.imgUrl}`}}
        />
        <Text>{navigation.state.params.name}</Text>
        <Text>{navigation.state.params.profession}</Text>
        <Text>{navigation.state.params.whatImDoing}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileImage: {
    margin: 10,
    width: 80,
    height: 80, 
    borderRadius: 40
  }
});

// TODO fetch user's profile info based on the id
