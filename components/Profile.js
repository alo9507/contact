import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={require('../assets/andrew.jpg')}
          />
          <View style={styles.descriptionText}>
            <Text style={{...styles.profileText, ...styles.profileName}}>Andrew</Text>
            <Text style={styles.profileText}>Working on the UI for Contact</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  profileContainer: {
    backgroundColor: "#652450",
    alignItems: 'center',
    borderRadius: 60,
    margin: 10,
    width: 310,
    height: 100,
    flexDirection: 'row'
  },
  descriptionText: {
    alignContent: "space-between",
    justifyContent: "space-between"
  },
  profileImage: {
    width: 80,
    margin: 10,
    height: 80, 
    borderRadius: 40
  },
  profileText: {
    fontSize: 15,
    color: "#3DE9E3"
  },
  profileName: {
    fontSize: 20,
    fontWeight: "600"
  }
})
