import BlogSection from '@/components/BlogSection';
import StructuredData from '@/components/StructuredData';
import FAQSection from '@/components/FAQSection';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Mystical Circle Animation */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 border border-golden/30 rounded-full animate-spin-slow">
            <div className="w-full h-full border border-golden/20 rounded-full animate-ping">
              <div className="w-full h-full border border-golden/10 rounded-full"></div>
            </div>
          </div>
        </div> */}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8 mt-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-golden via-yellow-400 to-golden bg-clip-text text-transparent">
                Giải Mã Tâm Linh
              </span>
              <br />
              <span className="text-white">Khám Phá Vận Mệnh</span>
            </h1>
            {/* <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
              <strong className="text-golden">Hành trình khám phá bản thân qua những bí ẩn huyền học!</strong>
              <br />Thần số học Pythagoras • Tử vi 12 cung hoàng đạo • Phong thủy nhà ở • Giải mã giấc mơ
            </p> */}
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Nơi hội tụ tinh hoa tri thức cổ xưa và hiện đại, giúp bạn <span className="text-golden font-semibold">hiểu rõ vận mệnh</span> và định hướng cuộc sống.
              Với hơn <span className="text-golden font-semibold">50,000 người dùng</span> tin tưởng, chúng tôi cung cấp các công cụ tâm linh chính xác và miễn phí 100%.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-900/30 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">🔢</div>
                <div className="text-golden font-semibold text-sm">Thần Số Học</div>
                <div className="text-gray-400 text-xs">Pythagoras</div>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">♈</div>
                <div className="text-golden font-semibold text-sm">12 Cung</div>
                <div className="text-gray-400 text-xs">Hoàng Đạo</div>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">🧭</div>
                <div className="text-golden font-semibold text-sm">Phong Thủy</div>
                <div className="text-gray-400 text-xs">Nhà Ở</div>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">💭</div>
                <div className="text-golden font-semibold text-sm">Giấc Mơ</div>
                <div className="text-gray-400 text-xs">Từ Điển</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/numerology"
              className="group bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50"
            >
              <span className="flex items-center gap-2">
                🔢 Khám Phá Thần Số
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>

            <Link
              href="/fengshui"
              className="group bg-transparent border-2 border-golden text-golden px-8 py-4 rounded-full font-bold text-lg hover:bg-golden hover:text-black transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                🧭 Xem Phong Thủy
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>

          {/* Feature Preview Cards - 6 Danh Mục Chính */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <Link href="/numerology" className="group">
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-golden to-yellow-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-black">🔢</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Thần Số Học</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Khám phá bí mật cuộc đời qua những con số trong ngày sinh
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Tra cưu thần số học
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Ghép đôi ngày sinh
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Dự đoán 12 tháng tới
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Gợi ý nghề nghiệp
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/zodiac" className="group">
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white">♈</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Tử Vi 12 Cung</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Vận mệnh và tính cách qua 12 cung hoàng đạo
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Tử vi hôm nay
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Tử vi 12 cung
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Ghép đôi cung hoàng đạo
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Lịch tử vi cá nhân
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/fengshui" className="group">
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white">🧭</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Phong Thủy</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Hài hòa năng lượng sống theo nguyên lý phong thủy
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Màu sắc hợp mệnh
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Hướng hợp tuổi
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Chọn ngày tốt
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Phong thủy nhà ở
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/dream" className="group">
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white">�</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Giải Mã & Bói</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Khám phá thông điệp từ tiềm thức và vận may
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Giải mã giấc mơ
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Ý nghĩa con số
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Bói bài Tarot
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Minigame bói vui
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/calendar" className="group">
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white">�</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Tiện Ích</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Công cụ hỗ trợ cuộc sống theo lịch âm dương
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Chuyển đổi lịch
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Lịch vạn sự
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Tuổi kết hôn
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Tam tai - Hạn năm
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog" className="group">
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <span className="text-white">📚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Blog Tâm Linh</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Kho tàng kiến thức huyền học và phong thủy
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Kiến thức thần số
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Bí quyết phong thủy
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Câu chuyện tử vi
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Chia sẻ kinh nghiệm
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mystical Knowledge Section */}
      {/* <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
                Khám Phá Huyền Học
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Hành trình tìm hiểu bản thân qua những tri thức cổ xưa và hiện đại
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900/20 to-purple-900/20 rounded-3xl p-8 border border-golden/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-golden">✨</span>
              Cộng Đồng Khám Phá Huyền Học
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">
                  <span className="text-golden text-3xl">🔢</span>
                </div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-golden to-yellow-500 bg-clip-text text-transparent mb-2">15,247</div>
                <div className="text-xs text-gray-400">Thần Số Học</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">
                  <span className="text-golden text-3xl">♈</span>
                </div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-2">9,583</div>
                <div className="text-xs text-gray-400">Tử Vi</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">
                  <span className="text-golden text-3xl">🧭</span>
                </div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">6,821</div>
                <div className="text-xs text-gray-400">Phong Thủy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">
                  <span className="text-golden text-3xl">�</span>
                </div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">4,392</div>
                <div className="text-xs text-gray-400">Giải Mã & Bói</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">
                  <span className="text-golden text-3xl">�</span>
                </div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">3,156</div>
                <div className="text-xs text-gray-400">Tiện Ích</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">
                  <span className="text-golden text-3xl">�</span>
                </div>
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">2,847</div>
                <div className="text-xs text-gray-400">Blog</div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-golden/10 to-purple/10 rounded-2xl border border-golden/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-golden">🌟</span>
                Tại sao chọn Giải Mã Tâm Linh?
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">🔮</span>
                  <div>
                    <strong className="text-white">Tri thức cổ xưa:</strong> Kết hợp tinh hoa thần số học, tử vi và phong thủy truyền thống
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">🎯</span>
                  <div>
                    <strong className="text-white">Dễ hiểu và thực tế:</strong> Giải thích rõ ràng, áp dụng được vào cuộc sống hàng ngày
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">🌸</span>
                  <div>
                    <strong className="text-white">Giao diện thân thiện:</strong> Thiết kế đẹp mắt, dễ sử dụng trên mọi thiết bị
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">💝</span>
                  <div>
                    <strong className="text-white">Hoàn toàn miễn phí:</strong> Chia sẻ kiến thức huyền học không thu phí
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">📚</span>
                  <div>
                    <strong className="text-white">Nội dung phong phú:</strong> 6 lĩnh vực huyền học với hàng trăm tính năng
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">🔒</span>
                  <div>
                    <strong className="text-white">Bảo mật thông tin:</strong> Không lưu trữ hay chia sẻ dữ liệu cá nhân
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-golden mt-1">🌟</span>
                  <div>
                    <strong className="text-white">Cộng đồng tin tưởng:</strong> Hơn 50,000 người dùng đã khám phá bản thân và tìm được định hướng cuộc sống
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Overview */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Giải Mã Tâm Linh
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Những công cụ thú vị để khám phá và tìm hiểu về bản thân
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Numerology Service */}
            <div className="group bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-golden to-yellow-500 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-black text-2xl">🔢</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  <Link href="/numerology" className="hover:text-golden transition-colors">
                    Thần Số Học Pythagoras
                  </Link>
                </h3>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• <Link href="/numerology" className="hover:text-golden transition-colors">Tìm hiểu số mệnh của bạn</Link></li>
                  <li>• Khám phá tính cách qua ngày sinh</li>
                  <li>• Những điều thú vị về con số định mệnh</li>
                  <li>• Tìm hiểu điểm mạnh và đặc điểm nổi bật</li>
                  <li>• Khám phá tài năng tiềm ẩn</li>
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
            <div className="group bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-gray-500 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">♈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  <Link href="/zodiac" className="hover:text-golden transition-colors">
                    Cung Hoàng Đạo & Tử Vi
                  </Link>
                </h3>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• <Link href="/zodiac" className="hover:text-golden transition-colors">Xem tử vi 12 cung hoàng đạo</Link></li>
                  <li>• Dự đoán tình yêu và sự nghiệp theo cung</li>
                  <li>• Phân tích tính cách và điểm mạnh yếu</li>
                  <li>• Độ tương thích giữa các cung hoàng đạo</li>
                  <li>• Lời khuyên hàng ngày cho từng cung</li>
                </ul>
                <Link 
                  href="/zodiac"
                  className="inline-block bg-gradient-to-r from-indigo-500 to-gray-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Xem Cung Của Bạn
                </Link>
              </div>
            </div>

            {/* Dream Service */}
            <div className="group bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  💫
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  <Link href="/dream" className="hover:text-golden transition-colors">
                    Giải Mã Giấc Mơ
                  </Link>
                </h3>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• <Link href="/dream" className="hover:text-golden transition-colors">Từ điển giấc mơ đầy đủ nhất</Link></li>
                  <li>• Diễn giải ý nghĩa tâm linh sâu sắc</li>
                  <li>• Khám phá thông điệp từ tiềm thức</li>
                  <li>• Tìm số may mắn từ giấc mơ của bạn</li>
                  <li>• Lời khuyên và cảnh báo từ giấc mơ</li>
                </ul>
                <Link 
                  href="/dream"
                  className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Giải Mã Giấc Mơ
                </Link>
              </div>
            </div>

            {/* Name Analysis Service */}
            <div className="group bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">✍️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Bói Tên</h3>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Phân tích tên tuổi</li>
                  <li>• Ý nghĩa phong thủy</li>
                  <li>• Tác động đến vận mệnh</li>
                  <li>• Gợi ý cải thiện</li>
                </ul>
                <Link 
                  href="/name-analysis"
                  className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Phân Tích Tên
                </Link>
              </div>
            </div>

            {/* Birthday Match Service */}
            <div className="group bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">💕</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Bói tình yêu</h3>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Hợp tuổi vợ chồng</li>
                  <li>• Tình duyên & tương thích</li>
                  <li>• Độ phù hợp tính cách</li>
                  <li>• Lời khuyên mối quan hệ</li>
                </ul>
                <Link 
                  href="/birthday-match"
                  className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Xem Độ Hợp
                </Link>
              </div>
            </div>

            {/* Feng Shui Service */}
            <div className="group bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl">🧭</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Phong Thủy</h3>
                <ul className="text-gray-300 text-sm space-y-2 mb-6">
                  <li>• Hướng dẫn bố trí nhà</li>
                  <li>• Màu sắc may mắn</li>
                  <li>• Vật phẩm phong thủy</li>
                  <li>• Tăng vận may tài lộc</li>
                </ul>
                <Link 
                  href="/feng-shui"
                  className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                >
                  Xem Phong Thủy
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Tools Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Công Cụ & Tiện Ích
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/calendar" className="group">
                <div className="cosmic-card rounded-2xl p-6 border border-gray-700/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🌙</div>
                  <h4 className="text-lg font-bold text-white mb-2">Chuyển Đổi Lịch</h4>
                  <p className="text-gray-400 text-sm">Dương ⇄ Âm lịch</p>
                </div>
              </Link>

              <Link href="/marriage-age" className="group">
                <div className="cosmic-card rounded-2xl p-6 border border-gray-700/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">�</div>
                  <h4 className="text-lg font-bold text-white mb-2">Tuổi Kết Hôn</h4>
                  <p className="text-gray-400 text-sm">Độ tuổi hợp nhau</p>
                </div>
              </Link>

              <Link href="/tam-tai" className="group">
                <div className="cosmic-card rounded-2xl p-6 border border-gray-700/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚠️</div>
                  <h4 className="text-lg font-bold text-white mb-2">Tam Tai - Hạn Năm</h4>
                  <p className="text-gray-400 text-sm">Tính năm xui, hạn tuổi</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* Knowledge Hub Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
                Kiến Thức Cơ Bản
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Khám phá kho tàng tri thức huyền học từ cơ bản đến nâng cao
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Numerology Guide */}
            <Link href="/huong-dan-than-so-hoc" className="group">
              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-golden to-yellow-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform">
                    📚
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Hướng Dẫn Thần Số Học</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Học thần số học từ A-Z, từ cơ bản đến nâng cao. Cách tính số mệnh, phân tích tính cách và vận mệnh.
                  </p>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Lý thuyết cơ bản
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Cách tính toán
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Ý nghĩa các số
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-golden">•</span> Ứng dụng thực tế
                  </div>
                </div>
              </div>
            </Link>

            {/* Feng Shui Tips */}
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                  🏠
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Phong Thủy Nhà Ở</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  10 nguyên tắc vàng trong phong thủy nhà ở để thu hút tài lộc và mang lại bình an cho gia đình.
                </p>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-golden">•</span> Bố trí cửa chính
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-golden">•</span> Phòng khách hợp phong thủy
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-golden">•</span> Màu sắc theo mệnh
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-golden">•</span> Cây xanh trong nhà
                </div>
              </div>
            </div>

            {/* Zodiac Knowledge */}
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 h-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                  ⭐
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Bí Mật 12 Cung</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Khám phá đặc điểm, tính cách và vận mệnh của 12 cung hoàng đạo. Tử vi hàng ngày và lời khuyên cuộc sống.
                </p>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-golden">•</span> Tính cách từng cung
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-golden">•</span> Tử vi hôm nay
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-golden">•</span> Tương thích tình yêu
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-golden">•</span> Nghề nghiệp phù hợp
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gradient-to-br from-golden/10 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-golden/20">
            <h3 className="text-2xl font-bold text-golden mb-6 text-center">
              💡 Mẹo Tâm Linh Hàng Ngày
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🌅</div>
                <h4 className="font-semibold text-white mb-2">Buổi Sáng</h4>
                <p className="text-gray-300 text-sm">Thiền định 5 phút để bắt đầu ngày mới tích cực</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔢</div>
                <h4 className="font-semibold text-white mb-2">Số May Mắn</h4>
                <p className="text-gray-300 text-sm">Sử dụng số mệnh khi chọn số điện thoại, địa chỉ</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌿</div>
                <h4 className="font-semibold text-white mb-2">Cây Xanh</h4>
                <p className="text-gray-300 text-sm">Đặt cây kim tiền ở góc tài lộc để thu hút tiền bạc</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🌙</div>
                <h4 className="font-semibold text-white mb-2">Buổi Tối</h4>
                <p className="text-gray-300 text-sm">Ghi lại giấc mơ để hiểu thông điệp từ tiềm thức</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Expertise & Authority Section */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
                Nội Dung Chất Lượng
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Nội dung được tổng hợp và trình bày một cách dễ hiểu, thú vị
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Expertise Card 1 */}
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-golden to-yellow-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  📚
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Kiến Thức Sâu Rộng</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Nghiên cứu và ứng dụng thần số học Pythagoras, Kabbalah, và các hệ thống tâm linh phương Đông.
                  Kết hợp kiến thức cổ đại với công nghệ hiện đại.
                </p>
              </div>
            </div>

            {/* Expertise Card 2 */}
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  🔬
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Phương Pháp Khoa Học</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Sử dụng thuật toán chính xác, được kiểm chứng qua hàng nghìn trường hợp thực tế.
                  Áp dụng phương pháp nghiên cứu khoa học trong tâm linh học.
                </p>
              </div>
            </div>

            {/* Expertise Card 3 */}
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ứng Dụng Thực Tiễn</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tập trung vào việc chia sẻ những thông tin thiết thực, có thể áp dụng ngay vào cuộc sống.
                  Giúp người dùng đưa ra quyết định đúng đắn và tìm được định hướng rõ ràng.
                </p>
              </div>
            </div>
          </div>

          {/* Problem-Solution Framework */}
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
                Giải Quyết Những Thắc Mắc Lớn Trong Cuộc Sống
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Problems */}
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                  <span>❌</span> Những Khó Khăn Bạn Đang Gặp Phải
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Không hiểu rõ bản thân, tính cách và tiềm năng</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Bối rối trong việc chọn nghề nghiệp và định hướng tương lai</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Khó khăn trong các mối quan hệ tình cảm và hôn nhân</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Cảm thấy cuộc sống thiếu ý nghĩa và mục tiêu rõ ràng</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Không biết cách tận dụng thế mạnh và khắc phục điểm yếu</span>
                  </li>
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                  <span>✅</span> Giải Pháp Từ Tâm Linh - Thần Số Học
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Khám phá tính cách, tài năng và sứ mệnh cuộc đời qua số mệnh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Tìm ra nghề nghiệp phù hợp và con đường phát triển tối ưu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Phân tích độ tương thích trong tình yêu và tìm được người phù hợp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Hiểu rõ mục đích sống và tìm được ý nghĩa thực sự của cuộc đời</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Nhận ra điểm mạnh để phát huy và cách khắc phục hạn chế</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/numerology"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-golden to-yellow-300 text-gray-900 font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span>Bắt Đầu Khám Phá Ngay</span>
                <span className="ml-2">🔢</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        description="Giải đáp những thắc mắc phổ biến về thần số học và các Giải Mã Tâm Linh"
        faqs={[
          {
            question: "Website có những gì?",
            answer: "Giải Mã Tâm Linh cung cấp 6 lĩnh vực huyền học chính: Thần số học (phân tích ngày sinh, ghép đôi), Tử vi 12 cung (tử vi hôm nay, ghép đôi cung), Phong thủy (màu sắc, hướng nhà, chọn ngày), Giải mã & Bói (giấc mơ, Tarot, minigame), Tiện ích (chuyển lịch, tuổi cưới) và Blog kiến thức."
          },
          {
            question: "Phong thủy có tác dụng gì?",
            answer: "Phong thủy là nghệ thuật sắp xếp không gian sống hài hòa với thiên nhiên để thu hút năng lượng tích cực. Website cung cấp thông tin về màu sắc hợp mệnh, hướng nhà phù hợp với tuổi, cách chọn ngày tốt cho các sự kiện quan trọng, và hướng dẫn bố trí nội thất theo nguyên lý phong thủy để mang lại may mắn và thịnh vượng."
          },
          {
            question: "Cung hoàng đạo và thần số học khác nhau như thế nào?",
            answer: "Cung hoàng đạo dựa trên vị trí của mặt trời tại thời điểm sinh, chia thành 12 cung theo tháng sinh. Thần số học dựa trên ngày sinh cụ thể và tên tuổi, tập trung vào các con số và rung động năng lượng. Cả hai đều có giá trị riêng: cung hoàng đạo giúp hiểu tính cách tổng quát, thần số học chia sẻ thông tin chi tiết về đường đời và những đặc điểm cá nhân."
          },
          {
            question: "Tôi có thể thay đổi vận mệnh được không?",
            answer: "Thần số học không quyết định hoàn toàn vận mệnh mà chỉ chỉ ra xu hướng, tiềm năng và thách thức trong cuộc sống. Bạn hoàn toàn có thể thay đổi cuộc sống thông qua: thay đổi tên (ảnh hưởng đến số biểu đạt), chọn số điện thoại phù hợp, bố trí nhà cửa theo phong thủy, và quan trọng nhất là nỗ lực cá nhân. Thần số học chỉ là công cụ hỗ trợ để bạn hiểu rõ bản thân và đưa ra quyết định đúng đắn."
          },
          {
            question: "Công cụ có tính phí không?",
            answer: "Tất cả các cụ cơ bản tại Tâm Linh đều hoàn toàn miễn phí, bao gồm: tính thần số học, xem cung hoàng đạo, giải mã giấc mơ, phân tích tên tuổi, bói tình yêu, và các công cụ phong thủy. Chúng mình cam kết chia sẻ kiến thức tâm linh chất lượng cao mà không thu phí, giúp mọi người đều có cơ hội khám phá và hiểu rõ bản thân."
          },
          {
            question: "Thông tin cá nhân của tôi có được bảo mật không?",
            answer: "Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn một cách tuyệt đối. Tất cả dữ liệu được mã hóa, không lưu trữ trên server và không chia sẻ với bất kỳ bên thứ ba nào. Quá trình tính toán diễn ra hoàn toàn trên trình duyệt của bạn, đảm bảo tính riêng tư và bảo mật cao nhất."
          }
        ]}
      />

      {/* Call to Action */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-12 border border-golden/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Khám Phá <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">Vận Mệnh Của Bạn</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Hành trình tự khám phá bắt đầu từ một bước nhỏ.
              Hãy để những tri thức huyền học cổ xưa dẫn lối cho cuộc sống của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/numerology"
                className="flex items-center bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50"
              >
                <span className="flex items-center gap-2">🔢 Thần Số Học</span>
              </Link>
              <Link
                href="/feng-shui"
                className="bg-transparent border-2 border-golden text-golden px-8 py-4 rounded-full font-bold text-lg hover:bg-golden hover:text-black transition-all duration-300"
              >
                🧭 Phong Thủy
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

