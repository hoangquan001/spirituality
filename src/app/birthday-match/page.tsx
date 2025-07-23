'use client';

import { calculateCompatibility } from '@/lib/birthdayMatch';
import { useState } from 'react';

export default function BirthdayMatchPage() {
  const [person1, setPerson1] = useState({
    name: '',
    birthDate: '',
    gender: 'male'
  });
  const [person2, setPerson2] = useState({
    name: '',
    birthDate: '',
    gender: 'female'
  });
  const [result, setResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!person1.birthDate || !person2.birthDate || !person1.name || !person2.name) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      const compatibility = calculateCompatibility(person1, person2);
      setResult(compatibility);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-10 bg-gradient-to-r from-black/50 to-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Hợp <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">Tuổi</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Khám phá mức độ tương thích trong tình yêu và hôn nhân qua ngày sinh và thần số học
          </p>
        </div>
        
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Input Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-400/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Thông tin hai người
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Person 1 */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👨</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Người thứ nhất</h3>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Họ tên</label>
                  <input
                    type="text"
                    value={person1.name}
                    onChange={(e) => setPerson1({ ...person1, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                    placeholder="Nhập họ tên..."
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Ngày sinh</label>
                  <input
                    type="date"
                    value={person1.birthDate}
                    onChange={(e) => setPerson1({ ...person1, birthDate: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Giới tính</label>
                  <select
                    value={person1.gender}
                    onChange={(e) => setPerson1({ ...person1, gender: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                  >
                    <option value="male" className="bg-gray-900">Nam</option>
                    <option value="female" className="bg-gray-900">Nữ</option>
                  </select>
                </div>
              </div>

              {/* Person 2 */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👩</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Người thứ hai</h3>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Họ tên</label>
                  <input
                    type="text"
                    value={person2.name}
                    onChange={(e) => setPerson2({ ...person2, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                    placeholder="Nhập họ tên..."
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Ngày sinh</label>
                  <input
                    type="date"
                    value={person2.birthDate}
                    onChange={(e) => setPerson2({ ...person2, birthDate: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Giới tính</label>
                  <select
                    value={person2.gender}
                    onChange={(e) => setPerson2({ ...person2, gender: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                  >
                    <option value="female" className="bg-gray-900">Nữ</option>
                    <option value="male" className="bg-gray-900">Nam</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Analyze Button */}
            <div className="text-center mt-8">
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="px-8 py-4 bg-gradient-to-r from-golden to-yellow-300 text-gray-900 font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <span className="flex items-center">
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Đang phân tích...
                  </span>
                ) : (
                  <span className="flex items-center">
                    💕 Xem Độ Hợp
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-400/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Kết quả phân tích
              </h2>

              {/* Compatibility Score */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-golden to-yellow-300 rounded-full mb-4">
                  <span className="text-4xl font-bold text-gray-900">{result.score}%</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Độ tương thích</h3>
                <p className="text-gray-300">{result.compatibility}</p>
              </div>

              {/* Detailed Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-golden mb-4">👫 Tình cảm</h4>
                  <p className="text-gray-300">{result.love}</p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-golden mb-4">💍 Hôn nhân</h4>
                  <p className="text-gray-300">{result.marriage}</p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-golden mb-4">🤝 Giao tiếp</h4>
                  <p className="text-gray-300">{result.communication}</p>
                </div>
                <div className="bg-gray-800/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-golden mb-4">⚡ Thách thức</h4>
                  <p className="text-gray-300">{result.challenges}</p>
                </div>
              </div>

              {/* Advice */}
              <div className="bg-gradient-to-r from-golden/20 to-yellow-300/20 rounded-xl p-6 border border-golden/30">
                <h4 className="text-xl font-bold text-white mb-4">💡 Lời khuyên</h4>
                <p className="text-gray-300">{result.advice}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

