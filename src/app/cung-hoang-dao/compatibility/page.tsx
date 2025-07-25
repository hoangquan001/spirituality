'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';
import { useState } from 'react';

interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  element: string;
  dates: string;
  color: string;
}

interface CompatibilityResult {
  sign1: ZodiacSign;
  sign2: ZodiacSign;
  compatibility: {
    score: number;
    level: string;
    description: string;
    loveCompatibility: number;
    friendshipCompatibility: number;
    workCompatibility: number;
    strengths: string[];
    challenges: string[];
    advice: string;
    elementMatch: string;
  };
}

const zodiacSigns: ZodiacSign[] = [
  { id: 'aries', name: 'Bạch Dương', symbol: '♈', element: 'Hỏa', dates: '21/3 - 19/4', color: 'from-red-500 to-orange-500' },
  { id: 'taurus', name: 'Kim Ngưu', symbol: '♉', element: 'Thổ', dates: '20/4 - 20/5', color: 'from-green-500 to-emerald-500' },
  { id: 'gemini', name: 'Song Tử', symbol: '♊', element: 'Khí', dates: '21/5 - 20/6', color: 'from-yellow-500 to-amber-500' },
  { id: 'cancer', name: 'Cự Giải', symbol: '♋', element: 'Thủy', dates: '21/6 - 22/7', color: 'from-blue-500 to-cyan-500' },
  { id: 'leo', name: 'Sư Tử', symbol: '♌', element: 'Hỏa', dates: '23/7 - 22/8', color: 'from-orange-500 to-yellow-500' },
  { id: 'virgo', name: 'Xử Nữ', symbol: '♍', element: 'Thổ', dates: '23/8 - 22/9', color: 'from-green-600 to-teal-500' },
  { id: 'libra', name: 'Thiên Bình', symbol: '♎', element: 'Khí', dates: '23/9 - 22/10', color: 'from-pink-500 to-rose-500' },
  { id: 'scorpio', name: 'Bọ Cạp', symbol: '♏', element: 'Thủy', dates: '23/10 - 21/11', color: 'from-purple-600 to-indigo-600' },
  { id: 'sagittarius', name: 'Nhân Mã', symbol: '♐', element: 'Hỏa', dates: '22/11 - 21/12', color: 'from-indigo-500 to-purple-500' },
  { id: 'capricorn', name: 'Ma Kết', symbol: '♑', element: 'Thổ', dates: '22/12 - 19/1', color: 'from-gray-600 to-slate-600' },
  { id: 'aquarius', name: 'Bảo Bình', symbol: '♒', element: 'Khí', dates: '20/1 - 18/2', color: 'from-cyan-500 to-blue-500' },
  { id: 'pisces', name: 'Song Ngư', symbol: '♓', element: 'Thủy', dates: '19/2 - 20/3', color: 'from-teal-500 to-green-500' }
];

