'use client';

import { useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  service: string;
  rating: number;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Minh Anh",
    age: 28,
    location: "Hà Nội",
    service: "Thần Số Học",
    rating: 5,
    content: "Kết quả thần số học rất chính xác, giúp tôi hiểu rõ tính cách và định hướng nghề nghiệp. Đặc biệt là phần phân tích số mệnh 7 - hoàn toàn đúng với con người tôi!",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Đức Thành",
    age: 35,
    location: "TP.HCM",
    service: "Bói Tình Yêu",
    rating: 5,
    content: "Tôi và vợ check độ hợp tuổi trước khi cưới, kết quả 85% tương thích. Giờ đã 3 năm hạnh phúc, thực sự rất tin tưởng vào độ chính xác của website này.",
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "Thu Hương",
    age: 24,
    location: "Đà Nẵng",
    service: "Giải Mã Giấc Mơ",
    rating: 5,
    content: "Mơ thấy rắn và tìm hiểu ý nghĩa trên web này. Kết quả rất chi tiết và đúng với tình huống thực tế. Cảm ơn team đã tạo ra công cụ hữu ích này!",
    avatar: "👩‍🎓"
  },
  {
    id: 4,
    name: "Văn Hải",
    age: 42,
    location: "Hải Phòng",
    service: "Phong Thủy",
    rating: 5,
    content: "Làm theo hướng dẫn phong thủy để bố trí văn phòng, công việc kinh doanh thuận lợi hơn hẳn. Đặc biệt là phần tư vấn màu sắc và hướng bàn làm việc.",
    avatar: "👨‍💼"
  },
  {
    id: 5,
    name: "Lan Phương",
    age: 31,
    location: "Cần Thơ",
    service: "Cung Hoàng Đạo",
    rating: 5,
    content: "Cung Thiên Bình của tôi được mô tả rất chính xác. Phần dự đoán tình yêu và sự nghiệp cũng khá đúng với thực tế. Website thiết kế đẹp, dễ sử dụng.",
    avatar: "👩‍🏫"
  },
  {
    id: 6,
    name: "Quang Minh",
    age: 26,
    location: "Vũng Tàu",
    service: "Phân Tích Tên",
    rating: 5,
    content: "Phân tích tên tuổi theo thần số học giúp tôi hiểu được điểm mạnh, điểm yếu của bản thân. Quyết định đổi tên theo gợi ý và cảm thấy tự tin hơn nhiều.",
    avatar: "👨‍🎨"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
              Người dùng Nói Gì
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Hơn 50,000+ người đã tin tưởng và có trải nghiệm tích cực với dịch vụ của chúng tôi
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <div 
            className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20 min-h-[300px] flex items-center"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <div className="w-full text-center">
              {/* Stars Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-golden text-2xl">⭐</span>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl text-gray-300 mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
                <div className="text-left">
                  <div className="text-white font-bold text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[currentIndex].age} tuổi • {testimonials[currentIndex].location}
                  </div>
                  <div className="text-golden text-sm font-medium">
                    Dịch vụ: {testimonials[currentIndex].service}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-golden/20 hover:bg-golden/40 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-golden/20 hover:bg-golden/40 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-golden scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-golden mb-2">50,000+</div>
            <div className="text-gray-400 text-sm">Người dùng tin tưởng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden mb-2">98.7%</div>
            <div className="text-gray-400 text-sm">Độ hài lòng</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden mb-2">4.9/5</div>
            <div className="text-gray-400 text-sm">Đánh giá trung bình</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Hỗ trợ miễn phí</div>
          </div>
        </div>
      </div>
    </section>
  );
}
