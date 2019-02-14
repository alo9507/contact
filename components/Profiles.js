import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { List, ListItem, Body, Right, Icon } from 'native-base';
import Profile from './Profile';

class Profiles extends Component {
  render() {
    
    const { allPosts, loading, navigation, screenProps } = this.props;

    if (loading) return <ActivityIndicator size="large"/>;
    
    return (
      <View style={styles.container}>
        <Profile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
})

export default Profiles;