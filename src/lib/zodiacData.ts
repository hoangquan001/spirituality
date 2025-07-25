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
        "Dũng cảm và Quyết đoán: Luôn sẵn sàng đối mặt thử thách, không ngại khó khăn.",
        "Năng động và Nhiệt huyết: Tràn đầy năng lượng, mang lại không khí sôi nổi.",
        "Khả năng Lãnh đạo tự nhiên: Có tố chất dẫn dắt, truyền cảm hứng cho người khác.",
        "Sáng tạo và Đổi mới: Thích khám phá cái mới, đưa ra ý tưởng độc đáo.",
        "Trung thực và Thẳng thắn: Luôn nói ra suy nghĩ thật lòng, không quanh co."
      ],
      weaknesses: [
        "Nóng tính và Thiếu kiên nhẫn: Dễ nổi giận, muốn mọi thứ phải nhanh chóng.",
        "Hành động thiếu suy nghĩ: Đôi khi quá vội vàng, bỏ qua việc cân nhắc kỹ lưỡng.",
        "Ích kỷ và Tự cao: Có thể chỉ tập trung vào bản thân, ít để ý cảm xúc người khác.",
        "Dễ bỏ cuộc khi gặp khó khăn: Dù bắt đầu nhiệt tình nhưng có thể nản lòng khi thử thách kéo dài.",
        "Không thích bị điều khiển: Rất ghét bị ràng buộc hay bị người khác ra lệnh."
      ],
      traits: [
        "Người tiên phong trong mọi việc, thích mở đường.",
        "Luôn tìm kiếm thử thách và những cuộc phiêu lưu mới mẻ.",
        "Có khả năng truyền động lực, khích lệ tinh thần người xung quanh.",
        "Không ngừng tìm kiếm sự mới mẻ, đột phá.",
        "Rất độc lập và tự chủ, thích tự mình làm mọi thứ."
      ]
    },

    love: {
      compatibility: ["Sư Tử", "Nhân Mã", "Song Tử", "Bảo Bình"],
      love_style: "Đam mê, mãnh liệt và chân thành. Bạch Dương yêu bằng cả trái tim và không ngần ngại thể hiện cảm xúc nồng nhiệt của mình.",
      ideal_partner: "Người có thể theo kịp nhịp sống năng động của Bạch Dương, đồng thời hiểu và ủng hộ những hoài bão, tham vọng của họ.",
      relationship_advice: "Hãy học cách kiềm chế những cơn nóng giận bất chợt và lắng nghe đối phương nhiều hơn. Đừng quá vội vàng trong các quyết định tình cảm quan trọng nhé!"
    },

    career: {
      suitable_jobs: [
        "Doanh nhân, CEO: Phù hợp với vai trò dẫn dắt, khởi xướng.",
        "Quân nhân, cảnh sát: Cần sự dũng cảm và quyết đoán.",
        "Vận động viên: Đòi hỏi năng lượng và tinh thần cạnh tranh cao.",
        "Bác sĩ phẫu thuật: Cần sự nhanh nhẹn và khả năng ra quyết định tức thời.",
        "Nhà thiết kế, kiến trúc sư: Yêu cầu sự sáng tạo và cái nhìn tiên phong.",
        "Nhà báo, phóng viên: Thích hợp với công việc năng động, luôn tìm kiếm cái mới."
      ],
      work_style: "Thích làm việc độc lập, đưa ra quyết định nhanh chóng và dẫn dắt nhóm. Họ đặc biệt không thích những công việc nhàm chán hay lặp đi lặp lại.",
      leadership: "Lãnh đạo bằng tấm gương và sự nhiệt huyết. Họ có khả năng truyền cảm hứng mạnh mẽ, thúc đẩy đồng nghiệp tiến về phía trước.",
      money_management: "Có xu hướng chi tiêu tự phát và đôi khi mạo hiểm trong đầu tư. Bạch Dương cần học cách tiết kiệm và lập kế hoạch tài chính rõ ràng hơn."
    },

    health: {
      body_parts: ["Đầu", "Mặt", "Não", "Mắt"],
      health_tips: [
        "Tránh căng thẳng và stress: Căng thẳng có thể ảnh hưởng đến đầu và hệ thần kinh.",
        "Tập thể dục đều đặn: Vận động giúp giải tỏa năng lượng dư thừa hiệu quả.",
        "Chú ý bảo vệ đầu: Đặc biệt khi tham gia các hoạt động thể thao mạo hiểm.",
        "Ăn uống điều độ: Hạn chế đồ cay nóng để tránh ảnh hưởng đến cơ thể.",
        "Ngủ đủ giấc: Giúp cơ thể và tâm trí phục hồi sau một ngày năng động."
      ],
      stress_management: "Các hoạt động thể chất mạnh mẽ như chạy bộ, boxing hoặc leo núi là cách tuyệt vời giúp Bạch Dương giải tỏa stress và tái tạo năng lượng."
    },

    lucky: {
      numbers: [1, 8, 17, 26],
      colors: ["Đỏ (biểu tượng của năng lượng)", "Cam", "Vàng"],
      days: ["Thứ Ba", "Chủ Nhật"],
      gemstones: ["Ruby", "Hồng ngọc", "Thạch anh đỏ"]
    },

    forecast_2024: {
      general: "Năm đột phá với vô vàn cơ hội mới mở ra. Bạch Dương sẽ gặp nhiều may mắn trong việc khởi nghiệp và phát triển bản thân.",
      love: "Tình yêu nở rộ rực rỡ vào mùa hè. Người độc thân có cơ hội lớn để gặp được \"nửa kia\" của đời mình, trong khi các cặp đôi có thể tiến tới hôn nhân hoặc có những bước tiến lớn trong mối quan hệ.",
      career: "Sự nghiệp thăng tiến mạnh mẽ. Bạn có thể được thăng chức lên vị trí cao hơn hoặc nhận được những đề nghị công việc vô cùng hấp dẫn từ bên ngoài.",
      health: "Sức khỏe tổng thể khá tốt nhưng cần chú ý nghỉ ngơi đầy đủ. Tránh làm việc quá sức, đặc biệt là vào những tháng cuối năm.",
      finance: "Tài chính ổn định và có xu hướng tăng lên. Đây là thời điểm vàng để bạn xem xét đầu tư vào bất động sản hoặc mạnh dạn khởi nghiệp."
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
        "Ổn định và Đáng tin cậy: Luôn là chỗ dựa vững chắc, giữ lời hứa.",
        "Kiên nhẫn và Bền bỉ: Không ngại khó khăn, có thể theo đuổi mục tiêu đến cùng.",
        "Thực tế và Có óc tính toán: Luôn suy nghĩ logic, đặt chân trên mặt đất.",
        "Trung thành và Tận tụy: Rất chân thành trong các mối quan hệ, gắn bó lâu dài.",
        "Có khiếu Thẩm mỹ tốt: Yêu thích cái đẹp, có gu ăn mặc và thưởng thức tinh tế."
      ],
      weaknesses: [
        "Cứng đầu và Khó thay đổi: Một khi đã quyết định thì rất khó lung lay.",
        "Vật chất và Tham lam: Đôi khi quá chú trọng đến tiền bạc và của cải vật chất.",
        "Lười biếng và An phận: Có xu hướng ngại thay đổi, thích sự thoải mái hiện tại.",
        "Ghen tuông và Chiếm hữu: Có thể thể hiện sự sở hữu mạnh mẽ trong tình yêu.",
        "Chậm chạp trong quyết định: Cần nhiều thời gian để cân nhắc, phân tích trước khi đưa ra lựa chọn."
      ],
      traits: [
        "Yêu thích sự thoải mái, tiện nghi và những điều xa xỉ.",
        "Có khả năng tích lũy tài sản tốt, biết cách làm giàu bền vững.",
        "Trân trọng truyền thống và rất coi trọng gia đình.",
        "Ưa thích môi trường sống và làm việc ổn định, an toàn.",
        "Có bản năng bảo vệ mạnh mẽ những người và vật thuộc về mình."
      ]
    },

    love: {
      compatibility: ["Xử Nữ", "Ma Kết", "Cự Giải", "Song Ngư"],
      love_style: "Yêu chậm rãi nhưng sâu sắc và bền chặt. Kim Ngưu cần thời gian để tin tưởng và mở lòng hoàn toàn với ai đó, nhưng khi đã yêu thì rất chung thủy.",
      ideal_partner: "Người ổn định, chung thủy và có khả năng tài chính vững vàng. Quan trọng là họ phải hiểu và chia sẻ những giá trị cuộc sống mà Kim Ngưu trân trọng.",
      relationship_advice: "Đừng quá cứng nhắc trong mối quan hệ. Hãy học cách thỏa hiệp và lắng nghe ý kiến của đối phương để tình yêu thêm hài hòa."
    },

    career: {
      suitable_jobs: [
        "Ngân hàng, tài chính: Phù hợp với sự ổn định và khả năng quản lý tiền bạc.",
        "Bất động sản: Tận dụng khả năng tích lũy tài sản và đánh giá giá trị.",
        "Nông nghiệp, làm vườn: Gần gũi với thiên nhiên, cần sự kiên nhẫn.",
        "Đầu bếp, ẩm thực: Có khiếu thẩm mỹ và yêu thích sự hưởng thụ.",
        "Thiết kế nội thất: Phát huy gu thẩm mỹ tinh tế.",
        "Nhạc sĩ, ca sĩ: Thể hiện tình yêu với nghệ thuật và cái đẹp."
      ],
      work_style: "Làm việc chăm chỉ và có phương pháp khoa học. Kim Ngưu thích môi trường ổn định, quen thuộc và không thích những thay đổi đột ngột.",
      leadership: "Lãnh đạo bằng sự ổn định và đáng tin cậy. Họ tạo ra một môi trường làm việc hài hòa, nơi mọi người cảm thấy an toàn và được tin tưởng.",
      money_management: "Xuất sắc trong quản lý tài chính. Kim Ngưu có khả năng tiết kiệm và đầu tư dài hạn rất hiệu quả, thường tích lũy được tài sản lớn."
    },

    health: {
      body_parts: ["Cổ", "Họng", "Tuyến giáp", "Tai"],
      health_tips: [
        "Chú ý chế độ ăn uống: Tránh ăn quá nhiều để kiểm soát cân nặng, tránh béo phì.",
        "Tập thể dục nhẹ nhàng đều đặn: Các hoạt động như đi bộ, yoga rất tốt cho họ.",
        "Bảo vệ cổ họng: Tránh cảm lạnh, viêm họng, đặc biệt khi thời tiết thay đổi.",
        "Massage cổ: Giúp giảm căng thẳng vùng vai gáy, cổ.",
        "Kiểm tra tuyến giáp định kỳ: Để sớm phát hiện và xử lý các vấn đề sức khỏe."
      ],
      stress_management: "Yoga, thiền định hoặc các hoạt động gần gũi với thiên nhiên như làm vườn, đi dạo công viên giúp Kim Ngưu thư giãn sâu sắc và tìm lại sự bình yên."
    },

    lucky: {
      numbers: [2, 6, 9, 12, 24],
      colors: ["Xanh lá cây (màu của sự phát triển)", "Hồng", "Xanh da trời nhạt"],
      days: ["Thứ Sáu", "Thứ Hai"],
      gemstones: ["Ngọc lục bảo", "Hồng thạch anh", "Cẩm thạch xanh"]
    },

    forecast_2024: {
      general: "Năm 2024 hứa hẹn sự ổn định với sự phát triển từ từ nhưng bền vững. Kim Ngưu sẽ gặt hái những thành quả ngọt ngào từ những nỗ lực đã bỏ ra trước đó.",
      love: "Tình yêu êm ấm và bền chặt. Các cặp đôi có thể cùng nhau lên những kế hoạch lâu dài như kết hôn, mua nhà chung hoặc ổn định cuộc sống gia đình.",
      career: "Công việc diễn ra ổn định với thu nhập đều đặn. Bạn có thể có cơ hội thăng tiến nhờ sự tin tưởng và đánh giá cao từ cấp trên.",
      health: "Sức khỏe nhìn chung tốt nhưng cần chú ý kiểm soát cân nặng. Hãy duy trì một chế độ ăn uống lành mạnh và tập thể dục đều đặn nhé.",
      finance: "Tài chính vững mạnh với khả năng tích lũy cao. Đây là thời điểm rất tốt để bạn đầu tư vào bất động sản hoặc vàng, hứa hẹn mang lại lợi nhuận đáng kể."
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
        "Thông minh và Nhanh nhẹn: Tiếp thu nhanh, suy nghĩ sắc bén.",
        "Giao tiếp xuất sắc: Khéo léo trong lời nói, dễ dàng kết nối mọi người.",
        "Linh hoạt và Thích ứng nhanh: Dễ dàng hòa nhập, thay đổi theo môi trường.",
        "Tò mò và Ham học hỏi: Luôn muốn khám phá điều mới, không ngừng học hỏi.",
        "Hài hước và Dí dỏm: Có khiếu kể chuyện, mang lại niềm vui cho người khác."
      ],
      weaknesses: [
        "Thiếu tập trung và Dễ phân tâm: Khó giữ sự chú ý lâu vào một việc.",
        "Không kiên trì và Hay thay đổi: Dễ chán nản, thích cái mới hơn cái cũ.",
        "Nói nhiều hơn làm: Có thể đưa ra nhiều ý tưởng nhưng khó thực hiện đến cùng.",
        "Thiếu sâu sắc trong cảm xúc: Đôi khi khó thể hiện cảm xúc thật lòng, dễ bị hiểu lầm.",
        "Hay lo lắng và Căng thẳng: Suy nghĩ quá nhiều, dễ bị stress bởi những điều nhỏ nhặt."
      ],
      traits: [
        "Có hai mặt tính cách khác nhau, đa diện.",
        "Rất thích giao lưu, kết bạn và mở rộng mối quan hệ.",
        "Luôn tìm kiếm và cập nhật thông tin mới nhất.",
        "Có khả năng đa nhiệm, làm nhiều việc cùng lúc.",
        "Yêu thích sự tự do, không muốn bị gò bó."
      ]
    },

    love: {
      compatibility: ["Thiên Bình", "Bảo Bình", "Bạch Dương", "Sư Tử"],
      love_style: "Yêu bằng trí tuệ và sự hài hước. Song Tử cần một người bạn đời có thể cùng trò chuyện, chia sẻ mọi điều và kích thích trí tò mò của họ.",
      ideal_partner: "Người thông minh, hài hước và không quá gò bó. Quan trọng là họ phải hiểu và tôn trọng nhu cầu tự do, không gian riêng của Song Tử.",
      relationship_advice: "Hãy học cách cam kết và tập trung vào một mối quan hệ. Đừng ngại thể hiện cảm xúc sâu sắc của mình để đối phương cảm thấy an toàn hơn."
    },

    career: {
      suitable_jobs: [
        "Nhà báo, biên tập viên: Thích hợp với khả năng viết lách và thu thập thông tin.",
        "Giáo viên, diễn giả: Phát huy khả năng truyền đạt và giao tiếp tốt.",
        "Marketing, quảng cáo: Cần sự sáng tạo và khả năng thuyết phục.",
        "Hướng dẫn viên du lịch: Yêu cầu sự năng động và kiến thức đa dạng.",
        "Dịch thuật viên: Tận dụng khả năng ngôn ngữ và sự linh hoạt.",
        "Nhà văn, blogger: Phù hợp với việc sáng tạo nội dung và chia sẻ thông tin."
      ],
      work_style: "Song Tử thích những công việc đa dạng, có tính chất giao tiếp và luôn thay đổi. Họ đặc biệt không thích làm việc đơn điệu, lặp đi lặp lại.",
      leadership: "Lãnh đạo bằng trí tuệ và khả năng giao tiếp khéo léo. Họ tạo ra một không khí làm việc vui vẻ, sáng tạo và khuyến khích trao đổi ý tưởng.",
      money_management: "Có xu hướng chi tiêu tự phát và đôi khi bốc đồng. Song Tử cần lập kế hoạch tài chính cụ thể và kiểm soát chi tiêu chặt chẽ hơn để tránh lãng phí."
    },

    health: {
      body_parts: ["Phổi", "Tay", "Vai", "Hệ thần kinh"],
      health_tips: [
        "Luyện tập hô hấp: Các bài tập thở sâu giúp tăng cường sức khỏe phổi.",
        "Giảm stress và lo âu: Tránh để căng thẳng ảnh hưởng đến hệ thần kinh.",
        "Bảo vệ tay và vai: Chú ý tư thế khi làm việc, tránh chấn thương.",
        "Ngủ đủ giấc: Giúp hệ thần kinh được nghỉ ngơi và phục hồi.",
        "Hạn chế caffeine và chất kích thích: Để tránh làm tăng sự lo lắng."
      ],
      stress_management: "Đọc sách, viết lách, trò chuyện cùng bạn bè hoặc tham gia các khóa học ngắn hạn là những cách hiệu quả giúp Song Tử giải tỏa căng thẳng tinh thần."
    },

    lucky: {
      numbers: [5, 7, 14, 23],
      colors: ["Vàng (màu của sự thông minh)", "Xanh lá nhạt", "Bạc"],
      days: ["Thứ Tư", "Chủ Nhật"],
      gemstones: ["Hoàng ngọc", "Thạch anh trong", "Xanh lam"]
    },

    forecast_2024: {
      general: "Năm 2024 là một năm đầy biến động nhưng cũng mang lại nhiều cơ hội học hỏi và giao lưu mới mẻ. Song Tử sẽ mở rộng mạng lưới quan hệ của mình một cách đáng kể.",
      love: "Tình yêu sẽ có nhiều sắc thái và trải nghiệm. Bạn có thể gặp gỡ nhiều người thú vị, nhưng hãy dành thời gian để tìm hiểu và lựa chọn người thực sự phù hợp với mình.",
      career: "Nhiều cơ hội nghề nghiệp mới sẽ đến. Bạn có thể đứng trước quyết định thay đổi công việc hoặc học thêm những kỹ năng mới để phát triển bản thân.",
      health: "Cần đặc biệt chú ý đến sức khỏe tinh thần. Thiền định và yoga sẽ là những phương pháp tuyệt vời giúp bạn cân bằng cảm xúc và giảm bớt lo âu.",
      finance: "Thu nhập có thể không ổn định nhưng sẽ có nhiều nguồn khác nhau. Song Tử nên đa dạng hóa các khoản đầu tư và bắt đầu tiết kiệm cho tương lai một cách có kế hoạch."
    }
  },

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
        "Nhạy cảm và Thấu hiểu: Dễ dàng cảm nhận và chia sẻ cảm xúc với người khác.",
        "Quan tâm gia đình và Bạn bè: Đặt những người thân yêu lên hàng đầu, rất chu đáo.",
        "Trực giác mạnh mẽ: Có khả năng cảm nhận và linh tính tốt về mọi việc.",
        "Bảo vệ và Che chở người khác: Luôn muốn bảo vệ những người mình yêu thương.",
        "Sáng tạo và Giàu trí tưởng tượng: Có một thế giới nội tâm phong phú, nhiều ý tưởng."
      ],
      weaknesses: [
        "Dễ tổn thương và Xúc động: Rất nhạy cảm với lời nói và hành động của người khác.",
        "Hay thay đổi tâm trạng: Cảm xúc có thể lên xuống thất thường như thủy triều.",
        "Quá bảo vệ và Kiểm soát: Đôi khi thể hiện sự bao bọc quá mức, gây ngột ngạt.",
        "Khó tha thứ khi bị tổn thương: Ghi nhớ rất lâu những chuyện không vui.",
        "Có xu hướng sống trong quá khứ: Khó buông bỏ những kỷ niệm, dù là đau buồn."
      ],
      traits: [
        "Luôn đặt gia đình lên hàng đầu, là người của gia đình.",
        "Có bản năng yêu thương và chăm sóc như một người mẹ.",
        "Thích môi trường quen thuộc, ấm cúng và an toàn.",
        "Cảm xúc sâu sắc và phong phú, dễ bị ảnh hưởng bởi môi trường.",
        "Có khả năng cảm nhận và đồng điệu với tâm trạng của người khác."
      ]
    },

    love: {
      compatibility: ["Bọ Cạp", "Song Ngư", "Kim Ngưu", "Xử Nữ"],
      love_style: "Yêu bằng cả trái tim và tâm hồn, chân thành và sâu sắc. Cự Giải cần sự an toàn, sự cam kết rõ ràng và một mái ấm trong tình yêu.",
      ideal_partner: "Người hiểu và bảo vệ cảm xúc nhạy cảm của Cự Giải, có trách nhiệm và thực sự muốn xây dựng một gia đình bền vững.",
      relationship_advice: "Đừng quá nhạy cảm với những lời nói vô tình. Hãy học cách thể hiện cảm xúc một cách tích cực và tin tưởng hơn vào đối phương."
    },

    career: {
      suitable_jobs: [
        "Y tá, bác sĩ: Thể hiện sự quan tâm và chăm sóc người khác.",
        "Giáo viên mầm non: Phù hợp với bản năng yêu trẻ và che chở.",
        "Nhà tâm lý học: Có khả năng thấu hiểu cảm xúc, lắng nghe.",
        "Đầu bếp, nhà hàng: Phát huy khả năng chăm sóc và tạo ra bữa ăn ngon.",
        "Thiết kế nội thất: Tạo không gian ấm cúng, thể hiện gu thẩm mỹ tinh tế.",
        "Nhà văn, nhà thơ: Phù hợp với trí tưởng tượng phong phú và cảm xúc sâu sắc."
      ],
      work_style: "Thích làm việc trong môi trường thân thiện, ấm cúng và có sự hỗ trợ lẫn nhau. Họ có khả năng chăm sóc và hỗ trợ đồng nghiệp rất tốt.",
      leadership: "Lãnh đạo bằng sự quan tâm và chăm sóc. Họ tạo ra một môi trường làm việc giống như gia đình, nơi mọi người cảm thấy được yêu thương và an toàn.",
      money_management: "Tiết kiệm để bảo đảm an ninh tài chính cho gia đình là ưu tiên hàng đầu. Họ thường ưu tiên đầu tư vào nhà cửa và giáo dục con cái."
    },

    health: {
      body_parts: ["Dạ dày", "Ngực", "Tử cung", "Hệ tiêu hóa"],
      health_tips: [
        "Chú ý chế độ ăn uống: Tránh căng thẳng có thể gây ảnh hưởng đến dạ dày.",
        "Bảo vệ dạ dày: Ăn đúng giờ, hạn chế đồ ăn gây kích ứng.",
        "Kiểm tra sức khỏe phụ khoa định kỳ: Đặc biệt quan trọng với nữ giới.",
        "Tập thể dục nhẹ nhàng: Các môn như bơi lội, yoga rất phù hợp.",
        "Duy trì tinh thần thoải mái: Giảm lo âu để tránh ảnh hưởng đến hệ tiêu hóa."
      ],
      stress_management: "Ở bên gia đình, nấu những bữa ăn ngon hoặc chăm sóc cây cảnh là những cách giúp Cự Giải thư giãn, tìm lại sự bình yên và hồi phục năng lượng."
    },

    lucky: {
      numbers: [2, 7, 11, 16, 20, 29],
      colors: ["Bạc (màu của Mặt Trăng)", "Trắng", "Xanh da trời nhạt"],
      days: ["Thứ Hai", "Thứ Năm"],
      gemstones: ["Ngọc trai", "Thạch anh trắng", "Đá mặt trăng"]
    },

    forecast_2024: {
      general: "Năm 2024 là thời điểm để Cự Giải tập trung sâu sắc vào gia đình và cảm xúc cá nhân. Bạn sẽ có những trải nghiệm phong phú và sâu sắc về mặt tinh thần.",
      love: "Tình yêu, đặc biệt là tình cảm gia đình và partner, sẽ được củng cố vững chắc. Có thể có tin vui về con cái hoặc những kế hoạch quan trọng như kết hôn sẽ được thực hiện.",
      career: "Công việc nhìn chung ổn định nhưng có thể có những thay đổi để phù hợp hơn với cuộc sống gia đình. Các ngành nghề liên quan đến chăm sóc sức khỏe sẽ đặc biệt thuận lợi.",
      health: "Cần chú ý đến sức khỏe tinh thần và đặc biệt là dạ dày. Hãy tránh căng thẳng và duy trì chế độ ăn uống đều đặn để giữ gìn sức khỏe.",
      finance: "Tài chính ổn định với mục tiêu chính là tiết kiệm và đảm bảo an ninh cho gia đình. Đầu tư vào bất động sản hứa hẹn sẽ mang lại lợi ích lâu dài."
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
        "Tự tin và Hào phóng: Luôn tỏa sáng, sẵn lòng chia sẻ và giúp đỡ.",
        "Khả năng Lãnh đạo tự nhiên: Sinh ra để làm người đứng đầu, truyền cảm hứng.",
        "Sáng tạo và Nghệ thuật: Có óc thẩm mỹ và khả năng thể hiện bản thân qua nghệ thuật.",
        "Trung thành và Tận tụy: Rất chân thành với những người họ yêu quý.",
        "Lạc quan và Nhiệt huyết: Luôn nhìn cuộc sống một cách tích cực, đầy năng lượng."
      ],
      weaknesses: [
        "Kiêu căng và Tự phụ: Đôi khi quá tự tin, dẫn đến xem thường người khác.",
        "Thích được chú ý: Luôn muốn là trung tâm, cần sự ngưỡng mộ từ mọi người.",
        "Cứng đầu và Độc đoán: Khó thay đổi ý kiến, thích mọi việc theo ý mình.",
        "Dễ tổn thương khi bị phê bình: Dù mạnh mẽ nhưng lại khá nhạy cảm với lời chỉ trích.",
        "Chi tiêu hoang phí: Thích sự xa hoa, có thể chi tiêu không kiểm soát."
      ],
      traits: [
        "Luôn muốn là trung tâm của mọi sự chú ý, tỏa sáng trong đám đông.",
        "Có khí chất hoàng gia, toát lên vẻ quyền lực và sang trọng.",
        "Rất bảo vệ và che chở những người mà họ yêu thương.",
        "Thích được tôn trọng, ngưỡng mộ và công nhận tài năng.",
        "Có tầm nhìn xa và khả năng truyền cảm hứng mạnh mẽ cho người khác."
      ]
    },

    love: {
      compatibility: ["Bạch Dương", "Nhân Mã", "Song Tử", "Thiên Bình"],
      love_style: "Yêu mãnh liệt, trọn vẹn và đầy lãng mạn. Sư Tử cần được ngưỡng mộ, tôn trọng và là trung tâm trong mối quan hệ tình cảm.",
      ideal_partner: "Người có thể đánh giá cao và ủng hộ mọi nỗ lực của Sư Tử. Một người thông minh, hài hước và không ganh đua sẽ rất phù hợp.",
      relationship_advice: "Đừng quá đòi hỏi sự chú ý tuyệt đối. Hãy học cách lắng nghe và chia sẻ ánh hào quang với đối phương để mối quan hệ thêm bền chặt."
    },

    career: {
      suitable_jobs: [
        "Diễn viên, ca sĩ: Phát huy khả năng biểu diễn và thu hút sự chú ý.",
        "Đạo diễn, nhà sản xuất: Thể hiện tầm nhìn và khả năng lãnh đạo sáng tạo.",
        "CEO, giám đốc: Phù hợp với tố chất lãnh đạo bẩm sinh và sự tự tin.",
        "Giáo viên, diễn giả: Truyền cảm hứng và kiến thức đến người khác.",
        "Nhà thiết kế thời trang: Thể hiện gu thẩm mỹ và sự độc đáo.",
        "Chính trị gia: Có khả năng thuyết phục, dẫn dắt quần chúng."
      ],
      work_style: "Sư Tử thích làm việc trong môi trường nơi họ có thể thể hiện tài năng và được công nhận. Họ có khả năng dẫn dắt và truyền cảm hứng rất tốt.",
      leadership: "Lãnh đạo bằng tầm nhìn và sự nhiệt huyết. Sư Tử tạo động lực mạnh mẽ cho đội nhóm bằng chính năng lượng và sự tự tin của mình.",
      money_management: "Có xu hướng chi tiêu hào phóng và cho những thứ sang trọng. Sư Tử cần học cách cân đối giữa việc hưởng thụ cuộc sống và tiết kiệm cho tương lai."
    },

    health: {
      body_parts: ["Tim", "Lưng", "Cột sống", "Hệ tuần hoàn"],
      health_tips: [
        "Tập thể dục đều đặn: Giúp tăng cường sức khỏe tim mạch.",
        "Chú ý tư thế ngồi và đứng: Để bảo vệ cột sống, tránh các vấn đề về lưng.",
        "Kiểm tra tim định kỳ: Đặc biệt quan trọng khi tuổi tác tăng lên.",
        "Tránh căng thẳng và áp lực: Hạn chế ảnh hưởng đến hệ tim mạch.",
        "Duy trì chế độ ăn tốt cho tim: Hạn chế chất béo bão hòa, tăng cường rau xanh."
      ],
      stress_management: "Các hoạt động sáng tạo như nhảy múa, hát, diễn xuất, hoặc tham gia các buổi biểu diễn giúp Sư Tử giải tỏa stress và thể hiện bản thân."
    },

    lucky: {
      numbers: [1, 3, 10, 19, 28],
      colors: ["Vàng (màu của Mặt Trời)", "Cam", "Đỏ"],
      days: ["Chủ Nhật", "Thứ Ba"],
      gemstones: ["Kim cương", "Hoàng ngọc", "Hồng ngọc"]
    },

    forecast_2024: {
      general: "Năm 2024 là thời điểm để Sư Tử tỏa sáng rực rỡ với vô vàn cơ hội thể hiện tài năng. Bạn sẽ được mọi người công nhận và đánh giá cao.",
      love: "Tình yêu lãng mạn và đầy màu sắc đang chờ đón bạn. Có cơ hội gặp gỡ những người thú vị, có tầm ảnh hưởng hoặc tiến tới một mối quan hệ sâu sắc hơn.",
      career: "Sự nghiệp thăng hoa với nhiều dự án quan trọng. Sư Tử có thể được đề bạt lên vị trí cao hơn hoặc nhận những trách nhiệm lớn, khẳng định năng lực của mình.",
      health: "Sức khỏe tốt nhưng cần đặc biệt chú ý đến tim mạch. Hãy duy trì việc tập thể dục đều đặn và kiểm tra sức khỏe định kỳ.",
      finance: "Thu nhập sẽ tăng đáng kể, tuy nhiên, bạn cũng có xu hướng chi tiêu nhiều cho những thứ sang trọng. Hãy cân đối giữa hưởng thụ và việc đầu tư thông minh nhé."
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
        "Tỉ mỉ và Cẩn thận: Chú ý đến từng chi tiết nhỏ, làm việc có hệ thống.",
        "Phân tích và Logic tốt: Có khả năng tư duy sắc bén, nhìn nhận vấn đề khách quan.",
        "Chăm chỉ và Có trách nhiệm: Luôn hoàn thành tốt nhiệm vụ được giao, rất đáng tin cậy.",
        "Khiêm tốn và Phục vụ: Sẵn lòng giúp đỡ người khác mà không đòi hỏi công lao.",
        "Thực tế và Tiết kiệm: Luôn có kế hoạch rõ ràng, biết cách quản lý tài chính hiệu quả."
      ],
      weaknesses: [
        "Hoàn hảo chủ nghĩa: Đôi khi quá khắt khe với bản thân và người khác, dễ cầu toàn.",
        "Lo lắng và Căng thẳng: Hay suy nghĩ quá nhiều, dễ bị stress.",
        "Phê bình và Khó tính: Có thể đưa ra những nhận xét thẳng thắn, đôi khi gây tổn thương.",
        "Thiếu tự tin: Dù giỏi nhưng đôi lúc lại không tin vào khả năng của mình.",
        "Quá chú ý chi tiết nhỏ: Có thể bị sa đà vào những tiểu tiết mà bỏ qua bức tranh lớn."
      ],
      traits: [
        "Luôn hướng đến sự hoàn hảo trong mọi việc làm.",
        "Có khả năng tổ chức và sắp xếp mọi thứ một cách xuất sắc.",
        "Rất chú ý đến sức khỏe, dinh dưỡng và lối sống lành mạnh.",
        "Thích giúp đỡ người khác một cách thiết thực và hiệu quả.",
        "Có óc phê bình và phân tích sắc sảo, luôn tìm ra lỗi sai để cải thiện."
      ]
    },

    love: {
      compatibility: ["Kim Ngưu", "Ma Kết", "Cự Giải", "Bọ Cạp"],
      love_style: "Yêu chậm rãi nhưng chân thành và sâu sắc. Xử Nữ cần thời gian để quan sát, đánh giá và tin tưởng đối phương trước khi mở lòng hoàn toàn.",
      ideal_partner: "Người đáng tin cậy, có trách nhiệm và hiểu tính cách cẩn thận, tỉ mỉ của Xử Nữ. Một người gọn gàng, ngăn nắp sẽ rất được lòng họ.",
      relationship_advice: "Đừng quá khắt khe với bản thân và đối phương. Hãy học cách thể hiện cảm xúc một cách tự nhiên và mềm mỏng hơn nhé!"
    },

    career: {
      suitable_jobs: [
        "Bác sĩ, y tá: Phù hợp với sự tỉ mỉ, quan tâm đến sức khỏe con người.",
        "Kế toán, kiểm toán: Yêu cầu sự chính xác, khả năng phân tích số liệu.",
        "Nhà nghiên cứu: Cần sự kiên nhẫn, khả năng phân tích chi tiết.",
        "Thư ký, trợ lý: Tổ chức tốt, xử lý công việc hiệu quả.",
        "Dinh dưỡng viên: Chú trọng sức khỏe và chế độ ăn uống khoa học.",
        "Biên tập viên: Yêu cầu sự tỉ mỉ, khả năng chỉnh sửa và hoàn thiện."
      ],
      work_style: "Xử Nữ làm việc có phương pháp, rất chi tiết và cẩn thận. Họ thích môi trường làm việc gọn gàng, ngăn nắp và có quy trình rõ ràng.",
      leadership: "Lãnh đạo bằng sự tỉ mỉ và tận tâm. Xử Nữ đảm bảo mọi công việc được hoàn thành một cách hoàn hảo và có tổ chức, thường là người đứng sau hậu trường.",
      money_management: "Quản lý tài chính cực kỳ tốt. Xử Nữ có khả năng tiết kiệm và đầu tư an toàn, ổn định, hiếm khi gặp rủi ro về tiền bạc."
    },

    health: {
      body_parts: ["Ruột", "Hệ tiêu hóa", "Da", "Hệ thần kinh"],
      health_tips: [
        "Chế độ ăn uống lành mạnh: Ăn uống khoa học, đều đặn để bảo vệ hệ tiêu hóa.",
        "Tránh căng thẳng và lo âu: Stress dễ ảnh hưởng đến ruột và dạ dày.",
        "Chăm sóc da và vệ sinh cá nhân: Giữ gìn sạch sẽ để tránh các vấn đề về da.",
        "Tập thể dục nhẹ nhàng: Các môn như yoga, đi bộ giúp giảm căng thẳng.",
        "Kiểm tra sức khỏe định kỳ: Đặc biệt chú ý đến hệ tiêu hóa."
      ],
      stress_management: "Làm vườn, dọn dẹp nhà cửa, hoặc các hoạt động thủ công đòi hỏi sự tỉ mỉ giúp Xử Nữ thư giãn, sắp xếp lại suy nghĩ và hồi phục năng lượng."
    },

    lucky: {
      numbers: [3, 6, 14, 23, 27],
      colors: ["Xanh navy (màu của trí tuệ)", "Xám", "Nâu"],
      days: ["Thứ Tư", "Thứ Sáu"],
      gemstones: ["Sapphire", "Jasper", "Moss Agate"]
    },

    forecast_2024: {
      general: "Năm 2024 là thời điểm để Xử Nữ làm việc chăm chỉ và gặt hái những thành quả xứng đáng. Bạn sẽ được mọi người ghi nhận vì sự tận tâm và chuyên nghiệp của mình.",
      love: "Tình yêu phát triển từ từ nhưng rất bền vững. Xử Nữ có thể tìm được người phù hợp thông qua công việc hoặc các hoạt động xã hội thường ngày.",
      career: "Công việc ổn định với nhiều cơ hội thăng tiến. Kỹ năng phân tích, tổ chức và sự tỉ mỉ của bạn sẽ được đánh giá cao, mở ra cánh cửa cho những vị trí tốt hơn.",
      health: "Sức khỏe cần được chú ý, đặc biệt là hệ tiêu hóa. Hãy duy trì chế độ ăn uống và tập luyện đều đặn để giữ cơ thể luôn khỏe mạnh.",
      finance: "Tài chính ổn định với khả năng tiết kiệm tốt. Các khoản đầu tư an toàn và có tính toán sẽ mang lại lợi nhuận bền vững cho Xử Nữ."
    }
  },

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
        "Hòa hợp và Cân bằng: Luôn tìm kiếm sự hài hòa, tránh xung đột.",
        "Thẩm mỹ và Nghệ thuật: Có gu thẩm mỹ tinh tế, yêu cái đẹp.",
        "Công bằng và Khách quan: Luôn nhìn nhận vấn đề từ nhiều phía, xử lý công tâm.",
        "Quyến rũ và Lịch lãm: Có sức hút tự nhiên, phong thái tao nhã.",
        "Ngoại giao và Hòa giải: Khéo léo trong giao tiếp, giỏi làm người trung gian."
      ],
      weaknesses: [
        "Do dự và Thiếu quyết đoán: Khó khăn khi phải đưa ra lựa chọn, dễ chần chừ.",
        "Tránh xung đột: Có xu hướng né tránh đối đầu, dễ thỏa hiệp quá mức.",
        "Phụ thuộc vào người khác: Thích có người đồng hành, khó làm mọi thứ một mình.",
        "Thiếu kiên định: Dễ thay đổi ý kiến, lung lay bởi tác động bên ngoài.",
        "Dễ bị ảnh hưởng: Dễ bị tác động bởi ý kiến của người khác."
      ],
      traits: [
        "Luôn tìm kiếm sự công bằng và bình đẳng trong mọi mối quan hệ.",
        "Yêu thích cái đẹp, sự hài hòa và sang trọng trong cuộc sống.",
        "Có khả năng làm hòa, xoa dịu các mâu thuẫn.",
        "Thích hợp tác, làm việc nhóm hơn là cạnh tranh cá nhân.",
        "Cần một đối tác để chia sẻ cuộc sống, không thích cô đơn."
      ]
    },

    love: {
      compatibility: ["Song Tử", "Bảo Bình", "Sư Tử", "Nhân Mã"],
      love_style: "Yêu lãng mạn và luôn hướng đến sự cân bằng. Thiên Bình coi trọng sự hài hòa, vẻ đẹp và sự công bằng trong tình yêu đôi lứa.",
      ideal_partner: "Người có gu thẩm mỹ tốt, thông minh, hiểu biết và có thể tạo nên sự cân bằng, hài hòa trong mối quan hệ. Một người có thể trò chuyện và chia sẻ mọi điều là lý tưởng.",
      relationship_advice: "Hãy học cách đưa ra quyết định một cách dứt khoát và đừng ngại thể hiện quan điểm riêng của mình, ngay cả khi nó khác biệt với đối phương."
    },

    career: {
      suitable_jobs: [
        "Luật sư, thẩm phán: Phù hợp với tính cách công bằng, khả năng phân tích.",
        "Nhà thiết kế (thời trang, nội thất): Phát huy gu thẩm mỹ tinh tế và sáng tạo.",
        "Nhà ngoại giao: Khéo léo trong giao tiếp, giỏi đàm phán.",
        "Tư vấn viên: Lắng nghe, thấu hiểu và đưa ra lời khuyên cân bằng.",
        "Nghệ sĩ, nhạc sĩ: Thể hiện tài năng nghệ thuật và sự nhạy cảm.",
        "Chuyên viên quan hệ công chúng: Giỏi giao tiếp, xây dựng hình ảnh."
      ],
      work_style: "Thiên Bình thích làm việc trong môi trường hài hòa, hợp tác và ít xung đột. Họ tránh những nơi có nhiều căng thẳng và cạnh tranh gay gắt.",
      leadership: "Lãnh đạo bằng sự hòa giải và cân bằng. Họ tạo ra một môi trường làm việc công bằng, nơi mọi người đều cảm thấy được đối xử bình đẳng và có tiếng nói.",
      money_management: "Thiên Bình có xu hướng chi tiêu cho vẻ đẹp, nghệ thuật và sự sang trọng. Họ cần học cách cân đối thu chi và đầu tư một cách thông minh, có kế hoạch."
    },

    health: {
      body_parts: ["Thận", "Lưng dưới", "Da", "Hệ nội tiết"],
      health_tips: [
        "Uống đủ nước: Rất quan trọng để bảo vệ chức năng thận.",
        "Tránh căng thẳng: Stress có thể ảnh hưởng đến làn da và sức khỏe tổng thể.",
        "Tập thể dục đều đặn: Các bài tập tăng cường cơ lưng dưới rất cần thiết.",
        "Cân bằng hormone tự nhiên: Chú ý chế độ ăn uống và lối sống lành mạnh.",
        "Chăm sóc sắc đẹp từ bên trong: Dinh dưỡng tốt và tinh thần thoải mái sẽ giúp làn da đẹp hơn."
      ],
      stress_management: "Nghe nhạc nhẹ nhàng, thưởng thức nghệ thuật, hoặc đi spa thư giãn là những cách tuyệt vời giúp Thiên Bình tìm lại sự cân bằng và giảm stress hiệu quả."
    },

    lucky: {
      numbers: [6, 15, 24, 33, 42],
      colors: ["Hồng (màu của tình yêu và sự hài hòa)", "Xanh pastel", "Kem"],
      days: ["Thứ Sáu", "Thứ Hai"],
      gemstones: ["Opal", "Thạch anh hồng", "Jade (Ngọc bích)"]
    },

    forecast_2024: {
      general: "Năm 2024 là một năm của sự cân bằng và phát triển các mối quan hệ mới. Thiên Bình sẽ tìm thấy sự hài hòa hơn trong mọi khía cạnh của cuộc sống.",
      love: "Tình yêu nở rộ với nhiều cơ hội hẹn hò và gặp gỡ những người thú vị. Các mối quan hệ hiện tại cũng sẽ trở nên sâu sắc và gắn bó hơn.",
      career: "Công việc thuận lợi nhờ khả năng hợp tác và ngoại giao khéo léo. Thiên Bình có thể tham gia vào các dự án liên quan đến nghệ thuật hoặc thiết kế, nơi tài năng của bạn được phát huy.",
      health: "Sức khỏe nhìn chung ổn định nhưng cần chú ý đến thận và làn da. Hãy duy trì một lối sống cân bằng và tránh để bản thân bị stress quá mức.",
      finance: "Tài chính được cải thiện nhờ các mối quan hệ hợp tác và những khoản đầu tư thông minh. Tuy nhiên, hãy cố gắng tránh chi tiêu quá mức cho những món đồ xa xỉ nhé."
    }
  },

  "ho-cap": {
    name: "Hổ Cáp",
    slug: "ho-cap",
    dates: "23/10 - 21/11",
    element: "Thủy",
    ruling_planet: "Sao Diêm Vương",
    symbol: "Bọ Cạp",
    icon: "♏",
    color: "from-red-800 to-red-600",

    personality: {
      strengths: [
        "Mạnh mẽ và Quyết đoán: Không ngại khó khăn, có khả năng vượt qua mọi thử thách.",
        "Bí ẩn và Sâu sắc: Có thế giới nội tâm phong phú, khó đoán, hấp dẫn.",
        "Kiên cường và Bền bỉ: Rất ít khi bỏ cuộc, có ý chí phi thường.",
        "Trực giác nhạy bén: Có khả năng nhìn thấu bản chất vấn đề, linh cảm tốt.",
        "Trung thành và Đam mê: Hết lòng với những gì mình tin tưởng và yêu thương."
      ],
      weaknesses: [
        "Ghen tuông và Chiếm hữu: Khó chấp nhận sự chia sẻ, rất dễ nghi ngờ.",
        "Thù dai và Hận thù: Khó tha thứ khi bị phản bội hay tổn thương sâu sắc.",
        "Bí mật và Khép kín: Không thích chia sẻ cảm xúc, giữ nhiều điều trong lòng.",
        "Thao túng và Kiểm soát: Có xu hướng muốn kiểm soát mọi thứ xung quanh.",
        "Nghi ngờ và Đa nghi: Khó tin tưởng người khác, dễ hoài nghi."
      ],
      traits: [
        "Có sức hút bí ẩn và quyến rũ đặc biệt.",
        "Sở hữu ý chí kiên định và khả năng phục hồi đáng kinh ngạc.",
        "Thích đi sâu vào bản chất vấn đề, khám phá những điều ẩn giấu.",
        "Rất trung thành và tận tâm với những người họ tin tưởng.",
        "Có khả năng chuyển hóa và tái sinh mạnh mẽ sau thất bại."
      ]
    },

    love: {
      compatibility: ["Cự Giải", "Song Ngư", "Ma Kết", "Xử Nữ"],
      love_style: "Đam mê, mãnh liệt và đầy sâu sắc. Hổ Cáp yêu bằng tất cả tâm hồn, họ cần sự tin tưởng tuyệt đối và một tình yêu chân thành, không vụ lợi.",
      ideal_partner: "Người có thể hiểu và chấp nhận chiều sâu cảm xúc của Hổ Cáp, trung thực, chung thủy và không sợ đối mặt với sự bí ẩn của họ.",
      relationship_advice: "Hãy học cách buông bỏ sự kiểm soát và giảm bớt ghen tuông. Chia sẻ cảm xúc thật lòng sẽ giúp mối quan hệ của bạn bền chặt hơn rất nhiều."
    },

    career: {
      suitable_jobs: [
        "Thám tử, điều tra viên: Phù hợp với khả năng phân tích, tìm kiếm sự thật.",
        "Nhà tâm lý học, bác sĩ tâm thần: Thấu hiểu sâu sắc tâm lý con người.",
        "Nhà khoa học, nghiên cứu: Khám phá những bí ẩn, đi sâu vào vấn đề.",
        "Bác sĩ phẫu thuật: Cần sự chính xác, khả năng chịu áp lực cao.",
        "Luật sư, công tố viên: Mạnh mẽ, quyết đoán trong tranh luận.",
        "Quản lý quỹ, đầu tư: Phù hợp với khả năng phân tích, mạo hiểm có tính toán."
      ],
      work_style: "Hổ Cáp thích làm việc trong môi trường có thể khám phá, điều tra và giải quyết vấn đề phức tạp. Họ làm việc rất tập trung và bí mật.",
      leadership: "Lãnh đạo bằng sức mạnh ý chí và tầm nhìn sâu sắc. Họ có khả năng thúc đẩy người khác đạt được mục tiêu, đôi khi bằng cách kiểm soát chặt chẽ.",
      money_management: "Có khả năng quản lý tài chính xuất sắc và rất biết cách đầu tư để sinh lời. Hổ Cáp thường thích các khoản đầu tư có tính mạo hiểm nhưng tiềm năng lợi nhuận cao."
    },

    health: {
      body_parts: ["Cơ quan sinh dục", "Bàng quang", "Mũi", "Ruột già"],
      health_tips: [
        "Duy trì vệ sinh cá nhân: Đặc biệt là vùng nhạy cảm.",
        "Tránh stress: Ảnh hưởng đến hệ tiêu hóa và miễn dịch.",
        "Uống đủ nước: Để hỗ trợ chức năng bàng quang.",
        "Kiểm tra sức khỏe định kỳ: Chú ý các vấn đề liên quan đến vùng xương chậu.",
        "Học cách giải tỏa cảm xúc tiêu cực: Tránh kìm nén."
      ],
      stress_management: "Thiền định, yoga, hoặc các hoạt động cần sự tập trung cao độ như đọc sách trinh thám, nghiên cứu bí ẩn giúp Hổ Cáp giải tỏa căng thẳng và tái tạo năng lượng."
    },

    lucky: {
      numbers: [8, 11, 18, 22, 27],
      colors: ["Đỏ đậm (màu của sự mạnh mẽ)", "Đen", "Nâu sẫm"],
      days: ["Thứ Ba", "Thứ Năm"],
      gemstones: ["Đá mắt hổ", "Topaz", "Garnet"]
    },

    forecast_2024: {
      general: "Năm 2024 mang đến sự biến đổi và tái sinh mạnh mẽ cho Hổ Cáp. Bạn sẽ có cơ hội loại bỏ những gì không còn phù hợp để phát triển bản thân.",
      love: "Tình yêu có thể trải qua những cung bậc cảm xúc sâu sắc. Các mối quan hệ hiện tại sẽ được thử thách, và người độc thân có thể tìm thấy một tình yêu định mệnh đầy mãnh liệt.",
      career: "Công việc có những thay đổi lớn, có thể là cơ hội hoặc thử thách. Khả năng thích nghi và ý chí kiên cường sẽ giúp bạn vượt qua và đạt được thành công.",
      health: "Sức khỏe nhìn chung tốt nhưng cần chú ý đến việc giải tỏa cảm xúc tiêu cực để tránh ảnh hưởng đến thể chất. Tập thể dục đều đặn là cần thiết.",
      finance: "Tài chính có nhiều biến động, đòi hỏi sự quản lý cẩn trọng. Đây là thời điểm tốt để xem xét lại các khoản đầu tư và có thể đầu tư vào những lĩnh vực mới."
    }
  },

  "nhan-ma": {
    name: "Nhân Mã",
    slug: "nhan-ma",
    dates: "22/11 - 21/12",
    element: "Hỏa",
    ruling_planet: "Sao Mộc",
    symbol: "Cung thủ",
    icon: "♐",
    color: "from-gray-700 to-gray-800",

    personality: {
      strengths: [
        "Phiêu lưu và Lạc quan: Luôn nhìn cuộc sống với thái độ tích cực, thích khám phá.",
        "Yêu tự do và Độc lập: Ghét bị ràng buộc, thích không gian riêng.",
        "Trung thực và Thẳng thắn: Luôn nói sự thật, đôi khi hơi quá.",
        "Thông thái và Ham học hỏi: Khao khát kiến thức, thích triết lý.",
        "Hài hước và Vui vẻ: Mang lại năng lượng tích cực, tiếng cười cho mọi người."
      ],
      weaknesses: [
        "Thiếu kiên nhẫn và Hấp tấp: Dễ bỏ cuộc khi không thấy kết quả nhanh.",
        "Vô tư đến mức thiếu tế nhị: Đôi khi nói thẳng làm người khác tổn thương.",
        "Không thích cam kết: Ngại gắn bó lâu dài, dễ thay đổi.",
        "Hay phóng đại: Có xu hướng làm quá mọi chuyện.",
        "Thích mạo hiểm và liều lĩnh: Dễ đưa ra quyết định thiếu suy nghĩ."
      ],
      traits: [
        "Luôn tìm kiếm những trải nghiệm mới mẻ và ý nghĩa cuộc sống.",
        "Có tinh thần phiêu lưu, thích du lịch và khám phá thế giới.",
        "Có tầm nhìn rộng lớn, thích các ý tưởng lớn, triết lý.",
        "Rất trung thực và thẳng thắn, không thích sự giả dối.",
        "Là người truyền cảm hứng, mang lại niềm tin và hy vọng."
      ]
    },

    love: {
      compatibility: ["Bạch Dương", "Sư Tử", "Thiên Bình", "Bảo Bình"],
      love_style: "Yêu tự do, lạc quan và đầy phóng khoáng. Nhân Mã cần một người bạn đời có thể cùng họ khám phá thế giới, tôn trọng không gian riêng và chia sẻ niềm vui sống.",
      ideal_partner: "Người có tinh thần phiêu lưu, lạc quan, thông minh và không quá gò bó. Họ phải hiểu được nhu cầu tự do và sự chân thật của Nhân Mã.",
      relationship_advice: "Hãy học cách kiên nhẫn và đừng quá sợ hãi sự cam kết. Đôi khi, sự chân thật quá mức có thể làm tổn thương người khác, hãy học cách nói năng tế nhị hơn."
    },

    career: {
      suitable_jobs: [
        "Hướng dẫn viên du lịch: Phù hợp với niềm đam mê khám phá và giao tiếp.",
        "Giáo viên, giáo sư: Thích hợp với việc truyền đạt kiến thức và triết lý.",
        "Nhà văn, nhà báo: Khả năng viết lách, kể chuyện, chia sẻ góc nhìn rộng.",
        "Chuyên viên marketing: Sáng tạo, khả năng thuyết phục, truyền cảm hứng.",
        "Huấn luyện viên, vận động viên: Năng động, thích thử thách.",
        "Nhà nghiên cứu, triết gia: Khám phá kiến thức, tìm kiếm chân lý."
      ],
      work_style: "Nhân Mã thích làm việc trong môi trường tự do, năng động và có nhiều cơ hội để học hỏi, khám phá. Họ không thích bị giới hạn bởi các quy tắc cứng nhắc.",
      leadership: "Lãnh đạo bằng tầm nhìn rộng và tinh thần lạc quan. Họ truyền cảm hứng cho đội nhóm thông qua sự tin tưởng vào tiềm năng và khả năng đạt được những mục tiêu lớn.",
      money_management: "Có xu hướng chi tiêu khá tự do và ít khi lo lắng về tiền bạc. Nhân Mã cần học cách lập kế hoạch tài chính và tiết kiệm để đảm bảo tương lai."
    },

    health: {
      body_parts: ["Đùi", "Hông", "Gan", "Thần kinh tọa"],
      health_tips: [
        "Tập thể dục đều đặn: Đặc biệt là các bài tập cho chân và hông.",
        "Hạn chế rượu bia: Bảo vệ gan khỏi các tổn thương.",
        "Chế độ ăn uống cân bằng: Tránh ăn quá nhiều, gây áp lực cho gan.",
        "Chú ý tư thế: Để tránh các vấn đề về thần kinh tọa.",
        "Duy trì tinh thần lạc quan: Giúp giảm stress và tăng cường sức khỏe tổng thể."
      ],
      stress_management: "Du lịch, khám phá những vùng đất mới, hoặc tham gia các hoạt động thể thao ngoài trời giúp Nhân Mã giải tỏa stress và tái nạp năng lượng tích cực."
    },

    lucky: {
      numbers: [3, 9, 12, 21, 30],
      colors: ["Tím (màu của sự thông thái)", "Xanh dương đậm", "Đỏ tía"],
      days: ["Thứ Năm", "Thứ Sáu"],
      gemstones: ["Topaz", "Lam ngọc", "Thạch anh tím"]
    },

    forecast_2024: {
      general: "Năm 2024 là một năm đầy phiêu lưu và mở rộng chân trời cho Nhân Mã. Bạn sẽ có nhiều cơ hội để đi lại, học hỏi và phát triển bản thân.",
      love: "Tình yêu đầy tự do và những trải nghiệm mới mẻ. Người độc thân có thể gặp gỡ những người từ các nền văn hóa khác, mang lại mối quan hệ thú vị. Các cặp đôi sẽ cùng nhau khám phá những điều mới mẻ.",
      career: "Công việc có nhiều cơ hội mở rộng sang các lĩnh vực mới hoặc thị trường quốc tế. Nhân Mã có thể được giao những dự án đòi hỏi sự sáng tạo và tầm nhìn xa.",
      health: "Sức khỏe nhìn chung tốt, nhưng cần chú ý đến gan và hông. Duy trì lối sống năng động và chế độ ăn uống lành mạnh.",
      finance: "Tài chính có thể tăng lên nhờ các cơ hội bất ngờ hoặc đầu tư mạo hiểm thành công. Tuy nhiên, hãy quản lý chi tiêu cẩn thận để tránh lãng phí."
    }
  },

  "ma-ket": {
    name: "Ma Kết",
    slug: "ma-ket",
    dates: "22/12 - 19/1",
    element: "Thổ",
    ruling_planet: "Sao Thổ",
    symbol: "Dê biển",
    icon: "♑",
    color: "from-gray-600 to-slate-600",

    personality: {
      strengths: [
        "Kiên trì và Quyết tâm: Không bao giờ bỏ cuộc, luôn theo đuổi mục tiêu đến cùng.",
        "Có trách nhiệm và Đáng tin cậy: Luôn hoàn thành lời hứa, có thể giao phó trọng trách.",
        "Tham vọng và Thực tế: Đặt ra mục tiêu cao và có kế hoạch cụ thể để đạt được.",
        "Kỷ luật và Tự chủ: Rất nghiêm khắc với bản thân, kiểm soát tốt cảm xúc.",
        "Thận trọng và Cẩn trọng: Luôn suy nghĩ kỹ lưỡng trước khi hành động."
      ],
      weaknesses: [
        "Nghiêm khắc và Khó tính: Đôi khi quá cứng nhắc với bản thân và người khác.",
        "Quá tham công tiếc việc: Có thể bỏ bê cuộc sống cá nhân vì công việc.",
        "Khó thể hiện cảm xúc: Che giấu cảm xúc thật, khó mở lòng.",
        "Tiêu cực và Bi quan: Dễ nhìn thấy mặt tiêu cực của vấn đề.",
        "Cứng nhắc và Bảo thủ: Khó chấp nhận những thay đổi hoặc ý tưởng mới."
      ],
      traits: [
        "Luôn nỗ lực để đạt được mục tiêu cao trong cuộc sống và sự nghiệp.",
        "Có khả năng xây dựng nền tảng vững chắc cho tương lai.",
        "Trân trọng sự nghiệp và địa vị xã hội.",
        "Có bản năng lãnh đạo và quản lý tốt.",
        "Rất nghiêm túc và có trách nhiệm với mọi việc được giao."
      ]
    },

    love: {
      compatibility: ["Kim Ngưu", "Xử Nữ", "Bọ Cạp", "Song Ngư"],
      love_style: "Yêu chân thành, nghiêm túc và cần sự cam kết lâu dài. Ma Kết cần thời gian để tin tưởng, nhưng khi đã yêu thì rất chung thủy và tận tâm.",
      ideal_partner: "Người có trách nhiệm, tham vọng, hiểu và tôn trọng sự nghiệp của Ma Kết. Quan trọng là họ phải là người đáng tin cậy và có thể cùng xây dựng tương lai vững chắc.",
      relationship_advice: "Hãy học cách thư giãn và thể hiện cảm xúc nhiều hơn. Đừng quá tập trung vào sự nghiệp mà quên đi việc vun đắp tình cảm nhé!"
    },

    career: {
      suitable_jobs: [
        "Quản lý, giám đốc điều hành: Phù hợp với khả năng lãnh đạo, kỷ luật.",
        "Kiến trúc sư, kỹ sư: Cần sự chính xác, khả năng xây dựng.",
        "Chính trị gia: Có tham vọng, khả năng tổ chức và tầm nhìn dài hạn.",
        "Ngân hàng, tài chính: Yêu cầu sự cẩn trọng, khả năng quản lý tài sản.",
        "Luật sư, thẩm phán: Phù hợp với tính cách nghiêm túc, công bằng.",
        "Nhà khoa học, nhà nghiên cứu: Cần sự kiên trì, khả năng phân tích."
      ],
      work_style: "Ma Kết làm việc chăm chỉ, có phương pháp và rất có trách nhiệm. Họ thích môi trường làm việc có cấu trúc rõ ràng và các mục tiêu cụ thể.",
      leadership: "Lãnh đạo bằng sự kỷ luật, trách nhiệm và tầm nhìn dài hạn. Họ là những người xây dựng nền tảng vững chắc cho tổ chức và thúc đẩy mọi người đạt được mục tiêu lớn.",
      money_management: "Xuất sắc trong quản lý tài chính và đầu tư dài hạn. Ma Kết là những người tiết kiệm rất tốt và luôn có kế hoạch rõ ràng cho tương lai tài chính của mình."
    },

    health: {
      body_parts: ["Xương", "Khớp", "Răng", "Da", "Đầu gối"],
      health_tips: [
        "Chăm sóc xương khớp: Tập thể dục nhẹ nhàng, bổ sung canxi.",
        "Vệ sinh răng miệng: Đánh răng đều đặn, kiểm tra nha sĩ định kỳ.",
        "Bảo vệ da: Tránh nắng, dưỡng ẩm đầy đủ.",
        "Hạn chế căng thẳng: Ảnh hưởng đến sức khỏe tổng thể.",
        "Tập trung vào dinh dưỡng: Ăn uống đủ chất để tăng cường sức khỏe xương."
      ],
      stress_management: "Leo núi, đi bộ đường dài, hoặc dành thời gian trong thiên nhiên giúp Ma Kết giải tỏa stress và kết nối lại với bản thân."
    },

    lucky: {
      numbers: [4, 8, 13, 22, 31],
      colors: ["Đen (màu của sự ổn định)", "Nâu", "Xám đậm"],
      days: ["Thứ Bảy", "Thứ Ba"],
      gemstones: ["Onyx", "Garnet", "Thạch anh khói"]
    },

    forecast_2024: {
      general: "Năm 2024 là thời điểm để Ma Kết tiếp tục kiên trì và gặt hái thành quả từ những nỗ lực bền bỉ. Bạn sẽ đạt được những mục tiêu lớn trong sự nghiệp và cuộc sống cá nhân.",
      love: "Tình yêu ổn định và sâu sắc. Ma Kết có thể tiến tới một cam kết lâu dài như hôn nhân hoặc cùng nhau xây dựng tổ ấm vững chắc.",
      career: "Sự nghiệp thăng tiến vượt bậc với những vị trí quan trọng. Bạn sẽ được tin tưởng và giao phó những trọng trách lớn, khẳng định năng lực lãnh đạo.",
      health: "Sức khỏe cần được chú ý, đặc biệt là xương khớp và răng. Duy trì chế độ ăn uống cân bằng và tập thể dục đều đặn để giữ cơ thể khỏe mạnh.",
      finance: "Tài chính vững mạnh và ổn định. Đây là thời điểm tốt để đầu tư vào các kênh an toàn, dài hạn như bất động sản hoặc tích lũy tài sản."
    }
  },

  "bao-binh": {
    name: "Bảo Bình",
    slug: "bao-binh",
    dates: "20/1 - 18/2",
    element: "Khí",
    ruling_planet: "Sao Thiên Vương",
    symbol: "Người mang nước",
    icon: "♒",
    color: "from-cyan-600 to-blue-600",

    personality: {
      strengths: [
        "Độc lập và Sáng tạo: Luôn có những ý tưởng độc đáo, không đi theo lối mòn.",
        "Có tầm nhìn xa: Nhìn thấy trước xu hướng, suy nghĩ vượt thời đại.",
        "Nhân đạo và Tinh thần cộng đồng: Quan tâm đến xã hội, muốn thay đổi thế giới tốt đẹp hơn.",
        "Thông minh và Lập dị: Tư duy sắc bén nhưng đôi khi khác biệt, khó hiểu.",
        "Thích nghi và Linh hoạt: Dễ dàng thích nghi với môi trường mới."
      ],
      weaknesses: [
        "Lạnh lùng và Vô cảm: Có thể khó thể hiện cảm xúc, xa cách.",
        "Khó đoán và Khác người: Hành động bất ngờ, đôi khi lập dị.",
        "Cứng đầu và Không chịu thay đổi: Một khi đã có quan điểm thì rất khó thay đổi.",
        "Thích tranh luận: Đôi khi quá lý trí, thích tranh cãi.",
        "Dễ nổi loạn: Không thích các quy tắc, dễ phản kháng."
      ],
      traits: [
        "Luôn đi trước thời đại, tiên phong trong tư duy.",
        "Yêu thích sự mới mẻ, công nghệ và những ý tưởng đột phá.",
        "Có mạng lưới quan hệ rộng lớn, nhiều bạn bè.",
        "Quan tâm đến các vấn đề xã hội, môi trường.",
        "Thích sự tự do, không bị ràng buộc bởi bất kỳ ai."
      ]
    },

    love: {
      compatibility: ["Song Tử", "Thiên Bình", "Nhân Mã", "Bạch Dương"],
      love_style: "Yêu bằng trí tuệ và sự đồng điệu trong tư tưởng. Bảo Bình cần một người bạn đời có thể chia sẻ những ý tưởng lớn, tôn trọng sự độc lập và không gian riêng của họ.",
      ideal_partner: "Người thông minh, cởi mở, có cùng tầm nhìn về tương lai và không quá kiểm soát. Họ phải chấp nhận được sự độc đáo và đôi khi lập dị của Bảo Bình.",
      relationship_advice: "Hãy học cách thể hiện cảm xúc nhiều hơn và đừng quá xa cách. Đôi khi, việc chia sẻ tâm tư sẽ giúp đối phương hiểu bạn hơn."
    },

    career: {
      suitable_jobs: [
        "Nhà khoa học, nhà nghiên cứu: Phù hợp với sự tò mò và khả năng tư duy đột phá.",
        "Kỹ sư công nghệ thông tin: Yêu thích sự đổi mới, công nghệ cao.",
        "Hoạt động xã hội, nhân đạo: Quan tâm đến cộng đồng, muốn tạo ra sự thay đổi.",
        "Phi công, phi hành gia: Yêu thích sự khám phá, vượt ra ngoài giới hạn.",
        "Nghệ sĩ, nhà văn độc lập: Sáng tạo, không theo khuôn mẫu.",
        "Chuyên viên phát triển sản phẩm: Đưa ra những ý tưởng mới mẻ."
      ],
      work_style: "Bảo Bình thích làm việc trong môi trường sáng tạo, tự do và có nhiều ý tưởng mới mẻ. Họ không thích bị gò bó bởi quy tắc hay những công việc lặp đi lặp lại.",
      leadership: "Lãnh đạo bằng tầm nhìn đột phá và sự khuyến khích đổi mới. Họ tạo ra một môi trường mở, nơi mọi người được tự do thể hiện ý tưởng và cùng nhau thay đổi thế giới.",
      money_management: "Có xu hướng chi tiêu cho những trải nghiệm mới mẻ hoặc các dự án cộng đồng. Bảo Bình cần học cách lập kế hoạch tài chính cụ thể và tránh những quyết định bốc đồng."
    },

    health: {
      body_parts: ["Mắt cá chân", "Hệ tuần hoàn", "Thần kinh", "Bắp chân"],
      health_tips: [
        "Tập thể dục đều đặn: Để tăng cường tuần hoàn máu.",
        "Tránh căng thẳng: Ảnh hưởng đến hệ thần kinh.",
        "Chăm sóc mắt cá chân: Tránh chấn thương khi vận động.",
        "Bổ sung vitamin nhóm B: Tốt cho hệ thần kinh.",
        "Ngủ đủ giấc: Phục hồi năng lượng cho não bộ và cơ thể."
      ],
      stress_management: "Tham gia các hoạt động xã hội, các nhóm cộng đồng, hoặc thực hiện những dự án sáng tạo giúp Bảo Bình giải tỏa stress và cảm thấy có ích."
    },

    lucky: {
      numbers: [4, 8, 13, 17, 22, 29],
      colors: ["Xanh dương (màu của bầu trời và sự tự do)", "Xanh ngọc", "Bạc"],
      days: ["Thứ Bảy", "Thứ Tư"],
      gemstones: ["Amethyst", "Garnet", "Thạch anh xanh"]
    },

    forecast_2024: {
      general: "Năm 2024 mang đến sự đột phá và những thay đổi bất ngờ cho Bảo Bình. Bạn sẽ có cơ hội thể hiện sự độc đáo và tầm nhìn xa của mình.",
      love: "Tình yêu có thể phát triển từ tình bạn hoặc những mối quan hệ độc đáo. Người độc thân có khả năng gặp gỡ những người đặc biệt, thú vị và có cùng chí hướng.",
      career: "Công việc có nhiều cơ hội để đổi mới và áp dụng công nghệ. Bảo Bình có thể tham gia vào các dự án mang tính đột phá hoặc liên quan đến cộng đồng.",
      health: "Sức khỏe nhìn chung tốt nhưng cần chú ý đến hệ thần kinh và mắt cá chân. Duy trì lối sống năng động nhưng cẩn thận trong các hoạt động.",
      finance: "Tài chính có thể có những biến động bất ngờ. Bảo Bình nên đa dạng hóa các khoản đầu tư và chuẩn bị cho những thay đổi không lường trước."
    }
  },

  "song-ngu": {
    name: "Song Ngư",
    slug: "song-ngu",
    dates: "19/2 - 20/3",
    element: "Thủy",
    ruling_planet: "Sao Hải Vương",
    symbol: "Cá",
    icon: "♓",
    color: "from-teal-600 to-green-600",

    personality: {
      strengths: [
        "Nhạy cảm và Trực giác mạnh: Dễ dàng cảm nhận được cảm xúc của người khác, linh cảm tốt.",
        "Đồng cảm và Từ bi: Rất thấu hiểu và sẵn lòng giúp đỡ người khó khăn.",
        "Sáng tạo và Giàu trí tưởng tượng: Có một thế giới nội tâm phong phú, nhiều ý tưởng nghệ thuật.",
        "Hy sinh và Vị tha: Sẵn lòng đặt lợi ích người khác lên trên mình.",
        "Trực giác tốt: Có khả năng nhìn nhận vấn đề từ nhiều góc độ."
      ],
      weaknesses: [
        "Dễ bị ảnh hưởng và Mơ mộng: Khó phân biệt thực tế và ảo ảnh, dễ bị lôi kéo.",
        "Hay trốn tránh thực tại: Có xu hướng tìm về thế giới riêng khi gặp khó khăn.",
        "Thiếu quyết đoán: Khó khăn khi phải đưa ra lựa chọn, dễ chần chừ.",
        "Quá nhạy cảm: Dễ bị tổn thương bởi lời nói và hành động của người khác.",
        "Khó khăn trong việc đặt giới hạn: Dễ bị lợi dụng vì quá tốt bụng."
      ],
      traits: [
        "Có khả năng thấu hiểu sâu sắc cảm xúc của người khác.",
        "Thích sự bình yên, tĩnh lặng và các hoạt động nghệ thuật.",
        "Có tinh thần hy sinh cao cả, sẵn lòng giúp đỡ.",
        "Thích nghi tốt với mọi hoàn cảnh, dễ dàng hòa nhập.",
        "Rất giàu lòng trắc ẩn và tình yêu thương."
      ]
    },

    love: {
      compatibility: ["Cự Giải", "Hổ Cáp", "Kim Ngưu", "Ma Kết"],
      love_style: "Yêu lãng mạn, vị tha và đầy sự hy sinh. Song Ngư yêu bằng cả trái tim và linh hồn, luôn muốn hòa mình vào tình yêu.",
      ideal_partner: "Người hiểu và chấp nhận chiều sâu cảm xúc của Song Ngư, có khả năng bảo vệ và mang lại sự ổn định. Một người đồng điệu về tâm hồn là lý tưởng.",
      relationship_advice: "Hãy học cách đặt ra giới hạn và bảo vệ bản thân khỏi những tổn thương. Đừng quá hy sinh mà quên đi giá trị của chính mình nhé!"
    },

    career: {
      suitable_jobs: [
        "Nghệ sĩ (họa sĩ, nhạc sĩ, diễn viên): Phát huy khả năng sáng tạo và nhạy cảm.",
        "Bác sĩ, y tá, nhà trị liệu: Phù hợp với lòng trắc ẩn và khả năng chữa lành.",
        "Nhà tâm linh, chiêm tinh gia: Có trực giác mạnh mẽ, khả năng kết nối tâm linh.",
        "Tư vấn viên, tình nguyện viên: Thích giúp đỡ người khác, có khả năng đồng cảm.",
        "Nhà văn, nhà thơ: Thể hiện thế giới nội tâm phong phú qua ngôn từ.",
        "Nhân viên phúc lợi xã hội: Quan tâm đến cộng đồng, muốn mang lại điều tốt đẹp."
      ],
      work_style: "Song Ngư thích làm việc trong môi trường hòa bình, sáng tạo và có ý nghĩa nhân văn. Họ không thích những nơi quá cạnh tranh hay khô khan về cảm xúc.",
      leadership: "Lãnh đạo bằng sự đồng cảm và tầm nhìn trực giác. Họ tạo ra một môi trường làm việc hỗ trợ, nơi mọi người cảm thấy được lắng nghe và thấu hiểu.",
      money_management: "Có xu hướng ít quan tâm đến tiền bạc và dễ chi tiêu theo cảm hứng. Song Ngư cần học cách lập kế hoạch tài chính cụ thể và nhờ người đáng tin cậy giúp quản lý tiền."
    },

    health: {
      body_parts: ["Chân", "Bàn chân", "Hệ bạch huyết", "Tuyến tùng"],
      health_tips: [
        "Chăm sóc bàn chân: Massage, ngâm chân để thư giãn.",
        "Tránh lạm dụng chất kích thích: Dễ ảnh hưởng đến gan và hệ thần kinh.",
        "Tăng cường hệ miễn dịch: Chế độ ăn uống và tập luyện khoa học.",
        "Giải tỏa cảm xúc tiêu cực: Tránh kìm nén, tìm cách thể hiện lành mạnh.",
        "Tập thể dục nhẹ nhàng: Bơi lội, yoga rất phù hợp."
      ],
      stress_management: "Nghe nhạc, thiền định, bơi lội, hoặc tham gia các hoạt động nghệ thuật giúp Song Ngư giải tỏa stress, kết nối với thế giới nội tâm và tìm lại sự bình yên."
    },

    lucky: {
      numbers: [3, 7, 12, 21, 30],
      colors: ["Xanh lục bảo (màu của biển sâu)", "Tím", "Xanh dương"],
      days: ["Thứ Năm", "Thứ Hai"],
      gemstones: ["Amethyst", "Aquamarine", "Ngọc trai"]
    },

    forecast_2024: {
      general: "Năm 2024 là một năm đầy sự phát triển về trực giác và tâm linh cho Song Ngư. Bạn sẽ có những trải nghiệm sâu sắc và khám phá bản thân nhiều hơn.",
      love: "Tình yêu lãng mạn và đầy những cung bậc cảm xúc. Người độc thân có thể gặp được mối quan hệ định mệnh, trong khi các cặp đôi sẽ có cơ hội thấu hiểu nhau sâu sắc hơn.",
      career: "Công việc có thể liên quan đến nghệ thuật, y tế hoặc các hoạt động nhân đạo. Song Ngư sẽ tìm thấy niềm vui trong việc giúp đỡ người khác và thể hiện tài năng sáng tạo.",
      health: "Sức khỏe cần được chú ý, đặc biệt là hệ miễn dịch và tinh thần. Hãy dành thời gian nghỉ ngơi, thiền định và tránh các yếu tố gây stress.",
      finance: "Tài chính có thể không ổn định, đòi hỏi sự quản lý cẩn trọng. Song Ngư nên tập trung tiết kiệm và tránh các khoản đầu tư rủi ro."
    }
  },

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
    },
    "song-tu": {
      "bach-duong": 90, "kim-nguu": 70, "song-tu": 80, "cu-giai": 60,
      "su-tu": 85, "xu-nu": 75, "thien-binh": 95, "ho-cap": 65,
      "nhan-ma": 80, "ma-ket": 70, "bao-binh": 95, "song-ngu": 75
    },
    "cu-giai": {
      "bach-duong": 70, "kim-nguu": 90, "song-tu": 60, "cu-giai": 80,
      "su-tu": 75, "xu-nu": 85, "thien-binh": 65, "ho-cap": 95,
      "nhan-ma": 60, "ma-ket": 80, "bao-binh": 70, "song-ngu": 90
    },
    "su-tu": {
      "bach-duong": 95, "kim-nguu": 65, "song-tu": 85, "cu-giai": 75,
      "su-tu": 85, "xu-nu": 60, "thien-binh": 90, "ho-cap": 70,
      "nhan-ma": 90, "ma-ket": 65, "bao-binh": 80, "song-ngu": 60
    },
    "xu-nu": {
      "bach-duong": 60, "kim-nguu": 95, "song-tu": 75, "cu-giai": 85,
      "su-tu": 60, "xu-nu": 80, "thien-binh": 70, "ho-cap": 90,
      "nhan-ma": 65, "ma-ket": 95, "bao-binh": 75, "song-ngu": 80
    },
    "thien-binh": {
      "bach-duong": 85, "kim-nguu": 85, "song-tu": 95, "cu-giai": 65,
      "su-tu": 90, "xu-nu": 70, "thien-binh": 80, "ho-cap": 70,
      "nhan-ma": 85, "ma-ket": 75, "bao-binh": 90, "song-ngu": 75
    },
    "ho-cap": {
      "bach-duong": 75, "kim-nguu": 80, "song-tu": 65, "cu-giai": 95,
      "su-tu": 70, "xu-nu": 90, "thien-binh": 70, "ho-cap": 85,
      "nhan-ma": 65, "ma-ket": 80, "bao-binh": 70, "song-ngu": 95
    },
    "nhan-ma": {
      "bach-duong": 95, "kim-nguu": 60, "song-tu": 80, "cu-giai": 60,
      "su-tu": 90, "xu-nu": 65, "thien-binh": 85, "ho-cap": 65,
      "nhan-ma": 85, "ma-ket": 70, "bao-binh": 90, "song-ngu": 70
    },
    "ma-ket": {
      "bach-duong": 70, "kim-nguu": 95, "song-tu": 70, "cu-giai": 80,
      "su-tu": 65, "xu-nu": 95, "thien-binh": 75, "ho-cap": 80,
      "nhan-ma": 70, "ma-ket": 85, "bao-binh": 65, "song-ngu": 85
    },
    "bao-binh": {
      "bach-duong": 90, "kim-nguu": 65, "song-tu": 95, "cu-giai": 70,
      "su-tu": 80, "xu-nu": 75, "thien-binh": 90, "ho-cap": 70,
      "nhan-ma": 90, "ma-ket": 65, "bao-binh": 85, "song-ngu": 75
    },
    "song-ngu": {
      "bach-duong": 65, "kim-nguu": 85, "song-tu": 75, "cu-giai": 90,
      "su-tu": 60, "xu-nu": 80, "thien-binh": 75, "ho-cap": 95,
      "nhan-ma": 70, "ma-ket": 85, "bao-binh": 75, "song-ngu": 85
    }
  };

  // Trả về mức độ tương thích hoặc 50 nếu không tìm thấy (giá trị mặc định)
  return compatibilityMatrix[sign1]?.[sign2] || 50;
}