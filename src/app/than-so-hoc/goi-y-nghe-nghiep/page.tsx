'use client';

import ContentHeader from '@/components/ContentHeader';
import RelatedServices from '@/components/RelatedServices';
import { birthDateToLifePath } from '@/lib/numerology';
import { useState } from 'react';

import ReactMarkDown from 'react-markdown';

interface CareerSuggestion {
  category: string;
  jobs: string[];
  description: string;
  icon: string;
}

interface CareerAnalysis {
  lifePath: number;
  name: string;
  birthDate: string;
  primaryTalents: string[];
  workStyle: string;
  idealEnvironment: string;
  careerSuggestions: CareerSuggestion[];
  entrepreneurship: {
    suitability: number;
    description: string;
    businessTypes: string[];
  };
  challenges: string[];
  advice: string;
}

const careerData: Record<number, any> = {
  1: {
    primaryTalents: ["Lãnh đạo tự nhiên", "Sáng tạo và đổi mới", "Quyết đoán và độc lập", "Khả năng khởi nghiệp"],
    workStyle: "Thích làm việc độc lập, dẫn dắt dự án và đưa ra quyết định quan trọng",
    idealEnvironment: "Môi trường năng động, có cơ hội thể hiện khả năng lãnh đạo và sáng tạo",
    careerSuggestions: [
      {
        category: "Lãnh đạo & Quản lý",
        jobs: ["CEO/Giám đốc", "Quản lý dự án", "Team Leader", "Giám đốc kinh doanh"],
        description: "Vị trí lãnh đạo phù hợp với khả năng dẫn dắt tự nhiên",
        icon: "👑"
      },
      {
        category: "Sáng tạo & Nghệ thuật",
        jobs: ["Nhà thiết kế", "Kiến trúc sư", "Đạo diễn", "Nghệ sĩ độc lập"],
        description: "Công việc cho phép thể hiện tính sáng tạo và cá tính",
        icon: "🎨"
      },
      {
        category: "Kinh doanh & Khởi nghiệp",
        jobs: ["Doanh nhân", "Nhà đầu tư", "Tư vấn kinh doanh", "Startup founder"],
        description: "Lĩnh vực kinh doanh phù hợp với tinh thần tiên phong",
        icon: "💼"
      }
    ],
    entrepreneurship: {
      suitability: 95,
      description: "Rất phù hợp với việc khởi nghiệp và xây dựng doanh nghiệp riêng",
      businessTypes: ["Công ty công nghệ", "Dịch vụ tư vấn", "Thương mại điện tử", "Sản phẩm sáng tạo"]
    },
    challenges: ["Có thể quá độc đoán", "Cần học cách làm việc nhóm", "Kiên nhẫn với quy trình"],
    advice: "Hãy tận dụng khả năng lãnh đạo tự nhiên nhưng đừng quên lắng nghe ý kiến của đồng nghiệp. Tìm kiếm những vị trí cho phép bạn đổi mới và dẫn dắt."
  },
  2: {
    primaryTalents: ["Hợp tác và làm việc nhóm", "Giao tiếp và ngoại giao", "Hỗ trợ và tư vấn", "Tạo sự hài hòa"],
    workStyle: "Thích làm việc trong môi trường hợp tác, hỗ trợ người khác và xây dựng mối quan hệ",
    idealEnvironment: "Môi trường thân thiện, có nhiều tương tác xã hội và cơ hội hợp tác",
    careerSuggestions: [
      {
        category: "Tư vấn & Hỗ trợ",
        jobs: ["Tư vấn viên", "Nhân viên chăm sóc khách hàng", "Trợ lý cá nhân", "Coach"],
        description: "Công việc hỗ trợ và tư vấn phù hợp với tính cách quan tâm người khác",
        icon: "🤝"
      },
      {
        category: "Giáo dục & Đào tạo",
        jobs: ["Giáo viên", "Huấn luyện viên", "Nhân viên đào tạo", "Thư viện"],
        description: "Lĩnh vực giáo dục cho phép chia sẻ kiến thức và hỗ trợ học sinh",
        icon: "📚"
      },
      {
        category: "Y tế & Chăm sóc",
        jobs: ["Y tá", "Bác sĩ", "Nhân viên xã hội", "Chăm sóc sức khỏe"],
        description: "Ngành y tế phù hợp với mong muốn chăm sóc và giúp đỡ người khác",
        icon: "🏥"
      }
    ],
    entrepreneurship: {
      suitability: 60,
      description: "Phù hợp với việc kinh doanh theo nhóm hoặc đối tác, ít phù hợp với việc làm một mình",
      businessTypes: ["Dịch vụ tư vấn", "Trung tâm đào tạo", "Spa & wellness", "Dịch vụ chăm sóc"]
    },
    challenges: ["Có thể quá nhạy cảm", "Khó đưa ra quyết định khó khăn", "Cần tự tin hơn"],
    advice: "Tận dụng khả năng hợp tác và giao tiếp tốt. Tìm kiếm môi trường làm việc hỗ trợ và thân thiện. Đừng ngại thể hiện ý kiến của mình."
  },
  3: {
    primaryTalents: ["Sáng tạo và nghệ thuật", "Giao tiếp xuất sắc", "Truyền cảm hứng", "Biểu đạt cảm xúc"],
    workStyle: "Thích công việc sáng tạo, có nhiều tương tác và cơ hội thể hiện bản thân",
    idealEnvironment: "Môi trường tự do, sáng tạo và có nhiều cơ hội giao tiếp với mọi người",
    careerSuggestions: [
      {
        category: "Nghệ thuật & Giải trí",
        jobs: ["Diễn viên", "Ca sĩ", "Nhà văn", "Nghệ sĩ", "MC/Host"],
        description: "Lĩnh vực nghệ thuật cho phép thể hiện tài năng sáng tạo",
        icon: "🎭"
      },
      {
        category: "Truyền thông & Marketing",
        jobs: ["Nhà báo", "Content creator", "Chuyên viên marketing", "PR"],
        description: "Công việc truyền thông phù hợp với khả năng giao tiếp",
        icon: "📢"
      },
      {
        category: "Thiết kế & Sáng tạo",
        jobs: ["Graphic designer", "Nhà thiết kế thời trang", "Photographer", "Video editor"],
        description: "Công việc thiết kế cho phép thể hiện tính sáng tạo",
        icon: "🎨"
      }
    ],
    entrepreneurship: {
      suitability: 80,
      description: "Phù hợp với việc kinh doanh trong lĩnh vực sáng tạo và dịch vụ",
      businessTypes: ["Studio thiết kế", "Agency marketing", "Trung tâm nghệ thuật", "Content platform"]
    },
    challenges: ["Có thể thiếu tập trung", "Cần kỷ luật trong công việc", "Quản lý thời gian"],
    advice: "Tận dụng tài năng sáng tạo và khả năng giao tiếp. Tìm cách kết hợp đam mê với công việc. Học cách tập trung và hoàn thành dự án."
  },
  4: {
    primaryTalents: ["Tổ chức và quản lý", "Làm việc có hệ thống", "Đáng tin cậy", "Xây dựng nền tảng"],
    workStyle: "Thích công việc có cấu trúc rõ ràng, ổn định và có thể đo lường được kết quả",
    idealEnvironment: "Môi trường có quy trình rõ ràng, ổn định và có cơ hội phát triển lâu dài",
    careerSuggestions: [
      {
        category: "Tài chính & Kế toán",
        jobs: ["Kế toán viên", "Kiểm toán viên", "Nhà phân tích tài chính", "Ngân hàng"],
        description: "Lĩnh vực tài chính phù hợp với tính cẩn thận và có hệ thống",
        icon: "💰"
      },
      {
        category: "Kỹ thuật & Xây dựng",
        jobs: ["Kỹ sư", "Kiến trúc sư", "Quản lý dự án xây dựng", "Kỹ thuật viên"],
        description: "Ngành kỹ thuật phù hợp với khả năng xây dựng và tổ chức",
        icon: "🏗️"
      },
      {
        category: "Quản lý & Vận hành",
        jobs: ["Quản lý vận hành", "Quản lý nhân sự", "Quản lý chất lượng", "Logistics"],
        description: "Công việc quản lý phù hợp với khả năng tổ chức",
        icon: "📊"
      }
    ],
    entrepreneurship: {
      suitability: 70,
      description: "Phù hợp với việc kinh doanh trong lĩnh vực dịch vụ ổn định và có hệ thống",
      businessTypes: ["Dịch vụ tài chính", "Công ty xây dựng", "Dịch vụ logistics", "Sản xuất"]
    },
    challenges: ["Có thể quá cứng nhắc", "Khó thích nghi với thay đổi", "Cần sự linh hoạt"],
    advice: "Tận dụng khả năng tổ chức và làm việc có hệ thống. Tìm kiếm công việc ổn định nhưng vẫn có cơ hội phát triển. Học cách linh hoạt hơn."
  },
  5: {
    primaryTalents: ["Linh hoạt và thích nghi", "Giao tiếp đa dạng", "Khám phá và học hỏi", "Tự do sáng tạo"],
    workStyle: "Thích công việc đa dạng, có nhiều thay đổi và cơ hội du lịch hoặc gặp gỡ người mới",
    idealEnvironment: "Môi trường năng động, có nhiều thử thách mới và không bị ràng buộc quá nhiều",
    careerSuggestions: [
      {
        category: "Du lịch & Khám phá",
        jobs: ["Hướng dẫn viên du lịch", "Phi công", "Nhà báo du lịch", "Event planner"],
        description: "Lĩnh vực du lịch phù hợp với tình yêu khám phá",
        icon: "✈️"
      },
      {
        category: "Bán hàng & Kinh doanh",
        jobs: ["Sales representative", "Nhân viên kinh doanh", "Real estate", "Import/Export"],
        description: "Công việc bán hàng phù hợp với khả năng giao tiếp và linh hoạt",
        icon: "💼"
      },
      {
        category: "Truyền thông & Công nghệ",
        jobs: ["Digital marketer", "Social media manager", "Freelancer", "Consultant"],
        description: "Lĩnh vực công nghệ cho phép làm việc linh hoạt",
        icon: "💻"
      }
    ],
    entrepreneurship: {
      suitability: 85,
      description: "Rất phù hợp với việc khởi nghiệp, đặc biệt trong lĩnh vực công nghệ và dịch vụ",
      businessTypes: ["E-commerce", "Digital agency", "Travel services", "Online education"]
    },
    challenges: ["Có thể thiếu kiên trì", "Khó cam kết lâu dài", "Cần học cách tập trung"],
    advice: "Tìm kiếm công việc cho phép sự đa dạng và tự do. Tránh những công việc quá cứng nhắc. Học cách cân bằng giữa tự do và trách nhiệm."
  },
  6: {
    primaryTalents: ["Chăm sóc và nuôi dưỡng", "Trách nhiệm cao", "Tạo sự hài hòa", "Hỗ trợ cộng đồng"],
    workStyle: "Thích công việc có ý nghĩa xã hội, giúp đỡ người khác và tạo ra môi trường tích cực",
    idealEnvironment: "Môi trường thân thiện, có cơ hội chăm sóc và hỗ trợ người khác",
    careerSuggestions: [
      {
        category: "Y tế & Chăm sóc",
        jobs: ["Bác sĩ", "Y tá", "Dược sĩ", "Nhà trị liệu", "Chăm sóc người già"],
        description: "Ngành y tế phù hợp với mong muốn chăm sóc sức khỏe",
        icon: "🏥"
      },
      {
        category: "Giáo dục & Phát triển",
        jobs: ["Giáo viên", "Hiệu trưởng", "Tư vấn giáo dục", "Nhà tâm lý học"],
        description: "Lĩnh vực giáo dục cho phép nuôi dưỡng và phát triển người khác",
        icon: "🎓"
      },
      {
        category: "Dịch vụ xã hội",
        jobs: ["Nhân viên xã hội", "Tư vấn gia đình", "Nhân viên từ thiện", "Community manager"],
        description: "Công việc xã hội phù hợp với mong muốn giúp đỡ cộng đồng",
        icon: "🤲"
      }
    ],
    entrepreneurship: {
      suitability: 65,
      description: "Phù hợp với việc kinh doanh trong lĩnh vực dịch vụ chăm sóc và giáo dục",
      businessTypes: ["Trung tâm chăm sóc", "Trường học tư", "Dịch vụ gia đình", "Wellness center"]
    },
    challenges: ["Có thể hy sinh quá nhiều", "Cần học cách nói không", "Đặt ranh giới"],
    advice: "Tận dụng khả năng chăm sóc và hỗ trợ người khác. Tìm kiếm công việc có ý nghĩa xã hội. Học cách chăm sóc bản thân trước."
  },
  7: {
    primaryTalents: ["Phân tích và nghiên cứu", "Tư duy sâu sắc", "Trực giác mạnh", "Tìm kiếm sự thật"],
    workStyle: "Thích công việc đòi hỏi suy nghĩ sâu, nghiên cứu và có thời gian làm việc độc lập",
    idealEnvironment: "Môi trường yên tĩnh, có cơ hội nghiên cứu và phát triển chuyên môn sâu",
    careerSuggestions: [
      {
        category: "Nghiên cứu & Khoa học",
        jobs: ["Nhà nghiên cứu", "Nhà khoa học", "Phân tích dữ liệu", "Thống kê học"],
        description: "Lĩnh vực nghiên cứu phù hợp với tình yêu tìm hiểu",
        icon: "🔬"
      },
      {
        category: "Công nghệ & IT",
        jobs: ["Lập trình viên", "System analyst", "Cybersecurity", "AI researcher"],
        description: "Ngành IT phù hợp với khả năng phân tích và logic",
        icon: "💻"
      },
      {
        category: "Tâm linh & Tư vấn",
        jobs: ["Nhà tâm lý học", "Triết gia", "Tư vấn tâm linh", "Nhà nghiên cứu tôn giáo"],
        description: "Lĩnh vực tâm linh phù hợp với trực giác và tìm kiếm ý nghĩa",
        icon: "🧘"
      }
    ],
    entrepreneurship: {
      suitability: 55,
      description: "Phù hợp với việc kinh doanh trong lĩnh vực chuyên môn và tư vấn",
      businessTypes: ["Consulting firm", "Research company", "Tech startup", "Online education"]
    },
    challenges: ["Có thể quá cô lập", "Khó giao tiếp với đồng nghiệp", "Cần kỹ năng xã hội"],
    advice: "Tận dụng khả năng phân tích và nghiên cứu sâu. Tìm kiếm công việc cho phép làm việc độc lập. Phát triển kỹ năng giao tiếp."
  },
  8: {
    primaryTalents: ["Lãnh đạo kinh doanh", "Quản lý tài chính", "Tầm nhìn chiến lược", "Đạt được mục tiêu"],
    workStyle: "Thích công việc có thử thách lớn, cơ hội thăng tiến và đạt được thành công vật chất",
    idealEnvironment: "Môi trường cạnh tranh, có cơ hội lãnh đạo và đạt được thành tựu cao",
    careerSuggestions: [
      {
        category: "Lãnh đạo doanh nghiệp",
        jobs: ["CEO", "CFO", "Giám đốc điều hành", "Chủ tịch hội đồng quản trị"],
        description: "Vị trí lãnh đạo cao cấp phù hợp với tầm nhìn chiến lược",
        icon: "👔"
      },
      {
        category: "Tài chính & Đầu tư",
        jobs: ["Nhà đầu tư", "Quản lý quỹ", "Ngân hàng đầu tư", "Real estate"],
        description: "Lĩnh vực tài chính phù hợp với khả năng quản lý tiền bạc",
        icon: "💰"
      },
      {
        category: "Luật & Chính trị",
        jobs: ["Luật sư", "Thẩm phán", "Chính trị gia", "Lobbyist"],
        description: "Lĩnh vực luật pháp phù hợp với khả năng lãnh đạo và quyền lực",
        icon: "⚖️"
      }
    ],
    entrepreneurship: {
      suitability: 95,
      description: "Rất phù hợp với việc xây dựng và điều hành doanh nghiệp lớn",
      businessTypes: ["Tập đoàn đa ngành", "Công ty đầu tư", "Real estate", "Manufacturing"]
    },
    challenges: ["Có thể quá tham vong", "Cần cân bằng công việc-cuộc sống", "Học cách ủy quyền"],
    advice: "Tận dụng khả năng lãnh đạo và tầm nhìn kinh doanh. Tìm kiếm những thử thách lớn. Học cách cân bằng thành công với hạnh phúc cá nhân."
  },
  9: {
    primaryTalents: ["Tầm nhìn nhân đạo", "Truyền cảm hứng", "Phục vụ cộng đồng", "Hiểu biết sâu rộng"],
    workStyle: "Thích công việc có ý nghĩa lớn, giúp đỡ nhiều người và tạo ra tác động tích cực",
    idealEnvironment: "Môi trường có mục tiêu cao đẹp, cơ hội phục vụ cộng đồng và tạo ra thay đổi tích cực",
    careerSuggestions: [
      {
        category: "Phi lợi nhuận & Từ thiện",
        jobs: ["Giám đốc NGO", "Nhân viên từ thiện", "Hoạt động xã hội", "Tình nguyện viên"],
        description: "Lĩnh vực phi lợi nhuận phù hợp với mong muốn phục vụ",
        icon: "🤲"
      },
      {
        category: "Giáo dục & Nghiên cứu",
        jobs: ["Giáo sư đại học", "Nhà nghiên cứu xã hội", "Tác giả", "Diễn giả"],
        description: "Lĩnh vực giáo dục cho phép chia sẻ kiến thức rộng rãi",
        icon: "📚"
      },
      {
        category: "Nghệ thuật & Văn hóa",
        jobs: ["Nghệ sĩ", "Nhà văn", "Đạo diễn phim", "Curator bảo tàng"],
        description: "Lĩnh vực nghệ thuật cho phép truyền tải thông điệp ý nghĩa",
        icon: "🎭"
      }
    ],
    entrepreneurship: {
      suitability: 75,
      description: "Phù hợp với việc tạo ra doanh nghiệp có tác động xã hội tích cực",
      businessTypes: ["Social enterprise", "Educational platform", "Sustainable business", "Cultural organization"]
    },
    challenges: ["Có thể quá lý tưởng", "Cần thực tế hơn", "Quản lý tài chính cá nhân"],
    advice: "Tận dụng tầm nhìn nhân đạo và mong muốn phục vụ. Tìm kiếm công việc có ý nghĩa lớn. Học cách cân bằng lý tưởng với thực tế."
  }
};


