'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';
import { useState } from 'react';

interface TarotCard {
  id: string;
  name: string;
  suit: string;
  number: number;
  element: string;
  keywords: string[];
  upright: {
    meaning: string;
    love: string;
    career: string;
    advice: string;
  };
  reversed: {
    meaning: string;
    love: string;
    career: string;
    advice: string;
  };
  symbol: string;
  color: string;
}

interface TarotReading {
  cards: (TarotCard & { isReversed: boolean })[];
  spread: string;
  interpretation: string;
  advice: string;
}

const majorArcana: TarotCard[] = [
  {
    id: 'fool',
    name: 'Kẻ Ngốc',
    suit: 'Major Arcana',
    number: 0,
    element: 'Khí',
    keywords: ['Khởi đầu mới', 'Phiêu lưu', 'Tự do', 'Ngây thơ'],
    upright: {
      meaning: 'Khởi đầu mới, cuộc phiêu lưu, tự do, ngây thơ',
      love: 'Tình yêu mới bắt đầu, sự ngây thơ trong tình cảm',
      career: 'Cơ hội mới, khởi nghiệp, thay đổi nghề nghiệp',
      advice: 'Hãy dũng cảm bước vào điều mới mẻ, tin tưởng vào trực giác'
    },
    reversed: {
      meaning: 'Liều lĩnh, thiếu suy nghĩ, sợ hãi thay đổi',
      love: 'Thiếu cam kết, quan hệ không ổn định',
      career: 'Quyết định vội vàng, thiếu kế hoạch',
      advice: 'Cần suy nghĩ kỹ trước khi hành động'
    },
    symbol: '🃏',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'magician',
    name: 'Pháp Sư',
    suit: 'Major Arcana',
    number: 1,
    element: 'Hỏa',
    keywords: ['Sức mạnh', 'Kỹ năng', 'Tập trung', 'Biểu hiện'],
    upright: {
      meaning: 'Sức mạnh cá nhân, kỹ năng, khả năng biểu hiện',
      love: 'Thu hút mạnh mẽ, khả năng quyến rũ',
      career: 'Thành công nhờ kỹ năng, lãnh đạo',
      advice: 'Sử dụng tài năng và kỹ năng để đạt được mục tiêu'
    },
    reversed: {
      meaning: 'Lạm dụng quyền lực, thiếu tập trung, lừa dối',
      love: 'Thao túng trong tình yêu, không chân thành',
      career: 'Sử dụng sai kỹ năng, gian lận',
      advice: 'Cần trung thực và sử dụng năng lực một cách tích cực'
    },
    symbol: '🎩',
    color: 'from-red-500 to-purple-500'
  },
  {
    id: 'high-priestess',
    name: 'Nữ Tư Tế',
    suit: 'Major Arcana',
    number: 2,
    element: 'Thủy',
    keywords: ['Trực giác', 'Bí ẩn', 'Tiềm thức', 'Nữ tính'],
    upright: {
      meaning: 'Trực giác mạnh, bí ẩn, sự hiểu biết sâu sắc',
      love: 'Tình yêu sâu sắc, kết nối tâm hồn',
      career: 'Công việc liên quan đến tâm linh, tư vấn',
      advice: 'Lắng nghe trực giác và tiếng nói nội tâm'
    },
    reversed: {
      meaning: 'Thiếu trực giác, bí mật được tiết lộ, mất cân bằng',
      love: 'Thiếu hiểu biết về bản thân, quan hệ mờ ám',
      career: 'Thiếu sự sáng suốt trong quyết định',
      advice: 'Cần tìm lại sự cân bằng và kết nối với bản thân'
    },
    symbol: '🌙',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'empress',
    name: 'Nữ Hoàng',
    suit: 'Major Arcana',
    number: 3,
    element: 'Thổ',
    keywords: ['Sáng tạo', 'Sinh sản', 'Nuôi dưỡng', 'Tự nhiên'],
    upright: {
      meaning: 'Sáng tạo, sinh sản, nuôi dưỡng, thịnh vượng',
      love: 'Tình yêu màu mỡ, có thể có tin vui về con cái',
      career: 'Sự nghiệp phát triển, dự án thành công',
      advice: 'Nuôi dưỡng ý tưởng và dự án của bạn'
    },
    reversed: {
      meaning: 'Thiếu sáng tạo, không sinh sản, bỏ bê',
      love: 'Thiếu quan tâm, tình yêu khô khan',
      career: 'Dự án bị trì hoãn, thiếu động lực',
      advice: 'Cần chăm sóc bản thân và những gì quan trọng'
    },
    symbol: '👑',
    color: 'from-green-500 to-pink-500'
  },
  {
    id: 'emperor',
    name: 'Hoàng Đế',
    suit: 'Major Arcana',
    number: 4,
    element: 'Hỏa',
    keywords: ['Quyền lực', 'Lãnh đạo', 'Ổn định', 'Kỷ luật'],
    upright: {
      meaning: 'Quyền lực, lãnh đạo, ổn định, kỷ luật',
      love: 'Mối quan hệ ổn định, cam kết lâu dài',
      career: 'Thăng tiến, vị trí lãnh đạo, thành công',
      advice: 'Sử dụng quyền lực một cách có trách nhiệm'
    },
    reversed: {
      meaning: 'Lạm quyền, độc tài, thiếu kỷ luật',
      love: 'Kiểm soát quá mức, thiếu tự do',
      career: 'Xung đột với cấp trên, thiếu kỷ luật',
      advice: 'Cần cân bằng giữa quyền lực và trách nhiệm'
    },
    symbol: '⚔️',
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 'hierophant',
    name: 'Giáo Hoàng',
    suit: 'Major Arcana',
    number: 5,
    element: 'Thổ',
    keywords: ['Truyền thống', 'Giáo dục', 'Tâm linh', 'Hướng dẫn'],
    upright: {
      meaning: 'Truyền thống, giáo dục, tâm linh, hướng dẫn',
      love: 'Tình yêu truyền thống, hôn nhân',
      career: 'Giáo dục, tôn giáo, tư vấn',
      advice: 'Học hỏi từ truyền thống và kinh nghiệm'
    },
    reversed: {
      meaning: 'Phản kháng truyền thống, giáo điều, cứng nhắc',
      love: 'Phá vỡ quy tắc, quan hệ không truyền thống',
      career: 'Đổi mới, phá vỡ quy tắc cũ',
      advice: 'Cân bằng giữa truyền thống và đổi mới'
    },
    symbol: '⛪',
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 'lovers',
    name: 'Đôi Tình Nhân',
    suit: 'Major Arcana',
    number: 6,
    element: 'Khí',
    keywords: ['Tình yêu', 'Lựa chọn', 'Hài hòa', 'Kết nối'],
    upright: {
      meaning: 'Tình yêu, lựa chọn quan trọng, hài hòa',
      love: 'Tình yêu đích thực, mối quan hệ hài hòa',
      career: 'Hợp tác thành công, đối tác tốt',
      advice: 'Lắng nghe trái tim khi đưa ra lựa chọn'
    },
    reversed: {
      meaning: 'Mất hài hòa, lựa chọn sai, chia ly',
      love: 'Xung đột, chia tay, tam giác tình yêu',
      career: 'Hợp tác thất bại, xung đột đối tác',
      advice: 'Cần suy nghĩ kỹ về các mối quan hệ'
    },
    symbol: '💕',
    color: 'from-pink-500 to-red-500'
  },
  {
    id: 'chariot',
    name: 'Xe Chiến',
    suit: 'Major Arcana',
    number: 7,
    element: 'Thủy',
    keywords: ['Chiến thắng', 'Ý chí', 'Kiểm soát', 'Tiến bộ'],
    upright: {
      meaning: 'Chiến thắng, ý chí mạnh mẽ, kiểm soát, tiến bộ',
      love: 'Vượt qua khó khăn trong tình yêu',
      career: 'Thành công nhờ nỗ lực, thăng tiến',
      advice: 'Kiên trì và tập trung vào mục tiêu'
    },
    reversed: {
      meaning: 'Mất kiểm soát, thiếu định hướng, thất bại',
      love: 'Mối quan hệ mất kiểm soát, xung đột',
      career: 'Thiếu định hướng, dự án thất bại',
      advice: 'Cần lấy lại quyền kiểm soát cuộc sống'
    },
    symbol: '🏆',
    color: 'from-blue-600 to-purple-600'
  }
];

