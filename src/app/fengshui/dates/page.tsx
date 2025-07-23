'use client';

import ContentHeader from '@/components/ContentHeader';
import Link from 'next/link';
import { useState } from 'react';

interface EventType {
  id: string;
  name: string;
  description: string;
  icon: string;
  considerations: string[];
  avoidDays: string[];
  preferredDays: string[];
}

interface DateAnalysis {
  date: string;
  dayOfWeek: string;
  lunarDate: string;
  rating: 'excellent' | 'good' | 'neutral' | 'avoid';
  events: {
    suitable: string[];
    unsuitable: string[];
  };
  reasons: string[];
  advice: string;
  luckyHours: string[];
  direction: string;
}

interface DateRecommendations {
  eventType: string;
  month: number;
  year: number;
  recommendations: {
    excellent: DateAnalysis[];
    good: DateAnalysis[];
    avoid: DateAnalysis[];
  };
  generalAdvice: string;
  monthlyTrend: string;
}

const eventTypes: EventType[] = [
  {
    id: 'wedding',
    name: 'Cưới hỏi',
    description: 'Lễ cưới, lễ đính hôn, lễ ăn hỏi',
    icon: '💒',
    considerations: ['Tránh tháng cô hồn', 'Chọn ngày đẹp âm lịch', 'Tránh ngày xung khắc'],
    avoidDays: ['Thứ 3', 'Thứ 7'],
    preferredDays: ['Chủ nhật', 'Thứ 6']
  },
  {
    id: 'business',
    name: 'Khai trương',
    description: 'Khai trương cửa hàng, công ty, doanh nghiệp',
    icon: '🏪',
    considerations: ['Chọn giờ tốt', 'Tránh ngày phá', 'Hướng cửa phù hợp'],
    avoidDays: ['Thứ 4'],
    preferredDays: ['Thứ 2', 'Thứ 6', 'Chủ nhật']
  },
  {
    id: 'construction',
    name: 'Khởi công',
    description: 'Khởi công xây dựng, sửa chữa nhà cửa',
    icon: '🏗️',
    considerations: ['Chọn ngày động thổ', 'Tránh ngày phạm thái tuế', 'Hướng khởi công'],
    avoidDays: ['Thứ 5'],
    preferredDays: ['Thứ 2', 'Thứ 3', 'Thứ 6']
  },
  {
    id: 'moving',
    name: 'Chuyển nhà',
    description: 'Chuyển nhà, dọn về nhà mới',
    icon: '🏠',
    considerations: ['Chọn ngày nhập trạch', 'Tránh ngày xung tuổi', 'Giờ tốt để dọn'],
    avoidDays: ['Thứ 7'],
    preferredDays: ['Thứ 2', 'Thứ 4', 'Thứ 6']
  },
  {
    id: 'travel',
    name: 'Du lịch',
    description: 'Đi du lịch, công tác xa',
    icon: '✈️',
    considerations: ['Chọn ngày xuất hành', 'Tránh ngày xung', 'Hướng đi may mắn'],
    avoidDays: [],
    preferredDays: ['Thứ 6', 'Thứ 7', 'Chủ nhật']
  },
  {
    id: 'investment',
    name: 'Đầu tư',
    description: 'Ký hợp đồng, đầu tư tài chính',
    icon: '💰',
    considerations: ['Chọn ngày tài lộc', 'Tránh ngày phá tài', 'Giờ ký hợp đồng'],
    avoidDays: ['Thứ 4'],
    preferredDays: ['Thứ 2', 'Thứ 5', 'Thứ 6']
  }
];

