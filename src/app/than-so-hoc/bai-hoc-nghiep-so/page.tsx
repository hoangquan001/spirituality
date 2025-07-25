'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import { birthDateToLifePath } from '@/lib/numerology';
import Link from 'next/link';
import { useState } from 'react';

interface KarmicLesson {
  number: number;
  title: string;
  description: string;
  lesson: string;
  challenge: string;
  solution: string;
  affirmation: string;
}

interface LifeChallenge {
  period: string;
  age: string;
  challenge: number;
  title: string;
  description: string;
  lesson: string;
  advice: string;
}

interface NumerologyLessons {
  lifePath: number;
  name: string;
  birthDate: string;
  karmicLessons: KarmicLesson[];
  lifeChallenges: LifeChallenge[];
  soulPurpose: string;
  lifeTheme: string;
}

const karmicLessonsData: Record<number, KarmicLesson> = {
  1: {
    number: 1,
    title: 'Bài Học Về Lãnh Đạo',
    description: 'Học cách tự tin và dẫn dắt bản thân cũng như người khác',
    lesson: 'Phát triển sự độc lập, tự tin và khả năng lãnh đạo',
    challenge: 'Khắc phục sự nghi ngờ bản thân và nỗi sợ thất bại',
    solution:
      'Thực hành đưa ra quyết định và chịu trách nhiệm cho hành động của mình',
    affirmation:
      'Tôi là người lãnh đạo tự nhiên và có khả năng tạo ra sự thay đổi tích cực',
  },
  2: {
    number: 2,
    title: 'Bài Học Về Hợp Tác',
    description:
      'Học cách làm việc hài hòa với người khác và xây dựng mối quan hệ',
    lesson: 'Phát triển sự kiên nhẫn, đồng cảm và khả năng hợp tác',
    challenge: 'Khắc phục sự nhạy cảm quá mức và nỗi sợ xung đột',
    solution: 'Luyện tập giao tiếp cởi mở và học cách đặt ranh giới lành mạnh',
    affirmation: 'Tôi có khả năng tạo ra sự hài hòa và hiểu biết lẫn nhau',
  },
  3: {
    number: 3,
    title: 'Bài Học Về Sáng Tạo',
    description: 'Học cách thể hiện bản thân và chia sẻ tài năng với thế giới',
    lesson: 'Phát triển khả năng sáng tạo, giao tiếp và biểu đạt cảm xúc',
    challenge: 'Khắc phục sự thiếu tự tin trong việc thể hiện bản thân',
    solution:
      'Thực hành các hoạt động nghệ thuật và chia sẻ ý tưởng với người khác',
    affirmation:
      'Tôi có tài năng độc đáo và có quyền thể hiện bản thân một cách tự do',
  },
  4: {
    number: 4,
    title: 'Bài Học Về Kỷ Luật',
    description:
      'Học cách xây dựng nền tảng vững chắc và kiên trì theo đuổi mục tiêu',
    lesson: 'Phát triển sự kiên nhẫn, kỷ luật và khả năng tổ chức',
    challenge: 'Khắc phục sự cứng nhắc và nỗi sợ thay đổi',
    solution:
      'Tạo ra kế hoạch rõ ràng nhưng vẫn linh hoạt với những điều chỉnh cần thiết',
    affirmation:
      'Tôi có khả năng xây dựng và duy trì những nền tảng vững chắc cho thành công',
  },
  5: {
    number: 5,
    title: 'Bài Học Về Tự Do',
    description: 'Học cách cân bằng giữa tự do cá nhân và trách nhiệm',
    lesson:
      'Phát triển sự linh hoạt, khả năng thích nghi và tinh thần phiêu lưu',
    challenge: 'Khắc phục sự thiếu kiên trì và nỗi sợ cam kết',
    solution: 'Tìm cách kết hợp sự tự do với trách nhiệm và cam kết có ý nghĩa',
    affirmation:
      'Tôi có thể tận hưởng tự do trong khi vẫn hoàn thành trách nhiệm của mình',
  },
  6: {
    number: 6,
    title: 'Bài Học Về Chăm Sóc',
    description: 'Học cách yêu thương và chăm sóc bản thân cũng như người khác',
    lesson: 'Phát triển lòng trắc ẩn, trách nhiệm và khả năng nuôi dưỡng',
    challenge: 'Khắc phục xu hướng hy sinh quá mức và mong đợi sự hoàn hảo',
    solution: 'Học cách chăm sóc bản thân trước khi chăm sóc người khác',
    affirmation:
      'Tôi có thể yêu thương và chăm sóc một cách cân bằng và lành mạnh',
  },
  7: {
    number: 7,
    title: 'Bài Học Về Trí Tuệ',
    description: 'Học cách phát triển trực giác và tìm kiếm sự thật sâu sắc',
    lesson: 'Phát triển trí tuệ nội tâm, trực giác và khả năng phân tích',
    challenge: 'Khắc phục sự cô lập và nỗi sợ chia sẻ cảm xúc',
    solution: 'Cân bằng giữa thời gian một mình và kết nối với người khác',
    affirmation:
      'Tôi có trí tuệ nội tâm và có thể tin tưởng vào trực giác của mình',
  },
  8: {
    number: 8,
    title: 'Bài Học Về Quyền Lực',
    description:
      'Học cách sử dụng quyền lực và thành công một cách có trách nhiệm',
    lesson:
      'Phát triển khả năng lãnh đạo, quản lý và đạt được thành công vật chất',
    challenge: 'Khắc phục sự tham vọng quá mức và nỗi sợ thất bại tài chính',
    solution:
      'Sử dụng thành công để phục vụ mục đích cao hơn và giúp đỡ người khác',
    affirmation:
      'Tôi có thể đạt được thành công trong khi vẫn giữ được giá trị đạo đức',
  },
  9: {
    number: 9,
    title: 'Bài Học Về Cống Hiến',
    description: 'Học cách phục vụ nhân loại và chia sẻ trí tuệ với thế giới',
    lesson: 'Phát triển lòng từ bi, sự rộng lượng và tầm nhìn toàn cầu',
    challenge: 'Khắc phục sự thất vọng và nỗi sợ không được đánh giá đúng',
    solution: 'Tập trung vào việc cống hiến mà không mong đợi sự công nhận',
    affirmation:
      'Tôi có khả năng tạo ra tác động tích cực đến cuộc sống của nhiều người',
  },
};

