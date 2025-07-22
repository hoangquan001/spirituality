// Hàm tính toán thần số học chi tiết

export interface PersonalInfo {
  fullName: string;
  birthDate: string;
  birthTime?: string;
  birthPlace?: string;
}

export interface NumerologyNumbers {
  lifePathNumber: number;
  destinyNumber: number;
  soulNumber: number;
  personalityNumber: number;
  birthDayNumber: number;
  maturityNumber: number;
  karmaNumbers: number[];
  challengeNumbers: number[];
}

export interface NumerologyMeaning {
  lifePath: string;
  destiny: string;
  soul: string;
  personality: string;
  birthDay: string;
  maturity: string;
  strengths: string[];
  challenges: string[];
  recommendations: string[];
}

// Bảng chuyển đổi chữ cái thành số
const LETTER_VALUES: { [key: string]: number } = {
  'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
  'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
  'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
};

// Bảng chuyển đổi cho tiếng Việt (không dấu)
const VIETNAMESE_LETTER_VALUES: { [key: string]: number } = {
  ...LETTER_VALUES,
  'Ă': 1, 'Â': 1, 'Á': 1, 'À': 1, 'Ả': 1, 'Ã': 1, 'Ạ': 1,
  'Ấ': 1, 'Ầ': 1, 'Ẩ': 1, 'Ẫ': 1, 'Ậ': 1, 'Ắ': 1, 'Ằ': 1, 'Ẳ': 1, 'Ẵ': 1, 'Ặ': 1,
  'É': 5, 'È': 5, 'Ẻ': 5, 'Ẽ': 5, 'Ẹ': 5, 'Ê': 5, 'Ế': 5, 'Ề': 5, 'Ể': 5, 'Ễ': 5, 'Ệ': 5,
  'Í': 9, 'Ì': 9, 'Ỉ': 9, 'Ĩ': 9, 'Ị': 9,
  'Ó': 6, 'Ò': 6, 'Ỏ': 6, 'Õ': 6, 'Ọ': 6, 'Ô': 6, 'Ố': 6, 'Ồ': 6, 'Ổ': 6, 'Ỗ': 6, 'Ộ': 6,
  'Ơ': 6, 'Ớ': 6, 'Ờ': 6, 'Ở': 6, 'Ỡ': 6, 'Ợ': 6,
  'Ú': 3, 'Ù': 3, 'Ủ': 3, 'Ũ': 3, 'Ụ': 3, 'Ư': 3, 'Ứ': 3, 'Ừ': 3, 'Ử': 3, 'Ữ': 3, 'Ự': 3,
  'Ý': 7, 'Ỳ': 7, 'Ỷ': 7, 'Ỹ': 7, 'Ỵ': 7,
  'Đ': 4
};

// Hàm rút gọn số về đơn vị (trừ số chủ đạo 11, 22, 33)
export function reduceToSingleDigit(num: number): number {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    const digits = num.toString().split('').map(Number);
    num = digits.reduce((sum, digit) => sum + digit, 0);
  }
  return num;
}

// Chuyển đổi tên thành số
export function nameToNumber(name: string, useVowelsOnly = false, useConsonantsOnly = false): number {
  const cleanName = name.toUpperCase().replace(/[^A-ZÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ]/g, '');
  
  let sum = 0;
  const vowels = 'AEIOUÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ';
  
  for (const char of cleanName) {
    const isVowel = vowels.includes(char);
    
    if (useVowelsOnly && !isVowel) continue;
    if (useConsonantsOnly && isVowel) continue;
    
    sum += VIETNAMESE_LETTER_VALUES[char] || LETTER_VALUES[char] || 0;
  }
  
  return reduceToSingleDigit(sum);
}

