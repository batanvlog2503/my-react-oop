import React, {useState} from 'react';
import PostContent from './PostContent';
import CommentsSection from './CommentsSection';

function PostDetail({ post, onBack }) {
  const [comments, setComments] = useState([
    {
      commentId: 1,
      authorName: 'Nguyễn Văn A',
      content: 'Bài viết rất hay và dễ hiểu!',
      createdAt: '2025-10-14',
      status: 'approved'
    }
  ]);
  const [commentForm, setCommentForm] = useState({ authorName: '', authorEmail: '', content: '' });

  const handleSubmitComment = () => {
    if (!commentForm.authorName || !commentForm.authorEmail || !commentForm.content) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    
    alert('Bình luận đã được gửi! (Chờ phê duyệt)');
    setCommentForm({ authorName: '', authorEmail: '', content: '' });
  };

  return (
    <div>
      <button className="btn btn-outline-secondary mb-3" onClick={onBack}>
        ← Quay lại
      </button>

      <PostContent post={post} />
      <CommentsSection comments={comments} commentForm={commentForm} setCommentForm={setCommentForm} onSubmit={handleSubmitComment} />
    </div>
  );
}

export default PostDetail;