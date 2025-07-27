"use client";

import { BlockContent } from "@/components/BlockContent";
import ContentHeader from "@/components/ContentHeader";
import RelatedServices from "@/components/RelatedServices";
import { useState } from "react";

interface PlayingCard {
  suit: string;
  rank: string;
  value: number;
  color: "red" | "black";
  symbol: string;
  meaning: {
    general: string;
    love: string;
    career: string;
    advice: string;
  };
  icon: string;
}

interface CardReading {
  cards: PlayingCard[];
  method: string;
  interpretation: string;
  advice: string;
}

const suits = [
  { name: "hearts", symbol: "♥️", color: "red" as const, element: "Tình yêu" },
  {
    name: "diamonds",
    symbol: "♦️",
    color: "red" as const,
    element: "Tài chính",
  },
  {
    name: "clubs",
    symbol: "♣️",
    color: "black" as const,
    element: "Sự nghiệp",
  },
  {
    name: "spades",
    symbol: "♠️",
    color: "black" as const,
    element: "Thách thức",
  },
];

const ranks = [
  { name: "A", value: 1, title: "Át" },
  { name: "2", value: 2, title: "Hai" },
  { name: "3", value: 3, title: "Ba" },
  { name: "4", value: 4, title: "Bốn" },
  { name: "5", value: 5, title: "Năm" },
  { name: "6", value: 6, title: "Sáu" },
  { name: "7", value: 7, title: "Bảy" },
  { name: "8", value: 8, title: "Tám" },
  { name: "9", value: 9, title: "Chín" },
  { name: "10", value: 10, title: "Mười" },
  { name: "J", value: 11, title: "Bồi" },
  { name: "Q", value: 12, title: "Đầm" },
  { name: "K", value: 13, title: "Già" },
];

