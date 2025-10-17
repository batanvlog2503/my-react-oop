import React, { useState } from "react"
import Header from "./components/Header.jsx"
import PostList from "./components/PostList.jsx"
import PostDetail from "./components/PostDetail.jsx"
import CategorySidebar from "./components/CategorySidebar.jsx"
import AboutSidebar from "./components/AboutSidebar.jsx"
import Footer from "./components/Footer.jsx"
import PostContent from "./components/PostContent.jsx"
function App() {
  const [selectedPost, setSelectedPost] = useState(null)

  const posts = [
    {
      postId: 1,
      title: "Hướng Dẫn Cấu Hình JPA trong Spring Boot",
      excerpt:
        "Tìm hiểu cách kết nối ứng dụng Spring Boot của bạn với cơ sở dữ liệu bằng JPA.",
      slug: "huong-dan-cau-hinh-jpa-spring-boot",
      publishedAt: "2025-10-14",
      viewCount: 125,
      author: { displayName: "Quản Trị Viên" },
      category: { name: "Spring Boot" },
      tags: [{ name: "JPA" }, { name: "Hibernate" }, { name: "Backend" }],
    },
    {
      postId: 2,
      title: "Tối Ưu Hóa Truy Vấn SQL với Index",
      excerpt:
        "Làm thế nào để database của bạn chạy nhanh hơn? Câu trả lời nằm ở Index!",
      slug: "toi-uu-hoa-truy-van-sql-index",
      publishedAt: "2025-10-10",
      viewCount: 340,
      author: { displayName: "Tác Giả Code" },
      category: { name: "Cơ Sở Dữ Liệu" },
      tags: [{ name: "SQL" }, { name: "Performance" }],
    },
    {
      postId: 3,
      title: "Các Lệnh SQL Thường Dùng cho Lập Trình Viên Backend",
      excerpt: "Tóm tắt nhanh các lệnh SELECT, INSERT, UPDATE, DELETE và JOIN.",
      slug: "cac-lenh-sql-thuong-dung-backend",
      publishedAt: "2025-10-15",
      viewCount: 50,
      author: { displayName: "Quản Trị Viên" },
      category: { name: "Mẹo Vặt Công Nghệ" },
      tags: [{ name: "SQL" }, { name: "Backend" }, { name: "Tips" }],
    },
  ]

  // danh mục
  const categories = [
    { categoryId: 1, name: "Lập Trình Java", slug: "lap-trinh-java" },
    { categoryId: 2, name: "Spring Boot", slug: "spring-boot" },
    { categoryId: 3, name: "Cơ Sở Dữ Liệu", slug: "co-so-du-lieu" },
    { categoryId: 4, name: "Mẹo Vặt Công Nghệ", slug: "meo-vat-cong-nghe" },
  ]

  const handlePostClick = (post) => {
    setSelectedPost(post)
   
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <Header onLogoClick={() => setSelectedPost(null)} />

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8">
            {!selectedPost ? (
              <PostList
                posts={posts}
                onPostClick={handlePostClick}
              />
            ) : (
              <PostDetail
                post={selectedPost}
                onBack={() => setSelectedPost(null)}
              />
            )}
          </div>

          <div className="col-lg-4">
            <CategorySidebar categories={categories} />
            <AboutSidebar />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
