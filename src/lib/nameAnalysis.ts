export interface NameAnalysis {
  name: string;
  expressionNumber: number;
  soulNumber: number;
  personalityNumber: number;
  luckyNumber: number;
  strengths: string[];
  challenges: string[];
  careerSuggestions: string[];
  talents: string[];
  personalAdvice: string[];
  relationshipAdvice: string[];
  luckyColors: string[];
  luckyDirections: string[];
  gemstones: string[];
}

// Bảng giá trị chữ cái theo thần số học
const LETTER_VALUES: { [key: string]: number } = {
  'a': 1, 'à': 1, 'á': 1, 'ả': 1, 'ã': 1, 'ạ': 1, 'â': 1, 'ầ': 1, 'ấ': 1, 'ẩ': 1, 'ẫ': 1, 'ậ': 1, 'ă': 1, 'ằ': 1, 'ắ': 1, 'ẳ': 1, 'ẵ': 1, 'ặ': 1,
  'b': 2,
  'c': 3,
  'd': 4, 'đ': 4,
  'e': 5, 'è': 5, 'é': 5, 'ẻ': 5, 'ẽ': 5, 'ẹ': 5, 'ê': 5, 'ề': 5, 'ế': 5, 'ể': 5, 'ễ': 5, 'ệ': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9, 'ì': 9, 'í': 9, 'ỉ': 9, 'ĩ': 9, 'ị': 9,
  'j': 1,
  'k': 2,
  'l': 3,
  'm': 4,
  'n': 5,
  'o': 6, 'ò': 6, 'ó': 6, 'ỏ': 6, 'õ': 6, 'ọ': 6, 'ô': 6, 'ồ': 6, 'ố': 6, 'ổ': 6, 'ỗ': 6, 'ộ': 6, 'ơ': 6, 'ờ': 6, 'ớ': 6, 'ở': 6, 'ỡ': 6, 'ợ': 6,
  'p': 7,
  'q': 8,
  'r': 9,
  's': 1,
  't': 2,
  'u': 3, 'ù': 3, 'ú': 3, 'ủ': 3, 'ũ': 3, 'ụ': 3, 'ư': 3, 'ừ': 3, 'ứ': 3, 'ử': 3, 'ữ': 3, 'ự': 3,
  'v': 4,
  'w': 5,
  'x': 6,
  'y': 7, 'ỳ': 7, 'ý': 7, 'ỷ': 7, 'ỹ': 7, 'ỵ': 7,
  'z': 8
};

const VOWELS = ['a', 'à', 'á', 'ả', 'ã', 'ạ', 'â', 'ầ', 'ấ', 'ẩ', 'ẫ', 'ậ', 'ă', 'ằ', 'ắ', 'ẳ', 'ẵ', 'ặ', 
               'e', 'è', 'é', 'ẻ', 'ẽ', 'ẹ', 'ê', 'ề', 'ế', 'ể', 'ễ', 'ệ', 
               'i', 'ì', 'í', 'ỉ', 'ĩ', 'ị', 
               'o', 'ò', 'ó', 'ỏ', 'õ', 'ọ', 'ô', 'ồ', 'ố', 'ổ', 'ỗ', 'ộ', 'ơ', 'ờ', 'ớ', 'ở', 'ỡ', 'ợ',
               'u', 'ù', 'ú', 'ủ', 'ũ', 'ụ', 'ư', 'ừ', 'ứ', 'ử', 'ữ', 'ự',
               'y', 'ỳ', 'ý', 'ỷ', 'ỹ', 'ỵ'];

// Rút gọn số về số đơn (trừ 11, 22, 33)
function reduceToSingleDigit(num: number): number {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    const digits = num.toString().split('').map(Number);
    num = digits.reduce((sum, digit) => sum + digit, 0);
  }
  return num;
}

// Tính giá trị số từ chuỗi
function calculateStringValue(str: string): number {
  const cleanStr = str.toLowerCase().replace(/[^a-záàảãạâấầẩẫậăắằẳẵặeéèẻẽẹêếềểễệiíìỉĩịoóòỏõọôốồổỗộơớờởỡợuúùủũụưứừửữựyýỳỷỹỵđ]/g, '');
  let sum = 0;
  
  for (const char of cleanStr) {
    sum += LETTER_VALUES[char] || 0;
  }
  
  return reduceToSingleDigit(sum);
}

// Tính số linh hồn (chỉ nguyên âm)
function calculateSoulNumber(name: string): number {
  const vowelsOnly = name.toLowerCase().split('').filter(char => VOWELS.includes(char)).join('');
  return calculateStringValue(vowelsOnly);
}

