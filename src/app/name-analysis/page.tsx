'use client';

import { useState } from 'react';
import { calculateNameNumerology, getNameMeaning, getNameAdvice, type NameAnalysis } from '../../lib/nameAnalysis';

export default function NameAnalysisPage() {
  const [name, setName] = useState('');
  const [result, setResult] = useState<NameAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!name.trim()) return;
    
    setIsLoading(true);
    
    // Giả lập thời gian xử lý
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const analysis = calculateNameNumerology(name);
    setResult(analysis);
    setIsLoading(false);
  };

  const resetForm = () => {
    setName('');
    setResult(null);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent">
              Bói Tên Theo Số
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Phân tích tên của bạn theo thần số học. Khám phá ý nghĩa, tính cách và vận mệnh ẩn giấu trong tên.
          </p>
        </div>

        {!result ? (
          <div className="max-w-4xl mx-auto">
            {/* Input Form */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20 mb-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-golden to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📝</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Nhập Tên Của Bạn</h2>
                <p className="text-purple-200">Tên đầy đủ sẽ cho kết quả chính xác nhất</p>
              </div>

              <div className="max-w-md mx-auto space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-3">Họ và Tên</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Văn An"
                    className="w-full px-6 py-4 bg-white/10 border border-purple-300/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent backdrop-blur-sm text-lg"
                  />
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={!name.trim() || isLoading}
                  className="w-full bg-gradient-to-r from-golden to-yellow-500 text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Đang Phân Tích...
                    </span>
                  ) : (
                    '🔮 Bắt Đầu Phân Tích'
                  )}
                </button>
              </div>
            </div>

            {/* Information Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-golden">🔤</span>
                  Thần Số Học Tên
                </h3>
                <div className="space-y-3 text-purple-200 text-sm">
                  <p>• <strong className="text-white">Số biểu đạt:</strong> Cách bạn thể hiện bản thân</p>
                  <p>• <strong className="text-white">Số linh hồn:</strong> Khao khát sâu thẳm trong tâm hồn</p>
                  <p>• <strong className="text-white">Số nhân cách:</strong> Ấn tượng đầu tiên về bạn</p>
                  <p>• <strong className="text-white">Số vận may:</strong> Con số mang lại may mắn</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-golden">✨</span>
                  Bạn Sẽ Biết Được
                </h3>
                <div className="space-y-3 text-purple-200 text-sm">
                  <p>• Tính cách và đặc điểm nổi bật</p>
                  <p>• Điểm mạnh và điểm cần cải thiện</p>
                  <p>• Hướng phát triển sự nghiệp phù hợp</p>
                  <p>• Lời khuyên cho các mối quan hệ</p>
                  <p>• Số may mắn và màu sắc phù hợp</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Results Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Phân Tích Tên: <span className="text-golden">{result.name}</span>
              </h2>
              <p className="text-purple-200">Khám phá những bí mật ẩn giấu trong tên của bạn</p>
            </div>

            {/* Main Numbers */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">{result.expressionNumber}</div>
                <h3 className="text-lg font-semibold text-purple-200 mb-3">Số Biểu Đạt</h3>
                <p className="text-purple-100 text-sm">Cách bạn thể hiện bản thân ra thế giới</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">{result.soulNumber}</div>
                <h3 className="text-lg font-semibold text-blue-200 mb-3">Số Linh Hồn</h3>
                <p className="text-blue-100 text-sm">Khao khát và động lực sâu thẳm</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-white mb-2">{result.personalityNumber}</div>
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">Số Nhân Cách</h3>
                <p className="text-cyan-100 text-sm">Ấn tượng đầu tiên về bạn</p>
              </div>

              <div className="bg-gradient-to-br from-golden to-yellow-500 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-black mb-2">{result.luckyNumber}</div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Số Vận May</h3>
                <p className="text-yellow-800 text-sm">Con số mang lại may mắn</p>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-golden">🎭</span>
                  Tính Cách & Đặc Điểm
                </h3>
                <div className="space-y-4">
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-200 mb-2">Điểm Mạnh</h4>
                    <ul className="text-purple-100 text-sm space-y-1">
                      {result.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-400 mt-1">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-900/30 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-200 mb-2">Cần Cải Thiện</h4>
                    <ul className="text-indigo-100 text-sm space-y-1">
                      {result.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">!</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-golden">💼</span>
                  Sự Nghiệp & Tài Năng
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-3">Nghề Nghiệp Phù Hợp</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {result.careerSuggestions.map((career, index) => (
                        <div key={index} className="bg-blue-900/20 rounded-lg p-2 text-center">
                          <span className="text-blue-200 text-sm">{career}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-200 mb-3">Tài Năng Tự Nhiên</h4>
                    <div className="space-y-2">
                      {result.talents.map((talent, index) => (
                        <div key={index} className="flex items-center gap-3 bg-green-900/20 rounded-lg p-2">
                          <span className="text-green-400">⭐</span>
                          <span className="text-green-200 text-sm">{talent}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advice & Recommendations */}
            <div className="bg-gradient-to-br from-golden/10 to-yellow-900/20 backdrop-blur-sm rounded-3xl p-8 border border-golden/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-golden">💡</span>
                Lời Khuyên Cá Nhân
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-golden mb-3">🎯 Phát Triển Bản Thân</h4>
                  <ul className="space-y-2">
                    {result.personalAdvice.map((advice, index) => (
                      <li key={index} className="flex items-start gap-3 text-purple-200 text-sm">
                        <span className="text-golden mt-1">•</span>
                        {advice}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-golden mb-3">💕 Mối Quan Hệ</h4>
                  <ul className="space-y-2">
                    {result.relationshipAdvice.map((advice, index) => (
                      <li key={index} className="flex items-start gap-3 text-purple-200 text-sm">
                        <span className="text-golden mt-1">•</span>
                        {advice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Lucky Elements */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-purple-200 mb-4">🎨 Màu May Mắn</h4>
                <div className="space-y-2">
                  {result.luckyColors.map((color, index) => (
                    <div key={index} className="bg-purple-900/20 rounded-lg p-2 text-purple-100 text-sm">
                      {color}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-blue-200 mb-4">🧭 Hướng Thuận Lợi</h4>
                <div className="space-y-2">
                  {result.luckyDirections.map((direction, index) => (
                    <div key={index} className="bg-blue-900/20 rounded-lg p-2 text-blue-100 text-sm">
                      {direction}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6 text-center">
                <h4 className="font-semibold text-cyan-200 mb-4">💎 Đá Quý Phù Hợp</h4>
                <div className="space-y-2">
                  {result.gemstones.map((stone, index) => (
                    <div key={index} className="bg-cyan-900/20 rounded-lg p-2 text-cyan-100 text-sm">
                      {stone}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center">
              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-golden to-yellow-500 text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-all duration-300 mr-4"
              >
                🔄 Phân Tích Tên Khác
              </button>
              <button className="border-2 border-golden text-golden hover:bg-golden hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300">
                📤 Chia Sẻ Kết Quả
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
