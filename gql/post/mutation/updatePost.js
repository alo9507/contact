import gql from 'graphql-tag';

const updatePost = gql`
mutation updatePost($body: String, $id: ID!, $title: String, $userId: ID!) {
  updatePost(body: $body, id: $id, title: $title, userId: $userId) {
    title
    body
  }
}
`

export { updatePost };