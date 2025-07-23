'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NumberMeaning {
  number: number;
  name: string;
  element: string;
  color: string;
  energy: string;
  personality: string;
  strengths: string[];
  challenges: string[];
  career: string[];
  love: string;
  health: string;
  fengshui: string;
  spiritual: string;
  luckyDays: string[];
  compatibleNumbers: number[];
  symbol: string;
  gradient: string;
}

const numberMeanings: NumberMeaning[] = [
  {
    number: 0,
    name: "Không - Vô Cực",
    element: "Không gian",
    color: "Trắng, Bạc",
    energy: "Tiềm năng vô hạn",
    personality: "Bí ẩn, tiềm năng, khởi đầu và kết thúc",
    strengths: ["Tiềm năng vô hạn", "Sự khởi đầu mới", "Tính linh hoạt cao", "Khả năng thích nghi"],
    challenges: ["Thiếu định hướng", "Dễ bị ảnh hưởng", "Khó quyết định"],
    career: ["Nghệ thuật", "Tâm linh", "Tư vấn", "Nghiên cứu"],
    love: "Cần tìm kiếm sự ổn định và định hướng rõ ràng trong tình yêu",
    health: "Cần chú ý đến sức khỏe tinh thần và cân bằng cảm xúc",
    fengshui: "Tượng trưng cho sự khởi đầu mới, thích hợp để làm mới không gian sống",
    spiritual: "Đại diện cho vũ trụ, sự vô hạn và tiềm năng chưa được khai phá",
    luckyDays: ["Chủ nhật"],
    compatibleNumbers: [1, 2, 8, 9],
    symbol: "○",
    gradient: "from-gray-400 to-white"
  },
  {
    number: 1,
    name: "Một - Thái Cực",
    element: "Hỏa",
    color: "Đỏ, Cam",
    energy: "Lãnh đạo, sáng tạo",
    personality: "Độc lập, quyết đoán, tiên phong, tự tin",
    strengths: ["Khả năng lãnh đạo", "Sáng tạo", "Quyết đoán", "Độc lập", "Tinh thần tiên phong"],
    challenges: ["Quá độc đoán", "Thiếu kiên nhẫn", "Ích kỷ", "Cứng đầu"],
    career: ["CEO", "Doanh nhân", "Nghệ sĩ", "Nhà lãnh đạo", "Nhà sáng tạo"],
    love: "Cần học cách lắng nghe và chia sẻ quyền lực trong mối quan hệ",
    health: "Dễ bị stress do làm việc quá sức, cần nghỉ ngơi đầy đủ",
    fengshui: "Mang năng lượng mạnh mẽ, thích hợp đặt ở hướng Nam hoặc Đông Nam",
    spiritual: "Đại diện cho sự khởi đầu, ý chí và sức mạnh cá nhân",
    luckyDays: ["Chủ nhật", "Thứ hai"],
    compatibleNumbers: [3, 5, 6, 9],
    symbol: "☀",
    gradient: "from-red-500 to-orange-500"
  },
  {
    number: 2,
    name: "Hai - Âm Dương",
    element: "Thủy",
    color: "Xanh dương, Bạc",
    energy: "Hợp tác, cân bằng",
    personality: "Nhạy cảm, hợp tác, kiên nhẫn, trực giác",
    strengths: ["Khả năng hợp tác", "Trực giác mạnh", "Kiên nhẫn", "Đồng cảm", "Ngoại giao"],
    challenges: ["Quá nhạy cảm", "Thiếu tự tin", "Dễ bị tổn thương", "Phụ thuộc"],
    career: ["Tư vấn", "Y tế", "Giáo dục", "Ngoại giao", "Nghệ thuật"],
    love: "Rất trung thành và quan tâm, nhưng cần học cách tự tin hơn",
    health: "Cần chú ý đến hệ thần kinh và tiêu hóa",
    fengshui: "Mang năng lượng êm dịu, thích hợp đặt ở hướng Bắc hoặc Tây Bắc",
    spiritual: "Đại diện cho sự cân bằng, hài hòa và kết nối",
    luckyDays: ["Thứ hai", "Thứ năm"],
    compatibleNumbers: [1, 4, 6, 8],
    symbol: "☯",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: 3,
    name: "Ba - Tam Tài",
    element: "Mộc",
    color: "Xanh lá, Vàng",
    energy: "Sáng tạo, giao tiếp",
    personality: "Vui vẻ, sáng tạo, giao tiếp tốt, lạc quan",
    strengths: ["Sáng tạo", "Giao tiếp xuất sắc", "Lạc quan", "Nghệ thuật", "Truyền cảm hứng"],
    challenges: ["Thiếu tập trung", "Nói nhiều", "Không kiên trì", "Phân tán"],
    career: ["Nghệ sĩ", "Nhà văn", "MC", "Marketing", "Giải trí"],
    love: "Lãng mạn và vui vẻ, nhưng cần học cách cam kết lâu dài",
    health: "Cần chú ý đến hệ hô hấp và giọng nói",
    fengshui: "Mang năng lượng sáng tạo, thích hợp đặt ở hướng Đông",
    spiritual: "Đại diện cho sự sáng tạo, biểu đạt và kết nối xã hội",
    luckyDays: ["Thứ ba", "Thứ tư"],
    compatibleNumbers: [1, 5, 7, 9],
    symbol: "△",
    gradient: "from-green-500 to-yellow-500"
  },
  {
    number: 4,
    name: "Bốn - Tứ Phương",
    element: "Thổ",
    color: "Nâu, Vàng đất",
    energy: "Ổn định, thực tế",
    personality: "Thực tế, đáng tin cậy, kiên nhẫn, có tổ chức",
    strengths: ["Đáng tin cậy", "Có tổ chức", "Kiên trì", "Thực tế", "Xây dựng nền tảng"],
    challenges: ["Cứng nhắc", "Chậm chạp", "Thiếu sáng tạo", "Quá thận trọng"],
    career: ["Kế toán", "Xây dựng", "Quản lý", "Ngân hàng", "Kỹ thuật"],
    love: "Trung thành và ổn định, nhưng cần học cách lãng mạn hơn",
    health: "Cần chú ý đến xương khớp và hệ tiêu hóa",
    fengshui: "Mang năng lượng ổn định, thích hợp đặt ở trung tâm nhà",
    spiritual: "Đại diện cho sự ổn định, nền tảng và trật tự",
    luckyDays: ["Thứ tư", "Thứ bảy"],
    compatibleNumbers: [2, 6, 8],
    symbol: "□",
    gradient: "from-amber-600 to-yellow-600"
  },
  {
    number: 5,
    name: "Năm - Ngũ Hành",
    element: "Thổ (trung tâm)",
    color: "Vàng, Cam",
    energy: "Tự do, phiêu lưu",
    personality: "Tự do, phiêu lưu, linh hoạt, tò mò",
    strengths: ["Linh hoạt", "Thích nghi", "Tự do", "Phiêu lưu", "Đa tài"],
    challenges: ["Thiếu kiên trì", "Không cam kết", "Bồn chồn", "Thiếu tập trung"],
    career: ["Du lịch", "Bán hàng", "Truyền thông", "Thể thao", "Tự do"],
    love: "Cần tự do trong tình yêu, khó cam kết lâu dài",
    health: "Cần chú ý đến hệ thần kinh và stress",
    fengshui: "Mang năng lượng biến động, cần cân bằng với các yếu tố khác",
    spiritual: "Đại diện cho sự tự do, thay đổi và khám phá",
    luckyDays: ["Thứ năm", "Thứ sáu"],
    compatibleNumbers: [1, 3, 7, 9],
    symbol: "☆",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    number: 6,
    name: "Sáu - Lục Hợp",
    element: "Kim",
    color: "Trắng, Vàng kim",
    energy: "Chăm sóc, trách nhiệm",
    personality: "Quan tâm, trách nhiệm, yêu thương, bảo vệ",
    strengths: ["Quan tâm người khác", "Trách nhiệm", "Yêu thương", "Chữa lành", "Hỗ trợ"],
    challenges: ["Hy sinh quá mức", "Can thiệp", "Hoàn hảo chủ nghĩa", "Lo lắng"],
    career: ["Y tế", "Giáo dục", "Tư vấn", "Xã hội", "Chăm sóc"],
    love: "Rất quan tâm và chăm sóc, nhưng cần học cách không kiểm soát",
    health: "Cần chú ý đến tim mạch và stress do lo lắng",
    fengshui: "Mang năng lượng nuôi dưỡng, thích hợp đặt ở khu vực gia đình",
    spiritual: "Đại diện cho tình yêu thương, chăm sóc và trách nhiệm",
    luckyDays: ["Thứ sáu", "Chủ nhật"],
    compatibleNumbers: [1, 2, 4, 8],
    symbol: "♡",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    number: 7,
    name: "Bảy - Thất Tinh",
    element: "Kim",
    color: "Tím, Bạc",
    energy: "Trí tuệ, tâm linh",
    personality: "Trí tuệ, tâm linh, phân tích, huyền bí",
    strengths: ["Trí tuệ", "Phân tích", "Trực giác", "Tâm linh", "Nghiên cứu"],
    challenges: ["Cô lập", "Hoài nghi", "Khó gần", "Quá phân tích"],
    career: ["Nghiên cứu", "Tâm linh", "Khoa học", "Triết học", "Tâm lý"],
    love: "Cần thời gian để mở lòng, đòi hỏi sự hiểu biết sâu sắc",
    health: "Cần chú ý đến sức khỏe tinh thần và cân bằng cảm xúc",
    fengshui: "Mang năng lượng tâm linh, thích hợp đặt ở không gian yên tĩnh",
    spiritual: "Đại diện cho trí tuệ, tâm linh và sự tìm kiếm chân lý",
    luckyDays: ["Thứ bảy", "Chủ nhật"],
    compatibleNumbers: [3, 5, 9],
    symbol: "✧",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    number: 8,
    name: "Tám - Bát Quái",
    element: "Thổ",
    color: "Đen, Vàng",
    energy: "Quyền lực, thành công",
    personality: "Tham vọng, quyền lực, thành công, vật chất",
    strengths: ["Lãnh đạo", "Thành công", "Quyền lực", "Tổ chức", "Kinh doanh"],
    challenges: ["Tham vọng quá mức", "Vật chất", "Áp lực", "Cứng nhắc"],
    career: ["Kinh doanh", "Lãnh đạo", "Tài chính", "Bất động sản", "Chính trị"],
    love: "Cần học cách cân bằng giữa sự nghiệp và tình yêu",
    health: "Cần chú ý đến huyết áp và stress do công việc",
    fengshui: "Mang năng lượng thành công, thích hợp đặt ở khu vực sự nghiệp",
    spiritual: "Đại diện cho quyền lực, thành công và sự cân bằng vật chất",
    luckyDays: ["Thứ bảy", "Thứ hai"],
    compatibleNumbers: [2, 4, 6],
    symbol: "∞",
    gradient: "from-gray-800 to-yellow-500"
  },
  {
    number: 9,
    name: "Chín - Cửu Tinh",
    element: "Hỏa",
    color: "Đỏ, Tím",
    energy: "Hoàn thiện, cống hiến",
    personality: "Nhân ái, cống hiến, hoàn thiện, rộng lượng",
    strengths: ["Nhân ái", "Cống hiến", "Rộng lượng", "Hoàn thiện", "Truyền cảm hứng"],
    challenges: ["Quá lý tưởng", "Hy sinh", "Thất vọng", "Không thực tế"],
    career: ["Từ thiện", "Giáo dục", "Nghệ thuật", "Tôn giáo", "Xã hội"],
    love: "Yêu thương sâu sắc và rộng lượng, nhưng cần học cách thực tế",
    health: "Cần chú ý đến tim mạch và cân bằng cảm xúc",
    fengshui: "Mang năng lượng hoàn thiện, thích hợp đặt ở hướng Nam",
    spiritual: "Đại diện cho sự hoàn thiện, cống hiến và tình yêu vô điều kiện",
    luckyDays: ["Thứ ba", "Chủ nhật"],
    compatibleNumbers: [1, 3, 5, 7],
    symbol: "◉",
    gradient: "from-red-500 to-purple-500"
  }
];

