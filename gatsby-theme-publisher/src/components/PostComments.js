import React from 'react';
import moment from 'moment/moment'

const PostComments = ({ post }) => {

    if( !post.comments || !post.comments.nodes.length )
    return(<></>);

  return (
      <div
        id="post-comments"
        className="container mt-8"
      >
        <h4 className="mb-6">Comments</h4>
        { post.comments.nodes && post.comments.nodes.map( 
        comment => <div key={comment.id} className="p-4 rounded border mb-6 bg-gray-100 overflow-hidden">
                <h5 className="mb-0">{comment.author.name}</h5>
                <p className="text-gray-500 text-xs">{moment(comment.date).format(`MMMM D, YYYY`)}</p>
                <div 
                className="comment-body"
                dangerouslySetInnerHTML={{
                __html: comment.content,
                }}></div>
            </div>
        )}
        <p className="text-xs text-gray-500 text-center">Comments are closed.</p>
      </div>
  );
};

export default PostComments;