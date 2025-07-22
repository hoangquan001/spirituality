'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

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
            <div className="w-12 h-12 bg-gradient-to-br from-golden via-yellow-400 to-yellow-300 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ring-2 ring-golden/20 group-hover:ring-golden/40">
              <span className="text-gray-900 font-bold text-xl">✦</span>
            </div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
                Tâm Linh
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

            {/* Dịch vụ Tâm Linh - Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              >
                Dịch vụ Tâm Linh
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800/50 py-2 z-50">
                  <Link
                    href="/numerology"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🔢</span>
                    <div>
                      <div className="font-medium">Thần Số Học</div>
                      <div className="text-xs text-gray-400">Khám phá số mệnh</div>
                    </div>
                  </Link>
                  <Link
                    href="/zodiac"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">♈</span>
                    <div>
                      <div className="font-medium">Cung Hoàng Đạo</div>
                      <div className="text-xs text-gray-400">Tử vi 12 cung</div>
                    </div>
                  </Link>
                  <Link
                    href="/dream"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">💭</span>
                    <div>
                      <div className="font-medium">Giải Mã Giấc Mơ</div>
                      <div className="text-xs text-gray-400">Ý nghĩa giấc mơ</div>
                    </div>
                  </Link>
                  <Link
                    href="/name-analysis"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">✍️</span>
                    <div>
                      <div className="font-medium">Bói Tên</div>
                      <div className="text-xs text-gray-400">Phân tích tên tuổi</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Phong Thủy & Lịch - Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('lifestyle')}
                className="flex items-center px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              >
                Phong Thủy & Lịch
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'lifestyle' ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'lifestyle' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800/50 py-2 z-50">
                  <Link
                    href="/feng-shui"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🏠</span>
                    <div>
                      <div className="font-medium">Phong Thủy</div>
                      <div className="text-xs text-gray-400">Hướng dẫn bố trí</div>
                    </div>
                  </Link>
                  <Link
                    href="/calendar"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">📅</span>
                    <div>
                      <div className="font-medium">Lịch Vạn Niên</div>
                      <div className="text-xs text-gray-400">Chọn ngày tốt</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Công Cụ & Sự Kiện - Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('tools')}
                className="flex items-center px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              >
                Công Cụ & Sự Kiện
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'tools' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800/50 py-2 z-50">
                  <Link
                    href="/birthday-match"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">💑</span>
                    <div>
                      <div className="font-medium">So Sánh Ngày Sinh</div>
                      <div className="text-xs text-gray-400">Hợp tuổi, tình duyên</div>
                    </div>
                  </Link>
                  <Link
                    href="/lunar-convert"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">🌙</span>
                    <div>
                      <div className="font-medium">Chuyển Đổi Lịch</div>
                      <div className="text-xs text-gray-400">Dương ⇄ Âm lịch</div>
                    </div>
                  </Link>
                  <Link
                    href="/events"
                    className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="mr-3 text-xl">📅</span>
                    <div>
                      <div className="font-medium">Ngày Lễ Tâm Linh</div>
                      <div className="text-xs text-gray-400">Sự kiện, lễ hội</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Blog */}
            <Link 
              href="/blog" 
              className="px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
            >
              Blog
            </Link>

            {/* About */}
            <Link 
              href="/about" 
              className="px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
            >
              Về chúng tôi
            </Link>

            {/* CTA Button */}
            <div className="ml-4 pl-4 border-l border-gray-700/50">
              <Link
                href="/numerology"
                className="px-6 py-2 bg-gradient-to-r from-golden to-yellow-300 text-gray-900 font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
              >
                Tính ngay ✨
              </Link>
            </div>
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
                🏠 Trang Chủ
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-2">
                <div className="text-golden font-medium text-sm px-2 py-2">DỊCH VỤ TÂM LINH</div>
                <Link
                  href="/numerology"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">🔢</span> Thần Số Học
                </Link>
                <Link
                  href="/zodiac"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">♈</span> Cung Hoàng Đạo
                </Link>
                <Link
                  href="/dream"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">💭</span> Giải Mã Giấc Mơ
                </Link>
                <Link
                  href="/name-analysis"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">✍️</span> Bói Tên
                </Link>
              </div>

              {/* Mobile Phong Thủy & Lịch Section */}
              <div className="px-2">
                <div className="text-golden font-medium text-sm px-2 py-2">PHONG THỦY & LỊCH</div>
                <Link
                  href="/feng-shui"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">🏠</span> Phong Thủy
                </Link>
                <Link
                  href="/calendar"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">📅</span> Lịch Vạn Niên
                </Link>
              </div>

              {/* Mobile Công Cụ & Sự Kiện Section */}
              <div className="px-2">
                <div className="text-golden font-medium text-sm px-2 py-2">CÔNG CỤ & SỰ KIỆN</div>
                <Link
                  href="/birthday-match"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">💑</span> So Sánh Ngày Sinh
                </Link>
                <Link
                  href="/lunar-convert"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">🌙</span> Chuyển Đổi Lịch
                </Link>
                <Link
                  href="/events"
                  className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">📅</span> Ngày Lễ Tâm Linh
                </Link>
              </div>

              <div className="border-t border-gray-700/50 mx-2 my-2"></div>
              
              <Link
                href="/blog"
                className="text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-3 rounded-lg mx-2"
                onClick={() => setIsMenuOpen(false)}
              >
                📝 Blog
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
                  Tính thần số ngay ✨
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