const generateDateAnalysis = (date: Date, eventType: string): DateAnalysis => {
  const dayNames = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  const dayOfWeek = dayNames[date.getDay()];
  
  // Simple lunar date calculation (approximation)
  const lunarOffset = Math.floor((date.getTime() / (1000 * 60 * 60 * 24)) % 30) + 1;
  const lunarDate = `${lunarOffset}/12 âm lịch`;
  
  // Generate rating based on date and event type
  const seed = date.getDate() + date.getMonth() + eventType.length;
  const ratings: DateAnalysis['rating'][] = ['excellent', 'good', 'neutral', 'avoid'];
  const rating = ratings[seed % 4];
  
  const suitableEvents = ['Cầu an', 'Thờ cúng', 'Gặp gỡ bạn bè'];
  const unsuitableEvents = ['Khởi công lớn', 'Ký hợp đồng quan trọng'];
  
  if (rating === 'excellent' || rating === 'good') {
    suitableEvents.push(eventTypes.find(e => e.id === eventType)?.name || '');
  } else {
    unsuitableEvents.push(eventTypes.find(e => e.id === eventType)?.name || '');
  }
  
  const reasons = [
    rating === 'excellent' ? 'Ngày hoàng đạo, rất tốt cho mọi việc' :
    rating === 'good' ? 'Ngày tốt, phù hợp cho các hoạt động quan trọng' :
    rating === 'neutral' ? 'Ngày bình thường, cần cân nhắc kỹ' :
    'Ngày không tốt, nên tránh các việc quan trọng'
  ];
  
  const advice = 
    rating === 'excellent' ? 'Đây là ngày rất tốt, hãy tận dụng để thực hiện kế hoạch quan trọng' :
    rating === 'good' ? 'Ngày khá tốt, có thể tiến hành các hoạt động đã lên kế hoạch' :
    rating === 'neutral' ? 'Ngày bình thường, nên chuẩn bị kỹ càng trước khi hành động' :
    'Nên hoãn lại các việc quan trọng, chọn ngày khác tốt hơn';
  
  const luckyHours = ['6-8h', '9-11h', '14-16h', '19-21h'].slice(0, rating === 'excellent' ? 4 : rating === 'good' ? 3 : 2);
  
  const directions = ['Đông', 'Tây', 'Nam', 'Bắc', 'Đông Nam', 'Tây Nam', 'Đông Bắc', 'Tây Bắc'];
  const direction = directions[seed % directions.length];
  
  return {
    date: date.toISOString().split('T')[0],
    dayOfWeek,
    lunarDate,
    rating,
    events: {
      suitable: suitableEvents,
      unsuitable: unsuitableEvents
    },
    reasons,
    advice,
    luckyHours,
    direction
  };
};