// Compatibility matrix for all zodiac combinations
const compatibilityMatrix: Record<string, any> = {
  'aries-aries': { score: 85, level: 'Rất tốt', love: 80, friendship: 85, work: 90 },
  'aries-taurus': { score: 60, level: 'Trung bình', love: 65, friendship: 70, work: 45 },
  'aries-gemini': { score: 90, level: 'Xuất sắc', love: 85, friendship: 95, work: 90 },
  'aries-cancer': { score: 50, level: 'Thách thức', love: 55, friendship: 60, work: 35 },
  'aries-leo': { score: 95, level: 'Hoàn hảo', love: 95, friendship: 90, work: 100 },
  'aries-virgo': { score: 55, level: 'Trung bình', love: 50, friendship: 65, work: 50 },
  'aries-libra': { score: 75, level: 'Tốt', love: 80, friendship: 75, work: 70 },
  'aries-scorpio': { score: 70, level: 'Tốt', love: 85, friendship: 60, work: 65 },
  'aries-sagittarius': { score: 92, level: 'Xuất sắc', love: 90, friendship: 95, work: 90 },
  'aries-capricorn': { score: 58, level: 'Trung bình', love: 60, friendship: 55, work: 60 },
  'aries-aquarius': { score: 80, level: 'Rất tốt', love: 75, friendship: 85, work: 80 },
  'aries-pisces': { score: 65, level: 'Tốt', love: 70, friendship: 65, work: 60 },

  'taurus-taurus': { score: 80, level: 'Rất tốt', love: 85, friendship: 80, work: 75 },
  'taurus-gemini': { score: 55, level: 'Trung bình', love: 60, friendship: 65, work: 40 },
  'taurus-cancer': { score: 88, level: 'Xuất sắc', love: 90, friendship: 85, work: 90 },
  'taurus-leo': { score: 62, level: 'Tốt', love: 70, friendship: 60, work: 55 },
  'taurus-virgo': { score: 92, level: 'Xuất sắc', love: 90, friendship: 90, work: 95 },
  'taurus-libra': { score: 70, level: 'Tốt', love: 75, friendship: 70, work: 65 },
  'taurus-scorpio': { score: 78, level: 'Tốt', love: 85, friendship: 70, work: 80 },
  'taurus-sagittarius': { score: 52, level: 'Thách thức', love: 55, friendship: 60, work: 40 },
  'taurus-capricorn': { score: 95, level: 'Hoàn hảo', love: 90, friendship: 95, work: 100 },
  'taurus-aquarius': { score: 48, level: 'Thách thức', love: 50, friendship: 55, work: 40 },
  'taurus-pisces': { score: 82, level: 'Rất tốt', love: 85, friendship: 80, work: 80 },

  'gemini-gemini': { score: 85, level: 'Rất tốt', love: 80, friendship: 90, work: 85 },
  'gemini-cancer': { score: 58, level: 'Trung bình', love: 60, friendship: 65, work: 50 },
  'gemini-leo': { score: 88, level: 'Xuất sắc', love: 85, friendship: 90, work: 90 },
  'gemini-virgo': { score: 65, level: 'Tốt', love: 60, friendship: 70, work: 65 },
  'gemini-libra': { score: 93, level: 'Xuất sắc', love: 90, friendship: 95, work: 95 },
  'gemini-scorpio': { score: 60, level: 'Trung bình', love: 70, friendship: 55, work: 55 },
  'gemini-sagittarius': { score: 85, level: 'Rất tốt', love: 80, friendship: 90, work: 85 },
  'gemini-capricorn': { score: 50, level: 'Thách thức', love: 45, friendship: 55, work: 50 },
  'gemini-aquarius': { score: 90, level: 'Xuất sắc', love: 85, friendship: 95, work: 90 },
  'gemini-pisces': { score: 62, level: 'Tốt', love: 65, friendship: 70, work: 50 },

  'cancer-cancer': { score: 82, level: 'Rất tốt', love: 85, friendship: 80, work: 80 },
  'cancer-leo': { score: 68, level: 'Tốt', love: 75, friendship: 65, work: 65 },
  'cancer-virgo': { score: 85, level: 'Rất tốt', love: 85, friendship: 85, work: 85 },
  'cancer-libra': { score: 65, level: 'Tốt', love: 70, friendship: 70, work: 55 },
  'cancer-scorpio': { score: 95, level: 'Hoàn hảo', love: 95, friendship: 90, work: 100 },
  'cancer-sagittarius': { score: 55, level: 'Trung bình', love: 60, friendship: 60, work: 45 },
  'cancer-capricorn': { score: 78, level: 'Tốt', love: 80, friendship: 75, work: 80 },
  'cancer-aquarius': { score: 52, level: 'Thách thức', love: 55, friendship: 60, work: 40 },
  'cancer-pisces': { score: 92, level: 'Xuất sắc', love: 95, friendship: 90, work: 90 },

  'leo-leo': { score: 88, level: 'Xuất sắc', love: 85, friendship: 90, work: 90 },
  'leo-virgo': { score: 58, level: 'Trung bình', love: 55, friendship: 65, work: 55 },
  'leo-libra': { score: 82, level: 'Rất tốt', love: 85, friendship: 80, work: 80 },
  'leo-scorpio': { score: 72, level: 'Tốt', love: 80, friendship: 65, work: 70 },
  'leo-sagittarius': { score: 95, level: 'Hoàn hảo', love: 95, friendship: 95, work: 95 },
  'leo-capricorn': { score: 60, level: 'Trung bình', love: 65, friendship: 55, work: 60 },
  'leo-aquarius': { score: 75, level: 'Tốt', love: 70, friendship: 80, work: 75 },
  'leo-pisces': { score: 65, level: 'Tốt', love: 70, friendship: 65, work: 60 },

  'virgo-virgo': { score: 80, level: 'Rất tốt', love: 75, friendship: 85, work: 80 },
  'virgo-libra': { score: 68, level: 'Tốt', love: 70, friendship: 70, work: 65 },
  'virgo-scorpio': { score: 78, level: 'Tốt', love: 80, friendship: 75, work: 80 },
  'virgo-sagittarius': { score: 55, level: 'Trung bình', love: 50, friendship: 60, work: 55 },
  'virgo-capricorn': { score: 90, level: 'Xuất sắc', love: 85, friendship: 90, work: 95 },
  'virgo-aquarius': { score: 62, level: 'Tốt', love: 60, friendship: 70, work: 55 },
  'virgo-pisces': { score: 75, level: 'Tốt', love: 80, friendship: 75, work: 70 },

  'libra-libra': { score: 85, level: 'Rất tốt', love: 85, friendship: 85, work: 85 },
  'libra-scorpio': { score: 70, level: 'Tốt', love: 75, friendship: 65, work: 70 },
  'libra-sagittarius': { score: 80, level: 'Rất tốt', love: 80, friendship: 85, work: 75 },
  'libra-capricorn': { score: 62, level: 'Tốt', love: 65, friendship: 60, work: 60 },
  'libra-aquarius': { score: 88, level: 'Xuất sắc', love: 85, friendship: 90, work: 90 },
  'libra-pisces': { score: 72, level: 'Tốt', love: 75, friendship: 75, work: 65 },

  'scorpio-scorpio': { score: 85, level: 'Rất tốt', love: 90, friendship: 80, work: 85 },
  'scorpio-sagittarius': { score: 65, level: 'Tốt', love: 70, friendship: 65, work: 60 },
  'scorpio-capricorn': { score: 82, level: 'Rất tốt', love: 85, friendship: 80, work: 80 },
  'scorpio-aquarius': { score: 58, level: 'Trung bình', love: 60, friendship: 60, work: 55 },
  'scorpio-pisces': { score: 90, level: 'Xuất sắc', love: 95, friendship: 85, work: 90 },

  'sagittarius-sagittarius': { score: 88, level: 'Xuất sắc', love: 85, friendship: 90, work: 90 },
  'sagittarius-capricorn': { score: 55, level: 'Trung bình', love: 60, friendship: 55, work: 50 },
  'sagittarius-aquarius': { score: 85, level: 'Rất tốt', love: 80, friendship: 90, work: 85 },
  'sagittarius-pisces': { score: 68, level: 'Tốt', love: 70, friendship: 70, work: 65 },

  'capricorn-capricorn': { score: 82, level: 'Rất tốt', love: 80, friendship: 80, work: 85 },
  'capricorn-aquarius': { score: 60, level: 'Trung bình', love: 55, friendship: 65, work: 60 },
  'capricorn-pisces': { score: 75, level: 'Tốt', love: 80, friendship: 70, work: 75 },

  'aquarius-aquarius': { score: 85, level: 'Rất tốt', love: 80, friendship: 90, work: 85 },
  'aquarius-pisces': { score: 65, level: 'Tốt', love: 70, friendship: 70, work: 55 },

  'pisces-pisces': { score: 88, level: 'Xuất sắc', love: 90, friendship: 85, work: 90 }
};

