import Link from 'next/link';
import LegalStructuredData from '../../components/LegalStructuredData';
import { ContactIcon, EmailIcon, LegalIcon, SecurityIcon } from '../../components/icons';

export default function PrivacyPage() {
  return (
    <>
      <LegalStructuredData pageType="privacy" />
      <div className="min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent">
              Chính Sách Bảo Mật
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Cam kết bảo vệ thông tin cá nhân và quyền riêng tư của bạn khi sử dụng website Giải Mã Tâm Linh
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-golden transition-colors">Trang Chủ</Link>
            <span>›</span>
            <span className="text-golden">Chính Sách Bảo Mật</span>
          </div>

          {/* Last Updated */}
          <div className="bg-gradient-to-r from-golden/10 to-yellow-400/10 rounded-lg p-4 border border-golden/20 inline-block">
            <p className="text-golden text-sm font-medium">
              📅 Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-golden max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><SecurityIcon className="text-golden" size={24} /></span>
                Giới Thiệu
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Tại <strong className="text-white">Giải Mã Tâm Linh</strong>, chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. 
                Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin của bạn khi sử dụng website của chúng tôi.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Bằng cách sử dụng website của chúng tôi, bạn đồng ý với các điều khoản trong chính sách bảo mật này.
              </p>
            </div>
          </section>

          {/* Information Collection */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><LegalIcon className="text-golden" size={24} /></span>
                Thông Tin Chúng Tôi Thu Thập
              </h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">1. Thông Tin Bạn Nhập Vào</h3>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• <strong className="text-white">Thông tin cá nhân:</strong> Họ tên, ngày sinh khi sử dụng các công cụ thần số học</li>
                <li>• <strong className="text-white">Thông tin liên hệ:</strong> Email (nếu bạn đăng ký nhận thông tin)</li>
                <li>• <strong className="text-white">Nội dung tương tác:</strong> Câu hỏi, phản hồi, đánh giá nội dung</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">2. Thông Tin Thu Thập Tự Động</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• <strong className="text-white">Thông tin kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt, hệ điều hành</li>
                <li>• <strong className="text-white">Dữ liệu sử dụng:</strong> Trang đã xem, thời gian truy cập, tần suất sử dụng</li>
                <li>• <strong className="text-white">Cookies:</strong> Để cải thiện trải nghiệm người dùng</li>
              </ul>
            </div>
          </section>

          {/* Information Usage */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><LegalIcon className="text-golden" size={24} /></span>
                Cách Chúng Tôi Sử Dụng Thông Tin
              </h2>
              
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong className="text-white">Chia sẻ nội dung:</strong> Tính toán thần số học, phân tích cung hoàng đạo, giải mã giấc mơ
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong className="text-white">Cải thiện nội dung:</strong> Phân tích cách sử dụng để nâng cao chất lượng
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong className="text-white">Hỗ trợ người dùng:</strong> Giải đáp thắc mắc và hỗ trợ kỹ thuật
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong className="text-white">Bảo mật:</strong> Phát hiện và ngăn chặn hoạt động bất thường
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <strong className="text-white">Tuân thủ pháp luật:</strong> Đáp ứng yêu cầu của cơ quan có thẩm quyền
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><SecurityIcon className="text-golden" size={24} /></span>
                Bảo Vệ Thông Tin
              </h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức phù hợp để bảo vệ thông tin cá nhân của bạn:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Bảo Mật Kỹ Thuật</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Mã hóa SSL/TLS cho tất cả dữ liệu truyền tải</li>
                    <li>• Hệ thống firewall và bảo mật mạng</li>
                    <li>• Cập nhật bảo mật thường xuyên</li>
                    <li>• Sao lưu dữ liệu định kỳ</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Bảo Mật Tổ Chức</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Giới hạn quyền truy cập dữ liệu</li>
                    <li>• Đào tạo nhân viên về bảo mật</li>
                    <li>• Kiểm tra bảo mật định kỳ</li>
                    <li>• Quy trình xử lý sự cố bảo mật</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><ContactIcon className="text-golden" size={24} /></span>
                Chia Sẻ Thông Tin
              </h2>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
                <p className="text-red-300 font-semibold mb-2">❌ Chúng tôi KHÔNG bao giờ:</p>
                <ul className="text-red-200 space-y-1">
                  <li>• Bán thông tin cá nhân của bạn</li>
                  <li>• Chia sẻ dữ liệu với bên thứ ba vì mục đích thương mại</li>
                  <li>• Sử dụng thông tin cho mục đích khác ngoài website</li>
                </ul>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4">
                Chúng tôi chỉ chia sẻ thông tin trong các trường hợp sau:
              </p>

              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <strong className="text-white">Với sự đồng ý của bạn:</strong> Khi bạn cho phép rõ ràng
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <strong className="text-white">Yêu cầu pháp lý:</strong> Khi có yêu cầu từ cơ quan có thẩm quyền
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <div>
                    <strong className="text-white">Bảo vệ quyền lợi:</strong> Để bảo vệ quyền lợi hợp pháp của chúng tôi và người dùng
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><LegalIcon className="text-golden" size={24} /></span>
                Quyền Của Bạn
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                Bạn có các quyền sau đối với thông tin cá nhân của mình:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-golden text-xl">👁️</span>
                    <div>
                      <h3 className="text-white font-semibold">Quyền truy cập</h3>
                      <p className="text-gray-300 text-sm">Yêu cầu xem thông tin cá nhân chúng tôi lưu trữ</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-golden text-xl">✏️</span>
                    <div>
                      <h3 className="text-white font-semibold">Quyền chỉnh sửa</h3>
                      <p className="text-gray-300 text-sm">Yêu cầu sửa đổi thông tin không chính xác</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-golden text-xl">🗑️</span>
                    <div>
                      <h3 className="text-white font-semibold">Quyền xóa</h3>
                      <p className="text-gray-300 text-sm">Yêu cầu xóa thông tin cá nhân</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-golden text-xl">⏸️</span>
                    <div>
                      <h3 className="text-white font-semibold">Quyền hạn chế</h3>
                      <p className="text-gray-300 text-sm">Yêu cầu hạn chế xử lý thông tin</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-golden text-xl">📤</span>
                    <div>
                      <h3 className="text-white font-semibold">Quyền chuyển dữ liệu</h3>
                      <p className="text-gray-300 text-sm">Yêu cầu xuất dữ liệu sang định dạng khác</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-golden text-xl">🚫</span>
                    <div>
                      <h3 className="text-white font-semibold">Quyền phản đối</h3>
                      <p className="text-gray-300 text-sm">Phản đối việc xử lý thông tin</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-golden/10 rounded-lg border border-golden/20">
                <p className="text-golden text-sm">
                  <span className="flex items-center gap-2">
                    <EmailIcon size={16} />
                    Để thực hiện các quyền trên, vui lòng liên hệ: <strong>privacy@tamlinh.com</strong>
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Contact & Updates */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/20">
              <h2 className="text-2xl font-bold text-golden mb-4 flex items-center gap-3">
                <span><ContactIcon className="text-golden" size={24} /></span>
                Liên Hệ & Cập Nhật
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Liên Hệ</h3>
                  <p className="text-gray-300 mb-4">
                    Nếu bạn có câu hỏi về chính sách bảo mật này, vui lòng liên hệ:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <EmailIcon className="text-golden" size={16} />
                      Email: privacy@tamlinh.com
                    </li>
                    <li>🌐 Website: tamlinh.com</li>
                    <li>📍 Địa chỉ: Việt Nam</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Cập Nhật Chính Sách</h3>
                  <p className="text-gray-300 mb-4">
                    Chúng tôi có thể cập nhật chính sách này để phản ánh các thay đổi trong website hoặc pháp luật.
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Thông báo trước khi có thay đổi quan trọng</li>
                    <li>• Cập nhật ngày hiệu lực mới</li>
                    <li>• Khuyến khích xem lại định kỳ</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </>
  );
}