// Tính số nhân cách (chỉ phụ âm)
function calculatePersonalityNumber(name: string): number {
  const consonantsOnly = name.toLowerCase().split('').filter(char => 
    /[a-záàảãạâấầẩẫậăắằẳẵặeéèẻẽẹêếềểễệiíìỉĩịoóòỏõọôốồổỗộơớờởỡợuúùủũụưứừửữựyýỳỷỹỵđ]/.test(char) && 
    !VOWELS.includes(char)
  ).join('');
  return calculateStringValue(consonantsOnly);
}

// Lấy ý nghĩa theo số
function getNumberMeaning(num: number): {
  strengths: string[];
  challenges: string[];
  careers: string[];
  talents: string[];
  personalAdvice: string[];
  relationshipAdvice: string[];
} {
  const meanings: { [key: number]: any } = {
    1: {
      strengths: ['Lãnh đạo tự nhiên', 'Độc lập', 'Sáng tạo', 'Quyết đoán', 'Tiên phong'],
      challenges: ['Có thể quá cố chấp', 'Thiếu kiên nhẫn', 'Ích kỷ'],
      careers: ['CEO', 'Doanh nhân', 'Nhà lãnh đạo', 'Nhà phát minh'],
      talents: ['Khả năng lãnh đạo', 'Sáng tạo', 'Khởi nghiệp'],
      personalAdvice: ['Học cách lắng nghe người khác', 'Phát triển tính kiên nhẫn', 'Cân bằng công việc và cá nhân'],
      relationshipAdvice: ['Tìm đối tác hiểu và ủng hộ tham vọng', 'Học cách chia sẻ quyền lực', 'Tôn trọng ý kiến khác']
    },
    2: {
      strengths: ['Hợp tác tốt', 'Nhạy cảm', 'Hòa giải', 'Thấu hiểu', 'Kiên nhẫn'],
      challenges: ['Quá nhạy cảm', 'Thiếu quyết đoán', 'Dễ bị ảnh hưởng'],
      careers: ['Cố vấn', 'Giáo viên', 'Y tá', 'Nhà ngoại giao'],
      talents: ['Giao tiếp', 'Hòa giải xung đột', 'Hỗ trợ người khác'],
      personalAdvice: ['Tăng cường tự tin', 'Học cách nói không', 'Đặt ranh giới rõ ràng'],
      relationshipAdvice: ['Cần đối tác mạnh mẽ để cân bằng', 'Tránh những người quá áp đảo', 'Xây dựng lòng tin từ từ']
    },
    3: {
      strengths: ['Sáng tạo nghệ thuật', 'Giao tiếp xuất sắc', 'Lạc quan', 'Hài hước', 'Truyền cảm hứng'],
      challenges: ['Thiếu tập trung', 'Hay thay đổi', 'Không thực tế'],
      careers: ['Nghệ sĩ', 'Nhà văn', 'MC', 'Diễn viên'],
      talents: ['Nghệ thuật', 'Viết lách', 'Thuyết trình', 'Giải trí'],
      personalAdvice: ['Học cách tập trung', 'Hoàn thành những gì bắt đầu', 'Phát triển kỷ luật'],
      relationshipAdvice: ['Cần đối tác ủng hộ sự sáng tạo', 'Tìm người cân bằng và ổn định', 'Chia sẻ đam mê nghệ thuật']
    },
    4: {
      strengths: ['Thực tế', 'Đáng tin cậy', 'Tổ chức tốt', 'Chăm chỉ', 'Có kỷ luật'],
      challenges: ['Cứng nhắc', 'Chậm thích nghi', 'Thiếu linh hoạt'],
      careers: ['Kế toán', 'Kỹ sư', 'Quản lý', 'Nhà xây dựng'],
      talents: ['Tổ chức', 'Lập kế hoạch', 'Xây dựng hệ thống'],
      personalAdvice: ['Học cách linh hoạt hơn', 'Chấp nhận thay đổi', 'Cân bằng công việc và nghỉ ngơi'],
      relationshipAdvice: ['Cần đối tác hiểu và kiên nhẫn', 'Tìm người bổ sung sự sáng tạo', 'Học cách thể hiện cảm xúc']
    },
    5: {
      strengths: ['Tự do', 'Phiêu lưu', 'Thích nghi nhanh', 'Tò mò', 'Năng động'],
      challenges: ['Thiếu kiên nhẫn', 'Không cam kết', 'Hay thay đổi'],
      careers: ['Du lịch', 'Báo chí', 'Bán hàng', 'Nhà thám hiểm'],
      talents: ['Thích nghi', 'Giao tiếp', 'Khám phá'],
      personalAdvice: ['Học cách cam kết', 'Phát triển tính kiên nhẫn', 'Hoàn thành dự án'],
      relationshipAdvice: ['Cần đối tác tự do và độc lập', 'Tránh những người quá ràng buộc', 'Chia sẻ niềm đam mê khám phá']
    },
    6: {
      strengths: ['Yêu thương', 'Chăm sóc', 'Có trách nhiệm', 'Hòa hợp', 'Gia đình'],
      challenges: ['Quá bảo vệ', 'Hy sinh quá nhiều', 'Kiểm soát'],
      careers: ['Y tế', 'Giáo dục', 'Tư vấn', 'Dịch vụ xã hội'],
      talents: ['Chăm sóc người khác', 'Tạo hòa hợp', 'Hỗ trợ gia đình'],
      personalAdvice: ['Học cách chăm sóc bản thân', 'Đặt ranh giới', 'Tránh hy sinh quá nhiều'],
      relationshipAdvice: ['Tìm đối tác trân trọng sự chăm sóc', 'Cần người hiểu và chia sẻ', 'Xây dựng gia đình hạnh phúc']
    },
    7: {
      strengths: ['Tâm linh', 'Phân tích sâu', 'Trực giác', 'Hoàn hảo', 'Khôn ngoan'],
      challenges: ['Cô lập', 'Quá phê phán', 'Khó gần'],
      careers: ['Nghiên cứu', 'Tâm lý', 'Triết học', 'Tâm linh'],
      talents: ['Nghiên cứu', 'Phân tích', 'Trực giác', 'Tâm linh'],
      personalAdvice: ['Học cách kết nối với người khác', 'Chia sẻ kiến thức', 'Cân bằng tâm linh và vật chất'],
      relationshipAdvice: ['Cần đối tác hiểu tính cách hướng nội', 'Tìm người cùng tâm hồn', 'Chia sẻ quan điểm sâu sắc']
    },
    8: {
      strengths: ['Thành công vật chất', 'Quyền lực', 'Tham vọng', 'Tổ chức', 'Thực tế'],
      challenges: ['Quá tham vọng', 'Coi thường người khác', 'Căng thẳng'],
      careers: ['Kinh doanh', 'Ngân hàng', 'Bất động sản', 'Chính trị'],
      talents: ['Quản lý tài chính', 'Lãnh đạo kinh doanh', 'Tổ chức'],
      personalAdvice: ['Cân bằng tiền bạc và hạnh phúc', 'Học cách thư giãn', 'Quan tâm đến người khác'],
      relationshipAdvice: ['Cần đối tác hiểu tham vọng', 'Tìm người cân bằng cuộc sống', 'Chia sẻ thành công']
    },
    9: {
      strengths: ['Nhân đạo', 'Rộng lượng', 'Từ bi', 'Toàn cầu', 'Hoàn thiện'],
      challenges: ['Quá lý tưởng', 'Thiếu thực tế', 'Hy sinh quá nhiều'],
      careers: ['Từ thiện', 'Giáo dục', 'Y tế', 'Nghệ thuật'],
      talents: ['Phục vụ nhân loại', 'Nghệ thuật', 'Giảng dạy'],
      personalAdvice: ['Cân bằng lý tưởng và thực tế', 'Chăm sóc bản thân', 'Đặt ranh giới'],
      relationshipAdvice: ['Cần đối tác hiểu sứ mệnh', 'Tìm người cùng chí hướng', 'Chia sẻ mục tiêu nhân đạo']
    },
    11: {
      strengths: ['Trực giác mạnh', 'Tâm linh cao', 'Truyền cảm hứng', 'Sáng tạo', 'Lãnh đạo tâm linh'],
      challenges: ['Quá nhạy cảm', 'Căng thẳng', 'Khó thực hiện'],
      careers: ['Tâm linh', 'Nghệ thuật', 'Giảng dạy', 'Chữa lành'],
      talents: ['Trực giác', 'Tâm linh', 'Nghệ thuật', 'Truyền cảm hứng'],
      personalAdvice: ['Học cách bảo vệ năng lượng', 'Phát triển khả năng đặc biệt', 'Cân bằng tâm linh'],
      relationshipAdvice: ['Cần đối tác hiểu năng lực đặc biệt', 'Tìm người hỗ trợ tâm linh', 'Chia sẻ sứ mệnh cao cả']
    },
    22: {
      strengths: ['Kiến trúc sư ước mơ', 'Biến ước mơ thành hiện thực', 'Lãnh đạo vĩ đại', 'Tầm nhìn xa'],
      challenges: ['Áp lực lớn', 'Khó đạt được', 'Căng thẳng'],
      careers: ['Lãnh đạo quốc tế', 'Kiến trúc sư', 'Nhà phát minh', 'Chính trị gia'],
      talents: ['Lãnh đạo', 'Tổ chức lớn', 'Tầm nhìn', 'Thực hiện ước mơ'],
      personalAdvice: ['Học cách kiên nhẫn', 'Chia nhỏ mục tiêu lớn', 'Giữ cân bằng'],
      relationshipAdvice: ['Cần đối tác hiểu sứ mệnh lớn', 'Tìm người hỗ trợ và chia sẻ', 'Cân bằng mục tiêu và tình cảm']
    },
    33: {
      strengths: ['Thầy tâm linh', 'Chữa lành', 'Nâng cao ý thức', 'Hy sinh', 'Phục vụ'],
      challenges: ['Gánh nặng lớn', 'Hy sinh quá nhiều', 'Áp lực tâm linh'],
      careers: ['Chữa lành', 'Tâm linh', 'Giáo dục', 'Từ thiện'],
      talents: ['Chữa lành', 'Tâm linh', 'Giảng dạy', 'Phục vụ'],
      personalAdvice: ['Học cách bảo vệ bản thân', 'Cân bằng cho và nhận', 'Chăm sóc sức khỏe'],
      relationshipAdvice: ['Cần đối tác hiểu sứ mệnh', 'Tìm người hỗ trợ tâm linh', 'Chia sẻ gánh nặng']
    }
  };

  return meanings[num] || meanings[1];
}