const getStrengths = (sign1: ZodiacSign, sign2: ZodiacSign): string[] => {
  const strengthsMap: Record<string, string[]> = {
    'Hỏa-Hỏa': ['Năng lượng mạnh mẽ', 'Đam mê và nhiệt huyết', 'Cùng mục tiêu'],
    'Hỏa-Thổ': ['Ổn định và năng động', 'Bổ sung tính cách', 'Xây dựng vững chắc'],
    'Hỏa-Khí': ['Sáng tạo và linh hoạt', 'Giao tiếp tốt', 'Luôn có điều mới mẻ'],
    'Hỏa-Thủy': ['Cân bằng cảm xúc', 'Học hỏi lẫn nhau', 'Tình cảm sâu sắc'],
    'Thổ-Thổ': ['Ổn định và tin cậy', 'Cùng giá trị sống', 'Xây dựng tương lai'],
    'Thổ-Khí': ['Thực tế và sáng tạo', 'Bổ sung kỹ năng', 'Cân bằng tốt'],
    'Thổ-Thủy': ['Nuôi dưỡng và chăm sóc', 'Hiểu biết sâu sắc', 'Tình cảm bền vững'],
    'Khí-Khí': ['Giao tiếp xuất sắc', 'Tư duy linh hoạt', 'Luôn vui vẻ'],
    'Khí-Thủy': ['Trí tuệ và cảm xúc', 'Sáng tạo và nhạy cảm', 'Hiểu nhau'],
    'Thủy-Thủy': ['Cảm xúc sâu sắc', 'Trực giác mạnh', 'Kết nối tâm hồn']
  };

  const key = `${sign1.element}-${sign2.element}`;
  const reverseKey = `${sign2.element}-${sign1.element}`;

  return strengthsMap[key] || strengthsMap[reverseKey] || [
    'Học hỏi từ sự khác biệt',
    'Mở rộng tầm nhìn',
    'Thử thách tích cực'
  ];
};