export default function NumerologyLessonsPage() {
  const [birthDate, setBirthDate] = useState('');
  const [name, setName] = useState('');
  const [lessons, setLessons] = useState<NumerologyLessons | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState<'karmic' | 'challenges'>('karmic');

  const calculateChallengeNumber = (
    birthDate: string,
    period: 'first' | 'second' | 'third' | 'fourth'
  ): number => {
    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const daySum = day
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
    const monthSum = month
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
    const yearSum = year
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);

    const finalDay = daySum > 9 ? daySum - 9 : daySum;
    const finalMonth = monthSum > 9 ? monthSum - 9 : monthSum;
    const finalYear = yearSum > 9 ? yearSum - 9 : yearSum;

    switch (period) {
      case 'first':
        return Math.abs(finalMonth - finalDay);
      case 'second':
        return Math.abs(finalDay - finalYear);
      case 'third':
        return Math.abs(finalMonth - finalYear);
      case 'fourth':
        const sum = finalMonth + finalDay + finalYear;
        return sum > 9 ? sum - 9 : sum;
      default:
        return 1;
    }
  };

  const getChallengeDescription = (
    challengeNum: number
  ): { title: string; description: string; lesson: string; advice: string } => {
    const challenges: Record<number, any> = {
      0: {
        title: 'Thử Thách Của Sự Lựa Chọn',
        description:
          'Bạn có nhiều tài năng và khả năng, nhưng cần học cách tập trung và đưa ra lựa chọn đúng đắn.',
        lesson: 'Học cách quyết định và cam kết với một hướng đi cụ thể',
        advice:
          'Hãy tin tưởng vào trực giác và không ngại đưa ra quyết định quan trọng',
      },
      1: {
        title: 'Thử Thách Của Sự Độc Lập',
        description:
          'Cần phát triển sự tự tin và khả năng đứng vững trên đôi chân của mình.',
        lesson: 'Học cách tự lập và không phụ thuộc quá nhiều vào người khác',
        advice:
          'Thực hành đưa ra quyết định độc lập và chịu trách nhiệm cho hành động của mình',
      },
      2: {
        title: 'Thử Thách Của Sự Nhạy Cảm',
        description:
          'Cần học cách quản lý cảm xúc và không để sự nhạy cảm cản trở tiến bộ.',
        lesson: 'Phát triển sự cân bằng cảm xúc và khả năng hợp tác',
        advice:
          'Học cách đặt ranh giới lành mạnh và không quá quan tâm đến ý kiến của người khác',
      },
      3: {
        title: 'Thử Thách Của Sự Biểu Đạt',
        description:
          'Cần vượt qua nỗi sợ thể hiện bản thân và chia sẻ tài năng với thế giới.',
        lesson: 'Phát triển khả năng giao tiếp và sáng tạo',
        advice:
          'Thực hành thể hiện ý tưởng và cảm xúc một cách tự tin và chân thành',
      },
      4: {
        title: 'Thử Thách Của Sự Kiên Trì',
        description:
          'Cần học cách kiên nhẫn và xây dựng nền tảng vững chắc cho thành công.',
        lesson: 'Phát triển kỷ luật và khả năng làm việc có hệ thống',
        advice: 'Tạo ra kế hoạch chi tiết và kiên trì thực hiện từng bước một',
      },
      5: {
        title: 'Thử Thách Của Sự Tự Do',
        description:
          'Cần học cách cân bằng giữa khao khát tự do và trách nhiệm cam kết.',
        lesson: 'Phát triển sự linh hoạt mà không mất đi sự ổn định',
        advice:
          'Tìm cách thỏa mãn nhu cầu tự do trong khi vẫn hoàn thành nghĩa vụ',
      },
      6: {
        title: 'Thử Thách Của Sự Hoàn Hảo',
        description:
          'Cần học cách chấp nhận sự không hoàn hảo và không đặt quá nhiều áp lực lên bản thân.',
        lesson: 'Phát triển sự chấp nhận và lòng trắc ẩn với bản thân',
        advice:
          'Học cách yêu thương bản thân và người khác mà không cần sự hoàn hảo',
      },
      7: {
        title: 'Thử Thách Của Sự Tin Tưởng',
        description:
          'Cần học cách tin tưởng vào trực giác và không quá phân tích mọi thứ.',
        lesson: 'Phát triển niềm tin vào bản thân và vũ trụ',
        advice: 'Dành thời gian thiền định và lắng nghe tiếng nói nội tâm',
      },
      8: {
        title: 'Thử Thách Của Quyền Lực',
        description:
          'Cần học cách sử dụng quyền lực và thành công một cách có trách nhiệm.',
        lesson:
          'Phát triển sự cân bằng giữa thành công vật chất và giá trị tinh thần',
        advice:
          'Sử dụng thành công để phục vụ mục đích cao hơn và giúp đỡ người khác',
      },
      9: {
        title: 'Thử Thách Của Sự Buông Bỏ',
        description:
          'Cần học cách buông bỏ những gì không còn phục vụ mình và mở lòng với điều mới.',
        lesson: 'Phát triển sự rộng lượng và khả năng tha thứ',
        advice:
          'Học cách buông bỏ quá khứ và tập trung vào việc cống hiến cho tương lai',
      },
    };
    return challenges[challengeNum] || challenges[1];
  };

  const calculateLessons = () => {
    if (!birthDate || !name) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const lifePath = birthDateToLifePath(birthDate);

      // Calculate karmic lessons (simplified version)
      const karmicLessons: KarmicLesson[] = [
        karmicLessonsData[lifePath],
        karmicLessonsData[lifePath === 9 ? 1 : lifePath + 1],
      ];

      // Calculate life challenges
      const lifeChallenges: LifeChallenge[] = [
        {
          period: 'Thử thách đầu đời',
          age: '0-35 tuổi',
          challenge: calculateChallengeNumber(birthDate, 'first'),
          ...getChallengeDescription(
            calculateChallengeNumber(birthDate, 'first')
          ),
        },
        {
          period: 'Thử thách giữa đời',
          age: '36-52 tuổi',
          challenge: calculateChallengeNumber(birthDate, 'second'),
          ...getChallengeDescription(
            calculateChallengeNumber(birthDate, 'second')
          ),
        },
        {
          period: 'Thử thách cuối đời',
          age: '53+ tuổi',
          challenge: calculateChallengeNumber(birthDate, 'third'),
          ...getChallengeDescription(
            calculateChallengeNumber(birthDate, 'third')
          ),
        },
      ];

      const soulPurposes: Record<number, string> = {
        1: 'Trở thành người lãnh đạo và tiên phong, mở đường cho những ý tưởng mới',
        2: 'Tạo ra sự hài hòa và hợp tác, làm cầu nối giữa các cá nhân và nhóm',
        3: 'Truyền cảm hứng và mang lại niềm vui cho người khác thông qua sự sáng tạo',
        4: 'Xây dựng nền tảng vững chắc và tạo ra sự ổn định cho cộng đồng',
        5: 'Khám phá và chia sẻ kiến thức, mang lại sự tự do và tiến bộ',
        6: 'Chăm sóc và nuôi dưỡng, tạo ra môi trường yêu thương và hỗ trợ',
        7: 'Tìm kiếm và chia sẻ trí tuệ, giúp người khác hiểu sâu hơn về cuộc sống',
        8: 'Đạt được thành công và sử dụng quyền lực để tạo ra tác động tích cực',
        9: 'Phục vụ nhân loại và cống hiến cho sự phát triển của thế giới',
      };

      const lifeThemes: Record<number, string> = {
        1: 'Lãnh đạo và Sáng tạo',
        2: 'Hợp tác và Hài hòa',
        3: 'Biểu đạt và Truyền cảm hứng',
        4: 'Xây dựng và Ổn định',
        5: 'Tự do và Khám phá',
        6: 'Chăm sóc và Yêu thương',
        7: 'Trí tuệ và Tâm linh',
        8: 'Thành công và Quyền lực',
        9: 'Cống hiến và Phục vụ',
      };

      const newLessons: NumerologyLessons = {
        lifePath,
        name,
        birthDate,
        karmicLessons,
        lifeChallenges,
        soulPurpose: soulPurposes[lifePath],
        lifeTheme: lifeThemes[lifePath],
      };

      setLessons(newLessons);
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen ">
      <ContentHeader
        title="Bài Học Nghiệp Số"
        breadcrumb={[
          { label: "Trang Chủ", href: "/" },
          { label: "Thần Số Học", href: "/than-so-hoc" },
          { label: "Bài Học Nghiệp Số", href: "/than-so-hoc/bai-hoc-nghiep-so" },
        ]}
        description="Khám phá bài học tâm linh và thử thách cuộc đời qua ngày sinh và số mệnh của bạn"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Input Form */}
        <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Nhập Thông Tin Của Bạn
          </h2>

          <div className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Tên của bạn</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-golden focus:outline-none"
                placeholder="Nhập tên của bạn..."
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Ngày sinh</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-golden focus:outline-none"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={calculateLessons}
              disabled={isCalculating}
              className="bg-gradient-to-r from-golden to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Đang phân tích...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  📚 Khám Phá Bài Học Nghiệp Số
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {lessons && (
          <div className="space-y-8">
            {/* Overview */}
            <div className="cosmic-card rounded-3xl p-8 border border-gray-700/20">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {lessons.lifeTheme}
                </h2>
                <div className="text-golden font-semibold mb-4">
                  Số đường đời: {lessons.lifePath}
                </div>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  <strong className="text-golden">Mục đích tâm hồn:</strong>{" "}
                  {lessons.soulPurpose}
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-800/50 rounded-full p-1">
                <button
                  onClick={() => setActiveTab("karmic")}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === "karmic"
                      ? "bg-golden text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  📚 Bài Học Nghiệp Số
                </button>
                <button
                  onClick={() => setActiveTab("challenges")}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === "challenges"
                      ? "bg-golden text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  ⚡ Thử Thách Cuộc Đời
                </button>
              </div>
            </div>

            {/* Karmic Lessons Tab */}
            {activeTab === "karmic" && (
              <div className="grid md:grid-cols-2 gap-6">
                {lessons.karmicLessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-700/20"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto">
                        <span className="text-white font-bold">
                          {lesson.number}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {lesson.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {lesson.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                          <span>🌱</span> Bài Học
                        </h4>
                        <p className="text-gray-300 text-sm">{lesson.lesson}</p>
                      </div>

                      <div>
                        <h4 className="text-orange-400 font-semibold mb-2 flex items-center gap-2">
                          <span>⚡</span> Thách Thức
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {lesson.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                          <span>💡</span> Giải Pháp
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {lesson.solution}
                        </p>
                      </div>

                      <div className="bg-golden/10 rounded-lg p-4 border border-golden/20">
                        <h4 className="text-golden font-semibold mb-2 flex items-center gap-2">
                          <span>✨</span> Khẳng Định
                        </h4>
                        <p className="text-golden text-sm italic">
                          "{lesson.affirmation}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Life Challenges Tab */}
            {activeTab === "challenges" && (
              <div className="space-y-6">
                {lessons.lifeChallenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-orange-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-orange-700/20"
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl mb-2">
                          <span className="text-white font-bold">
                            {challenge.challenge}
                          </span>
                        </div>
                        <div className="text-orange-400 font-semibold text-sm">
                          {challenge.age}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {challenge.period}
                        </h3>
                        <h4 className="text-orange-400 font-semibold mb-3">
                          {challenge.title}
                        </h4>

                        <div className="space-y-3">
                          <div>
                            <p className="text-gray-300 text-sm mb-2">
                              {challenge.description}
                            </p>
                          </div>

                          <div>
                            <h5 className="text-green-400 font-semibold mb-1 flex items-center gap-2">
                              <span>🎯</span> Bài Học
                            </h5>
                            <p className="text-gray-300 text-sm">
                              {challenge.lesson}
                            </p>
                          </div>

                          <div>
                            <h5 className="text-blue-400 font-semibold mb-1 flex items-center gap-2">
                              <span>💡</span> Lời Khuyên
                            </h5>
                            <p className="text-gray-300 text-sm">
                              {challenge.advice}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Related Links */}
        <RelatedServices currentPage="/boi-bai-tay" />
      </div>
    </div>
  );
}
