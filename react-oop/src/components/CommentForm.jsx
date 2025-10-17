import React, {useState} from 'react';
function CommentForm({ commentForm, setCommentForm, onSubmit }) {
  return (
    <div className="card border-0 shadow-sm mt-4">
      <div className="card-body">
        <h5 style={{ color: '#ff8c42' }}>Để Lại Bình Luận</h5>
        <div className="mb-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Tên của bạn"
            value={commentForm.authorName}
            onChange={(e) => setCommentForm({...commentForm, authorName: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <input 
            type="email" 
            className="form-control" 
            placeholder="Email của bạn"
            value={commentForm.authorEmail}
            onChange={(e) => setCommentForm({...commentForm, authorEmail: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            rows="4" 
            placeholder="Nội dung bình luận"
            value={commentForm.content}
            onChange={(e) => setCommentForm({...commentForm, content: e.target.value})}
          ></textarea>
        </div>
        <button 
          className="btn text-white" 
          style={{ backgroundColor: '#ff8c42' }}
          onClick={onSubmit}
        >
          Gửi Bình Luận
        </button>
      </div>
    </div>
  );
}

export default CommentForm;