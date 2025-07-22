import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent">
                Khám Phá
              </span>
              <br />
              <span className="text-white">Số Mệnh Của Bạn</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Thần số học - cánh cửa bí mật dẫn đến sự hiểu biết sâu sắc về bản thân, 
              tương lai và những điều kỳ diệu trong cuộc sống.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <Link
              href="/numerology"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-golden to-yellow-400 hover:from-yellow-400 hover:to-golden text-purple-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mystical-button"
            >
              <span className="mr-3">✨</span>
              Bắt Đầu Khám Phá Ngay
              <span className="ml-3">→</span>
            </Link>
          </div>

          {/* Mystical Circle */}
          <div className="relative mx-auto w-64 h-64 mb-16">
            <div className="absolute inset-0 rounded-full border-2 border-golden/30 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-golden rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-golden rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-golden rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-golden rounded-full"></div>
            </div>
            <div className="absolute inset-4 rounded-full border border-purple-400/40 flex items-center justify-center">
              <div className="text-6xl text-golden">✦</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
              Dịch Vụ Tâm Linh
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Numerology Card */}
            <Link href="/numerology" className="block group">
              <div className="cosmic-card rounded-2xl p-8 h-full text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🔮</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Thần Số Học</h3>
                <p className="text-purple-200 mb-6 leading-relaxed">
                  Khám phá số mệnh, đường đời và những bí ẩn ẩn giấu trong ngày sinh của bạn.
                  Tìm hiểu tính cách, thế mạnh và thách thức trong cuộc sống.
                </p>
                <div className="text-golden font-semibold">Khám phá ngay →</div>
              </div>
            </Link>

            {/* Dream Card */}
            <Link href="/dream" className="block group">
              <div className="cosmic-card rounded-2xl p-8 h-full text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌙</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Giải Mã Giấc Mơ</h3>
                <p className="text-purple-200 mb-6 leading-relaxed">
                  Tìm hiểu ý nghĩa sâu xa của những giấc mơ. Giải mã thông điệp từ tiềm thức 
                  và khám phá những điều thú vị ẩn giấu trong giấc ngủ.
                </p>
                <div className="text-golden font-semibold">Giải mã ngay →</div>
              </div>
            </Link>

            {/* Zodiac Card */}
            <Link href="/zodiac" className="block group">
              <div className="cosmic-card rounded-2xl p-8 h-full text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⭐</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Tử Vi 12 Cung</h3>
                <p className="text-purple-200 mb-6 leading-relaxed">
                  Khám phá vận mệnh qua 12 cung hoàng đạo. Tìm hiểu về tính cách, 
                  tình yêu, sự nghiệp và những dự đoán cho tương lai.
                </p>
                <div className="text-golden font-semibold">Xem tử vi →</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
                Tại Sao Chọn Chúng Tôi?
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="cosmic-card rounded-xl p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3">Chính Xác & Tin Cậy</h3>
                <p className="text-purple-200">
                  Sử dụng các phương pháp thần số học truyền thống được kiểm chứng qua hàng nghìn năm.
                </p>
              </div>

              <div className="cosmic-card rounded-xl p-6">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Bảo Mật Tuyệt Đối</h3>
                <p className="text-purple-200">
                  Thông tin cá nhân của bạn được bảo vệ và không được chia sẻ với bên thứ ba.
                </p>
              </div>

              <div className="cosmic-card rounded-xl p-6">
                <div className="text-4xl mb-4">💫</div>
                <h3 className="text-xl font-bold text-white mb-3">Dễ Sử Dụng</h3>
                <p className="text-purple-200">
                  Giao diện thân thiện, chỉ cần vài bước đơn giản để có được kết quả chi tiết.
                </p>
              </div>

              <div className="cosmic-card rounded-xl p-6">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-white mb-3">Hoàn Toàn Miễn Phí</h3>
                <p className="text-purple-200">
                  Tất cả dịch vụ cơ bản đều miễn phí, giúp bạn khám phá bản thân không giới hạn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
                Bắt Đầu Hành Trình
              </span>
              <br />
              <span className="text-white">Khám Phá Bản Thân</span>
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Mỗi con số đều có một câu chuyện riêng. Hãy để chúng tôi giúp bạn khám phá câu chuyện của mình.
            </p>
            <Link
              href="/numerology"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-golden to-yellow-400 hover:from-yellow-400 hover:to-golden text-purple-900 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mystical-button"
            >
              <span className="mr-3">🔮</span>
              Khám Phá Số Mệnh Ngay
              <span className="ml-3">✨</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
