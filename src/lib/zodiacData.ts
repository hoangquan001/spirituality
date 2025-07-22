// Dữ liệu chi tiết cho 12 cung hoàng đạo

export interface ZodiacDetail {
  name: string;
  slug: string;
  dates: string;
  element: string;
  ruling_planet: string;
  symbol: string;
  icon: string;
  color: string;
  
  // Thông tin chi tiết
  personality: {
    strengths: string[];
    weaknesses: string[];
    traits: string[];
  };
  
  love: {
    compatibility: string[];
    love_style: string;
    ideal_partner: string;
    relationship_advice: string;
  };
  
  career: {
    suitable_jobs: string[];
    work_style: string;
    leadership: string;
    money_management: string;
  };
  
  health: {
    body_parts: string[];
    health_tips: string[];
    stress_management: string;
  };
  
  lucky: {
    numbers: number[];
    colors: string[];
    days: string[];
    gemstones: string[];
  };
  
  forecast_2024: {
    general: string;
    love: string;
    career: string;
    health: string;
    finance: string;
  };
}

export const zodiacData: Record<string, ZodiacDetail> = {
  "bach-duong": {
    name: "Bạch Dương",
    slug: "bach-duong",
    dates: "21/3 - 19/4",
    element: "Hỏa",
    ruling_planet: "Sao Hỏa",
    symbol: "Cừu",
    icon: "♈",
    color: "from-red-600 to-orange-600",
    
    personality: {
      strengths: [
        "Dũng cảm và quyết đoán",
        "Năng động và nhiệt huyết",
        "Khả năng lãnh đạo tự nhiên",
        "Sáng tạo và đổi mới",
        "Trung thực và thẳng thắn"
      ],
      weaknesses: [
        "Nóng tính và thiếu kiên nhẫn",
        "Hành động thiếu suy nghĩ",
        "Ích kỷ và tự cao",
        "Dễ bỏ cuộc khi gặp khó khăn",
        "Không thích bị điều khiển"
      ],
      traits: [
        "Người tiên phong trong mọi việc",
        "Thích thử thách và phiêu lưu",
        "Có khả năng truyền cảm hứng",
        "Luôn tìm kiếm sự mới mẻ",
        "Độc lập và tự chủ cao"
      ]
    },
    
    love: {
      compatibility: ["Sư Tử", "Nhân Mã", "Song Tử", "Bảo Bình"],
      love_style: "Đam mê, mãnh liệt và chân thành. Bạch Dương yêu bằng cả trái tim và không ngại thể hiện cảm xúc.",
      ideal_partner: "Người có thể theo kịp nhịp sống năng động, hiểu và ủng hộ tham vọng của Bạch Dương.",
      relationship_advice: "Hãy học cách kiềm chế cơn nóng giận và lắng nghe đối phương nhiều hơn. Đừng quá vội vàng trong các quyết định tình cảm."
    },
    
    career: {
      suitable_jobs: [
        "Doanh nhân, CEO",
        "Quân nhân, cảnh sát",
        "Vận động viên",
        "Bác sĩ phẫu thuật",
        "Nhà thiết kế, kiến trúc sư",
        "Nhà báo, phóng viên"
      ],
      work_style: "Thích làm việc độc lập, đưa ra quyết định nhanh chóng và dẫn dắt nhóm. Không thích công việc nhàm chán.",
      leadership: "Lãnh đạo bằng tấm gương và sự nhiệt huyết. Có khả năng truyền cảm hứng cho đồng nghiệp.",
      money_management: "Có xu hướng chi tiêu tự phát và đầu tư mạo hiểm. Cần học cách tiết kiệm và lập kế hoạch tài chính."
    },
    
    health: {
      body_parts: ["Đầu", "Mặt", "Não", "Mắt"],
      health_tips: [
        "Tránh căng thẳng và stress",
        "Tập thể dục đều đặn để giải tỏa năng lượng",
        "Chú ý bảo vệ đầu khi hoạt động thể thao",
        "Ăn uống điều độ, tránh thức ăn cay nóng",
        "Ngủ đủ giấc để phục hồi năng lượng"
      ],
      stress_management: "Hoạt động thể chất mạnh như chạy bộ, boxing hoặc leo núi giúp giải tỏa stress hiệu quả."
    },
    
    lucky: {
      numbers: [1, 8, 17, 26],
      colors: ["Đỏ", "Cam", "Vàng"],
      days: ["Thứ Ba", "Chủ Nhật"],
      gemstones: ["Ruby", "Hồng ngọc", "Thạch anh đỏ"]
    },
    
    forecast_2024: {
      general: "Năm 2024 là năm đột phá với nhiều cơ hội mới. Bạch Dương sẽ gặp may mắn trong việc khởi nghiệp và phát triển bản thân.",
      love: "Tình yêu nở rộ vào mùa hè. Người độc thân có cơ hội gặp được nửa kia, người đã có đôi sẽ tiến tới hôn nhân.",
      career: "Sự nghiệp thăng tiến mạnh mẽ. Có thể được thăng chức hoặc nhận được đề nghị công việc hấp dẫn.",
      health: "Sức khỏe tổng thể tốt nhưng cần chú ý nghỉ ngơi. Tránh làm việc quá sức vào cuối năm.",
      finance: "Tài chính ổn định với thu nhập tăng. Đây là thời điểm tốt để đầu tư bất động sản hoặc khởi nghiệp."
    }
  },

  "kim-nguu": {
    name: "Kim Ngưu",
    slug: "kim-nguu",
    dates: "20/4 - 20/5",
    element: "Thổ",
    ruling_planet: "Sao Kim",
    symbol: "Bò",
    icon: "♉",
    color: "from-green-600 to-emerald-600",
    
    personality: {
      strengths: [
        "Ổn định và đáng tin cậy",
        "Kiên nhẫn và bền bỉ",
        "Thực tế và có óc tính toán",
        "Trung thành và tận tụy",
        "Có khiếu thẩm mỹ tốt"
      ],
      weaknesses: [
        "Cứng đầu và khó thay đổi",
        "Vật chất và tham lam",
        "Lười biếng và an phận",
        "Ghen tuông và chiếm hữu",
        "Chậm chạp trong quyết định"
      ],
      traits: [
        "Yêu thích sự thoải mái và xa xỉ",
        "Có khả năng tích lũy tài sản",
        "Trân trọng truyền thống và gia đình",
        "Thích môi trường ổn định",
        "Có bản năng bảo vệ mạnh mẽ"
      ]
    },
    
    love: {
      compatibility: ["Xử Nữ", "Ma Kết", "Cự Giải", "Song Ngư"],
      love_style: "Yêu chậm rãi nhưng sâu sắc. Kim Ngưu cần thời gian để tin tưởng và mở lòng với ai đó.",
      ideal_partner: "Người ổn định, chung thủy và có khả năng tài chính tốt. Hiểu và chia sẻ giá trị sống của Kim Ngưu.",
      relationship_advice: "Đừng quá cứng nhắc trong mối quan hệ. Hãy học cách thỏa hiệp và lắng nghe ý kiến của đối phương."
    },
    
    career: {
      suitable_jobs: [
        "Ngân hàng, tài chính",
        "Bất động sản",
        "Nông nghiệp, làm vườn",
        "Đầu bếp, ẩm thực",
        "Thiết kế nội thất",
        "Nhạc sĩ, ca sĩ"
      ],
      work_style: "Làm việc chăm chỉ và có phương pháp. Thích môi trường ổn định và không thích thay đổi đột ngột.",
      leadership: "Lãnh đạo bằng sự ổn định và đáng tin cậy. Tạo môi trường làm việc hài hòa cho nhóm.",
      money_management: "Xuất sắc trong quản lý tài chính. Có khả năng tiết kiệm và đầu tư dài hạn hiệu quả."
    },
    
    health: {
      body_parts: ["Cổ", "Họng", "Tuyến giáp", "Tai"],
      health_tips: [
        "Chú ý chế độ ăn uống, tránh béo phì",
        "Tập thể dục nhẹ nhàng đều đặn",
        "Bảo vệ cổ họng, tránh cảm lạnh",
        "Massage cổ để giảm căng thẳng",
        "Kiểm tra tuyến giáp định kỳ"
      ],
      stress_management: "Yoga, thiền định hoặc các hoạt động gần gũi với thiên nhiên như làm vườn giúp thư giãn."
    },
    
    lucky: {
      numbers: [2, 6, 9, 12, 24],
      colors: ["Xanh lá", "Hồng", "Xanh da trời nhạt"],
      days: ["Thứ Sáu", "Thứ Hai"],
      gemstones: ["Ngọc lục bảo", "Hồng thạch anh", "Cẩm thạch xanh"]
    },
    
    forecast_2024: {
      general: "Năm ổn định với sự phát triển từ từ nhưng bền vững. Kim Ngưu sẽ gặt hái thành quả từ những nỗ lực trước đó.",
      love: "Tình yêu êm ấm và bền chặt. Cặp đôi sẽ có những kế hoạch lâu dài, có thể là kết hôn hoặc mua nhà chung.",
      career: "Công việc ổn định với thu nhập đều đặn. Có cơ hội thăng tiến nhờ sự tin tưởng của cấp trên.",
      health: "Sức khỏe tốt nhưng cần chú ý cân nặng. Nên duy trì chế độ ăn uống lành mạnh và tập thể dục.",
      finance: "Tài chính vững mạnh với khả năng tích lũy cao. Đầu tư bất động sản hoặc vàng sẽ mang lại lợi nhuận."
    }
  },

  "song-tu": {
    name: "Song Tử",
    slug: "song-tu",
    dates: "21/5 - 20/6",
    element: "Khí",
    ruling_planet: "Sao Thủy",
    symbol: "Đôi",
    icon: "♊",
    color: "from-yellow-600 to-amber-600",
    
    personality: {
      strengths: [
        "Thông minh và nhanh nhẹn",
        "Giao tiếp xuất sắc",
        "Linh hoạt và thích ứng nhanh",
        "Tò mò và ham học hỏi",
        "Hài hước và dí dỏm"
      ],
      weaknesses: [
        "Thiếu tập trung và dễ phân tâm",
        "Không kiên trì và hay thay đổi",
        "Nói nhiều hơn làm",
        "Thiếu sâu sắc trong cảm xúc",
        "Hay lo lắng và căng thẳng"
      ],
      traits: [
        "Có hai mặt tính cách khác nhau",
        "Thích giao lưu và kết bạn",
        "Luôn tìm kiếm thông tin mới",
        "Có khả năng đa nhiệm",
        "Yêu thích sự tự do"
      ]
    },
    
    love: {
      compatibility: ["Thiên Bình", "Bảo Bình", "Bạch Dương", "Sư Tử"],
      love_style: "Yêu bằng trí tuệ và sự hài hước. Song Tử cần người bạn đời có thể trò chuyện và chia sẻ mọi điều.",
      ideal_partner: "Người thông minh, hài hước và không quá gò bó. Hiểu và tôn trọng nhu cầu tự do của Song Tử.",
      relationship_advice: "Hãy học cách cam kết và tập trung vào một mối quan hệ. Đừng sợ thể hiện cảm xúc sâu sắc."
    },
    
    career: {
      suitable_jobs: [
        "Nhà báo, biên tập viên",
        "Giáo viên, diễn giả",
        "Marketing, quảng cáo",
        "Hướng dẫn viên du lịch",
        "Dịch thuật viên",
        "Nhà văn, blogger"
      ],
      work_style: "Thích công việc đa dạng và có tính chất giao tiếp. Không thích làm việc đơn điệu lặp đi lặp lại.",
      leadership: "Lãnh đạo bằng trí tuệ và khả năng giao tiếp. Tạo không khí làm việc vui vẻ và sáng tạo.",
      money_management: "Có xu hướng chi tiêu tự phát. Cần lập kế hoạch tài chính cụ thể và kiểm soát chi tiêu."
    },
    
    health: {
      body_parts: ["Phổi", "Tay", "Vai", "Hệ thần kinh"],
      health_tips: [
        "Luyện tập hô hấp để tăng cường phổi",
        "Giảm stress và lo âu",
        "Bảo vệ tay và vai khi làm việc",
        "Ngủ đủ giấc để phục hồi thần kinh",
        "Hạn chế caffeine và chất kích thích"
      ],
      stress_management: "Đọc sách, viết lách hoặc trò chuyện với bạn bè giúp giải tỏa căng thẳng tinh thần."
    },
    
    lucky: {
      numbers: [5, 7, 14, 23],
      colors: ["Vàng", "Xanh lá nhạt", "Bạc"],
      days: ["Thứ Tư", "Chủ Nhật"],
      gemstones: ["Hoàng ngọc", "Thạch anh trong", "Xanh lam"]
    },
    
    forecast_2024: {
      general: "Năm đầy biến động với nhiều cơ hội học hỏi và giao lưu. Song Tử sẽ mở rộng mạng lưới quan hệ đáng kể.",
      love: "Tình yêu nhiều sắc thái. Có thể gặp nhiều người thú vị nhưng cần thời gian để tìm ra người phù hợp.",
      career: "Nhiều cơ hội nghề nghiệp mới. Có thể thay đổi công việc hoặc học thêm kỹ năng mới để phát triển.",
      health: "Cần chú ý sức khỏe tinh thần. Thiền định và yoga sẽ giúp cân bằng cảm xúc.",
      finance: "Thu nhập không ổn định nhưng có nhiều nguồn. Nên đa dạng hóa đầu tư và tiết kiệm cho tương lai."
    }
  },

  // Tiếp tục với các cung khác...
  "cu-giai": {
    name: "Cự Giải",
    slug: "cu-giai",
    dates: "21/6 - 22/7",
    element: "Thủy",
    ruling_planet: "Mặt Trăng",
    symbol: "Cua",
    icon: "♋",
    color: "from-blue-600 to-cyan-600",
    
    personality: {
      strengths: [
        "Nhạy cảm và thấu hiểu",
        "Quan tâm gia đình và bạn bè",
        "Trực giác mạnh mẽ",
        "Bảo vệ và che chở người khác",
        "Sáng tạo và giàu trí tưởng tượng"
      ],
      weaknesses: [
        "Dễ tổn thương và xúc động",
        "Hay thay đổi tâm trạng",
        "Quá bảo vệ và kiểm soát",
        "Khó tha thứ khi bị tổn thương",
        "Có xu hướng sống trong quá khứ"
      ],
      traits: [
        "Luôn đặt gia đình lên hàng đầu",
        "Có bản năng mẹ thiên liêng",
        "Thích môi trường quen thuộc",
        "Cảm xúc sâu sắc và phong phú",
        "Có khả năng cảm nhận tâm trạng người khác"
      ]
    },
    
    love: {
      compatibility: ["Bọ Cạp", "Song Ngư", "Kim Ngưu", "Xử Nữ"],
      love_style: "Yêu bằng cả trái tim và tâm hồn. Cự Giải cần sự an toàn và cam kết trong tình yêu.",
      ideal_partner: "Người hiểu và bảo vệ cảm xúc của Cự Giải. Có trách nhiệm và muốn xây dựng gia đình.",
      relationship_advice: "Đừng quá nhạy cảm với những lời nói vô tình. Hãy học cách thể hiện cảm xúc một cách tích cực."
    },
    
    career: {
      suitable_jobs: [
        "Y tá, bác sĩ",
        "Giáo viên mầm non",
        "Nhà tâm lý học",
        "Đầu bếp, nhà hàng",
        "Thiết kế nội thất",
        "Nhà văn, nhà thơ"
      ],
      work_style: "Thích làm việc trong môi trường thân thiện và hỗ trợ lẫn nhau. Có khả năng chăm sóc và hỗ trợ đồng nghiệp.",
      leadership: "Lãnh đạo bằng sự quan tâm và chăm sóc. Tạo môi trường làm việc như gia đình.",
      money_management: "Tiết kiệm để bảo đảm an ninh cho gia đình. Ưu tiên đầu tư vào nhà cửa và giáo dục con em."
    },
    
    health: {
      body_parts: ["Dạ dày", "Ngực", "Tử cung", "Hệ tiêu hóa"],
      health_tips: [
        "Chú ý chế độ ăn uống, tránh stress",
        "Bảo vệ dạ dày, ăn đúng giờ",
        "Kiểm tra sức khỏe phụ khoa định kỳ",
        "Tập thể dục nhẹ nhàng như bơi lội",
        "Duy trì tinh thần thoải mái"
      ],
      stress_management: "Ở bên gia đình, nấu ăn hoặc chăm sóc cây cảnh giúp Cự Giải thư giãn và hồi phục năng lượng."
    },
    
    lucky: {
      numbers: [2, 7, 11, 16, 20, 29],
      colors: ["Bạc", "Trắng", "Xanh da trời nhạt"],
      days: ["Thứ Hai", "Thứ Năm"],
      gemstones: ["Ngọc trai", "Thạch anh trắng", "Đá mặt trăng"]
    },
    
    forecast_2024: {
      general: "Năm tập trung vào gia đình và cảm xúc. Cự Giải sẽ có những trải nghiệm sâu sắc về mặt tinh thần.",
      love: "Tình yêu gia đình và partner sẽ được củng cố. Có thể có tin vui về con cái hoặc kế hoạch kết hôn.",
      career: "Công việc ổn định nhưng có thể có thay đổi để phù hợp với gia đình. Ngành chăm sóc sức khỏe sẽ thuận lợi.",
      health: "Cần chú ý sức khỏe tinh thần và dạ dày. Tránh căng thẳng và duy trì chế độ ăn uống đều đặn.",
      finance: "Tài chính ổn định với mục tiêu tiết kiệm cho gia đình. Đầu tư bất động sản sẽ mang lại lợi ích lâu dài."
    }
  },

  "su-tu": {
    name: "Sư Tử",
    slug: "su-tu",
    dates: "23/7 - 22/8",
    element: "Hỏa",
    ruling_planet: "Mặt Trời",
    symbol: "Sư tử",
    icon: "♌",
    color: "from-orange-600 to-yellow-600",
    
    personality: {
      strengths: [
        "Tự tin và hào phóng",
        "Khả năng lãnh đạo tự nhiên",
        "Sáng tạo và nghệ thuật",
        "Trung thành và tận tụy",
        "Lạc quan và nhiệt huyết"
      ],
      weaknesses: [
        "Kiêu căng và tự phụ",
        "Thích được chú ý",
        "Cứng đầu và độc đoán",
        "Dễ tổn thương khi bị phê bình",
        "Chi tiêu hoang phí"
      ],
      traits: [
        "Luôn muốn là trung tâm chú ý",
        "Có khí chất hoàng gia",
        "Bảo vệ người yêu thương",
        "Thích được tôn trọng và ngưỡng mộ",
        "Có tầm nhìn và khả năng truyền cảm hứng"
      ]
    },
    
    love: {
      compatibility: ["Bạch Dương", "Nhân Mã", "Song Tử", "Thiên Bình"],
      love_style: "Yêu mãnh liệt và trọn vẹn. Sư Tử cần được ngưỡng mộ và tôn trọng trong tình yêu.",
      ideal_partner: "Người có thể đánh giá cao và ủng hộ Sư Tử. Thông minh, hài hước và không ganh đua.",
      relationship_advice: "Đừng quá đòi hỏi sự chú ý. Hãy học cách lắng nghe và chia sẻ ánh hào quang với đối phương."
    },
    
    career: {
      suitable_jobs: [
        "Diễn viên, ca sĩ",
        "Đạo diễn, nhà sản xuất",
        "CEO, giám đốc",
        "Giáo viên, diễn giả",
        "Nhà thiết kế thời trang",
        "Chính trị gia"
      ],
      work_style: "Thích làm việc trong môi trường có thể thể hiện tài năng và được ghi nhận. Có khả năng dẫn dắt và truyền cảm hứng.",
      leadership: "Lãnh đạo bằng tầm nhìn và sự nhiệt huyết. Tạo động lực cho nhóm bằng chính năng lượng của mình.",
      money_management: "Có xu hướng chi tiêu sang trọng. Cần học cách cân đối giữa thưởng thức cuộc sống và tiết kiệm."
    },
    
    health: {
      body_parts: ["Tim", "Lưng", "Cột sống", "Tuần hoàn"],
      health_tips: [
        "Tập thể dục để tăng cường tim mạch",
        "Chú ý tư thế ngồi để bảo vệ cột sống",
        "Kiểm tra tim định kỳ",
        "Tránh căng thẳng và áp lực",
        "Duy trì chế độ ăn tốt cho tim"
      ],
      stress_management: "Các hoạt động sáng tạo như nhảy múa, hát hoặc diễn xuất giúp Sư Tử giải tỏa stress."
    },
    
    lucky: {
      numbers: [1, 3, 10, 19, 28],
      colors: ["Vàng", "Cam", "Đỏ"],
      days: ["Chủ Nhật", "Thứ Ba"],
      gemstones: ["Kim cương", "Hoàng ngọc", "Hồng ngọc"]
    },
    
    forecast_2024: {
      general: "Năm tỏa sáng với nhiều cơ hội thể hiện tài năng. Sư Tử sẽ được ghi nhận và đánh giá cao.",
      love: "Tình yêu lãng mạn và đầy màu sắc. Có cơ hội gặp gỡ những người thú vị và có tầm ảnh hưởng.",
      career: "Sự nghiệp thăng hoa với nhiều dự án quan trọng. Có thể được đề bạt hoặc nhận trách nhiệm lớn.",
      health: "Sức khỏe tốt nhưng cần chú ý tim mạch. Tập thể dục đều đặn và kiểm tra sức khỏe định kỳ.",
      finance: "Thu nhập tăng đáng kể nhưng cũng chi tiêu nhiều. Cần cân đối giữa hưởng thụ và đầu tư."
    }
  },

  "xu-nu": {
    name: "Xử Nữ",
    slug: "xu-nu",
    dates: "23/8 - 22/9",
    element: "Thổ",
    ruling_planet: "Sao Thủy",
    symbol: "Trinh nữ",
    icon: "♍",
    color: "from-indigo-600 to-gray-600",
    
    personality: {
      strengths: [
        "Tỉ mỉ và cẩn thận",
        "Phân tích và logic tốt",
        "Chăm chỉ và có trách nhiệm",
        "Khiêm tốn và phục vụ",
        "Thực tế và tiết kiệm"
      ],
      weaknesses: [
        "Hoàn hảo chủ nghĩa",
        "Lo lắng và căng thẳng",
        "Phê bình và khó tính",
        "Thiếu tự tin",
        "Quá chú ý chi tiết nhỏ"
      ],
      traits: [
        "Luôn hướng đến sự hoàn hảo",
        "Có khả năng tổ chức xuất sắc",
        "Chú ý đến sức khỏe và dinh dưỡng",
        "Thích giúp đỡ người khác",
        "Có óc phê bình và phân tích sắc sảo"
      ]
    },
    
    love: {
      compatibility: ["Kim Ngưu", "Ma Kết", "Cự Giải", "Bọ Cạp"],
      love_style: "Yêu chậm rãi nhưng chân thành. Xử Nữ cần thời gian để quan sát và đánh giá đối phương.",
      ideal_partner: "Người đáng tin cậy, có trách nhiệm và hiểu tính cách cẩn thận của Xử Nữ.",
      relationship_advice: "Đừng quá khắt khe với bản thân và đối phương. Hãy học cách thể hiện cảm xúc tự nhiên hơn."
    },
    
    career: {
      suitable_jobs: [
        "Bác sĩ, y tá",
        "Kế toán, kiểm toán",
        "Nhà nghiên cứu",
        "Thư ký, trợ lý",
        "Dinh dưỡng viên",
        "Biên tập viên"
      ],
      work_style: "Làm việc có phương pháp và chi tiết. Thích môi trường làm việc gọn gàng và có quy trình rõ ràng.",
      leadership: "Lãnh đạo bằng sự tỉ mỉ và tận tâm. Đảm bảo mọi công việc được hoàn thành một cách hoàn hảo.",
      money_management: "Quản lý tài chính rất tốt. Có khả năng tiết kiệm và đầu tư an toàn, ổn định."
    },
    
    health: {
      body_parts: ["Ruột", "Hệ tiêu hóa", "Da", "Hệ thần kinh"],
      health_tips: [
        "Chế độ ăn uống lành mạnh và đều đặn",
        "Tránh căng thẳng và lo âu",
        "Chăm sóc da và vệ sinh cá nhân",
        "Tập thể dục nhẹ nhàng như yoga",
        "Kiểm tra sức khỏe định kỳ"
      ],
      stress_management: "Làm vườn, dọn dẹp nhà cửa hoặc các hoạt động thủ công giúp Xử Nữ thư giãn."
    },
    
    lucky: {
      numbers: [3, 6, 14, 23, 27],
      colors: ["Xanh navy", "Xám", "Nâu"],
      days: ["Thứ Tư", "Thứ Sáu"],
      gemstones: ["Sapphire", "Jasper", "Moss Agate"]
    },
    
    forecast_2024: {
      general: "Năm làm việc chăm chỉ và gặt hái thành quả. Xử Nữ sẽ được ghi nhận vì sự tận tâm và chuyên nghiệp.",
      love: "Tình yêu phát triển từ từ nhưng bền vững. Có thể tìm được người phù hợp thông qua công việc.",
      career: "Công việc ổn định với cơ hội thăng tiến. Kỹ năng phân tích và tổ chức sẽ được đánh giá cao.",
      health: "Sức khỏe cần được chú ý, đặc biệt hệ tiêu hóa. Duy trì chế độ ăn uống và tập luyện đều đặn.",
      finance: "Tài chính ổn định với khả năng tiết kiệm tốt. Đầu tư an toàn sẽ mang lại lợi nhuận ổn định."
    }
  },

  // Tiếp tục với các cung còn lại
  "thien-binh": {
    name: "Thiên Bình",
    slug: "thien-binh",
    dates: "23/9 - 22/10",
    element: "Khí",
    ruling_planet: "Sao Kim",
    symbol: "Cán cân",
    icon: "♎",
    color: "from-pink-600 to-rose-600",
    
    personality: {
      strengths: [
        "Hòa hợp và cân bằng",
        "Thẩm mỹ và nghệ thuật",
        "Công bằng và khách quan",
        "Quyến rũ và lịch lãm",
        "Ngoại giao và hòa giải"
      ],
      weaknesses: [
        "Do dự và thiếu quyết đoán",
        "Tránh xung đột",
        "Phụ thuộc vào người khác",
        "Thiếu kiên định",
        "Dễ bị ảnh hưởng"
      ],
      traits: [
        "Luôn tìm kiếm sự công bằng",
        "Yêu thích cái đẹp và hài hòa",
        "Có khả năng làm hòa",
        "Thích hợp tác hơn cạnh tranh",
        "Cần đối tác trong cuộc sống"
      ]
    },
    
    love: {
      compatibility: ["Song Tử", "Bảo Bình", "Sư Tử", "Nhân Mã"],
      love_style: "Yêu lãng mạn và cân bằng. Thiên Bình coi trọng hài hòa và sự đẹp đẽ trong tình yêu.",
      ideal_partner: "Người có thẩm mỹ, hiểu biết và có thể tạo sự cân bằng trong mối quan hệ.",
      relationship_advice: "Hãy học cách đưa ra quyết định và không ngại thể hiện quan điểm của mình."
    },
    
    career: {
      suitable_jobs: [
        "Luật sư, thẩm phán",
        "Nhà thiết kế",
        "Nhà ngoại giao",
        "Tư vấn viên",
        "Nghệ sĩ, nhạc sĩ",
        "Chuyên viên quan hệ công chúng"
      ],
      work_style: "Thích làm việc trong môi trường hài hòa và hợp tác. Tránh xung đột và căng thẳng.",
      leadership: "Lãnh đạo bằng sự hòa giải và cân bằng. Tạo môi trường làm việc công bằng cho tất cả.",
      money_management: "Chi tiêu cho vẻ đẹp và nghệ thuật. Cần học cách cân đối thu chi và đầu tư thông minh."
    },
    
    health: {
      body_parts: ["Thận", "Lưng dưới", "Da", "Hệ nội tiết"],
      health_tips: [
        "Uống đủ nước để bảo vệ thận",
        "Tránh căng thẳng ảnh hưởng đến da",
        "Tập thể dục để tăng cường lưng",
        "Cân bằng hormone tự nhiên",
        "Chăm sóc sắc đẹp từ bên trong"
      ],
      stress_management: "Nghe nhạc, thưởng thức nghệ thuật hoặc spa thư giãn giúp Thiên Bình cân bằng lại."
    },
    
    lucky: {
      numbers: [6, 15, 24, 33, 42],
      colors: ["Hồng", "Xanh pastel", "Kem"],
      days: ["Thứ Sáu", "Thứ Hai"],
      gemstones: ["Opal", "Thạch anh hồng", "Jade"]
    },
    
    forecast_2024: {
      general: "Năm cân bằng với nhiều mối quan hệ mới. Thiên Bình sẽ tìm được sự hài hòa trong cuộc sống.",
      love: "Tình yêu nở rộ với nhiều cơ hội hẹn hò. Mối quan hệ hiện tại sẽ trở nên sâu sắc hơn.",
      career: "Công việc thuận lợi nhờ khả năng hợp tác. Có thể tham gia các dự án nghệ thuật hoặc thiết kế.",
      health: "Sức khỏe ổn định nhưng cần chú ý thận và da. Duy trì lối sống cân bằng và tránh stress.",
      finance: "Tài chính cải thiện nhờ hợp tác và đầu tư thông minh. Tránh chi tiêu quá mức cho xa xỉ phẩm."
    }
  }
};

