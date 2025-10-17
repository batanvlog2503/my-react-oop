// khi ấn vào PostCard
import React, {useState} from 'react';
function PostContent({ post }) {
  return (
    <article className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <h1 className="card-title mb-3" style={{ color: '#ff8c42' }}>{post.title}</h1>
        <p className="text-muted small mb-4">
          {post.author.displayName} |  {new Date(post.publishedAt).toLocaleDateString('vi-VN')} |  {post.viewCount} lượt xem
        </p>

        <div className="mb-4">
          {post.tags.map((tag, idx) => (
            <span key={idx} className="badge me-2" style={{ backgroundColor: '#ff8c42' }}>{tag.name}</span>
          ))}
        </div>

        <div className="post-content" style={{ lineHeight: '1.8' }}>
          <p>Nội dung đầy đủ về cách cấu hình và sử dụng JPA/Hibernate trong dự án Spring Boot, bao gồm cả các thuộc tính DDL-auto.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <h5 className="mt-4" style={{ color: '#ff8c42' }}>Cấu hình application.properties</h5>
          <p>Đầu tiên, bạn cần cấu hình các thuộc tính trong file application.properties để kết nối với database.</p>
        </div>
      </div>
    </article>
  );
}

export default PostContent;