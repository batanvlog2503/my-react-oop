
import React, {useState} from 'react';
function PostCard({ post, onClick }) {
  return (
    <div className="card mb-3 border-0 shadow-sm" style={{ cursor: 'pointer' }} onClick={onClick}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h4 className="card-title" style={{ color: '#ff8c42' }}>{post.title}</h4>
          <span className="badge" style={{ backgroundColor: '#ff8c42' }}>{post.category.name}</span>
        </div>
        <p className="text-muted small mb-2">
           {post.author.displayName} |  {new Date(post.publishedAt).toLocaleDateString('vi-VN')} | {post.viewCount} lượt xem
        </p>
        <p className="card-text">{post.excerpt}</p>
        <div className="d-flex gap-2 flex-wrap mt-2">
          {post.tags.map((tag, idx) => (
            <span key={idx} className="badge bg-light text-dark border">{tag.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostCard;