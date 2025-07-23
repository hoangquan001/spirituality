'use client';

import { useState, useEffect } from 'react';

interface CalendarDay {
  date: number;
  lunarDate: string;
  canChi: string;
  isToday: boolean;
  isCurrentMonth: boolean;
  goodTime: string[];
  badTime: string[];
  direction: string;
  color: string;
}

const LUNAR_MONTHS = [
  'Giêng', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu',
  'Bảy', 'Tám', 'Chín', 'Mười', 'Một', 'Chạp'
];

const CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'year'>('month');

  const today = new Date();
  
  // Tính Can Chi cho ngày
  const getCanChi = (date: Date): string => {
    const baseDate = new Date(1900, 0, 1); // 1/1/1900
    const daysDiff = Math.floor((date.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));
    const canIndex = (daysDiff + 6) % 10; // Điều chỉnh offset
    const chiIndex = (daysDiff + 8) % 12; // Điều chỉnh offset
    return `${CAN[canIndex]} ${CHI[chiIndex]}`;
  };

  // Giả lập tính âm lịch đơn giản (thực tế cần thuật toán phức tạp)
  const getLunarDate = (date: Date): string => {
    const lunarDay = (date.getDate() + 15) % 30 + 1;
    const lunarMonth = ((date.getMonth() + 11) % 12);
    return `${lunarDay}/${LUNAR_MONTHS[lunarMonth]}`;
  };

  // Tính giờ tốt/xấu theo Can Chi
  const getTimeInfo = (canChi: string) => {
    const goodTimes = ['5-7h (Mão)', '11-13h (Ngọ)', '17-19h (Dậu)'];
    const badTimes = ['23-1h (Tý)', '13-15h (Mùi)'];
    return { goodTimes, badTimes };
  };

  // Tính hướng và màu may mắn
  const getDailyFortune = (date: Date) => {
    const directions = ['Đông', 'Tây', 'Nam', 'Bắc', 'Đông Nam', 'Tây Nam', 'Đông Bắc', 'Tây Bắc'];
    const colors = ['Đỏ', 'Xanh', 'Vàng', 'Trắng', 'Đen', 'Tím', 'Hồng', 'Cam'];
    
    const seed = date.getDate() + date.getMonth();
    return {
      direction: directions[seed % directions.length],
      color: colors[seed % colors.length]
    };
  };

  // Tạo lịch tháng
  const generateCalendar = (): CalendarDay[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstWeekday = firstDay.getDay();
    
    const calendar: CalendarDay[] = [];
    
    // Thêm những ngày của tháng trước
    for (let i = firstWeekday - 1; i >= 0; i--) {
      const date = new Date(year, month, -i);
      const canChi = getCanChi(date);
      const timeInfo = getTimeInfo(canChi);
      const fortune = getDailyFortune(date);
      
      calendar.push({
        date: date.getDate(),
        lunarDate: getLunarDate(date),
        canChi,
        isToday: false,
        isCurrentMonth: false,
        goodTime: timeInfo.goodTimes,
        badTime: timeInfo.badTimes,
        direction: fortune.direction,
        color: fortune.color
      });
    }
    
    // Thêm những ngày của tháng hiện tại
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const canChi = getCanChi(date);
      const timeInfo = getTimeInfo(canChi);
      const fortune = getDailyFortune(date);
      const isToday = date.toDateString() === today.toDateString();
      
      calendar.push({
        date: day,
        lunarDate: getLunarDate(date),
        canChi,
        isToday,
        isCurrentMonth: true,
        goodTime: timeInfo.goodTimes,
        badTime: timeInfo.badTimes,
        direction: fortune.direction,
        color: fortune.color
      });
    }
    
    // Thêm những ngày của tháng sau để đủ 42 ô
    const remaining = 42 - calendar.length;
    for (let day = 1; day <= remaining; day++) {
      const date = new Date(year, month + 1, day);
      const canChi = getCanChi(date);
      const timeInfo = getTimeInfo(canChi);
      const fortune = getDailyFortune(date);
      
      calendar.push({
        date: day,
        lunarDate: getLunarDate(date),
        canChi,
        isToday: false,
        isCurrentMonth: false,
        goodTime: timeInfo.goodTimes,
        badTime: timeInfo.badTimes,
        direction: fortune.direction,
        color: fortune.color
      });
    }
    
    return calendar;
  };

  const calendar = generateCalendar();

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent">
              Lịch Vạn Niên
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Xem lịch âm dương, Can Chi, giờ tốt xấu và hướng may mắn cho từng ngày
          </p>
        </div>

        {/* Calendar Controls */}
        <div className="bg-gradient-to-br from-gray-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-6 border border-gray-400/20 mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth('prev')}
              className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-indigo-600 hover:to-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              ← Tháng Trước
            </button>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                Tháng {currentDate.getMonth() + 1} - {currentDate.getFullYear()}
              </h2>
              <p className="text-gray-300">
                Âm lịch: {getLunarDate(currentDate)} - {getCanChi(currentDate)}
              </p>
            </div>
            
            <button
              onClick={() => navigateMonth('next')}
              className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-indigo-600 hover:to-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Tháng Sau →
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map(day => (
              <div key={day} className="text-center py-3 text-golden font-bold">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendar.map((day, index) => (
              <div
                key={index}
                onClick={() => setSelectedDay(day)}
                className={`
                  relative p-3 rounded-lg cursor-pointer transition-all duration-200 min-h-[80px]
                  ${day.isCurrentMonth 
                    ? 'bg-white/10 hover:bg-white/20 border border-gray-400/30' 
                    : 'bg-white/5 hover:bg-white/10 text-purple-400'
                  }
                  ${day.isToday ? 'ring-2 ring-golden bg-golden/20' : ''}
                `}
              >
                <div className="text-lg font-bold mb-1">{day.date}</div>
                <div className="text-xs text-gray-400">{day.lunarDate}</div>
                <div className="text-xs text-purple-400">{day.canChi}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-golden">📅</span>
              Hôm Nay
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Dương lịch:</strong> {today.toLocaleDateString('vi-VN')}</p>
              <p><strong>Âm lịch:</strong> {getLunarDate(today)}</p>
              <p><strong>Can Chi:</strong> {getCanChi(today)}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-6 border border-green-300/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-green-400">⏰</span>
              Giờ Tốt
            </h3>
            <div className="space-y-2">
              {getTimeInfo(getCanChi(today)).goodTimes.map((time, index) => (
                <div key={index} className="bg-green-900/20 rounded-lg p-2 text-green-200 text-sm">
                  {time}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-golden/20 to-yellow-900/30 backdrop-blur-sm rounded-2xl p-6 border border-golden/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-golden">🧭</span>
              May Mắn
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Hướng:</strong> {getDailyFortune(today).direction}</p>
              <p><strong>Màu sắc:</strong> {getDailyFortune(today).color}</p>
            </div>
          </div>
        </div>

        {/* Day Detail Modal */}
        {selectedDay && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-900/95 to-gray-900/95 rounded-2xl p-8 max-w-2xl w-full border border-golden/20">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Ngày {selectedDay.date}
                  </h2>
                  <p className="text-gray-300">
                    Âm lịch: {selectedDay.lunarDate} - {selectedDay.canChi}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDay(null)}
                  className="text-white hover:text-golden transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">⏰ Giờ Tốt</h3>
                  <div className="space-y-2">
                    {selectedDay.goodTime.map((time, index) => (
                      <div key={index} className="bg-green-900/20 rounded-lg p-3 text-green-200">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-3">⚠️ Giờ Xấu</h3>
                  <div className="space-y-2">
                    {selectedDay.badTime.map((time, index) => (
                      <div key={index} className="bg-red-900/20 rounded-lg p-3 text-red-200">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-golden/10 rounded-lg p-4">
                  <h4 className="font-semibold text-golden mb-2">🧭 Hướng May Mắn</h4>
                  <p className="text-white text-lg">{selectedDay.direction}</p>
                </div>

                <div className="bg-gray-900/30 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-400 mb-2">🎨 Màu May Mắn</h4>
                  <p className="text-white text-lg">{selectedDay.color}</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedDay(null)}
                  className="bg-gradient-to-r from-golden to-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900/20 to-blue-900/20 rounded-3xl p-8 border border-gray-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-golden">📚</span>
              Ý Nghĩa Can Chi
            </h3>
            <div className="space-y-4 text-gray-300">
              <p><strong className="text-white">Can:</strong> 10 thiên can đại diện cho năng lượng trời</p>
              <p><strong className="text-white">Chi:</strong> 12 địa chi đại diện cho năng lượng đất</p>
              <p>Can Chi kết hợp tạo nên chu kỳ 60 năm, ảnh hưởng đến vận mệnh con người.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/20 to-blue-900/20 rounded-3xl p-8 border border-gray-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-golden">🌙</span>
              Âm Lịch Việt Nam
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>Âm lịch dựa trên chu kỳ của mặt trăng, mỗi tháng có 29-30 ngày.</p>
              <p><strong className="text-white">Ý nghĩa:</strong> Quyết định các ngày lễ, tết và hoạt động tâm linh.</p>
              <p>Được sử dụng rộng rãi trong văn hóa Việt Nam và các nước Á Đông.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