export default function NumerologyCareerPage() {
  const [birthDate, setBirthDate] = useState('');
  const [name, setName] = useState('');
  const [career, setCareer] = useState<CareerAnalysis | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const calculateCareer = () => {
    if (!birthDate || !name) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    setIsCalculating(true);
    
    setTimeout(() => {
      const lifePath = birthDateToLifePath(birthDate);
      const data = careerData[lifePath];

      const newCareer: CareerAnalysis = {
        lifePath,
        name,
        birthDate,
        primaryTalents: data.primaryTalents,
        workStyle: data.workStyle,
        idealEnvironment: data.idealEnvironment,
        careerSuggestions: data.careerSuggestions,
        entrepreneurship: data.entrepreneurship,
        challenges: data.challenges,
        advice: data.advice
      };

      setCareer(newCareer);
      setIsCalculating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen ">
      {/* Enhanced SEO Header */}
    
      <ContentHeader
        title="Định Hướng Nghề Nghiệp Theo Thần Số Học"
        description="Khám phá nghề nghiệp lý tưởng phù hợp với số mệnh và tài năng bẩm sinh của bạn"
        breadcrumb={[
          { label: 'Trang Chủ', href: '/' },
          { label: 'Thần Số Học', href: '/than-so-hoc' },
          { label: 'Định Hướng Nghề Nghiệp', href: '/than-so-hoc/goi-y-nghe-nghiep' },
        ]}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Enhanced Input Form */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 shadow-2xl mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="text-2xl">🎯</span>
              Nhập Thông Tin Để Khám Phá Nghề Nghiệp Phù Hợp
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Chúng tôi sẽ phân tích số đường đời của bạn để đưa ra những gợi ý nghề nghiệp phù hợp nhất 
              với tính cách và tài năng bẩm sinh
            </p>
          </div>
          
          <div className="max-w-lg mx-auto space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-200 font-medium mb-2">
                <span>👤</span>
                Họ và tên của bạn
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:border-golden focus:outline-none focus:ring-2 focus:ring-golden/20 transition-all duration-300"
                placeholder="Ví dụ: Nguyễn Văn An"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-gray-200 font-medium mb-2">
                <span>📅</span>
                Ngày sinh của bạn
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:border-golden focus:outline-none focus:ring-2 focus:ring-golden/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={calculateCareer}
              disabled={isCalculating}
              className="group bg-gradient-to-r from-golden to-amber-400 hover:from-amber-400 hover:to-golden text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-golden/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <span className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                  Đang phân tích nghề nghiệp phù hợp...
                </span>
              ) : (
                <span className="flex items-center gap-3">
                  <span className="text-xl">�</span>
                  Khám Phá Nghề Nghiệp Lý Tưởng Ngay
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Results */}
        {career && (
          <div className="space-y-8">
            {/* Overview */}
            <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Phân Tích Nghề Nghiệp - Số Đường Đời {career.lifePath}
                </h2>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  {career.advice}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Primary Talents */}
                <div>
                  <h3 className="text-xl font-bold text-golden mb-4 flex items-center gap-2">
                    <span>⭐</span> Tài Năng Chính
                  </h3>
                  <ul className="space-y-2">
                    {career.primaryTalents.map((talent, index) => (
                      <li key={index} className="text-gray-300 flex items-start gap-2">
                        <span className="text-golden mt-1">•</span>
                        {talent}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Work Style */}
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <span>💼</span> Phong Cách Làm Việc
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{career.workStyle}</p>
                  
                  <h4 className="text-green-400 font-semibold mb-2">Môi Trường Lý Tưởng:</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{career.idealEnvironment}</p>
                </div>
              </div>
            </div>

            {/* Career Suggestions */}
            <div className="cosmic-card rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Gợi Ý Nghề Nghiệp
              </h3>

              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {career.careerSuggestions.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      activeCategory === index
                        ? 'bg-golden text-black'
                        : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.category}
                  </button>
                ))}
              </div>

              {/* Active Category Content */}
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {career.careerSuggestions[activeCategory].icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {career.careerSuggestions[activeCategory].category}
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {career.careerSuggestions[activeCategory].description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {career.careerSuggestions[activeCategory].jobs.map((job, index) => (
                    <div key={index} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600/30">
                      <div className="text-golden font-semibold">{job}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Entrepreneurship */}
            <div className="bg-gradient-to-br from-purple-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-700/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span>🚀</span> Khả Năng Khởi Nghiệp
              </h3>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">{career.entrepreneurship.suitability}%</div>
                        <div className="text-xs text-gray-300">Phù hợp</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {career.entrepreneurship.description}
                  </p>
                  
                  <h4 className="text-purple-400 font-semibold mb-2">Loại Hình Kinh Doanh Phù Hợp:</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.entrepreneurship.businessTypes.map((type, index) => (
                      <span key={index} className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-gradient-to-br from-orange-900/20 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-orange-700/20">
              <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                <span>⚡</span> Thách Thức Cần Lưu Ý
              </h3>
              <ul className="space-y-2">
                {career.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="cosmic-card hoverable rounded-2xl p-6">
          <div className="prose prose-lg prose-invert max-w-none">

          <ReactMarkDown>{content}</ReactMarkDown>
          </div>
        </div>
        {/* Related Links */}
        <RelatedServices currentPage="/than-so-hoc" />
      </div>
    </div>
  );
}


const content = `## Định Hướng Nghề Nghiệp Theo Thần Số Học: Tìm Thấy Công Việc Đích Thực Của Bạn

Bạn đang đứng trước ngưỡng cửa chọn ngành, hay cảm thấy lạc lõng trên con đường sự nghiệp hiện tại? Trong một thế giới đầy lựa chọn, việc tìm thấy công việc thực sự phù hợp với bản thân không hề dễ dàng. May mắn thay, **Thần Số Học** có thể trở thành "kim chỉ nam" đắc lực, giúp bạn khám phá những năng lực bẩm sinh và định hướng nghề nghiệp tiềm năng, dẫn lối đến một sự nghiệp ý nghĩa và thành công.

---

### Thần Số Học: "Bản Đồ" Năng Lực Của Bạn Trong Sự Nghiệp

Thần Số Học không phải là một công cụ "phán xét" hay giới hạn bạn vào một công việc cụ thể. Thay vào đó, nó là một hệ thống giải mã những **rung động năng lượng** từ ngày sinh và tên gọi của bạn, hé lộ những đặc điểm tính cách, kỹ năng và xu hướng tự nhiên phù hợp với các lĩnh vực nghề nghiệp nhất định. Nó giúp bạn:

* **Hiểu rõ điểm mạnh cốt lõi:** Những tài năng nổi trội mà bạn có thể chưa nhận ra hoặc chưa khai thác hết.
* **Phát hiện đam mê tiềm ẩn:** Khám phá những lĩnh vực mà bạn thực sự có hứng thú và có thể cống hiến lâu dài.
* **Nhận diện thách thức cần vượt qua:** Những khía cạnh cần cải thiện để phát triển hơn trong công việc.
* **Tìm kiếm môi trường làm việc lý tưởng:** Nơi bạn có thể phát huy tối đa khả năng và cảm thấy hạnh phúc.

---

### Các Chỉ Số Thần Số Học Quan Trọng Cho Định Hướng Nghề Nghiệp

Để định hướng nghề nghiệp theo Thần Số Học, chúng ta sẽ tập trung vào một số chỉ số chính:

#### 1. Con Số Chủ Đạo (Life Path Number)

Đây là con số quan trọng nhất, được tính từ **ngày tháng năm sinh** của bạn. Con số Chủ Đạo tiết lộ **sứ mệnh cuộc đời**, tính cách cốt lõi và con đường bạn được sinh ra để đi. Trong sự nghiệp, nó chỉ ra những lĩnh vực mà bạn sẽ tìm thấy sự thỏa mãn và ý nghĩa sâu sắc nhất.

* **Ví dụ:** Người có **số Chủ Đạo 1** thường phù hợp với vai trò lãnh đạo, khởi xướng, cần sự độc lập. Người có **số Chủ Đạo 6** có xu hướng phù hợp với ngành dịch vụ, chăm sóc, giáo dục, nơi họ có thể thể hiện sự yêu thương, trách nhiệm.

#### 2. Con Số Vận Mệnh (Destiny Number / Expression Number)

Được tính từ **tên đầy đủ của bạn**, Con số Vận Mệnh tiết lộ **tài năng bẩm sinh, khả năng thể hiện bản thân** và cách bạn thực hiện các mục tiêu trong sự nghiệp. Đây là những kỹ năng mà bạn có thể dễ dàng phát triển và sử dụng để thành công.

* **Ví dụ:** Người có **số Vận Mệnh 3** thường có khả năng giao tiếp, sáng tạo, phù hợp với nghệ thuật, truyền thông. Người có **số Vận Mệnh 8** có thiên hướng về kinh doanh, quản lý, tài chính, có tầm nhìn lớn.

#### 3. Con Số Linh Hồn (Soul Urge / Heart's Desire Number)

Tính từ các **nguyên âm trong tên bạn**, Con số Linh Hồn đại diện cho **khát vọng sâu thẳm nhất** trong công việc. Nó cho biết điều gì sẽ thực sự nuôi dưỡng tâm hồn và mang lại cảm giác viên mãn cho bạn, vượt qua cả yếu tố tài chính hay địa vị.

* **Ví dụ:** Nếu Con số Linh Hồn của bạn là **số 7**, bạn có thể tìm thấy niềm vui trong những công việc đòi hỏi sự nghiên cứu, phân tích sâu sắc, hoặc có yếu tố tâm linh.

---

### Làm Thế Nào Để Áp Dụng Thần Số Học Vào Định Hướng Nghề Nghiệp?

Thần Số Học không đưa ra một danh sách công việc cụ thể, mà gợi ý **nhóm ngành nghề và môi trường làm việc** phù hợp với năng lượng của bạn:

* **Tự phân tích:** Tính toán các chỉ số của bạn và đọc ý nghĩa chi tiết.
* **Đối chiếu với bản thân:** So sánh những gì Thần Số Học nói với những gì bạn cảm thấy, sở thích và kinh nghiệm của mình.
* **Khám phá các lĩnh vực mới:** Đừng ngại tìm hiểu những ngành nghề mà bạn chưa từng nghĩ tới nhưng lại có chỉ số phù hợp.
* **Cải thiện kỹ năng:** Nếu một chỉ số cho thấy bạn mạnh về giao tiếp nhưng bạn cảm thấy mình còn yếu, đây là lúc để trau dồi.

Hãy nhớ rằng, Thần Số Học là một công cụ hỗ trợ. Quyết định cuối cùng luôn nằm trong tay bạn. Nó giúp bạn hiểu rõ hơn về bản thân, từ đó đưa ra lựa chọn sáng suốt và tự tin trên con đường sự nghiệp của mình.
`