const getChallenges = (sign1: ZodiacSign, sign2: ZodiacSign): string[] => {
  const challengesMap: Record<string, string[]> = {
    'Hỏa-Thổ': ['Tốc độ khác nhau', 'Cần kiên nhẫn'],
    'Hỏa-Thủy': ['Xung đột cảm xúc', 'Cần thấu hiểu'],
    'Thổ-Khí': ['Quan điểm khác biệt', 'Cần linh hoạt'],
    'Khí-Thủy': ['Giao tiếp cảm xúc', 'Cần nhạy cảm'],
    'default': ['Cần thời gian hiểu nhau', 'Học cách thỏa hiệp']
  };

  const key = `${sign1.element}-${sign2.element}`;
  const reverseKey = `${sign2.element}-${sign1.element}`;

  return challengesMap[key] || challengesMap[reverseKey] || challengesMap['default'];
};

const getCompatibilityData = (sign1: string, sign2: string) => {
  const key1 = `${sign1}-${sign2}`;
  const key2 = `${sign2}-${sign1}`;
  return compatibilityMatrix[key1] || compatibilityMatrix[key2] || {
    score: 70, level: 'Tốt', love: 70, friendship: 70, work: 70
  };
};

const getElementCompatibility = (element1: string, element2: string): string => {
  const elementMap: Record<string, string[]> = {
    'Hỏa': ['Hỏa', 'Khí'],
    'Thổ': ['Thổ', 'Thủy'],
    'Khí': ['Khí', 'Hỏa'],
    'Thủy': ['Thủy', 'Thổ']
  };

  if (element1 === element2) return 'Cùng nguyên tố - Hiểu nhau sâu sắc';
  if (elementMap[element1]?.includes(element2)) return 'Nguyên tố hỗ trợ - Bổ sung tốt';
  return 'Nguyên tố đối lập - Cần thời gian thích nghi';
};

