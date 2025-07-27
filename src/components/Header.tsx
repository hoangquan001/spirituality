"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FengShuiIcon } from "./icons";
import { getFeatureDataByGroup, getGroupFeatureData } from "@/lib/feature-data";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const groupFeatureData = getGroupFeatureData();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
              <img src="/logo.png" className="rounded-full" alt="" />
            </div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
                Thần Số Học
              </h1>
              <p className="text-gray-300 text-xs font-medium">
                Khám phá bản thân
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div
            className="hidden lg:flex items-center space-x-1"
            ref={dropdownRef}
          >
            {/* Trang Chủ */}
            <Link
              href="/"
              className="px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
            >
              Trang Chủ
            </Link>
            {groupFeatureData.map((group) =>
              group.features?.length === 0 ? (
                <Link
                  key={group.id}
                  href={group.href}
                  className="px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
                >
                  {group.title}
                </Link>
              ) : (
                <div key={group.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(group.title)}
                    className="flex items-center px-4 py-2 text-white hover:text-golden hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
                  >
                    {group.title}
                    <svg
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === group.title ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {activeDropdown === group.title && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800/50 py-2 z-50">
                      {group.features?.map((feature) => (
                        <Link
                          key={feature.id}
                          href={feature.href}
                          className="flex items-center px-4 py-3 text-white hover:text-golden hover:bg-white/10 transition-all duration-300"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {/* <span className="mr-3 text-xl">{feature.icon}</span> */}
                          <div>
                            <div className="font-medium">{feature.title}</div>
                            <div className="text-xs text-gray-400">
                              {feature.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
                <span className="flex items-center gap-2">Trang Chủ</span>
              </Link>
              {groupFeatureData.map((group) => (
                <div key={group.id}>
                  <div className="text-golden font-medium px-6 py-2">
                    {group.title}
                  </div>
                  {group.features?.map((feature) => (
                    <Link
                      key={feature.id}
                      href={feature.href}
                      className="ml-4 text-white hover:text-golden hover:bg-white/10 transition-all duration-300 px-4 py-2 rounded-lg flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {feature.title}
                    </Link>
                  ))}
                </div>
              ))}

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
                  href="/than-so-hoc"
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
