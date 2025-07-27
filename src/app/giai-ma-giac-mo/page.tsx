'use client';

import ContentHeader from '@/components/ContentHeader';
import { useState } from 'react';
import DreamStructuredData from '@/components/DreamStructuredData';
import RelatedServices from '@/components/RelatedServices';
import FAQSection from '@/components/FAQSection';
import { CheckIcon, DreamIcon } from '@/components/icons';
import { getAllCategories, getDreamsByCategory, getRandomDream, searchDreams, type DreamSymbol } from '../../lib/dreamDictionary';

export default function DreamPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDream, setSelectedDream] = useState<DreamSymbol | null>(null);
  const [filteredDreams, setFilteredDreams] = useState<DreamSymbol[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim()) {
      const filtered = searchDreams(term);
      setFilteredDreams(filtered);
    } else {
      setFilteredDreams([]);
    }
  };

  const categories = getAllCategories();

  return (
    <>
      <DreamStructuredData />
      <ContentHeader
        title="Giải Mã Giấc Mơ"
        description="Tìm hiểu những điều thú vị từ giấc mơ của bạn. Khám phá ý nghĩa và những thông điệp ẩn giấu trong từng giấc mơ."
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Giải Mã Giấc Mơ', href: '/dream' },
        ]}
      />
      <div className="min-h-screen py-10 px-4">
        <div className="container mx-auto max-w-6xl">

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="cosmic-card hoverable rounded-2xl p-8 mb-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl"><DreamIcon className="text-white" size={32} /></span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Tìm Kiếm Ý Nghĩa Giấc Mơ</h2>
                <p className="text-gray-300">Nhập từ khóa để tìm kiếm ý nghĩa giấc mơ của bạn</p>
              </div>

              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Ví dụ: nước, lửa, rắn, cá..."
                  className="w-full px-6 py-4 bg-white/5 border border-gray-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent backdrop-blur-sm text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>

            {/* Search Results */}
            {filteredDreams.length > 0 && (
              <div className="space-y-4 mb-8">
                {filteredDreams.map((dream, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedDream(dream)}
                    className="cosmic-card hoverable rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white capitalize mb-2">{dream.symbol}</h3>
                        <p className="text-gray-300 text-sm">{dream.category}</p>
                      </div>
                      <span className="text-golden text-2xl">→</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Dream Detail Modal */}
        {selectedDream && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-900/95 to-gray-900/95 rounded-2xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-golden/20">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white capitalize mb-2">{selectedDream.symbol}</h2>
                  <span className="px-3 py-1 bg-golden/20 text-golden rounded-full text-sm">{selectedDream.category}</span>
                </div>
                <button
                  onClick={() => setSelectedDream(null)}
                  className="text-white hover:text-golden transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-8">
                {/* Ý nghĩa cơ bản */}
                <div>
                  <h3 className="text-xl font-semibold text-golden mb-3">💫 Ý Nghĩa Cơ Bản</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedDream.meaning}</p>
                </div>

                {/* Ý nghĩa chi tiết */}
                {selectedDream.detailedMeaning && (
                  <div>
                    <h3 className="text-xl font-semibold text-golden mb-3">🔮 Giải Thích Chi Tiết</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedDream.detailedMeaning}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Ý nghĩa văn hóa */}
                  {selectedDream.culturalSignificance && (
                    <div className="bg-gray-900/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-golden mb-2">🏛️ Ý Nghĩa Văn Hóa</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedDream.culturalSignificance}</p>
                    </div>
                  )}

                  {/* Giải thích hiện đại */}
                  {selectedDream.modernInterpretation && (
                    <div className="bg-gray-900/30 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-golden mb-2">🧠 Tâm Lý Học Hiện Đại</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{selectedDream.modernInterpretation}</p>
                    </div>
                  )}
                </div>

                {/* Lời khuyên */}
                {selectedDream.recommendations && selectedDream.recommendations.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-golden mb-3">💡 Lời Khuyên Cụ Thể</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedDream.recommendations.map((advice, index) => (
                        <div key={index} className="flex items-start bg-green-900/20 rounded-lg p-3">
                          <span className="text-green-400 mr-2 mt-1"><CheckIcon size={16} /></span>
                          <span className="text-gray-300 text-sm">{advice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Số may mắn */}
                {selectedDream.luckyNumbers && (
                  <div>
                    <h3 className="text-xl font-semibold text-golden mb-3">🍀 Số May Mắn</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedDream.luckyNumbers.map((number, index) => (
                        <div
                          key={index}
                          className="w-12 h-12 bg-gradient-to-br from-golden to-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-lg"
                        >
                          {number}
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm mt-3">
                      💡 Bạn có thể sử dụng những con số này khi mua vé số, đặt cược hoặc làm số điện thoại.
                    </p>
                  </div>
                )}

                <div className="pt-6 border-t border-gray-400/20">
                  <div className="bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-300 mb-2 flex items-center gap-2">
                      <DreamIcon className="text-blue-300" size={16} /> Lưu Ý Quan Trọng
                    </h4>
                    <p className="text-blue-200 text-sm">
                      Ý nghĩa giấc mơ có thể thay đổi tùy thuộc vào hoàn cảnh cá nhân, cảm xúc khi mơ và 
                      bối cảnh xung quanh ký hiệu trong giấc mơ. Hãy kết hợp với trực giác của bản thân 
                      để có cái nhìn toàn diện nhất.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setSelectedDream(getRandomDream())}
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-indigo-600 hover:to-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 mr-4"
                  >
                    🎲 Xem Giấc Mơ Khác
                  </button>
                  <button
                    onClick={() => setSelectedDream(null)}
                    className="border-2 border-golden text-golden hover:bg-golden hover:text-gray-900 font-bold py-2 px-6 rounded-lg transition-all duration-300"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
              Danh Mục Giấc Mơ
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const categoryDreams = getDreamsByCategory(category);
              const icons = {
                'Tự nhiên': '🌊',
                'Động vật': '🐾',
                'Vật dụng': '💎',
                'Kiến trúc': '🏠',
                'Phương tiện': '🚗',
                'Thực vật': '🌸',
                'Thời tiết': '🌤️'
              };

              return (
                <div key={index} className="cosmic-card hoverable rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{icons[category as keyof typeof icons] || '🔮'}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{category}</h3>
                    <p className="text-gray-300 mb-4">{categoryDreams.length} ký hiệu</p>
                    <div className="space-y-2">
                      {categoryDreams.slice(0, 3).map((dream: DreamSymbol, dreamIndex: number) => (
                        <button
                          key={dreamIndex}
                          onClick={() => setSelectedDream(dream)}
                          className="block w-full text-left px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition-colors capitalize"
                        >
                          {dream.symbol}
                        </button>
                      ))}
                      {categoryDreams.length > 3 && (
                        <p className="text-sm text-gray-400">và {categoryDreams.length - 3} ký hiệu khác...</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tips Section */}
        <div className="cosmic-card hoverable rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
              Mẹo Ghi Nhớ Giấc Mơ
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Ghi Chép Ngay</h3>
                  <p className="text-gray-300">Hãy ghi lại giấc mơ ngay khi thức dậy khi trí nhớ còn tươi.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Thiền Trước Khi Ngủ</h3>
                  <p className="text-gray-300">Thực hành thiền định để có giấc ngủ sâu và giấc mơ rõ ràng hơn.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Ngủ Đúng Giờ</h3>
                  <p className="text-gray-300">Giữ một lịch trình ngủ đều đặn để tăng khả năng nhớ giấc mơ.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phân Tích Cảm Xúc</h3>
                  <p className="text-gray-300">Chú ý đến cảm xúc trong mơ, không chỉ riêng các ký hiệu.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tìm Mối Liên Hệ</h3>
                  <p className="text-gray-300">Liên kết giấc mơ với những sự kiện gần đây trong cuộc sống.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Thời Điểm Quan Trọng</h3>
                  <p className="text-gray-300">Giấc mơ vào sáng sớm thường rõ ràng và có ý nghĩa hơn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection
          description="Giải đáp những thắc mắc phổ biến về giải mã giấc mơ"
          faqs={[
            {
              question: "Giấc mơ có ý nghĩa gì?",
              answer: "Giấc mơ là cách tiềm thức giao tiếp với ý thức, phản ánh những suy nghĩ, cảm xúc và mong muốn sâu kín. Mỗi biểu tượng trong giấc mơ đều mang ý nghĩa riêng, có thể là lời khuyên, cảnh báo hoặc dự báo về tương lai. Việc giải mã giấc mơ giúp bạn hiểu rõ hơn về bản thân và những gì đang diễn ra trong cuộc sống."
            },
            {
              question: "Tại sao chúng ta lại mơ?",
              answer: "Giấc mơ xảy ra trong giai đoạn REM của giấc ngủ, khi não bộ xử lý thông tin và cảm xúc từ ngày hôm đó. Theo tâm linh học, giấc mơ là cầu nối giữa thế giới vật chất và tinh thần, giúp linh hồn nhận được thông điệp từ vũ trụ. Giấc mơ cũng có thể là cách tiềm thức giải quyết vấn đề và chuẩn bị cho những thử thách sắp tới."
            },
            {
              question: "Làm thế nào để nhớ giấc mơ?",
              answer: "Để nhớ giấc mơ tốt hơn, bạn nên: đặt sổ ghi chú bên cạnh giường, ghi lại ngay khi thức dậy, tránh sử dụng điện thoại ngay sau khi thức dậy, duy trì giấc ngủ đều đặn, và tập trung suy nghĩ về giấc mơ trước khi ngủ. Việc ghi chép thường xuyên sẽ giúp bạn nhớ giấc mơ rõ ràng hơn."
            },
            {
              question: "Giấc mơ có thể dự báo tương lai không?",
              answer: "Theo quan niệm tâm linh, một số giấc mơ có thể mang tính dự báo, đặc biệt là những giấc mơ rõ ràng và ấn tượng mạnh. Tuy nhiên, hầu hết giấc mơ phản ánh tâm trạng hiện tại và những lo lắng trong tiềm thức. Quan trọng là hiểu được thông điệp mà giấc mơ muốn truyền tải để đưa ra quyết định đúng đắn trong cuộc sống."
            }
          ]}
        />

        {/* Related Services */}
        <RelatedServices currentPage="/dream" />
      </div>
      </div>
    </>
  );
}

