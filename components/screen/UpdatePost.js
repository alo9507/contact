import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PostForm from '../PostForm';

import defaultNavigationStyles from '../../styles/defaultNavigationStyles';

class UpdatePost extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Edit: ${navigation.state.params.title}`,
      ...defaultNavigationStyles
    }
  }

  state = {
    title: this.props.navigation.state.params.title,
    body: this.props.navigation.state.params.body,
    loading: false
  }

  updatePost = ({ title, body }) => {
    this.setState({loading: true});

    const { updatePost, navigation, screenProps } = this.props;

    updatePost({
      variables: {
        title,
        body,
        id: this.props.navigation.state.params.id,
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
    
    const { body, id, title } = this.props.navigation.state.params;

    const { loading } = this.state;

    if (loading) return <ActivityIndicator size="large"/>;

    return (
      <View>
        <PostForm 
          buttonTitle="Save Edits"
          title={title}
          body={body}
          onSubmit={this.updatePost}
          />
      </View>
    );
  }
}

const updatePost = gql`
mutation updatePost($body: String, $id: ID!, $title: String, $userId: ID!) {
  updatePost(body: $body, id: $id, title: $title, userId: $userId) {
    title
    body
  }
}
`

export default graphql(updatePost, {
  name: 'updatePost',
  options: {
    refetchQueries: ["userQuery", "fetchPost"]
  }
})(UpdatePost);
