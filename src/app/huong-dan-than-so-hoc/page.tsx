import ContentHeader from '@/components/ContentHeader';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';

export const metadata = {
  title: "Hướng Dẫn Thần Số Học Từ A-Z | Cách Tính Số Mệnh Chính Xác",
  description: "📚 Hướng dẫn thần số học chi tiết từ cơ bản đến nâng cao. Học cách tính số mệnh, số định mệnh, phân tích tính cách và vận mệnh. Miễn phí 100%.",
  keywords: "hướng dẫn thần số học, cách tính số mệnh, học thần số học, thần số học cơ bản, thần số học nâng cao, số định mệnh, pythagoras",
};

export default function NumerologyGuidePage() {
  return (
    <>
      <ContentHeader
        title="Hướng Dẫn Thần Số Học Từ A-Z"
        description="Học thần số học từ cơ bản đến nâng cao. Khám phá cách tính số mệnh, phân tích tính cách và dự đoán vận mệnh một cách chính xác."
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Hướng Dẫn Thần Số Học', href: '/huong-dan-than-so-hoc' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
                Thần Số Học Là Gì?
              </span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Thần số học (Numerology) là một hệ thống cổ xưa nghiên cứu mối quan hệ giữa các con số và cuộc sống con người. 
                Được phát triển bởi nhà toán học Pythagoras từ thế kỷ 6 TCN, thần số học giúp chúng ta hiểu rõ hơn về 
                tính cách, tài năng, thách thức và vận mệnh thông qua ngày sinh và tên tuổi.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="text-3xl mb-4">🔢</div>
                  <h3 className="text-xl font-bold text-golden mb-3">Khoa Học</h3>
                  <p className="text-gray-300 text-sm">Dựa trên toán học và các quy luật số học được kiểm chứng qua hàng nghìn năm.</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-golden mb-3">Chính Xác</h3>
                  <p className="text-gray-300 text-sm">Phương pháp tính toán chuẩn quốc tế, được ứng dụng rộng rãi trên thế giới.</p>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-6">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-golden mb-3">Thực Tiễn</h3>
                  <p className="text-gray-300 text-sm">Ứng dụng được vào cuộc sống để đưa ra quyết định đúng đắn.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Basic Numbers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
              Các Con Số Cơ Bản Trong Thần Số Học
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20">
              <h3 className="text-2xl font-bold text-golden mb-4">1. Số Mệnh (Life Path Number)</h3>
              <p className="text-gray-300 mb-4">
                Số quan trọng nhất trong thần số học, được tính từ ngày sinh đầy đủ. Cho biết mục đích cuộc đời và con đường bạn cần đi.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Cách tính:</h4>
                <p className="text-gray-300 text-sm">
                  Cộng tất cả chữ số trong ngày/tháng/năm sinh cho đến khi còn 1 chữ số (trừ 11, 22, 33)
                </p>
                <p className="text-golden text-sm mt-2">
                  Ví dụ: 15/03/1990 → 1+5+0+3+1+9+9+0 = 28 → 2+8 = 10 → 1+0 = 1
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20">
              <h3 className="text-2xl font-bold text-golden mb-4">2. Số Định Mệnh (Destiny Number)</h3>
              <p className="text-gray-300 mb-4">
                Được tính từ tên đầy đủ, cho biết sứ mệnh và mục tiêu bạn cần hoàn thành trong đời.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Cách tính:</h4>
                <p className="text-gray-300 text-sm">
                  Chuyển đổi từng chữ cái thành số theo bảng A=1, B=2... rồi cộng lại
                </p>
                <p className="text-golden text-sm mt-2">
                  Ví dụ: NGUYEN VAN A → 5+7+3+7+5+5 + 4+1+5 + 1 = 43 → 4+3 = 7
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20">
              <h3 className="text-2xl font-bold text-golden mb-4">3. Số Linh Hồn (Soul Number)</h3>
              <p className="text-gray-300 mb-4">
                Tính từ các nguyên âm trong tên, thể hiện mong muốn sâu thẳm và động lực nội tâm.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Nguyên âm:</h4>
                <p className="text-gray-300 text-sm">A, E, I, O, U (và Y trong một số trường hợp)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20">
              <h3 className="text-2xl font-bold text-golden mb-4">4. Số Nhân Cách (Personality Number)</h3>
              <p className="text-gray-300 mb-4">
                Tính từ các phụ âm trong tên, cho biết cách người khác nhìn nhận bạn từ bên ngoài.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Ý nghĩa:</h4>
                <p className="text-gray-300 text-sm">Ấn tượng đầu tiên, hình ảnh bên ngoài, cách thể hiện bản thân</p>
              </div>
            </div>
          </div>
        </section>

        {/* Number Meanings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
              Ý Nghĩa Các Con Số 1-9
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: 1, title: "Người Lãnh Đạo", traits: "Độc lập, sáng tạo, tiên phong", career: "CEO, Doanh nhân, Nhà lãnh đạo" },
              { num: 2, title: "Người Hòa Giải", traits: "Hợp tác, nhạy cảm, khéo léo", career: "Ngoại giao, Tư vấn, Hỗ trợ" },
              { num: 3, title: "Người Sáng Tạo", traits: "Nghệ thuật, giao tiếp, lạc quan", career: "Nghệ sĩ, Nhà văn, Diễn viên" },
              { num: 4, title: "Người Xây Dựng", traits: "Thực tế, kiên nhẫn, đáng tin", career: "Kỹ sư, Kiến trúc sư, Quản lý" },
              { num: 5, title: "Người Tự Do", traits: "Phiêu lưu, linh hoạt, tò mò", career: "Du lịch, Báo chí, Bán hàng" },
              { num: 6, title: "Người Nuôi Dưỡng", traits: "Yêu thương, trách nhiệm, gia đình", career: "Giáo viên, Y tá, Tư vấn" },
              { num: 7, title: "Người Tìm Kiếm", traits: "Trí tuệ, tâm linh, phân tích", career: "Nghiên cứu, Triết học, Tâm linh" },
              { num: 8, title: "Người Thành Đạt", traits: "Quyền lực, vật chất, tổ chức", career: "Tài chính, Bất động sản, Quản lý" },
              { num: 9, title: "Người Nhân Đạo", traits: "Rộng lượng, từ bi, phục vụ", career: "Từ thiện, Giáo dục, Y tế" }
            ].map((item) => (
              <div key={item.num} className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/20">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-golden to-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-3">
                    {item.num}
                  </div>
                  <h3 className="text-xl font-bold text-golden">{item.title}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Tính cách:</h4>
                    <p className="text-gray-300 text-sm">{item.traits}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-1">Nghề nghiệp:</h4>
                    <p className="text-gray-300 text-sm">{item.career}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Master Numbers */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-700/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Số Chủ Đạo (Master Numbers)
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-3">Số 11</h3>
                <p className="text-gray-300 text-sm mb-3">Trực giác cao, tâm linh mạnh, khả năng truyền cảm hứng</p>
                <p className="text-purple-300 text-xs">Thường gặp ở những người có sứ mệnh đặc biệt</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-3">Số 22</h3>
                <p className="text-gray-300 text-sm mb-3">Kiến trúc sư chủ đạo, khả năng biến ý tưởng thành hiện thực</p>
                <p className="text-purple-300 text-xs">Tiềm năng thành công lớn trong lĩnh vực vật chất</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-3">Số 33</h3>
                <p className="text-gray-300 text-sm mb-3">Thầy giáo chủ đạo, khả năng chữa lành và giúp đỡ người khác</p>
                <p className="text-purple-300 text-xs">Hiếm gặp, mang sứ mệnh phục vụ nhân loại</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-golden to-yellow-400 bg-clip-text text-transparent">
              Công Cụ Thần Số Học Miễn Phí
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/numerology" className="group">
              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-4">🔢</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-golden transition-colors">Tính Số Mệnh</h3>
                <p className="text-gray-300 text-sm">Khám phá số mệnh và tính cách của bạn</p>
              </div>
            </Link>
            <Link href="/name-analysis" className="group">
              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-4">✍️</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-golden transition-colors">Phân Tích Tên</h3>
                <p className="text-gray-300 text-sm">Tìm hiểu ý nghĩa tên tuổi của bạn</p>
              </div>
            </Link>
            <Link href="/birthday-match" className="group">
              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/20 hover:border-golden/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-4">💕</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-golden transition-colors">Ghép Đôi</h3>
                <p className="text-gray-300 text-sm">Kiểm tra độ hợp tuổi trong tình yêu</p>
              </div>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          description="Giải đáp những thắc mắc phổ biến về việc học và ứng dụng thần số học"
          faqs={[
            {
              question: "Thần số học có khó học không?",
              answer: "Thần số học cơ bản rất dễ học. Bạn chỉ cần biết cách cộng trừ đơn giản và nhớ ý nghĩa của các con số 1-9. Với hướng dẫn chi tiết, bạn có thể tự tính toán và phân tích được ngay."
            },
            {
              question: "Tôi có thể tự học thần số học tại nhà không?",
              answer: "Hoàn toàn có thể! Website cung cấp đầy đủ hướng dẫn từ cơ bản đến nâng cao. Bạn có thể học theo từng bước, thực hành với chính bản thân và người thân để nắm vững kiến thức."
            },
            {
              question: "Thần số học có chính xác 100% không?",
              answer: "Thần số học là công cụ hỗ trợ tham khảo, không phải dự đoán tuyệt đối. Độ chính xác phụ thuộc vào cách diễn giải và áp dụng. Hãy sử dụng như một cách hiểu thêm về bản thân và đưa ra quyết định sáng suốt."
            },
            {
              question: "Tôi cần học bao lâu để thành thạo thần số học?",
              answer: "Để hiểu cơ bản và tự tính toán được, bạn chỉ cần 1-2 tuần học tập. Để thành thạo và có thể tư vấn cho người khác, cần khoảng 3-6 tháng thực hành thường xuyên và tích lũy kinh nghiệm."
            }
          ]}
        />
      </div>
    </>
  );
}
