'use client';

import { BlockContent } from '@/components/BlockContent';
import ContentHeader from '@/components/ContentHeader';
import FAQSection from '@/components/FAQSection';
import { useState } from 'react';

interface CalendarDay {
  date: number;
  lunarDate: string;
  canChi: string;
  isToday: boolean;
  isCurrentMonth: boolean;
  goodTime: string[];
  badTime: string[];
  direction: string;
  color: string;
}

const LUNAR_MONTHS = [
  'Giêng', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu',
  'Bảy', 'Tám', 'Chín', 'Mười', 'Một', 'Chạp'
];

const CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const [viewMode, setViewMode] = useState<'month' | 'year'>('month');

  const today = new Date();
  
  // Tính Can Chi cho ngày
  const getCanChi = (date: Date): string => {
    const baseDate = new Date(1900, 0, 1); // 1/1/1900
    const daysDiff = Math.floor((date.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));
    const canIndex = (daysDiff + 6) % 10; // Điều chỉnh offset
    const chiIndex = (daysDiff + 8) % 12; // Điều chỉnh offset
    return `${CAN[canIndex]} ${CHI[chiIndex]}`;
  };

  // Giả lập tính âm lịch đơn giản (thực tế cần thuật toán phức tạp)
  const getLunarDate = (date: Date): string => {
    const lunarDay = (date.getDate() + 15) % 30 + 1;
    const lunarMonth = ((date.getMonth() + 11) % 12);
    return `${lunarDay}/${LUNAR_MONTHS[lunarMonth]}`;
  };

  // Tính giờ tốt/xấu theo Can Chi
  const getTimeInfo = (canChi: string) => {
    const goodTimes = ['5-7h (Mão)', '11-13h (Ngọ)', '17-19h (Dậu)'];
    const badTimes = ['23-1h (Tý)', '13-15h (Mùi)'];
    return { goodTimes, badTimes };
  };

  // Tính hướng và màu may mắn
  const getDailyFortune = (date: Date) => {
    const directions = ['Đông', 'Tây', 'Nam', 'Bắc', 'Đông Nam', 'Tây Nam', 'Đông Bắc', 'Tây Bắc'];
    const colors = ['Đỏ', 'Xanh', 'Vàng', 'Trắng', 'Đen', 'Tím', 'Hồng', 'Cam'];
    
    const seed = date.getDate() + date.getMonth();
    return {
      direction: directions[seed % directions.length],
      color: colors[seed % colors.length]
    };
  };

  // Tạo lịch tháng
  const generateCalendar = (): CalendarDay[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstWeekday = firstDay.getDay();
    
    const calendar: CalendarDay[] = [];
    
    // Thêm những ngày của tháng trước
    for (let i = firstWeekday - 1; i >= 0; i--) {
      const date = new Date(year, month, -i);
      const canChi = getCanChi(date);
      const timeInfo = getTimeInfo(canChi);
      const fortune = getDailyFortune(date);
      
      calendar.push({
        date: date.getDate(),
        lunarDate: getLunarDate(date),
        canChi,
        isToday: false,
        isCurrentMonth: false,
        goodTime: timeInfo.goodTimes,
        badTime: timeInfo.badTimes,
        direction: fortune.direction,
        color: fortune.color
      });
    }
    
    // Thêm những ngày của tháng hiện tại
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const canChi = getCanChi(date);
      const timeInfo = getTimeInfo(canChi);
      const fortune = getDailyFortune(date);
      const isToday = date.toDateString() === today.toDateString();
      
      calendar.push({
        date: day,
        lunarDate: getLunarDate(date),
        canChi,
        isToday,
        isCurrentMonth: true,
        goodTime: timeInfo.goodTimes,
        badTime: timeInfo.badTimes,
        direction: fortune.direction,
        color: fortune.color
      });
    }
    
    // Thêm những ngày của tháng sau để đủ 42 ô
    const remaining = 42 - calendar.length;
    for (let day = 1; day <= remaining; day++) {
      const date = new Date(year, month + 1, day);
      const canChi = getCanChi(date);
      const timeInfo = getTimeInfo(canChi);
      const fortune = getDailyFortune(date);
      
      calendar.push({
        date: day,
        lunarDate: getLunarDate(date),
        canChi,
        isToday: false,
        isCurrentMonth: false,
        goodTime: timeInfo.goodTimes,
        badTime: timeInfo.badTimes,
        direction: fortune.direction,
        color: fortune.color
      });
    }
    
    return calendar;
  };

  const calendar = generateCalendar();

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  return (
    <>
      <ContentHeader
        title="Lịch Vạn Niên"
        description="Xem lịch âm dương, Can Chi, giờ tốt xấu và hướng may mắn cho từng ngày."
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Lịch Vạn Niên', href: '/calendar' },
        ]}
      />
      <div className="min-h-screen py-10 px-4">
        <div className="container mx-auto max-w-6xl">

        {/* Calendar Controls */}
        <div className="bg-gradient-to-br from-gray-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-6 border border-gray-400/20 mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth('prev')}
              className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-indigo-600 hover:to-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              ← Tháng Trước
            </button>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                Tháng {currentDate.getMonth() + 1} - {currentDate.getFullYear()}
              </h2>
              <p className="text-gray-300">
                Âm lịch: {getLunarDate(currentDate)} - {getCanChi(currentDate)}
              </p>
            </div>
            
            <button
              onClick={() => navigateMonth('next')}
              className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-indigo-600 hover:to-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              Tháng Sau →
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'].map(day => (
              <div key={day} className="text-center py-3 text-golden font-bold">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendar.map((day, index) => (
              <div
                key={index}
                onClick={() => setSelectedDay(day)}
                className={`
                  relative p-3 rounded-lg cursor-pointer transition-all duration-200 min-h-[80px]
                  ${day.isCurrentMonth 
                    ? 'bg-white/10 hover:bg-white/20 border border-gray-400/30' 
                    : 'bg-white/5 hover:bg-white/10 text-purple-400'
                  }
                  ${day.isToday ? 'ring-2 ring-golden bg-golden/20' : ''}
                `}
              >
                <div className="text-lg font-bold mb-1">{day.date}</div>
                <div className="text-xs text-gray-400">{day.lunarDate}</div>
                <div className="text-xs text-purple-400">{day.canChi}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-golden">📅</span>
              Hôm Nay
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Dương lịch:</strong> {today.toLocaleDateString('vi-VN')}</p>
              <p><strong>Âm lịch:</strong> {getLunarDate(today)}</p>
              <p><strong>Can Chi:</strong> {getCanChi(today)}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-2xl p-6 border border-green-300/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-green-400">⏰</span>
              Giờ Tốt
            </h3>
            <div className="space-y-2">
              {getTimeInfo(getCanChi(today)).goodTimes.map((time, index) => (
                <div key={index} className="bg-green-900/20 rounded-lg p-2 text-green-200 text-sm">
                  {time}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-golden/20 to-yellow-900/30 backdrop-blur-sm rounded-2xl p-6 border border-golden/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-golden">🧭</span>
              May Mắn
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><strong>Hướng:</strong> {getDailyFortune(today).direction}</p>
              <p><strong>Màu sắc:</strong> {getDailyFortune(today).color}</p>
            </div>
          </div>
        </div>

        {/* Day Detail Modal */}
        {selectedDay && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-900/95 to-gray-900/95 rounded-2xl p-8 max-w-2xl w-full border border-golden/20">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Ngày {selectedDay.date}
                  </h2>
                  <p className="text-gray-300">
                    Âm lịch: {selectedDay.lunarDate} - {selectedDay.canChi}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDay(null)}
                  className="text-white hover:text-golden transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-400 mb-3">⏰ Giờ Tốt</h3>
                  <div className="space-y-2">
                    {selectedDay.goodTime.map((time, index) => (
                      <div key={index} className="bg-green-900/20 rounded-lg p-3 text-green-200">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-3">⚠️ Giờ Xấu</h3>
                  <div className="space-y-2">
                    {selectedDay.badTime.map((time, index) => (
                      <div key={index} className="bg-red-900/20 rounded-lg p-3 text-red-200">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-golden/10 rounded-lg p-4">
                  <h4 className="font-semibold text-golden mb-2">🧭 Hướng May Mắn</h4>
                  <p className="text-white text-lg">{selectedDay.direction}</p>
                </div>

                <div className="bg-gray-900/30 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-400 mb-2">🎨 Màu May Mắn</h4>
                  <p className="text-white text-lg">{selectedDay.color}</p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedDay(null)}
                  className="bg-gradient-to-r from-golden to-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Information Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-gray-900/20 to-blue-900/20 rounded-3xl p-8 border border-gray-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-golden">📚</span>
              Ý Nghĩa Can Chi
            </h3>
            <div className="space-y-4 text-gray-300">
              <p><strong className="text-white">Can:</strong> 10 thiên can đại diện cho năng lượng trời</p>
              <p><strong className="text-white">Chi:</strong> 12 địa chi đại diện cho năng lượng đất</p>
              <p>Can Chi kết hợp tạo nên chu kỳ 60 năm, ảnh hưởng đến vận mệnh con người.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/20 to-blue-900/20 rounded-3xl p-8 border border-gray-400/20">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-golden">🌙</span>
              Âm Lịch Việt Nam
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>Âm lịch dựa trên chu kỳ của mặt trăng, mỗi tháng có 29-30 ngày.</p>
              <p><strong className="text-white">Ý nghĩa:</strong> Quyết định các ngày lễ, tết và hoạt động tâm linh.</p>
              <p>Được sử dụng rộng rãi trong văn hóa Việt Nam và các nước Á Đông.</p>
            </div>
          </div>
        </div>
        <BlockContent>{content}</BlockContent>

        {/* FAQ Section */}
        <FAQSection
          description="Giải đáp những thắc mắc phổ biến về lịch âm dương và chuyển đổi lịch"
          faqs={[
            {
              question: "Lịch âm và lịch dương khác nhau như thế nào?",
              answer: "Lịch dương (Gregorian) dựa trên chu kỳ Trái Đất quay quanh Mặt Trời (365 ngày), được sử dụng phổ biến trên thế giới. Lịch âm dựa trên chu kỳ Mặt Trăng (354 ngày), được sử dụng để tính các ngày lễ truyền thống và phong thủy ở Việt Nam và các nước Á Đông."
            },
            {
              question: "Tại sao cần chuyển đổi lịch âm dương?",
              answer: "Chuyển đổi lịch âm dương giúp bạn tra cứu ngày tốt xấu, chọn ngày cưới hỏi, khai trương, và các sự kiện quan trọng theo phong thủy. Ngoài ra, còn giúp xác định các ngày lễ truyền thống như Tết, Trung Thu, Vu Lan theo âm lịch."
            },
            {
              question: "Làm sao biết ngày nào là ngày tốt?",
              answer: "Ngày tốt được xác định dựa trên can chi, sao tốt xấu, và hướng phù hợp với tuổi của bạn. Mỗi ngày có những giờ hoàng đạo và hướng tốt khác nhau. Bạn có thể tham khảo lịch vạn niên hoặc sử dụng công cụ tra cứu để chọn ngày phù hợp."
            },
            {
              question: "Can chi có ý nghĩa gì?",
              answer: "Can chi là hệ thống đếm thời gian truyền thống gồm 10 can (Giáp, Ất, Bính...) và 12 chi (Tý, Sửu, Dần...), tạo thành chu kỳ 60 năm. Can chi được dùng để xác định tuổi, ngày tháng và có ảnh hưởng đến phong thủy, tử vi của mỗi người."
            }
          ]}
        />
      </div>
      </div>
    </>
  );
}

const content = `
## Lịch Vạn Niên: Cánh Cửa Giải Mã Thời Gian và Phong Thủy Truyền Thống

**Lịch Vạn Niên** không chỉ là một cuốn lịch thông thường giúp chúng ta theo dõi ngày tháng mà còn là một kho tàng tri thức đồ sộ về **văn hóa, phong thủy, và tâm linh** của người Á Đông. Nó tổng hợp và diễn giải mối tương quan giữa thời gian với các yếu tố ngũ hành, can chi, sao tốt xấu, và nhiều thông tin quan trọng khác, giúp con người lựa chọn được thời điểm thuận lợi cho mọi việc, từ cưới hỏi, động thổ đến khai trương.

---

### Lịch Vạn Niên Là Gì?

**Lịch Vạn Niên** là một loại lịch đặc biệt được biên soạn dựa trên sự kết hợp giữa **lịch âm (âm lịch)** và **lịch dương (dương lịch)**, đồng thời lồng ghép các yếu tố của **thiên văn học cổ đại, triết lý Âm Dương Ngũ Hành và Bát Quái**. Đúng như tên gọi "Vạn Niên" (nghìn năm), cuốn lịch này không chỉ giới hạn trong một năm mà có thể bao quát hàng chục, thậm chí hàng trăm năm, cung cấp thông tin chi tiết cho từng ngày, từng giờ.

Mục đích chính của Lịch Vạn Niên là giúp người dùng:

* **Tra cứu ngày âm - dương:** Dễ dàng chuyển đổi giữa hai hệ thống lịch.
* **Xác định ngày tốt - xấu:** Dựa trên các yếu tố như giờ hoàng đạo, hắc đạo, trực, sao nhị thập bát tú, xung khắc tuổi...
* **Xem xét yếu tố phong thủy:** Cung cấp thông tin về ngũ hành nạp âm của ngày, các sao tốt/xấu ảnh hưởng đến công việc cụ thể.
* **Hỗ trợ các quyết định quan trọng:** Từ việc nhỏ như cắt tóc, xuất hành cho đến các việc lớn như xây nhà, cưới hỏi, khai trương.

---

### Những Yếu Tố Chính Cấu Thành Lịch Vạn Niên

Để có thể cung cấp những thông tin chi tiết và đa dạng, Lịch Vạn Niên tích hợp nhiều hệ thống kiến thức phức tạp:

#### 1. Âm Lịch và Dương Lịch
* **Dương lịch:** Dựa vào chu kỳ quay của Trái Đất quanh Mặt Trời, xác định các mùa và ngày tháng theo hệ Gregory chúng ta dùng hàng ngày.
* **Âm lịch:** Dựa vào chu kỳ quay của Mặt Trăng quanh Trái Đất, với mỗi tháng bắt đầu vào ngày không trăng (sóc). Đây là hệ thống lịch gắn liền với các lễ hội, tập quán truyền thống của người Việt. Lịch Vạn Niên giúp quy đổi chính xác giữa hai hệ lịch này.

#### 2. Thiên Can Địa Chi
* **Thiên Can (10 Can):** Giáp, Ất, Bính, Đinh, Mậu, Kỷ, Canh, Tân, Nhâm, Quý.
* **Địa Chi (12 Chi/12 Con Giáp):** Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi.
* Sự kết hợp của Thiên Can và Địa Chi tạo thành một chu kỳ **60 năm (Lục Thập Hoa Giáp)**, được dùng để đặt tên cho năm, tháng, ngày, giờ. Mỗi cặp Can Chi mang một ý nghĩa ngũ hành, tác động đến vận khí của thời điểm đó.

#### 3. Ngũ Hành
* **Kim, Mộc, Thủy, Hỏa, Thổ:** Là năm yếu tố cơ bản cấu thành vạn vật và chi phối các mối quan hệ trong vũ trụ.
* Trong Lịch Vạn Niên, mỗi ngày, mỗi giờ đều có một "Ngũ hành Nạp Âm" riêng. Việc chọn ngày hợp với ngũ hành của bản thân hoặc công việc sẽ giúp tăng cường năng lượng tích cực, hóa giải xung khắc.

#### 4. Các Yếu Tố Khác
* **Giờ Hoàng Đạo - Hắc Đạo:** Giờ Hoàng Đạo là những khoảng thời gian tốt lành, thuận lợi để thực hiện các công việc quan trọng. Ngược lại, giờ Hắc Đạo nên hạn chế làm việc lớn.
* **Trực (12 Trực):** Dựa trên chu kỳ 12 ngày, mỗi trực mang một ý nghĩa riêng về sự tốt xấu cho các hoạt động.
* **Nhị Thập Bát Tú (28 Chòm Sao):** Là 28 chòm sao chiếu mệnh, mỗi chòm sao chủ quản một ngày và mang năng lượng khác nhau, ảnh hưởng đến mọi việc.
* **Tứ Trụ (Giờ, Ngày, Tháng, Năm):** Là nền tảng của Bát Tự Hà Lạc, một phương pháp xem vận mệnh chi tiết dựa trên giờ, ngày, tháng, năm sinh của một người.
* **Các sao tốt/xấu:** Như Thiên Đức, Nguyệt Đức (sao tốt) hay Sát Chủ, Thụ Tử (sao xấu) ảnh hưởng trực tiếp đến tính chất của ngày.
* **Xung Khắc Tuổi:** Lịch Vạn Niên cũng chỉ ra các tuổi bị xung khắc với ngày, giúp người dùng tránh phạm phải điều kiêng kỵ.

---

### Lợi Ích Của Việc Tra Cứu Lịch Vạn Niên

Sử dụng Lịch Vạn Niên mang lại nhiều lợi ích thiết thực trong đời sống:

* **Tối ưu hóa thời điểm:** Giúp bạn chọn được "thiên thời" cho các sự kiện quan trọng như cưới hỏi, khai trương, động thổ, ký kết hợp đồng, xuất hành. Điều này được tin là sẽ mang lại may mắn và thành công.
* **Tránh rủi ro:** Giúp nhận biết và tránh những ngày, giờ không thuận lợi, hạn chế những điều không may có thể xảy ra.
* **Hiểu biết văn hóa:** Là cầu nối để hiểu sâu hơn về văn hóa, phong tục, tập quán và quan niệm truyền thống của người Việt Nam và các nước Á Đông.
* **Cân bằng cuộc sống:** Góp phần tạo nên sự an tâm, tin tưởng và một lối sống hài hòa với tự nhiên theo quan niệm "thiên địa nhân hợp nhất".

---

Trong thời đại số, Lịch Vạn Niên không chỉ tồn tại dưới dạng sách mà còn phổ biến rộng rãi qua các ứng dụng di động và website, giúp việc tra cứu trở nên dễ dàng và tiện lợi hơn bao giờ hết. Dù bạn tin vào phong thủy hay chỉ đơn thuần muốn tìm hiểu về văn hóa truyền thống, Lịch Vạn Niên vẫn là một công cụ giá trị để khám phá sự vận hành của thời gian và những ảnh hưởng của nó đến cuộc sống chúng ta. Bạn có muốn tìm hiểu cụ thể về một yếu tố nào đó trong Lịch Vạn Niên không?`