'use client';

import { BlogPost } from '@/types/blog';
import { useState } from 'react';

export default function BlogAdminPage() {
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'numerology',
    tags: [],
    isPublished: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ở đây bạn sẽ xử lý lưu bài viết
    // Có thể gửi lên API hoặc lưu vào localStorage tạm thời
    console.log('Saving post:', formData);
    
    // Reset form
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      category: 'numerology',
      tags: [],
      isPublished: false,
    });
    setIsCreating(false);
    alert('Đã lưu bài viết thành công!');
  };

  const handleTagsChange = (value: string) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData({ ...formData, tags });
  };

  if (isCreating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-white">Tạo bài viết mới</h1>
              <button
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                ← Quay lại
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-purple-300/20 space-y-6">
              
              {/* Title */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Tiêu đề bài viết *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                  placeholder="Nhập tiêu đề bài viết..."
                  required
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Tóm tắt *
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent resize-none"
                  placeholder="Nhập tóm tắt ngắn gọn về bài viết..."
                  required
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Nội dung bài viết *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={15}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent resize-none"
                  placeholder="Nhập nội dung bài viết (hỗ trợ Markdown)..."
                  required
                />
                <p className="text-purple-200 text-sm mt-2">
                  Hỗ trợ Markdown: **bold**, *italic*, # Heading, etc.
                </p>
              </div>

              {/* Author và Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Tác giả *
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                    placeholder="Tên tác giả..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Danh mục *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as BlogPost['category'] })}
                    className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                    required
                  >
                    <option value="numerology" className="bg-purple-900">Thần số học</option>
                    <option value="zodiac" className="bg-purple-900">Cung hoàng đạo</option>
                    <option value="feng-shui" className="bg-purple-900">Phong thủy</option>
                    <option value="dreams" className="bg-purple-900">Giải mã giấc mơ</option>
                    <option value="spirituality" className="bg-purple-900">Tâm linh</option>
                    <option value="tips" className="bg-purple-900">Mẹo hay</option>
                  </select>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Tags (phân cách bằng dấu phẩy)
                </label>
                <input
                  type="text"
                  value={formData.tags?.join(', ') || ''}
                  onChange={(e) => handleTagsChange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                  placeholder="Ví dụ: thần số học, tử vi, phong thủy..."
                />
              </div>

              {/* Featured Image URL */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Ảnh đại diện (URL)
                </label>
                <input
                  type="url"
                  value={formData.featuredImage || ''}
                  onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-purple-300/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              {/* Published */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="isPublished"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  className="w-5 h-5 text-golden bg-white/10 border-purple-300/30 rounded focus:ring-golden focus:ring-2"
                />
                <label htmlFor="isPublished" className="text-white font-medium">
                  Xuất bản ngay
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-golden to-yellow-300 text-purple-900 font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {formData.isPublished ? 'Xuất bản bài viết' : 'Lưu nháp'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors"
                >
                  Hủy bỏ
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-purple-900/50 to-indigo-900/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quản Lý <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-8">
            Tạo và quản lý nội dung blog cho website Tâm Linh
          </p>
          
          <button
            onClick={() => setIsCreating(true)}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-golden to-yellow-300 text-purple-900 font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span className="mr-2">✍️</span>
            Tạo bài viết mới
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Cards */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard
              title="Tổng bài viết"
              value="6"
              icon="📝"
              color="from-blue-500 to-blue-600"
            />
            <StatsCard
              title="Đã xuất bản"
              value="6"
              icon="✅"
              color="from-green-500 to-green-600"
            />
            <StatsCard
              title="Bản nháp"
              value="0"
              icon="📄"
              color="from-yellow-500 to-yellow-600"
            />
            <StatsCard
              title="Lượt xem"
              value="1.2K"
              icon="👁️"
              color="from-purple-500 to-purple-600"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-purple-300/20">
            <h2 className="text-2xl font-bold text-white mb-6">Thao tác nhanh</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ActionCard
                title="Tạo bài viết"
                description="Viết bài mới cho blog"
                icon="✍️"
                onClick={() => setIsCreating(true)}
              />
              <ActionCard
                title="Quản lý bài viết"
                description="Xem và chỉnh sửa bài viết"
                icon="📊"
                onClick={() => alert('Tính năng sẽ sớm có!')}
              />
              <ActionCard
                title="Thống kê"
                description="Xem báo cáo chi tiết"
                icon="📈"
                onClick={() => alert('Tính năng sẽ sớm có!')}
              />
              <ActionCard
                title="Danh mục"
                description="Quản lý danh mục blog"
                icon="🏷️"
                onClick={() => alert('Tính năng sẽ sớm có!')}
              />
              <ActionCard
                title="Bình luận"
                description="Quản lý bình luận"
                icon="💬"
                onClick={() => alert('Tính năng sẽ sớm có!')}
              />
              <ActionCard
                title="Cài đặt"
                description="Cấu hình blog"
                icon="⚙️"
                onClick={() => alert('Tính năng sẽ sớm có!')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsCard({ title, value, icon, color }: {
  title: string;
  value: string;
  icon: string;
  color: string;
}) {
  return (
    <div className={`bg-gradient-to-r ${color} rounded-xl p-6 text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white/80 text-sm">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <div className="text-3xl opacity-80">{icon}</div>
      </div>
    </div>
  );
}

function ActionCard({ title, description, icon, onClick }: {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 border border-purple-300/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 text-left"
    >
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white font-bold mb-2 group-hover:text-golden transition-colors">
        {title}
      </h3>
      <p className="text-purple-200 text-sm">
        {description}
      </p>
    </button>
  );
}