// Hàm lấy thông tin cung hoàng đạo theo slug
export function getZodiacBySlug(slug: string): ZodiacDetail | null {
  return zodiacData[slug] || null;
}

// Hàm lấy danh sách tất cả các cung
export function getAllZodiacSigns(): ZodiacDetail[] {
  return Object.values(zodiacData);
}

// Hàm tính tương thích giữa 2 cung
export function getCompatibility(sign1: string, sign2: string): number {
  const compatibilityMatrix: Record<string, Record<string, number>> = {
    "bach-duong": {
      "bach-duong": 85, "kim-nguu": 65, "song-tu": 90, "cu-giai": 70,
      "su-tu": 95, "xu-nu": 60, "thien-binh": 85, "ho-cap": 75,
      "nhan-ma": 95, "ma-ket": 70, "bao-binh": 90, "song-ngu": 65
    },
    "kim-nguu": {
      "bach-duong": 65, "kim-nguu": 80, "song-tu": 70, "cu-giai": 90,
      "su-tu": 65, "xu-nu": 95, "thien-binh": 85, "ho-cap": 80,
      "nhan-ma": 60, "ma-ket": 95, "bao-binh": 65, "song-ngu": 85
    }
    // Có thể mở rộng thêm...
  };
  
  return compatibilityMatrix[sign1]?.[sign2] || 50;
}
