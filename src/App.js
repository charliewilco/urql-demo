import React from 'react'
import { Provider, Client, Connect, query, mutation } from 'urql'
import { Row, Col as Column, Block } from 'jsxstyle'
import ListView from './ListView'
import NewPost from './NewPost'
import Loading from './Loading'
import ErrorMessage from './ErrorMessage'

const addPostMutation = `
mutation($title: String!, $description: String!, $imageUrl: String!) {
  createPost(title: $title, description: $description, imageUrl: $imageUrl) {
    id
  }
}
`

const removePostMutation = `
mutation($id: ID!) {
  deletePost(id: $id) {
    id
  }
}
`

const mutations = {
  deletePost: mutation(removePostMutation),
  addPost: mutation(addPostMutation)
}

const PostQuery = `
query {
  allPosts {
    id
    title
    imageUrl,
    description
  }
}
`

const client = new Client({
  url: `https://api.graph.cool/simple/v1/cjevxmcsg1io30152vypz1jnu`
})

export default () => (
  <Provider client={client}>
    <Connect query={query(PostQuery)} mutation={mutations}>
      {({ loaded, data, error, addPost, deletePost }) => (
        <Row maxWidth={768} margin="auto" justifyContent="space-between" flex={1}>
          <Block flex={1} padding={8}>
            <NewPost onSubmit={addPost} />
          </Block>
          <Column flex={2} height="100%" padding={8}>
            {loaded ? (
              error ? (
                <ErrorMessage {...error} />
              ) : (
                <ListView data={data.allPosts} deletePost={deletePost} />
              )
            ) : (
              <Loading color="#147AAB" />
            )}
          </Column>
        </Row>
      )}
    </Connect>
  </Provider>
)
