export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent">
              Giới Thiệu
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Khám phá hành trình tâm linh và sứ mệnh của chúng tôi
          </p>
        </div>

        {/* Hero Section */}
        <div className="cosmic-card rounded-2xl p-8 mb-12 text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-golden to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-gray-900">✦</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Tâm Linh - Thần Số Học</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Chúng tôi là cầu nối giữa khoa học cổ đại và cuộc sống hiện đại, 
            giúp bạn khám phá những bí mật ẩn giấu trong các con số và biểu tượng.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
              Sứ Mệnh Của Chúng Tôi
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cosmic-card rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-bold text-white mb-3">Khám Phá Bản Thân</h3>
              <p className="text-gray-300">
                Giúp bạn hiểu rõ hơn về tính cách, tiềm năng và mục đích cuộc đời 
                thông qua thần số học và các công cụ tâm linh.
              </p>
            </div>

            <div className="cosmic-card rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-white mb-3">Dẫn Dắt Hướng Đi</h3>
              <p className="text-gray-300">
                Cung cấp những lời khuyên và định hướng dựa trên khoa học cổ đại 
                để bạn đưa ra quyết định sáng suốt.
              </p>
            </div>

            <div className="cosmic-card rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-bold text-white mb-3">Nâng Cao Ý Thức</h3>
              <p className="text-gray-300">
                Giúp bạn phát triển trực giác, ý thức tâm linh và kết nối sâu sắc 
                với vũ trụ xung quanh.
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="cosmic-card rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Câu Chuyện Của Chúng Tôi</h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Tâm Linh - Thần Số Học được sinh ra từ niềm đam mê khám phá những bí ẩn của vũ trụ 
              và mong muốn chia sẻ kiến thức cổ xưa với cộng đồng hiện đại.
            </p>
            <p>
              Với hơn 10 năm nghiên cứu và thực hành trong lĩnh vực thần số học, giải mã giấc mơ 
              và tử vi, chúng tôi đã giúp hàng nghìn người tìm thấy định hướng và ý nghĩa 
              trong cuộc sống.
            </p>
            <p>
              Chúng tôi tin rằng mỗi con số, mỗi giấc mơ, mỗi vì sao đều mang một thông điệp 
              đặc biệt. Nhiệm vụ của chúng tôi là giúp bạn giải mã những thông điệp đó.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-golden to-yellow-300 bg-clip-text text-transparent">
              Giá Trị Cốt Lõi
            </span>
          </h2>

          <div className="space-y-6">
            <div className="cosmic-card rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-golden to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-gray-900">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Chính Xác & Đáng Tin Cậy</h3>
                  <p className="text-gray-300">
                    Chúng tôi sử dụng các phương pháp truyền thống được kiểm chứng qua hàng nghìn năm, 
                    kết hợp với nghiên cứu hiện đại để đảm bảo độ chính xác cao nhất.
                  </p>
                </div>
              </div>
            </div>

            <div className="cosmic-card rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-golden to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-gray-900">🔒</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Bảo Mật Tuyệt Đối</h3>
                  <p className="text-gray-300">
                    Thông tin cá nhân của bạn được bảo vệ bằng công nghệ mã hóa tiên tiến. 
                    Chúng tôi cam kết không chia sẻ dữ liệu với bất kỳ bên thứ ba nào.
                  </p>
                </div>
              </div>
            </div>

            <div className="cosmic-card rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-golden to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-gray-900">❤️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tận Tâm Phục Vụ</h3>
                  <p className="text-gray-300">
                    Chúng tôi luôn lắng nghe và đồng hành cùng bạn trong hành trình khám phá bản thân. 
                    Mỗi phản hồi của bạn đều quý giá với chúng tôi.
                  </p>
                </div>
              </div>
            </div>

            <div className="cosmic-card rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-golden to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl text-gray-900">🌍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Miễn Phí & Dễ Tiếp Cận</h3>
                  <p className="text-gray-300">
                    Chúng tôi tin rằng ai cũng có quyền được tiếp cận với những kiến thức tâm linh. 
                    Vì vậy, tất cả dịch vụ cơ bản đều hoàn toàn miễn phí.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="cosmic-card rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Đội Ngũ Tác Giả</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👨‍🔬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tác Giả Nội Dung Thần Số Học</h3>
              <p className="text-gray-300">
                Hơn 15 năm nghiên cứu và thực hành thần số học Pythagorean và Chaldean. 
                Chuyên sâu về phân tích số mệnh và đường đời.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌙</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Chuyên Gia Giải Mã Giấc Mơ</h3>
              <p className="text-gray-300">
                Nghiên cứu tâm lý học giấc mơ và biểu tượng học. Chuyên gia về phương pháp 
                Jung và các truyền thống giải mã giấc mơ phương Đông.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="cosmic-card rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-gray-300 mb-6">
            Bạn có câu hỏi hoặc cần tư vấn thêm? Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📧</div>
              <h4 className="text-white font-semibold mb-1">Email</h4>
              <p className="text-gray-300">contact@tamlinh.com</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="text-white font-semibold mb-1">Điện Thoại</h4>
              <p className="text-gray-300">+84 xxx xxx xxx</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🕐</div>
              <h4 className="text-white font-semibold mb-1">Giờ Làm Việc</h4>
              <p className="text-gray-300">24/7 Hỗ trợ trực tuyến</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-400/20">
            <p className="text-gray-400 italic">
              "Vũ trụ không bao giờ vội vàng, nhưng mọi thứ đều được hoàn thành đúng thời điểm." - Lao Tử
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

