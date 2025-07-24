'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';
import { useState } from 'react';

interface GameResult {
  type: 'shape' | 'color' | 'number';
  selection: string;
  meaning: string;
  advice: string;
  luckyElement: string;
}

interface MiniGame {
  id: string;
  name: string;
  description: string;
  icon: string;
  options: { id: string; label: string; symbol: string; color?: string }[];
}

const miniGames: MiniGame[] = [
  {
    id: 'shape',
    name: 'Bói Hình Dạng',
    description: 'Chọn hình dạng bạn cảm thấy hấp dẫn nhất',
    icon: '🔺',
    options: [
      { id: 'circle', label: 'Hình Tròn', symbol: '⭕' },
      { id: 'square', label: 'Hình Vuông', symbol: '⬜' },
      { id: 'triangle', label: 'Hình Tam Giác', symbol: '🔺' },
      { id: 'diamond', label: 'Hình Thoi', symbol: '💎' },
      { id: 'star', label: 'Hình Ngôi Sao', symbol: '⭐' },
      { id: 'heart', label: 'Hình Trái Tim', symbol: '❤️' }
    ]
  },
  {
    id: 'color',
    name: 'Bói Màu Sắc',
    description: 'Chọn màu sắc phù hợp với tâm trạng hiện tại',
    icon: '🌈',
    options: [
      { id: 'red', label: 'Đỏ', symbol: '🔴', color: 'bg-red-500' },
      { id: 'blue', label: 'Xanh Dương', symbol: '🔵', color: 'bg-blue-500' },
      { id: 'green', label: 'Xanh Lá', symbol: '🟢', color: 'bg-green-500' },
      { id: 'yellow', label: 'Vàng', symbol: '🟡', color: 'bg-yellow-500' },
      { id: 'purple', label: 'Tím', symbol: '🟣', color: 'bg-purple-500' },
      { id: 'orange', label: 'Cam', symbol: '🟠', color: 'bg-orange-500' },
      { id: 'pink', label: 'Hồng', symbol: '🩷', color: 'bg-pink-500' },
      { id: 'black', label: 'Đen', symbol: '⚫', color: 'bg-gray-800' }
    ]
  },
  {
    id: 'number',
    name: 'Bói Con Số',
    description: 'Chọn con số mà trực giác bạn hướng tới',
    icon: '🔢',
    options: [
      { id: '1', label: 'Số 1', symbol: '1️⃣' },
      { id: '2', label: 'Số 2', symbol: '2️⃣' },
      { id: '3', label: 'Số 3', symbol: '3️⃣' },
      { id: '4', label: 'Số 4', symbol: '4️⃣' },
      { id: '5', label: 'Số 5', symbol: '5️⃣' },
      { id: '6', label: 'Số 6', symbol: '6️⃣' },
      { id: '7', label: 'Số 7', symbol: '7️⃣' },
      { id: '8', label: 'Số 8', symbol: '8️⃣' },
      { id: '9', label: 'Số 9', symbol: '9️⃣' }
    ]
  }
];

