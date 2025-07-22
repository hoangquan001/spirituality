'use client';

import { blogPosts } from '@/lib/blogData';
import { BlogPost } from '@/types/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Lấy bài viết liên quan (cùng category)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-purple-900">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <nav className="text-purple-200 text-sm">
          <Link href="/" className="hover:text-golden transition-colors">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-golden transition-colors">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{post.title}</span>
        </nav>
      </div>

      <article className="container mx-auto px-4 pb-12">
        {/* Header */}
        <header className="max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            {/* Category */}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-golden to-yellow-300 text-purple-900 font-bold rounded-full text-sm">
                {getCategoryName(post.category)}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-purple-200 mb-8">
              <div className="flex items-center space-x-2">
                <span>👤</span>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📅</span>
                <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center space-x-2">
                  <span>⏰</span>
                  <span>{post.readTime} phút đọc</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-700/50 text-purple-200 text-sm rounded-full border border-purple-500/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-purple-300/20 mb-12">
            <div className="prose prose-lg prose-invert max-w-none">
              {/* Hiển thị nội dung markdown - trong thực tế bạn có thể dùng thư viện như react-markdown */}
              <div className="text-white leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="bg-gradient-to-r from-purple-800/50 to-indigo-800/50 rounded-2xl p-6 border border-purple-500/30 mb-12">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Chia sẻ bài viết này
            </h3>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <span>📘</span>
                <span>Facebook</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-lg transition-colors">
                <span>🐦</span>
                <span>Twitter</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                <span>📱</span>
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Bài viết liên quan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <RelatedPostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </section>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-purple-500/30">
            <Link
              href="/blog"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 hover:scale-105"
            >
              <span>←</span>
              <span>Quay lại Blog</span>
            </Link>

            <Link
              href="/blog"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-golden to-yellow-300 text-purple-900 font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Xem thêm bài viết</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-purple-300/20 hover:border-golden/50 transition-all duration-300 hover:scale-105">
        {/* Image */}
        <div className="relative h-32 bg-gradient-to-br from-purple-600 to-indigo-600">
          {post.featuredImage ? (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-3xl opacity-50">
                {getCategoryIcon(post.category)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-white mb-2 group-hover:text-golden transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-purple-200 text-sm line-clamp-2 mb-3">
            {post.excerpt}
          </p>
          <div className="text-xs text-purple-300">
            {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
          </div>
        </div>
      </article>
    </Link>
  );
}

function getCategoryName(category: string): string {
  const names: Record<string, string> = {
    'numerology': 'Thần số học',
    'zodiac': 'Cung hoàng đạo',
    'feng-shui': 'Phong thủy',
    'dreams': 'Giải mã giấc mơ',
    'spirituality': 'Tâm linh',
    'tips': 'Mẹo hay'
  };
  return names[category] || category;
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'numerology': '🔢',
    'zodiac': '♈',
    'feng-shui': '🏠',
    'dreams': '💭',
    'spirituality': '🔮',
    'tips': '💡'
  };
  return icons[category] || '📝';
}
