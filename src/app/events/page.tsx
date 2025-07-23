'use client';

import { formatEventDate, getEventsByMonth, getSpiritualEvents, getUpcomingEvents } from '@/lib/spiritualEvents';
import { useMemo, useState } from 'react';

export default function EventsPage() {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [viewMode, setViewMode] = useState<'all' | 'month' | 'upcoming'>('upcoming');

  const events = useMemo(() => {
    switch (viewMode) {
      case 'month':
        return getEventsByMonth(selectedMonth, selectedYear);
      case 'upcoming':
        return getUpcomingEvents();
      default:
        return getSpiritualEvents();
    }
  }, [viewMode, selectedMonth, selectedYear]);

  const monthNames = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-black/50 to-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ngày Lễ <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">Tâm Linh</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Khám phá các Ngày Lễ  Việt Nam quan trọng trong năm và ý nghĩa của chúng
          </p>
        </div>
        
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Controls */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-gray-400/20 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* View Mode */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('upcoming')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    viewMode === 'upcoming'
                      ? 'bg-golden text-gray-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  🔜 Sắp tới
                </button>
                <button
                  onClick={() => setViewMode('month')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    viewMode === 'month'
                      ? 'bg-golden text-gray-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  📅 Theo tháng
                </button>
                <button
                  onClick={() => setViewMode('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    viewMode === 'all'
                      ? 'bg-golden text-gray-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  📋 Tất cả
                </button>
              </div>

              {/* Month/Year selector for month view */}
              {viewMode === 'month' && (
                <div className="flex space-x-2">
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                    className="px-3 py-2 bg-white/10 border border-gray-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-golden"
                  >
                    {monthNames.map((month, index) => (
                      <option key={index} value={index + 1} className="bg-gray-900">
                        {month}
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                    min="2020"
                    max="2030"
                    className="px-3 py-2 bg-white/10 border border-gray-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-golden w-24"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Events List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-gray-400/20 overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Event Header */}
                <div className={`p-6 ${event.isSpecial ? 'bg-gradient-to-r from-golden/20 to-yellow-300/20' : 'bg-gray-800/30'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                        <span className="mr-2 text-2xl">{event.icon}</span>
                        {event.name}
                        {event.isSpecial && <span className="ml-2 text-golden">⭐</span>}
                      </h3>
                      <div className="text-golden font-medium mb-1">
                        {formatEventDate(event)}
                      </div>
                      <div className="text-gray-300 text-sm">
                        {event.type} • {event.tradition}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Significance */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-golden mb-2">🌟 Ý nghĩa:</h4>
                    <p className="text-gray-300 text-sm">
                      {event.significance}
                    </p>
                  </div>

                  {/* Activities */}
                  {event.activities && event.activities.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-golden mb-2">🎯 Hoạt động:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {event.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Preparations */}
                  {event.preparations && event.preparations.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-golden mb-2">📝 Chuẩn bị:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {event.preparations.map((prep, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{prep}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-600/30 text-gray-300 text-xs rounded-full border border-purple-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Event Footer */}
                {event.isUpcoming && (
                  <div className="px-6 pb-4">
                    <div className="bg-golden/20 rounded-lg p-3 border border-golden/30">
                      <div className="flex items-center justify-between">
                        <span className="text-golden font-medium text-sm">
                          📅 Sắp diễn ra
                        </span>
                        {event.daysLeft !== undefined && (
                          <span className="text-golden text-sm">
                            Còn {event.daysLeft} ngày
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No events message */}
          {events.length === 0 && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-gray-400/20 text-center">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Không có sự kiện nào
              </h3>
              <p className="text-gray-300">
                {viewMode === 'month' 
                  ? `Không có Ngày Lễ  Việt Nam nào trong ${monthNames[selectedMonth - 1]} ${selectedYear}`
                  : viewMode === 'upcoming'
                  ? 'Không có sự kiện nào sắp diễn ra trong thời gian tới'
                  : 'Danh sách sự kiện đang được cập nhật'
                }
              </p>
            </div>
          )}

          {/* Legend */}
          <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-gray-400/20">
            <h3 className="text-xl font-bold text-white mb-4">📚 Chú giải</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="mr-2">⭐</span>
                  <span className="text-gray-300">Ngày lễ đặc biệt quan trọng</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🙏</span>
                  <span className="text-gray-300">Ngày cúng bái, tâm linh</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🌸</span>
                  <span className="text-gray-300">Lễ hội văn hóa truyền thống</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="mr-2">🌕</span>
                  <span className="text-gray-300">Ngày rằm, trăng tròn</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📅</span>
                  <span className="text-gray-300">Sự kiện theo âm lịch</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🎊</span>
                  <span className="text-gray-300">Lễ hội lớn của dân tộc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

