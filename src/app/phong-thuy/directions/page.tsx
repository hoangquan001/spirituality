'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';
import { useState } from 'react';

interface DirectionInfo {
  name: string;
  element: string;
  energy: string;
  benefits: string[];
  activities: string[];
  color: string;
  symbol: string;
}

interface PersonalDirections {
  birthYear: number;
  gender: 'male' | 'female';
  kuaNumber: number;
  eastWestGroup: 'East' | 'West';
  directions: {
    excellent: DirectionInfo[];
    good: DirectionInfo[];
    neutral: DirectionInfo[];
    bad: DirectionInfo[];
  };
  recommendations: {
    sleeping: string[];
    working: string[];
    entrance: string[];
    avoid: string[];
  };
}

const directionsData: Record<string, DirectionInfo> = {
  North: {
    name: 'Bắc',
    element: 'Thủy',
    energy: 'Sự nghiệp, trí tuệ',
    benefits: [
      'Phát triển sự nghiệp',
      'Tăng cường trí tuệ',
      'Cải thiện danh tiếng',
    ],
    activities: ['Làm việc', 'Học tập', 'Thiền định'],
    color: 'Đen, Xanh đen',
    symbol: '🧭',
  },
  Northeast: {
    name: 'Đông Bắc',
    element: 'Thổ',
    energy: 'Kiến thức, tâm linh',
    benefits: [
      'Tăng cường học vấn',
      'Phát triển tâm linh',
      'Cải thiện sức khỏe',
    ],
    activities: ['Học tập', 'Nghiên cứu', 'Tu luyện'],
    color: 'Vàng, Nâu',
    symbol: '📚',
  },
  East: {
    name: 'Đông',
    element: 'Mộc',
    energy: 'Gia đình, sức khỏe',
    benefits: [
      'Hòa hợp gia đình',
      'Tăng cường sức khỏe',
      'Phát triển bản thân',
    ],
    activities: ['Sinh hoạt gia đình', 'Tập thể dục', 'Thư giãn'],
    color: 'Xanh lá',
    symbol: '🌱',
  },
  Southeast: {
    name: 'Đông Nam',
    element: 'Mộc',
    energy: 'Tài lộc, thịnh vượng',
    benefits: [
      'Gia tăng tài lộc',
      'Phát triển kinh doanh',
      'Mở rộng mối quan hệ',
    ],
    activities: ['Kinh doanh', 'Đầu tư', 'Giao tiếp'],
    color: 'Xanh lá đậm',
    symbol: '💰',
  },
  South: {
    name: 'Nam',
    element: 'Hỏa',
    energy: 'Danh tiếng, thành công',
    benefits: [
      'Nâng cao danh tiếng',
      'Đạt được thành công',
      'Tăng cường năng lượng',
    ],
    activities: ['Thể hiện bản thân', 'Sáng tạo', 'Lãnh đạo'],
    color: 'Đỏ, Cam',
    symbol: '🔥',
  },
  Southwest: {
    name: 'Tây Nam',
    element: 'Thổ',
    energy: 'Tình yêu, mối quan hệ',
    benefits: [
      'Cải thiện tình yêu',
      'Tăng cường mối quan hệ',
      'Ổn định hôn nhân',
    ],
    activities: ['Hẹn hò', 'Gặp gỡ bạn bè', 'Hoạt động xã hội'],
    color: 'Hồng, Vàng đất',
    symbol: '💕',
  },
  West: {
    name: 'Tây',
    element: 'Kim',
    energy: 'Con cái, sáng tạo',
    benefits: ['Phát triển sáng tạo', 'Tốt cho con cái', 'Tăng cường vui vẻ'],
    activities: ['Sáng tạo', 'Chơi với con', 'Giải trí'],
    color: 'Trắng, Bạc',
    symbol: '🎨',
  },
  Northwest: {
    name: 'Tây Bắc',
    element: 'Kim',
    energy: 'Quý nhân, lãnh đạo',
    benefits: [
      'Gặp được quý nhân',
      'Tăng cường quyền lực',
      'Cải thiện lãnh đạo',
    ],
    activities: ['Gặp gỡ đối tác', 'Ra quyết định', 'Lãnh đạo'],
    color: 'Vàng kim, Trắng',
    symbol: '👑',
  },
};

const calculateKuaNumber = (
  birthYear: number,
  gender: 'male' | 'female'
): number => {
  const yearDigits = birthYear.toString().split('').map(Number);
  const sum = yearDigits.reduce((acc, digit) => acc + digit, 0);
  const reducedSum = sum > 9 ? Math.floor(sum / 10) + (sum % 10) : sum;

  if (gender === 'male') {
    const result = 11 - reducedSum;
    return result === 5 ? 2 : result > 9 ? result - 9 : result;
  } else {
    const result = 4 + reducedSum;
    return result === 5 ? 8 : result > 9 ? result - 9 : result;
  }
};