const tarotSpreads = [
  {
    id: 'single',
    name: 'Một Lá Bài',
    description: 'Câu hỏi đơn giản, lời khuyên nhanh',
    cardCount: 1
  },
  {
    id: 'three-card',
    name: 'Ba Lá Bài',
    description: 'Quá khứ - Hiện tại - Tương lai',
    cardCount: 3
  },
  {
    id: 'love',
    name: 'Tình Yêu',
    description: 'Bạn - Người ấy - Mối quan hệ',
    cardCount: 3
  }
];

export default function TarotPage() {
  const [selectedSpread, setSelectedSpread] = useState<string>('single');
  const [reading, setReading] = useState<TarotReading | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [question, setQuestion] = useState('');

  const drawCards = () => {
    if (!question.trim()) {
      alert('Vui lòng nhập câu hỏi của bạn');
      return;
    }

    setIsDrawing(true);
    
    setTimeout(() => {
      const spread = tarotSpreads.find(s => s.id === selectedSpread)!;
      const shuffledCards = [...majorArcana].sort(() => Math.random() - 0.5);
      const drawnCards = shuffledCards.slice(0, spread.cardCount).map(card => ({
        ...card,
        isReversed: Math.random() < 0.3 // 30% chance of reversed
      }));

      const interpretation = generateInterpretation(drawnCards, selectedSpread);
      const advice = generateAdvice(drawnCards);

      const newReading: TarotReading = {
        cards: drawnCards,
        spread: spread.name,
        interpretation,
        advice
      };

      setReading(newReading);
      setIsDrawing(false);
    }, 2000);
  };

  const generateInterpretation = (cards: (TarotCard & { isReversed: boolean })[], spreadId: string): string => {
    if (spreadId === 'single') {
      const card = cards[0];
      return `Lá bài ${card.name} ${card.isReversed ? '(ngược)' : ''} xuất hiện để trả lời câu hỏi của bạn. ${card.isReversed ? card.reversed.meaning : card.upright.meaning}`;
    }
    
    if (spreadId === 'three-card') {
      return `Quá khứ được đại diện bởi ${cards[0].name}, hiện tại là ${cards[1].name}, và tương lai hướng tới ${cards[2].name}. Đây là hành trình phát triển của bạn.`;
    }
    
    if (spreadId === 'love') {
      return `Trong tình yêu, bạn được đại diện bởi ${cards[0].name}, người ấy là ${cards[1].name}, và mối quan hệ của hai bạn được thể hiện qua ${cards[2].name}.`;
    }
    
    return 'Các lá bài đã được rút để trả lời câu hỏi của bạn.';
  };

  const generateAdvice = (cards: (TarotCard & { isReversed: boolean })[]): string => {
    const advices = cards.map(card => 
      card.isReversed ? card.reversed.advice : card.upright.advice
    );
    
    if (advices.length === 1) {
      return advices[0];
    }
    
    return `Lời khuyên từ các lá bài: ${advices.join('. ')}. Hãy cân nhắc tất cả các khía cạnh này trong quyết định của bạn.`;
  };

  const resetReading = () => {
    setReading(null);
    setQuestion('');
  };

  return (
    <>
      <ContentHeader
        title="Bói Bài Tarot"
        description="Khám phá tương lai qua những lá bài Tarot huyền bí. Đặt câu hỏi và để các lá bài Tarot hướng dẫn bạn tìm ra câu trả lời."
        breadcrumb={[
          { label: "Trang Chủ", href: "/" },
          { label: "Bói Bài Tarot", href: "/tarot" },
        ]}
      />
      <div className="min-h-screen">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {!reading ? (
            <div className="space-y-8">
              {/* Question Input */}
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Đặt Câu Hỏi Của Bạn
                </h2>

                <div className="max-w-2xl mx-auto">
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Nhập câu hỏi bạn muốn hỏi các lá bài Tarot..."
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-golden focus:outline-none resize-none h-24"
                  />
                  <p className="text-gray-400 text-sm mt-2 text-center">
                    💡 Hãy đặt câu hỏi rõ ràng và tập trung vào điều bạn thực sự
                    muốn biết
                  </p>
                </div>
              </div>

              {/* Spread Selection */}
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Chọn Cách Bói
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {tarotSpreads.map((spread) => (
                    <button
                      key={spread.id}
                      onClick={() => setSelectedSpread(spread.id)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                        selectedSpread === spread.id
                          ? "border-golden bg-golden/10 shadow-lg shadow-golden/20"
                          : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-3">
                          {spread.id === "single" && "🃏"}
                          {spread.id === "three-card" && "🔮"}
                          {spread.id === "love" && "💕"}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {spread.name}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {spread.description}
                        </p>
                        <div className="mt-3 text-golden font-semibold">
                          {spread.cardCount} lá bài
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Draw Button */}
              <div className="text-center">
                <button
                  onClick={drawCards}
                  disabled={isDrawing}
                  className="bg-gradient-to-r from-golden to-yellow-500 text-black px-12 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDrawing ? (
                    <span className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Đang rút bài...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      🔮 Rút Bài Tarot
                    </span>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Reading Header */}
              <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Kết Quả Bói Bài - {reading.spread}
                  </h2>
                  <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20 mb-6">
                    <p className="text-gray-300 italic">"{question}"</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {reading.interpretation}
                  </p>
                </div>
              </div>

              {/* Cards Display */}
              <div className="grid md:grid-cols-3 gap-6 justify-center">
                {reading.cards.map((card, index) => (
                  <div
                    key={index}
                    className="cosmic-card rounded-3xl p-6 border border-gray-700/20"
                  >
                    <div className="text-center mb-6">
                      <div
                        className={`text-6xl mb-4 ${
                          card.isReversed ? "transform rotate-180" : ""
                        }`}
                      >
                        {card.symbol}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {card.name} {card.isReversed && "(Ngược)"}
                      </h3>
                      <div className="text-gray-400 text-sm mb-4">
                        {card.suit} • {card.element}
                      </div>

                      {/* Position Label */}
                      {reading.spread === "Ba Lá Bài" && (
                        <div className="text-golden font-semibold mb-4">
                          {index === 0 && "Quá Khứ"}
                          {index === 1 && "Hiện Tại"}
                          {index === 2 && "Tương Lai"}
                        </div>
                      )}
                      {reading.spread === "Tình Yêu" && (
                        <div className="text-golden font-semibold mb-4">
                          {index === 0 && "Bạn"}
                          {index === 1 && "Người Ấy"}
                          {index === 2 && "Mối Quan Hệ"}
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">
                          Ý Nghĩa:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {card.isReversed
                            ? card.reversed.meaning
                            : card.upright.meaning}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-pink-400 font-semibold mb-2">
                          Tình Yêu:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {card.isReversed
                            ? card.reversed.love
                            : card.upright.love}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold mb-2">
                          Sự Nghiệp:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {card.isReversed
                            ? card.reversed.career
                            : card.upright.career}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Advice */}
              <div className="bg-gradient-to-br from-golden/10 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-golden/20">
                <h3 className="text-2xl font-bold text-golden mb-4 text-center flex items-center justify-center gap-2">
                  <span>💡</span> Lời Khuyên Từ Tarot
                </h3>
                <p className="text-gray-300 leading-relaxed text-center text-lg">
                  {reading.advice}
                </p>
              </div>

              {/* Reset Button */}
              <div className="text-center">
                <button
                  onClick={resetReading}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
                >
                  🔄 Bói Lại
                </button>
              </div>
            </div>
          )}

          {/* Related Links */}
          <RelatedServices currentPage="/cards" />
        </div>
      </div>
    </>
  );
}