// Chuyển đổi ngày sinh thành số đường đời
export function birthDateToLifePath(birthDate: string): number {
  const date = new Date(birthDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  const sum = day + month + year;
  return reduceToSingleDigit(sum);
}

// Tính số sinh nhật
export function getBirthDayNumber(birthDate: string): number {
  const date = new Date(birthDate);
  return reduceToSingleDigit(date.getDate());
}

// Tính các số thách thức
export function getChallengeNumbers(birthDate: string): number[] {
  const date = new Date(birthDate);
  const day = reduceToSingleDigit(date.getDate());
  const month = reduceToSingleDigit(date.getMonth() + 1);
  const year = reduceToSingleDigit(date.getFullYear());
  
  const challenge1 = Math.abs(month - day);
  const challenge2 = Math.abs(day - year);
  const challenge3 = Math.abs(challenge1 - challenge2);
  const challenge4 = Math.abs(month - year);
  
  return [challenge1, challenge2, challenge3, challenge4];
}

// Tính toán số thần số học đầy đủ
export function calculateNumerology(info: PersonalInfo): NumerologyNumbers {
  const lifePathNumber = birthDateToLifePath(info.birthDate);
  const destinyNumber = nameToNumber(info.fullName);
  const soulNumber = nameToNumber(info.fullName, true); // chỉ nguyên âm
  const personalityNumber = nameToNumber(info.fullName, false, true); // chỉ phụ âm
  const birthDayNumber = getBirthDayNumber(info.birthDate);
  const maturityNumber = reduceToSingleDigit(lifePathNumber + destinyNumber);
  const challengeNumbers = getChallengeNumbers(info.birthDate);
  
  // Tìm số karma (số thiếu trong tên)
  const karmaNumbers: number[] = [];
  for (let i = 1; i <= 9; i++) {
    const nameNumbers = info.fullName.toUpperCase().split('').map(char => 
      VIETNAMESE_LETTER_VALUES[char] || LETTER_VALUES[char] || 0
    );
    if (!nameNumbers.includes(i)) {
      karmaNumbers.push(i);
    }
  }
  
  return {
    lifePathNumber,
    destinyNumber,
    soulNumber,
    personalityNumber,
    birthDayNumber,
    maturityNumber,
    karmaNumbers,
    challengeNumbers
  };
}

// Ý nghĩa các số
export function getNumberMeaning(number: number, type: 'lifePath' | 'destiny' | 'soul' | 'personality' | 'birthDay'): string {
  const meanings = {
    lifePath: {
      1: "Bạn là người lãnh đạo tự nhiên, độc lập và sáng tạo. Đường đời của bạn là khởi xướng, dẫn dắt và tạo ra những điều mới mẻ. Bạn có ý chí mạnh mẽ và không ngại đương đầu với thách thức.",
      2: "Bạn là người hòa thuận, nhạy cảm và có khả năng hợp tác xuất sắc. Đường đời của bạn là tạo sự cân bằng, hòa hợp và giúp đỡ người khác. Bạn thích làm việc nhóm hơn là đơn độc.",
      3: "Bạn là người sáng tạo, vui vẻ và có khả năng giao tiếp tuyệt vời. Đường đời của bạn liên quan đến nghệ thuật, giải trí và truyền cảm hứng cho người khác thông qua sự sáng tạo.",
      4: "Bạn là người thực tế, đáng tin cậy và có khả năng tổ chức tốt. Đường đời của bạn là xây dựng nền tảng vững chắc, làm việc chăm chỉ và tạo ra sự ổn định lâu dài.",
      5: "Bạn là người tự do, phiêu lưu và thích khám phá. Đường đời của bạn đầy biến động, du lịch và trải nghiệm đa dạng. Bạn cần không gian để thể hiện bản thân.",
      6: "Bạn là người quan tâm đến gia đình, có trách nhiệm và yêu thương. Đường đời của bạn xoay quanh việc chăm sóc, nuôi dưỡng và tạo sự hòa hợp trong cộng đồng.",
      7: "Bạn là người tâm linh, thích nghiên cứu và tìm hiểu sâu. Đường đời của bạn là khám phá những bí ẩn của cuộc sống, phát triển trí tuệ và khả năng phân tích.",
      8: "Bạn là người có tham vọng, thực tế và thành công trong kinh doanh. Đường đời của bạn liên quan đến quyền lực, thành công vật chất và khả năng quản lý xuất sắc.",
      9: "Bạn là người nhân đạo, rộng lượng và có tầm nhìn toàn cầu. Đường đời của bạn là phục vụ nhân loại, chia sẻ và giúp đỡ những người khó khăn.",
      11: "Bạn có trực giác mạnh, tâm linh cao và khả năng truyền cảm hứng. Đây là số chủ đạo đại diện cho sự giác ngộ và khả năng dẫn dắt người khác đến với ánh sáng.",
      22: "Bạn có khả năng biến ước mơ thành hiện thực một cách vĩ đại. Đây là số chủ đạo của những kiến trúc sư ước mơ, có thể tạo ra những công trình vĩ đại.",
      33: "Bạn là thầy tâm linh, có khả năng chữa lành và nâng cao ý thức con người. Đây là số chủ đạo cao nhất, đại diện cho sự hy sinh và phục vụ vô điều kiện."
    }
  };

  const meaningMap = meanings.lifePath as Record<number, string>;
  return meaningMap[number] || `Số ${number} mang ý nghĩa đặc biệt trong ${type}.`;
}
