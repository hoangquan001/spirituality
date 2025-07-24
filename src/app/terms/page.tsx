import Link from 'next/link';
import LegalStructuredData from '../../components/LegalStructuredData';
import { CalendarIcon, ContactIcon, LegalIcon, NumerologyIcon, SecurityIcon } from '../../components/icons';

export default function TermsPage() {
  return (
    <>
      <LegalStructuredData pageType="terms" />
      <div className="min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent">
              Điều Khoản Sử Dụng
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Quy định và điều khoản khi sử dụng website Thần Số Học
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-golden transition-colors">Trang Chủ</Link>
            <span>›</span>
            <span className="text-golden">Điều Khoản Sử Dụng</span>
          </div>

          {/* Last Updated */}
          <div className="bg-gradient-to-r from-golden/10 to-yellow-400/10 rounded-lg p-4 border border-golden/20 inline-block">
            <p className="text-golden text-sm font-medium">
              📅 Có hiệu lực từ: {new Date().toLocaleDateString('vi-VN')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-golden max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><LegalIcon className="text-golden" size={24} /></span>
                Giới Thiệu
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Chào mừng bạn đến với <strong className="text-white">Thần Số Học</strong>! Những điều khoản sử dụng này 
                ("Điều Khoản") quy định việc sử dụng website của chúng tôi tại địa chỉ tamlinh.com.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Bằng cách truy cập và sử dụng website của chúng tôi, bạn đồng ý tuân thủ và bị ràng buộc bởi các điều khoản này.
                Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng website của chúng tôi.
              </p>
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300 text-sm">
                  💡 <strong>Lưu ý:</strong> Các điều khoản này có thể được cập nhật theo thời gian. 
                  Chúng tôi khuyến khích bạn xem lại định kỳ.
                </p>
              </div>
            </div>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><NumerologyIcon className="text-golden" size={24} /></span>
                Mô Tả Nội Dung
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Thần Số Học chia sẻ các nội dung tâm linh miễn phí bao gồm:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Nội Dung Chính</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong className="text-white">Thần Số Học Pythagoras:</strong> Tính toán số mệnh, phân tích tính cách</li>
                    <li>• <strong className="text-white">Cung Hoàng Đạo:</strong> Tử vi 12 cung, dự đoán tương lai</li>
                    <li>• <strong className="text-white">Giải Mã Giấc Mơ:</strong> Từ điển giấc mơ đầy đủ</li>
                    <li>• <strong className="text-white">Bói Tên Theo Số:</strong> Phân tích tên tuổi</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Tính Năng Bổ Sung</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong className="text-white">Bói Tình Yêu:</strong> Hợp tuổi, tương thích</li>
                    <li>• <strong className="text-white">Phong Thủy:</strong> Thông tin về bố trí không gian</li>
                    <li>• <strong className="text-white">Nội dung giáo dục:</strong> Bài viết, hướng dẫn</li>
                    <li>• <strong className="text-white">Hỗ trợ người dùng:</strong> Giải đáp thắc mắc</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-300 text-sm">
                  ✅ <strong>Cam kết:</strong> Tất cả nội dung cơ bản đều hoàn toàn miễn phí và không có phí ẩn.
                </p>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><ContactIcon className="text-golden" size={24} /></span>
                Trách Nhiệm Người Dùng
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Khi sử dụng website của chúng tôi, bạn đồng ý:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-xl">✓</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Sử dụng hợp pháp</h3>
                    <p className="text-gray-300 text-sm">Chỉ sử dụng website cho mục đích cá nhân, hợp pháp và không vi phạm pháp luật</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-xl">✓</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Thông tin chính xác</h3>
                    <p className="text-gray-300 text-sm">Nhập thông tin chính xác khi sử dụng các công cụ tính toán</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1 text-xl">✓</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Tôn trọng quyền sở hữu trí tuệ</h3>
                    <p className="text-gray-300 text-sm">Không sao chép, phân phối lại nội dung mà không có sự cho phép</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 text-xl">✗</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Không được phép</h3>
                    <p className="text-gray-300 text-sm">Sử dụng website để spam, hack, hoặc các hoạt động có thể gây hại đến hệ thống</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 text-xl">✗</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Nội dung không phù hợp</h3>
                    <p className="text-gray-300 text-sm">Đăng tải nội dung vi phạm pháp luật, khiêu dâm, hoặc xúc phạm người khác</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><LegalIcon className="text-golden" size={24} /></span>
                Quyền Sở Hữu Trí Tuệ
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Nội Dung Của Chúng Tôi</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Tất cả nội dung trên website bao gồm văn bản, hình ảnh, logo, thiết kế, thuật toán tính toán,
                    và phần mềm đều thuộc quyền sở hữu của Thần Số Học hoặc được cấp phép sử dụng hợp pháp.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Bạn có thể xem và sử dụng nội dung cho mục đích cá nhân</li>
                    <li>• Không được sao chép, phân phối, hoặc sử dụng thương mại</li>
                    <li>• Không được tạo ra các sản phẩm phái sinh</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Nội Dung Của Bạn</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Khi bạn gửi phản hồi, đánh giá, hoặc nội dung khác cho chúng tôi, bạn cấp cho chúng tôi
                    quyền sử dụng, chỉnh sửa, và hiển thị nội dung đó để cải thiện website.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><LegalIcon className="text-golden" size={24} /></span>
                Tuyên Bố Miễn Trách Nhiệm
              </h2>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-yellow-300 font-semibold mb-3 flex items-center gap-2">
                  <NumerologyIcon className="text-yellow-300" size={20} />
                  Về Tính Chất Nội Dung Tâm Linh
                </h3>
                <ul className="text-yellow-200 space-y-2 text-sm">
                  <li>• Nội dung mang tính chất tham khảo và giải trí</li>
                  <li>• Không thay thế lời khuyên từ các chuyên gia về y tế, pháp lý, tài chính</li>
                  <li>• Kết quả có thể khác nhau tùy theo cách diễn giải</li>
                  <li>• Không đảm bảo độ chính xác tuyệt đối của dự đoán</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Giới Hạn Trách Nhiệm</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Chúng tôi chia sẻ nội dung "như hiện có" và không đảm bảo:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Website hoạt động liên tục, không bị gián đoạn</li>
                    <li>• Thông tin luôn chính xác và cập nhật</li>
                    <li>• Kết quả phù hợp với mong đợi của bạn</li>
                    <li>• Website không có lỗi hoặc virus</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Trách Nhiệm Của Bạn</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Bạn sử dụng website với rủi ro của riêng mình và chịu trách nhiệm về các quyết định
                    dựa trên thông tin từ website. Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào
                    phát sinh từ việc sử dụng website.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Data */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><SecurityIcon className="text-golden" size={24} /></span>
                Quyền Riêng Tư & Dữ Liệu
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Việc thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn được quy định trong
                <Link href="/privacy" className="text-golden hover:text-yellow-300 transition-colors font-semibold"> Chính Sách Bảo Mật</Link> của chúng tôi.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Cam Kết Của Chúng Tôi</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Bảo vệ thông tin cá nhân của bạn</li>
                    <li>• Không bán dữ liệu cho bên thứ ba</li>
                    <li>• Sử dụng mã hóa SSL/TLS</li>
                    <li>• Tuân thủ quy định về bảo vệ dữ liệu</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Quyền Của Bạn</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Truy cập thông tin cá nhân</li>
                    <li>• Yêu cầu chỉnh sửa hoặc xóa</li>
                    <li>• Rút lại sự đồng ý</li>
                    <li>• Khiếu nại về xử lý dữ liệu</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><LegalIcon className="text-golden" size={24} /></span>
                Chấm Dứt Sử Dụng
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Quyền Của Chúng Tôi</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Chúng tôi có quyền tạm ngừng hoặc chấm dứt quyền truy cập của bạn nếu:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Vi phạm các điều khoản sử dụng</li>
                    <li>• Sử dụng website cho mục đích bất hợp pháp</li>
                    <li>• Gây tổn hại đến hệ thống hoặc người dùng khác</li>
                    <li>• Cung cấp thông tin sai lệch</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Quyền Của Bạn</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Bạn có thể ngừng sử dụng website bất cứ lúc nào. Các điều khoản về quyền sở hữu trí tuệ
                    và giới hạn trách nhiệm vẫn có hiệu lực sau khi chấm dứt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact & Legal */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><ContactIcon className="text-golden" size={24} /></span>
                Liên Hệ & Pháp Lý
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Thông Tin Liên Hệ</h3>
                  <p className="text-gray-300 mb-4">
                    Nếu bạn có câu hỏi về các điều khoản này:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>📧 Email: legal@tamlinh.com</li>
                    <li>🌐 Website: tamlinh.com</li>
                    <li>📍 Địa chỉ: Việt Nam</li>
                    <li>⏰ Hỗ trợ: 24/7</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Điều Khoản Pháp Lý</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong className="text-white">Luật áp dụng:</strong> Pháp luật Việt Nam</li>
                    <li>• <strong className="text-white">Giải quyết tranh chấp:</strong> Thương lượng, hòa giải</li>
                    <li>• <strong className="text-white">Tòa án có thẩm quyền:</strong> Việt Nam</li>
                    <li>• <strong className="text-white">Ngôn ngữ:</strong> Tiếng Việt</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-golden/10 rounded-lg border border-golden/20">
                <p className="text-golden text-sm">
                  <span className="flex items-center gap-2">
                    <CalendarIcon className="text-golden" size={16} />
                    <strong>Cập nhật:</strong> Chúng tôi có thể sửa đổi các điều khoản này.
                  </span>
                  Phiên bản mới sẽ có hiệu lực ngay khi đăng tải trên website.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}
