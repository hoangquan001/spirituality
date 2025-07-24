import { blogPosts } from '@/lib/blogData';
import Link from 'next/link';
import BlogCard from './BlogCard';

export default function BlogSection() {
  // Lấy 3 bài viết mới nhất
  const latestPosts = blogPosts
    .filter(post => post.isPublished)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

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
        </div>

        {/* Categories Preview */}
        <div className="max-w-6xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Chủ đề nổi bật</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <CategoryCard
              name="Thần số học"
              icon="🔢"
              href="/blog?category=numerology"
              count={blogPosts.filter(p => p.category === 'numerology' && p.isPublished).length}
            />
            <CategoryCard
              name="Cung hoàng đạo"
              icon="♈"
              href="/blog?category=zodiac"
              count={blogPosts.filter(p => p.category === 'zodiac' && p.isPublished).length}
            />
            <CategoryCard
              name="Phong thủy"
              icon="🏠"
              href="/blog?category=feng-shui"
              count={blogPosts.filter(p => p.category === 'feng-shui' && p.isPublished).length}
            />
            <CategoryCard
              name="Giải mã giấc mơ"
              icon="💭"
              href="/blog?category=dreams"
              count={blogPosts.filter(p => p.category === 'dreams' && p.isPublished).length}
            />
            <CategoryCard
              name="Tâm linh"
              icon="🔮"
              href="/blog?category=spirituality"
              count={blogPosts.filter(p => p.category === 'spirituality' && p.isPublished).length}
            />
            <CategoryCard
              name="Mẹo hay"
              icon="💡"
              href="/blog?category=tips"
              count={blogPosts.filter(p => p.category === 'tips' && p.isPublished).length}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ name, icon, href, count }: {
  name: string;
  icon: string;
  href: string;
  count: number;
}) {
  return (
    <Link href={href}>
      <div className="group cosmic-card rounded-xl p-4 border border-gray-400/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 text-center">
        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-white font-medium text-sm mb-1 group-hover:text-golden transition-colors">
          {name}
        </h4>
        <p className="text-gray-400 text-xs">
          {count} bài viết
        </p>
      </div>
    </Link>
  );
}
