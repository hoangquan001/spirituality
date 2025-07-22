import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
        
        {/* Mystical Circle Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 border border-golden/30 rounded-full animate-spin-slow">
            <div className="w-full h-full border border-golden/20 rounded-full animate-ping">
              <div className="w-full h-full border border-golden/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-golden via-yellow-400 to-golden bg-clip-text text-transparent">
                Tâm Linh
              </span>
              <br />
              <span className="text-white">Thần Số Học</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 leading-relaxed">
              Khám phá bí mật của số phận qua thần số học, cung hoàng đạo và giải mã giấc mơ
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="/numerology"
              className="group bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50"
            >
              <span className="flex items-center gap-2">
                🔮 Tính Thần Số
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            
            <Link 
              href="/zodiac"
              className="group bg-transparent border-2 border-golden text-golden px-8 py-4 rounded-full font-bold text-lg hover:bg-golden hover:text-black transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                ⭐ Cung Hoàng Đạo
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>

          {/* Feature Preview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Link href="/numerology" className="group">
              <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-300/20 hover:border-golden/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                <h3 className="text-xl font-bold text-white mb-3">Thần Số Học</h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  Khám phá con số định mệnh, tính cách và vận may qua ngày sinh và tên của bạn
                </p>
              </div>
            </Link>

            <Link href="/zodiac" className="group">
              <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-300/20 hover:border-golden/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
                <h3 className="text-xl font-bold text-white mb-3">Cung Hoàng Đạo</h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  Tìm hiểu tính cách, tình yêu, sự nghiệp dựa trên cung hoàng đạo của bạn
                </p>
              </div>
            </Link>

            <Link href="/dream" className="group">
              <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-300/20 hover:border-golden/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💫</div>
                <h3 className="text-xl font-bold text-white mb-3">Giải Mã Giấc Mơ</h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  Khám phá ý nghĩa sâu sắc của những giấc mơ và thông điệp từ tiềm thức
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Fortune Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
                Vận Số Hôm Nay
              </span>
            </h2>
            <p className="text-purple-200 text-lg">
              Cập nhật tình hình vận may trong ngày để đưa ra quyết định tốt nhất
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-golden">🌟</span>
              Thống Kê Mystical
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🔮</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">12,847</div>
                <div className="text-sm text-purple-300">Lần Tính Thần Số</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⭐</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent mb-2">8,293</div>
                <div className="text-sm text-purple-300">Cung Hoàng Đạo Xem</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💫</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">5,621</div>
                <div className="text-sm text-purple-300">Giấc Mơ Giải Thích</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">98.5%</div>
                <div className="text-sm text-purple-300">Độ Hài Lòng</div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-golden/10 to-purple-500/10 rounded-2xl border border-golden/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-golden">✨</span>
                Tại sao chọn chúng tôi?
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-200">
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">🎯</span>
                  <div>
                    <strong className="text-white">Chính xác cao:</strong> Sử dụng các phương pháp tính toán truyền thống được kiểm chứng
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">🔒</span>
                  <div>
                    <strong className="text-white">Bảo mật tuyệt đối:</strong> Thông tin cá nhân được bảo vệ an toàn
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">🎨</span>
                  <div>
                    <strong className="text-white">Giao diện đẹp:</strong> Thiết kế hiện đại, dễ sử dụng trên mọi thiết bị
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">📱</span>
                  <div>
                    <strong className="text-white">Miễn phí 100%:</strong> Tất cả tính năng đều hoàn toàn miễn phí
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dịch Vụ Tâm Linh
              </span>
            </h2>
            <p className="text-purple-200 text-lg">
              Khám phá đầy đủ các dịch vụ tâm linh để hiểu rõ bản thân và tương lai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Numerology Service */}
            <div className="group bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20 hover:border-golden/50 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-golden to-yellow-500 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  🔮
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Thần Số Học</h3>
                <ul className="text-purple-200 text-sm space-y-2 mb-6">
                  <li>• Con số định mệnh</li>
                  <li>• Phân tích tính cách</li>
                  <li>• Dự đoán vận may</li>
                  <li>• Số điện thoại may mắn</li>
                </ul>
                <Link 
                  href="/numerology"
                  className="inline-block bg-gradient-to-r from-golden to-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Khám Phá Ngay
                </Link>
              </div>
            </div>

            {/* Zodiac Service */}
            <div className="group bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20 hover:border-golden/50 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  ⭐
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cung Hoàng Đạo</h3>
                <ul className="text-purple-200 text-sm space-y-2 mb-6">
                  <li>• 12 cung hoàng đạo</li>
                  <li>• Tình yêu & sự nghiệp</li>
                  <li>• Tính cách chi tiết</li>
                  <li>• Tương thích với người khác</li>
                </ul>
                <Link 
                  href="/zodiac"
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Xem Cung Của Bạn
                </Link>
              </div>
            </div>

            {/* Dream Service */}
            <div className="group bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20 hover:border-golden/50 transition-all duration-500 hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  💫
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Giải Mã Giấc Mơ</h3>
                <ul className="text-purple-200 text-sm space-y-2 mb-6">
                  <li>• Từ điển giấc mơ</li>
                  <li>• Ý nghĩa tâm linh</li>
                  <li>• Thông điệp tiềm thức</li>
                  <li>• Số may mắn từ giấc mơ</li>
                </ul>
                <Link 
                  href="/dream"
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Giải Mã Giấc Mơ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-sm rounded-3xl p-12 border border-purple-300/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bắt Đầu Hành Trình <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">Khám Phá Bản Thân</span>
            </h2>
            <p className="text-purple-200 text-lg mb-8 leading-relaxed">
              Đừng để những bí ẩn của cuộc sống trở thành gánh nặng. 
              Hãy để chúng tôi giúp bạn tìm ra con đường và ý nghĩa thực sự của cuộc đời.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/numerology"
                className="bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50"
              >
                🔮 Tính Thần Số Ngay
              </Link>
              <Link 
                href="/zodiac"
                className="bg-transparent border-2 border-golden text-golden px-8 py-4 rounded-full font-bold text-lg hover:bg-golden hover:text-black transition-all duration-300"
              >
                ⭐ Xem Cung Hoàng Đạo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
