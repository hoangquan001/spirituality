'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  element: string;
  dates: string;
  color: string;
}

interface DailyPrediction {
  date: string;
  dayOfWeek: string;
  energy: string;
  mood: string;
  luckyHour: string;
  advice: string;
  rating: number;
  color: string;
}

interface PersonalCalendar {
  sign: ZodiacSign;
  birthDate: string;
  currentMonth: number;
  currentYear: number;
  monthlyTheme: string;
  monthlyAdvice: string;
  dailyPredictions: DailyPrediction[];
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

const monthNames = [
  'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
  'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
];

const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

const energyTypes = ['Tích cực', 'Bình thường', 'Thận trọng', 'May mắn', 'Sáng tạo'];
const moodTypes = ['Vui vẻ', 'Bình tĩnh', 'Tập trung', 'Lạc quan', 'Thư giãn'];
const adviceTypes = [
  'Hãy tận dụng năng lượng tích cực hôm nay',
  'Dành thời gian cho bản thân và suy ngẫm',
  'Tập trung vào công việc quan trọng',
  'Kết nối với bạn bè và người thân',
  'Thử những điều mới mẻ và sáng tạo'
];

const getZodiacFromBirthDate = (birthDate: string): ZodiacSign => {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return zodiacSigns[0]; // Aries
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return zodiacSigns[1]; // Taurus
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return zodiacSigns[2]; // Gemini
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return zodiacSigns[3]; // Cancer
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return zodiacSigns[4]; // Leo
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return zodiacSigns[5]; // Virgo
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return zodiacSigns[6]; // Libra
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return zodiacSigns[7]; // Scorpio
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return zodiacSigns[8]; // Sagittarius
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiacSigns[9]; // Capricorn
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiacSigns[10]; // Aquarius
  return zodiacSigns[11]; // Pisces
};

export default function ZodiacCalendarPage() {
  const [birthDate, setBirthDate] = useState('');
  const [calendar, setCalendar] = useState<PersonalCalendar | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const generateDailyPrediction = (date: Date, signId: string): DailyPrediction => {
    const seed = date.getDate() + date.getMonth() + signId.length;
    const random = (min: number, max: number) => Math.floor((seed * 9301 + 49297) % 233280 / 233280 * (max - min + 1)) + min;

    const energyIndex = random(0, energyTypes.length - 1);
    const moodIndex = random(0, moodTypes.length - 1);
    const adviceIndex = random(0, adviceTypes.length - 1);
    
    const hours = ['6-8h', '9-11h', '14-16h', '19-21h'];
    const colors = ['Đỏ', 'Xanh', 'Vàng', 'Tím', 'Hồng'];

    return {
      date: date.toISOString().split('T')[0],
      dayOfWeek: dayNames[date.getDay()],
      energy: energyTypes[energyIndex],
      mood: moodTypes[moodIndex],
      luckyHour: hours[random(0, hours.length - 1)],
      advice: adviceTypes[adviceIndex],
      rating: random(3, 5),
      color: colors[random(0, colors.length - 1)]
    };
  };

  const generateMonthlyCalendar = (birthDate: string, month: number, year: number): PersonalCalendar => {
    const sign = getZodiacFromBirthDate(birthDate);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dailyPredictions: DailyPrediction[] = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      dailyPredictions.push(generateDailyPrediction(date, sign.id));
    }

    const monthlyThemes = [
      'Tháng của sự khởi đầu và quyết tâm',
      'Tháng của tình yêu và sự kết nối',
      'Tháng của sự phát triển và năng lượng',
      'Tháng của sự cân bằng và ổn định',
      'Tháng của sự sáng tạo và đổi mới',
      'Tháng của sự chăm sóc và nuôi dưỡng',
      'Tháng của sự tự do và phiêu lưu',
      'Tháng của sự thu hoạch và thành công',
      'Tháng của sự học hỏi và phát triển',
      'Tháng của sự hoàn thiện và chuẩn bị',
      'Tháng của sự biến đổi và chuyển hóa',
      'Tháng của sự kết thúc và khởi đầu mới'
    ];

    const monthlyAdvices = [
      'Hãy đặt ra những mục tiêu rõ ràng và bắt đầu thực hiện chúng',
      'Dành thời gian cho những người bạn yêu thương',
      'Tận dụng năng lượng mùa xuân để phát triển bản thân',
      'Tìm kiếm sự cân bằng trong mọi khía cạnh của cuộc sống',
      'Thể hiện sự sáng tạo và khám phá những điều mới mẻ',
      'Chăm sóc sức khỏe và nuôi dưỡng các mối quan hệ',
      'Tận hưởng mùa hè và những trải nghiệm thú vị',
      'Thu hoạch thành quả từ những nỗ lực trước đó',
      'Học hỏi những kỹ năng mới và mở rộng kiến thức',
      'Chuẩn bị cho những thay đổi sắp tới',
      'Thích nghi với những biến đổi và tìm cơ hội mới',
      'Kết thúc năm cũ và chuẩn bị cho năm mới'
    ];

    return {
      sign,
      birthDate,
      currentMonth: month,
      currentYear: year,
      monthlyTheme: monthlyThemes[month],
      monthlyAdvice: monthlyAdvices[month],
      dailyPredictions
    };
  };

