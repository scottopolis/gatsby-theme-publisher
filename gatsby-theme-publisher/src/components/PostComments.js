import React, { Fragment } from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { ApolloProvider } from "react-apollo"
import { client } from "../apollo/client"
import moment from 'moment/moment'

const GET_COMMENTS = gql`
  query($postId: ID!) {
    comments(where: { contentId: $postId }) {
      nodes {
        ...CommentFields
      }
    }
  }
  fragment CommentFields on Comment {
    id
    date
    approved
    content
    author {
      ...AuthorFields
    }
  }
  fragment AuthorFields on CommentAuthor {
    name
    url
  }
`

const PostComments = ({ post }) => {
  var postId = post.postId

  return (
    <div>
      <h3 className="mb-6">Comments</h3>
      <ApolloProvider client={client}>
        <Query query={GET_COMMENTS} variables={{ postId }}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading comments...</p>
            if (error) return <p>Error: ${error.message}</p>
            const { comments } = data

            return (
              <ul className="list-none p-0 m-0">
                {comments.nodes.map(cmt => (
                  <li
                    key={cmt.id}
                    className="bg-gray-100 rounded border p-4 mb-6"
                  >
                    <span className="comment-author block mb-1 font-bold">
                      {cmt.author.name}
                    </span>
                    <span className="comment-date block mb-1 text-gray-500 text-xs">
                    {moment(cmt.date).format(`MMMM D, YYYY`)}
                    </span>
                    <span
                      className="comment-content"
                      dangerouslySetInnerHTML={{ __html: cmt.content }}
                    />
                  </li>
                ))}
              </ul>
            )
          }}
        </Query>
      </ApolloProvider>
    </div>
  )
}

export default PostComments