const getDirectionsForKua = (
  kuaNumber: number
): PersonalDirections['directions'] => {
  const eastGroup = [1, 3, 4, 9];
  const isEastGroup = eastGroup.includes(kuaNumber);

  if (isEastGroup) {
    return {
      excellent: [directionsData['East'], directionsData['Southeast']],
      good: [directionsData['North'], directionsData['South']],
      neutral: [directionsData['Northeast'], directionsData['Southwest']],
      bad: [directionsData['West'], directionsData['Northwest']],
    };
  } else {
    return {
      excellent: [directionsData['West'], directionsData['Northwest']],
      good: [directionsData['Northeast'], directionsData['Southwest']],
      neutral: [directionsData['North'], directionsData['South']],
      bad: [directionsData['East'], directionsData['Southeast']],
    };
  }
};

export default function FengshuiDirectionsPage() {
  const [birthYear, setBirthYear] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [analysis, setAnalysis] = useState<PersonalDirections | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'detailed' | 'recommendations' | 'compass'
  >('overview');

  const analyzeDirections = () => {
    if (
      !birthYear ||
      parseInt(birthYear) < 1900 ||
      parseInt(birthYear) > 2030
    ) {
      alert('Vui lòng nhập năm sinh hợp lệ (1900-2030)');
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      const year = parseInt(birthYear);
      const kuaNumber = calculateKuaNumber(year, gender);
      const eastGroup = [1, 3, 4, 9];
      const eastWestGroup = eastGroup.includes(kuaNumber) ? 'East' : 'West';
      const directions = getDirectionsForKua(kuaNumber);

      const recommendations = {
        sleeping: directions.excellent.map((d) => d.name),
        working: [...directions.excellent, ...directions.good].map(
          (d) => d.name
        ),
        entrance: directions.excellent.map((d) => d.name),
        avoid: directions.bad.map((d) => d.name),
      };

      const newAnalysis: PersonalDirections = {
        birthYear: year,
        gender,
        kuaNumber,
        eastWestGroup,
        directions,
        recommendations,
      };

      setAnalysis(newAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getDirectionColor = (level: string): string => {
    switch (level) {
      case 'excellent':
        return 'border-green-500 bg-green-500/10';
      case 'good':
        return 'border-blue-500 bg-blue-500/10';
      case 'neutral':
        return 'border-yellow-500 bg-yellow-500/10';
      case 'bad':
        return 'border-red-500 bg-red-500/10';
      default:
        return 'border-gray-500 bg-gray-500/10';
    }
  };

  const getLevelText = (level: string): string => {
    switch (level) {
      case 'excellent':
        return 'Xuất Sắc';
      case 'good':
        return 'Tốt';
      case 'neutral':
        return 'Trung Bình';
      case 'bad':
        return 'Nên Tránh';
      default:
        return '';
    }
  };

  const getLevelIcon = (level: string): string => {
    switch (level) {
      case 'excellent':
        return '⭐';
      case 'good':
        return '👍';
      case 'neutral':
        return '⚖️';
      case 'bad':
        return '⚠️';
      default:
        return '';
    }
  };

  return (
    <div className='min-h-screen'>
      {/* Header */}

      <ContentHeader
        title='Hướng Hợp Tuổi'
        description='Tìm hướng may mắn cho giường ngủ, bàn làm việc và cửa chính dựa trên số Kua cá nhân'
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Phong Thủy', href: '/phong-thuy' },
          { label: 'Hướng Hợp Tuổi', href: '/phong-thuy/directions' },
        ]}
      />

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-4 py-12'>
        {/* Input Form */}
        <div className='cosmic-card rounded-3xl p-8 border border-gray-700/20 mb-8'>
          <h2 className='text-2xl font-bold text-white mb-6 text-center'>
            Nhập Thông Tin Của Bạn
          </h2>

          <div className='max-w-md mx-auto space-y-6'>
            <div>
              <label className='block text-gray-300 mb-2'>
                Năm sinh (dương lịch)
              </label>
              <input
                type='number'
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                placeholder='Ví dụ: 1990'
                min='1900'
                max='2030'
                className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-golden focus:outline-none'
              />
            </div>

            <div>
              <label className='block text-gray-300 mb-2'>Giới tính</label>
              <div className='grid grid-cols-2 gap-3'>
                <button
                  onClick={() => setGender('male')}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                    gender === 'male'
                      ? 'border-golden bg-golden/10 text-golden'
                      : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  👨 Nam
                </button>
                <button
                  onClick={() => setGender('female')}
                  className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                    gender === 'female'
                      ? 'border-golden bg-golden/10 text-golden'
                      : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  👩 Nữ
                </button>
              </div>
            </div>

            <div className='text-center'>
              <button
                onClick={analyzeDirections}
                disabled={isAnalyzing}
                className='bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isAnalyzing ? (
                  <span className='flex items-center gap-2'>
                    <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin'></div>
                    Đang phân tích...
                  </span>
                ) : (
                  <span className='flex items-center gap-2'>
                    🧭 Xem Hướng Hợp Tuổi
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {analysis && (
          <div className='space-y-8'>
            {/* Kua Number Overview */}
            <div className='cosmic-card rounded-3xl p-8 border border-gray-700/20'>
              <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold text-white mb-4'>
                  Số Kua: {analysis.kuaNumber}
                </h2>
                <div className='text-golden font-semibold mb-4'>
                  Nhóm {analysis.eastWestGroup === 'East' ? 'Đông' : 'Tây'} •
                  Năm sinh: {analysis.birthYear} •{' '}
                  {analysis.gender === 'male' ? 'Nam' : 'Nữ'}
                </div>
                <p className='text-gray-300 leading-relaxed max-w-3xl mx-auto'>
                  Số Kua của bạn xác định nhóm hướng phù hợp. Nhóm{' '}
                  {analysis.eastWestGroup === 'East' ? 'Đông' : 'Tây'} có những
                  hướng may mắn riêng biệt.
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className='flex justify-center mb-8'>
              <div className='bg-gray-800/50 rounded-full p-1'>
                {[
                  { id: 'overview', label: '📊 Tổng Quan' },
                  { id: 'detailed', label: '🧭 Chi Tiết' },
                  { id: 'recommendations', label: '💡 Gợi Ý' },
                  { id: 'compass', label: '🗺️ La Bàn' },
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
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {Object.entries(analysis.directions).map(
                  ([level, directions]) => (
                    <div
                      key={level}
                      className={`rounded-3xl p-6 border ${getDirectionColor(
                        level
                      )}`}
                    >
                      <h3 className='text-lg font-bold text-white mb-4 flex items-center gap-2'>
                        <span>{getLevelIcon(level)}</span>
                        {getLevelText(level)}
                      </h3>
                      <div className='space-y-3'>
                        {directions.map((direction, index) => (
                          <div
                            key={index}
                            className='bg-gray-700/30 rounded-lg p-3'
                          >
                            <div className='flex items-center gap-2 mb-1'>
                              <span className='text-lg'>
                                {direction.symbol}
                              </span>
                              <span className='font-semibold text-white'>
                                {direction.name}
                              </span>
                            </div>
                            <div className='text-gray-300 text-sm'>
                              {direction.energy}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {activeTab === 'detailed' && (
              <div className='space-y-6'>
                {Object.entries(analysis.directions).map(
                  ([level, directions]) => (
                    <div
                      key={level}
                      className={`rounded-3xl p-6 border ${getDirectionColor(
                        level
                      )}`}
                    >
                      <h3 className='text-xl font-bold text-white mb-6 flex items-center gap-2'>
                        <span>{getLevelIcon(level)}</span>
                        Hướng {getLevelText(level)}
                      </h3>
                      <div className='grid md:grid-cols-2 gap-6'>
                        {directions.map((direction, index) => (
                          <div
                            key={index}
                            className='bg-gray-700/30 rounded-lg p-4'
                          >
                            <div className='flex items-center gap-3 mb-3'>
                              <span className='text-2xl'>
                                {direction.symbol}
                              </span>
                              <div>
                                <h4 className='font-bold text-white'>
                                  {direction.name}
                                </h4>
                                <div className='text-sm text-gray-400'>
                                  {direction.element} • {direction.color}
                                </div>
                              </div>
                            </div>
                            <div className='mb-3'>
                              <div className='text-golden font-semibold mb-1'>
                                Năng lượng:
                              </div>
                              <div className='text-gray-300 text-sm'>
                                {direction.energy}
                              </div>
                            </div>
                            <div className='mb-3'>
                              <div className='text-golden font-semibold mb-1'>
                                Lợi ích:
                              </div>
                              <ul className='text-gray-300 text-sm space-y-1'>
                                {direction.benefits.map((benefit, i) => (
                                  <li
                                    key={i}
                                    className='flex items-start gap-1'
                                  >
                                    <span className='text-golden mt-1'>•</span>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className='text-golden font-semibold mb-1'>
                                Hoạt động phù hợp:
                              </div>
                              <div className='flex flex-wrap gap-1'>
                                {direction.activities.map((activity, i) => (
                                  <span
                                    key={i}
                                    className='bg-golden/20 text-golden px-2 py-1 rounded text-xs'
                                  >
                                    {activity}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {activeTab === 'recommendations' && (
              <div className='grid md:grid-cols-2 gap-6'>
                {Object.entries(analysis.recommendations).map(
                  ([category, directions]) => (
                    <div
                      key={category}
                      className='cosmic-card rounded-3xl p-6 border border-gray-700/20'
                    >
                      <h3 className='text-xl font-bold text-white mb-4 flex items-center gap-2'>
                        <span>
                          {category === 'sleeping' && '🛏️'}
                          {category === 'working' && '💼'}
                          {category === 'entrance' && '🚪'}
                          {category === 'avoid' && '⚠️'}
                        </span>
                        {category === 'sleeping' && 'Hướng Giường Ngủ'}
                        {category === 'working' && 'Hướng Bàn Làm Việc'}
                        {category === 'entrance' && 'Hướng Cửa Chính'}
                        {category === 'avoid' && 'Hướng Nên Tránh'}
                      </h3>
                      <div className='space-y-2'>
                        {directions.map((direction, index) => (
                          <div
                            key={index}
                            className={`p-3 rounded-lg ${
                              category === 'avoid'
                                ? 'bg-red-500/10 border border-red-500/20'
                                : 'bg-green-500/10 border border-green-500/20'
                            }`}
                          >
                            <span
                              className={`font-semibold ${
                                category === 'avoid'
                                  ? 'text-red-400'
                                  : 'text-green-400'
                              }`}
                            >
                              {direction}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className='mt-4 text-gray-400 text-sm'>
                        {category === 'sleeping' &&
                          'Đầu giường hướng về các hướng này'}
                        {category === 'working' &&
                          'Ngồi quay mặt về các hướng này khi làm việc'}
                        {category === 'entrance' &&
                          'Cửa chính nên hướng về các hướng này'}
                        {category === 'avoid' &&
                          'Tránh các hướng này cho các hoạt động quan trọng'}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {activeTab === 'compass' && (
              <div className='cosmic-card rounded-3xl p-8 border border-gray-700/20'>
                <h3 className='text-2xl font-bold text-white mb-8 text-center'>
                  La Bàn Phong Thủy Cá Nhân
                </h3>
                <div className='max-w-2xl mx-auto'>
                  <div className='relative w-full aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-full p-8'>
                    {/* Compass directions */}
                    <div className='absolute inset-8 rounded-full border-4 border-golden/30'>
                      {Object.entries(directionsData).map(
                        ([key, direction], index) => {
                          const angle = index * 45;
                          const isGood = [
                            ...analysis.directions.excellent,
                            ...analysis.directions.good,
                          ].some((d) => d.name === direction.name);
                          const isBad = analysis.directions.bad.some(
                            (d) => d.name === direction.name
                          );

                          return (
                            <div
                              key={key}
                              className='absolute w-16 h-16 flex items-center justify-center'
                              style={{
                                top: '50%',
                                left: '50%',
                                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`,
                              }}
                            >
                              <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                                  isGood
                                    ? 'bg-green-500 text-white'
                                    : isBad
                                    ? 'bg-red-500 text-white'
                                    : 'bg-yellow-500 text-black'
                                }`}
                              >
                                {direction.symbol}
                              </div>
                              <div className='absolute top-14 left-1/2 transform -translate-x-1/2 text-xs text-white font-semibold whitespace-nowrap'>
                                {direction.name}
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>

                    {/* Center */}
                    <div className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-golden rounded-full flex items-center justify-center'>
                      <span className='text-black font-bold text-lg'>
                        {analysis.kuaNumber}
                      </span>
                    </div>
                  </div>

                  <div className='mt-8 grid grid-cols-3 gap-4 text-center'>
                    <div className='bg-green-500/10 rounded-lg p-3 border border-green-500/20'>
                      <div className='w-6 h-6 bg-green-500 rounded-full mx-auto mb-2'></div>
                      <div className='text-green-400 font-semibold'>Tốt</div>
                    </div>
                    <div className='bg-yellow-500/10 rounded-lg p-3 border border-yellow-500/20'>
                      <div className='w-6 h-6 bg-yellow-500 rounded-full mx-auto mb-2'></div>
                      <div className='text-yellow-400 font-semibold'>
                        Trung Bình
                      </div>
                    </div>
                    <div className='bg-red-500/10 rounded-lg p-3 border border-red-500/20'>
                      <div className='w-6 h-6 bg-red-500 rounded-full mx-auto mb-2'></div>
                      <div className='text-red-400 font-semibold'>
                        Nên Tránh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Related Links */} 
        <RelatedServices currentPage="/boi-bai-tay" />
        
      </div>
    </div>
  );
}
