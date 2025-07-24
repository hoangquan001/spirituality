'use client';

import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/lib/blogData';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Lọc bài viết theo tìm kiếm và danh mục
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Lấy danh sách categories duy nhất
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(blogPosts.map(post => post.category)));
    return ['all', ...uniqueCategories];
  }, []);

  const categoryNames: Record<string, string> = {
    'all': 'Tất cả',
    'numerology': 'Thần số học',
    'zodiac': 'Cung hoàng đạo',
    'feng-shui': 'Phong thủy',
    'dreams': 'Giải mã giấc mơ',
    'spirituality': 'Tâm linh',
    'tips': 'Mẹo hay'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-10 bg-gradient-to-r from-black/50 to-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Blog <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">Tâm Linh</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Khám phá những bí mật của vũ trụ, thần số học và tâm linh qua những bài viết sâu sắc
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-golden/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-yellow-300/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search và Filter */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="cosmic-card rounded-2xl p-6 border border-gray-700/20">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-700/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="md:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-700/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-black">
                      {categoryNames[category] || category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">Không tìm thấy bài viết</h3>
              <p className="text-gray-300">Thử thay đổi từ khóa tìm kiếm hoặc danh mục khác</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <FAQSection
          description="Giải đáp những thắc mắc phổ biến về blog tâm linh và nội dung"
          faqs={[
            {
              question: "Blog này có những nội dung gì?",
              answer: "Blog Tâm Linh chia sẻ kiến thức sâu sắc về thần số học, phong thủy, cung hoàng đạo, giải mã giấc mơ và các chủ đề tâm linh khác. Chúng tôi cung cấp những bài viết chất lượng cao, dễ hiểu và có thể áp dụng vào cuộc sống hàng ngày."
            },
            {
              question: "Tần suất cập nhật bài viết như thế nào?",
              answer: "Chúng tôi cập nhật blog thường xuyên với những bài viết mới mỗi tuần. Nội dung được nghiên cứu kỹ lưỡng và viết bởi những người có kinh nghiệm trong lĩnh vực tâm linh và huyền học."
            },
            {
              question: "Tôi có thể đóng góp bài viết không?",
              answer: "Có, chúng tôi luôn chào đón những bài viết chất lượng từ cộng đồng. Bạn có thể chia sẻ kiến thức, kinh nghiệm cá nhân hoặc nghiên cứu về các chủ đề tâm linh. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết."
            },
            {
              question: "Làm sao để không bỏ lỡ bài viết mới?",
              answer: "Bạn có thể bookmark trang blog này và thường xuyên ghé thăm. Chúng tôi cũng sẽ cập nhật thông tin về bài viết mới trên các kênh truyền thông xã hội và newsletter nếu có."
            }
          ]}
        />

        {/* CTA Section */}
        <div className="max-w-6xl mx-auto mt-20 text-center">
          <div className="bg-gradient-to-r from-golden/20 to-yellow-300/20 rounded-2xl p-8 border border-golden/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Muốn đóng góp bài viết?
            </h2>
            <p className="text-gray-300 mb-6">
              Chia sẻ kiến thức và kinh nghiệm của bạn với cộng đồng
            </p>
            <Link
              href="/blog/admin"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-golden to-yellow-300 text-gray-900 font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Viết bài mới
              <span className="ml-2">✨</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

