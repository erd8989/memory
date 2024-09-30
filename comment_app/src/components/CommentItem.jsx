import React from 'react'

const CommentItem = ({comment}) => {

  console.log(comment);
  
  return (
    <p>
        <strong>{comment.content}</strong> | 작성자:{comment.writer}
    </p>
  )
}

export default CommentItem