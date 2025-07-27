'use client';

import { LoadingDots, LoadingOverlay, LoadingSpinner, usePageLoading } from '@/components/Loading';
import Link from 'next/link';
import { useState } from 'react';

export default function LoadingTestPage() {
  const [showOverlay, setShowOverlay] = useState(false);
  const { isLoading, startLoading, finishLoading, withLoading } = usePageLoading();

  const simulateAsyncOperation = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
  };

  const handleTestLoading = async () => {
    await withLoading(simulateAsyncOperation);
    alert('Hoàn thành!');
  };

  const handleShowOverlay = () => {
    setShowOverlay(true);
    setTimeout(() => setShowOverlay(false), 3000);
  };

  return (
    <div className="min-h-screen">
      <LoadingOverlay show={showOverlay} message="Đang xử lý dữ liệu..." />
      
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Test <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">Loading</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12">
            Kiểm tra các hiệu ứng loading khác nhau
          </p>

          {/* Navigation Links để test route loading */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link
              href="/"
              className="group cosmic-card rounded-xl p-6 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-white font-bold mb-2 group-hover:text-golden transition-colors">
                🏠 Trang Chủ
              </h3>
              <p className="text-gray-300 text-sm">
                Test loading bar khi chuyển về trang chủ
              </p>
            </Link>

            <Link
              href="/blog"
              className="group cosmic-card rounded-xl p-6 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-white font-bold mb-2 group-hover:text-golden transition-colors">
                📝 Blog
              </h3>
              <p className="text-gray-300 text-sm">
                Test loading bar khi chuyển đến blog
              </p>
            </Link>

            <Link
              href="/than-so-hoc"
              className="group cosmic-card rounded-xl p-6 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-white font-bold mb-2 group-hover:text-golden transition-colors">
                🔢 Thần Số Học
              </h3>
              <p className="text-gray-300 text-sm">
                Test loading bar khi chuyển đến thần số học
              </p>
            </Link>
          </div>

          {/* Loading Components Demo */}
          <div className="cosmic-card rounded-2xl p-8 border border-gray-700/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Demo Loading Components</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Loading Spinners */}
              <div className="text-center">
                <h3 className="text-white font-medium mb-4">Loading Spinners</h3>
                <div className="flex justify-center items-center space-x-6 mb-4">
                  <div className="text-center">
                    <LoadingSpinner size="sm" />
                    <p className="text-gray-300 text-xs mt-2">Small</p>
                  </div>
                  <div className="text-center">
                    <LoadingSpinner size="md" />
                    <p className="text-gray-300 text-xs mt-2">Medium</p>
                  </div>
                  <div className="text-center">
                    <LoadingSpinner size="lg" />
                    <p className="text-gray-300 text-xs mt-2">Large</p>
                  </div>
                  <div className="text-center">
                    <LoadingSpinner size="xl" />
                    <p className="text-gray-300 text-xs mt-2">Extra Large</p>
                  </div>
                </div>
              </div>

              {/* Loading Dots */}
              <div className="text-center">
                <h3 className="text-white font-medium mb-4">Loading Dots</h3>
                <div className="flex justify-center items-center space-x-6">
                  <div className="text-center">
                    <LoadingDots size="sm" />
                    <p className="text-gray-300 text-xs mt-2">Small</p>
                  </div>
                  <div className="text-center">
                    <LoadingDots size="md" />
                    <p className="text-gray-300 text-xs mt-2">Medium</p>
                  </div>
                  <div className="text-center">
                    <LoadingDots size="lg" />
                    <p className="text-gray-300 text-xs mt-2">Large</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Tests */}
          <div className="cosmic-card rounded-2xl p-8 border border-gray-700/20">
            <h2 className="text-2xl font-bold text-white mb-6">Interactive Tests</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleTestLoading}
                disabled={isLoading}
                className="px-6 py-3 bg-gradient-to-r from-golden to-yellow-300 text-black font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <LoadingSpinner size="sm" />
                    <span className="ml-2">Đang test...</span>
                  </span>
                ) : (
                  'Test Route Loading'
                )}
              </button>

              <button
                onClick={handleShowOverlay}
                className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Test Loading Overlay
              </button>
            </div>
          </div>

          {/* Loading Status */}
          <div className="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <p className="text-white">
              <strong>Current Loading Status:</strong> 
              <span className={`ml-2 ${isLoading ? 'text-golden' : 'text-green-400'}`}>
                {isLoading ? 'Loading...' : 'Ready'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

