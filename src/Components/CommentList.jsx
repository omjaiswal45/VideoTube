import React from 'react'
import Comment from './Comment'
const CommentList = ({comments}) => {
  return (
   
      comments.map((comment, index) => (
        <div>
        <Comment key={index} data={comment} />
        <div className="ml-4 pl-4 border-l border-gray-300">
          <CommentList comments={comment.replies}/> 
          {/* This will render the replies for each comment */}

          </div>
        </div>
      ))
    
  )
}

export default CommentList