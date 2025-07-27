'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import { useState } from 'react';

interface RoomAnalysis {
  name: string;
  icon: string;
  purpose: string;
  idealLocation: string;
  colors: string[];
  furniture: string[];
  plants: string[];
  avoid: string[];
  tips: string[];
  energy: string;
}

interface HomeAnalysis {
  houseDirection: string;
  element: string;
  rooms: RoomAnalysis[];
  generalAdvice: string[];
  energyFlow: string;
  luckyAreas: string[];
  problemAreas: string[];
}

const roomsData: Record<string, RoomAnalysis> = {
  'living': {
    name: 'Phòng khách',
    icon: '🛋️',
    purpose: 'Tiếp khách, sinh hoạt gia đình',
    idealLocation: 'Gần cửa chính, hướng Nam hoặc Đông Nam',
    colors: ['Vàng', 'Cam', 'Đỏ nhạt', 'Kem'],
    furniture: ['Sofa chữ L', 'Bàn trà tròn', 'Tủ tivi', 'Kệ sách'],
    plants: ['Cây kim ngân', 'Cây phát tài', 'Cây trầu bà'],
    avoid: ['Gương đối diện cửa', 'Góc nhọn hướng về chỗ ngồi', 'Đồ cũ kỹ'],
    tips: ['Đặt sofa tựa tường', 'Ánh sáng đầy đủ', 'Không gian thoáng đãng'],
    energy: 'Yang - năng động, giao tiếp'
  },
  'bedroom': {
    name: 'Phòng ngủ',
    icon: '🛏️',
    purpose: 'Nghỉ ngơi, thư giãn',
    idealLocation: 'Khu vực yên tĩnh, hướng Tây hoặc Tây Bắc',
    colors: ['Xanh nhạt', 'Hồng nhạt', 'Kem', 'Trắng'],
    furniture: ['Giường có đầu giường', 'Tủ quần áo', 'Bàn trang điểm', 'Đèn ngủ'],
    plants: ['Cây lưỡi hổ', 'Cây lô hội', 'Cây lavender'],
    avoid: ['Gương chiếu giường', 'Tivi trong phòng ngủ', 'Đồ điện tử nhiều'],
    tips: ['Giường không đối diện cửa', 'Rèm cửa dày', 'Không gian tối, yên tĩnh'],
    energy: 'Yin - yên tĩnh, nghỉ ngơi'
  },
  'kitchen': {
    name: 'Phòng bếp',
    icon: '🍳',
    purpose: 'Nấu nướng, chuẩn bị thức ăn',
    idealLocation: 'Hướng Đông hoặc Đông Nam, tránh trung tâm nhà',
    colors: ['Trắng', 'Vàng nhạt', 'Xanh lá nhạt'],
    furniture: ['Bếp gas', 'Tủ bếp', 'Bàn đảo', 'Tủ lạnh'],
    plants: ['Cây húng quế', 'Cây bạc hà', 'Cây rau thơm'],
    avoid: ['Bếp đối diện toilet', 'Bếp dưới dầm', 'Bếp gần cửa chính'],
    tips: ['Bếp không đối diện bồn rửa', 'Thông gió tốt', 'Sạch sẽ, gọn gàng'],
    energy: 'Hỏa - năng lượng sáng tạo'
  },
  'bathroom': {
    name: 'Phòng tắm',
    icon: '🚿',
    purpose: 'Vệ sinh cá nhân',
    idealLocation: 'Góc nhà, hướng Bắc hoặc Tây',
    colors: ['Trắng', 'Xanh nhạt', 'Xám nhạt'],
    furniture: ['Bồn tắm', 'Lavabo', 'Gương', 'Tủ đựng đồ'],
    plants: ['Cây dương xỉ', 'Cây trúc', 'Cây lưỡi hổ'],
    avoid: ['Cửa toilet hướng bếp', 'Gương vỡ', 'Ẩm ướt kéo dài'],
    tips: ['Cửa luôn đóng', 'Thông gió tốt', 'Ánh sáng đầy đủ'],
    energy: 'Thủy - thanh lọc, làm sạch'
  },
  'study': {
    name: 'Phòng làm việc',
    icon: '📚',
    purpose: 'Học tập, làm việc',
    idealLocation: 'Hướng Đông Bắc hoặc Bắc, yên tĩnh',
    colors: ['Xanh lá', 'Nâu', 'Xám', 'Trắng'],
    furniture: ['Bàn làm việc', 'Ghế ergonomic', 'Kệ sách', 'Đèn bàn'],
    plants: ['Cây trúc', 'Cây kim ngân', 'Cây xương rồng'],
    avoid: ['Bàn quay lưng về cửa', 'Ánh sáng yếu', 'Tiếng ồn'],
    tips: ['Bàn tựa tường', 'Ánh sáng tự nhiên', 'Không gian gọn gàng'],
    energy: 'Thổ - ổn định, tập trung'
  },
  'dining': {
    name: 'Phòng ăn',
    icon: '🍽️',
    purpose: 'Ăn uống, sum họp gia đình',
    idealLocation: 'Gần bếp, hướng Đông hoặc Nam',
    colors: ['Vàng', 'Cam', 'Đỏ nhạt', 'Nâu'],
    furniture: ['Bàn ăn tròn/vuông', 'Ghế ăn', 'Tủ chén', 'Đèn chùm'],
    plants: ['Cây quất', 'Cây hoa', 'Cây thảo mộc'],
    avoid: ['Bàn ăn dưới dầm', 'Gương chiếu bàn ăn', 'Góc nhọn'],
    tips: ['Bàn ăn ở trung tâm', 'Ánh sáng ấm áp', 'Không gian thoải mái'],
    energy: 'Thổ - nuôi dưỡng, sum vầy'
  }
};

