'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NumberAnalysis {
  number: string;
  score: number;
  rating: 'excellent' | 'good' | 'average' | 'poor';
  meanings: string[];
  energy: string;
  suitableFor: string[];
  advice: string;
}

interface SimAnalysis {
  phoneNumber: string;
  totalScore: number;
  overallRating: 'excellent' | 'good' | 'average' | 'poor';
  numberBreakdown: NumberAnalysis[];
  luckyNumbers: string[];
  unluckyNumbers: string[];
  recommendations: {
    career: string;
    wealth: string;
    health: string;
    relationships: string;
  };
  improvements: string[];
}

const numberMeanings: Record<string, any> = {
  '0': { score: 70, meanings: ['Vô cực', 'Khởi đầu mới', 'Tiềm năng'], energy: 'Trung tính', suitableFor: ['Khởi nghiệp', 'Đổi mới'] },
  '1': { score: 85, meanings: ['Lãnh đạo', 'Độc lập', 'Khởi đầu'], energy: 'Dương', suitableFor: ['CEO', 'Doanh nhân', 'Lãnh đạo'] },
  '2': { score: 75, meanings: ['Hợp tác', 'Cân bằng', 'Đối tác'], energy: 'Âm', suitableFor: ['Hợp tác', 'Tư vấn', 'Ngoại giao'] },
  '3': { score: 80, meanings: ['Sáng tạo', 'Giao tiếp', 'Nghệ thuật'], energy: 'Dương', suitableFor: ['Nghệ sĩ', 'Marketing', 'Truyền thông'] },
  '4': { score: 60, meanings: ['Ổn định', 'Thực tế', 'Xây dựng'], energy: 'Âm', suitableFor: ['Xây dựng', 'Kế toán', 'Quản lý'] },
  '5': { score: 90, meanings: ['Tự do', 'Phiêu lưu', 'Thay đổi'], energy: 'Dương', suitableFor: ['Du lịch', 'Bán hàng', 'Tự do'] },
  '6': { score: 95, meanings: ['Tài lộc', 'Thịnh vượng', 'Gia đình'], energy: 'Âm', suitableFor: ['Kinh doanh', 'Đầu tư', 'Gia đình'] },
  '7': { score: 65, meanings: ['Tâm linh', 'Trí tuệ', 'Nghiên cứu'], energy: 'Âm', suitableFor: ['Nghiên cứu', 'Tâm linh', 'Giáo dục'] },
  '8': { score: 100, meanings: ['Thành công', 'Quyền lực', 'Vật chất'], energy: 'Dương', suitableFor: ['Kinh doanh', 'Tài chính', 'Lãnh đạo'] },
  '9': { score: 85, meanings: ['Hoàn thiện', 'Cống hiến', 'Nhân ái'], energy: 'Dương', suitableFor: ['Từ thiện', 'Giáo dục', 'Y tế'] }
};

const specialCombinations: Record<string, { score: number; meaning: string }> = {
  '168': { score: 100, meaning: 'Một lộ phát - Con đường thành công' },
  '888': { score: 100, meaning: 'Phát phát phát - Thịnh vượng vô cùng' },
  '666': { score: 95, meaning: 'Lục lục đại thuận - Mọi việc suôn sẻ' },
  '999': { score: 90, meaning: 'Cửu cửu quy nhất - Trường tồn bền vững' },
  '789': { score: 95, meaning: 'Thăng tiến liên tục' },
  '123': { score: 85, meaning: 'Tiến bộ từng bước' },
  '678': { score: 90, meaning: 'Lộ thăng phát - Con đường thăng tiến' },
  '518': { score: 85, meaning: 'Ngã yếu phát - Tôi muốn phát tài' },
  '1314': { score: 80, meaning: 'Nhất sinh nhất thế - Tình yêu vĩnh cửu' },
  '520': { score: 75, meaning: 'Ngã ái nễ - Tôi yêu bạn' }
};

