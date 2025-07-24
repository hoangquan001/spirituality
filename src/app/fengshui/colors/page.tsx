'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';
import { useState } from 'react';

interface ElementInfo {
  name: string;
  colors: {
    primary: string[];
    secondary: string[];
    avoid: string[];
  };
  characteristics: string;
  personality: string;
  career: string[];
  health: string;
  relationships: string;
  luckyNumbers: number[];
  direction: string;
  season: string;
}

interface ColorAnalysis {
  birthYear: number;
  element: string;
  elementInfo: ElementInfo;
  colorRecommendations: {
    clothing: string[];
    home: string[];
    office: string[];
    accessories: string[];
  };
  colorMeanings: { color: string; meaning: string; usage: string }[];
  avoidColors: string[];
  monthlyColors: { month: string; color: string; reason: string }[];
}

const elements: Record<string, ElementInfo> = {
  Kim: {
    name: 'Kim (Kim Loại)',
    colors: {
      primary: ['Trắng', 'Bạc', 'Vàng kim', 'Xám'],
      secondary: ['Vàng', 'Nâu đất'],
      avoid: ['Đỏ', 'Hồng', 'Cam'],
    },
    characteristics: 'Cứng cỏi, quyết đoán, có tổ chức, thích sự hoàn hảo',
    personality:
      'Người mệnh Kim thường có tính cách mạnh mẽ, quyết đoán và có khả năng lãnh đạo tốt',
    career: ['Tài chính', 'Ngân hàng', 'Kỹ thuật', 'Quản lý', 'Luật pháp'],
    health: 'Cần chú ý đến hệ hô hấp và da',
    relationships: 'Hợp với mệnh Thổ và Thủy, tương khắc với mệnh Hỏa',
    luckyNumbers: [4, 9],
    direction: 'Tây, Tây Bắc',
    season: 'Thu',
  },
  Mộc: {
    name: 'Mộc (Gỗ)',
    colors: {
      primary: ['Xanh lá', 'Xanh lục', 'Xanh ngọc'],
      secondary: ['Đen', 'Xanh đen'],
      avoid: ['Trắng', 'Bạc', 'Vàng kim'],
    },
    characteristics:
      'Linh hoạt, sáng tạo, có khả năng phát triển, yêu thiên nhiên',
    personality:
      'Người mệnh Mộc thường nhân hậu, có lòng từ bi và khả năng thích nghi cao',
    career: ['Giáo dục', 'Y tế', 'Nghệ thuật', 'Môi trường', 'Nông nghiệp'],
    health: 'Cần chú ý đến gan và mắt',
    relationships: 'Hợp với mệnh Thủy và Hỏa, tương khắc với mệnh Kim',
    luckyNumbers: [3, 8],
    direction: 'Đông, Đông Nam',
    season: 'Xuân',
  },
  Thủy: {
    name: 'Thủy (Nước)',
    colors: {
      primary: ['Đen', 'Xanh đen', 'Xanh navy'],
      secondary: ['Trắng', 'Bạc', 'Xám'],
      avoid: ['Vàng', 'Nâu', 'Cam'],
    },
    characteristics: 'Linh hoạt, thông minh, có trực giác tốt, thích thay đổi',
    personality:
      'Người mệnh Thủy thường thông minh, linh hoạt và có khả năng thích nghi tốt',
    career: [
      'Truyền thông',
      'Du lịch',
      'Thương mại',
      'Nghiên cứu',
      'Công nghệ',
    ],
    health: 'Cần chú ý đến thận và hệ tuần hoàn',
    relationships: 'Hợp với mệnh Kim và Mộc, tương khắc với mệnh Thổ',
    luckyNumbers: [1, 6],
    direction: 'Bắc',
    season: 'Đông',
  },
  Hỏa: {
    name: 'Hỏa (Lửa)',
    colors: {
      primary: ['Đỏ', 'Hồng', 'Cam', 'Tím'],
      secondary: ['Xanh lá', 'Xanh lục'],
      avoid: ['Đen', 'Xanh đen', 'Xanh navy'],
    },
    characteristics:
      'Nhiệt huyết, năng động, có khả năng lãnh đạo, thích thể hiện',
    personality:
      'Người mệnh Hỏa thường năng động, nhiệt tình và có khả năng truyền cảm hứng',
    career: ['Kinh doanh', 'Bán hàng', 'Giải trí', 'Thể thao', 'Chính trị'],
    health: 'Cần chú ý đến tim mạch và huyết áp',
    relationships: 'Hợp với mệnh Mộc và Thổ, tương khắc với mệnh Thủy',
    luckyNumbers: [2, 7],
    direction: 'Nam',
    season: 'Hè',
  },
  Thổ: {
    name: 'Thổ (Đất)',
    colors: {
      primary: ['Vàng', 'Nâu', 'Be', 'Cam đất'],
      secondary: ['Đỏ', 'Hồng', 'Tím'],
      avoid: ['Xanh lá', 'Xanh lục'],
    },
    characteristics: 'Ổn định, đáng tin cậy, thực tế, có khả năng xây dựng',
    personality:
      'Người mệnh Thổ thường trung thực, đáng tin cậy và có khả năng tổ chức tốt',
    career: ['Bất động sản', 'Xây dựng', 'Nông nghiệp', 'Kế toán', 'Quản lý'],
    health: 'Cần chú ý đến dạ dày và lách',
    relationships: 'Hợp với mệnh Hỏa và Kim, tương khắc với mệnh Mộc',
    luckyNumbers: [5, 10],
    direction: 'Trung tâm, Tây Nam, Đông Bắc',
    season: 'Cuối mùa',
  },
};

