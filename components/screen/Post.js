import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Fab, Icon } from 'native-base';
import defaultNavigationStyles from '../../styles/defaultNavigationStyles';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Post extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.title}`,
      ...defaultNavigationStyles
    }
  }

  navigateToUpdatePost = () => {
    const { Post } = this.props;
    this.props.navigation.navigate('updatePost', {
      id: Post.id,
      title: Post.title,
      body: Post.body
    });
  }

  render() {

    const { Post, loading } = this.props;

    if (loading) return <ActivityIndicator size="large"/>;

    return (
      <View style={styles.container}>
          <Text style={styles.bodyText}>{Post.body}</Text>
          <Fab
            onPress={this.navigateToUpdatePost}
            style={styles.fab}
          >
            <Icon name="create" style={{color: "#3DE9E3", fontWeight: 'bold',}} />
          </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  bodyText: {
    fontSize: 16
  },
  editPost: {
    backgroundColor: '#82D8D8',
    padding: 20
  },
  fab: {
    backgroundColor: "#652450"
  }
})

const fetchPost = gql`
query fetchPost($id: ID!) {
  Post(id: $id) {
    id
    title
    body
  }
}
`

export default graphql(fetchPost, {
  props: ({data}) => ({...data}),
  options: ({navigation}) => ({
    variables: { id: navigation.state.params.id }
  })
})(Post);