
import PostCard from "./PostCard.jsx";
function PostList({ posts, onPostClick }) {
  return (
    <>
      <h2 className="mb-4" style={{ color: '#ff8c42' }}>Bài Viết Mới Nhất</h2>
      {posts.map(post => (
        <PostCard key={post.postId} post={post} onClick={() => onPostClick(post)} />
      ))}
    </>
  );
}

export default PostList;