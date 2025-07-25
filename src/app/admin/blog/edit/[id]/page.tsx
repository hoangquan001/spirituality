'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import BlogForm from '@/components/BlogForm';
import { BlogPost } from '@/types/blog';

export default function EditBlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blog/${params.id}`);
      if (!response.ok) throw new Error('Failed to fetch post');
      
      const data = await response.json();
      setPost(data);
    } catch (err) {
      setError('Không tìm thấy bài viết');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-golden border-t-transparent rounded-full mb-4 mx-auto"></div>
          <p className="text-gray-300">Đang tải bài viết...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={fetchPost}
            className="bg-golden text-black px-4 py-2 rounded-lg hover:bg-yellow-400"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return <BlogForm initialData={post} isEditing={true} />;
}