const cardMeanings: Record<string, any> = {
  // Hearts (Cơ) - Tình yêu, cảm xúc
  "hearts-A": {
    general: "Tình yêu mới, khởi đầu cảm xúc",
    love: "Tình yêu đích thực sắp đến",
    career: "Đam mê trong công việc",
    advice: "Mở lòng đón nhận tình yêu",
    icon: "cards/card_r2_c0.png",
  },
  "hearts-2": {
    general: "Hợp tác, đối tác",
    love: "Mối quan hệ hài hòa",
    career: "Làm việc nhóm hiệu quả",
    advice: "Hãy tin tưởng và hợp tác",
    icon: "cards/card_r2_c1.png",
  },
  "hearts-3": {
    general: "Niềm vui, bạn bè",
    love: "Tình bạn phát triển thành tình yêu",
    career: "Môi trường làm việc vui vẻ",
    advice: "Tận hưởng những khoảnh khắc vui vẻ",
    icon: "cards/card_r2_c2.png",
  },
  "hearts-4": {
    general: "Ổn định cảm xúc",
    love: "Tình yêu bền vững",
    career: "Công việc ổn định",
    advice: "Trân trọng những gì đã có",
    icon: "cards/card_r2_c3.png",
  },
  "hearts-5": {
    general: "Thay đổi cảm xúc",
    love: "Biến động trong tình yêu",
    career: "Cần thay đổi cách tiếp cận",
    advice: "Chấp nhận sự thay đổi",
    icon: "cards/card_r2_c4.png",
  },
  "hearts-6": {
    general: "Hồi tưởng, kỷ niệm",
    love: "Tình yêu từ quá khứ trở lại",
    career: "Kinh nghiệm cũ hữu ích",
    advice: "Học từ quá khứ nhưng hướng về tương lai",
    icon: "cards/card_r2_c5.png",
  },
  "hearts-7": {
    general: "Ảo tưởng, mơ mộng",
    love: "Kỳ vọng không thực tế",
    career: "Cần thực tế hơn",
    advice: "Phân biệt giữa mơ ước và thực tế",
    icon: "cards/card_r2_c6.png",
  },
  "hearts-8": {
    general: "Rời bỏ, tìm kiếm mới",
    love: "Cần thời gian một mình",
    career: "Tìm kiếm cơ hội mới",
    advice: "Đôi khi cần buông bỏ để tiến lên",
    icon: "cards/card_r2_c7.png",
  },
  "hearts-9": {
    general: "Hạnh phúc, thỏa mãn",
    love: "Tình yêu viên mãn",
    career: "Thành công và hài lòng",
    advice: "Hãy biết ơn những gì có được",
    icon: "cards/card_r2_c8.png",
  },
  "hearts-10": {
    general: "Hạnh phúc gia đình",
    love: "Hôn nhân hạnh phúc",
    career: "Thành công lâu dài",
    advice: "Chia sẻ niềm vui với người thân",
    icon: "cards/card_r2_c9.png",
  },
  "hearts-J": {
    general: "Người trẻ tuổi, tin nhắn tình yêu",
    love: "Người yêu trẻ trung",
    career: "Đồng nghiệp trẻ giúp đỡ",
    advice: "Lắng nghe lời khuyên từ người trẻ",
    icon: "cards/card_r2_c10.png",
  },
  "hearts-Q": {
    general: "Người phụ nữ tốt bụng",
    love: "Người yêu quan tâm",
    career: "Sếp nữ hỗ trợ",
    advice: "Tìm kiếm sự hỗ trợ từ phụ nữ",
    icon: "cards/card_r2_c11.png",
  },
  "hearts-K": {
    general: "Người đàn ông tốt bụng",
    love: "Người yêu chín chắn",
    career: "Sếp nam ủng hộ",
    advice: "Học hỏi từ người có kinh nghiệm",
    icon: "cards/card_r2_c12.png",
  },

  // Diamonds (Rô) - Tài chính, vật chất
  "diamonds-A": {
    general: "Cơ hội tài chính mới",
    love: "Tình yêu mang lại lợi ích",
    career: "Dự án mới có lãi",
    advice: "Nắm bắt cơ hội kiếm tiền",
    icon: "cards/card_r1_c0.png",
  },
  "diamonds-2": {
    general: "Cân bằng tài chính",
    love: "Chia sẻ chi phí",
    career: "Hợp tác kinh doanh",
    advice: "Quản lý tài chính cẩn thận",
    icon: "cards/card_r1_c1.png",
  },
  "diamonds-3": {
    general: "Kỹ năng, tài năng",
    love: "Thể hiện tài năng để thu hút",
    career: "Được công nhận năng lực",
    advice: "Phát triển kỹ năng của bạn",
    icon: "cards/card_r1_c2.png",
  },
  "diamonds-4": {
    general: "Tiết kiệm, bảo thủ",
    love: "Tình yêu ổn định về mặt tài chính",
    career: "Thu nhập ổn định",
    advice: "Tiết kiệm cho tương lai",
    icon: "cards/card_r1_c3.png",
  },
  "diamonds-5": {
    general: "Khó khăn tài chính",
    love: "Vấn đề tiền bạc ảnh hưởng tình yêu",
    career: "Thu nhập không ổn định",
    advice: "Cần hỗ trợ tài chính",
    icon: "cards/card_r1_c4.png",
  },
  "diamonds-6": {
    general: "Cho và nhận",
    love: "Trao đổi quà cáp",
    career: "Đầu tư có lãi",
    advice: "Hãy rộng lượng nhưng có giới hạn",
    icon: "cards/card_r1_c5.png",
  },
  "diamonds-7": {
    general: "Kiên nhẫn chờ đợi",
    love: "Tình yêu cần thời gian",
    career: "Dự án chưa có kết quả",
    advice: "Kiên nhẫn sẽ được đền đáp",
    icon: "cards/card_r1_c6.png",
  },
  "diamonds-8": {
    general: "Học hỏi, phát triển",
    love: "Học cách yêu thương",
    career: "Nâng cao kỹ năng",
    advice: "Đầu tư vào bản thân",
    icon: "cards/card_r1_c7.png",
  },
  "diamonds-9": {
    general: "Thành công tài chính",
    love: "Tình yêu mang lại thịnh vượng",
    career: "Thu nhập cao",
    advice: "Tận hưởng thành quả lao động",
    icon: "cards/card_r1_c8.png",
  },
  "diamonds-10": {
    general: "Giàu có, thịnh vượng",
    love: "Hôn nhân giàu có",
    career: "Sự nghiệp đỉnh cao",
    advice: "Chia sẻ sự giàu có với người khác",
    icon: "cards/card_r1_c9.png",
  },
  "diamonds-J": {
    general: "Tin tức về tiền bạc",
    love: "Tin vui về tài chính",
    career: "Cơ hội kinh doanh",
    advice: "Chú ý đến thông tin tài chính",
    icon: "cards/card_r1_c10.png",
  },
  "diamonds-Q": {
    general: "Phụ nữ giàu có",
    love: "Người yêu có điều kiện",
    career: "Khách hàng nữ quan trọng",
    advice: "Học cách quản lý tài chính",
    icon: "cards/card_r1_c11.png",
  },
  "diamonds-K": {
    general: "Đàn ông thành đạt",
    love: "Người yêu giàu có",
    career: "Sếp hoặc đối tác giàu",
    advice: "Học hỏi cách làm giàu",
    icon: "cards/card_r1_c12.png",
  },

  // Clubs (Tép) - Sự nghiệp, công việc
  "clubs-A": {
    general: "Khởi đầu mới trong sự nghiệp",
    love: "Tình yêu qua công việc",
    career: "Cơ hội việc làm mới",
    advice: "Bắt đầu dự án mới",
    icon: "cards/card_r0_c0.png",
  },
  "clubs-2": {
    general: "Hợp tác trong công việc",
    love: "Đối tác kinh doanh trở thành tình yêu",
    career: "Làm việc nhóm",
    advice: "Tìm kiếm đối tác phù hợp",
    icon: "cards/card_r0_c1.png",
  },
  "clubs-3": {
    general: "Sáng tạo, ý tưởng",
    love: "Tình yêu sáng tạo",
    career: "Dự án sáng tạo",
    advice: "Thể hiện tính sáng tạo",
    icon: "cards/card_r0_c2.png",
  },
  "clubs-4": {
    general: "Nền tảng vững chắc",
    love: "Tình yêu dựa trên sự hiểu biết",
    career: "Công việc ổn định",
    advice: "Xây dựng nền tảng vững chắc",
    icon: "cards/card_r0_c3.png",
  },
  "clubs-5": {
    general: "Cạnh tranh, xung đột",
    love: "Ganh đua trong tình yêu",
    career: "Cạnh tranh công việc",
    advice: "Cạnh tranh lành mạnh",
    icon: "cards/card_r0_c4.png",
  },
  "clubs-6": {
    general: "Chiến thắng, thành công",
    love: "Chinh phục được người yêu",
    career: "Thăng tiến",
    advice: "Tận hưởng thành công",
    icon: "cards/card_r0_c5.png",
  },
  "clubs-7": {
    general: "Thách thức, khó khăn",
    love: "Vượt qua khó khăn trong tình yêu",
    career: "Áp lực công việc",
    advice: "Kiên trì vượt qua thử thách",
    icon: "cards/card_r0_c6.png",
  },
  "clubs-8": {
    general: "Tiến bộ nhanh",
    love: "Tình yêu phát triển nhanh",
    career: "Thăng tiến nhanh chóng",
    advice: "Nắm bắt cơ hội",
    icon: "cards/card_r0_c7.png",
  },
  "clubs-9": {
    general: "Gần đạt được mục tiêu",
    love: "Sắp có kết quả trong tình yêu",
    career: "Sắp thành công",
    advice: "Kiên trì thêm chút nữa",
    icon: "cards/card_r0_c8.png",
  },
  "clubs-10": {
    general: "Gánh nặng, trách nhiệm",
    love: "Trách nhiệm trong tình yêu",
    career: "Áp lực công việc lớn",
    advice: "Chia sẻ gánh nặng với người khác",
    icon: "cards/card_r0_c9.png",
  },
  "clubs-J": {
    general: "Người trẻ năng động",
    love: "Người yêu năng động",
    career: "Đồng nghiệp trẻ tài năng",
    advice: "Học hỏi từ người trẻ",
    icon: "cards/card_r0_c10.png",
  },
  "clubs-Q": {
    general: "Phụ nữ thông minh",
    love: "Người yêu thông minh",
    career: "Sếp nữ tài giỏi",
    advice: "Học hỏi từ phụ nữ thông minh",
    icon: "cards/card_r0_c11.png",
  },
  "clubs-K": {
    general: "Đàn ông quyền lực",
    love: "Người yêu có địa vị",
    career: "Sếp hoặc đối tác quyền lực",
    advice: "Tôn trọng người có kinh nghiệm",
    icon: "cards/card_r0_c12.png",
  },

  // Spades (Bích) - Thử thách, trí tuệ
  "spades-A": {
    general: "Khởi đầu trí tuệ, sự thật hé lộ",
    love: "Sự thật trong mối quan hệ được phơi bày",
    career: "Ý tưởng đột phá",
    advice: "Hãy trung thực với bản thân",
    icon: "cards/card_r3_c0.png",
  },
  "spades-2": {
    general: "Lưỡng lự, xung đột nội tâm",
    love: "Chưa rõ ràng tình cảm",
    career: "Phân vân giữa hai hướng đi",
    advice: "Nghe theo trực giác",
    icon: "cards/card_r3_c1.png",
  },
  "spades-3": {
    general: "Tổn thương, đau lòng",
    love: "Chia ly hoặc hiểu lầm",
    career: "Căng thẳng trong công việc",
    advice: "Hàn gắn hoặc học cách buông bỏ",
    icon: "cards/card_r3_c2.png",
  },
  "spades-4": {
    general: "Nghỉ ngơi, tĩnh tâm",
    love: "Khoảng lặng trong tình cảm",
    career: "Cần thời gian hồi phục",
    advice: "Hãy dành thời gian nghỉ ngơi",
    icon: "cards/card_r3_c3.png",
  },
  "spades-5": {
    general: "Tranh cãi, bất đồng",
    love: "Mâu thuẫn trong mối quan hệ",
    career: "Môi trường cạnh tranh không lành mạnh",
    advice: "Chọn lựa chiến thắng hay hòa bình",
    icon: "cards/card_r3_c4.png",
  },
  "spades-6": {
    general: "Chuyển mình, di chuyển",
    love: "Đi đến sự thấu hiểu",
    career: "Chuyển việc hoặc cải thiện tình hình",
    advice: "Tiến về phía trước",
    icon: "cards/card_r3_c5.png",
  },
  "spades-7": {
    general: "Lừa dối, toan tính",
    love: "Cẩn trọng với sự không trung thực",
    career: "Ai đó không minh bạch",
    advice: "Cảnh giác và giữ kín kế hoạch",
    icon: "cards/card_r3_c6.png",
  },
  "spades-8": {
    general: "Bế tắc, bị giới hạn",
    love: "Cảm thấy mắc kẹt trong mối quan hệ",
    career: "Thiếu lựa chọn rõ ràng",
    advice: "Suy nghĩ thông suốt để thoát ra",
    icon: "cards/card_r3_c7.png",
  },
  "spades-9": {
    general: "Lo lắng, mất ngủ",
    love: "Áp lực tâm lý trong tình cảm",
    career: "Căng thẳng kéo dài",
    advice: "Đừng tự làm khổ bản thân",
    icon: "cards/card_r3_c8.png",
  },
  "spades-10": {
    general: "Kết thúc đau đớn",
    love: "Chấm dứt một mối quan hệ độc hại",
    career: "Thoát khỏi môi trường tiêu cực",
    advice: "Kết thúc để bắt đầu mới",
    icon: "cards/card_r3_c9.png",
  },
  "spades-J": {
    general: "Người trẻ sắc sảo",
    love: "Người yêu phân tích, suy nghĩ nhiều",
    career: "Đồng nghiệp mưu trí",
    advice: "Dùng lý trí nhiều hơn cảm xúc",
    icon: "cards/card_r3_c10.png",
  },
  "spades-Q": { 
    general: "Phụ nữ thông minh, quyết đoán",
    love: "Người yêu lý trí và độc lập",
    career: "Cấp trên nghiêm khắc nhưng công bằng",
    advice: "Hành động với lý trí và công bằng",
    icon: "cards/card_r3_c11.png",
  },
  "spades-K": {
    general: "Đàn ông quyền lực, nghiêm túc",
    love: "Người yêu trưởng thành, nguyên tắc",
    career: "Người lãnh đạo cứng rắn",
    advice: "Tuân theo luật lệ, hành xử chính trực",
    icon: "cards/card_r3_c12.png",
  },
};

