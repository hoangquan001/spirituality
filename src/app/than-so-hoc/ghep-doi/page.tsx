"use client";

import { BlockContent } from "@/components/BlockContent";
import ContentHeader from "@/components/ContentHeader";
import RelatedServices from "@/components/RelatedServices";
import { birthDateToLifePath } from "@/lib/numerology";
import { useState } from "react";

interface CompatibilityResult {
  person1: {
    lifePath: number;
    name: string;
    birthDate: string;
  };
  person2: {
    lifePath: number;
    name: string;
    birthDate: string;
  };
  compatibility: {
    score: number;
    level: string;
    description: string;
    strengths: string[];
    challenges: string[];
    advice: string;
  };
}

const compatibilityData: Record<string, any> = {
  "1-1": {
    score: 85,
    level: "Rất tốt",
    description:
      "Cả hai đều là những người lãnh đạo mạnh mẽ, có thể tạo ra một đội ngũ quyền lực.",
  },
  "1-2": {
    score: 70,
    level: "Tốt",
    description:
      "Sự kết hợp giữa người lãnh đạo và người hỗ trợ, bổ sung tốt cho nhau.",
  },
  "1-3": {
    score: 75,
    level: "Tốt",
    description:
      "Năng lượng sáng tạo của số 3 kết hợp với sự quyết đoán của số 1.",
  },
  "1-4": {
    score: 60,
    level: "Trung bình",
    description:
      "Cần thời gian để hiểu nhau, nhưng có thể xây dựng mối quan hệ bền vững.",
  },
  "1-5": {
    score: 80,
    level: "Rất tốt",
    description:
      "Cả hai đều yêu thích tự do và phiêu lưu, tạo ra mối quan hệ thú vị.",
  },
  "1-6": {
    score: 65,
    level: "Tốt",
    description: "Số 6 mang lại sự ấm áp cho số 1, tạo ra sự cân bằng tốt.",
  },
  "1-7": {
    score: 55,
    level: "Trung bình",
    description: "Hai tính cách khác biệt, cần sự kiên nhẫn để hiểu nhau.",
  },
  "1-8": {
    score: 90,
    level: "Xuất sắc",
    description:
      "Cả hai đều hướng đến thành công, có thể đạt được nhiều thành tựu cùng nhau.",
  },
  "1-9": {
    score: 70,
    level: "Tốt",
    description: "Sự kết hợp giữa tầm nhìn của số 9 và sự quyết đoán của số 1.",
  },

  "2-2": {
    score: 80,
    level: "Rất tốt",
    description: "Cả hai đều hiểu và hỗ trợ nhau một cách tự nhiên.",
  },
  "2-3": {
    score: 85,
    level: "Rất tốt",
    description: "Sự kết hợp hoàn hảo giữa sự nhạy cảm và sáng tạo.",
  },
  "2-4": {
    score: 75,
    level: "Tốt",
    description: "Sự ổn định của số 4 kết hợp với sự nhạy cảm của số 2.",
  },
  "2-5": {
    score: 60,
    level: "Trung bình",
    description: "Cần cân bằng giữa sự tự do và cam kết.",
  },
  "2-6": {
    score: 90,
    level: "Xuất sắc",
    description: "Cả hai đều quan tâm đến gia đình và mối quan hệ.",
  },
  "2-7": {
    score: 70,
    level: "Tốt",
    description: "Sự sâu sắc của số 7 kết hợp với sự đồng cảm của số 2.",
  },
  "2-8": {
    score: 65,
    level: "Tốt",
    description: "Số 2 có thể hỗ trợ số 8 trong việc đạt được mục tiêu.",
  },
  "2-9": {
    score: 85,
    level: "Rất tốt",
    description: "Cả hai đều có trái tim nhân ái và quan tâm đến người khác.",
  },

  "3-3": {
    score: 80,
    level: "Rất tốt",
    description: "Hai người sáng tạo cùng nhau tạo ra những điều kỳ diệu.",
  },
  "3-4": {
    score: 55,
    level: "Trung bình",
    description: "Cần cân bằng giữa sự sáng tạo và tính thực tế.",
  },
  "3-5": {
    score: 90,
    level: "Xuất sắc",
    description: "Cả hai đều yêu thích sự tự do và những trải nghiệm mới.",
  },
  "3-6": {
    score: 75,
    level: "Tốt",
    description: "Sự sáng tạo của số 3 được số 6 hỗ trợ và nuôi dưỡng.",
  },
  "3-7": {
    score: 60,
    level: "Trung bình",
    description: "Hai cách tiếp cận khác nhau với cuộc sống.",
  },
  "3-8": {
    score: 70,
    level: "Tốt",
    description: "Số 8 có thể giúp số 3 biến ý tưởng thành hiện thực.",
  },
  "3-9": {
    score: 85,
    level: "Rất tốt",
    description: "Cả hai đều có tầm nhìn rộng và khả năng truyền cảm hứng.",
  },

  "4-4": {
    score: 75,
    level: "Tốt",
    description:
      "Cả hai đều đáng tin cậy và có thể xây dựng nền tảng vững chắc.",
  },
  "4-5": {
    score: 50,
    level: "Thách thức",
    description: "Hai tính cách đối lập, cần nhiều nỗ lực để hòa hợp.",
  },
  "4-6": {
    score: 85,
    level: "Rất tốt",
    description: "Cả hai đều coi trọng gia đình và sự ổn định.",
  },
  "4-7": {
    score: 70,
    level: "Tốt",
    description: "Sự kết hợp giữa tính thực tế và trí tuệ.",
  },
  "4-8": {
    score: 80,
    level: "Rất tốt",
    description: "Cả hai đều có mục tiêu rõ ràng và làm việc chăm chỉ.",
  },
  "4-9": {
    score: 65,
    level: "Tốt",
    description: "Số 4 có thể giúp số 9 thực hiện những ý tưởng lớn.",
  },

  "5-5": {
    score: 85,
    level: "Rất tốt",
    description: "Cả hai đều yêu thích tự do và phiêu lưu.",
  },
  "5-6": {
    score: 60,
    level: "Trung bình",
    description: "Cần cân bằng giữa tự do cá nhân và cam kết gia đình.",
  },
  "5-7": {
    score: 75,
    level: "Tốt",
    description: "Cả hai đều cần không gian riêng và sự độc lập.",
  },
  "5-8": {
    score: 70,
    level: "Tốt",
    description: "Số 5 mang lại sự linh hoạt cho số 8.",
  },
  "5-9": {
    score: 80,
    level: "Rất tốt",
    description: "Cả hai đều có tầm nhìn rộng và yêu thích khám phá.",
  },

  "6-6": {
    score: 90,
    level: "Xuất sắc",
    description: "Cả hai đều quan tâm sâu sắc đến gia đình và cộng đồng.",
  },
  "6-7": {
    score: 65,
    level: "Tốt",
    description: "Sự ấm áp của số 6 kết hợp với trí tuệ của số 7.",
  },
  "6-8": {
    score: 75,
    level: "Tốt",
    description: "Số 6 mang lại sự cân bằng cho tham vọng của số 8.",
  },
  "6-9": {
    score: 95,
    level: "Hoàn hảo",
    description:
      "Cả hai đều có trái tim nhân ái và mong muốn giúp đỡ người khác.",
  },

  "7-7": {
    score: 80,
    level: "Rất tốt",
    description: "Cả hai đều hiểu và tôn trọng nhu cầu riêng tư của nhau.",
  },
  "7-8": {
    score: 60,
    level: "Trung bình",
    description: "Hai cách tiếp cận khác nhau với thành công.",
  },
  "7-9": {
    score: 85,
    level: "Rất tốt",
    description: "Sự kết hợp giữa trí tuệ sâu sắc và tầm nhìn rộng.",
  },

  "8-8": {
    score: 85,
    level: "Rất tốt",
    description:
      "Cả hai đều có tham vọng lớn và có thể đạt được thành công vượt trội.",
  },
  "8-9": {
    score: 70,
    level: "Tốt",
    description: "Số 9 có thể mở rộng tầm nhìn của số 8.",
  },

  "9-9": {
    score: 90,
    level: "Xuất sắc",
    description:
      "Cả hai đều có tầm nhìn nhân đạo và mong muốn cống hiến cho thế giới.",
  },
};

