import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import defaultNavigationStyles from '../../styles/defaultNavigationStyles';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PostForm from '../PostForm';

class NewPost extends Component {
  static navigationOptions = {
      title: "New Post",
      ...defaultNavigationStyles
    }

  state = {
    loading: false
  }

  newPost = ({ title, body }) => {
    this.setState({loading: true})

    const { newPost, navigation, screenProps } = this.props;

    newPost({
      variables: {
        title,
        body,
        userId: screenProps.user.id
      }
    })
    .then(() => {
      navigation.goBack()
    })
    .catch(error => {
      this.setState({loading: false})
      console.log(error)
    })
  }

  render() {
    const { loading } = this.state;

    if (loading) return <ActivityIndicator size="large"/>;

    return (
      <View>
        <PostForm onSubmit={this.newPost} buttonTitle="Save Post" />
      </View>
    );
  }
}

const newPost = gql`
mutation newPost($title: String!, $body: String!, $userId: ID!) {
  createPost(title: $title, body: $body, userId: $userId) {
    id
  }
}
`

export default graphql(newPost, {
  name: 'newPost',
  options: {
    refetchQueries: ["userQuery"]
  }
})(NewPost);