const houseDirections = [
  { id: 'north', name: 'Bắc', element: 'Thủy', energy: 'Sự nghiệp, trí tuệ' },
  { id: 'northeast', name: 'Đông Bắc', element: 'Thổ', energy: 'Kiến thức, tâm linh' },
  { id: 'east', name: 'Đông', element: 'Mộc', energy: 'Gia đình, sức khỏe' },
  { id: 'southeast', name: 'Đông Nam', element: 'Mộc', energy: 'Tài lộc, thịnh vượng' },
  { id: 'south', name: 'Nam', element: 'Hỏa', energy: 'Danh tiếng, thành công' },
  { id: 'southwest', name: 'Tây Nam', element: 'Thổ', energy: 'Tình yêu, mối quan hệ' },
  { id: 'west', name: 'Tây', element: 'Kim', energy: 'Con cái, sáng tạo' },
  { id: 'northwest', name: 'Tây Bắc', element: 'Kim', energy: 'Quý nhân, lãnh đạo' }
];

export default function FengshuiHomePage() {
  const [selectedDirection, setSelectedDirection] = useState<string>('south');
  const [analysis, setAnalysis] = useState<HomeAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeRoom, setActiveRoom] = useState<string>('living');
  const [selectedRoom, setSelectedRoom] = useState<RoomAnalysis | null>(null);

  const analyzeHome = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const direction = houseDirections.find(d => d.id === selectedDirection)!;
      
      const newAnalysis: HomeAnalysis = {
        houseDirection: direction.name,
        element: direction.element,
        rooms: Object.values(roomsData),
        generalAdvice: [
          `Nhà hướng ${direction.name} thuộc nguyên tố ${direction.element}, mang năng lượng ${direction.energy.toLowerCase()}`,
          'Bố trí nội thất theo nguyên tắc ngũ hành để tăng cường năng lượng tích cực',
          'Giữ không gian sạch sẽ, thoáng đãng để khí tốt lưu thông',
          'Sử dụng ánh sáng tự nhiên và cây xanh để cân bằng năng lượng'
        ],
        energyFlow: direction.element === 'Hỏa' ? 'Năng lượng mạnh mẽ, cần cân bằng với yếu tố Thủy' :
                   direction.element === 'Thủy' ? 'Năng lượng êm dịu, cần tăng cường yếu tố Mộc' :
                   direction.element === 'Mộc' ? 'Năng lượng phát triển, cần hỗ trợ yếu tố Thủy' :
                   direction.element === 'Kim' ? 'Năng lượng cứng cỏi, cần làm mềm với yếu tố Thổ' :
                   'Năng lượng ổn định, cần kích hoạt với yếu tố Hỏa',
        luckyAreas: ['Phòng khách', 'Phòng ăn', 'Khu vực trung tâm'],
        problemAreas: ['Góc chết', 'Khu vực tối', 'Nơi có dầm lộ']
      };
      
      setAnalysis(newAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <ContentHeader 
        title='Phong Thủy Nhà Ở' 
        description='Bố trí không gian sống hài hòa, thu hút tài lộc và mang lại bình an cho gia đình'
        breadcrumb={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Phong Thủy', href: '/feng-shui' },
          { label: 'Phong Thủy Nhà Ở', href: '/feng-shui/home' }
        ]}
      />
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Direction Selection */}
        <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Chọn Hướng Nhà Của Bạn
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {houseDirections.map((direction) => (
              <button
                key={direction.id}
                onClick={() => setSelectedDirection(direction.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedDirection === direction.id
                    ? 'border-golden bg-golden/10 text-golden'
                    : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                }`}
              >
                <div className="text-center">
                  <div className="font-bold text-lg">{direction.name}</div>
                  <div className="text-sm opacity-75">{direction.element}</div>
                  <div className="text-xs mt-1">{direction.energy}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={analyzeHome}
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
                  🏠 Phân Tích Phong Thủy
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {analysis && (
          <div className="space-y-8">
            {/* Overview */}
            <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Nhà Hướng {analysis.houseDirection}
                </h2>
                <div className="text-golden font-semibold mb-6">
                  Nguyên tố: {analysis.element}
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <h3 className="text-green-400 font-semibold mb-2">Khu vực may mắn</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {analysis.luckyAreas.map((area, i) => (
                        <li key={i}>• {area}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                    <h3 className="text-blue-400 font-semibold mb-2">Dòng năng lượng</h3>
                    <p className="text-gray-300 text-sm">{analysis.energyFlow}</p>
                  </div>
                  
                  <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                    <h3 className="text-red-400 font-semibold mb-2">Khu vực cần chú ý</h3>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {analysis.problemAreas.map((area, i) => (
                        <li key={i}>• {area}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Selection */}
            <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Phân Tích Từng Phòng
              </h2>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {Object.entries(roomsData).map(([key, room]) => (
                  <button
                    key={key}
                    onClick={() => setActiveRoom(key)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      activeRoom === key
                        ? 'border-golden bg-golden/10 text-golden'
                        : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">{room.icon}</div>
                      <div className="font-semibold text-sm">{room.name}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Room Details */}
              {activeRoom && (
                <div className="bg-gray-700/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{roomsData[activeRoom].icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{roomsData[activeRoom].name}</h3>
                      <p className="text-gray-400">{roomsData[activeRoom].purpose}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-golden font-semibold mb-2">Vị trí lý tưởng:</h4>
                        <p className="text-gray-300 text-sm">{roomsData[activeRoom].idealLocation}</p>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold mb-2">Màu sắc phù hợp:</h4>
                        <div className="flex flex-wrap gap-2">
                          {roomsData[activeRoom].colors.map((color, i) => (
                            <span key={i} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-sm">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-green-400 font-semibold mb-2">Nội thất cần thiết:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {roomsData[activeRoom].furniture.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Cây xanh phù hợp:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {roomsData[activeRoom].plants.map((plant, i) => (
                            <li key={i}>• {plant}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-red-400 font-semibold mb-2">Điều cần tránh:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {roomsData[activeRoom].avoid.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-orange-400 font-semibold mb-2">Mẹo bố trí:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {roomsData[activeRoom].tips.map((tip, i) => (
                            <li key={i}>• {tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-golden/10 rounded-lg p-4 border border-golden/20">
                    <h4 className="text-golden font-semibold mb-2">Năng lượng phòng:</h4>
                    <p className="text-gray-300 text-sm">{roomsData[activeRoom].energy}</p>
                  </div>
                </div>
              )}
            </div>

            {/* General Advice */}
            <div className="bg-gradient-to-br from-golden/10 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-golden/20">
              <h3 className="text-2xl font-bold text-golden mb-6 text-center">
                Lời Khuyên Tổng Quát
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {analysis.generalAdvice.map((advice, index) => (
                  <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-golden text-xl mt-1">💡</span>
                      <p className="text-gray-300 leading-relaxed">{advice}</p>
                    </div>
                  </div>
                ))}
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
