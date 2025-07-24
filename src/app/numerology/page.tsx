'use client';

import ContentHeader from '@/components/ContentHeader';
import { useState } from 'react';
import NumerologyForm from '../../components/NumerologyForm';
import NumerologyStructuredData from '../../components/NumerologyStructuredData';
import RelatedServices from '../../components/RelatedServices';
import ResultCard from '../../components/ResultCard';
import FAQSection from '@/components/FAQSection';
import RelatedArticles from '@/components/RelatedArticles';
import { CheckIcon, NumerologyIcon, StarIcon } from '../../components/icons';

interface FormData {
  fullName: string;
  birthDate: string;
  birthTime?: string;
  birthPlace?: string;
}

interface NumerologyResult {
  lifePathNumber: number;
  destinyNumber: number;
  soulNumber: number;
  personalityNumber: number;
  lifePath: string;
  destiny: string;
  soul: string;
  personality: string;
}

export default function NumerologyPage() {
  const [result, setResult] = useState<NumerologyResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Hàm tính số mệnh đơn giản (có thể mở rộng thêm)
  const calculateNumerology = (data: FormData): NumerologyResult => {
    const { fullName, birthDate } = data;
    
    // Chuyển đổi tên thành số
    const nameToNumber = (name: string): number => {
      const values: { [key: string]: number } = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
        'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
        's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
      };
      
      const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
      let sum = 0;
      for (const char of cleanName) {
        sum += values[char] || 0;
      }
      
      return reduceToSingleDigit(sum);
    };

    // Chuyển đổi ngày sinh thành số
    const dateToNumber = (date: string): number => {
      const numbers = date.replace(/\D/g, '');
      let sum = 0;
      for (const digit of numbers) {
        sum += parseInt(digit);
      }
      return reduceToSingleDigit(sum);
    };

    // Rút gọn về số đơn (trừ 11, 22, 33)
    const reduceToSingleDigit = (num: number): number => {
      while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
        num = Math.floor(num / 10) + (num % 10);
      }
      return num;
    };

    const lifePathNumber = dateToNumber(birthDate);
    const destinyNumber = nameToNumber(fullName);
    const soulNumber = nameToNumber(fullName.replace(/[^aeiouAEIOU]/g, ''));
    const personalityNumber = nameToNumber(fullName.replace(/[aeiouAEIOU]/g, ''));

    // Mô tả ý nghĩa số
    const getLifePathMeaning = (num: number): string => {
      const meanings: { [key: number]: string } = {
        1: "Bạn là người lãnh đạo tự nhiên, độc lập và sáng tạo. Số 1 đại diện cho sự khởi đầu mới, ý chí mạnh mẽ và khả năng tiên phong trong mọi lĩnh vực.",
        2: "Bạn là người hòa thuận, nhạy cảm và có khả năng hợp tác tốt. Số 2 đại diện cho sự cân bằng, hòa hợp và khả năng làm việc nhóm xuất sắc.",
        3: "Bạn là người sáng tạo, vui vẻ và có khả năng giao tiếp tuyệt vời. Số 3 đại diện cho nghệ thuật, sự biểu đạt và niềm vui sống.",
        4: "Bạn là người thực tế, đáng tin cậy và có khả năng tổ chức tốt. Số 4 đại diện cho sự ổn định, lao động chăm chỉ và xây dựng nền tảng vững chắc.",
        5: "Bạn là người tự do, phiêu lưu và thích khám phá. Số 5 đại diện cho sự thay đổi, du lịch và trải nghiệm đa dạng trong cuộc sống.",
        6: "Bạn là người quan tâm đến gia đình, có trách nhiệm và yêu thương. Số 6 đại diện cho tình yêu thương, chăm sóc và sự hòa hợp trong gia đình.",
        7: "Bạn là người tâm linh, thích nghiên cứu và tìm hiểu sâu. Số 7 đại diện cho trí tuệ, sự hoàn hảo và khả năng phân tích sâu sắc.",
        8: "Bạn là người có tham vọng, thực tế và thành công trong kinh doanh. Số 8 đại diện cho quyền lực, thành công vật chất và khả năng quản lý.",
        9: "Bạn là người nhân đạo, rộng lượng và có tầm nhìn toàn cầu. Số 9 đại diện cho sự hoàn thiện, lòng từ bi và giúp đỡ nhân loại.",
        11: "Bạn là người có trực giác mạnh, tâm linh cao và khả năng truyền cảm hứng. Số 11 là số chủ đạo đại diện cho sự giác ngộ và năng lực siêu nhiên.",
        22: "Bạn là người có khả năng biến ước mơ thành hiện thực một cách vĩ đại. Số 22 là số chủ đạo đại diện cho kiến trúc sư của ước mơ.",
        33: "Bạn là người thầy tâm linh, có khả năng chữa lành và nâng cao ý thức con người. Số 33 là số chủ đạo cao nhất đại diện cho sự hy sinh và giúp đỡ."
      };
      return meanings[num] || "Một con số đặc biệt với ý nghĩa sâu sắc.";
    };

    return {
      lifePathNumber,
      destinyNumber,
      soulNumber,
      personalityNumber,
      lifePath: getLifePathMeaning(lifePathNumber),
      destiny: `Số định mệnh ${destinyNumber} cho thấy mục tiêu cuộc đời và những gì bạn cần hoàn thành.`,
      soul: `Số linh hồn ${soulNumber} thể hiện những khao khát sâu kín trong tâm hồn bạn.`,
      personality: `Số nhân cách ${personalityNumber} cho thấy cách người khác nhìn nhận bạn từ ấn tượng đầu tiên.`
    };
  };

  const handleFormSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Giả lập thời gian xử lý
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const calculatedResult = calculateNumerology(data);
    setResult(calculatedResult);
    setIsLoading(false);
  };

  const resetForm = () => {
    setResult(null);
  };

  return (
    <>
      <NumerologyStructuredData />
      <ContentHeader
        title="Thần Số Học Pythagoras"
        description="Tìm hiểu những điều thú vị về bản thân qua ngày sinh của bạn. Khám phá tính cách, điểm mạnh và những đặc điểm nổi bật."
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Thần Số Học', href: '/numerology' },
        ]}
      />
      <div className="min-h-screen py-10 px-4">
        {!result ? (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
         
              <NumerologyForm onSubmit={handleFormSubmit} />
         

              {/* Info */}
              <div className="space-y-6">
                <div className="cosmic-card hoverable rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-3"><NumerologyIcon className="text-golden" size={24} /></span>
                    Thần Số Học Pythagoras Là Gì?
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Thần số học là cách người xưa dùng để tìm hiểu về tính cách qua ngày sinh.
                    Mỗi con số đều mang một ý nghĩa riêng, giúp bạn hiểu rõ hơn về bản thân mình.
                  </p>

                </div>

                <div className="cosmic-card hoverable rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-3">📊</span>
                    Bạn Sẽ Khám Phá Được Gì?
                  </h3>
                  <ul className="text-gray-300 space-y-3">
                    <li className="flex items-start">
                      <span className="mr-3 text-golden mt-1">🛤️</span>
                      <div>
                        <strong className="text-white">Số Đường Đời (Life Path Number):</strong> Khám phá mục tiêu cuộc sống và con đường phát triển
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-golden mt-1">🎯</span>
                      <div>
                        <strong className="text-white">Số Định Mệnh:</strong> Hiểu rõ sứ mệnh và những gì bạn cần hoàn thành trong đời
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-golden mt-1">💫</span>
                      <div>
                        <strong className="text-white">Số Linh Hồn:</strong> Khám phá khao khát sâu kín và động lực nội tâm
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-golden mt-1">🎭</span>
                      <div>
                        <strong className="text-white">Số Nhân Cách:</strong> Cách người khác nhìn nhận bạn từ ấn tượng đầu tiên
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="cosmic-card hoverable rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-3"><StarIcon className="text-golden" size={24} /></span>
                    Tại Sao Chọn Chúng Tôi?
                  </h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 mt-1"><CheckIcon size={16} /></span>
                      <div>
                        <strong className="text-white">Thú vị và dễ hiểu:</strong> Nội dung được trình bày một cách sinh động, dễ tiếp cận
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 mt-1"><CheckIcon size={16} /></span>
                      <div>
                        <strong className="text-white">Hoàn toàn miễn phí:</strong> Tất cả nội dung đều được chia sẻ miễn phí
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 mt-1"><CheckIcon size={16} /></span>
                      <div>
                        <strong className="text-white">Bảo mật tuyệt đối:</strong> Thông tin cá nhân được bảo vệ an toàn
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 mt-1"><CheckIcon size={16} /></span>
                      <div>
                        <strong className="text-white">Kết quả chi tiết:</strong> Phân tích sâu sắc và lời khuyên cụ thể
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Loading State */}
            {isLoading && (
              <div className="text-center py-12">
                <div className="w-16 h-16 border-4 border-golden border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-xl text-gray-300">Đang tính toán số mệnh của bạn...</p>
              </div>
            )}

            {/* Results */}
            {!isLoading && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Kết Quả Thần Số Học Của Bạn
                  </h2>
                  <p className="text-gray-300">Khám phá những bí mật ẩn giấu trong các con số</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <ResultCard
                    title="Số Đường Đời"
                    value={result.lifePathNumber}
                    description={result.lifePath}
                    icon="🛤️"
                    color="from-gray-700 to-gray-800"
                  />
                  <ResultCard
                    title="Số Định Mệnh"
                    value={result.destinyNumber}
                    description={result.destiny}
                    icon="🎯"
                    color="from-indigo-600 to-blue-600"
                  />
                  <ResultCard
                    title="Số Linh Hồn"
                    value={result.soulNumber}
                    description={result.soul}
                    icon="💫"
                    color="from-gray-600 to-pink-600"
                  />
                  <ResultCard
                    title="Số Nhân Cách"
                    value={result.personalityNumber}
                    description={result.personality}
                    icon="🎭"
                    color="from-pink-600 to-gray-600"
                  />
                </div>

                <div className="text-center">
                  <button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-golden to-yellow-400 hover:from-yellow-400 hover:to-golden text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mr-4"
                  >
                    Tính Lại
                  </button>
                  <button className="border-2 border-golden text-golden hover:bg-golden hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300">
                    Chia Sẻ Kết Quả
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* FAQ Section */}
        <FAQSection
          description="Giải đáp những thắc mắc phổ biến về thần số học Pythagoras"
          faqs={[
            {
              question: "Thần số học Pythagoras là gì?",
              answer: "Thần số học Pythagoras là hệ thống phân tích dựa trên các con số được phát triển bởi nhà toán học Pythagoras từ thế kỷ 6 TCN. Hệ thống này sử dụng ngày sinh và tên tuổi để tính toán các con số quan trọng như số mệnh, số định mệnh, số linh hồn và số nhân cách, từ đó phân tích tính cách, tài năng và vận mệnh của một người."
            },
            {
              question: "Làm thế nào để tính số mệnh (Life Path Number)?",
              answer: "Để tính số mệnh, bạn cộng tất cả các chữ số trong ngày sinh đầy đủ (ngày/tháng/năm) cho đến khi được một chữ số từ 1-9 hoặc số chủ đạo 11, 22, 33. Ví dụ: sinh ngày 15/08/1990 = 1+5+0+8+1+9+9+0 = 33 → 3+3 = 6. Số mệnh 6 thể hiện người có trách nhiệm, yêu thương gia đình và có khả năng chăm sóc người khác."
            },
            {
              question: "Thần số học có đáng tin không?",
              answer: "Thần số học là một môn học cổ xưa được nhiều người quan tâm và tìm hiểu. Đây là cách thú vị để khám phá bản thân thông qua những con số trong ngày sinh. Nhiều bạn đã chia sẻ rằng thông tin này khá phù hợp với tính cách thực tế của mình."
            },
            {
              question: "Tôi có thể thay đổi vận mệnh theo thần số học không?",
              answer: "Thần số học không quyết định hoàn toàn vận mệnh mà chỉ chỉ ra xu hướng và tiềm năng. Bạn có thể cải thiện cuộc sống bằng cách: hiểu rõ điểm mạnh để phát huy, nhận biết thách thức để khắc phục, chọn nghề nghiệp phù hợp với số mệnh, và đưa ra quyết định đúng đắn dựa trên hiểu biết về bản thân."
            },
            {
              question: "Website này có tính phí không?",
              answer: "Không, tất cả nội dung trên website đều hoàn toàn miễn phí. Bạn có thể thoải mái khám phá thần số học, tìm hiểu về tính cách và những điều thú vị về bản thân mà không tốn bất kỳ chi phí nào. Chúng mình chia sẻ những kiến thức này với mong muốn giúp mọi người hiểu rõ hơn về bản thân."
            }
          ]}
        />

        {/* Related Articles */}
        <RelatedArticles currentPage="/numerology" category="numerology" />

        {/* Related Services */}
        <RelatedServices currentPage="/numerology" />
      </div>
    </>
  );
}

