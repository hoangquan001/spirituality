'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import { birthDateToLifePath } from '@/lib/numerology';
import Link from 'next/link';
import { useState } from 'react';

interface MonthlyForecast {
  month: number;
  monthName: string;
  personalNumber: number;
  energy: string;
  focus: string;
  opportunities: string[];
  challenges: string[];
  advice: string;
  luckyDays: number[];
  color: string;
}

interface YearlyForecast {
  year: number;
  lifePath: number;
  yearNumber: number;
  theme: string;
  overview: string;
  months: MonthlyForecast[];
}

const monthNames = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];

const monthlyThemes: Record<number, any> = {
  1: {
    energy: 'Khởi đầu mới',
    focus: 'Lãnh đạo và sáng tạo',
    color: 'from-red-500 to-pink-500',
  },
  2: {
    energy: 'Hợp tác',
    focus: 'Mối quan hệ và đối tác',
    color: 'from-blue-500 to-cyan-500',
  },
  3: {
    energy: 'Sáng tạo',
    focus: 'Biểu đạt và giao tiếp',
    color: 'from-yellow-500 to-orange-500',
  },
  4: {
    energy: 'Xây dựng',
    focus: 'Công việc và kỷ luật',
    color: 'from-green-500 to-teal-500',
  },
  5: {
    energy: 'Tự do',
    focus: 'Thay đổi và phiêu lưu',
    color: 'from-purple-500 to-indigo-500',
  },
  6: {
    energy: 'Chăm sóc',
    focus: 'Gia đình và trách nhiệm',
    color: 'from-pink-500 to-rose-500',
  },
  7: {
    energy: 'Nội tâm',
    focus: 'Học hỏi và phát triển',
    color: 'from-indigo-500 to-purple-500',
  },
  8: {
    energy: 'Thành công',
    focus: 'Sự nghiệp và tài chính',
    color: 'from-amber-500 to-yellow-500',
  },
  9: {
    energy: 'Hoàn thành',
    focus: 'Cống hiến và chia sẻ',
    color: 'from-emerald-500 to-green-500',
  },
};

