'use client';

import { useState } from 'react';
import NumerologyForm from '../../components/NumerologyForm';
import ResultCard from '../../components/ResultCard';

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
        9: "Bạn là người nhân đạo, rộng lượng và có tầm nhìn toàn cầu. Số 9 đại diện cho sự hoàn thiện, lòng từ bi và phục vụ nhân loại.",
        11: "Bạn là người có trực giác mạnh, tâm linh cao và khả năng truyền cảm hứng. Số 11 là số chủ đạo đại diện cho sự giác ngộ và năng lực siêu nhiên.",
        22: "Bạn là người có khả năng biến ước mơ thành hiện thực một cách vĩ đại. Số 22 là số chủ đạo đại diện cho kiến trúc sư của ước mơ.",
        33: "Bạn là người thầy tâm linh, có khả năng chữa lành và nâng cao ý thức con người. Số 33 là số chủ đạo cao nhất đại diện cho sự hy sinh và phục vụ."
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
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent">
              Thần Số Học
            </span>
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Khám phá bí mật cuộc sống thông qua sức mạnh của các con số. 
            Tìm hiểu về đường đời, số mệnh và những điều kỳ diệu ẩn giấu trong ngày sinh của bạn.
          </p>
        </div>

        {!result ? (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Form */}
              <div>
                <NumerologyForm onSubmit={handleFormSubmit} />
              </div>

              {/* Info */}
              <div className="space-y-6">
                <div className="cosmic-card rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-3">🔮</span>
                    Thần Số Học Là Gì?
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    Thần số học là một hệ thống cổ xưa sử dụng các con số để hiểu về tính cách, 
                    tiềm năng và vận mệnh của con người. Mỗi số từ 1 đến 9 đều mang một ý nghĩa 
                    và năng lượng riêng biệt.
                  </p>
                </div>

                <div className="cosmic-card rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-3">📊</span>
                    Bạn Sẽ Nhận Được Gì?
                  </h3>
                  <ul className="text-purple-200 space-y-2">
                    <li className="flex items-center"><span className="mr-2">✦</span> Số đường đời (Life Path Number)</li>
                    <li className="flex items-center"><span className="mr-2">✦</span> Số định mệnh (Destiny Number)</li>
                    <li className="flex items-center"><span className="mr-2">✦</span> Số linh hồn (Soul Number)</li>
                    <li className="flex items-center"><span className="mr-2">✦</span> Số nhân cách (Personality Number)</li>
                  </ul>
                </div>

                <div className="cosmic-card rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-3">💫</span>
                    Tại Sao Nên Tin Tưởng?
                  </h3>
                  <p className="text-purple-200 leading-relaxed">
                    Thần số học đã được sử dụng hàng nghìn năm bởi các nền văn minh cổ đại như 
                    Babylon, Hy Lạp và Ai Cập. Đây không chỉ là mê tín mà là một công cụ 
                    tự hiểu biết có cơ sở khoa học.
                  </p>
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
                <p className="text-xl text-purple-200">Đang tính toán số mệnh của bạn...</p>
              </div>
            )}

            {/* Results */}
            {!isLoading && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Kết Quả Thần Số Học Của Bạn
                  </h2>
                  <p className="text-purple-200">Khám phá những bí mật ẩn giấu trong các con số</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <ResultCard
                    title="Số Đường Đời"
                    value={result.lifePathNumber}
                    description={result.lifePath}
                    icon="🛤️"
                    color="from-purple-600 to-indigo-600"
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
                    color="from-purple-600 to-pink-600"
                  />
                  <ResultCard
                    title="Số Nhân Cách"
                    value={result.personalityNumber}
                    description={result.personality}
                    icon="🎭"
                    color="from-pink-600 to-purple-600"
                  />
                </div>

                <div className="text-center">
                  <button
                    onClick={resetForm}
                    className="bg-gradient-to-r from-golden to-yellow-400 hover:from-yellow-400 hover:to-golden text-purple-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mr-4"
                  >
                    Tính Lại
                  </button>
                  <button className="border-2 border-golden text-golden hover:bg-golden hover:text-purple-900 font-bold py-3 px-8 rounded-full transition-all duration-300">
                    Chia Sẻ Kết Quả
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
