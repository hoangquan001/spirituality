import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 ">
                  <img src="/logo.png" className='rounded-full' alt="" />
              </div>
              <div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
                  Tâm Linh
                </h3>
                <p className="text-gray-300 text-sm">Thần Số Học</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Khám phá bí mật cuộc sống qua thần số học, giải mã giấc mơ và tử vi 12 cung hoàng đạo. 
              Tìm hiểu về bản thân và định hướng tương lai.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Thần Số Học */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-golden">🔢 Thần Số Học</h4>
            <ul className="space-y-2">
              <li><Link href="/numerology" className="text-gray-300 hover:text-golden transition-colors">Phân tích ngày sinh</Link></li>
              <li><Link href="/numerology/compatibility" className="text-gray-300 hover:text-golden transition-colors">Ghép đôi ngày sinh</Link></li>
              <li><Link href="/name-analysis" className="text-gray-300 hover:text-golden transition-colors">Phân tích tên</Link></li>
              <li><Link href="/numerology/forecast" className="text-gray-300 hover:text-golden transition-colors">Dự đoán 12 tháng</Link></li>
            </ul>
          </div>

          {/* Tử Vi */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-golden">♈ Tử Vi</h4>
            <ul className="space-y-2">
              <li><Link href="/zodiac/today" className="text-gray-300 hover:text-golden transition-colors">Tử vi hôm nay</Link></li>
              <li><Link href="/zodiac" className="text-gray-300 hover:text-golden transition-colors">Tử vi 12 cung</Link></li>
              <li><Link href="/zodiac/compatibility" className="text-gray-300 hover:text-golden transition-colors">Ghép đôi cung hoàng đạo</Link></li>
              <li><Link href="/zodiac/calendar" className="text-gray-300 hover:text-golden transition-colors">Lịch tử vi cá nhân</Link></li>
            </ul>
          </div>

          {/* Phong Thủy */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-golden">🧭 Phong Thủy</h4>
            <ul className="space-y-2">
              <li><Link href="/feng-shui/colors" className="text-gray-300 hover:text-golden transition-colors">Màu sắc hợp mệnh</Link></li>
              <li><Link href="/feng-shui/directions" className="text-gray-300 hover:text-golden transition-colors">Hướng hợp tuổi</Link></li>
              <li><Link href="/feng-shui/dates" className="text-gray-300 hover:text-golden transition-colors">Chọn ngày tốt</Link></li>
              <li><Link href="/feng-shui/home" className="text-gray-300 hover:text-golden transition-colors">Phong thủy nhà ở</Link></li>
            </ul>
          </div>

          {/* Giải Mã & Bói */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-golden">💡 Giải Mã & Bói</h4>
            <ul className="space-y-2">
              <li><Link href="/dream" className="text-gray-300 hover:text-golden transition-colors">Giải mã giấc mơ</Link></li>
              <li><Link href="/numbers/meaning" className="text-gray-300 hover:text-golden transition-colors">Ý nghĩa con số</Link></li>
              <li><Link href="/tarot" className="text-gray-300 hover:text-golden transition-colors">Bói bài Tarot</Link></li>
              <li><Link href="/games" className="text-gray-300 hover:text-golden transition-colors">Minigame bói</Link></li>
            </ul>
          </div>

          {/* Tiện Ích */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-golden">💡 Tiện Ích</h4>
            <ul className="space-y-2">
              <li><Link href="/calendar/convert" className="text-gray-300 hover:text-golden transition-colors">Chuyển đổi lịch</Link></li>
              <li><Link href="/calendar/almanac" className="text-gray-300 hover:text-golden transition-colors">Lịch vạn sự</Link></li>
              <li><Link href="/marriage-age" className="text-gray-300 hover:text-golden transition-colors">Tuổi kết hôn</Link></li>
              <li><Link href="/tam-tai" className="text-gray-300 hover:text-golden transition-colors">Tam tai - Hạn năm</Link></li>
            </ul>
          </div>

          {/* Blog & Liên Hệ */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-golden">💡 Khác</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-300 hover:text-golden transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-golden transition-colors">Về chúng tôi</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-golden transition-colors">Chính sách bảo mật</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-golden transition-colors">Điều khoản sử dụng</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Giải Mã Tâm Linh. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-golden transition-colors">
                Chính Sách Bảo Mật
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms" className="text-gray-400 hover:text-golden transition-colors">
                Điều Khoản Sử Dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
