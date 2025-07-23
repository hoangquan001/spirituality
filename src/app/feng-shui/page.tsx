'use client';

import ContentHeader from '@/components/ContentHeader';
import { useState } from 'react';

interface FengShuiAnalysis {
  element: string;
  luckyDirections: string[];
  luckyColors: string[];
  luckyNumbers: number[];
  bestRooms: string[];
  avoidColors: string[];
  avoidDirections: string[];
  careerAdvice: string[];
  healthAdvice: string[];
  wealthAdvice: string[];
  relationshipAdvice: string[];
  homeLayout: string[];
}

const ELEMENTS = {
  'Kim': {
    colors: ['Trắng', 'Bạc', 'Vàng', 'Xám'],
    avoidColors: ['Đỏ', 'Cam', 'Hồng'],
    directions: ['Tây', 'Tây Bắc'],
    avoidDirections: ['Nam'],
    numbers: [4, 9, 6, 7],
    characteristics: 'Cứng cỏi, quyết đoán, có tổ chức'
  },
  'Mộc': {
    colors: ['Xanh lá', 'Xanh lam', 'Nâu'],
    avoidColors: ['Vàng', 'Trắng', 'Xám'],
    directions: ['Đông', 'Đông Nam'],
    avoidDirections: ['Tây', 'Tây Bắc'],
    numbers: [3, 8, 1, 2],
    characteristics: 'Linh hoạt, sáng tạo, phát triển'
  },
  'Thủy': {
    colors: ['Đen', 'Xanh navy', 'Xanh dương đậm'],
    avoidColors: ['Vàng', 'Nâu', 'Cam'],
    directions: ['Bắc'],
    avoidDirections: ['Tây Nam', 'Đông Bắc'],
    numbers: [1, 6, 4, 9],
    characteristics: 'Thông minh, linh hoạt, thích nghi'
  },
  'Hỏa': {
    colors: ['Đỏ', 'Cam', 'Hồng', 'Tím'],
    avoidColors: ['Đen', 'Xanh navy', 'Xanh dương đậm'],
    directions: ['Nam'],
    avoidDirections: ['Bắc'],
    numbers: [2, 7, 3, 8],
    characteristics: 'Năng động, nhiệt huyết, lãnh đạo'
  },
  'Thổ': {
    colors: ['Vàng', 'Nâu', 'Be', 'Cam đất'],
    avoidColors: ['Xanh lá', 'Xanh lam'],
    directions: ['Tây Nam', 'Đông Bắc', 'Trung tâm'],
    avoidDirections: ['Đông', 'Đông Nam'],
    numbers: [5, 0, 2, 8],
    characteristics: 'Ổn định, tin cậy, bền vững'
  }
};