export default function FengshuiNumbersPage() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [analysis, setAnalysis] = useState<SimAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'breakdown' | 'recommendations' | 'improvements'>('overview');

  const analyzeNumber = () => {
    if (!phoneNumber || phoneNumber.length < 8) {
      alert('Vui lòng nhập số điện thoại hợp lệ (ít nhất 8 số)');
      return;
    }

    setIsAnalyzing(true);
    
    setTimeout(() => {
      const cleanNumber = phoneNumber.replace(/\D/g, '');
      const digits = cleanNumber.split('');
      
      // Analyze each digit
      const numberBreakdown: NumberAnalysis[] = digits.map(digit => {
        const info = numberMeanings[digit];
        const rating = info.score >= 90 ? 'excellent' : 
                      info.score >= 80 ? 'good' : 
                      info.score >= 70 ? 'average' : 'poor';
        
        return {
          number: digit,
          score: info.score,
          rating,
          meanings: info.meanings,
          energy: info.energy,
          suitableFor: info.suitableFor,
          advice: `Số ${digit} mang năng lượng ${info.energy.toLowerCase()}, phù hợp cho ${info.suitableFor[0].toLowerCase()}`
        };
      });

      // Check for special combinations
      let bonusScore = 0;
      const foundCombinations: string[] = [];
      
      Object.entries(specialCombinations).forEach(([combo, data]) => {
        if (cleanNumber.includes(combo)) {
          bonusScore += data.score * 0.1;
          foundCombinations.push(`${combo}: ${data.meaning}`);
        }
      });

      // Calculate total score
      const baseScore = numberBreakdown.reduce((sum, n) => sum + n.score, 0) / digits.length;
      const totalScore = Math.min(100, Math.round(baseScore + bonusScore));
      
      const overallRating = totalScore >= 90 ? 'excellent' : 
                           totalScore >= 80 ? 'good' : 
                           totalScore >= 70 ? 'average' : 'poor';

      // Find lucky and unlucky numbers
      const luckyNumbers = digits.filter(d => numberMeanings[d].score >= 85);
      const unluckyNumbers = digits.filter(d => numberMeanings[d].score < 70);

      const newAnalysis: SimAnalysis = {
        phoneNumber: cleanNumber,
        totalScore,
        overallRating,
        numberBreakdown,
        luckyNumbers: [...new Set(luckyNumbers)],
        unluckyNumbers: [...new Set(unluckyNumbers)],
        recommendations: {
          career: totalScore >= 85 ? 'Rất phù hợp cho kinh doanh và lãnh đạo' : 
                  totalScore >= 75 ? 'Phù hợp cho công việc ổn định' : 
                  'Nên cân nhắc thay đổi số để cải thiện vận may',
          wealth: totalScore >= 85 ? 'Tiềm năng tài chính cao, dễ thu hút tiền bạc' : 
                  totalScore >= 75 ? 'Tài chính ổn định, cần nỗ lực thêm' : 
                  'Cần cẩn thận trong đầu tư và chi tiêu',
          health: totalScore >= 85 ? 'Sức khỏe tốt, năng lượng dồi dào' : 
                  totalScore >= 75 ? 'Sức khỏe bình thường, cần chú ý nghỉ ngơi' : 
                  'Cần quan tâm đến sức khỏe nhiều hơn',
          relationships: totalScore >= 85 ? 'Mối quan hệ hài hòa, dễ gặp quý nhân' : 
                         totalScore >= 75 ? 'Quan hệ xã hội tốt' : 
                         'Cần cải thiện kỹ năng giao tiếp'
        },
        improvements: foundCombinations.length > 0 ? 
          [`Số của bạn có tổ hợp may mắn: ${foundCombinations.join(', ')}`] :
          [
            'Thêm số 8 hoặc 6 vào cuối để tăng vận tài lộc',
            'Tránh quá nhiều số 4 trong một dãy',
            'Cân bằng số âm và dương để hài hòa năng lượng',
            'Chọn số có ý nghĩa phù hợp với mục tiêu cá nhân'
          ]
      };

      setAnalysis(newAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getRatingColor = (rating: string): string => {
    switch (rating) {
      case 'excellent': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'good': return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
      case 'average': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'poor': return 'text-red-400 bg-red-500/10 border-red-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getRatingText = (rating: string): string => {
    switch (rating) {
      case 'excellent': return 'Xuất Sắc';
      case 'good': return 'Tốt';
      case 'average': return 'Trung Bình';
      case 'poor': return 'Kém';
      default: return '';
    }
  };

  const getRatingIcon = (rating: string): string => {
    switch (rating) {
      case 'excellent': return '⭐';
      case 'good': return '👍';
      case 'average': return '⚖️';
      case 'poor': return '⚠️';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900/20 to-blue-900/20 py-20">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-golden via-yellow-400 to-golden bg-clip-text text-transparent">
              Sim Số Phong Thủy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            <strong className="text-golden">Phân tích sim số</strong> và biển số xe theo phong thủy
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Khám phá ý nghĩa và năng lượng của các con số trong cuộc sống bạn
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Input Form */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Nhập Số Điện Thoại Hoặc Biển Số
          </h2>
          
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Số cần phân tích</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Ví dụ: 0987654321 hoặc 30A-12345"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-golden focus:outline-none"
              />
              <p className="text-gray-400 text-sm mt-2">
                💡 Có thể nhập số điện thoại, biển số xe, hoặc bất kỳ dãy số nào
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={analyzeNumber}
                disabled={isAnalyzing}
                className="bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Đang phân tích...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    📱 Phân Tích Phong Thủy
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {analysis && (
          <div className="space-y-8">
            {/* Overview */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Kết Quả Phân Tích: {analysis.phoneNumber}
                </h2>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className={`px-6 py-3 rounded-full border ${getRatingColor(analysis.overallRating)}`}>
                    <span className="text-2xl mr-2">{getRatingIcon(analysis.overallRating)}</span>
                    <span className="font-bold">{analysis.totalScore}/100</span>
                    <span className="ml-2">({getRatingText(analysis.overallRating)})</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <h3 className="text-green-400 font-semibold mb-2">Số may mắn</h3>
                    <div className="flex flex-wrap gap-2">
                      {analysis.luckyNumbers.map((num, i) => (
                        <span key={i} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-bold">
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                    <h3 className="text-red-400 font-semibold mb-2">Số cần chú ý</h3>
                    <div className="flex flex-wrap gap-2">
                      {analysis.unluckyNumbers.length > 0 ? analysis.unluckyNumbers.map((num, i) => (
                        <span key={i} className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full font-bold">
                          {num}
                        </span>
                      )) : (
                        <span className="text-gray-400">Không có số xấu</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/50 rounded-full p-1">
                {[
                  { id: 'overview', label: '📊 Tổng Quan' },
                  { id: 'breakdown', label: '🔢 Chi Tiết' },
                  { id: 'recommendations', label: '💡 Tư Vấn' },
                  { id: 'improvements', label: '⚡ Cải Thiện' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-golden text-black'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-blue-700/20">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Phân Tích Tổng Thể</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Điểm tổng:</span>
                      <span className="text-white font-bold">{analysis.totalScore}/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Xếp hạng:</span>
                      <span className={`font-bold ${getRatingColor(analysis.overallRating).split(' ')[0]}`}>
                        {getRatingText(analysis.overallRating)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Số chữ số:</span>
                      <span className="text-white font-bold">{analysis.numberBreakdown.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Số may mắn:</span>
                      <span className="text-green-400 font-bold">{analysis.luckyNumbers.length}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-700/20">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Năng Lượng Số</h3>
                  <div className="space-y-3">
                    {analysis.numberBreakdown.slice(0, 5).map((num, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-golden">{num.number}</span>
                          <div>
                            <div className="text-white font-semibold">{num.meanings[0]}</div>
                            <div className="text-gray-400 text-sm">{num.energy}</div>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getRatingColor(num.rating)}`}>
                          {num.score}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'breakdown' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {analysis.numberBreakdown.map((num, index) => (
                  <div key={index} className={`rounded-3xl p-6 border ${getRatingColor(num.rating)}`}>
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-golden mb-2">{num.number}</div>
                      <div className="text-lg font-semibold text-white mb-1">{num.meanings[0]}</div>
                      <div className="text-sm text-gray-400">{num.energy}</div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-white mb-1">Điểm số:</div>
                        <div className="text-2xl font-bold text-golden">{num.score}/100</div>
                      </div>

                      <div>
                        <div className="font-semibold text-white mb-1">Ý nghĩa:</div>
                        <div className="flex flex-wrap gap-1">
                          {num.meanings.map((meaning, i) => (
                            <span key={i} className="bg-golden/20 text-golden px-2 py-1 rounded text-xs">
                              {meaning}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="font-semibold text-white mb-1">Phù hợp:</div>
                        <div className="text-gray-300 text-sm">
                          {num.suitableFor.join(', ')}
                        </div>
                      </div>

                      <div className="bg-gray-700/30 rounded-lg p-3">
                        <div className="text-golden font-semibold mb-1">Lời khuyên:</div>
                        <div className="text-gray-300 text-sm">{num.advice}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'recommendations' && (
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(analysis.recommendations).map(([category, advice]) => (
                  <div key={category} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/20">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span>
                        {category === 'career' && '💼'}
                        {category === 'wealth' && '💰'}
                        {category === 'health' && '🏥'}
                        {category === 'relationships' && '👥'}
                      </span>
                      {category === 'career' && 'Sự Nghiệp'}
                      {category === 'wealth' && 'Tài Chính'}
                      {category === 'health' && 'Sức Khỏe'}
                      {category === 'relationships' && 'Mối Quan Hệ'}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{advice}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'improvements' && (
              <div className="bg-gradient-to-br from-golden/10 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-golden/20">
                <h3 className="text-2xl font-bold text-golden mb-6 text-center">
                  Gợi Ý Cải Thiện
                </h3>
                <div className="space-y-4">
                  {analysis.improvements.map((improvement, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-golden text-xl mt-1">💡</span>
                        <p className="text-gray-300 leading-relaxed">{improvement}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Related Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Khám Phá Thêm Phong Thủy</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/fengshui/colors"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🎨 Màu Sắc Hợp Mệnh
            </Link>
            <Link
              href="/fengshui/directions"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🧭 Hướng Hợp Tuổi
            </Link>
            <Link
              href="/fengshui/items"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🏺 Vật Phẩm Phong Thủy
            </Link>
            <Link
              href="/numbers/meaning"
              className="bg-gradient-to-r from-golden to-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🔢 Ý Nghĩa Con Số
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