  const generateCalendar = () => {
    if (!birthDate) {
      alert('Vui lòng nhập ngày sinh');
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const newCalendar = generateMonthlyCalendar(birthDate, currentMonth, currentYear);
      setCalendar(newCalendar);
      setIsLoading(false);
    }, 1500);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    let newMonth = currentMonth;
    let newYear = currentYear;

    if (direction === 'prev') {
      newMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      newYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    } else {
      newMonth = currentMonth === 11 ? 0 : currentMonth + 1;
      newYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    
    if (calendar) {
      const newCalendar = generateMonthlyCalendar(birthDate, newMonth, newYear);
      setCalendar(newCalendar);
    }
  };

  const renderCalendarGrid = () => {
    if (!calendar) return null;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = calendar.dailyPredictions.length;
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    
    const cells = [];
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      cells.push(
        <div key={`empty-${i}`} className="h-20 border border-gray-700/30"></div>
      );
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const prediction = calendar.dailyPredictions[day - 1];
      const isToday = new Date().toDateString() === new Date(currentYear, currentMonth, day).toDateString();
      const isSelected = selectedDate === prediction.date;
      
      cells.push(
        <div
          key={day}
          onClick={() => setSelectedDate(selectedDate === prediction.date ? null : prediction.date)}
          className={`h-20 border border-gray-700/30 p-2 cursor-pointer transition-all duration-300 hover:bg-gray-700/30 ${
            isToday ? 'bg-golden/20 border-golden/50' : ''
          } ${isSelected ? 'bg-blue-500/20 border-blue-500/50' : ''}`}
        >
          <div className="flex justify-between items-start h-full">
            <span className={`text-sm font-medium ${isToday ? 'text-golden' : 'text-white'}`}>
              {day}
            </span>
            <div className="flex flex-col items-end">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: prediction.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">⭐</span>
                ))}
              </div>
              <span className="text-xs text-gray-400">{prediction.energy}</span>
            </div>
          </div>
        </div>
      );
    }
    
    // Empty cells to complete the grid
    while (cells.length < totalCells) {
      cells.push(
        <div key={`empty-end-${cells.length}`} className="h-20 border border-gray-700/30"></div>
      );
    }
    
    return cells;
  };

  const getSelectedPrediction = (): DailyPrediction | null => {
    if (!calendar || !selectedDate) return null;
    return calendar.dailyPredictions.find(p => p.date === selectedDate) || null;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-indigo-900/20 py-20">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-golden via-yellow-400 to-golden bg-clip-text text-transparent">
              Lịch Tử Vi Cá Nhân
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            <strong className="text-golden">Dự đoán từng ngày</strong> theo cung hoàng đạo của bạn
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Lịch tử vi cá nhân với dự đoán chi tiết cho từng ngày trong tháng
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Input Form */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Tạo Lịch Tử Vi Cá Nhân
          </h2>
          
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">Ngày sinh của bạn</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-golden focus:outline-none"
              />
            </div>

            <div className="text-center">
              <button
                onClick={generateCalendar}
                disabled={isLoading}
                className="bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Đang tạo lịch...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    📅 Tạo Lịch Tử Vi
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Results */}
        {calendar && (
          <div className="space-y-8">
            {/* Sign Info & Monthly Theme */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
              <div className="text-center mb-8">
                <div className={`text-6xl mb-4 bg-gradient-to-r ${calendar.sign.color} bg-clip-text text-transparent`}>
                  {calendar.sign.symbol}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{calendar.sign.name}</h2>
                <div className="text-gray-400 mb-6">{calendar.sign.dates} • Nguyên tố: {calendar.sign.element}</div>
                
                <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">{calendar.monthlyTheme}</h3>
                  <p className="text-gray-300 leading-relaxed">{calendar.monthlyAdvice}</p>
                </div>
              </div>
            </div>

            {/* Calendar Navigation */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  ← Tháng trước
                </button>
                
                <h3 className="text-2xl font-bold text-white">
                  {monthNames[currentMonth]} {currentYear}
                </h3>
                
                <button
                  onClick={() => navigateMonth('next')}
                  className="bg-gray-700/50 hover:bg-gray-600/50 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Tháng sau →
                </button>
              </div>

              {/* Calendar Header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-gray-400 font-semibold py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {renderCalendarGrid()}
              </div>

              <div className="mt-4 text-center text-gray-400 text-sm">
                💡 Nhấp vào ngày để xem chi tiết dự đoán
              </div>
            </div>

            {/* Selected Date Details */}
            {selectedDate && getSelectedPrediction() && (
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Chi Tiết Ngày {new Date(selectedDate).getDate()} {monthNames[currentMonth]}
                </h3>
                
                {(() => {
                  const prediction = getSelectedPrediction()!;
                  return (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                          <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                            <span>⚡</span> Năng Lượng
                          </h4>
                          <p className="text-white text-lg">{prediction.energy}</p>
                        </div>
                        
                        <div className="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                          <h4 className="text-pink-400 font-semibold mb-2 flex items-center gap-2">
                            <span>😊</span> Tâm Trạng
                          </h4>
                          <p className="text-white text-lg">{prediction.mood}</p>
                        </div>
                        
                        <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                          <h4 className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                            <span>🕐</span> Giờ May Mắn
                          </h4>
                          <p className="text-white text-lg">{prediction.luckyHour}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                          <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                            <span>🎨</span> Màu May Mắn
                          </h4>
                          <p className="text-white text-lg">{prediction.color}</p>
                        </div>
                        
                        <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                          <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                            <span>⭐</span> Đánh Giá Ngày
                          </h4>
                          <div className="flex gap-1">
                            {renderStars(prediction.rating)}
                          </div>
                        </div>
                        
                        <div className="bg-golden/10 rounded-lg p-4 border border-golden/20">
                          <h4 className="text-golden font-semibold mb-2 flex items-center gap-2">
                            <span>💡</span> Lời Khuyên
                          </h4>
                          <p className="text-gray-300 leading-relaxed">{prediction.advice}</p>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        )}

        {/* Related Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Khám Phá Thêm</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/zodiac/today"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              ⭐ Tử Vi Hôm Nay
            </Link>
            <Link
              href="/zodiac/compatibility"
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              💕 Ghép Đôi Cung Hoàng Đạo
            </Link>
            <Link
              href="/zodiac"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              ♈ Tử Vi 12 Cung
            </Link>
            <Link
              href="/numerology"
              className="bg-gradient-to-r from-golden to-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🔢 Thần Số Học
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
