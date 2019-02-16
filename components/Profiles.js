import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { List, ListItem, Body, Right, Icon } from 'native-base';
import Profile from './Profile';

class Profiles extends Component {

  state = {
    profiles: [
      {name: 'Andrew', whatImDoing: 'Working on the UI for Contact', profession: 'Software Engineer', imgUrl: 'http://lorempixel.com/300/300', id: '123'},
      {name: 'Bill', whatImDoing: 'Developing the Instagram for Elite Detroit', profession: 'Community Organizer', imgUrl: 'http://lorempixel.com/300/300', id: '124'},
      {name: 'Tatyana', whatImDoing: 'Working on the UI for Contact', profession: 'Drug Lord', imgUrl: 'http://lorempixel.com/300/300', id: '125'},
      {name: 'Kumar', whatImDoing: 'Working on the UI for Contact', profession: 'Author', imgUrl: 'http://lorempixel.com/300/300', id: '126'},
      {name: 'Yessica', whatImDoing: 'Working on the UI for Contact', profession: 'Professor', imgUrl: 'http://lorempixel.com/300/300', id: '127'},
      {name: 'Mariana', whatImDoing: 'Working on the UI for Contact', profession: 'Human Trafficker', imgUrl: 'http://lorempixel.com/300/300', id: '128'},
    ]
  }

  _renderProfile = ({ item }) => {
      return;
  }

  render() {
    
    const { loading, navigation } = this.props;

    if (loading) return <ActivityIndicator size="large"/>;
    
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.profiles}
          renderItem={({item}) => (
          <TouchableOpacity
            onPress={({ name, whatImDoing, id }) => navigation.navigate('detailProfile', {
              id: item.id,
              name: item.name,
              whatImDoing: item.whatImDoing,
              imgUrl: item.imgUrl,
              profession: item.profession
            })}
          >
            <Profile 
              name={item.name}
              imgUrl={item.imgUrl}
              whatImDoing={item.whatImDoing}
              id={item.id}
              profession={item.profession}
            />
          </TouchableOpacity>
            )}
          keyExtractor={item => item.id} 
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
})

export default Profiles;