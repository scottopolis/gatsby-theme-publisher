import React from "react"
import Layout from "../../components/Layout"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"

const BlogArchive = props => {
  const {
    pageContext: { nodes, pageNumber, hasNextPage, itemsPerPage, allPosts },
  } = props

  return (
    
    <Layout>

      <h1 className="max-w-2xl m-auto xl:max-w-5xl"></h1>
      
      <div className="max-w-2xl m-auto xl:max-w-5xl blog-page">

        <div className="p-4">

          {nodes && nodes.map(post => <PostEntry classes="mb-12" key={post.postId} post={post} />)}
          <Pagination
            pageNumber={pageNumber}
            hasNextPage={hasNextPage}
            allPosts={allPosts}
            itemsPerPage={itemsPerPage}
          />

        </div>

      </div>
      
    </Layout>
  )
}

export default BlogArchive