const gameMeanings: Record<string, Record<string, any>> = {
  shape: {
    circle: {
      meaning: 'Bạn là người hòa hợp, thích sự cân bằng và hoàn thiện',
      advice: 'Tìm kiếm sự hài hòa trong mọi khía cạnh cuộc sống',
      luckyElement: 'Nước - mang lại sự êm dịu và linh hoạt'
    },
    square: {
      meaning: 'Bạn là người thực tế, đáng tin cậy và có tổ chức',
      advice: 'Xây dựng nền tảng vững chắc cho tương lai',
      luckyElement: 'Đất - mang lại sự ổn định và bền vững'
    },
    triangle: {
      meaning: 'Bạn là người năng động, quyết đoán và có tham vọng',
      advice: 'Hãy dũng cảm theo đuổi mục tiêu của mình',
      luckyElement: 'Lửa - mang lại năng lượng và động lực'
    },
    diamond: {
      meaning: 'Bạn là người độc đáo, sáng tạo và có giá trị',
      advice: 'Thể hiện tài năng và sự khác biệt của bạn',
      luckyElement: 'Kim - mang lại sự quý giá và tinh khiết'
    },
    star: {
      meaning: 'Bạn là người có ước mơ lớn và khả năng truyền cảm hứng',
      advice: 'Theo đuổi ước mơ và lan tỏa năng lượng tích cực',
      luckyElement: 'Ánh sáng - mang lại hy vọng và hướng dẫn'
    },
    heart: {
      meaning: 'Bạn là người yêu thương, quan tâm và có trái tim ấm áp',
      advice: 'Chia sẻ tình yêu và sự quan tâm với mọi người',
      luckyElement: 'Tình yêu - mang lại hạnh phúc và kết nối'
    }
  },
  color: {
    red: {
      meaning: 'Bạn đang tràn đầy năng lượng và đam mê',
      advice: 'Tận dụng sức mạnh này để đạt được mục tiêu',
      luckyElement: 'Hỏa - mang lại sự nhiệt huyết và quyết tâm'
    },
    blue: {
      meaning: 'Bạn đang tìm kiếm sự bình yên và trí tuệ',
      advice: 'Dành thời gian suy ngẫm và tìm hiểu bản thân',
      luckyElement: 'Thủy - mang lại sự thanh tịnh và sâu sắc'
    },
    green: {
      meaning: 'Bạn đang trong giai đoạn phát triển và tái sinh',
      advice: 'Nuôi dưỡng những dự án và mối quan hệ mới',
      luckyElement: 'Mộc - mang lại sự phát triển và tươi mới'
    },
    yellow: {
      meaning: 'Bạn đang tràn đầy niềm vui và sáng tạo',
      advice: 'Chia sẻ niềm vui và thể hiện sự sáng tạo',
      luckyElement: 'Ánh nắng - mang lại sự ấm áp và tích cực'
    },
    purple: {
      meaning: 'Bạn đang kết nối với trí tuệ và tâm linh',
      advice: 'Khám phá khả năng trực giác và tâm linh của mình',
      luckyElement: 'Huyền bí - mang lại sự thấu hiểu sâu sắc'
    },
    orange: {
      meaning: 'Bạn đang cân bằng giữa năng lượng và sự ấm áp',
      advice: 'Tìm kiếm sự cân bằng trong cuộc sống',
      luckyElement: 'Hoàng hôn - mang lại sự chuyển đổi tích cực'
    },
    pink: {
      meaning: 'Bạn đang mở lòng với tình yêu và sự dịu dàng',
      advice: 'Thể hiện sự quan tâm và yêu thương',
      luckyElement: 'Hoa - mang lại sự dịu dàng và xinh đẹp'
    },
    black: {
      meaning: 'Bạn đang trong giai đoạn chuyển đổi và tái sinh',
      advice: 'Chấp nhận sự thay đổi và chuẩn bị cho điều mới',
      luckyElement: 'Đêm - mang lại sự nghỉ ngơi và tái tạo'
    }
  },
  number: {
    '1': {
      meaning: 'Bạn là người lãnh đạo tự nhiên và độc lập',
      advice: 'Hãy dũng cảm đi đầu và khởi xướng điều mới',
      luckyElement: 'Mặt trời - mang lại sự lãnh đạo và sáng tạo'
    },
    '2': {
      meaning: 'Bạn là người hợp tác và có khả năng kết nối',
      advice: 'Tập trung vào việc xây dựng mối quan hệ',
      luckyElement: 'Mặt trăng - mang lại sự cân bằng và hài hòa'
    },
    '3': {
      meaning: 'Bạn là người sáng tạo và có khả năng giao tiếp',
      advice: 'Thể hiện tài năng và chia sẻ ý tưởng',
      luckyElement: 'Sao Kim - mang lại sự sáng tạo và xinh đẹp'
    },
    '4': {
      meaning: 'Bạn là người thực tế và có khả năng xây dựng',
      advice: 'Tập trung vào việc tạo ra nền tảng vững chắc',
      luckyElement: 'Trái đất - mang lại sự ổn định và bền vững'
    },
    '5': {
      meaning: 'Bạn là người tự do và thích khám phá',
      advice: 'Tận hưởng sự tự do và khám phá điều mới',
      luckyElement: 'Gió - mang lại sự tự do và thay đổi'
    },
    '6': {
      meaning: 'Bạn là người quan tâm và có trách nhiệm',
      advice: 'Chăm sóc bản thân và những người xung quanh',
      luckyElement: 'Gia đình - mang lại sự yêu thương và bảo vệ'
    },
    '7': {
      meaning: 'Bạn là người có trí tuệ và khả năng tâm linh',
      advice: 'Dành thời gian để suy ngẫm và phát triển nội tâm',
      luckyElement: 'Sao Hải Vương - mang lại trí tuệ và trực giác'
    },
    '8': {
      meaning: 'Bạn là người có tham vọng và khả năng thành công',
      advice: 'Tập trung vào mục tiêu và sử dụng quyền lực có trách nhiệm',
      luckyElement: 'Sao Thổ - mang lại sự thành công và quyền lực'
    },
    '9': {
      meaning: 'Bạn là người có tầm nhìn rộng và lòng nhân ái',
      advice: 'Chia sẻ kiến thức và giúp đỡ người khác',
      luckyElement: 'Sao Hỏa - mang lại sự cống hiến và hoàn thiện'
    }
  }
};

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string>('shape');
  const [result, setResult] = useState<GameResult | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const currentGame = miniGames.find(game => game.id === selectedGame)!;

  const handleSelection = (optionId: string) => {
    setIsRevealing(true);
    
    setTimeout(() => {
      const meaning = gameMeanings[selectedGame][optionId];
      const option = currentGame.options.find(opt => opt.id === optionId)!;
      
      const newResult: GameResult = {
        type: selectedGame as any,
        selection: option.label,
        meaning: meaning.meaning,
        advice: meaning.advice,
        luckyElement: meaning.luckyElement
      };
      
      setResult(newResult);
      setIsRevealing(false);
    }, 1500);
  };

  const resetGame = () => {
    setResult(null);
  };

  const switchGame = (gameId: string) => {
    setSelectedGame(gameId);
    setResult(null);
  };

  return (
    <>
      <ContentHeader
        title="Minigame Bói"
        description="Khám phá bản thân qua các trò chơi bói vui nhộn. Chọn hình dạng, màu sắc hoặc con số theo trực giác để khám phá tính cách và nhận lời khuyên."
        breadcrumb={[
          { label: "Trang Chủ", href: "/" },
          { label: "Minigame Bói", href: "/games" },
        ]}
      />
      <div className="min-h-screen">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {!result ? (
            <div className="space-y-8">
              {/* Game Selection */}
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                  Chọn Trò Chơi Bói
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {miniGames.map((game) => (
                    <button
                      key={game.id}
                      onClick={() => switchGame(game.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                        selectedGame === game.id
                          ? "border-golden bg-golden/10 shadow-lg shadow-golden/20"
                          : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-3">{game.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {game.name}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {game.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Game Options */}
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">
                  {currentGame.name}
                </h2>
                <p className="text-gray-300 text-center mb-8">
                  {currentGame.description}
                </p>

                {isRevealing ? (
                  <div className="text-center py-10">
                    <div className="inline-flex items-center gap-3 bg-gray-800/50 px-8 py-4 rounded-full">
                      <div className="w-6 h-6 border-2 border-golden border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-white font-medium">
                        Đang tiết lộ kết quả...
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`grid gap-4 ${
                      selectedGame === "color"
                        ? "grid-cols-4 md:grid-cols-8"
                        : selectedGame === "number"
                        ? "grid-cols-3 md:grid-cols-9"
                        : "grid-cols-2 md:grid-cols-6"
                    }`}
                  >
                    {currentGame.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleSelection(option.id)}
                        className={`aspect-square rounded-2xl border-2 border-gray-700 bg-gray-800/50 hover:border-golden hover:bg-golden/10 transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center p-4 ${
                          option.color || ""
                        }`}
                      >
                        <div className="text-3xl mb-2">{option.symbol}</div>
                        <div className="text-white text-sm font-medium text-center">
                          {option.label}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Result Header */}
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Kết Quả: {result.selection}
                  </h2>
                  <div className="text-6xl mb-6">
                    {
                      currentGame.options.find(
                        (opt) => opt.label === result.selection
                      )?.symbol
                    }
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {result.meaning}
                  </p>
                </div>
              </div>

              {/* Detailed Results */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Advice */}
                <div className="bg-gradient-to-br from-golden/10 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-golden/20">
                  <h3 className="text-xl font-bold text-golden mb-4 flex items-center gap-2">
                    <span>💡</span> Lời Khuyên
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {result.advice}
                  </p>
                </div>

                {/* Lucky Element */}
                <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-700/20">
                  <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                    <span>✨</span> Yếu Tố May Mắn
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {result.luckyElement}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={resetGame}
                  className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
                >
                  🔄 Chơi Lại
                </button>

                <button
                  onClick={() =>
                    switchGame(
                      selectedGame === "shape"
                        ? "color"
                        : selectedGame === "color"
                        ? "number"
                        : "shape"
                    )
                  }
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
                >
                  🎮 Trò Chơi Khác
                </button>
              </div>
            </div>
          )}

          {/* Game Instructions */}
          <div className="mt-12 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/10">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              🎯 Cách Chơi
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">1️⃣</div>
                <h4 className="text-golden font-semibold mb-2">
                  Chọn Trò Chơi
                </h4>
                <p className="text-gray-400 text-sm">
                  Chọn một trong ba trò chơi: Hình dạng, Màu sắc, hoặc Con số
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">2️⃣</div>
                <h4 className="text-golden font-semibold mb-2">
                  Theo Trực Giác
                </h4>
                <p className="text-gray-400 text-sm">
                  Chọn tùy chọn mà bạn cảm thấy hấp dẫn nhất theo trực giác
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">3️⃣</div>
                <h4 className="text-golden font-semibold mb-2">Nhận Kết Quả</h4>
                <p className="text-gray-400 text-sm">
                  Khám phá ý nghĩa và nhận lời khuyên dành cho bạn
                </p>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <RelatedServices currentPage="/cards" />
        </div>
      </div>
    </>
  );
}
