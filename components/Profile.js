import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Profile extends Component {

  render() {
    const { name, imgUrl, whatImDoing } = this.props;
    return (
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={{uri: `${imgUrl}`}}
          />
          <View style={styles.descriptionText}>
            <Text style={{...styles.profileText, ...styles.profileName}}>{name}</Text>
            <Text style={styles.profileText}>{whatImDoing}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0,
    margin: 10,
    borderRadius: 60,
    backgroundColor: "#652450"
  },
  descriptionText: {
    alignContent: "space-between",
    justifyContent: "space-between",
    flex: 1,
    flexWrap: 'wrap',
    padding: 5
  },
  profileImage: {
    margin: 10,
    width: 80,
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
