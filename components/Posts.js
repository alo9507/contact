import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, Body, Right, Icon } from 'native-base';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Posts extends Component {
  render() {
    
    const { allPosts, loading, navigation } = this.props;

    if (loading) return <ActivityIndicator size="large"/>;
    
    return (
      <View>
        <List>
          <FlatList 
            data={allPosts}
            renderItem={({item}) => (
            <ListItem
              onPress={() => navigation.navigate('post', {
                id: item.id,
                title: item.title
              })}
            > 
              <Body>
                <Text style={{color: "#3DE9E3"}}>{item.title}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" style={{color: "#3DE9E3"}}/>
              </Right>
            </ListItem>
          )}
            keyExtractor={item => item.id}
          />
        </List>
      </View>
    );
  }
}

const getAllPosts = gql`
query fetchAllPosts {
  allPosts(orderBy: createdAt_DESC) {
    id
    title
  }
}
`

export default graphql(getAllPosts, {
  props: ({data}) => ({...data})
})(Posts);