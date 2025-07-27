'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import { useState } from 'react';

interface FengshuiItem {
  name: string;
  category: string;
  element: string;
  benefits: string[];
  placement: string;
  description: string;
  price: string;
  symbol: string;
  colors: string[];
  materials: string[];
  size: string;
  care: string;
}

interface ItemRecommendations {
  birthYear: number;
  element: string;
  items: {
    essential: FengshuiItem[];
    beneficial: FengshuiItem[];
    decorative: FengshuiItem[];
    protective: FengshuiItem[];
  };
  placement: {
    home: { area: string; items: string[] }[];
    office: { area: string; items: string[] }[];
  };
}

const fengshuiItems: Record<string, FengshuiItem[]> = {
  'Kim': [
    {
      name: 'Chuông gió kim loại',
      category: 'Âm thanh',
      element: 'Kim',
      benefits: ['Hóa giải sát khí', 'Tăng cường vận may', 'Cải thiện không khí'],
      placement: 'Cửa sổ, ban công, hướng Tây hoặc Tây Bắc',
      description: 'Chuông gió bằng kim loại tạo âm thanh trong trẻo, giúp hóa giải năng lượng xấu',
      price: '200.000 - 500.000 VNĐ',
      symbol: '🎐',
      colors: ['Bạc', 'Vàng kim', 'Trắng'],
      materials: ['Nhôm', 'Đồng', 'Inox'],
      size: '30-60cm',
      care: 'Lau chùi định kỳ, tránh gỉ sét'
    },
    {
      name: 'Tượng Phật Di Lặc',
      category: 'Tâm linh',
      element: 'Kim',
      benefits: ['Mang lại may mắn', 'Tăng cường tài lộc', 'Bình an gia đình'],
      placement: 'Phòng khách, bàn thờ, hướng Đông',
      description: 'Tượng Phật Di Lặc bằng đồng hoặc thạch cao, biểu tượng của hạnh phúc và thịnh vượng',
      price: '150.000 - 1.000.000 VNĐ',
      symbol: '🙏',
      colors: ['Vàng', 'Đồng', 'Trắng'],
      materials: ['Đồng', 'Thạch cao', 'Gỗ'],
      size: '10-30cm',
      care: 'Lau chùi nhẹ nhàng, thắp hương thường xuyên'
    },
    {
      name: 'Đồng tiền cổ',
      category: 'Tài lộc',
      element: 'Kim',
      benefits: ['Thu hút tài lộc', 'Bảo vệ tài sản', 'Tăng cường vận may'],
      placement: 'Ví tiền, két sắt, góc tài lộc',
      description: 'Đồng tiền cổ Trung Quốc với lỗ vuông, biểu tượng của sự thịnh vượng',
      price: '50.000 - 200.000 VNĐ',
      symbol: '🪙',
      colors: ['Vàng đồng', 'Đồng cũ'],
      materials: ['Đồng'],
      size: '2-5cm',
      care: 'Giữ sạch sẽ, không để ẩm ướt'
    }
  ],
  'Mộc': [
    {
      name: 'Cây xanh trong nhà',
      category: 'Thực vật',
      element: 'Mộc',
      benefits: ['Thanh lọc không khí', 'Tăng cường sức khỏe', 'Mang lại sinh khí'],
      placement: 'Phòng khách, phòng làm việc, hướng Đông',
      description: 'Cây xanh như kim ngân, trầu bà, cây đề giúp tăng cường năng lượng tích cực',
      price: '100.000 - 500.000 VNĐ',
      symbol: '🌱',
      colors: ['Xanh lá'],
      materials: ['Thực vật tự nhiên'],
      size: '20-100cm',
      care: 'Tưới nước đều đặn, đặt nơi có ánh sáng'
    },
    {
      name: 'Tượng rồng gỗ',
      category: 'Linh vật',
      element: 'Mộc',
      benefits: ['Tăng cường quyền lực', 'Bảo vệ gia đình', 'Mang lại thành công'],
      placement: 'Phòng làm việc, phòng khách, hướng Đông',
      description: 'Tượng rồng bằng gỗ quý, biểu tượng của quyền lực và thành công',
      price: '300.000 - 2.000.000 VNĐ',
      symbol: '🐉',
      colors: ['Nâu gỗ', 'Vàng'],
      materials: ['Gỗ hương', 'Gỗ sưa', 'Gỗ mun'],
      size: '15-50cm',
      care: 'Lau chùi bằng khăn mềm, tránh ẩm ướt'
    },
    {
      name: 'Tranh phong cảnh',
      category: 'Nghệ thuật',
      element: 'Mộc',
      benefits: ['Tạo cảm giác thư giãn', 'Tăng cường sáng tạo', 'Cải thiện tâm trạng'],
      placement: 'Phòng khách, phòng ngủ, phòng làm việc',
      description: 'Tranh phong cảnh thiên nhiên với màu xanh chủ đạo',
      price: '200.000 - 1.500.000 VNĐ',
      symbol: '🖼️',
      colors: ['Xanh lá', 'Nâu', 'Vàng'],
      materials: ['Canvas', 'Giấy', 'Lụa'],
      size: '30x40cm - 60x80cm',
      care: 'Tránh ánh nắng trực tiếp, lau chùi nhẹ nhàng'
    }
  ],
  'Thủy': [
    {
      name: 'Bể cá phong thủy',
      category: 'Thủy sinh',
      element: 'Thủy',
      benefits: ['Thu hút tài lộc', 'Tăng cường vận may', 'Tạo sinh khí'],
      placement: 'Phòng khách, góc tài lộc, hướng Bắc',
      description: 'Bể cá với cá vàng hoặc cá rồng, biểu tượng của thịnh vượng',
      price: '500.000 - 5.000.000 VNĐ',
      symbol: '🐠',
      colors: ['Trong suốt', 'Xanh'],
      materials: ['Thủy tinh', 'Acrylic'],
      size: '30-100cm',
      care: 'Thay nước định kỳ, cho cá ăn đều đặn'
    },
    {
      name: 'Đài phun nước',
      category: 'Nước',
      element: 'Thủy',
      benefits: ['Tăng cường tài lộc', 'Cải thiện không khí', 'Tạo âm thanh thư giãn'],
      placement: 'Sân vườn, phòng khách, hướng Bắc',
      description: 'Đài phun nước mini tạo dòng chảy liên tục, thu hút năng lượng tích cực',
      price: '300.000 - 2.000.000 VNĐ',
      symbol: '⛲',
      colors: ['Đen', 'Xám', 'Nâu'],
      materials: ['Đá', 'Nhựa', 'Gốm'],
      size: '20-60cm',
      care: 'Thay nước thường xuyên, vệ sinh máy bơm'
    },
    {
      name: 'Gương phong thủy',
      category: 'Phản chiếu',
      element: 'Thủy',
      benefits: ['Mở rộng không gian', 'Phản chiếu năng lượng tốt', 'Hóa giải sát khí'],
      placement: 'Phòng khách, hành lang, tránh đối diện giường',
      description: 'Gương tròn hoặc bát giác với khung trang trí',
      price: '200.000 - 1.000.000 VNĐ',
      symbol: '🪞',
      colors: ['Bạc', 'Vàng', 'Đen'],
      materials: ['Thủy tinh', 'Kim loại'],
      size: '30-80cm',
      care: 'Lau chùi sạch sẽ, tránh vỡ'
    }
  ],
  'Hỏa': [
    {
      name: 'Đèn muối Himalaya',
      category: 'Ánh sáng',
      element: 'Hỏa',
      benefits: ['Thanh lọc không khí', 'Tạo ánh sáng ấm áp', 'Cải thiện giấc ngủ'],
      placement: 'Phòng ngủ, phòng làm việc, hướng Nam',
      description: 'Đèn muối tự nhiên từ Himalaya, phát ra ánh sáng cam ấm áp',
      price: '300.000 - 800.000 VNĐ',
      symbol: '🕯️',
      colors: ['Cam', 'Hồng', 'Đỏ'],
      materials: ['Muối tự nhiên'],
      size: '15-30cm',
      care: 'Để nơi khô ráo, bật đèn thường xuyên'
    },
    {
      name: 'Tượng ngựa đỏ',
      category: 'Linh vật',
      element: 'Hỏa',
      benefits: ['Tăng cường danh tiếng', 'Mang lại thành công', 'Tăng cường năng lượng'],
      placement: 'Phòng làm việc, bàn làm việc, hướng Nam',
      description: 'Tượng ngựa màu đỏ, biểu tượng của sự nhanh nhẹn và thành công',
      price: '200.000 - 1.500.000 VNĐ',
      symbol: '🐎',
      colors: ['Đỏ', 'Nâu đỏ'],
      materials: ['Gốm', 'Đá', 'Nhựa'],
      size: '10-40cm',
      care: 'Lau chùi định kỳ, tránh va đập'
    },
    {
      name: 'Nến thơm',
      category: 'Hương liệu',
      element: 'Hỏa',
      benefits: ['Tạo không gian thư giãn', 'Cải thiện tâm trạng', 'Tăng cường năng lượng'],
      placement: 'Phòng ngủ, phòng tắm, không gian thư giãn',
      description: 'Nến thơm với hương liệu tự nhiên, tạo ánh sáng và mùi hương dễ chịu',
      price: '100.000 - 400.000 VNĐ',
      symbol: '🕯️',
      colors: ['Đỏ', 'Cam', 'Hồng'],
      materials: ['Sáp tự nhiên'],
      size: '5-15cm',
      care: 'Cắt tim nến trước khi thắp, tránh gió'
    }
  ],
  'Thổ': [
    {
      name: 'Tượng Phật bằng đá',
      category: 'Tâm linh',
      element: 'Thổ',
      benefits: ['Mang lại bình an', 'Tăng cường tâm linh', 'Bảo vệ gia đình'],
      placement: 'Bàn thờ, phòng khách, sân vườn',
      description: 'Tượng Phật bằng đá tự nhiên, tạo cảm giác vững chắc và bình an',
      price: '500.000 - 3.000.000 VNĐ',
      symbol: '🗿',
      colors: ['Xám', 'Nâu', 'Vàng đất'],
      materials: ['Đá tự nhiên', 'Đá nhân tạo'],
      size: '20-60cm',
      care: 'Lau chùi bằng nước, tránh hóa chất'
    },
    {
      name: 'Chậu gốm sứ',
      category: 'Trang trí',
      element: 'Thổ',
      benefits: ['Tăng cường ổn định', 'Cải thiện phong thủy', 'Tạo điểm nhấn'],
      placement: 'Phòng khách, sân vườn, góc nhà',
      description: 'Chậu gốm sứ với họa tiết truyền thống, có thể trồng cây hoặc trang trí',
      price: '150.000 - 800.000 VNĐ',
      symbol: '🏺',
      colors: ['Nâu', 'Vàng đất', 'Đỏ gạch'],
      materials: ['Gốm', 'Sứ', 'Đất nung'],
      size: '15-50cm',
      care: 'Tránh va đập, vệ sinh nhẹ nhàng'
    },
    {
      name: 'Cây kim tiền',
      category: 'Thực vật',
      element: 'Thổ',
      benefits: ['Thu hút tài lộc', 'Tăng cường may mắn', 'Dễ chăm sóc'],
      placement: 'Phòng khách, phòng làm việc, góc tài lộc',
      description: 'Cây kim tiền với lá tròn như đồng xu, biểu tượng của thịnh vượng',
      price: '200.000 - 600.000 VNĐ',
      symbol: '🌿',
      colors: ['Xanh lá'],
      materials: ['Thực vật tự nhiên'],
      size: '30-80cm',
      care: 'Tưới nước ít, đặt nơi có ánh sáng gián tiếp'
    }
  ]
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

export default function FengshuiItemsPage() {
  const [birthYear, setBirthYear] = useState<string>('');
  const [recommendations, setRecommendations] = useState<ItemRecommendations | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<'essential' | 'beneficial' | 'decorative' | 'protective'>('essential');
  const [selectedItem, setSelectedItem] = useState<FengshuiItem | null>(null);

  const analyzeItems = () => {
    if (!birthYear || parseInt(birthYear) < 1900 || parseInt(birthYear) > 2030) {
      alert('Vui lòng nhập năm sinh hợp lệ (1900-2030)');
      return;
    }

    setIsAnalyzing(true);
    
    setTimeout(() => {
      const year = parseInt(birthYear);
      const element = getElementFromYear(year);
      const elementItems = fengshuiItems[element] || [];
      
      // Get supporting elements
      const supportingElements: Record<string, string[]> = {
        'Kim': ['Thổ', 'Kim'],
        'Mộc': ['Thủy', 'Mộc'],
        'Thủy': ['Kim', 'Thủy'],
        'Hỏa': ['Mộc', 'Hỏa'],
        'Thổ': ['Hỏa', 'Thổ']
      };
      
      const supportingItems = supportingElements[element]?.flatMap(el => fengshuiItems[el] || []) || [];
      
      const newRecommendations: ItemRecommendations = {
        birthYear: year,
        element,
        items: {
          essential: elementItems.slice(0, 3),
          beneficial: supportingItems.slice(0, 6),
          decorative: Object.values(fengshuiItems).flat().filter(item => item.category === 'Nghệ thuật' || item.category === 'Trang trí').slice(0, 4),
          protective: Object.values(fengshuiItems).flat().filter(item => item.benefits.some(b => b.includes('Bảo vệ') || b.includes('Hóa giải'))).slice(0, 4)
        },
        placement: {
          home: [
            { area: 'Phòng khách', items: ['Tượng Phật Di Lặc', 'Bể cá phong thủy', 'Cây xanh trong nhà'] },
            { area: 'Phòng ngủ', items: ['Đèn muối Himalaya', 'Tranh phong cảnh', 'Nến thơm'] },
            { area: 'Phòng bếp', items: ['Chậu gốm sứ', 'Cây kim tiền', 'Đồng tiền cổ'] },
            { area: 'Sân vườn', items: ['Đài phun nước', 'Tượng Phật bằng đá', 'Chuông gió kim loại'] }
          ],
          office: [
            { area: 'Bàn làm việc', items: ['Tượng rồng gỗ', 'Đồng tiền cổ', 'Cây kim tiền'] },
            { area: 'Góc tài lộc', items: ['Bể cá phong thủy', 'Tượng ngựa đỏ', 'Chậu gốm sứ'] },
            { area: 'Cửa ra vào', items: ['Gương phong thủy', 'Chuông gió kim loại', 'Tượng Phật Di Lặc'] }
          ]
        }
      };

      setRecommendations(newRecommendations);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case 'essential': return '⭐';
      case 'beneficial': return '👍';
      case 'decorative': return '🎨';
      case 'protective': return '🛡️';
      default: return '📦';
    }
  };

  const getCategoryName = (category: string): string => {
    switch (category) {
      case 'essential': return 'Thiết Yếu';
      case 'beneficial': return 'Có Lợi';
      case 'decorative': return 'Trang Trí';
      case 'protective': return 'Bảo Vệ';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <ContentHeader
        title="Vật Phẩm Phong Thủy"
        description="Khám phá các vật phẩm phong thủy mang lại may mắn, tài lộc và bình an cho gia đình"
        breadcrumb={[
          { label: "Trang chủ", href: "/" },
          { label: "Phong Thủy", href: "/feng-shui" },
          { label: "Vật Phẩm Phong Thủy", href: "/feng-shui/items" },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Input Form */}
        <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Nhập Năm Sinh Để Nhận Gợi Ý
          </h2>

          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <label className="block text-gray-300 mb-2">
                Năm sinh (dương lịch)
              </label>
              <input
                type="number"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                placeholder="Ví dụ: 1990"
                min="1900"
                max="2030"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-golden focus:outline-none"
              />
              <p className="text-gray-400 text-sm mt-2">
                💡 Nhập năm sinh để xác định mệnh và gợi ý vật phẩm phù hợp
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={analyzeItems}
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
                    🏺 Xem Vật Phẩm Phù Hợp
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {recommendations && (
          <div className="space-y-8">
            {/* Element Overview */}
            <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Mệnh {recommendations.element}
                </h2>
                <div className="text-golden font-semibold mb-6">
                  Năm sinh: {recommendations.birthYear}
                </div>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Dựa trên mệnh {recommendations.element}, chúng tôi gợi ý những
                  vật phẩm phong thủy phù hợp nhất để tăng cường vận may và tài
                  lộc.
                </p>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/50 rounded-md sm:rounded-full p-2 sm:p-1">
                {(
                  [
                    "essential",
                    "beneficial",
                    "decorative",
                    "protective",
                  ] as const
                ).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeTab === category
                        ? "bg-golden text-black"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {getCategoryIcon(category)} {getCategoryName(category)}
                  </button>
                ))}
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.items[activeTab].map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedItem(item)}
                  className="cosmic-card rounded-3xl p-6 border border-gray-700/20 cursor-pointer hover:border-golden/50 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{item.symbol}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <div className="text-golden font-semibold mb-2">
                      {item.category}
                    </div>
                    <div className="text-gray-400 text-sm mb-3">
                      {item.price}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-purple-400 font-semibold mb-1">
                        Lợi ích:
                      </div>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {item.benefits.slice(0, 2).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-1">
                            <span className="text-golden mt-1">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-blue-400 font-semibold mb-1">
                        Vị trí:
                      </div>
                      <div className="text-gray-300 text-sm line-clamp-2">
                        {item.placement}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {item.colors.slice(0, 3).map((color, i) => (
                        <span
                          key={i}
                          className="bg-golden/20 text-golden px-2 py-1 rounded text-xs"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Placement Guide */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="cosmic-card rounded-3xl p-6 border border-gray-700/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🏠</span> Bố Trí Trong Nhà
                </h3>
                <div className="space-y-4">
                  {recommendations.placement.home.map((area, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-golden mb-2">
                        {area.area}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.items.map((item, i) => (
                          <span
                            key={i}
                            className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cosmic-card rounded-3xl p-6 border border-gray-700/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>💼</span> Bố Trí Văn Phòng
                </h3>
                <div className="space-y-4">
                  {recommendations.placement.office.map((area, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                      <h4 className="font-semibold text-golden mb-2">
                        {area.area}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.items.map((item, i) => (
                          <span
                            key={i}
                            className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Item Detail Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{selectedItem.symbol}</div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedItem.name}
                </h2>
                <div className="text-golden font-semibold mb-4">
                  {selectedItem.category} • {selectedItem.element}
                </div>
                <div className="text-gray-300 leading-relaxed">
                  {selectedItem.description}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-purple-400 mb-2">
                      Lợi ích
                    </h3>
                    <ul className="space-y-1">
                      {selectedItem.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-golden mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-blue-400 mb-2">
                      Vị trí đặt
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {selectedItem.placement}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-green-400 mb-2">
                      Giá tham khảo
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {selectedItem.price}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">
                      Màu sắc
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.colors.map((color, i) => (
                        <span
                          key={i}
                          className="bg-golden/20 text-golden px-3 py-1 rounded-full text-sm"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-pink-400 mb-2">
                      Chất liệu
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.materials.map((material, i) => (
                        <span
                          key={i}
                          className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-cyan-400 mb-2">
                      Kích thước
                    </h3>
                    <p className="text-gray-300 text-sm">{selectedItem.size}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-orange-400 mb-2">
                      Cách chăm sóc
                    </h3>
                    <p className="text-gray-300 text-sm">{selectedItem.care}</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Related Links */}
        <RelatedServices currentPage="/boi-bai-tay" />
      </div>
    </div>
  );
}
