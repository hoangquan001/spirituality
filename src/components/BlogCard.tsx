import { BlogPost } from '@/types/blog';
import Link from 'next/link';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'small';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const isSmall = variant === 'small';

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className={`group cosmic-card rounded-2xl overflow-hidden border border-gray-400/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isSmall ? 'h-auto' : ''}`}>
        {/* Featured Image */}
        <div className={`relative ${isSmall ? 'h-32' : 'h-48'} bg-gradient-to-br from-gray-600 to-indigo-600 overflow-hidden`}>
          {post.featuredImage ? (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className={`${isSmall ? 'text-4xl' : 'text-6xl'} opacity-50`}>
                {getCategoryIcon(post.category)}
              </span>
            </div>
          )}
          
          {/* Category Badge */}
          <div className={`absolute ${isSmall ? 'top-2 left-2' : 'top-4 left-4'}`}>
            <span className={`px-3 py-1 bg-gradient-to-r from-golden to-yellow-300 text-gray-900 ${isSmall ? 'text-xs' : 'text-sm'} font-bold rounded-full`}>
              {getCategoryName(post.category)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className={`${isSmall ? 'p-4' : 'p-6'}`}>
          <h3 className={`${isSmall ? 'text-lg' : 'text-xl'} font-bold text-white mb-3 group-hover:text-golden transition-colors duration-300 line-clamp-2`}>
            {post.title}
          </h3>
          
          <p className={`text-gray-300 mb-4 line-clamp-3 ${isSmall ? 'text-sm' : ''}`}>
            {post.excerpt}
          </p>

          <div className={`flex items-center justify-between ${isSmall ? 'text-xs' : 'text-sm'} text-gray-400`}>
            <div className="flex items-center space-x-2">
              <span>👤</span>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📅</span>
              <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
            </div>
          </div>

          {/* Read time - only for default variant */}
          {!isSmall && post.readTime && (
            <div className="mt-2 text-sm text-gray-400">
              <span>⏰ {post.readTime} phút đọc</span>
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, isSmall ? 2 : 3).map((tag, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 bg-gray-700/50 text-gray-300 ${isSmall ? 'text-xs' : 'text-xs'} rounded-full`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
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
