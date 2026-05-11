import { client } from './client'

export const GET_POST = `
  query GetPost($id: ID!) {
    post(id : $id) {
      id
      title
    }
  }
`

export const GET_PHOTO = `
  query GetPhoto($id: ID!) {
    photo(id: $id) {
      id
      title
      thumbnailUrl
      url
    }
  }
`

export const ADD_POST = `
  mutation CreatePost($title: String!,  $body: String!) {
    createPost(input: { title: $title, body: $body }) {
      id
      title
    }
  }
`

export const DELETE_POST = `
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`

export const fetchData = async (request: string, id: number) => {
  return await client.request(request, { id });
}

export const createData = async (
  request: string,
  title: string,
  body: string
) => {
  return await client.request(request, { title, body });
}

export const deleteData = (request: string, id: number) => {
  return client.request(request, { id })
}