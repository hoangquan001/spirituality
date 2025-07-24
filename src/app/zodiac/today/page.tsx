'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  element: string;
  dates: string;
  color: string;
}

interface DailyHoroscope {
  sign: string;
  date: string;
  overview: string;
  love: string;
  career: string;
  health: string;
  finance: string;
  luckyNumbers: number[];
  luckyColor: string;
  advice: string;
  rating: {
    love: number;
    career: number;
    health: number;
    finance: number;
  };
}

const zodiacSigns: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Bạch Dương',
    symbol: '♈',
    element: 'Hỏa',
    dates: '21/3 - 19/4',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 'taurus',
    name: 'Kim Ngưu',
    symbol: '♉',
    element: 'Thổ',
    dates: '20/4 - 20/5',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'gemini',
    name: 'Song Tử',
    symbol: '♊',
    element: 'Khí',
    dates: '21/5 - 20/6',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    id: 'cancer',
    name: 'Cự Giải',
    symbol: '♋',
    element: 'Thủy',
    dates: '21/6 - 22/7',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'leo',
    name: 'Sư Tử',
    symbol: '♌',
    element: 'Hỏa',
    dates: '23/7 - 22/8',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 'virgo',
    name: 'Xử Nữ',
    symbol: '♍',
    element: 'Thổ',
    dates: '23/8 - 22/9',
    color: 'from-green-600 to-teal-500',
  },
  {
    id: 'libra',
    name: 'Thiên Bình',
    symbol: '♎',
    element: 'Khí',
    dates: '23/9 - 22/10',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'scorpio',
    name: 'Bọ Cạp',
    symbol: '♏',
    element: 'Thủy',
    dates: '23/10 - 21/11',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    id: 'sagittarius',
    name: 'Nhân Mã',
    symbol: '♐',
    element: 'Hỏa',
    dates: '22/11 - 21/12',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'capricorn',
    name: 'Ma Kết',
    symbol: '♑',
    element: 'Thổ',
    dates: '22/12 - 19/1',
    color: 'from-gray-600 to-slate-600',
  },
  {
    id: 'aquarius',
    name: 'Bảo Bình',
    symbol: '♒',
    element: 'Khí',
    dates: '20/1 - 18/2',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'pisces',
    name: 'Song Ngư',
    symbol: '♓',
    element: 'Thủy',
    dates: '19/2 - 20/3',
    color: 'from-teal-500 to-green-500',
  },
];

