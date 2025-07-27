'use client';

import { BlockContent } from '@/components/BlockContent';
import ContentHeader from '@/components/ContentHeader';
import FAQSection from '@/components/FAQSection';
import NumerologyForm from '@/components/NumerologyForm';
import NumerologyStructuredData from '@/components/NumerologyStructuredData';
import RelatedArticles from '@/components/RelatedArticles';
import RelatedServices from '@/components/RelatedServices';
import ResultCard from '@/components/ResultCard';
import { useState } from 'react';

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
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 1,
        k: 2,
        l: 3,
        m: 4,
        n: 5,
        o: 6,
        p: 7,
        q: 8,
        r: 9,
        s: 1,
        t: 2,
        u: 3,
        v: 4,
        w: 5,
        x: 6,
        y: 7,
        z: 8,
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
    const personalityNumber = nameToNumber(
      fullName.replace(/[aeiouAEIOU]/g, '')
    );

    // Mô tả ý nghĩa số
    const getLifePathMeaning = (num: number): string => {
      const meanings: { [key: number]: string } = {
        1: 'Bạn là người lãnh đạo tự nhiên, độc lập và sáng tạo. Số 1 đại diện cho sự khởi đầu mới, ý chí mạnh mẽ và khả năng tiên phong trong mọi lĩnh vực.',
        2: 'Bạn là người hòa thuận, nhạy cảm và có khả năng hợp tác tốt. Số 2 đại diện cho sự cân bằng, hòa hợp và khả năng làm việc nhóm xuất sắc.',
        3: 'Bạn là người sáng tạo, vui vẻ và có khả năng giao tiếp tuyệt vời. Số 3 đại diện cho nghệ thuật, sự biểu đạt và niềm vui sống.',
        4: 'Bạn là người thực tế, đáng tin cậy và có khả năng tổ chức tốt. Số 4 đại diện cho sự ổn định, lao động chăm chỉ và xây dựng nền tảng vững chắc.',
        5: 'Bạn là người tự do, phiêu lưu và thích khám phá. Số 5 đại diện cho sự thay đổi, du lịch và trải nghiệm đa dạng trong cuộc sống.',
        6: 'Bạn là người quan tâm đến gia đình, có trách nhiệm và yêu thương. Số 6 đại diện cho tình yêu thương, chăm sóc và sự hòa hợp trong gia đình.',
        7: 'Bạn là người tâm linh, thích nghiên cứu và tìm hiểu sâu. Số 7 đại diện cho trí tuệ, sự hoàn hảo và khả năng phân tích sâu sắc.',
        8: 'Bạn là người có tham vọng, thực tế và thành công trong kinh doanh. Số 8 đại diện cho quyền lực, thành công vật chất và khả năng quản lý.',
        9: 'Bạn là người nhân đạo, rộng lượng và có tầm nhìn toàn cầu. Số 9 đại diện cho sự hoàn thiện, lòng từ bi và giúp đỡ nhân loại.',
        11: 'Bạn là người có trực giác mạnh, tâm linh cao và khả năng truyền cảm hứng. Số 11 là số chủ đạo đại diện cho sự giác ngộ và năng lực siêu nhiên.',
        22: 'Bạn là người có khả năng biến ước mơ thành hiện thực một cách vĩ đại. Số 22 là số chủ đạo đại diện cho kiến trúc sư của ước mơ.',
        33: 'Bạn là người thầy tâm linh, có khả năng chữa lành và nâng cao ý thức con người. Số 33 là số chủ đạo cao nhất đại diện cho sự hy sinh và giúp đỡ.',
      };
      return meanings[num] || 'Một con số đặc biệt với ý nghĩa sâu sắc.';
    };

    return {
      lifePathNumber,
      destinyNumber,
      soulNumber,
      personalityNumber,
      lifePath: getLifePathMeaning(lifePathNumber),
      destiny: `Số định mệnh ${destinyNumber} cho thấy mục tiêu cuộc đời và những gì bạn cần hoàn thành.`,
      soul: `Số linh hồn ${soulNumber} thể hiện những khao khát sâu kín trong tâm hồn bạn.`,
      personality: `Số nhân cách ${personalityNumber} cho thấy cách người khác nhìn nhận bạn từ ấn tượng đầu tiên.`,
    };
  };

  const handleFormSubmit = async (data: FormData) => {
    setIsLoading(true);

    // Giả lập thời gian xử lý
    await new Promise((resolve) => setTimeout(resolve, 2000));

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
        title='Thần Số Học Pythagoras'
        description='Tìm hiểu những điều thú vị về bản thân qua ngày sinh của bạn. Khám phá tính cách, điểm mạnh và những đặc điểm nổi bật.'
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Thần Số Học', href: '/than-so-hoc' },
        ]}
      />
      <div className='min-h-screen py-10 px-4'>
        {!result ? (
          <div className='max-w-6xl mx-auto'>
            <NumerologyForm onSubmit={handleFormSubmit} />

            <BlockContent>{content}</BlockContent>
          </div>
        ) : (
          <div className='max-w-6xl mx-auto'>
            {/* Loading State */}
            {isLoading && (
              <div className='text-center py-12'>
                <div className='w-16 h-16 border-4 border-golden border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
                <p className='text-xl text-gray-300'>
                  Đang tính toán số mệnh của bạn...
                </p>
              </div>
            )}

            {/* Results */}
            {!isLoading && (
              <div>
                <div className='text-center mb-12'>
                  <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                    Kết Quả Thần Số Học Của Bạn
                  </h2>
                  <p className='text-gray-300'>
                    Khám phá những bí mật ẩn giấu trong các con số
                  </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                  <ResultCard
                    title='Số Đường Đời'
                    value={result.lifePathNumber}
                    description={result.lifePath}
                    icon='🛤️'
                    color='from-gray-700 to-gray-800'
                  />
                  <ResultCard
                    title='Số Định Mệnh'
                    value={result.destinyNumber}
                    description={result.destiny}
                    icon='🎯'
                    color='from-indigo-600 to-blue-600'
                  />
                  <ResultCard
                    title='Số Linh Hồn'
                    value={result.soulNumber}
                    description={result.soul}
                    icon='💫'
                    color='from-gray-600 to-pink-600'
                  />
                  <ResultCard
                    title='Số Nhân Cách'
                    value={result.personalityNumber}
                    description={result.personality}
                    icon='🎭'
                    color='from-pink-600 to-gray-600'
                  />
                </div>

                <div className='text-center'>
                  <button
                    onClick={resetForm}
                    className='bg-gradient-to-r from-golden to-yellow-400 hover:from-yellow-400 hover:to-golden text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mr-4'
                  >
                    Tính Lại
                  </button>
                  <button className='border-2 border-golden text-golden hover:bg-golden hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300'>
                    Chia Sẻ Kết Quả
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* FAQ Section */}
        <FAQSection
          description='Giải đáp những thắc mắc phổ biến về thần số học Pythagoras'
          faqs={[
            {
              question: 'Thần số học Pythagoras là gì?',
              answer:
                'Thần số học Pythagoras là hệ thống phân tích dựa trên các con số được phát triển bởi nhà toán học Pythagoras từ thế kỷ 6 TCN. Hệ thống này sử dụng ngày sinh và tên tuổi để tính toán các con số quan trọng như số mệnh, số định mệnh, số linh hồn và số nhân cách, từ đó phân tích tính cách, tài năng và vận mệnh của một người.',
            },
            {
              question: 'Làm thế nào để tính số mệnh (Life Path Number)?',
              answer:
                'Để tính số mệnh, bạn cộng tất cả các chữ số trong ngày sinh đầy đủ (ngày/tháng/năm) cho đến khi được một chữ số từ 1-9 hoặc số chủ đạo 11, 22, 33. Ví dụ: sinh ngày 15/08/1990 = 1+5+0+8+1+9+9+0 = 33 → 3+3 = 6. Số mệnh 6 thể hiện người có trách nhiệm, yêu thương gia đình và có khả năng chăm sóc người khác.',
            },
            {
              question: 'Thần số học có đáng tin không?',
              answer:
                'Thần số học là một môn học cổ xưa được nhiều người quan tâm và tìm hiểu. Đây là cách thú vị để khám phá bản thân thông qua những con số trong ngày sinh. Nhiều bạn đã chia sẻ rằng thông tin này khá phù hợp với tính cách thực tế của mình.',
            },
            {
              question: 'Tôi có thể thay đổi vận mệnh theo thần số học không?',
              answer:
                'Thần số học không quyết định hoàn toàn vận mệnh mà chỉ chỉ ra xu hướng và tiềm năng. Bạn có thể cải thiện cuộc sống bằng cách: hiểu rõ điểm mạnh để phát huy, nhận biết thách thức để khắc phục, chọn nghề nghiệp phù hợp với số mệnh, và đưa ra quyết định đúng đắn dựa trên hiểu biết về bản thân.',
            },
          ]}
        />

        {/* Related Articles */}
        <RelatedArticles currentPage='/than-so-hoc' category='numerology' />

        {/* Related Services */}
        <RelatedServices currentPage='/than-so-hoc' />
      </div>
    </>
  );
}

const content = `
## Thần Số Học Là Gì? Giải Mã Sức Mạnh Từ Những Con Số Định Mệnh

Bạn có bao giờ tự hỏi liệu có một "mật mã" nào đó ẩn chứa trong ngày sinh hay tên gọi của mình, tiết lộ về con người thật và con đường bạn sẽ đi? Chào mừng bạn đến với thế giới của **Thần Số Học** (Numerology) – một bộ môn khoa học cổ xưa nhưng vẫn đầy tính ứng dụng, giúp bạn giải mã những bí ẩn đó.

---

### Thần Số Học: Hơn Cả Con Số, Là Bản Đồ Vận Mệnh

Thần số học là hệ thống nghiên cứu về mối liên hệ huyền bí giữa các con số và những sự kiện, đặc điểm tính cách của con người. Khác với những phương pháp dự đoán đơn thuần, Thần số học tập trung vào việc **khai phá tiềm năng bẩm sinh** và **định hướng phát triển cá nhân**. Mỗi con số từ 1 đến 9 (và một số số master đặc biệt như 11, 22, 33) đều mang một tần số năng lượng, một rung động riêng, ảnh hưởng đến các khía cạnh khác nhau trong cuộc đời bạn.

Khi tìm hiểu về Thần số học, bạn sẽ không chỉ biết *bạn là ai*, mà còn hiểu *tại sao bạn lại là người như vậy*, và *làm thế nào để phát huy tối đa những ưu điểm, khắc phục nhược điểm của mình*. Đây chính là công cụ mạnh mẽ để:

* **Hiểu rõ bản ngã:** Khám phá **con số Chủ Đạo** (Life Path Number), con số quan trọng nhất, tiết lộ sứ mệnh cuộc đời, tính cách cốt lõi và những bài học bạn cần trải qua.
* **Giải mã năng lực tiềm ẩn:** Tìm ra **con số Vận Mệnh** (Destiny Number) từ tên gọi, cho thấy tài năng, tham vọng và cách bạn thể hiện bản thân với thế giới.
* **Nhận diện điểm mạnh/điểm yếu:** Các con số khác như **Linh Hồn** (Soul Urge), **Tính Cách** (Personality Number) sẽ bổ trợ, giúp bạn có cái nhìn toàn diện về nội tâm và cách tương tác xã hội.
* **Định hướng phát triển cá nhân:** Từ những phân tích chi tiết, bạn có thể đưa ra các lựa chọn sáng suốt hơn về sự nghiệp, tình yêu, các mối quan hệ và những bước ngoặt quan trọng trong cuộc đời.

---

### Lịch Sử Hình Thành Và Phát Triển Của Thần Số Học

Thần số học không phải là một bộ môn mới mẻ. Nguồn gốc của nó có thể truy ngược về các nền văn minh cổ đại:

* **Ai Cập cổ đại và Babylon:** Các nhà hiền triết đã sử dụng các con số để giải thích các hiện tượng vũ trụ và cuộc sống con người.
* **Hy Lạp cổ đại:** **Pythagoras**, nhà toán học vĩ đại, thường được coi là "cha đẻ của Thần số học hiện đại". Ông tin rằng "Vạn vật đều là con số" và phát triển một hệ thống chặt chẽ để gán ý nghĩa cho các con số, không chỉ trong toán học mà còn trong triết học và tâm linh.
* **Do Thái giáo:** Hệ thống Kabbalah cũng sử dụng các chữ cái tiếng Do Thái gán với giá trị số (Gematria) để giải mã các văn bản kinh điển và tìm hiểu về vũ trụ.
* **Trung Quốc và Ấn Độ cổ đại:** Các nền văn hóa này cũng có những hệ thống tương tự, nơi các con số được xem là mang năng lượng và ý nghĩa đặc biệt trong phong thủy, chiêm tinh.

Ngày nay, Thần số học đã được đơn giản hóa và hệ thống hóa để dễ tiếp cận hơn, trở thành một công cụ tự khám phá bản thân được nhiều người tin dùng.

---

### Các Chỉ Số Chính Trong Thần Số Học Mà Bạn Cần Biết

Để hiểu rõ hơn về bản thân qua Thần số học, bạn cần làm quen với một số chỉ số cốt lõi:

1.  **Con số Chủ Đạo (Life Path Number):** Được tính từ tổng ngày tháng năm sinh của bạn. Đây là con số quan trọng nhất, tiết lộ tính cách bẩm sinh, sứ mệnh cuộc đời và những bài học bạn sẽ đối mặt.
2.  **Con số Vận Mệnh (Destiny Number / Expression Number):** Được tính từ tổng các chữ cái trong họ tên đầy đủ của bạn. Nó thể hiện tài năng, kỹ năng bẩm sinh, cách bạn thể hiện bản thân và con đường bạn sẽ đạt được mục tiêu trong cuộc sống.
3.  **Con số Linh Hồn (Soul Urge / Heart's Desire Number):** Tính từ tổng các nguyên âm trong tên đầy đủ. Con số này tiết lộ những khao khát sâu thẳm nhất, động lực bên trong và những gì thực sự khiến bạn hạnh phúc.
4.  **Con số Tính Cách (Personality Number):** Tính từ tổng các phụ âm trong tên đầy đủ. Nó cho thấy cách bạn thể hiện ra bên ngoài, ấn tượng đầu tiên bạn tạo ra cho người khác và cách bạn tương tác xã hội.
5.  **Biểu Đồ Ngày Sinh (Birth Chart):** Phân tích tất cả các con số xuất hiện trong ngày sinh của bạn, từ đó hé lộ các khía cạnh tính cách, điểm mạnh, điểm yếu và các bài học cần học.

Mỗi chỉ số đều mang một ý nghĩa riêng, và khi kết hợp lại, chúng tạo nên một bức tranh toàn diện và sâu sắc về con người bạn.

---

### Thần Số Học Có Phải Là Bói Toán Hay Không?

Đây là câu hỏi thường gặp. **Thần số học không phải là bói toán** theo nghĩa dự đoán tương lai một cách cứng nhắc. Thay vào đó, nó là một công cụ **tự nhận thức và phát triển bản thân**. Thần số học cung cấp cho bạn cái nhìn sâu sắc về những tiềm năng, xu hướng và thử thách có thể có trong cuộc đời bạn dựa trên năng lượng của các con số.

Nó giúp bạn:

* **Hiểu rõ mình hơn:** Tại sao bạn lại có những phản ứng nhất định, những sở thích, hay những nỗi sợ hãi nào đó.
* **Đưa ra lựa chọn sáng suốt:** Khi hiểu được điểm mạnh, điểm yếu, bạn có thể đưa ra quyết định tốt hơn cho sự nghiệp, các mối quan hệ, và cuộc sống cá nhân.
* **Phát triển tiềm năng:** Nhận diện những năng lực tiềm ẩn để khai phá và phát huy tối đa.
* **Đối mặt thử thách:** Chuẩn bị tinh thần và tìm cách vượt qua những khó khăn, bởi mỗi con số đều có cả mặt tích cực và tiêu cực.

Thần số học là một chiếc la bàn, không phải là con đường định sẵn. Bạn là người cầm lái con thuyền cuộc đời mình.
`