const content: string = `### Thần Số Học Trong Tình Yêu Là Gì?

Thần số học không chỉ giúp bạn hiểu về bản thân mà còn là một công cụ hữu ích để khám phá sự hòa hợp trong các mối quan hệ, đặc biệt là tình yêu. Bằng cách phân tích các con số chủ đạo (Life Path Number), con số ngày sinh (Birthday Number), hay thậm chí là con số biểu đạt (Expression Number) của hai người, chúng ta có thể nhận diện những điểm tương đồng, những thách thức tiềm ẩn và cách để cùng nhau phát triển.

Thực chất, "hợp tuổi" trong Thần số học không phải là một phép tính cứng nhắc để khẳng định "được" hay "không được". Thay vào đó, nó là một bản đồ chỉ dẫn, giúp cả hai đối tác hiểu rõ hơn về tính cách, mục đích sống, và những bài học mà mỗi người mang theo.

---

### Cách Các Con Số Tương Tác Trong Tình Yêu

Mỗi con số chủ đạo từ 1 đến 9 (và các số Master như 11, 22, 33) đều mang một năng lượng và đặc điểm riêng. Khi hai con số này kết hợp, chúng tạo ra một "hóa học" độc đáo:

* **Tương đồng và bổ trợ:** Một số cặp số có năng lượng tương đồng, dễ dàng thấu hiểu và hỗ trợ lẫn nhau. Ví dụ, một người Số 3 (năng động, sáng tạo) có thể rất hợp với người Số 5 (yêu tự do, thích khám phá) vì cả hai đều hướng ngoại và cởi mở.

* **Thách thức và bài học:** Một số cặp số khác có thể mang đến những thách thức, đòi hỏi sự kiên nhẫn và nỗ lực để hòa hợp. Chẳng hạn, người Số 4 (ổn định, thực tế) có thể thấy khó hiểu người Số 7 (nội tâm, bí ẩn), nhưng chính sự khác biệt này lại là cơ hội để cả hai học hỏi và mở rộng thế giới quan của mình.

* **Cân bằng và phát triển:** Mục tiêu của việc xem xét Thần số học trong tình yêu là tìm ra sự cân bằng. Không có cặp số nào là hoàn hảo hay hoàn toàn "khắc khẩu". Quan trọng là nhận ra những điểm khác biệt và tìm cách dung hòa, biến chúng thành sức mạnh để mối quan hệ thêm bền chặt.

---

### Không Phải Là Bói Toán, Mà Là Hướng Dẫn

Điều quan trọng cần nhớ là Thần số học không phải là một công cụ để "xem bói" tình yêu và quyết định ai là người bạn đời của bạn. Nó là một **hướng dẫn**, một lăng kính giúp bạn:

* **Hiểu sâu hơn về đối tác:** Vì sao họ lại hành xử như vậy? Động lực sâu xa của họ là gì?
* **Nhận diện tiềm năng và thách thức:** Cặp đôi của bạn có những thế mạnh chung nào để cùng phát triển? Những khác biệt nào cần được thấu hiểu và chấp nhận?
* **Xây dựng mối quan hệ bền vững:** Bằng cách nhận thức được năng lượng của các con số, bạn có thể chủ động điều chỉnh, giao tiếp hiệu quả hơn và cùng nhau vượt qua mọi rào cản.

Trong tình yêu, sự thấu hiểu và chấp nhận luôn là chìa khóa. Thần số học chỉ là một công cụ giúp bạn mở cánh cửa đó rộng hơn, mang đến cái nhìn sâu sắc về một nửa của mình và con đường tình yêu mà cả hai đang bước đi.`;
export default function NumerologyCompatibilityPage() {
  const [person1, setPerson1] = useState({ name: "", birthDate: "" });
  const [person2, setPerson2] = useState({ name: "", birthDate: "" });
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateCompatibility = () => {
    if (
      !person1.name ||
      !person1.birthDate ||
      !person2.name ||
      !person2.birthDate
    ) {
      alert("Vui lòng nhập đầy đủ thông tin cho cả hai người");
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const lifePath1 = birthDateToLifePath(person1.birthDate);
      const lifePath2 = birthDateToLifePath(person2.birthDate);

      const key1 = `${lifePath1}-${lifePath2}`;
      const key2 = `${lifePath2}-${lifePath1}`;

      const compatData = compatibilityData[key1] ||
        compatibilityData[key2] || {
          score: 70,
          level: "Tốt",
          description:
            "Mỗi mối quan hệ đều có những điểm mạnh và thách thức riêng.",
        };

      const newResult: CompatibilityResult = {
        person1: {
          lifePath: lifePath1,
          name: person1.name,
          birthDate: person1.birthDate,
        },
        person2: {
          lifePath: lifePath2,
          name: person2.name,
          birthDate: person2.birthDate,
        },
        compatibility: {
          score: compatData.score,
          level: compatData.level,
          description: compatData.description,
          strengths: getStrengths(lifePath1, lifePath2),
          challenges: getChallenges(lifePath1, lifePath2),
          advice: getAdvice(lifePath1, lifePath2),
        },
      };

      setResult(newResult);
      setIsCalculating(false);
    }, 1500);
  };

  const getStrengths = (num1: number, num2: number): string[] => {
    const strengths = [
      "Cả hai đều có những giá trị cốt lõi tương đồng",
      "Bổ sung tốt cho nhau trong các điểm mạnh",
      "Có thể học hỏi và phát triển cùng nhau",
      "Tạo ra sự cân bằng trong mối quan hệ",
    ];
    return strengths.slice(0, 3);
  };

  const getChallenges = (num1: number, num2: number): string[] => {
    const challenges = [
      "Cần thời gian để hiểu và thích nghi với nhau",
      "Có thể có những quan điểm khác biệt cần thảo luận",
      "Cần sự kiên nhẫn và thấu hiểu lẫn nhau",
      "Học cách tôn trọng không gian riêng của nhau",
    ];
    return challenges.slice(0, 2);
  };

  const getAdvice = (num1: number, num2: number): string => {
    return "Hãy tập trung vào những điểm chung và học cách đánh giá cao những khác biệt. Giao tiếp cởi mở và thành thật sẽ giúp mối quan hệ phát triển bền vững.";
  };

  return (
    <div className="min-h-screen ">
      <ContentHeader
        title="Hợp Tuổi Tình Yêu Theo Thần Số Học"
        description="Khám phá độ hợp tình yêu giữa các cung hoàng đạo"
        breadcrumb={[
          { label: "Trang Chủ", href: "/" },
          { label: "Cung Hoàng Đạo", href: "/cung-hoang-dao" },
          { label: "Ghép Đôi", href: "/cung-hoang-dao/compatibility" },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Input Form */}
        <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Nhập Thông Tin Hai Người
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Person 1 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-golden flex items-center gap-2">
                <span>👤</span> Người thứ nhất
              </h3>
              <div>
                <label className="block text-gray-300 mb-2">Tên</label>
                <input
                  type="text"
                  value={person1.name}
                  onChange={(e) =>
                    setPerson1({ ...person1, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-golden focus:outline-none"
                  placeholder="Nhập tên..."
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Ngày sinh</label>
                <input
                  type="date"
                  value={person1.birthDate}
                  onChange={(e) =>
                    setPerson1({ ...person1, birthDate: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-golden focus:outline-none"
                />
              </div>
            </div>

            {/* Person 2 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-golden flex items-center gap-2">
                <span>👤</span> Người thứ hai
              </h3>
              <div>
                <label className="block text-gray-300 mb-2">Tên</label>
                <input
                  type="text"
                  value={person2.name}
                  onChange={(e) =>
                    setPerson2({ ...person2, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-golden focus:outline-none"
                  placeholder="Nhập tên..."
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Ngày sinh</label>
                <input
                  type="date"
                  value={person2.birthDate}
                  onChange={(e) =>
                    setPerson2({ ...person2, birthDate: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-golden focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={calculateCompatibility}
              disabled={isCalculating}
              className="bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Đang phân tích...
                </span>
              ) : (
                <span className="flex items-center gap-2">💕 Xem Độ Hợp</span>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-6">
            {/* Compatibility Score */}
            <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Kết Quả Ghép Đôi
                </h2>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-golden font-semibold">
                      {result.person1.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      Số đường đời: {result.person1.lifePath}
                    </div>
                  </div>
                  <div className="text-3xl">💕</div>
                  <div className="text-center">
                    <div className="text-golden font-semibold">
                      {result.person2.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      Số đường đời: {result.person2.lifePath}
                    </div>
                  </div>
                </div>

                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-golden to-yellow-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-golden">
                          {result.compatibility.score}%
                        </div>
                        <div className="text-sm text-gray-300">
                          {result.compatibility.level}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {result.compatibility.description}
                </p>
              </div>
            </div>

            {/* Detailed Analysis */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Strengths */}
              <div className="bg-gradient-to-br from-green-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-green-700/20">
                <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                  <span>✨</span> Điểm Mạnh
                </h3>
                <ul className="space-y-2">
                  {result.compatibility.strengths.map((strength, index) => (
                    <li
                      key={index}
                      className="text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-green-400 mt-1">•</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="bg-gradient-to-br from-orange-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-orange-700/20">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <span>⚡</span> Thách Thức
                </h3>
                <ul className="space-y-2">
                  {result.compatibility.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-orange-400 mt-1">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Advice */}
            <div className="bg-gradient-to-br from-blue-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-blue-700/20">
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <span>💡</span> Lời Khuyên
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {result.compatibility.advice}
              </p>
            </div>
          </div>
        )}

        <BlockContent>{content}</BlockContent>
        {/* Related Links */}
        <RelatedServices currentPage="/boi-bai-tay" />
      </div>
    </div>
  );
}
