'use client';

import ContentHeader from '@/components/ContentHeader';
import Link from 'next/link';
import { useState } from 'react';

interface PlayingCard {
  suit: string;
  rank: string;
  value: number;
  color: 'red' | 'black';
  symbol: string;
  meaning: {
    general: string;
    love: string;
    career: string;
    advice: string;
  };
}

interface CardReading {
  cards: PlayingCard[];
  method: string;
  interpretation: string;
  advice: string;
}

const suits = [
  { name: 'hearts', symbol: '♥️', color: 'red' as const, element: 'Tình yêu' },
  { name: 'diamonds', symbol: '♦️', color: 'red' as const, element: 'Tài chính' },
  { name: 'clubs', symbol: '♣️', color: 'black' as const, element: 'Sự nghiệp' },
  { name: 'spades', symbol: '♠️', color: 'black' as const, element: 'Thách thức' }
];

const ranks = [
  { name: 'A', value: 1, title: 'Át' },
  { name: '2', value: 2, title: 'Hai' },
  { name: '3', value: 3, title: 'Ba' },
  { name: '4', value: 4, title: 'Bốn' },
  { name: '5', value: 5, title: 'Năm' },
  { name: '6', value: 6, title: 'Sáu' },
  { name: '7', value: 7, title: 'Bảy' },
  { name: '8', value: 8, title: 'Tám' },
  { name: '9', value: 9, title: 'Chín' },
  { name: '10', value: 10, title: 'Mười' },
  { name: 'J', value: 11, title: 'Bồi' },
  { name: 'Q', value: 12, title: 'Đầm' },
  { name: 'K', value: 13, title: 'Già' }
];