// Tính màu may mắn theo số
function getLuckyColors(num: number): string[] {
  const colors: { [key: number]: string[] } = {
    1: ['Đỏ', 'Cam', 'Vàng'],
    2: ['Xanh dương', 'Bạc', 'Trắng'],
    3: ['Vàng', 'Cam', 'Hồng'],
    4: ['Xanh lá', 'Nâu', 'Xám'],
    5: ['Bạc', 'Xám', 'Xanh nhạt'],
    6: ['Hồng', 'Xanh lá', 'Tím'],
    7: ['Tím', 'Indigo', 'Bạc'],
    8: ['Đen', 'Nâu', 'Đỏ đậm'],
    9: ['Vàng kim', 'Đỏ', 'Cam'],
    11: ['Bạc', 'Trắng', 'Vàng nhạt'],
    22: ['Đỏ coral', 'Vàng kim', 'Nâu đậm'],
    33: ['Xanh biển', 'Tím', 'Vàng']
  };
  return colors[num] || colors[1];
}

// Tính hướng may mắn theo số
function getLuckyDirections(num: number): string[] {
  const directions: { [key: number]: string[] } = {
    1: ['Đông', 'Nam'],
    2: ['Tây', 'Tây Nam'],
    3: ['Đông', 'Đông Nam'],
    4: ['Bắc', 'Tây Bắc'],
    5: ['Bắc', 'Đông Bắc'],
    6: ['Tây Nam', 'Nam'],
    7: ['Tây', 'Tây Bắc'],
    8: ['Đông Bắc', 'Bắc'],
    9: ['Nam', 'Đông Nam'],
    11: ['Đông', 'Tây'],
    22: ['Tất cả hướng'],
    33: ['Tâm', 'Trung tâm']
  };
  return directions[num] || directions[1];
}