const getAdvice = (score: number): string => {
  if (score >= 90) return 'Đây là một cặp đôi tuyệt vời! Hãy trân trọng và nuôi dưỡng mối quan hệ này.';
  if (score >= 80) return 'Mối quan hệ rất tích cực. Tiếp tục giao tiếp và hỗ trợ lẫn nhau.';
  if (score >= 70) return 'Mối quan hệ tốt với tiềm năng phát triển. Hãy kiên nhẫn và thấu hiểu.';
  if (score >= 60) return 'Cần nỗ lực và thời gian để xây dựng mối quan hệ bền vững.';
  return 'Mối quan hệ có thách thức nhưng không phải không thể. Hãy tập trung vào điểm chung.';
};

export default function ZodiacCompatibilityPage() {
  const [person1Sign, setPerson1Sign] = useState<string>('');
  const [person2Sign, setPerson2Sign] = useState<string>('');
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateCompatibility = () => {
    if (!person1Sign || !person2Sign) {
      alert('Vui lòng chọn cung hoàng đạo cho cả hai người');
      return;
    }

    setIsCalculating(true);
    
    setTimeout(() => {
      const sign1 = zodiacSigns.find(s => s.id === person1Sign)!;
      const sign2 = zodiacSigns.find(s => s.id === person2Sign)!;
      const compatData = getCompatibilityData(person1Sign, person2Sign);

      const newResult: CompatibilityResult = {
        sign1,
        sign2,
        compatibility: {
          score: compatData.score,
          level: compatData.level,
          description: `${sign1.name} và ${sign2.name} có mức độ tương thích ${compatData.level.toLowerCase()}.`,
          loveCompatibility: compatData.love,
          friendshipCompatibility: compatData.friendship,
          workCompatibility: compatData.work,
          strengths: getStrengths(sign1, sign2),
          challenges: getChallenges(sign1, sign2),
          advice: getAdvice(compatData.score),
          elementMatch: getElementCompatibility(sign1.element, sign2.element)
        }
      };

      setResult(newResult);
      setIsCalculating(false);
    }, 1500);
  };

  const renderStars = (rating: number) => {
    const stars = Math.round(rating / 20); // Convert 0-100 to 0-5 stars
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < stars ? 'text-yellow-400' : 'text-gray-600'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}

      <ContentHeader
        title="Ghép Đôi Cung Hoàng Đạo"
        description="Khám phá độ hợp tình yêu giữa các cung hoàng đạo"
        breadcrumb={[
          { label: "Trang Chủ", href: "/" },
          { label: "Cung Hoàng Đạo", href: "/cung-hoang-dao" },
          { label: "Ghép Đôi", href: "/cung-hoang-dao/compatibility" },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Selection Form */}
        <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Chọn Cung Hoàng Đạo
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Person 1 */}
            <div>
              <h3 className="text-lg font-semibold text-pink-400 mb-4 text-center">
                👤 Người thứ nhất
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {zodiacSigns.map((sign) => (
                  <button
                    key={`p1-${sign.id}`}
                    onClick={() => setPerson1Sign(sign.id)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      person1Sign === sign.id
                        ? "border-pink-400 bg-pink-400/10 shadow-lg"
                        : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                    }`}
                  >
                    <div
                      className={`text-2xl mb-1 bg-gradient-to-r ${sign.color} bg-clip-text text-transparent`}
                    >
                      {sign.symbol}
                    </div>
                    <div className="text-white text-xs font-medium">
                      {sign.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Person 2 */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">
                👤 Người thứ hai
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {zodiacSigns.map((sign) => (
                  <button
                    key={`p2-${sign.id}`}
                    onClick={() => setPerson2Sign(sign.id)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      person2Sign === sign.id
                        ? "border-blue-400 bg-blue-400/10 shadow-lg"
                        : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                    }`}
                  >
                    <div
                      className={`text-2xl mb-1 bg-gradient-to-r ${sign.color} bg-clip-text text-transparent`}
                    >
                      {sign.symbol}
                    </div>
                    <div className="text-white text-xs font-medium">
                      {sign.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={calculateCompatibility}
              disabled={isCalculating}
              className="bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Đang phân tích...
                </span>
              ) : (
                <span className="flex items-center gap-2">💕 Xem Độ Hợp</span>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-8">
            {/* Compatibility Score */}
            <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Kết Quả Ghép Đôi
                </h2>

                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="text-center">
                    <div
                      className={`text-5xl mb-2 bg-gradient-to-r ${result.sign1.color} bg-clip-text text-transparent`}
                    >
                      {result.sign1.symbol}
                    </div>
                    <div className="text-white font-semibold">
                      {result.sign1.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {result.sign1.element}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl mb-2">💕</div>
                    <div className="relative w-24 h-24 mx-auto mb-2">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1">
                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-golden">
                              {result.compatibility.score}%
                            </div>
                            <div className="text-xs text-gray-300">
                              {result.compatibility.level}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div
                      className={`text-5xl mb-2 bg-gradient-to-r ${result.sign2.color} bg-clip-text text-transparent`}
                    >
                      {result.sign2.symbol}
                    </div>
                    <div className="text-white font-semibold">
                      {result.sign2.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {result.sign2.element}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {result.compatibility.description}
                </p>

                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                  <div className="text-purple-400 font-semibold mb-2">
                    Nguyên Tố:
                  </div>
                  <div className="text-gray-300">
                    {result.compatibility.elementMatch}
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Compatibility */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Love */}
              <div className="bg-gradient-to-br from-pink-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-pink-700/20">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <span>💕</span> Tình Yêu
                </h3>
                <div className="flex justify-center mb-3">
                  {renderStars(result.compatibility.loveCompatibility)}
                </div>
                <div className="text-center text-2xl font-bold text-pink-400 mb-2">
                  {result.compatibility.loveCompatibility}%
                </div>
                <p className="text-gray-300 text-sm text-center">
                  Mức độ tương thích trong tình yêu và lãng mạn
                </p>
              </div>

              {/* Friendship */}
              <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span>🤝</span> Tình Bạn
                </h3>
                <div className="flex justify-center mb-3">
                  {renderStars(result.compatibility.friendshipCompatibility)}
                </div>
                <div className="text-center text-2xl font-bold text-blue-400 mb-2">
                  {result.compatibility.friendshipCompatibility}%
                </div>
                <p className="text-gray-300 text-sm text-center">
                  Mức độ tương thích trong tình bạn và giao tiếp
                </p>
              </div>

              {/* Work */}
              <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-green-700/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span>💼</span> Công Việc
                </h3>
                <div className="flex justify-center mb-3">
                  {renderStars(result.compatibility.workCompatibility)}
                </div>
                <div className="text-center text-2xl font-bold text-green-400 mb-2">
                  {result.compatibility.workCompatibility}%
                </div>
                <p className="text-gray-300 text-sm text-center">
                  Mức độ tương thích trong công việc và hợp tác
                </p>
              </div>
            </div>

            {/* Strengths & Challenges */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-green-700/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span>✨</span> Điểm Mạnh
                </h3>
                <ul className="space-y-2">
                  {result.compatibility.strengths.map((strength, index) => (
                    <li
                      key={index}
                      className="text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-green-400 mt-1">•</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="bg-gradient-to-br from-orange-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-orange-700/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span>⚡</span> Thách Thức
                </h3>
                <ul className="space-y-2">
                  {result.compatibility.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-orange-400 mt-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Advice */}
            <div className="bg-gradient-to-br from-golden/10 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-golden/20">
              <h3 className="text-2xl font-bold text-golden mb-4 text-center flex items-center justify-center gap-2">
                <span>💡</span> Lời Khuyên
              </h3>
              <p className="text-gray-300 leading-relaxed text-center text-lg">
                {result.compatibility.advice}
              </p>
            </div>
          </div>
        )}

        {/* Related Links */}
        <RelatedServices currentPage="/boi-bai-tay" />
      </div>
    </div>
  );
}