export default function NumerologyForecastPage() {
  const [birthDate, setBirthDate] = useState('');
  const [name, setName] = useState('');
  const [forecast, setForecast] = useState<YearlyForecast | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const calculatePersonalNumber = (
    month: number,
    lifePath: number,
    year: number
  ): number => {
    const sum = month + lifePath + year;
    return sum > 9 ? sum - 9 : sum;
  };

  const generateMonthlyForecast = (
    month: number,
    lifePath: number,
    year: number
  ): MonthlyForecast => {
    const personalNumber = calculatePersonalNumber(month, lifePath, year);
    const theme = monthlyThemes[personalNumber] || monthlyThemes[1];

    return {
      month,
      monthName: monthNames[month - 1],
      personalNumber,
      energy: theme.energy,
      focus: theme.focus,
      opportunities: getOpportunities(personalNumber),
      challenges: getChallenges(personalNumber),
      advice: getAdvice(personalNumber),
      luckyDays: getLuckyDays(personalNumber),
      color: theme.color,
    };
  };

  const getOpportunities = (num: number): string[] => {
    const opportunities: Record<number, string[]> = {
      1: ['Khởi nghiệp mới', 'Lãnh đạo dự án', 'Thể hiện cá tính'],
      2: ['Hợp tác kinh doanh', 'Xây dựng mối quan hệ', 'Làm việc nhóm'],
      3: ['Sáng tạo nghệ thuật', 'Giao tiếp công chúng', 'Học kỹ năng mới'],
      4: ['Đầu tư bất động sản', 'Xây dựng nền tảng', 'Cải thiện sức khỏe'],
      5: ['Du lịch khám phá', 'Thay đổi công việc', 'Học hỏi kinh nghiệm'],
      6: ['Quan tâm gia đình', 'Trang trí nhà cửa', 'Giúp đỡ người khác'],
      7: ['Nghiên cứu sâu', 'Thiền định tâm linh', 'Phát triển trực giác'],
      8: ['Đầu tư tài chính', 'Mở rộng kinh doanh', 'Thăng tiến sự nghiệp'],
      9: ['Hoạt động từ thiện', 'Chia sẻ kiến thức', 'Kết thúc chu kỳ cũ'],
    };
    return opportunities[num] || opportunities[1];
  };

  const getChallenges = (num: number): string[] => {
    const challenges: Record<number, string[]> = {
      1: ['Tránh quá độc đoán', 'Kiên nhẫn với người khác'],
      2: ['Không quá nhạy cảm', 'Tự tin hơn trong quyết định'],
      3: ['Tập trung vào mục tiêu', 'Tránh nói quá nhiều'],
      4: ['Không quá cứng nhắc', 'Cân bằng công việc - cuộc sống'],
      5: ['Kiên trì với cam kết', 'Tránh thay đổi liên tục'],
      6: ['Không quá hy sinh bản thân', 'Đặt ranh giới rõ ràng'],
      7: ['Tránh cô lập bản thân', 'Chia sẻ suy nghĩ với người khác'],
      8: ['Cân bằng vật chất - tinh thần', 'Không quá tham vọng'],
      9: ['Tránh quá lý tưởng hóa', 'Chấp nhận sự không hoàn hảo'],
    };
    return challenges[num] || challenges[1];
  };

  const getAdvice = (num: number): string => {
    const advice: Record<number, string> = {
      1: 'Hãy dũng cảm bước ra khỏi vùng an toàn và khởi đầu những điều mới mẻ. Đây là thời điểm tốt để thể hiện khả năng lãnh đạo của bạn.',
      2: 'Tập trung vào việc xây dựng mối quan hệ và hợp tác. Sự kiên nhẫn và khả năng lắng nghe sẽ mang lại thành công.',
      3: 'Thể hiện sự sáng tạo và giao tiếp tích cực. Đây là thời điểm tuyệt vời để chia sẻ ý tưởng và kết nối với người khác.',
      4: 'Tập trung vào việc xây dựng nền tảng vững chắc. Kỷ luật và sự kiên trì sẽ mang lại kết quả lâu dài.',
      5: 'Hãy mở lòng với những thay đổi và cơ hội mới. Sự linh hoạt và tinh thần phiêu lưu sẽ mang lại may mắn.',
      6: 'Quan tâm đến gia đình và cộng đồng. Việc chăm sóc và giúp đỡ người khác sẽ mang lại hạnh phúc.',
      7: 'Dành thời gian cho việc học hỏi và phát triển nội tâm. Sự tĩnh lặng và suy ngẫm sẽ mang lại trí tuệ.',
      8: 'Tập trung vào mục tiêu sự nghiệp và tài chính. Sự quyết đoán và tầm nhìn xa sẽ mang lại thành công.',
      9: 'Hoàn thành những dự án dang dở và chuẩn bị cho chu kỳ mới. Sự rộng lượng và cống hiến sẽ được đền đáp.',
    };
    return advice[num] || advice[1];
  };

  const getLuckyDays = (num: number): number[] => {
    const base = [num, num + 9, num + 18];
    return base.filter((day) => day <= 31);
  };

  const calculateForecast = () => {
    if (!birthDate || !name) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const lifePath = birthDateToLifePath(birthDate);
      const currentYear = new Date().getFullYear();
      const yearDigits = currentYear.toString().split('').map(Number);
      const yearNumber = yearDigits.reduce((sum, digit) => sum + digit, 0);
      const finalYearNumber = yearNumber > 9 ? yearNumber - 9 : yearNumber;

      const months: MonthlyForecast[] = [];
      for (let month = 1; month <= 12; month++) {
        months.push(generateMonthlyForecast(month, lifePath, finalYearNumber));
      }

      const newForecast: YearlyForecast = {
        year: currentYear,
        lifePath,
        yearNumber: finalYearNumber,
        theme: getYearTheme(finalYearNumber),
        overview: getYearOverview(finalYearNumber),
        months,
      };

      setForecast(newForecast);
      setIsCalculating(false);
    }, 2000);
  };

  const getYearTheme = (yearNum: number): string => {
    const themes: Record<number, string> = {
      1: 'Năm Khởi Đầu Mới',
      2: 'Năm Hợp Tác',
      3: 'Năm Sáng Tạo',
      4: 'Năm Xây Dựng',
      5: 'Năm Tự Do',
      6: 'Năm Chăm Sóc',
      7: 'Năm Nội Tâm',
      8: 'Năm Thành Công',
      9: 'Năm Hoàn Thành',
    };
    return themes[yearNum] || themes[1];
  };

  const getYearOverview = (yearNum: number): string => {
    const overviews: Record<number, string> = {
      1: 'Đây là năm của những khởi đầu mới và cơ hội lãnh đạo. Hãy dũng cảm theo đuổi ước mơ và thể hiện cá tính độc đáo của bạn.',
      2: 'Năm này tập trung vào hợp tác và xây dựng mối quan hệ. Sự kiên nhẫn và khả năng làm việc nhóm sẽ mang lại thành công.',
      3: 'Một năm đầy sáng tạo và giao tiếp. Hãy thể hiện tài năng nghệ thuật và kết nối với nhiều người hơn.',
      4: 'Năm xây dựng nền tảng vững chắc. Tập trung vào công việc, sức khỏe và những mục tiêu dài hạn.',
      5: 'Năm của sự thay đổi và tự do. Hãy mở lòng với những trải nghiệm mới và cơ hội du lịch.',
      6: 'Năm quan tâm đến gia đình và trách nhiệm. Sự chăm sóc và yêu thương sẽ mang lại hạnh phúc.',
      7: 'Năm phát triển nội tâm và trí tuệ. Dành thời gian cho việc học hỏi và khám phá bản thân.',
      8: 'Năm của thành công vật chất và sự nghiệp. Tập trung vào mục tiêu tài chính và thăng tiến.',
      9: 'Năm hoàn thành chu kỳ và chuẩn bị cho giai đoạn mới. Sự cống hiến và chia sẻ sẽ được đền đáp.',
    };
    return overviews[yearNum] || overviews[1];
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <ContentHeader
        title="Dự Đoán 12 Tháng"
        description="Khám phá vận mệnh từng tháng trong năm {new Date().getFullYear()}"
        breadcrumb={[
          { label: "Trang Chủ", href: "/" },
          { label: "Thần Số Học", href: "/than-so-hoc" },
          { label: "Dự Đoán 12 Tháng", href: "/than-so-hoc/du-doan-12-thang" },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Input Form */}
        <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Nhập Thông Tin Của Bạn
          </h2>

          <div className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Tên của bạn</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-golden focus:outline-none"
                placeholder="Nhập tên của bạn..."
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Ngày sinh</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-golden focus:outline-none"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={calculateForecast}
              disabled={isCalculating}
              className="bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Đang dự đoán...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Xem Dự Đoán 12 Tháng
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {forecast && (
          <div className="space-y-8">
            {/* Year Overview */}
            <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {forecast.theme} - {forecast.year}
                </h2>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-golden font-semibold">
                      Số đường đời
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {forecast.lifePath}
                    </div>
                  </div>
                  <div className="text-3xl">✨</div>
                  <div className="text-center">
                    <div className="text-golden font-semibold">
                      Số năm cá nhân
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {forecast.yearNumber}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  {forecast.overview}
                </p>
              </div>
            </div>

            {/* Monthly Forecast Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forecast.months.map((month) => (
                <div
                  key={month.month}
                  className="cosmic-card rounded-3xl p-6 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 cursor-pointer"
                  onClick={() =>
                    setSelectedMonth(
                      selectedMonth === month.month ? null : month.month
                    )
                  }
                >
                  <div className="text-center mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${month.color} rounded-full flex items-center justify-center text-2xl mb-3 mx-auto`}
                    >
                      <span className="text-white font-bold">
                        {month.personalNumber}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {month.monthName}
                    </h3>
                    <div className="text-golden font-semibold">
                      {month.energy}
                    </div>
                    <div className="text-gray-400 text-sm">{month.focus}</div>
                  </div>

                  {selectedMonth === month.month && (
                    <div className="space-y-4 mt-6 pt-6 border-t border-gray-700/50">
                      {/* Opportunities */}
                      <div>
                        <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                          <span>🌟</span> Cơ Hội
                        </h4>
                        <ul className="space-y-1">
                          {month.opportunities.map((opp, index) => (
                            <li
                              key={index}
                              className="text-gray-300 text-sm flex items-start gap-2"
                            >
                              <span className="text-green-400 mt-1">•</span>
                              {opp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h4 className="text-orange-400 font-semibold mb-2 flex items-center gap-2">
                          <span>⚡</span> Thách Thức
                        </h4>
                        <ul className="space-y-1">
                          {month.challenges.map((challenge, index) => (
                            <li
                              key={index}
                              className="text-gray-300 text-sm flex items-start gap-2"
                            >
                              <span className="text-orange-400 mt-1">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Lucky Days */}
                      <div>
                        <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                          <span>🍀</span> Ngày May Mắn
                        </h4>
                        <div className="flex gap-2">
                          {month.luckyDays.map((day) => (
                            <span
                              key={day}
                              className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm"
                            >
                              {day}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Advice */}
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                          <span>💡</span> Lời Khuyên
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {month.advice}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="text-center text-gray-400">
              <p>💡 Nhấp vào từng tháng để xem chi tiết dự đoán</p>
            </div>
          </div>
        )}

        {/* Related Links */}
        <RelatedServices currentPage="/boi-bai-tay" />
      </div>
    </div>
  );
}