export default function ZodiacTodayPage() {
  const [selectedSign, setSelectedSign] = useState<string>('aries');
  const [horoscope, setHoroscope] = useState<DailyHoroscope | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const dateStr = today.toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(dateStr);

    // Load horoscope for default sign
    loadHoroscope('aries');
  }, []);

  const generateHoroscope = (signId: string): DailyHoroscope => {
    const sign = zodiacSigns.find((s) => s.id === signId);
    if (!sign) return {} as DailyHoroscope;

    // Generate random but consistent daily horoscope
    const seed = new Date().getDate() + signId.length;
    const random = (min: number, max: number) =>
      Math.floor(
        (((seed * 9301 + 49297) % 233280) / 233280) * (max - min + 1)
      ) + min;

    const overviews = [
      'Hôm nay là một ngày tuyệt vời để bạn thể hiện bản thân và theo đuổi những mục tiêu quan trọng.',
      'Năng lượng tích cực bao quanh bạn, mang đến nhiều cơ hội mới và thú vị.',
      'Đây là thời điểm lý tưởng để tập trung vào việc cải thiện mối quan hệ và kết nối với người khác.',
      'Sự sáng tạo và trực giác của bạn đang ở mức cao, hãy tận dụng để giải quyết các vấn đề.',
      'Hôm nay bạn có thể cảm thấy đầy năng lượng và động lực để thực hiện những kế hoạch dài hạn.',
    ];

    const loveAdvice = [
      'Tình yêu đang nở rộ trong trái tim bạn. Hãy mở lòng và chia sẻ cảm xúc chân thành.',
      'Đây là thời điểm tốt để giải quyết những hiểu lầm trong mối quan hệ.',
      'Người độc thân có thể gặp được ai đó đặc biệt trong những hoạt động xã hội.',
      'Hãy dành thời gian chất lượng bên người yêu và tạo ra những kỷ niệm đẹp.',
      'Sự kiên nhẫn và thấu hiểu sẽ giúp mối quan hệ của bạn trở nên bền chặt hơn.',
    ];

    const careerAdvice = [
      'Công việc diễn ra thuận lợi, bạn có thể nhận được sự công nhận từ cấp trên.',
      'Đây là thời điểm tốt để đề xuất những ý tưởng mới và sáng tạo trong công việc.',
      'Hãy tập trung vào việc hoàn thành những nhiệm vụ quan trọng và ưu tiên.',
      'Cơ hội thăng tiến hoặc mở rộng kinh doanh có thể xuất hiện bất ngờ.',
      'Sự hợp tác với đồng nghiệp sẽ mang lại kết quả tích cực cho dự án.',
    ];

    const healthAdvice = [
      'Sức khỏe tổng thể ổn định, hãy duy trì chế độ ăn uống và tập luyện đều đặn.',
      'Cần chú ý đến việc nghỉ ngơi và giảm stress để duy trì năng lượng tốt.',
      'Đây là thời điểm tốt để bắt đầu một thói quen sống lành mạnh mới.',
      'Hãy lắng nghe cơ thể và không làm việc quá sức trong ngày hôm nay.',
      'Hoạt động ngoài trời sẽ giúp bạn cảm thấy tươi mới và tràn đầy sinh lực.',
    ];

    const financeAdvice = [
      'Tài chính ổn định, đây là thời điểm tốt để lập kế hoạch đầu tư dài hạn.',
      'Hãy cẩn thận với những khoản chi tiêu không cần thiết trong ngày hôm nay.',
      'Cơ hội kiếm thêm thu nhập có thể xuất hiện từ những nguồn bất ngờ.',
      'Đây là thời điểm tốt để xem xét và điều chỉnh ngân sách cá nhân.',
      'Sự thận trọng trong các quyết định tài chính sẽ mang lại lợi ích lâu dài.',
    ];

    const generalAdvice = [
      'Hãy tin tưởng vào trực giác của mình và đưa ra những quyết định từ trái tim.',
      'Sự kiên nhẫn và bình tĩnh sẽ giúp bạn vượt qua mọi thách thức trong ngày.',
      'Đây là thời điểm tốt để học hỏi điều gì đó mới và mở rộng kiến thức.',
      'Hãy dành thời gian cho bản thân và làm những việc mang lại niềm vui.',
      'Sự tích cực và lạc quan sẽ thu hút những điều tốt đẹp đến với bạn.',
    ];

    return {
      sign: sign.name,
      date: currentDate,
      overview: overviews[random(0, overviews.length - 1)],
      love: loveAdvice[random(0, loveAdvice.length - 1)],
      career: careerAdvice[random(0, careerAdvice.length - 1)],
      health: healthAdvice[random(0, healthAdvice.length - 1)],
      finance: financeAdvice[random(0, financeAdvice.length - 1)],
      luckyNumbers: [random(1, 9), random(10, 19), random(20, 31)],
      luckyColor: ['Đỏ', 'Xanh lá', 'Vàng', 'Xanh dương', 'Tím', 'Hồng'][
        random(0, 5)
      ],
      advice: generalAdvice[random(0, generalAdvice.length - 1)],
      rating: {
        love: random(3, 5),
        career: random(3, 5),
        health: random(3, 5),
        finance: random(3, 5),
      },
    };
  };

  const loadHoroscope = (signId: string) => {
    setIsLoading(true);
    setSelectedSign(signId);

    setTimeout(() => {
      const newHoroscope = generateHoroscope(signId);
      setHoroscope(newHoroscope);
      setIsLoading(false);
    }, 1000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
      >
        ⭐
      </span>
    ));
  };

  const selectedZodiac = zodiacSigns.find((sign) => sign.id === selectedSign);

  return (
    <div className="min-h-screen">
      <ContentHeader
        title="Tử Vi 12 Cung Hôm Nay"
        description="Khám phá vận mệnh hôm nay của 12 cung hoàng đạo. Dự đoán chi tiết về tình yêu, sự nghiệp, sức khỏe và tài chính cho ngày {currentDate}"
        breadcrumb={[
          { label: "Trang Chủ", href: "/" },
          { label: "Tử Vi 12 cung", href: "/zodiac" },
          { label: "Hôm Nay", href: "/zodiac/today" },
        ]}
      />
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Zodiac Signs Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Chọn Cung Hoàng Đạo Của Bạn
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {zodiacSigns.map((sign) => (
              <button
                key={sign.id}
                onClick={() => loadHoroscope(sign.id)}
                className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedSign === sign.id
                    ? "border-golden bg-golden/10 shadow-lg shadow-golden/20"
                    : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                }`}
              >
                <div
                  className={`text-3xl mb-2 bg-gradient-to-r ${sign.color} bg-clip-text text-transparent`}
                >
                  {sign.symbol}
                </div>
                <div className="text-white font-semibold text-sm mb-1">
                  {sign.name}
                </div>
                <div className="text-gray-400 text-xs">{sign.dates}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Horoscope Content */}
        {isLoading ? (
          <div className="text-center py-10">
            <div className="inline-flex items-center gap-3 bg-gray-800/50 px-8 py-4 rounded-3xl">
              <div className="w-6 h-6 border-2 border-golden border-t-transparent rounded-3xl animate-spin"></div>
              <span className="text-white font-medium">Đang tải tử vi...</span>
            </div>
          </div>
        ) : horoscope && selectedZodiac ? (
          <div className="space-y-8">
            {/* Selected Sign Header */}
            <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20">
              <div className="text-center">
                <div
                  className={`text-6xl mb-4 bg-gradient-to-r ${selectedZodiac.color} bg-clip-text text-transparent`}
                >
                  {selectedZodiac.symbol}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedZodiac.name}
                </h2>
                <div className="text-gray-400 mb-4">
                  {selectedZodiac.dates} • Nguyên tố: {selectedZodiac.element}
                </div>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  {horoscope.overview}
                </p>
              </div>
            </div>

            {/* Detailed Predictions */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Love */}
              <div className="bg-gradient-to-br from-pink-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-pink-700/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-pink-400 flex items-center gap-2">
                    <span>💕</span> Tình Yêu
                  </h3>
                  <div className="flex gap-1">
                    {renderStars(horoscope.rating.love)}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {horoscope.love}
                </p>
              </div>

              {/* Career */}
              <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-blue-700/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                    <span>💼</span> Sự Nghiệp
                  </h3>
                  <div className="flex gap-1">
                    {renderStars(horoscope.rating.career)}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {horoscope.career}
                </p>
              </div>

              {/* Health */}
              <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-green-700/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
                    <span>🏥</span> Sức Khỏe
                  </h3>
                  <div className="flex gap-1">
                    {renderStars(horoscope.rating.health)}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {horoscope.health}
                </p>
              </div>

              {/* Finance */}
              <div className="bg-gradient-to-br from-yellow-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-yellow-700/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
                    <span>💰</span> Tài Chính
                  </h3>
                  <div className="flex gap-1">
                    {renderStars(horoscope.rating.finance)}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {horoscope.finance}
                </p>
              </div>
            </div>

            {/* Lucky Elements */}
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-700/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                <span className="text-golden">✨</span> Yếu Tố May Mắn Hôm Nay
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-purple-400 font-semibold mb-3 flex items-center justify-center gap-2">
                    <span>🔢</span> Số May Mắn
                  </h4>
                  <div className="flex justify-center gap-2">
                    {horoscope.luckyNumbers.map((num, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-300 px-3 py-2 rounded-3xl font-bold"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-purple-400 font-semibold mb-3 flex items-center justify-center gap-2">
                    <span>🎨</span> Màu May Mắn
                  </h4>
                  <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-3xl font-bold">
                    {horoscope.luckyColor}
                  </span>
                </div>

                <div className="text-center">
                  <h4 className="text-purple-400 font-semibold mb-3 flex items-center justify-center gap-2">
                    <span>🌟</span> Nguyên Tố
                  </h4>
                  <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-3xl font-bold">
                    {selectedZodiac.element}
                  </span>
                </div>
              </div>
            </div>

            {/* Daily Advice */}
            <div className="bg-gradient-to-br from-golden/10 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-golden/20">
              <h3 className="text-2xl font-bold text-golden mb-4 text-center flex items-center justify-center gap-2">
                <span>💡</span> Lời Khuyên Cho Ngày Hôm Nay
              </h3>
              <p className="text-gray-300 leading-relaxed text-center text-lg">
                {horoscope.advice}
              </p>
            </div>
          </div>
        ) : null}

        {/* Related Links */}
        <RelatedServices currentPage="/cards" />
      </div>
    </div>
  );
}
