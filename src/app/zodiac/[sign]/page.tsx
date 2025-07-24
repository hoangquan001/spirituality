import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getZodiacBySlug } from '../../../lib/zodiacData';

interface Props {
  params: {
    sign: string;
  };
}

export default function ZodiacDetailPage({ params }: Props) {
  const zodiac = getZodiacBySlug(params.sign);

  if (!zodiac) {
    notFound();
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/zodiac" className="inline-flex items-center text-gray-300 hover:text-golden transition-colors mb-6">
            <span className="mr-2">←</span>
            Quay lại danh sách cung hoàng đạo
          </Link>
          
          <div className={`w-24 h-24 bg-gradient-to-br ${zodiac.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
            <span className="text-4xl text-white">{zodiac.icon}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-golden via-yellow-300 to-golden bg-clip-text text-transparent">
              {zodiac.name}
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-4">{zodiac.dates}</p>
          <div className="flex justify-center items-center space-x-6 text-gray-300">
            <span>Nguyên tố: <strong className="text-golden">{zodiac.element}</strong></span>
            <span>•</span>
            <span>Hành tinh: <strong className="text-golden">{zodiac.ruling_planet}</strong></span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Personality */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personality Section */}
            <div className="cosmic-card hoverable rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🎭</span>
                Tính Cách
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">Điểm Mạnh</h3>
                  <ul className="space-y-2">
                    {zodiac.personality.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start text-purple-200">
                        <span className="text-golden mr-2">✦</span>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">Điểm Cần Cải Thiện</h3>
                  <ul className="space-y-2">
                    {zodiac.personality.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start text-purple-200">
                        <span className="text-orange-400 mr-2">⚠</span>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-purple-300/20">
                <h3 className="text-xl font-bold text-golden mb-3">Đặc Điểm Nổi Bật</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {zodiac.personality.traits.map((trait, index) => (
                    <div key={index} className="flex items-center text-purple-200">
                      <span className="text-golden mr-2">🌟</span>
                      {trait}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Love Section */}
            <div className="cosmic-card hoverable rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">💕</span>
                Tình Yêu & Hôn Nhân
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">Phong Cách Yêu</h3>
                  <p className="text-purple-200 leading-relaxed">{zodiac.love.love_style}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">Người Bạn Đời Lý Tưởng</h3>
                  <p className="text-purple-200 leading-relaxed">{zodiac.love.ideal_partner}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">Cung Hợp</h3>
                  <div className="flex flex-wrap gap-3">
                    {zodiac.love.compatibility.map((sign, index) => (
                      <span key={index} className="bg-golden/20 text-golden px-3 py-1 rounded-full">
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-purple-900/30 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-golden mb-2">💡 Lời Khuyên</h4>
                  <p className="text-purple-200">{zodiac.love.relationship_advice}</p>
                </div>
              </div>
            </div>

            {/* Career Section */}
            <div className="cosmic-card hoverable rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">💼</span>
                Sự Nghiệp & Tài Chính
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-golden mb-3">Nghề Nghiệp Phù Hợp</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {zodiac.career.suitable_jobs.map((job, index) => (
                      <div key={index} className="bg-purple-900/30 rounded-lg p-3 text-center">
                        <span className="text-purple-200">{job}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-golden mb-3">Phong Cách Làm Việc</h3>
                    <p className="text-purple-200">{zodiac.career.work_style}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-golden mb-3">Khả Năng Lãnh Đạo</h3>
                    <p className="text-purple-200">{zodiac.career.leadership}</p>
                  </div>
                </div>
                
                <div className="bg-golden/10 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-golden mb-2">💰 Quản Lý Tài Chính</h4>
                  <p className="text-purple-200">{zodiac.career.money_management}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Lucky Numbers & Colors */}
            <div className="cosmic-card hoverable rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🍀</span>
                May Mắn
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">Số May Mắn</h4>
                  <div className="flex flex-wrap gap-2">
                    {zodiac.lucky.numbers.map((number, index) => (
                      <div key={index} className="w-10 h-10 bg-gradient-to-br from-golden to-yellow-400 rounded-full flex items-center justify-center text-purple-900 font-bold">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">Màu May Mắn</h4>
                  <div className="flex flex-wrap gap-2">
                    {zodiac.lucky.colors.map((color, index) => (
                      <span key={index} className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">Ngày May Mắn</h4>
                  <div className="space-y-1">
                    {zodiac.lucky.days.map((day, index) => (
                      <div key={index} className="text-purple-200">{day}</div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">Đá Quý</h4>
                  <div className="space-y-1">
                    {zodiac.lucky.gemstones.map((stone, index) => (
                      <div key={index} className="text-purple-200 flex items-center">
                        <span className="mr-2">💎</span>
                        {stone}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Health Section */}
            <div className="cosmic-card hoverable rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🏥</span>
                Sức Khỏe
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">Bộ Phận Cần Chú Ý</h4>
                  <div className="flex flex-wrap gap-2">
                    {zodiac.health.body_parts.map((part, index) => (
                      <span key={index} className="bg-red-900/30 text-red-200 px-3 py-1 rounded-full text-sm">
                        {part}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-golden mb-2">Lời Khuyên Sức Khỏe</h4>
                  <ul className="space-y-1">
                    {zodiac.health.health_tips.map((tip, index) => (
                      <li key={index} className="text-purple-200 text-sm flex items-start">
                        <span className="text-golden mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-900/20 rounded-lg p-3">
                  <h5 className="font-semibold text-green-300 mb-1">Giảm Stress</h5>
                  <p className="text-green-200 text-sm">{zodiac.health.stress_management}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2024 Forecast */}
        <div className="cosmic-card hoverable rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <span className="mr-3">🔮</span>
            Dự Báo Năm 2024
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-purple-900/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-golden mb-2">🌟 Tổng Quan</h3>
              <p className="text-purple-200 text-sm">{zodiac.forecast_2024.general}</p>
            </div>
            
            <div className="bg-pink-900/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-golden mb-2">💖 Tình Yêu</h3>
              <p className="text-purple-200 text-sm">{zodiac.forecast_2024.love}</p>
            </div>
            
            <div className="bg-blue-900/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-golden mb-2">💼 Sự Nghiệp</h3>
              <p className="text-purple-200 text-sm">{zodiac.forecast_2024.career}</p>
            </div>
            
            <div className="bg-green-900/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-golden mb-2">🏥 Sức Khỏe</h3>
              <p className="text-purple-200 text-sm">{zodiac.forecast_2024.health}</p>
            </div>
            
            <div className="bg-yellow-900/30 rounded-lg p-4">
              <h3 className="text-lg font-bold text-golden mb-2">💰 Tài Chính</h3>
              <p className="text-purple-200 text-sm">{zodiac.forecast_2024.finance}</p>
            </div>
            
            <div className="bg-indigo-900/30 rounded-lg p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">✨</div>
                <p className="text-purple-200 text-sm">Năm may mắn và thịnh vượng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-12">
          <Link
            href="/zodiac"
            className="bg-gradient-to-r from-golden to-yellow-400 hover:from-yellow-400 hover:to-golden text-purple-900 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Xem Tất Cả 12 Cung Hoàng Đạo
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all zodiac signs
export async function generateStaticParams() {
  const signs = [
    'bach-duong', 'kim-nguu', 'song-tu', 'cu-giai',
    'su-tu', 'xu-nu', 'thien-binh', 'ho-cap', 
    'nhan-ma', 'ma-ket', 'bao-binh', 'song-ngu'
  ];
  
  return signs.map((sign) => ({
    sign: sign,
  }));
}