const getElementFromYear = (year: number): string => {
  const lastDigit = year % 10;
  switch (lastDigit) {
    case 0:
    case 1:
      return 'Kim';
    case 2:
    case 3:
      return 'Thủy';
    case 4:
    case 5:
      return 'Mộc';
    case 6:
    case 7:
      return 'Hỏa';
    case 8:
    case 9:
      return 'Thổ';
    default:
      return 'Kim';
  }
};

const colorMeaningsData: Record<string, { meaning: string; usage: string }> = {
  Đỏ: {
    meaning: 'Năng lượng, may mắn, thành công',
    usage: 'Phòng khách, phòng làm việc, trang phục quan trọng',
  },
  'Xanh lá': {
    meaning: 'Phát triển, sức khỏe, tươi mới',
    usage: 'Phòng ngủ, khu vườn, không gian thư giãn',
  },
  Vàng: {
    meaning: 'Giàu có, quyền lực, trí tuệ',
    usage: 'Phòng làm việc, khu vực tài chính, trang sức',
  },
  Đen: {
    meaning: 'Bí ẩn, quyền lực, thanh lịch',
    usage: 'Trang phục công sở, phụ kiện, không gian nghiêm túc',
  },
  Trắng: {
    meaning: 'Tinh khiết, bình an, khởi đầu mới',
    usage: 'Phòng ngủ, phòng tắm, trang phục cưới',
  },
  'Xanh dương': {
    meaning: 'Bình yên, trí tuệ, tin cậy',
    usage: 'Phòng học, phòng làm việc, không gian thư giãn',
  },
  Tím: {
    meaning: 'Quý phái, tâm linh, sáng tạo',
    usage: 'Phòng thiền, không gian nghệ thuật, phụ kiện',
  },
  Hồng: {
    meaning: 'Tình yêu, dịu dàng, hạnh phúc',
    usage: 'Phòng ngủ, không gian lãng mạn, trang phục dạ tiệc',
  },
};