// Tính đá quý phù hợp theo số
function getGemstones(num: number): string[] {
  const stones: { [key: number]: string[] } = {
    1: ['Ruby', 'Garnet', 'Đá đỏ'],
    2: ['Ngọc trai', 'Thạch anh trắng', 'Moonstone'],
    3: ['Hoàng ngọc', 'Citrine', 'Amber'],
    4: ['Ngọc lục bảo', 'Jade', 'Malachite'],
    5: ['Thủy tinh', 'Aquamarine', 'Turquoise'],
    6: ['Thạch anh hồng', 'Emerald', 'Peridot'],
    7: ['Amethyst', 'Sapphire', 'Lapis Lazuli'],
    8: ['Onyx', 'Hematite', 'Garnet đen'],
    9: ['Opal', 'Đá mắt hổ', 'Carnelian'],
    11: ['Thạch anh trong', 'Selenite', 'Labradorite'],
    22: ['Diamond', 'Thạch anh khói', 'Tourmaline'],
    33: ['Sapphire xanh', 'Celestite', 'Aqua Aura']
  };
  return stones[num] || stones[1];
}

export function calculateNameNumerology(fullName: string): NameAnalysis {
  const expressionNumber = calculateStringValue(fullName);
  const soulNumber = calculateSoulNumber(fullName);
  const personalityNumber = calculatePersonalityNumber(fullName);
  const luckyNumber = reduceToSingleDigit(expressionNumber + soulNumber + personalityNumber);

  const meaning = getNumberMeaning(expressionNumber);

  return {
    name: fullName,
    expressionNumber,
    soulNumber,
    personalityNumber,
    luckyNumber,
    strengths: meaning.strengths,
    challenges: meaning.challenges,
    careerSuggestions: meaning.careers,
    talents: meaning.talents,
    personalAdvice: meaning.personalAdvice,
    relationshipAdvice: meaning.relationshipAdvice,
    luckyColors: getLuckyColors(expressionNumber),
    luckyDirections: getLuckyDirections(expressionNumber),
    gemstones: getGemstones(expressionNumber)
  };
}

