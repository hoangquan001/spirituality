'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog');
      if (!response.ok) throw new Error('Failed to fetch posts');
      
      const data = await response.json();
      setPosts(data.posts);
    } catch (err) {
      setError('Lỗi khi tải danh sách bài viết');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Bạn có chắc chắn muốn xóa bài viết này?')) return;

    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete post');
      
      setPosts(posts.filter(post => post.id !== id));
    } catch (err) {
      alert('Lỗi khi xóa bài viết');
      console.error(err);
    }
  };

  const togglePublish = async (id: string, isPublished: boolean) => {
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublished: !isPublished })
      });

      if (!response.ok) throw new Error('Failed to update post');
      
      const updatedPost = await response.json();
      setPosts(posts.map(post => 
        post.id === id ? updatedPost : post
      ));
    } catch (err) {
      alert('Lỗi khi cập nhật bài viết');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-golden border-t-transparent rounded-full mb-4 mx-auto"></div>
          <p className="text-gray-300">Đang tải...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={fetchPosts}
            className="bg-golden text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Quản Lý Blog</h1>
            <p className="text-gray-400">Quản lý tất cả bài viết trên website</p>
          </div>
          <Link
            href="/admin/blog/new"
            className="bg-gradient-to-r from-golden to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            + Tạo Bài Viết Mới
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm font-medium">Tổng số bài viết</h3>
            <p className="text-2xl font-bold text-white mt-1">{posts.length}</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm font-medium">Đã xuất bản</h3>
            <p className="text-2xl font-bold text-green-400 mt-1">
              {posts.filter(p => p.isPublished).length}
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm font-medium">Bản nháp</h3>
            <p className="text-2xl font-bold text-yellow-400 mt-1">
              {posts.filter(p => !p.isPublished).length}
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-gray-400 text-sm font-medium">Tuần này</h3>
            <p className="text-2xl font-bold text-blue-400 mt-1">
              {posts.filter(p => {
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return new Date(p.createdAt) > weekAgo;
              }).length}
            </p>
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-gray-800/30 rounded-lg border border-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left p-4 text-gray-300 font-medium">Tiêu đề</th>
                  <th className="text-left p-4 text-gray-300 font-medium">Danh mục</th>
                  <th className="text-left p-4 text-gray-300 font-medium">Tác giả</th>
                  <th className="text-left p-4 text-gray-300 font-medium">Trạng thái</th>
                  <th className="text-left p-4 text-gray-300 font-medium">Ngày tạo</th>
                  <th className="text-right p-4 text-gray-300 font-medium">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-700 hover:bg-gray-700/20">
                    <td className="p-4">
                      <div>
                        <h3 className="text-white font-medium">{post.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">/{post.slug}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {post.category}
                      </span>
                    </td>
                    <td className="p-4 text-gray-300">{post.author}</td>
                    <td className="p-4">
                      <button
                        onClick={() => togglePublish(post.id, post.isPublished)}
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          post.isPublished
                            ? 'bg-green-500/20 text-green-300 hover:bg-green-500/30'
                            : 'bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30'
                        }`}
                      >
                        {post.isPublished ? 'Đã xuất bản' : 'Bản nháp'}
                      </button>
                    </td>
                    <td className="p-4 text-gray-400">
                      {new Date(post.createdAt).toLocaleDateString('vi-VN')}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/blog/edit/${post.id}`}
                          className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded hover:bg-blue-500/30 transition-colors"
                        >
                          Sửa
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="bg-red-500/20 text-red-300 px-3 py-1 rounded hover:bg-red-500/30 transition-colors"
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">Chưa có bài viết nào</p>
              <Link
                href="/admin/blog/new"
                className="bg-golden text-black px-6 py-2 rounded-lg hover:bg-yellow-400"
              >
                Tạo bài viết đầu tiên
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
