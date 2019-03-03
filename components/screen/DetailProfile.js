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
      <View style = {styles.container}>
        <Image
          style={styles.profileImage}
          source={{uri: `${navigation.state.params.imgUrl}`}}
        />
        <Text style={styles.text}>{navigation.state.params.name}</Text>
        <Text style={styles.text}>{navigation.state.params.profession}</Text>
        <Text style={styles.text}>{navigation.state.params.whatImDoing}</Text>
        <Text style={styles.text}>Bio</Text>
        <Text style={styles.text}>Skills</Text>
        <Text style={styles.text}>What I'm Looking for in Collaborators</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileImage: {
    margin: 10,
    marginBottom: 40,
    width: 200,
    height: 200, 
    borderRadius: 40
  },
  container: {
    backgroundColor: "#7B466A",
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: '#3DE9E3',
    fontSize: 20,
  }
});

// TODO fetch user's profile info based on the id
