'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BlogPost, CreateBlogPostData, UpdateBlogPostData } from '@/types/blog';

interface BlogFormProps {
  initialData?: BlogPost;
  isEditing?: boolean;
}

export default function BlogForm({ initialData, isEditing = false }: BlogFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<CreateBlogPostData>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Admin',
    category: 'numerology',
    tags: [],
    featuredImage: '',
    isPublished: false,
    readTime: 5,
  });

  const categories = [
    { value: 'numerology', label: 'Thần Số Học' },
    { value: 'zodiac', label: 'Tử Vi 12 Cung' },
    { value: 'feng-shui', label: 'Phong Thủy' },
    { value: 'dreams', label: 'Giải Mã Giấc Mơ' },
    { value: 'spirituality', label: 'Tâm Linh' },
    { value: 'tips', label: 'Mẹo Hay' },
  ];

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        slug: initialData.slug,
        excerpt: initialData.excerpt || '',
        content: initialData.content,
        author: initialData.author,
        category: initialData.category,
        tags: initialData.tags || [],
        featuredImage: initialData.featuredImage || '',
        isPublished: initialData.isPublished,
        readTime: initialData.readTime || 5,
      });
    }
  }, [initialData]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: isEditing ? prev.slug : generateSlug(title)
    }));
  };

  const handleTagsChange = (tagsString: string) => {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData(prev => ({ ...prev, tags }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEditing ? `/api/blog/${initialData?.id}` : '/api/blog';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Có lỗi xảy ra');
      }

      router.push('/admin/blog');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {isEditing ? 'Chỉnh Sửa Bài Viết' : 'Tạo Bài Viết Mới'}
          </h1>
          <p className="text-gray-400">
            {isEditing ? 'Cập nhật thông tin bài viết' : 'Viết một bài viết mới cho blog'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tiêu đề *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-golden focus:border-transparent"
              placeholder="Nhập tiêu đề bài viết"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Slug *
            </label>
            <input
              type="text"
              required
              value={formData.slug}
              onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-golden focus:border-transparent"
              placeholder="duong-dan-bai-viet"
            />
            <p className="text-gray-500 text-sm mt-1">
              URL của bài viết: /blog/{formData.slug}
            </p>
          </div>

          {/* Category & Author */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Danh mục *
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-golden focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tác giả *
              </label>
              <input
                type="text"
                required
                value={formData.author}
                onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-golden focus:border-transparent"
                placeholder="Tên tác giả"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Mô tả ngắn
            </label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
              rows={3}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-golden focus:border-transparent"
              placeholder="Mô tả ngắn gọn về nội dung bài viết"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nội dung *
            </label>
            <textarea
              required
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              rows={15}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-golden focus:border-transparent"
              placeholder="Viết nội dung bài viết (hỗ trợ Markdown)"
            />
          </div>

          {/* Featured Image & Read Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Ảnh đại diện
              </label>
              <input
                type="url"
                value={formData.featuredImage}
                onChange={(e) => setFormData(prev => ({ ...prev, featuredImage: e.target.value }))}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-golden focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Thời gian đọc (phút)
              </label>
              <input
                type="number"
                min="1"
                value={formData.readTime}
                onChange={(e) => setFormData(prev => ({ ...prev, readTime: parseInt(e.target.value) }))}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-golden focus:border-transparent"
                placeholder="5"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tags
            </label>
            <input
              type="text"
              value={formData.tags?.join(', ')}
              onChange={(e) => handleTagsChange(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-golden focus:border-transparent"
              placeholder="tag1, tag2, tag3"
            />
            <p className="text-gray-500 text-sm mt-1">
              Phân cách các tag bằng dấu phẩy
            </p>
          </div>

          {/* Publish Status */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="isPublished"
              checked={formData.isPublished}
              onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
              className="w-5 h-5 text-golden bg-gray-800 border-gray-600 rounded focus:ring-golden"
            />
            <label htmlFor="isPublished" className="text-gray-300">
              Xuất bản ngay lập tức
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Đang xử lý...' : (isEditing ? 'Cập nhật' : 'Tạo bài viết')}
            </button>
            
            <button
              type="button"
              onClick={() => router.push('/admin/blog')}
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-500 transition-colors"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