export function getNameMeaning(num: number): string {
  const meanings: { [key: number]: string } = {
    1: "Người có tên mang số 1 thường là những nhà lãnh đạo tự nhiên, độc lập và sáng tạo.",
    2: "Người có tên mang số 2 là những người hòa thuận, hợp tác và có khả năng làm việc nhóm tốt.",
    3: "Người có tên mang số 3 sáng tạo, vui vẻ và có khả năng giao tiếp xuất sắc.",
    4: "Người có tên mang số 4 thực tế, đáng tin cậy và có khả năng tổ chức tốt.",
    5: "Người có tên mang số 5 tự do, phiêu lưu và thích khám phá những điều mới.",
    6: "Người có tên mang số 6 yêu thương, chăm sóc và có trách nhiệm với gia đình.",
    7: "Người có tên mang số 7 tâm linh, thích nghiên cứu và có trực giác mạnh.",
    8: "Người có tên mang số 8 có tham vọng, thực tế và khả năng thành công trong kinh doanh.",
    9: "Người có tên mang số 9 nhân đạo, rộng lượng và có tầm nhìn toàn cầu.",
    11: "Người có tên mang số 11 có trực giác mạnh và khả năng truyền cảm hứng đặc biệt.",
    22: "Người có tên mang số 22 có khả năng biến ước mơ lớn thành hiện thực.",
    33: "Người có tên mang số 33 là thầy tâm linh với khả năng chữa lành và nâng cao ý thức."
  };
  return meanings[num] || "Một con số đặc biệt với ý nghĩa sâu sắc.";
}

export function getNameAdvice(num: number): string[] {
  const advice: { [key: number]: string[] } = {
    1: [
      "Phát triển khả năng lãnh đạo một cách khôn ngoan",
      "Học cách lắng nghe và hợp tác với người khác", 
      "Kiểm soát xu hướng ích kỷ và cố chấp"
    ],
    2: [
      "Tăng cường lòng tự tin và khả năng quyết đoán",
      "Học cách đặt ranh giới trong các mối quan hệ",
      "Phát triển sự độc lập trong suy nghĩ"
    ],
    3: [
      "Tập trung hoàn thành những gì đã bắt đầu",
      "Phát triển tính kỷ luật và tổ chức",
      "Cân bằng giữa sáng tạo và thực tế"
    ],
    4: [
      "Học cách linh hoạt và thích nghi với thay đổi",
      "Phát triển khía cạnh sáng tạo trong công việc",
      "Cân bằng giữa công việc và cuộc sống cá nhân"
    ],
    5: [
      "Học cách cam kết và kiên trì với mục tiêu",
      "Phát triển tính ổn định trong các mối quan hệ",
      "Hoàn thành những dự án đã bắt đầu"
    ],
    6: [
      "Học cách chăm sóc bản thân không kém gì người khác",
      "Đặt ranh giới sức khỏe trong việc giúp đỡ",
      "Phát triển sự độc lập cá nhân"
    ],
    7: [
      "Chia sẻ kiến thức và trí tuệ với cộng đồng",
      "Cân bằng giữa tâm linh và cuộc sống thực tế",
      "Phát triển kỹ năng giao tiếp xã hội"
    ],
    8: [
      "Cân bằng giữa thành công vật chất và hạnh phúc",
      "Phát triển sự từ bi và quan tâm đến người khác",
      "Học cách thư giãn và giảm căng thẳng"
    ],
    9: [
      "Cân bằng giữa lý tưởng và tính thực tế",
      "Học cách nhận được sự giúp đỡ từ người khác",
      "Phát triển khía cạnh cá nhân bên cạnh sứ mệnh"
    ]
  };
  return advice[num] || advice[1];
}
