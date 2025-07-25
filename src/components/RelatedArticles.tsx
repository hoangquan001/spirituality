import Link from 'next/link';

interface RelatedArticle {
  title: string;
  href: string;
  description: string;
  category: string;
  readTime: number;
}

interface RelatedArticlesProps {
  currentPage: string;
  category?: string;
}

const allArticles: RelatedArticle[] = [
  {
    title: "Hướng Dẫn Thần Số Học Từ A-Z",
    href: "/huong-dan-than-so-hoc",
    description: "Học thần số học từ cơ bản đến nâng cao, cách tính số mệnh và phân tích tính cách",
    category: "numerology",
    readTime: 15
  },
  {
    title: "10 Nguyên Tắc Phong Thủy Nhà Ở",
    href: "/blog/phong-thuy-nha-o-10-nguyen-tac-vang-mang-lai-tai-loc",
    description: "Bí quyết bố trí nhà ở hài hòa để thu hút tài lộc và mang lại bình an",
    category: "fengshui",
    readTime: 8
  },
  {
    title: "Tử Vi Hôm Nay Cho 12 Cung",
    href: "/blog/cung-hoang-dao-hom-nay-du-doan-tu-vi-12-cung-chi-tiet",
    description: "Dự đoán tình yêu, sự nghiệp, tài chính chi tiết cho từng cung hoàng đạo",
    category: "zodiac",
    readTime: 10
  },
  {
    title: "Cách Tính Số Mệnh Chính Xác",
    href: "/than-so-hoc",
    description: "Công cụ tính số mệnh theo phương pháp Pythagoras, phân tích tính cách và vận mệnh",
    category: "numerology",
    readTime: 5
  },
  {
    title: "Giải Mã Giấc Mơ Từ A-Z",
    href: "/dream",
    description: "Từ điển giấc mơ đầy đủ nhất, khám phá thông điệp từ tiềm thức",
    category: "dream",
    readTime: 7
  },
  {
    title: "Phong Thủy Hướng Nhà",
    href: "/phong-thuy/directions",
    description: "Tìm hướng nhà phù hợp với tuổi để thu hút may mắn và thịnh vượng",
    category: "fengshui",
    readTime: 6
  },
  {
    title: "Bói Tên Theo Thần Số Học",
    href: "/than-so-hoc/phan-tich-ten",
    description: "Phân tích ý nghĩa tên tuổi, tác động đến tính cách và vận mệnh",
    category: "numerology",
    readTime: 4
  },
  {
    title: "Ghép Đôi Ngày Sinh",
    href: "/birthday-match",
    description: "Kiểm tra độ hợp tuổi trong tình yêu dựa trên thần số học",
    category: "numerology",
    readTime: 3
  }
];

export default function RelatedArticles({ currentPage, category }: RelatedArticlesProps) {
  // Filter articles based on category or show random articles
  let filteredArticles = allArticles.filter(article => article.href !== currentPage);
  
  if (category) {
    const categoryArticles = filteredArticles.filter(article => article.category === category);
    const otherArticles = filteredArticles.filter(article => article.category !== category);
    
    // Show 2 from same category + 1 from other categories
    filteredArticles = [
      ...categoryArticles.slice(0, 2),
      ...otherArticles.slice(0, 1)
    ];
  } else {
    // Show 3 random articles
    filteredArticles = filteredArticles.slice(0, 3);
  }

  if (filteredArticles.length === 0) return null;

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
              Bài Viết Liên Quan
            </span>
          </h2>
          <p className="text-gray-300">
            Khám phá thêm những kiến thức tâm linh hữu ích khác
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <Link key={index} href={article.href} className="group">
              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 h-full">
                <div className="flex items-start justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    article.category === 'numerology' ? 'bg-golden/20 text-golden' :
                    article.category === 'fengshui' ? 'bg-green-500/20 text-green-400' :
                    article.category === 'zodiac' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {article.category === 'numerology' ? 'Thần Số Học' :
                     article.category === 'fengshui' ? 'Phong Thủy' :
                     article.category === 'zodiac' ? 'Cung Hoàng Đạo' :
                     'Giải Mã Giấc Mơ'}
                  </span>
                  <span className="text-gray-400 text-xs">{article.readTime} phút đọc</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-golden transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                
                <div className="mt-4 flex items-center text-golden text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Đọc thêm →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