export default function FengshuiDatesPage() {
  const [selectedEvent, setSelectedEvent] = useState<string>('wedding');
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [recommendations, setRecommendations] = useState<DateRecommendations | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<'excellent' | 'good' | 'avoid'>('excellent');

  const analyzeDates = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
      const allDates: DateAnalysis[] = [];
      
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(selectedYear, selectedMonth - 1, day);
        const analysis = generateDateAnalysis(date, selectedEvent);
        allDates.push(analysis);
      }
      
      const excellent = allDates.filter(d => d.rating === 'excellent');
      const good = allDates.filter(d => d.rating === 'good');
      const avoid = allDates.filter(d => d.rating === 'avoid');
      
      const eventInfo = eventTypes.find(e => e.id === selectedEvent)!;
      
      const newRecommendations: DateRecommendations = {
        eventType: eventInfo.name,
        month: selectedMonth,
        year: selectedYear,
        recommendations: {
          excellent: excellent.slice(0, 5),
          good: good.slice(0, 8),
          avoid: avoid.slice(0, 5)
        },
        generalAdvice: `Tháng ${selectedMonth}/${selectedYear} có ${excellent.length} ngày xuất sắc và ${good.length} ngày tốt cho ${eventInfo.name.toLowerCase()}. ${eventInfo.considerations.join('. ')}.`,
        monthlyTrend: selectedMonth <= 3 ? 'Đầu năm là thời điểm tốt để khởi đầu mới' :
                     selectedMonth <= 6 ? 'Giữa năm phù hợp cho phát triển và mở rộng' :
                     selectedMonth <= 9 ? 'Cuối hè là thời gian thu hoạch thành quả' :
                     'Cuối năm thích hợp cho hoàn thiện và chuẩn bị'
      };
      
      setRecommendations(newRecommendations);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getRatingColor = (rating: DateAnalysis['rating']): string => {
    switch (rating) {
      case 'excellent': return 'border-green-500 bg-green-500/10';
      case 'good': return 'border-blue-500 bg-blue-500/10';
      case 'neutral': return 'border-yellow-500 bg-yellow-500/10';
      case 'avoid': return 'border-red-500 bg-red-500/10';
    }
  };

  const getRatingIcon = (rating: DateAnalysis['rating']): string => {
    switch (rating) {
      case 'excellent': return '⭐';
      case 'good': return '👍';
      case 'neutral': return '⚖️';
      case 'avoid': return '⚠️';
    }
  };

  const getRatingText = (rating: DateAnalysis['rating']): string => {
    switch (rating) {
      case 'excellent': return 'Xuất Sắc';
      case 'good': return 'Tốt';
      case 'neutral': return 'Bình Thường';
      case 'avoid': return 'Nên Tránh';
    }
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <ContentHeader 
        title="Chọn Ngày Tốt"
        description="Tìm ngày hoàng đạo phù hợp cho các sự kiện quan trọng trong cuộc sống"
        breadcrumb={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Phong Thủy', href: '/feng-shui' },
          { label: 'Chọn Ngày Tốt', href: '/feng-shui/dates' }
        ]}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Selection Form */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Chọn Sự Kiện Và Thời Gian
          </h2>
          
          <div className="space-y-6">
            {/* Event Type Selection */}
            <div>
              <label className="block text-gray-300 mb-3">Loại sự kiện</label>
              <div className="grid md:grid-cols-3 gap-4">
                {eventTypes.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      selectedEvent === event.id
                        ? 'border-golden bg-golden/10 text-golden'
                        : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{event.icon}</div>
                      <div className="font-semibold">{event.name}</div>
                      <div className="text-sm opacity-75">{event.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Month and Year Selection */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Tháng</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-golden focus:outline-none"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      Tháng {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Năm</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-golden focus:outline-none"
                >
                  {Array.from({ length: 5 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={analyzeDates}
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
                    📅 Xem Ngày Tốt
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {recommendations && (
          <div className="space-y-8">
            {/* Overview */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {recommendations.eventType} - Tháng {recommendations.month}/{recommendations.year}
                </h2>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                  {recommendations.generalAdvice}
                </p>
                <div className="bg-golden/10 rounded-lg p-4 border border-golden/20">
                  <div className="text-golden font-semibold mb-2">Xu hướng tháng:</div>
                  <div className="text-gray-300">{recommendations.monthlyTrend}</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/50 rounded-full p-1">
                {[
                  { id: 'excellent', label: '⭐ Xuất Sắc', count: recommendations.recommendations.excellent.length },
                  { id: 'good', label: '👍 Tốt', count: recommendations.recommendations.good.length },
                  { id: 'avoid', label: '⚠️ Nên Tránh', count: recommendations.recommendations.avoid.length }
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
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Date Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.recommendations[activeTab].map((dateAnalysis, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-6 border ${getRatingColor(dateAnalysis.rating)}`}
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{getRatingIcon(dateAnalysis.rating)}</div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {formatDate(dateAnalysis.date)}
                    </h3>
                    <div className="text-gray-400 text-sm mb-2">{dateAnalysis.dayOfWeek}</div>
                    <div className="text-golden font-semibold">{dateAnalysis.lunarDate}</div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-green-400 font-semibold mb-1">Phù hợp:</div>
                      <div className="flex flex-wrap gap-1">
                        {dateAnalysis.events.suitable.slice(0, 3).map((event, i) => (
                          <span key={i} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                            {event}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-blue-400 font-semibold mb-1">Giờ tốt:</div>
                      <div className="text-gray-300 text-sm">
                        {dateAnalysis.luckyHours.join(', ')}
                      </div>
                    </div>

                    <div>
                      <div className="text-purple-400 font-semibold mb-1">Hướng may mắn:</div>
                      <div className="text-gray-300 text-sm">{dateAnalysis.direction}</div>
                    </div>

                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="text-golden font-semibold mb-1">Lời khuyên:</div>
                      <div className="text-gray-300 text-sm">{dateAnalysis.advice}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {recommendations.recommendations[activeTab].length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-lg">
                  Không có ngày nào trong danh mục này cho tháng đã chọn
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
              href="/fengshui/home"
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🏠 Phong Thủy Nhà Ở
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
