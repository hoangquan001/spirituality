import Link from 'next/link';

interface RelatedServicesProps {
  currentPage?: string;
}

export default function RelatedServices({ currentPage }: RelatedServicesProps) {
  const services = [
    {
      href: "/numerology",
      icon: "🔮",
      title: "Thần Số Học Pythagoras",
      description: "Tính số mệnh và phân tích tính cách thú vị"
    },
    {
      href: "/name-analysis",
      icon: "✍️",
      title: "Bói Tên Theo Số",
      description: "Phân tích tên tuổi theo thần số học"
    },
    {
      href: "/dream",
      icon: "💭",
      title: "Giải Mã Giấc Mơ",
      description: "Từ điển giấc mơ đầy đủ nhất"
    },
    {
      href: "/zodiac",
      icon: "⭐",
      title: "Cung Hoàng Đạo",
      description: "Tử vi 12 cung hoàng đạo thú vị"
    },
    {
      href: "/birthday-match",
      icon: "💑",
      title: "Bói Tình Yêu",
      description: "Hợp tuổi và độ tương thích"
    },
    {
      href: "/feng-shui",
      icon: "🏠",
      title: "Phong Thủy",
      description: "Bố trí nhà cửa theo phong thủy"
    }
  ];

  // Filter out the current page and limit to 3 services
  const filteredServices = services
    .filter(service => service.href !== currentPage)
    .slice(0, 3);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nội Dung Liên Quan
            </span>
          </h2>
          <p className="text-gray-300">
            Khám phá thêm các Giải Mã Tâm Linh khác để hiểu rõ hơn về bản thân
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
                Tất Cả Nội Dung Đều Miễn Phí 100%
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Chúng mình cam kết chia sẻ tất cả nội dung Giải Mã Tâm Linh chất lượng cao hoàn toàn miễn phí.
              Hãy khám phá và tìm hiểu về bản thân ngay hôm nay!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/numerology"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-golden to-yellow-300 text-gray-900 font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span>Tính Số Mệnh</span>
                <span className="ml-2">🔮</span>
              </Link>
              <Link 
                href="/zodiac"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span>Xem Cung Hoàng Đạo</span>
                <span className="ml-2">⭐</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