const cardMeanings: Record<string, any> = {
  // Hearts (Cơ) - Tình yêu, cảm xúc
  'hearts-A': { general: 'Tình yêu mới, khởi đầu cảm xúc', love: 'Tình yêu đích thực sắp đến', career: 'Đam mê trong công việc', advice: 'Mở lòng đón nhận tình yêu' },
  'hearts-2': { general: 'Hợp tác, đối tác', love: 'Mối quan hệ hài hòa', career: 'Làm việc nhóm hiệu quả', advice: 'Hãy tin tưởng và hợp tác' },
  'hearts-3': { general: 'Niềm vui, bạn bè', love: 'Tình bạn phát triển thành tình yêu', career: 'Môi trường làm việc vui vẻ', advice: 'Tận hưởng những khoảnh khắc vui vẻ' },
  'hearts-4': { general: 'Ổn định cảm xúc', love: 'Tình yêu bền vững', career: 'Công việc ổn định', advice: 'Trân trọng những gì đã có' },
  'hearts-5': { general: 'Thay đổi cảm xúc', love: 'Biến động trong tình yêu', career: 'Cần thay đổi cách tiếp cận', advice: 'Chấp nhận sự thay đổi' },
  'hearts-6': { general: 'Hồi tưởng, kỷ niệm', love: 'Tình yêu từ quá khứ trở lại', career: 'Kinh nghiệm cũ hữu ích', advice: 'Học từ quá khứ nhưng hướng về tương lai' },
  'hearts-7': { general: 'Ảo tưởng, mơ mộng', love: 'Kỳ vọng không thực tế', career: 'Cần thực tế hơn', advice: 'Phân biệt giữa mơ ước và thực tế' },
  'hearts-8': { general: 'Rời bỏ, tìm kiếm mới', love: 'Cần thời gian một mình', career: 'Tìm kiếm cơ hội mới', advice: 'Đôi khi cần buông bỏ để tiến lên' },
  'hearts-9': { general: 'Hạnh phúc, thỏa mãn', love: 'Tình yêu viên mãn', career: 'Thành công và hài lòng', advice: 'Hãy biết ơn những gì có được' },
  'hearts-10': { general: 'Hạnh phúc gia đình', love: 'Hôn nhân hạnh phúc', career: 'Thành công lâu dài', advice: 'Chia sẻ niềm vui với người thân' },
  'hearts-J': { general: 'Người trẻ tuổi, tin nhắn tình yêu', love: 'Người yêu trẻ trung', career: 'Đồng nghiệp trẻ giúp đỡ', advice: 'Lắng nghe lời khuyên từ người trẻ' },
  'hearts-Q': { general: 'Người phụ nữ tốt bụng', love: 'Người yêu quan tâm', career: 'Sếp nữ hỗ trợ', advice: 'Tìm kiếm sự hỗ trợ từ phụ nữ' },
  'hearts-K': { general: 'Người đàn ông tốt bụng', love: 'Người yêu chín chắn', career: 'Sếp nam ủng hộ', advice: 'Học hỏi từ người có kinh nghiệm' },

  // Diamonds (Rô) - Tài chính, vật chất
  'diamonds-A': { general: 'Cơ hội tài chính mới', love: 'Tình yêu mang lại lợi ích', career: 'Dự án mới có lãi', advice: 'Nắm bắt cơ hội kiếm tiền' },
  'diamonds-2': { general: 'Cân bằng tài chính', love: 'Chia sẻ chi phí', career: 'Hợp tác kinh doanh', advice: 'Quản lý tài chính cẩn thận' },
  'diamonds-3': { general: 'Kỹ năng, tài năng', love: 'Thể hiện tài năng để thu hút', career: 'Được công nhận năng lực', advice: 'Phát triển kỹ năng của bạn' },
  'diamonds-4': { general: 'Tiết kiệm, bảo thủ', love: 'Tình yêu ổn định về mặt tài chính', career: 'Thu nhập ổn định', advice: 'Tiết kiệm cho tương lai' },
  'diamonds-5': { general: 'Khó khăn tài chính', love: 'Vấn đề tiền bạc ảnh hưởng tình yêu', career: 'Thu nhập không ổn định', advice: 'Cần hỗ trợ tài chính' },
  'diamonds-6': { general: 'Cho và nhận', love: 'Trao đổi quà cáp', career: 'Đầu tư có lãi', advice: 'Hãy rộng lượng nhưng có giới hạn' },
  'diamonds-7': { general: 'Kiên nhẫn chờ đợi', love: 'Tình yêu cần thời gian', career: 'Dự án chưa có kết quả', advice: 'Kiên nhẫn sẽ được đền đáp' },
  'diamonds-8': { general: 'Học hỏi, phát triển', love: 'Học cách yêu thương', career: 'Nâng cao kỹ năng', advice: 'Đầu tư vào bản thân' },
  'diamonds-9': { general: 'Thành công tài chính', love: 'Tình yêu mang lại thịnh vượng', career: 'Thu nhập cao', advice: 'Tận hưởng thành quả lao động' },
  'diamonds-10': { general: 'Giàu có, thịnh vượng', love: 'Hôn nhân giàu có', career: 'Sự nghiệp đỉnh cao', advice: 'Chia sẻ sự giàu có với người khác' },
  'diamonds-J': { general: 'Tin tức về tiền bạc', love: 'Tin vui về tài chính', career: 'Cơ hội kinh doanh', advice: 'Chú ý đến thông tin tài chính' },
  'diamonds-Q': { general: 'Phụ nữ giàu có', love: 'Người yêu có điều kiện', career: 'Khách hàng nữ quan trọng', advice: 'Học cách quản lý tài chính' },
  'diamonds-K': { general: 'Đàn ông thành đạt', love: 'Người yêu giàu có', career: 'Sếp hoặc đối tác giàu', advice: 'Học hỏi cách làm giàu' },

  // Clubs (Tép) - Sự nghiệp, công việc
  'clubs-A': { general: 'Khởi đầu mới trong sự nghiệp', love: 'Tình yêu qua công việc', career: 'Cơ hội việc làm mới', advice: 'Bắt đầu dự án mới' },
  'clubs-2': { general: 'Hợp tác trong công việc', love: 'Đối tác kinh doanh trở thành tình yêu', career: 'Làm việc nhóm', advice: 'Tìm kiếm đối tác phù hợp' },
  'clubs-3': { general: 'Sáng tạo, ý tưởng', love: 'Tình yêu sáng tạo', career: 'Dự án sáng tạo', advice: 'Thể hiện tính sáng tạo' },
  'clubs-4': { general: 'Nền tảng vững chắc', love: 'Tình yêu dựa trên sự hiểu biết', career: 'Công việc ổn định', advice: 'Xây dựng nền tảng vững chắc' },
  'clubs-5': { general: 'Cạnh tranh, xung đột', love: 'Ganh đua trong tình yêu', career: 'Cạnh tranh công việc', advice: 'Cạnh tranh lành mạnh' },
  'clubs-6': { general: 'Chiến thắng, thành công', love: 'Chinh phục được người yêu', career: 'Thăng tiến', advice: 'Tận hưởng thành công' },
  'clubs-7': { general: 'Thách thức, khó khăn', love: 'Vượt qua khó khăn trong tình yêu', career: 'Áp lực công việc', advice: 'Kiên trì vượt qua thử thách' },
  'clubs-8': { general: 'Tiến bộ nhanh', love: 'Tình yêu phát triển nhanh', career: 'Thăng tiến nhanh chóng', advice: 'Nắm bắt cơ hội' },
  'clubs-9': { general: 'Gần đạt được mục tiêu', love: 'Sắp có kết quả trong tình yêu', career: 'Sắp thành công', advice: 'Kiên trì thêm chút nữa' },
  'clubs-10': { general: 'Gánh nặng, trách nhiệm', love: 'Trách nhiệm trong tình yêu', career: 'Áp lực công việc lớn', advice: 'Chia sẻ gánh nặng với người khác' },
  'clubs-J': { general: 'Người trẻ năng động', love: 'Người yêu năng động', career: 'Đồng nghiệp trẻ tài năng', advice: 'Học hỏi từ người trẻ' },
  'clubs-Q': { general: 'Phụ nữ thông minh', love: 'Người yêu thông minh', career: 'Sếp nữ tài giỏi', advice: 'Học hỏi từ phụ nữ thông minh' },
  'clubs-K': { general: 'Đàn ông quyền lực', love: 'Người yêu có địa vị', career: 'Sếp hoặc đối tác quyền lực', advice: 'Tôn trọng người có kinh nghiệm' }
};

