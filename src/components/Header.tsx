'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-purple-900/95 via-indigo-900/95 to-purple-800/95 backdrop-blur-md border-b border-purple-500/20 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-golden to-yellow-300 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-purple-900 font-bold text-lg">✦</span>
            </div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
                Tâm Linh
              </h1>
              <p className="text-purple-200 text-xs">Thần Số Học</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-golden transition-colors duration-300 font-medium">
              Trang Chủ
            </Link>
            <Link href="/numerology" className="text-white hover:text-golden transition-colors duration-300 font-medium">
              Thần Số Học
            </Link>
            <Link href="/dream" className="text-white hover:text-golden transition-colors duration-300 font-medium">
              Giải Mã Giấc Mơ
            </Link>
            <Link href="/zodiac" className="text-white hover:text-golden transition-colors duration-300 font-medium">
              Tử Vi 12 Cung
            </Link>
            <Link href="/about" className="text-white hover:text-golden transition-colors duration-300 font-medium">
              Giới Thiệu
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-purple-800/50 rounded-lg backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-white hover:text-golden transition-colors duration-300 px-4 py-2">
                Trang Chủ
              </Link>
              <Link href="/numerology" className="text-white hover:text-golden transition-colors duration-300 px-4 py-2">
                Thần Số Học
              </Link>
              <Link href="/dream" className="text-white hover:text-golden transition-colors duration-300 px-4 py-2">
                Giải Mã Giấc Mơ
              </Link>
              <Link href="/zodiac" className="text-white hover:text-golden transition-colors duration-300 px-4 py-2">
                Tử Vi 12 Cung
              </Link>
              <Link href="/about" className="text-white hover:text-golden transition-colors duration-300 px-4 py-2">
                Giới Thiệu
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
