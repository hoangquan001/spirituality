'use client';

import ContentHeader from '@/components/ContentHeader';
import { useState } from 'react';
import NameAnalysisStructuredData from '../../components/NameAnalysisStructuredData';
import RelatedServices from '../../components/RelatedServices';
import FAQSection from '@/components/FAQSection';
import { CheckIcon, NameAnalysisIcon, StarIcon } from '../../components/icons';
import {
  calculateNameNumerology,
  type NameAnalysis,
} from '../../lib/nameAnalysis';

export default function NameAnalysisPage() {
  const [name, setName] = useState('');
  const [result, setResult] = useState<NameAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!name.trim()) return;

    setIsLoading(true);

    // Giả lập thời gian xử lý
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const analysis = calculateNameNumerology(name);
    setResult(analysis);
    setIsLoading(false);
  };

  const resetForm = () => {
    setName('');
    setResult(null);
  };

  return (
    <>
      <NameAnalysisStructuredData />
      {/* Header */}

      <ContentHeader
        title='Bói Tên Theo Thần Số Học'
        description='Khám phá ý nghĩa và tác động của tên qua thần số học.
              Phân tích tính cách, vận mệnh và nhận lời khuyên cải thiện cuộc sống.'
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Bói Tên', href: '/name-analysis' },
        ]}
      />
      <div className='container mx-auto max-w-6xl'>
        {!result ? (
          <div className='max-w-6xl mx-auto'>
            {/* Input Form */}
            <div className='bg-gradient-to-br from-gray-900/20 to-blue-900/20 rounded-3xl p-8 border border-gray-400/20 mb-8'>
              <div className='text-center mb-8'>
                <div className='w-20 h-20 bg-gradient-to-br from-golden to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <span className='text-3xl'>📝</span>
                </div>
                <h2 className='text-3xl font-bold text-white mb-4'>
                  Nhập Tên Của Bạn
                </h2>
                <p className='text-gray-300'>
                  Nhập tên đầy đủ để khám phá những điều thú vị
                </p>
              </div>

              <div className='max-w-md mx-auto space-y-6'>
                <div>
                  <label className='block text-white font-semibold mb-3'>
                    Họ và Tên
                  </label>
                  <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Ví dụ: Nguyễn Văn An'
                    className='w-full px-6 py-4 bg-white/10 border border-gray-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent backdrop-blur-sm text-lg'
                  />
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={!name.trim() || isLoading}
                  className='w-full bg-gradient-to-r from-golden to-yellow-500 text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
                >
                  {isLoading ? (
                    <span className='flex items-center justify-center gap-3'>
                      <div className='w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin'></div>
                      Đang Phân Tích...
                    </span>
                  ) : (
                    '🔮 Bắt Đầu Phân Tích'
                  )}
                </button>
              </div>
            </div>

            {/* Information Cards */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-gradient-to-br from-gray-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/20'>
                <h3 className='text-2xl font-bold text-white mb-4 flex items-center gap-3'>
                  <span className='text-golden'>
                    <NameAnalysisIcon size={24} />
                  </span>
                  Phân Tích Tên Tuổi
                </h3>
                <div className='space-y-3 text-gray-300 text-sm'>
                  <p>
                    • <strong className='text-white'>Số biểu đạt:</strong> Cách
                    bạn thể hiện bản thân ra bên ngoài
                  </p>
                  <p>
                    • <strong className='text-white'>Số linh hồn:</strong> Khao
                    khát và động lực sâu thẳm trong tâm hồn
                  </p>
                  <p>
                    • <strong className='text-white'>Số nhân cách:</strong> Ấn
                    tượng đầu tiên mà người khác có về bạn
                  </p>
                  <p>
                    • <strong className='text-white'>Số vận may:</strong> Con số
                    mang lại may mắn và thành công
                  </p>
                </div>
              </div>

              <div className='bg-gradient-to-br from-gray-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/20'>
                <h3 className='text-2xl font-bold text-white mb-4 flex items-center gap-3'>
                  <span className='text-golden'>
                    <StarIcon size={24} />
                  </span>
                  Lợi Ích Khi Phân Tích
                </h3>
                <div className='space-y-3 text-gray-300 text-sm'>
                  <p>
                    • <strong className='text-white'>Hiểu rõ bản thân:</strong>{' '}
                    Tính cách và đặc điểm nổi bật
                  </p>
                  <p>
                    •{' '}
                    <strong className='text-white'>Phát triển cá nhân:</strong>{' '}
                    Điểm mạnh và điểm cần cải thiện
                  </p>
                  <p>
                    •{' '}
                    <strong className='text-white'>
                      Định hướng nghề nghiệp:
                    </strong>{' '}
                    Hướng phát triển sự nghiệp phù hợp
                  </p>
                  <p>
                    • <strong className='text-white'>Cải thiện quan hệ:</strong>{' '}
                    Lời khuyên cho các mối quan hệ
                  </p>
                  <p>
                    • <strong className='text-white'>Tăng vận may:</strong> Số
                    may mắn và màu sắc phù hợp
                  </p>
                </div>
              </div>

              <div className='bg-gradient-to-br from-gray-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-400/20'>
                <h3 className='text-2xl font-bold text-white mb-4 flex items-center gap-3'>
                  <span className='text-golden'>
                    <StarIcon size={24} filled />
                  </span>
                  Tại Sao Chọn Chúng Tôi?
                </h3>
                <div className='space-y-3 text-gray-300 text-sm'>
                  <div className='flex items-start gap-2'>
                    <span className='text-green-400 mt-1'>
                      <CheckIcon size={16} />
                    </span>
                    <span>
                      <strong className='text-white'>Miễn phí 100%:</strong> Tất
                      cả nội dung đều được chia sẻ miễn phí
                    </span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-green-400 mt-1'>
                      <CheckIcon size={16} />
                    </span>
                    <span>
                      <strong className='text-white'>Thú vị và hay ho:</strong>{' '}
                      Nội dung được trình bày sinh động, dễ hiểu
                    </span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-green-400 mt-1'>
                      <CheckIcon size={16} />
                    </span>
                    <span>
                      <strong className='text-white'>Bảo mật tuyệt đối:</strong>{' '}
                      Thông tin được bảo vệ an toàn
                    </span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <span className='text-green-400 mt-1'>
                      <CheckIcon size={16} />
                    </span>
                    <span>
                      <strong className='text-white'>Kết quả chi tiết:</strong>{' '}
                      Phân tích sâu sắc và lời khuyên cụ thể
                    </span>
                  </div>
                </div>
                <div className='mt-4 p-3 bg-golden/10 rounded-lg border border-golden/20'>
                  <p className='text-golden text-xs font-medium text-center'>
                    ⭐ Hơn 30,000+ người đã tin tưởng sử dụng
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='max-w-6xl mx-auto'>
            {/* Results Header */}
            <div className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                Phân Tích Tên:{' '}
                <span className='text-golden'>{result.name}</span>
              </h2>
              <p className='text-gray-300'>
                Khám phá những bí mật ẩn giấu trong tên của bạn
              </p>
            </div>

            {/* Main Numbers */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
              <div className='bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 text-center'>
                <div className='text-4xl font-bold text-white mb-2'>
                  {result.expressionNumber}
                </div>
                <h3 className='text-lg font-semibold text-gray-300 mb-3'>
                  Số Biểu Đạt
                </h3>
                <p className='text-gray-200 text-sm'>
                  Cách bạn thể hiện bản thân ra thế giới
                </p>
              </div>

              <div className='bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-6 text-center'>
                <div className='text-4xl font-bold text-white mb-2'>
                  {result.soulNumber}
                </div>
                <h3 className='text-lg font-semibold text-blue-200 mb-3'>
                  Số Linh Hồn
                </h3>
                <p className='text-blue-100 text-sm'>
                  Khao khát và động lực sâu thẳm
                </p>
              </div>

              <div className='bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-center'>
                <div className='text-4xl font-bold text-white mb-2'>
                  {result.personalityNumber}
                </div>
                <h3 className='text-lg font-semibold text-cyan-200 mb-3'>
                  Số Nhân Cách
                </h3>
                <p className='text-cyan-100 text-sm'>
                  Ấn tượng đầu tiên về bạn
                </p>
              </div>

              <div className='bg-gradient-to-br from-golden to-yellow-500 rounded-2xl p-6 text-center'>
                <div className='text-4xl font-bold text-black mb-2'>
                  {result.luckyNumber}
                </div>
                <h3 className='text-lg font-semibold text-yellow-900 mb-3'>
                  Số Vận May
                </h3>
                <p className='text-yellow-800 text-sm'>
                  Con số mang lại may mắn
                </p>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className='grid md:grid-cols-2 gap-8 mb-12'>
              <div className='bg-gradient-to-br from-gray-900/20 to-blue-900/20 rounded-3xl p-8 border border-gray-400/20'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                  <span className='text-golden'>🎭</span>
                  Tính Cách & Đặc Điểm
                </h3>
                <div className='space-y-4'>
                  <div className='bg-gray-900/30 rounded-lg p-4'>
                    <h4 className='font-semibold text-gray-300 mb-2'>
                      Điểm Mạnh
                    </h4>
                    <ul className='text-gray-200 text-sm space-y-1'>
                      {result.strengths.map((strength, index) => (
                        <li key={index} className='flex items-start gap-2'>
                          <span className='text-green-400 mt-1'>
                            <CheckIcon size={16} />
                          </span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className='bg-gray-900/30 rounded-lg p-4'>
                    <h4 className='font-semibold text-indigo-200 mb-2'>
                      Cần Cải Thiện
                    </h4>
                    <ul className='text-indigo-100 text-sm space-y-1'>
                      {result.challenges.map((challenge, index) => (
                        <li key={index} className='flex items-start gap-2'>
                          <span className='text-yellow-400 mt-1'>!</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className='bg-gradient-to-br from-gray-900/20 to-blue-900/20 rounded-3xl p-8 border border-gray-400/20'>
                <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                  <span className='text-golden'>💼</span>
                  Sự Nghiệp & Tài Năng
                </h3>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-semibold text-blue-200 mb-3'>
                      Nghề Nghiệp Phù Hợp
                    </h4>
                    <div className='grid grid-cols-2 gap-2'>
                      {result.careerSuggestions.map((career, index) => (
                        <div
                          key={index}
                          className='bg-blue-900/20 rounded-lg p-2 text-center'
                        >
                          <span className='text-blue-200 text-sm'>
                            {career}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='font-semibold text-green-200 mb-3'>
                      Tài Năng Tự Nhiên
                    </h4>
                    <div className='space-y-2'>
                      {result.talents.map((talent, index) => (
                        <div
                          key={index}
                          className='flex items-center gap-3 bg-green-900/20 rounded-lg p-2'
                        >
                          <span className='text-green-400'>⭐</span>
                          <span className='text-green-200 text-sm'>
                            {talent}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advice & Recommendations */}
            <div className='bg-gradient-to-br from-golden/10 to-yellow-900/20 backdrop-blur-sm rounded-3xl p-8 border border-golden/20 mb-8'>
              <h3 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                <span className='text-golden'>💡</span>
                Lời Khuyên Cá Nhân
              </h3>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='font-semibold text-golden mb-3'>
                    🎯 Phát Triển Bản Thân
                  </h4>
                  <ul className='space-y-2'>
                    {result.personalAdvice.map((advice, index) => (
                      <li
                        key={index}
                        className='flex items-start gap-3 text-gray-300 text-sm'
                      >
                        <span className='text-golden mt-1'>•</span>
                        {advice}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className='font-semibold text-golden mb-3'>
                    💕 Mối Quan Hệ
                  </h4>
                  <ul className='space-y-2'>
                    {result.relationshipAdvice.map((advice, index) => (
                      <li
                        key={index}
                        className='flex items-start gap-3 text-gray-300 text-sm'
                      >
                        <span className='text-golden mt-1'>•</span>
                        {advice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Lucky Elements */}
            <div className='grid md:grid-cols-3 gap-6 mb-8'>
              <div className='bg-gradient-to-br from-gray-900/30 to-gray-900/30 rounded-2xl p-6 text-center'>
                <h4 className='font-semibold text-gray-300 mb-4'>
                  🎨 Màu May Mắn
                </h4>
                <div className='space-y-2'>
                  {result.luckyColors.map((color, index) => (
                    <div
                      key={index}
                      className='bg-gray-900/20 rounded-lg p-2 text-gray-200 text-sm'
                    >
                      {color}
                    </div>
                  ))}
                </div>
              </div>

              <div className='bg-gradient-to-br from-gray-900/30 to-blue-900/30 rounded-2xl p-6 text-center'>
                <h4 className='font-semibold text-blue-200 mb-4'>
                  🧭 Hướng Thuận Lợi
                </h4>
                <div className='space-y-2'>
                  {result.luckyDirections.map((direction, index) => (
                    <div
                      key={index}
                      className='bg-blue-900/20 rounded-lg p-2 text-blue-100 text-sm'
                    >
                      {direction}
                    </div>
                  ))}
                </div>
              </div>

              <div className='bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-6 text-center'>
                <h4 className='font-semibold text-cyan-200 mb-4'>
                  💎 Đá Quý Phù Hợp
                </h4>
                <div className='space-y-2'>
                  {result.gemstones.map((stone, index) => (
                    <div
                      key={index}
                      className='bg-cyan-900/20 rounded-lg p-2 text-cyan-100 text-sm'
                    >
                      {stone}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className='text-center'>
              <button
                onClick={resetForm}
                className='bg-gradient-to-r from-golden to-yellow-500 text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-all duration-300 mr-4'
              >
                🔄 Phân Tích Tên Khác
              </button>
              <button className='border-2 border-golden text-golden hover:bg-golden hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300'>
                📤 Chia Sẻ Kết Quả
              </button>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <FAQSection
          description="Giải đáp những thắc mắc phổ biến về phân tích tên tuổi theo thần số học"
          faqs={[
            {
              question: "Phân tích tên có đáng tin không?",
              answer: "Phân tích tên theo thần số học là một cách thú vị để tìm hiểu về bản thân. Mỗi chữ cái trong tên đều có giá trị số riêng, và khi kết hợp lại sẽ tạo ra những thông tin hay ho về tính cách. Đây là một môn học cổ xưa được nhiều người quan tâm và nhiều bạn chia sẻ rằng thông tin này khá phù hợp với tính cách thực tế."
            },
            {
              question: "Tên có thực sự ảnh hưởng đến vận mệnh không?",
              answer: "Theo thần số học, tên có tác động đến tính cách và cách người khác nhìn nhận bạn. Tên tạo ra rung động năng lượng nhất định, ảnh hưởng đến sự tự tin, cách giao tiếp và cơ hội trong cuộc sống. Tuy nhiên, tên chỉ là một yếu tố trong tổng thể, không quyết định hoàn toàn vận mệnh."
            },
            {
              question: "Tôi có nên đổi tên theo thần số học không?",
              answer: "Việc đổi tên nên được cân nhắc kỹ lưỡng. Nếu phân tích cho thấy tên hiện tại có những hạn chế, bạn có thể: thêm tên lót phù hợp, sử dụng biệt danh tích cực, hoặc đổi tên hoàn toàn nếu thực sự cần thiết. Quan trọng là tên mới phải phù hợp với số mệnh và mang lại năng lượng tích cực."
            },
            {
              question: "Phân tích tên có tính phí không?",
              answer: "Không, tất cả nội dung phân tích tên đều hoàn toàn miễn phí. Bạn có thể thoải mái khám phá ý nghĩa của bất kỳ tên nào, đọc những thông tin thú vị về tính cách và tham khảo lời khuyên mà không tốn phí. Chúng mình chia sẻ những kiến thức này với mong muốn giúp mọi người hiểu thêm về bản thân."
            }
          ]}
        />

        {/* Related Services */}
        <RelatedServices currentPage='/name-analysis' />
      </div>
    </>
  );
}