export default function FengshuiColorsPage() {
  const [birthYear, setBirthYear] = useState<string>('');
  const [analysis, setAnalysis] = useState<ColorAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'recommendations' | 'meanings' | 'calendar'
  >('overview');

  const analyzeColors = () => {
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
      const element = getElementFromYear(year);
      const elementInfo = elements[element];

      const colorRecommendations = {
        clothing: [
          ...elementInfo.colors.primary,
          ...elementInfo.colors.secondary.slice(0, 2),
        ],
        home: elementInfo.colors.primary,
        office: [
          elementInfo.colors.primary[0],
          elementInfo.colors.secondary[0],
        ],
        accessories: elementInfo.colors.primary.slice(0, 2),
      };

      const colorMeanings = elementInfo.colors.primary.map((color) => ({
        color,
        meaning: colorMeaningsData[color]?.meaning || 'Màu may mắn',
        usage:
          colorMeaningsData[color]?.usage ||
          'Sử dụng trong cuộc sống hàng ngày',
      }));

      const monthlyColors = [
        {
          month: 'Tháng 1-3',
          color: elementInfo.colors.primary[0],
          reason: 'Khởi đầu năm mới với năng lượng tích cực',
        },
        {
          month: 'Tháng 4-6',
          color: elementInfo.colors.primary[1] || elementInfo.colors.primary[0],
          reason: 'Phát triển và tăng trưởng',
        },
        {
          month: 'Tháng 7-9',
          color: elementInfo.colors.secondary[0],
          reason: 'Cân bằng và ổn định giữa năm',
        },
        {
          month: 'Tháng 10-12',
          color: elementInfo.colors.primary[0],
          reason: 'Kết thúc năm với may mắn',
        },
      ];

      const newAnalysis: ColorAnalysis = {
        birthYear: year,
        element,
        elementInfo,
        colorRecommendations,
        colorMeanings,
        avoidColors: elementInfo.colors.avoid,
        monthlyColors,
      };

      setAnalysis(newAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getColorStyle = (color: string): string => {
    const colorMap: Record<string, string> = {
      Đỏ: 'bg-red-500',
      'Xanh lá': 'bg-green-500',
      'Xanh lục': 'bg-green-600',
      'Xanh ngọc': 'bg-emerald-500',
      Vàng: 'bg-yellow-500',
      Đen: 'bg-gray-900',
      Trắng: 'bg-white border border-gray-300',
      Bạc: 'bg-gray-300',
      Xám: 'bg-gray-500',
      'Xanh đen': 'bg-slate-800',
      'Xanh navy': 'bg-blue-900',
      Hồng: 'bg-pink-500',
      Cam: 'bg-orange-500',
      Tím: 'bg-purple-500',
      Nâu: 'bg-amber-700',
      Be: 'bg-amber-100',
      'Vàng kim': 'bg-yellow-400',
      'Cam đất': 'bg-orange-700',
      'Nâu đất': 'bg-amber-800',
    };
    return colorMap[color] || 'bg-gray-400';
  };

  return (
    <div className='min-h-screen'>
      {/* Header */}
      <ContentHeader
        title='Màu Sắc Hợp Mệnh'
        description='Khám phá màu sắc phù hợp với mệnh ngũ hành và năm sinh của bạn'
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Feng Shui', href: '/fengshui' },
          { label: 'Màu Sắc Hợp Mệnh', href: '/fengshui/colors' },
        ]}
      />

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-4 py-12'>
        {/* Input Form */}
        <div className='cosmic-card rounded-3xl p-8 border border-gray-700/20 mb-8'>
          <h2 className='text-2xl font-bold text-white mb-6 text-center'>
            Nhập Năm Sinh Của Bạn
          </h2>

          <div className='max-w-md mx-auto'>
            <div className='mb-6'>
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
              <p className='text-gray-400 text-sm mt-2'>
                💡 Nhập năm sinh để xác định mệnh ngũ hành của bạn
              </p>
            </div>

            <div className='text-center'>
              <button
                onClick={analyzeColors}
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
                    🎨 Xem Màu Sắc Hợp Mệnh
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {analysis && (
          <div className='space-y-8'>
            {/* Element Overview */}
            <div className='cosmic-card rounded-3xl p-8 border border-gray-700/20'>
              <div className='text-center mb-8'>
                <h2 className='text-3xl font-bold text-white mb-4'>
                  Mệnh {analysis.elementInfo.name}
                </h2>
                <div className='text-golden font-semibold mb-4'>
                  Năm sinh: {analysis.birthYear}
                </div>
                <p className='text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6'>
                  {analysis.elementInfo.characteristics}
                </p>

                <div className='grid md:grid-cols-3 gap-4 text-sm'>
                  <div className='bg-green-500/10 rounded-lg p-3 border border-green-500/20'>
                    <div className='text-green-400 font-semibold mb-1'>
                      Hướng may mắn
                    </div>
                    <div className='text-gray-300'>
                      {analysis.elementInfo.direction}
                    </div>
                  </div>
                  <div className='bg-blue-500/10 rounded-lg p-3 border border-blue-500/20'>
                    <div className='text-blue-400 font-semibold mb-1'>
                      Mùa thuận lợi
                    </div>
                    <div className='text-gray-300'>
                      {analysis.elementInfo.season}
                    </div>
                  </div>
                  <div className='bg-purple-500/10 rounded-lg p-3 border border-purple-500/20'>
                    <div className='text-purple-400 font-semibold mb-1'>
                      Số may mắn
                    </div>
                    <div className='text-gray-300'>
                      {analysis.elementInfo.luckyNumbers.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className='flex justify-center mb-8'>
              <div className='bg-gray-800/50 rounded-full p-1'>
                {[
                  { id: 'overview', label: '📊 Tổng Quan' },
                  { id: 'recommendations', label: '🎨 Gợi Ý Màu' },
                  { id: 'meanings', label: '💡 Ý Nghĩa' },
                  { id: 'calendar', label: '📅 Theo Tháng' },
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
              <div className='grid md:grid-cols-2 gap-6'>
                {/* Primary Colors */}
                <div className='bg-gradient-to-br from-green-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-green-700/20'>
                  <h3 className='text-xl font-bold text-green-400 mb-4 flex items-center gap-2'>
                    <span>✨</span> Màu Chủ Đạo
                  </h3>
                  <div className='grid grid-cols-2 gap-3'>
                    {analysis.elementInfo.colors.primary.map((color, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg'
                      >
                        <div
                          className={`w-8 h-8 rounded-full ${getColorStyle(
                            color
                          )}`}
                        ></div>
                        <span className='text-gray-300 font-medium'>
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Colors */}
                <div className='bg-gradient-to-br from-blue-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-blue-700/20'>
                  <h3 className='text-xl font-bold text-blue-400 mb-4 flex items-center gap-2'>
                    <span>🌟</span> Màu Hỗ Trợ
                  </h3>
                  <div className='grid grid-cols-2 gap-3'>
                    {analysis.elementInfo.colors.secondary.map(
                      (color, index) => (
                        <div
                          key={index}
                          className='flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg'
                        >
                          <div
                            className={`w-8 h-8 rounded-full ${getColorStyle(
                              color
                            )}`}
                          ></div>
                          <span className='text-gray-300 font-medium'>
                            {color}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Avoid Colors */}
                <div className='bg-gradient-to-br from-red-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-red-700/20'>
                  <h3 className='text-xl font-bold text-red-400 mb-4 flex items-center gap-2'>
                    <span>⚠️</span> Màu Nên Tránh
                  </h3>
                  <div className='grid grid-cols-2 gap-3'>
                    {analysis.avoidColors.map((color, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg'
                      >
                        <div
                          className={`w-8 h-8 rounded-full ${getColorStyle(
                            color
                          )}`}
                        ></div>
                        <span className='text-gray-300 font-medium'>
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Element Info */}
                <div className='bg-gradient-to-br from-golden/10 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-golden/20'>
                  <h3 className='text-xl font-bold text-golden mb-4 flex items-center gap-2'>
                    <span>🔮</span> Đặc Điểm Mệnh
                  </h3>
                  <div className='space-y-3 text-sm'>
                    <div>
                      <span className='text-golden font-semibold'>
                        Tính cách:{' '}
                      </span>
                      <span className='text-gray-300'>
                        {analysis.elementInfo.personality}
                      </span>
                    </div>
                    <div>
                      <span className='text-golden font-semibold'>
                        Sức khỏe:{' '}
                      </span>
                      <span className='text-gray-300'>
                        {analysis.elementInfo.health}
                      </span>
                    </div>
                    <div>
                      <span className='text-golden font-semibold'>
                        Mối quan hệ:{' '}
                      </span>
                      <span className='text-gray-300'>
                        {analysis.elementInfo.relationships}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'recommendations' && (
              <div className='grid md:grid-cols-2 gap-6'>
                {Object.entries(analysis.colorRecommendations).map(
                  ([category, colors]) => (
                    <div
                      key={category}
                      className='cosmic-card rounded-3xl p-6 border border-gray-700/20'
                    >
                      <h3 className='text-xl font-bold text-white mb-4 flex items-center gap-2'>
                        <span>
                          {category === 'clothing' && '👕'}
                          {category === 'home' && '🏠'}
                          {category === 'office' && '💼'}
                          {category === 'accessories' && '💎'}
                        </span>
                        {category === 'clothing' && 'Trang Phục'}
                        {category === 'home' && 'Nhà Ở'}
                        {category === 'office' && 'Văn Phòng'}
                        {category === 'accessories' && 'Phụ Kiện'}
                      </h3>
                      <div className='grid grid-cols-2 gap-3'>
                        {colors.map((color, index) => (
                          <div
                            key={index}
                            className='flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg'
                          >
                            <div
                              className={`w-8 h-8 rounded-full ${getColorStyle(
                                color
                              )}`}
                            ></div>
                            <span className='text-gray-300 font-medium'>
                              {color}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {activeTab === 'meanings' && (
              <div className='space-y-6'>
                {analysis.colorMeanings.map((item, index) => (
                  <div
                    key={index}
                    className='cosmic-card rounded-3xl p-6 border border-gray-700/20'
                  >
                    <div className='flex items-start gap-4'>
                      <div
                        className={`w-16 h-16 rounded-full ${getColorStyle(
                          item.color
                        )} flex-shrink-0`}
                      ></div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-white mb-2'>
                          {item.color}
                        </h3>
                        <p className='text-gray-300 mb-3'>{item.meaning}</p>
                        <div className='bg-golden/10 rounded-lg p-3 border border-golden/20'>
                          <div className='text-golden font-semibold mb-1'>
                            Cách sử dụng:
                          </div>
                          <div className='text-gray-300 text-sm'>
                            {item.usage}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className='grid md:grid-cols-2 gap-6'>
                {analysis.monthlyColors.map((item, index) => (
                  <div
                    key={index}
                    className='cosmic-card rounded-3xl p-6 border border-gray-700/20'
                  >
                    <div className='flex items-center gap-4 mb-4'>
                      <div
                        className={`w-12 h-12 rounded-full ${getColorStyle(
                          item.color
                        )}`}
                      ></div>
                      <div>
                        <h3 className='text-lg font-bold text-white'>
                          {item.month}
                        </h3>
                        <div className='text-golden font-semibold'>
                          {item.color}
                        </div>
                      </div>
                    </div>
                    <p className='text-gray-300 text-sm'>{item.reason}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Related Links */}
        <RelatedServices currentPage="/cards" />

      </div>
    </div>
  );
}
