import React from "react"
import { Link } from "gatsby"

const WithLink = ({ post, location, children }) =>
  location === "single" ? (
    children
  ) : (
    <Link
      className="post-thumbnail"
      to={`/${post.uri}`}
      aria-hidden="true"
    >
      {children}
    </Link>
  )

const PostEntryMedia = ({ post, location, classes = '' }) => (
  <div className={ 'entry-media m-auto mb-4 w-full max-w-5xl ' + classes}>
    <WithLink location={location} post={post}>
      <div
        className="entry-media__figure-wrapper mt-6 mb-10"
        style={{ maxWidth: 1736 }}
      >
        <figure>
          <img
            src={post.featuredImage.sourceUrl}
            srcSet={post.featuredImage.srcSet}
            alt={post.title}
            className="lazyload initial loaded shadow-2xl"
            sizes="90vw, (min-width: 600px) 90vw, 60vw"
          />
        </figure>
      </div>
    </WithLink>
  </div>
)

export default PostEntryMedia
