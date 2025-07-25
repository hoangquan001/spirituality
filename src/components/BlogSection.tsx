'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import BlogCard from './BlogCard';
import { BlogPost } from '@/types/blog';

export default function BlogSection() {
  const [latestPosts, setLatestPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  const fetchLatestPosts = async () => {
    try {
      const response = await fetch('/api/blog?published=true&limit=3');
      if (!response.ok) throw new Error('Failed to fetch posts');
      
      const data = await response.json();
      setLatestPosts(data.posts);
    } catch (err) {
      console.error('Error fetching latest posts:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-900/50 to-gray-900/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Blog <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">Tâm Linh</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Khám phá những bí mật của vũ trụ, thần số học và tâm linh qua những bài viết sâu sắc từ các chuyên gia
          </p>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-golden"></div>
            <span className="text-golden text-2xl">✦</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-golden"></div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-10">
              <div className="animate-spin w-12 h-12 border-4 border-golden border-t-transparent rounded-full mb-4 mx-auto"></div>
              <p className="text-gray-300">Đang tải bài viết...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {latestPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-golden to-yellow-300 text-gray-900 font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Xem tất cả bài viết</span>
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Categories Preview */}
        {/* <div className="max-w-6xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Chủ đề nổi bật</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <CategoryCard
              name="Thần số học"
              icon="🔢"
              href="/blog?category=numerology"
            />
            <CategoryCard
              name="Cung hoàng đạo"
              icon="♈"
              href="/blog?category=zodiac"
            />
            <CategoryCard
              name="Phong thủy"
              icon="🏠"
              href="/blog?category=feng-shui"
            />
            <CategoryCard
              name="Giải mã giấc mơ"
              icon="💭"
              href="/blog?category=dreams"
            />
            <CategoryCard
              name="Tâm linh"
              icon="🔮"
              href="/blog?category=spirituality"
            />
            <CategoryCard
              name="Mẹo hay"
              icon="💡"
              href="/blog?category=tips"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}

// function CategoryCard({ name, icon, href, count }: {
//   name: string;
//   icon: string;
//   href: string;
//   count?: number;
// }) {
//   return (
//     <Link href={href}>
//       <div className="group cosmic-card rounded-xl p-4 border border-gray-400/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 text-center">
//         <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
//           {icon}
//         </div>
//         <h4 className="text-white font-medium text-sm mb-1 group-hover:text-golden transition-colors">
//           {name}
//         </h4>
//         {count !== undefined && (
//           <p className="text-gray-400 text-xs">
//             {count} bài viết
//           </p>
//         )}
//       </div>
//     </Link>
//   );
// }