export default function FengShuiPage() {
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState<'Nam' | 'Nữ' | ''>('');
  const [result, setResult] = useState<FengShuiAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Tính ngũ hành theo năm sinh
  const calculateElement = (year: number, isMale: boolean): string => {
    const elements = ['Kim', 'Thủy', 'Mộc', 'Hỏa', 'Thổ'];
    const maleSequence = [2, 8, 5, 2, 8, 5, 2, 8, 5, 2]; // Chu kỳ 10 năm cho nam
    const femaleSequence = [5, 2, 8, 5, 2, 8, 5, 2, 8, 5]; // Chu kỳ 10 năm cho nữ
    
    const lastDigit = year % 10;
    const sequence = isMale ? maleSequence : femaleSequence;
    const elementIndex = sequence[lastDigit] % 5;
    
    return elements[elementIndex];
  };

  const getFengShuiAnalysis = (element: string): FengShuiAnalysis => {
    const elementData = ELEMENTS[element as keyof typeof ELEMENTS];
    
    return {
      element,
      luckyDirections: elementData.directions,
      luckyColors: elementData.colors,
      luckyNumbers: elementData.numbers,
      avoidColors: elementData.avoidColors,
      avoidDirections: elementData.avoidDirections,
      bestRooms: getBestRooms(element),
      careerAdvice: getCareerAdvice(element),
      healthAdvice: getHealthAdvice(element),
      wealthAdvice: getWealthAdvice(element),
      relationshipAdvice: getRelationshipAdvice(element),
      homeLayout: getHomeLayoutAdvice(element)
    };
  };

  const getBestRooms = (element: string): string[] => {
    const rooms: { [key: string]: string[] } = {
      'Kim': ['Phòng ngủ hướng Tây', 'Phòng làm việc hướng Tây Bắc', 'Phòng khách hướng Tây'],
      'Mộc': ['Phòng ngủ hướng Đông', 'Phòng làm việc hướng Đông Nam', 'Khu vườn phía Đông'],
      'Thủy': ['Phòng ngủ hướng Bắc', 'Phòng tắm hướng Bắc', 'Phòng thiền hướng Bắc'],
      'Hỏa': ['Phòng ngủ hướng Nam', 'Phòng khách hướng Nam', 'Bếp hướng Nam'],
      'Thổ': ['Phòng ngủ ở trung tâm', 'Phòng ăn hướng Tây Nam', 'Phòng thờ hướng Đông Bắc']
    };
    return rooms[element] || [];
  };

  const getCareerAdvice = (element: string): string[] => {
    const advice: { [key: string]: string[] } = {
      'Kim': [
        'Phù hợp với ngành tài chính, ngân hàng, kim loại',
        'Nên làm việc trong môi trường có kỷ luật cao',
        'Tránh ngành liên quan đến lửa như luyện kim'
      ],
      'Mộc': [
        'Phù hợp với giáo dục, xuất bản, nông nghiệp',
        'Nên làm việc trong môi trường sáng tạo',
        'Tránh ngành khai thác gỗ hoặc phá rừng'
      ],
      'Thủy': [
        'Phù hợp với vận tải, du lịch, thủy sản',
        'Nên làm việc linh hoạt, thay đổi',
        'Tránh ngành đất đai, xây dựng'
      ],
      'Hỏa': [
        'Phù hợp với truyền thông, điện tử, năng lượng',
        'Nên làm việc năng động, sáng tạo',
        'Tránh ngành nước hoặc làm lạnh'
      ],
      'Thổ': [
        'Phù hợp với bất động sản, xây dựng, nông nghiệp',
        'Nên làm việc ổn định, lâu dài',
        'Tránh ngành gỗ hoặc thực vật'
      ]
    };
    return advice[element] || [];
  };

  const getHealthAdvice = (element: string): string[] => {
    const advice: { [key: string]: string[] } = {
      'Kim': [
        'Chú ý sức khỏe hệ hô hấp và da',
        'Nên tập thể dục điều độ',
        'Ăn nhiều thực phẩm màu trắng'
      ],
      'Mộc': [
        'Chú ý sức khỏe gan và mắt',
        'Nên tập yoga, thiền định',
        'Ăn nhiều rau xanh và trái cây'
      ],
      'Thủy': [
        'Chú ý sức khỏe thận và xương',
        'Nên uống đủ nước, tập bơi',
        'Ăn nhiều thực phẩm màu đen'
      ],
      'Hỏa': [
        'Chú ý sức khỏe tim và huyết áp',
        'Nên tập cardio, khiêu vũ',
        'Ăn nhiều thực phẩm màu đỏ'
      ],
      'Thổ': [
        'Chú ý sức khỏe dạ dày và lách',
        'Nên tập thể dục nhẹ nhàng',
        'Ăn nhiều thực phẩm màu vàng'
      ]
    };
    return advice[element] || [];
  };

  const getWealthAdvice = (element: string): string[] => {
    const advice: { [key: string]: string[] } = {
      'Kim': [
        'Đầu tư vào vàng, kim loại quý',
        'Đặt két sắt hướng Tây',
        'Sử dụng đồ trang trí kim loại'
      ],
      'Mộc': [
        'Đầu tư vào bất động sản có cây xanh',
        'Đặt cây xanh ở góc Đông Nam',
        'Sử dụng đồ gỗ tự nhiên'
      ],
      'Thủy': [
        'Đầu tư vào cổ phiếu thủy sản, vận tải',
        'Đặt bể cá hướng Bắc',
        'Sử dụng phong thủy nước'
      ],
      'Hỏa': [
        'Đầu tư vào công nghệ, năng lượng',
        'Thắp hương hướng Nam',
        'Sử dụng đèn và ánh sáng'
      ],
      'Thổ': [
        'Đầu tư vào đất đai, bất động sản',
        'Đặt đồ gốm sứ ở trung tâm',
        'Sử dụng màu vàng trong trang trí'
      ]
    };
    return advice[element] || [];
  };

  const getRelationshipAdvice = (element: string): string[] => {
    const advice: { [key: string]: string[] } = {
      'Kim': [
        'Tương hợp với người mệnh Thổ và Thủy',
        'Tránh người mệnh Hỏa',
        'Hẹn hò ở nơi có kim loại, trang sức'
      ],
      'Mộc': [
        'Tương hợp với người mệnh Thủy và Hỏa',
        'Tránh người mệnh Kim',
        'Hẹn hò ở công viên, nơi có cây xanh'
      ],
      'Thủy': [
        'Tương hợp với người mệnh Kim và Mộc',
        'Tránh người mệnh Thổ',
        'Hẹn hò ở biển, hồ, suối'
      ],
      'Hỏa': [
        'Tương hợp với người mệnh Mộc và Thổ',
        'Tránh người mệnh Thủy',
        'Hẹn hò ở nơi ấm áp, có ánh sáng'
      ],
      'Thổ': [
        'Tương hợp với người mệnh Hỏa và Kim',
        'Tránh người mệnh Mộc',
        'Hẹn hò ở nhà hàng, địa điểm ổn định'
      ]
    };
    return advice[element] || [];
  };

  const getHomeLayoutAdvice = (element: string): string[] => {
    const advice: { [key: string]: string[] } = {
      'Kim': [
        'Bố trí không gian gọn gàng, có tổ chức',
        'Sử dụng đồ nội thất kim loại',
        'Tránh quá nhiều màu đỏ trong nhà'
      ],
      'Mộc': [
        'Trồng nhiều cây xanh trong nhà',
        'Sử dụng đồ nội thất gỗ tự nhiên',
        'Tạo không gian thoáng đãng'
      ],
      'Thủy': [
        'Đặt bể cá hoặc thác nước mini',
        'Sử dụng gương để tăng năng lượng nước',
        'Tránh quá nhiều màu vàng'
      ],
      'Hỏa': [
        'Sử dụng ánh sáng tốt, đèn đẹp',
        'Treo tranh có màu đỏ, cam',
        'Tránh quá nhiều màu đen'
      ],
      'Thổ': [
        'Sử dụng gốm sứ, đá tự nhiên',
        'Bố trí không gian vuông vức, ổn định',
        'Tránh quá nhiều cây xanh trong nhà'
      ]
    };
    return advice[element] || [];
  };

  const handleAnalyze = async () => {
    if (!birthYear || !gender) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const year = parseInt(birthYear);
    const isMale = gender === 'Nam';
    const element = calculateElement(year, isMale);
    const analysis = getFengShuiAnalysis(element);
    
    setResult(analysis);
    setIsLoading(false);
  };

  const resetForm = () => {
    setBirthYear('');
    setGender('');
    setResult(null);
  };

  return (
    <>
      <ContentHeader
        title="Phong Thủy"
        description="Khám phá ngũ hành của bạn và cách bố trí không gian sống hợp phong thủy để tăng vận may."
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Phong Thủy', href: '/feng-shui' },
        ]}
      />
      <div className="min-h-screen py-10 px-4">
        <div className="container mx-auto max-w-6xl">

        {!result ? (
          <div className="max-w-4xl mx-auto">
            {/* Input Form */}
            <div className="bg-gradient-to-br from-gray-900/20 to-blue-900/20 rounded-3xl p-8 border border-gray-400/20 mb-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏠</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Thông Tin Của Bạn</h2>
                <p className="text-gray-300">Năm sinh và giới tính để xác định ngũ hành</p>
              </div>

              <div className="max-w-md mx-auto space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-3">Năm sinh</label>
                  <input
                    type="number"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    placeholder="Ví dụ: 1990"
                    min="1900"
                    max="2024"
                    className="w-full px-6 py-4 bg-white/10 border border-gray-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent backdrop-blur-sm text-lg"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-3">Giới tính</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setGender('Nam')}
                      className={`px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                        gender === 'Nam'
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      👨 Nam
                    </button>
                    <button
                      onClick={() => setGender('Nữ')}
                      className={`px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                        gender === 'Nữ'
                          ? 'bg-gradient-to-r from-pink-600 to-gray-600 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      👩 Nữ
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={!birthYear || !gender || isLoading}
                  className="w-full bg-gradient-to-r from-golden to-yellow-500 text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Đang Phân Tích...
                    </span>
                  ) : (
                    '🏠 Xem Phong Thủy'
                  )}
                </button>
              </div>
            </div>

            {/* Information Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-6 border border-green-300/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-green-400">🌿</span>
                  Ngũ Hành Là Gì?
                </h3>
                <div className="space-y-3 text-green-200 text-sm">
                  <p>• <strong className="text-white">Kim:</strong> Cứng cỏi, quyết đoán, có tổ chức</p>
                  <p>• <strong className="text-white">Mộc:</strong> Linh hoạt, sáng tạo, phát triển</p>
                  <p>• <strong className="text-white">Thủy:</strong> Thông minh, linh hoạt, thích nghi</p>
                  <p>• <strong className="text-white">Hỏa:</strong> Năng động, nhiệt huyết, lãnh đạo</p>
                  <p>• <strong className="text-white">Thổ:</strong> Ổn định, tin cậy, bền vững</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-golden">🏡</span>
                  Phong Thủy Giúp Gì?
                </h3>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>• Tăng vận may và thịnh vượng</p>
                  <p>• Cải thiện sức khỏe và tinh thần</p>
                  <p>• Hài hòa các mối quan hệ</p>
                  <p>• Thúc đẩy sự nghiệp và tài lộc</p>
                  <p>• Tạo không gian sống tích cực</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Element Result */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-golden/20 to-yellow-500/20 rounded-full px-8 py-4 border border-golden/30 mb-6">
                <span className="text-4xl">🌟</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">Mệnh của bạn</h2>
                  <span className="text-3xl font-bold text-golden">{result.element}</span>
                </div>
              </div>
              <p className="text-gray-300">
                {ELEMENTS[result.element as keyof typeof ELEMENTS].characteristics}
              </p>
            </div>

            {/* Lucky Elements Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-gray-900/30 to-gray-900/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  🧭 Hướng May Mắn
                </h3>
                <div className="space-y-2">
                  {result.luckyDirections.map((direction, index) => (
                    <div key={index} className="bg-gray-900/20 rounded-lg p-3 text-center">
                      <span className="text-gray-300 font-semibold">{direction}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  🎨 Màu May Mắn
                </h3>
                <div className="space-y-2">
                  {result.luckyColors.map((color, index) => (
                    <div key={index} className="bg-blue-900/20 rounded-lg p-3 text-center">
                      <span className="text-blue-200 font-semibold">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  🔢 Số May Mắn
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {result.luckyNumbers.map((number, index) => (
                    <div key={index} className="bg-green-900/20 rounded-lg p-3 text-center">
                      <span className="text-green-200 font-bold text-lg">{number}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Advice */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    💼 Sự Nghiệp
                  </h3>
                  <ul className="space-y-2">
                    {result.careerAdvice.map((advice, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="text-golden mt-1">•</span>
                        {advice}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-300/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    💚 Sức Khỏe
                  </h3>
                  <ul className="space-y-2">
                    {result.healthAdvice.map((advice, index) => (
                      <li key={index} className="flex items-start gap-3 text-green-200 text-sm">
                        <span className="text-green-400 mt-1">•</span>
                        {advice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-golden/20 to-yellow-900/30 backdrop-blur-sm rounded-2xl p-6 border border-golden/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    💰 Tài Lộc
                  </h3>
                  <ul className="space-y-2">
                    {result.wealthAdvice.map((advice, index) => (
                      <li key={index} className="flex items-start gap-3 text-yellow-200 text-sm">
                        <span className="text-golden mt-1">•</span>
                        {advice}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-pink-900/20 to-gray-900/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    💕 Tình Cảm
                  </h3>
                  <ul className="space-y-2">
                    {result.relationshipAdvice.map((advice, index) => (
                      <li key={index} className="flex items-start gap-3 text-pink-200 text-sm">
                        <span className="text-pink-400 mt-1">•</span>
                        {advice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Layout */}
            <div className="bg-gradient-to-br from-gray-900/20 to-gray-900/20 backdrop-blur-sm rounded-3xl p-8 border border-indigo-300/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-indigo-400">🏡</span>
                Bố Trí Nhà Cửa
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-indigo-200 mb-3">✅ Nên Làm</h4>
                  <ul className="space-y-2">
                    {result.homeLayout.map((layout, index) => (
                      <li key={index} className="flex items-start gap-3 text-indigo-100 text-sm">
                        <span className="text-green-400 mt-1">✓</span>
                        {layout}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-200 mb-3">❌ Tránh</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-red-100 text-sm">
                      <span className="text-red-400 mt-1">✗</span>
                      Sử dụng màu {result.avoidColors.join(', ')}
                    </li>
                    <li className="flex items-start gap-3 text-red-100 text-sm">
                      <span className="text-red-400 mt-1">✗</span>
                      Đặt giường hướng {result.avoidDirections.join(', ')}
                    </li>
                    <li className="flex items-start gap-3 text-red-100 text-sm">
                      <span className="text-red-400 mt-1">✗</span>
                      Bố trí bếp đối diện cửa chính
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center">
              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-golden to-yellow-500 text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-all duration-300 mr-4"
              >
                🔄 Xem Mệnh Khác
              </button>
              <button className="border-2 border-golden text-golden hover:bg-golden hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300">
                📤 Chia Sẻ Kết Quả
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
}

