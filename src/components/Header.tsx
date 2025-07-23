'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FengShuiIcon } from './icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-gray-900/98 via-black/98 to-gray-900/98 backdrop-blur-lg border-b border-gray-500/10 z-50 shadow-2xl">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12">
              {/* <span className="text-gray-900 font-bold text-xl">✦</span> */}
              <img src="/logo.png" className='rounded-full' alt="" />
            </div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
                Giải Mã Tâm Linh
              </h1>
              <p className="text-gray-300 text-xs font-medium">Khám phá bản thân</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
            {/* Trang Chủ */}
            <Link 
              href="/" 
              className="px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
            >
              Trang Chủ
            </Link>

            {/* 🔢 Thần Số Học - Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('numerology')}
                className="flex items-center px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              >
                🔢 Thần Số Học
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'numerology' ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'numerology' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800/50 py-2 z-50">
                  <Link
                    href="/numerology"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">📊</span>
                    <div>
                      <div className="font-medium">Phân tích ngày sinh</div>
                      <div className="text-xs text-gray-400">Khám phá số mệnh và tính cách</div>
                    </div>
                  </Link>
                  <Link
                    href="/numerology/compatibility"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">💕</span>
                    <div>
                      <div className="font-medium">Ghép đôi ngày sinh</div>
                      <div className="text-xs text-gray-400">Xem độ hợp trong tình yêu</div>
                    </div>
                  </Link>
                  <Link
                    href="/name-analysis"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">✍️</span>
                    <div>
                      <div className="font-medium">Phân tích tên</div>
                      <div className="text-xs text-gray-400">Ý nghĩa tên theo thần số học</div>
                    </div>
                  </Link>
                  <Link
                    href="/numerology/forecast"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🔮</span>
                    <div>
                      <div className="font-medium">Dự đoán 12 tháng</div>
                      <div className="text-xs text-gray-400">Vận mệnh cá nhân từng tháng</div>
                    </div>
                  </Link>
                  <Link
                    href="/numerology/lessons"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">📚</span>
                    <div>
                      <div className="font-medium">Bài học nghiệp số</div>
                      <div className="text-xs text-gray-400">Thử thách và bài học cuộc đời</div>
                    </div>
                  </Link>
                  <Link
                    href="/numerology/career"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">💼</span>
                    <div>
                      <div className="font-medium">Gợi ý nghề nghiệp</div>
                      <div className="text-xs text-gray-400">Nghề nghiệp phù hợp theo số</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* ♈ Tử Vi - Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('zodiac')}
                className="flex items-center px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              >
                ♈ Tử Vi
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'zodiac' ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'zodiac' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800/50 py-2 z-50">
                  <Link
                    href="/zodiac/today"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🌅</span>
                    <div>
                      <div className="font-medium">Tử vi hôm nay</div>
                      <div className="text-xs text-gray-400">Vận mệnh trong ngày</div>
                    </div>
                  </Link>
                  <Link
                    href="/zodiac"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">⭐</span>
                    <div>
                      <div className="font-medium">Tử vi 12 cung</div>
                      <div className="text-xs text-gray-400">Đặc điểm từng cung hoàng đạo</div>
                    </div>
                  </Link>
                  <Link
                    href="/zodiac/compatibility"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">💑</span>
                    <div>
                      <div className="font-medium">Ghép đôi cung hoàng đạo</div>
                      <div className="text-xs text-gray-400">Độ hợp giữa các cung</div>
                    </div>
                  </Link>
                  <Link
                    href="/zodiac/calendar"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">📅</span>
                    <div>
                      <div className="font-medium">Lịch tử vi cá nhân</div>
                      <div className="text-xs text-gray-400">Theo dõi vận mệnh hàng ngày</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 🧭 Phong Thủy - Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('fengshui')}
                className="flex items-center px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              >
                🧭 Phong Thủy
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'fengshui' ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'fengshui' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800/50 py-2 z-50">
                  <Link
                    href="/fengshui/colors"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🎨</span>
                    <div>
                      <div className="font-medium">Màu sắc hợp mệnh</div>
                      <div className="text-xs text-gray-400">Màu may mắn theo tuổi</div>
                    </div>
                  </Link>
                  <Link
                    href="/fengshui/directions"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🧭</span>
                    <div>
                      <div className="font-medium">Hướng hợp tuổi</div>
                      <div className="text-xs text-gray-400">Hướng nhà, bàn làm việc</div>
                    </div>
                  </Link>
                  <Link
                    href="/fengshui/items"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🏺</span>
                    <div>
                      <div className="font-medium">Vật phẩm phong thủy</div>
                      <div className="text-xs text-gray-400">Đồ vật may mắn theo tuổi</div>
                    </div>
                  </Link>
                  <Link
                    href="/fengshui/dates"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">📅</span>
                    <div>
                      <div className="font-medium">Chọn ngày tốt</div>
                      <div className="text-xs text-gray-400">Cưới, khai trương, xuất hành</div>
                    </div>
                  </Link>
                  <Link
                    href="/fengshui/home"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🏠</span>
                    <div>
                      <div className="font-medium">Phong thủy nhà ở</div>
                      <div className="text-xs text-gray-400">Bố trí nội thất hợp phong thủy</div>
                    </div>
                  </Link>
                  <Link
                    href="/fengshui/numbers"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">📱</span>
                    <div>
                      <div className="font-medium">Sim số - Biển số</div>
                      <div className="text-xs text-gray-400">Số điện thoại, biển số xe</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 💡 Giải Mã & Bói Toán - Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('divination')}
                className="flex items-center px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              >
                💡 Giải Mã & Bói
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'divination' ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'divination' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800/50 py-2 z-50">
                  <Link
                    href="/dream"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">💭</span>
                    <div>
                      <div className="font-medium">Giải mã giấc mơ</div>
                      <div className="text-xs text-gray-400">Từ điển giấc mơ đầy đủ</div>
                    </div>
                  </Link>
                  <Link
                    href="/numbers/meaning"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🔢</span>
                    <div>
                      <div className="font-medium">Ý nghĩa con số</div>
                      <div className="text-xs text-gray-400">Giải mã các con số đặc biệt</div>
                    </div>
                  </Link>
                  <Link
                    href="/tarot"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🃏</span>
                    <div>
                      <div className="font-medium">Bói bài Tarot</div>
                      <div className="text-xs text-gray-400">Bói bài đơn giản và thú vị</div>
                    </div>
                  </Link>
                  <Link
                    href="/cards"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🎴</span>
                    <div>
                      <div className="font-medium">Bói bài Tây</div>
                      <div className="text-xs text-gray-400">Trò chơi bói vui nhộn</div>
                    </div>
                  </Link>
                  <Link
                    href="/games"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🎮</span>
                    <div>
                      <div className="font-medium">Minigame bói</div>
                      <div className="text-xs text-gray-400">Bói hình, màu, số thú vị</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 💡 Tiện Ích - Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('utilities')}
                className="flex items-center px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              >
                💡 Tiện Ích
                <svg
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'utilities' ? 'rotate-180' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'utilities' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800/50 py-2 z-50">
                  <Link
                    href="/lunar-convert"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🌙</span>
                    <div>
                      <div className="font-medium">Chuyển đổi lịch</div>
                      <div className="text-xs text-gray-400">Âm lịch ⇄ Dương lịch</div>
                    </div>
                  </Link>
                  <Link
                    href="/calendar"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">📅</span>
                    <div>
                      <div className="font-medium">Lịch vạn niên</div>
                      <div className="text-xs text-gray-400">Ngày tốt xấu trong năm</div>
                    </div>
                  </Link>
                  <Link
                    href="/marriage-age"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">💒</span>
                    <div>
                      <div className="font-medium">Tuổi kết hôn</div>
                      <div className="text-xs text-gray-400">Xem tuổi thích hợp cưới</div>
                    </div>
                  </Link>
                  <Link
                    href="/birth-age"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">👶</span>
                    <div>
                      <div className="font-medium">Tuổi sinh con</div>
                      <div className="text-xs text-gray-400">Thời điểm tốt sinh con</div>
                    </div>
                  </Link>
                  <Link
                    href="/tam-tai"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">⚠️</span>
                    <div>
                      <div className="font-medium">Tam tai - Hạn năm</div>
                      <div className="text-xs text-gray-400">Tính năm tuổi khó khăn</div>
                    </div>
                  </Link>
                  <Link
                    href="/destiny-palace"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🏛️</span>
                    <div>
                      <div className="font-medium">Cung mệnh - Ngũ hành</div>
                      <div className="text-xs text-gray-400">Tính cung mệnh theo năm sinh</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* 💡 Blog */}
            <Link
              href="/blog"
              className="px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
            >
              💡 Blog
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-black/80 backdrop-blur-lg rounded-xl border border-gray-800/50">
            <div className="flex flex-col space-y-1">
              <Link 
                href="/" 
                className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-3 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <FengShuiIcon className="text-golden" size={16} />
                  Trang Chủ
                </span>
              </Link>
              
              {/* Mobile Thần Số Học Section */}
              <div className="px-2">
                <div className="text-golden font-medium text-sm px-2 py-2">🔢 THẦN SỐ HỌC</div>
                <Link
                  href="/numerology"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">📊</span> Phân tích ngày sinh
                </Link>
                <Link
                  href="/numerology/compatibility"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">💕</span> Ghép đôi ngày sinh
                </Link>
                <Link
                  href="/name-analysis"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">✍️</span> Phân tích tên
                </Link>
              </div>

              {/* Mobile Tử Vi Section */}
              <div className="px-2">
                <div className="text-golden font-medium text-sm px-2 py-2">♈ TỬ VI</div>
                <Link
                  href="/zodiac/today"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">🌅</span> Tử vi hôm nay
                </Link>
                <Link
                  href="/zodiac"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">⭐</span> Tử vi 12 cung
                </Link>
                <Link
                  href="/zodiac/compatibility"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">💑</span> Ghép đôi cung hoàng đạo
                </Link>
              </div>

              {/* Mobile Phong Thủy Section */}
              <div className="px-2">
                <div className="text-golden font-medium text-sm px-2 py-2">🧭 PHONG THỦY</div>
                <Link
                  href="/fengshui/colors"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">🎨</span> Màu sắc hợp mệnh
                </Link>
                <Link
                  href="/fengshui/directions"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">🧭</span> Hướng hợp tuổi
                </Link>
                <Link
                  href="/fengshui/dates"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">📅</span> Chọn ngày tốt
                </Link>
              </div>

              {/* Mobile Giải Mã & Bói Section */}
              <div className="px-2">
                <div className="text-golden font-medium text-sm px-2 py-2">💡 GIẢI MÃ & BÓI</div>
                <Link
                  href="/dream"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">💭</span> Giải mã giấc mơ
                </Link>
                <Link
                  href="/tarot"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">🃏</span> Bói bài Tarot
                </Link>
                <Link
                  href="/numbers/meaning"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">🔢</span> Ý nghĩa con số
                </Link>
              </div>

              {/* Mobile Tiện Ích Section */}
              <div className="px-2">
                <div className="text-golden font-medium text-sm px-2 py-2">💡 TIỆN ÍCH</div>
                <Link
                  href="/calendar/convert"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">🌙</span> Chuyển đổi lịch
                </Link>
                <Link
                  href="/marriage-age"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">💒</span> Tuổi kết hôn
                </Link>
                <Link
                  href="/tam-tai"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">⚠️</span> Tam tai - Hạn năm
                </Link>
              </div>

              <div className="border-t border-gray-700/50 mx-2 my-2"></div>

              <Link
                href="/blog"
                className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-3 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                💡 Blog
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-3 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ℹ️ Về chúng tôi
              </Link>

              {/* Mobile CTA */}
              <div className="px-2 pt-4">
                <Link
                  href="/numerology"
                  className="block text-center px-6 py-3 bg-gradient-to-r from-golden to-yellow-300 text-gray-900 font-bold rounded-full hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Khám phá bản thân ngay ✨
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
