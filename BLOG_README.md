# Blog với PostgreSQL Setup

## 1. Cài đặt dependencies

```bash
npm install
```

## 2. Cấu hình Database

1. Tạo file `.env` với nội dung:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/tamlinh_db?schema=public"
```

1. Thay thế `username`, `password` và database name phù hợp với PostgreSQL của bạn.

## 3. Setup Database

```bash
# Tạo database
npx prisma db push

# Generate Prisma client
npx prisma generate
```

## 4. Chạy ứng dụng

```bash
npm run dev
```

## 5. Truy cập Admin

- Quản lý blog: http://localhost:3000/admin/blog
- Tạo bài viết mới: http://localhost:3000/admin/blog/new
- Xem blog: http://localhost:3000/blog

## 6. API Endpoints

- `GET /api/blog` - Lấy danh sách bài viết
- `POST /api/blog` - Tạo bài viết mới
- `GET /api/blog/[id]` - Lấy bài viết theo ID
- `PUT /api/blog/[id]` - Cập nhật bài viết
- `DELETE /api/blog/[id]` - Xóa bài viết
- `GET /api/blog/slug/[slug]` - Lấy bài viết theo slug

## 7. Tính năng

### Quản lý Blog (CRUD)
- ✅ Tạo bài viết mới
- ✅ Chỉnh sửa bài viết
- ✅ Xóa bài viết
- ✅ Xuất bản/ẩn bài viết
- ✅ Tìm kiếm và lọc theo danh mục

### Hiển thị Blog
- ✅ Danh sách bài viết với phân trang
- ✅ Trang chi tiết bài viết
- ✅ Bài viết liên quan
- ✅ Tìm kiếm và lọc
- ✅ Responsive design

### Database
- ✅ PostgreSQL với Prisma ORM
- ✅ Schema blog posts, categories, authors
- ✅ Indexes cho performance
- ✅ Validation và constraints

## 8. Cấu trúc Database

### BlogPost
- id, title, slug, excerpt, content
- author, category, tags
- publishedAt, createdAt, updatedAt
- isPublished, readTime, featuredImage

### BlogCategory
- id, name, slug, description

### BlogAuthor
- id, name, bio, avatar, email
- facebook, instagram

## 9. Next Steps

- [ ] Thêm authentication cho admin
- [ ] Upload ảnh cho bài viết
- [ ] Rich text editor
- [ ] SEO optimization
- [ ] Comments system
- [ ] Newsletter subscription