const fortuneMethods = [
  {
    id: 'single',
    name: 'Một Lá Bài',
    description: 'Rút một lá để biết vận may hôm nay',
    cardCount: 1,
    icon: '🃏'
  },
  {
    id: 'three-card',
    name: 'Ba Lá Bài',
    description: 'Quá khứ - Hiện tại - Tương lai',
    cardCount: 3,
    icon: '🔮'
  },
  {
    id: 'love',
    name: 'Tình Yêu',
    description: 'Bạn - Người ấy - Tương lai',
    cardCount: 3,
    icon: '💕'
  },
  {
    id: 'career',
    name: 'Sự Nghiệp',
    description: 'Hiện tại - Cơ hội - Lời khuyên',
    cardCount: 3,
    icon: '💼'
  }
];

export default function CardsPage() {
  const [selectedMethod, setSelectedMethod] = useState<string>('single');
  const [reading, setReading] = useState<CardReading | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [question, setQuestion] = useState('');

  const createDeck = (): PlayingCard[] => {
    const deck: PlayingCard[] = [];
    
    suits.forEach(suit => {
      ranks.forEach(rank => {
        const cardKey = `${suit.name}-${rank.name}`;
        const meaning = cardMeanings[cardKey] || {
          general: 'Ý nghĩa đặc biệt',
          love: 'Ảnh hưởng đến tình yêu',
          career: 'Ảnh hưởng đến sự nghiệp',
          advice: 'Lời khuyên cho bạn'
        };

        deck.push({
          suit: suit.name,
          rank: rank.name,
          value: rank.value,
          color: suit.color,
          symbol: `${rank.name}${suit.symbol}`,
          meaning
        });
      });
    });
    
    return deck;
  };

  const drawCards = () => {
    if (!question.trim()) {
      alert('Vui lòng nhập câu hỏi của bạn');
      return;
    }

    setIsDrawing(true);
    
    setTimeout(() => {
      const method = fortuneMethods.find(m => m.id === selectedMethod)!;
      const deck = createDeck();
      const shuffledDeck = deck.sort(() => Math.random() - 0.5);
      const drawnCards = shuffledDeck.slice(0, method.cardCount);

      const interpretation = generateInterpretation(drawnCards, selectedMethod);
      const advice = generateAdvice(drawnCards);

      const newReading: CardReading = {
        cards: drawnCards,
        method: method.name,
        interpretation,
        advice
      };

      setReading(newReading);
      setIsDrawing(false);
    }, 2000);
  };

  const generateInterpretation = (cards: PlayingCard[], methodId: string): string => {
    if (methodId === 'single') {
      const card = cards[0];
      return `Lá bài ${card.symbol} xuất hiện để trả lời câu hỏi của bạn. ${card.meaning.general}`;
    }
    
    if (methodId === 'three-card') {
      return `Quá khứ được thể hiện qua ${cards[0].symbol}, hiện tại là ${cards[1].symbol}, và tương lai hướng tới ${cards[2].symbol}.`;
    }
    
    if (methodId === 'love') {
      return `Trong tình yêu, bạn được đại diện bởi ${cards[0].symbol}, người ấy là ${cards[1].symbol}, và tương lai của hai bạn được thể hiện qua ${cards[2].symbol}.`;
    }
    
    if (methodId === 'career') {
      return `Sự nghiệp hiện tại của bạn được thể hiện qua ${cards[0].symbol}, cơ hội đang chờ đợi là ${cards[1].symbol}, và lời khuyên từ ${cards[2].symbol}.`;
    }
    
    return 'Các lá bài đã được rút để trả lời câu hỏi của bạn.';
  };

  const generateAdvice = (cards: PlayingCard[]): string => {
    const advices = cards.map(card => card.meaning.advice);
    
    if (advices.length === 1) {
      return advices[0];
    }
    
    return `Lời khuyên từ các lá bài: ${advices.join('. ')}. Hãy cân nhắc tất cả các khía cạnh này.`;
  };

  const resetReading = () => {
    setReading(null);
    setQuestion('');
  };

  const getSuitColor = (suit: string): string => {
    const suitInfo = suits.find(s => s.name === suit);
    return suitInfo?.color === 'red' ? 'text-red-400' : 'text-gray-300';
  };

  const getSuitElement = (suit: string): string => {
    const suitInfo = suits.find(s => s.name === suit);
    return suitInfo?.element || '';
  };

  return (
    <>
      <ContentHeader
        title="Bói Bài Tây"
        description="Khám phá vận mệnh qua 52 lá bài Tây truyền thống. Đặt câu hỏi và để các lá bài Tây hướng dẫn bạn tìm ra câu trả lời về tình yêu, sự nghiệp và cuộc sống."
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Bói Bài Tây', href: '/cards' },
        ]}
      />
      <div className="min-h-screen">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
        {!reading ? (
          <div className="space-y-8">
            {/* Question Input */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Đặt Câu Hỏi Của Bạn
              </h2>
              
              <div className="max-w-2xl mx-auto">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Nhập câu hỏi bạn muốn hỏi các lá bài..."
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-golden focus:outline-none resize-none h-24"
                />
                <p className="text-gray-400 text-sm mt-2 text-center">
                  💡 Hãy đặt câu hỏi cụ thể về tình yêu, sự nghiệp hoặc cuộc sống
                </p>
              </div>
            </div>

            {/* Method Selection */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Chọn Cách Bói
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fortuneMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                      selectedMethod === method.id
                        ? 'border-golden bg-golden/10 shadow-lg shadow-golden/20'
                        : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-3">{method.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2">{method.name}</h3>
                      <p className="text-gray-300 text-sm mb-3">{method.description}</p>
                      <div className="text-golden font-semibold">
                        {method.cardCount} lá bài
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
                    🃏 Rút Bài Tây
                  </span>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Reading Header */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Kết Quả Bói Bài - {reading.method}
                </h2>
                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 mb-6">
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
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/20">
                  <div className="text-center mb-6">
                    <div className={`text-6xl mb-4 ${getSuitColor(card.suit)}`}>
                      {card.symbol}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {ranks.find(r => r.name === card.rank)?.title} {getSuitElement(card.suit)}
                    </h3>
                    <div className="text-gray-400 text-sm mb-4">
                      Giá trị: {card.value}
                    </div>
                    
                    {/* Position Label */}
                    {reading.method === 'Ba Lá Bài' && (
                      <div className="text-golden font-semibold mb-4">
                        {index === 0 && 'Quá Khứ'}
                        {index === 1 && 'Hiện Tại'}
                        {index === 2 && 'Tương Lai'}
                      </div>
                    )}
                    {reading.method === 'Tình Yêu' && (
                      <div className="text-golden font-semibold mb-4">
                        {index === 0 && 'Bạn'}
                        {index === 1 && 'Người Ấy'}
                        {index === 2 && 'Tương Lai'}
                      </div>
                    )}
                    {reading.method === 'Sự Nghiệp' && (
                      <div className="text-golden font-semibold mb-4">
                        {index === 0 && 'Hiện Tại'}
                        {index === 1 && 'Cơ Hội'}
                        {index === 2 && 'Lời Khuyên'}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-400 font-semibold mb-2">Ý Nghĩa Chung:</h4>
                      <p className="text-gray-300 text-sm">
                        {card.meaning.general}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-pink-400 font-semibold mb-2">Tình Yêu:</h4>
                      <p className="text-gray-300 text-sm">
                        {card.meaning.love}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-blue-400 font-semibold mb-2">Sự Nghiệp:</h4>
                      <p className="text-gray-300 text-sm">
                        {card.meaning.career}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Advice */}
            <div className="bg-gradient-to-br from-golden/10 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-golden/20">
              <h3 className="text-2xl font-bold text-golden mb-4 text-center flex items-center justify-center gap-2">
                <span>💡</span> Lời Khuyên Từ Các Lá Bài
              </h3>
              <p className="text-gray-300 leading-relaxed text-center text-lg">
                {reading.advice}
              </p>
            </div>

            {/* Reset Button */}
            <div className="text-center">
              <button
                onClick={resetReading}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
              >
                🔄 Bói Lại
              </button>
            </div>
          </div>
        )}

        {/* Related Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Khám Phá Thêm</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/numbers/meaning"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🔢 Ý Nghĩa Con Số
            </Link>
            <Link
              href="/tarot"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🔮 Bói Bài Tarot
            </Link>
            <Link
              href="/games"
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🎮 Minigame Bói
            </Link>
            <Link
              href="/numerology"
              className="bg-gradient-to-r from-golden to-yellow-500 text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
            >
              🔢 Thần Số Học
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
