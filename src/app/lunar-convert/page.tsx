'use client';

import { formatLunarDate, formatSolarDate, lunarToSolar, solarToLunar } from '@/lib/lunarCalendar';
import { useState } from 'react';

export default function LunarConvertPage() {
  const [convertType, setConvertType] = useState<'solar-to-lunar' | 'lunar-to-solar'>('solar-to-lunar');
  const [solarDate, setSolarDate] = useState('');
  const [lunarDate, setLunarDate] = useState({
    day: 1,
    month: 1,
    year: 2024,
    isLeapMonth: false
  });
  const [result, setResult] = useState<any>(null);

  const handleSolarToLunar = () => {
    if (!solarDate) {
      alert('Vui lòng chọn ngày dương lịch!');
      return;
    }
    
    const converted = solarToLunar(solarDate);
    setResult({
      type: 'solar-to-lunar',
      input: formatSolarDate(solarDate),
      output: formatLunarDate(converted),
      details: converted
    });
  };

  const handleLunarToSolar = () => {
    const converted = lunarToSolar(lunarDate);
    setResult({
      type: 'lunar-to-solar',
      input: formatLunarDate(lunarDate),
      output: formatSolarDate(converted),
      details: converted
    });
  };

  const handleConvert = () => {
    if (convertType === 'solar-to-lunar') {
      handleSolarToLunar();
    } else {
      handleLunarToSolar();
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-black/50 to-gray-900/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Chuyển Đổi <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">Lịch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chuyển đổi giữa dương lịch và âm lịch một cách chính xác và nhanh chóng
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-4xl text-golden animate-pulse">🌞</div>
        <div className="absolute bottom-10 right-10 text-3xl text-blue-400 animate-bounce">🌙</div>
        <div className="absolute top-1/2 right-1/4 text-2xl text-gray-400 animate-ping">📅</div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Conversion Type Selector */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-400/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Chọn kiểu chuyển đổi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setConvertType('solar-to-lunar')}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  convertType === 'solar-to-lunar'
                    ? 'bg-golden/20 border-golden text-white'
                    : 'bg-white/5 border-gray-400/30 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="text-4xl mb-4">🌞➡️🌙</div>
                <h3 className="font-bold text-lg mb-2">Dương lịch → Âm lịch</h3>
                <p className="text-sm opacity-80">Chuyển từ ngày tháng năm dương lịch sang âm lịch</p>
              </button>

              <button
                onClick={() => setConvertType('lunar-to-solar')}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  convertType === 'lunar-to-solar'
                    ? 'bg-golden/20 border-golden text-white'
                    : 'bg-white/5 border-gray-400/30 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className="text-4xl mb-4">🌙➡️🌞</div>
                <h3 className="font-bold text-lg mb-2">Âm lịch → Dương lịch</h3>
                <p className="text-sm opacity-80">Chuyển từ ngày tháng năm âm lịch sang dương lịch</p>
              </button>
            </div>
          </div>

          {/* Input Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-400/20 mb-8">
            {convertType === 'solar-to-lunar' ? (
              <div>
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Nhập ngày dương lịch
                </h3>
                <div className="max-w-md mx-auto">
                  <label className="block text-white font-medium mb-2">Chọn ngày</label>
                  <input
                    type="date"
                    value={solarDate}
                    onChange={(e) => setSolarDate(e.target.value)}
                    max={today}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                  />
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Nhập ngày âm lịch
                </h3>
                <div className="max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Ngày</label>
                      <select
                        value={lunarDate.day}
                        onChange={(e) => setLunarDate({ ...lunarDate, day: parseInt(e.target.value) })}
                        className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                      >
                        {[...Array(30)].map((_, i) => (
                          <option key={i} value={i + 1} className="bg-gray-900">
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Tháng</label>
                      <select
                        value={lunarDate.month}
                        onChange={(e) => setLunarDate({ ...lunarDate, month: parseInt(e.target.value) })}
                        className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                      >
                        {[...Array(12)].map((_, i) => (
                          <option key={i} value={i + 1} className="bg-gray-900">
                            Tháng {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Năm</label>
                      <input
                        type="number"
                        value={lunarDate.year}
                        onChange={(e) => setLunarDate({ ...lunarDate, year: parseInt(e.target.value) })}
                        min="1900"
                        max="2100"
                        className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <label className="flex items-center space-x-2 text-white">
                      <input
                        type="checkbox"
                        checked={lunarDate.isLeapMonth}
                        onChange={(e) => setLunarDate({ ...lunarDate, isLeapMonth: e.target.checked })}
                        className="w-4 h-4 text-golden bg-white/10 border-gray-400/30 rounded focus:ring-golden focus:ring-2"
                      />
                      <span>Tháng nhuận</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Convert Button */}
            <div className="text-center mt-8">
              <button
                onClick={handleConvert}
                className="px-8 py-4 bg-gradient-to-r from-golden to-yellow-300 text-gray-900 font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center">
                  🔄 Chuyển đổi
                </span>
              </button>
            </div>
          </div>

          {/* Result */}
          {result && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-gray-400/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Kết quả chuyển đổi
              </h2>

              <div className="max-w-2xl mx-auto">
                {/* Conversion Result */}
                <div className="bg-gradient-to-r from-golden/20 to-yellow-300/20 rounded-xl p-6 border border-golden/30 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">
                      {result.input}
                    </div>
                    <div className="text-4xl my-4">
                      {result.type === 'solar-to-lunar' ? '🌞 ➡️ 🌙' : '🌙 ➡️ 🌞'}
                    </div>
                    <div className="text-2xl font-bold text-golden">
                      {result.output}
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 rounded-xl p-4">
                    <h4 className="font-bold text-golden mb-2">📅 Chi tiết</h4>
                    <div className="text-gray-300 text-sm space-y-1">
                      {result.type === 'solar-to-lunar' ? (
                        <>
                          <div>Năm âm lịch: {result.details.year}</div>
                          <div>Tháng: {result.details.month}{result.details.isLeapMonth ? ' (nhuận)' : ''}</div>
                          <div>Ngày: {result.details.day}</div>
                        </>
                      ) : (
                        <>
                          <div>Năm dương lịch: {result.details.getFullYear()}</div>
                          <div>Tháng: {result.details.getMonth() + 1}</div>
                          <div>Ngày: {result.details.getDate()}</div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-800/30 rounded-xl p-4">
                    <h4 className="font-bold text-golden mb-2">🌟 Thông tin thêm</h4>
                    <div className="text-gray-300 text-sm space-y-1">
                      <div>Thứ trong tuần: {result.details.dayOfWeek || 'Không xác định'}</div>
                      <div>Can Chi: {result.details.canChi || 'Đang cập nhật'}</div>
                      <div>Tiết khí: {result.details.season || 'Đang cập nhật'}</div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 text-center space-x-4">
                  <button
                    onClick={() => setResult(null)}
                    className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Chuyển đổi lại
                  </button>
                  <button
                    onClick={() => {
                      if (convertType === 'solar-to-lunar') {
                        setSolarDate(today);
                      } else {
                        const now = new Date();
                        setLunarDate({
                          day: now.getDate(),
                          month: now.getMonth() + 1,
                          year: now.getFullYear(),
                          isLeapMonth: false
                        });
                      }
                    }}
                    className="px-6 py-2 bg-golden hover:bg-yellow-400 text-gray-900 font-medium rounded-lg transition-colors"
                  >
                    Chuyển đổi hôm nay
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

