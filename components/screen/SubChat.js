import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SubChat extends Component {

  _subscribeToNewPosts = () => {
    this.props.allPosts.subscribeToMore({
        document: gql`
          subscription {
            Post(filter: { mutation_in: [CREATED] }) {
              node {
                id
                title
                body
                createdAt
              }
            }
          }
        `,
        updateQuery: (previous, { subscriptionData }) => {
          const newPostLinks = [
            ...previous.allPosts,
            subscriptionData.data.Post.node
          ];
          const result = {
            ...previous,
            allPosts: newPostLinks
          };
          return result;
        }
      });
    };

  componentDidMount() {
    this._subscribeToNewPosts();
  }

  render() {
    const allPosts = this.props.allPosts.allPosts || [];
    return (
        <View className="container">
          <Text>POSTS</Text>
          {allPosts.map(post => (
            <Text key={post.id}>
              {post.title}
            </Text>
          ))}
        </View>
    );
  }

}

const allPosts = gql`
query allPosts {
  allPosts(first: 10) {
    id
    title
    body
    createdAt
  }
}
`

export default graphql(allPosts, { name: 'allPosts' })(SubChat);