const fortuneMethods = [
  {
    id: "single",
    name: "Một Lá Bài",
    description: "Rút một lá để biết vận may hôm nay",
    cardCount: 1,
    icon: "🃏",
  },
  {
    id: "three-card",
    name: "Ba Lá Bài",
    description: "Quá khứ - Hiện tại - Tương lai",
    cardCount: 3,
    icon: "🔮",
  },
  {
    id: "love",
    name: "Tình Yêu",
    description: "Bạn - Người ấy - Tương lai",
    cardCount: 3,
    icon: "💕",
  },
  {
    id: "career",
    name: "Sự Nghiệp",
    description: "Hiện tại - Cơ hội - Lời khuyên",
    cardCount: 3,
    icon: "💼",
  },
];

export default function CardsPage() {
  const [selectedMethod, setSelectedMethod] = useState<string>("single");
  const [reading, setReading] = useState<CardReading | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [question, setQuestion] = useState("");


  const createDeck = (): PlayingCard[] => {
    const deck: PlayingCard[] = [];

    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        const cardKey = `${suit.name}-${rank.name}`;
        const meaning = cardMeanings[cardKey] || {
          general: "Ý nghĩa đặc biệt",
          love: "Ảnh hưởng đến tình yêu",
          career: "Ảnh hưởng đến sự nghiệp",
          advice: "Lời khuyên cho bạn",
          icon: "cards/card_back.png",
        };

        deck.push({
          suit: suit.name,
          rank: rank.name,
          value: rank.value,
          color: suit.color,
          symbol: `${rank.name}${suit.symbol}`,
          meaning,
          icon: meaning.icon,
        });
      });
    });

    return deck;
  };

  const drawCards = () => {
    if (!question.trim()) {
      alert("Vui lòng nhập câu hỏi của bạn");
      return;
    }

    setIsDrawing(true);

    setTimeout(() => {
      const method = fortuneMethods.find((m) => m.id === selectedMethod)!;
      const deck = createDeck();
      const shuffledDeck = deck.sort(() => Math.random() - 0.5);
      const drawnCards = shuffledDeck.slice(0, method.cardCount);

      const interpretation = generateInterpretation(drawnCards, selectedMethod);
      const advice = generateAdvice(drawnCards);

      const newReading: CardReading = {
        cards: drawnCards,
        method: method.name,
        interpretation,
        advice,
      };

      setReading(newReading);
      setIsDrawing(false);
    }, 2000);
  };

  const generateInterpretation = (
    cards: PlayingCard[],
    methodId: string
  ): string => {
    if (methodId === "single") {
      const card = cards[0];
      return `Lá bài ${card.symbol} xuất hiện để trả lời câu hỏi của bạn. ${card.meaning.general}`;
    }

    if (methodId === "three-card") {
      return `Quá khứ được thể hiện qua ${cards[0].symbol}, hiện tại là ${cards[1].symbol}, và tương lai hướng tới ${cards[2].symbol}.`;
    }

    if (methodId === "love") {
      return `Trong tình yêu, bạn được đại diện bởi ${cards[0].symbol}, người ấy là ${cards[1].symbol}, và tương lai của hai bạn được thể hiện qua ${cards[2].symbol}.`;
    }

    if (methodId === "career") {
      return `Sự nghiệp hiện tại của bạn được thể hiện qua ${cards[0].symbol}, cơ hội đang chờ đợi là ${cards[1].symbol}, và lời khuyên từ ${cards[2].symbol}.`;
    }

    return "Các lá bài đã được rút để trả lời câu hỏi của bạn.";
  };

  const generateAdvice = (cards: PlayingCard[]): string => {
    const advices = cards.map((card) => card.meaning.advice);

    if (advices.length === 1) {
      return advices[0];
    }

    return `Lời khuyên từ các lá bài: ${advices.join(
      ". "
    )}. Hãy cân nhắc tất cả các khía cạnh này.`;
  };

  const resetReading = () => {
    setReading(null);
    setQuestion("");
  };

  const getSuitColor = (suit: string): string => {
    const suitInfo = suits.find((s) => s.name === suit);
    return suitInfo?.color === "red" ? "text-red-400" : "text-gray-300";
  };

  const getSuitElement = (suit: string): string => {
    const suitInfo = suits.find((s) => s.name === suit);
    return suitInfo?.element || "";
  };

  return (
    <>

    
      <ContentHeader
        title="Bói Bài Tây"
        description="Khám phá vận mệnh qua 52 lá bài Tây truyền thống. Đặt câu hỏi và để các lá bài Tây hướng dẫn bạn tìm ra câu trả lời về tình yêu, sự nghiệp và cuộc sống."
        breadcrumb={[
          { label: "Trang Chủ", href: "/" },
          { label: "Bói Bài Tây", href: "/boi-bai-tay" },
        ]}
      />
      <div className="min-h-screen">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {!reading ? (
            <div className="space-y-8">
              {/* Question Input */}
              <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20">
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
                    💡 Hãy đặt câu hỏi cụ thể về tình yêu, sự nghiệp hoặc cuộc
                    sống
                  </p>
                </div>
              </div>

              {/* Method Selection */}
              <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20">
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
                          ? "border-golden bg-golden/10 shadow-lg shadow-golden/20"
                          : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-3">{method.icon}</div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {method.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">
                          {method.description}
                        </p>
                        <div className="text-golden font-semibold">
                          {method.cardCount} lá bài
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Draw Button */}
              <div className="text-center mb-8">
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
              <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20">
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
                  <div
                    key={index}
                    className="cosmic-card rounded-3xl p-6 border border-gray-700/20"
                  >
                    <div className="text-center mb-6">
                      <div
                        className="mb-2 flex justify-center items-center"
                      >
                        <img src={card.icon} alt="Card" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {ranks.find((r) => r.name === card.rank)?.title}{" "}
                        {getSuitElement(card.suit)}
                      </h3>
                      <div className="text-gray-400 text-sm mb-4">
                        Giá trị: {card.value}
                      </div>

                      {/* Position Label */}
                      {reading.method === "Ba Lá Bài" && (
                        <div className="text-golden font-semibold mb-4">
                          {index === 0 && "Quá Khứ"}
                          {index === 1 && "Hiện Tại"}
                          {index === 2 && "Tương Lai"}
                        </div>
                      )}
                      {reading.method === "Tình Yêu" && (
                        <div className="text-golden font-semibold mb-4">
                          {index === 0 && "Bạn"}
                          {index === 1 && "Người Ấy"}
                          {index === 2 && "Tương Lai"}
                        </div>
                      )}
                      {reading.method === "Sự Nghiệp" && (
                        <div className="text-golden font-semibold mb-4">
                          {index === 0 && "Hiện Tại"}
                          {index === 1 && "Cơ Hội"}
                          {index === 2 && "Lời Khuyên"}
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">
                          Ý Nghĩa Chung:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {card.meaning.general}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-pink-400 font-semibold mb-2">
                          Tình Yêu:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {card.meaning.love}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold mb-2">
                          Sự Nghiệp:
                        </h4>
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
          <BlockContent>{content}</BlockContent>
          {/* Related Links */}
          <RelatedServices currentPage="/boi-bai-tay" />
        </div>
      </div>
    </>
  );
}

const content = `

## Bói Bài Tây: Giải Mã Những Thông Điệp Ẩn Giấu Trong 52 Lá Bài

**Bói bài Tây** là một trong những hình thức bói toán dân gian phổ biến, sử dụng bộ bài 52 lá quen thuộc để tìm kiếm lời giải đáp cho những thắc mắc trong cuộc sống, từ tình yêu, sự nghiệp đến vận mệnh cá nhân. Dù mang tính chất giải trí và tâm linh nhiều hơn là khoa học, việc giải mã ý nghĩa các lá bài vẫn thu hút sự tò mò của nhiều người bởi tính biểu tượng và khả năng kết nối trực giác mà nó mang lại.

---

### Bộ Bài Tây và Những Ý Nghĩa Biểu Tượng

Bộ bài Tây 52 lá không chỉ đơn thuần là công cụ giải trí mà còn ẩn chứa nhiều tầng ý nghĩa biểu tượng thú vị:

* **52 lá bài** tượng trưng cho **52 tuần** trong một năm.
* **4 chất (Cơ, Rô, Chuồn, Bích)** đại diện cho **4 mùa** Xuân, Hạ, Thu, Đông, thể hiện sự tuần hoàn của thời gian và các yếu tố trong cuộc sống.
* **Mỗi chất có 13 lá** (từ Át đến K) có thể tượng trưng cho **13 tháng âm lịch** hoặc các giai đoạn trong một chu kỳ.
* **Tổng giá trị các lá bài** (khi tính Át là 1, J=11, Q=12, K=13) là 364, cộng thêm lá Joker sẽ là 365, tương ứng với số ngày trong một năm. Nếu tính cả hai lá Joker, tổng là 366, tượng trưng cho năm nhuận.

---

### Ý Nghĩa Của Từng Chất Bài Trong Bói Toán

Mỗi chất bài trong bộ bài Tây mang một năng lượng và ý nghĩa riêng biệt khi được sử dụng để bói:

#### 1. Cơ (Heart - Trái Tim) - Yếu tố Nước
* **Biểu tượng:** Tình yêu, cảm xúc, các mối quan hệ, gia đình, sự chữa lành và trực giác.
* **Ý nghĩa khi bói:** Thường mang đến những thông điệp về tình cảm, sự hòa hợp, niềm vui, sự lãng mạn, hoặc đôi khi là nỗi buồn và sự tan vỡ trong các mối quan hệ. Lá bài Cơ thường liên quan đến thế giới nội tâm và cảm xúc.

#### 2. Rô (Diamond - Kim Cương) - Yếu tố Đất
* **Biểu tượng:** Tiền bạc, tài sản, sự nghiệp, vật chất, sự ổn định, may mắn và thành công.
* **Ý nghĩa khi bói:** Đại diện cho các vấn đề liên quan đến tài chính, công việc, kinh doanh, sự phát triển vật chất. Lá bài Rô thường chỉ ra cơ hội, thành công, hoặc những thử thách về tiền bạc và sự nghiệp.

#### 3. Chuồn (Club - Gậy/Cỏ Ba Lá) - Yếu tố Lửa
* **Biểu tượng:** Kiến thức, trí tuệ, sự học hỏi, giao tiếp, sáng tạo, các hoạt động xã hội và may mắn.
* **Ý nghĩa khi bói:** Liên quan đến sự nghiệp, học vấn, các cuộc gặp gỡ, giao tiếp, những kế hoạch và dự án. Lá bài Chuồn thường mang ý nghĩa về sự phát triển cá nhân, các mối quan hệ xã hội và sự thăng tiến.

#### 4. Bích (Spade - Lưỡi Kiếm) - Yếu tố Khí
* **Biểu tượng:** Thử thách, khó khăn, xung đột, sự mất mát, sự thay đổi và những vấn đề liên quan đến tinh thần.
* **Ý nghĩa khi bói:** Thường cảnh báo về những trở ngại, mâu thuẫn, bệnh tật, hoặc sự kết thúc. Tuy nhiên, lá Bích cũng có thể tượng trưng cho sự dũng cảm khi đối mặt với khó khăn và khả năng vượt qua chúng.

---

### Các Lá Bài Cụ Thể và Ý Nghĩa Phổ Biến

Ngoài ý nghĩa chung của từng chất, mỗi lá bài riêng lẻ cũng mang thông điệp cụ thể:

* **Át (A):** Thường là khởi đầu, cơ hội, tiềm năng lớn. Át Cơ là khởi đầu tình yêu, Át Rô là khởi đầu tài lộc.
* **Các lá từ 2 đến 10:** Thể hiện mức độ và diễn biến của các vấn đề liên quan đến chất bài đó. Ví dụ, số nhỏ thường là những sự kiện nhỏ, số lớn có thể là sự kiện quan trọng hơn.
* **J (Bồi):** Đại diện cho một người trẻ tuổi, một thông điệp, hoặc một người mang tin tức. Có thể là một người bạn, người yêu, hoặc đồng nghiệp tùy theo chất bài.
* **Q (Đầm):** Đại diện cho một người phụ nữ, thường là người quan trọng trong cuộc đời người xem (mẹ, vợ, người yêu, bạn bè thân thiết).
* **K (Già):** Đại diện cho một người đàn ông, thường là người có quyền lực, ảnh hưởng (cha, chồng, sếp, cố vấn).

**(Lưu ý: Ý nghĩa cụ thể của từng lá bài còn phụ thuộc vào cách diễn giải của từng người xem bói và trải bài cụ thể.)**

---

### Cách Thức Bói Bài Tây Phổ Biến

Có nhiều cách bói bài Tây khác nhau, từ đơn giản đến phức tạp, tùy thuộc vào mục đích và sự lựa chọn của người bói:

1.  **Bói 3 Lá (Quá khứ - Hiện tại - Tương lai):** Đây là phương pháp cơ bản nhất. Người xem sẽ tập trung vào câu hỏi và rút 3 lá bài. Lá đầu tiên đại diện cho quá khứ (nguyên nhân, nền tảng), lá thứ hai cho hiện tại (tình hình đang diễn ra), và lá thứ ba cho tương lai (kết quả hoặc xu hướng).
2.  **Bói Tình Duyên theo tên:** Thường sử dụng một số lượng lá bài nhất định hoặc dàn bài theo số chữ cái trong tên để tìm hiểu về mối quan hệ tình cảm.
3.  **Bói Vấn Đề Cụ Thể:** Khi có một câu hỏi chi tiết, người xem có thể rút một số lá bài nhất định và kết nối ý nghĩa của chúng để tìm lời khuyên.

**Quan trọng nhất khi bói bài Tây:**

* **Tập trung và giữ tâm trí tĩnh lặng:** Giúp kết nối tốt hơn với năng lượng của bài.
* **Đặt câu hỏi rõ ràng:** Câu hỏi càng cụ thể, câu trả lời càng dễ được diễn giải.
* **Diễn giải bằng trực giác:** Việc giải bài Tây không chỉ là học thuộc lòng ý nghĩa mà còn là sự kết nối trực giác với các biểu tượng trên lá bài.
* **Xem như một công cụ tham khảo:** Bói bài Tây mang tính chất gợi ý, tham khảo để bạn có cái nhìn đa chiều hơn về vấn đề, chứ không phải là lời phán xét tuyệt đối về tương lai.

---

Dù bạn tìm đến bói bài Tây để giải tỏa tò mò, tìm kiếm lời khuyên, hay đơn thuần là một hoạt động giải trí, việc hiểu được ý nghĩa ẩn chứa trong từng lá bài sẽ giúp bạn có những trải nghiệm thú vị và sâu sắc hơn. Bạn có muốn đi sâu vào ý nghĩa của một lá bài cụ thể nào không, hay muốn tìm hiểu một trải bài nào đó?`