function CommentItem({ comment }) {
  return (
    <div className="card mb-3 border-0 shadow-sm">
      <div className="card-body">
        <h6 className="card-subtitle mb-2">{comment.authorName}</h6>
        <p className="card-text">{comment.content}</p>
        <small className="text-muted">{new Date(comment.createdAt).toLocaleDateString('vi-VN')}</small>
      </div>
    </div>
  );
}

export default CommentItem;