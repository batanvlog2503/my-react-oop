import CommentItem from './CommentItem.jsx';
import CommentForm from './CommentForm.jsx';

import React, {useState} from 'react';
function CommentsSection({ comments, commentForm, setCommentForm, onSubmit }) {
  return (
    <div>
      <h4 className="mb-4" style={{ color: '#ff8c42' }}>Bình Luận ({comments.length})</h4>

      {comments.map(comment => (
        <CommentItem key={comment.commentId} comment={comment} />
      ))}

      <CommentForm commentForm={commentForm} setCommentForm={setCommentForm} onSubmit={onSubmit} />
    </div>
  );
}

export default CommentsSection;