export default function NumbersMeaningPage() {
  const [selectedNumber, setSelectedNumber] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'personality' | 'fengshui' | 'spiritual'>('overview');

  const currentNumber = numberMeanings.find(n => n.number === selectedNumber) || numberMeanings[1];

  const renderCompatibleNumbers = () => {
    return currentNumber.compatibleNumbers.map(num => {
      const compatNumber = numberMeanings.find(n => n.number === num);
      return (
        <button
          key={num}
          onClick={() => setSelectedNumber(num)}
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${compatNumber?.gradient} flex items-center justify-center text-white font-bold hover:scale-110 transition-transform`}
        >
          {num}
        </button>
      );
    });
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-900/20 to-indigo-900/20 py-20">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">

          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-golden via-yellow-400 to-golden bg-clip-text text-transparent">
              Ý Nghĩa Con Số
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            <strong className="text-golden">Khám phá bí mật</strong> của các con số từ 0 đến 9
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Tìm hiểu ý nghĩa tâm linh, phong thủy và năng lượng của từng con số trong cuộc sống
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Number Selection */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Chọn Con Số Bạn Muốn Tìm Hiểu
          </h2>
          
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4 max-w-4xl mx-auto">
            {numberMeanings.map((number) => (
              <button
                key={number.number}
                onClick={() => setSelectedNumber(number.number)}
                className={`aspect-square rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedNumber === number.number
                    ? 'border-golden bg-golden/10 shadow-lg shadow-golden/20'
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full p-2">
                  <div className={`text-3xl mb-1 bg-gradient-to-r ${number.gradient} bg-clip-text text-transparent font-bold`}>
                    {number.number}
                  </div>
                  <div className="text-xs text-gray-400 text-center leading-tight">
                    {number.name.split(' - ')[1] || number.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Number Details */}
        <div className="space-y-8">
          {/* Header Info */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
            <div className="text-center mb-8">
              <div className={`text-8xl mb-4 bg-gradient-to-r ${currentNumber.gradient} bg-clip-text text-transparent font-bold`}>
                {currentNumber.number}
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{currentNumber.name}</h2>
              <div className="flex items-center justify-center gap-6 text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-golden">🌟</span>
                  <span>Nguyên tố: {currentNumber.element}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-golden">🎨</span>
                  <span>Màu sắc: {currentNumber.color}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-golden">⚡</span>
                  <span>Năng lượng: {currentNumber.energy}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {currentNumber.personality}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 rounded-full p-1">
              {[
                { id: 'overview', label: '📊 Tổng Quan', icon: '📊' },
                { id: 'personality', label: '👤 Tính Cách', icon: '👤' },
                { id: 'fengshui', label: '🧭 Phong Thủy', icon: '🧭' },
                { id: 'spiritual', label: '✨ Tâm Linh', icon: '✨' }
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
            <div className="grid md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-green-700/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span>✨</span> Điểm Mạnh
                </h3>
                <ul className="space-y-2">
                  {currentNumber.strengths.map((strength, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="bg-gradient-to-br from-orange-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-orange-700/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span>⚡</span> Thách Thức
                </h3>
                <ul className="space-y-2">
                  {currentNumber.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="text-orange-400 mt-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career */}
              <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-blue-700/20">
                <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                  <span>💼</span> Nghề Nghiệp Phù Hợp
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentNumber.career.map((job, index) => (
                    <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {job}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lucky Days */}
              <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-700/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <span>🗓️</span> Ngày May Mắn
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentNumber.luckyDays.map((day, index) => (
                    <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'personality' && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Love */}
              <div className="bg-gradient-to-br from-pink-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-pink-700/20">
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <span>💕</span> Tình Yêu
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {currentNumber.love}
                </p>
              </div>

              {/* Health */}
              <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-green-700/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span>🏥</span> Sức Khỏe
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {currentNumber.health}
                </p>
              </div>

              {/* Compatible Numbers */}
              <div className="md:col-span-2 bg-gradient-to-br from-golden/10 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-golden/20">
                <h3 className="text-xl font-bold text-golden mb-4 flex items-center gap-2">
                  <span>🤝</span> Số Tương Thích
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {renderCompatibleNumbers()}
                </div>
                <p className="text-gray-400 text-sm text-center mt-4">
                  Nhấp vào số để xem chi tiết
                </p>
              </div>
            </div>
          )}

          {activeTab === 'fengshui' && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                <span>🧭</span> Ý Nghĩa Phong Thủy
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                  <p className="text-gray-300 leading-relaxed text-lg text-center">
                    {currentNumber.fengshui}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'spiritual' && (
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                <span>✨</span> Ý Nghĩa Tâm Linh
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-4">{currentNumber.symbol}</div>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg text-center">
                    {currentNumber.spiritual}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Khám Phá Thêm</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/numerology"
              className="bg-gradient-to-r from-golden to-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🔢 Thần Số Học
            </Link>
            <Link
              href="/tarot"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🔮 Bói Bài Tarot
            </Link>
            <Link
              href="/cards"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🃏 Bói Bài Tây
            </Link>
            <Link
              href="/games"
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🎮 Minigame Bói
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
