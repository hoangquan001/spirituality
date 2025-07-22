// Hàm tính toán độ tương thích dựa trên ngày sinh và thần số học

interface Person {
  name: string;
  birthDate: string;
  gender: string;
}

interface CompatibilityResult {
  score: number;
  compatibility: string;
  love: string;
  marriage: string;
  communication: string;
  challenges: string;
  advice: string;
}

// Tính số mệnh từ ngày sinh
function calculateLifePath(birthDate: string): number {
  const date = new Date(birthDate);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  
  let sum = day + month + year;
  
  // Rút gọn thành một chữ số
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = sum.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  
  return sum;
}

// Tính độ tương thích giữa 2 số mệnh
function getCompatibilityScore(lifePath1: number, lifePath2: number): number {
  const compatibilityMatrix: { [key: string]: number } = {
    '1-1': 85, '1-2': 70, '1-3': 80, '1-4': 60, '1-5': 90, '1-6': 75, '1-7': 65, '1-8': 85, '1-9': 80,
    '2-2': 80, '2-3': 85, '2-4': 90, '2-5': 65, '2-6': 95, '2-7': 70, '2-8': 75, '2-9': 80,
    '3-3': 85, '3-4': 70, '3-5': 95, '3-6': 80, '3-7': 75, '3-8': 70, '3-9': 90,
    '4-4': 80, '4-5': 60, '4-6': 85, '4-7': 75, '4-8': 90, '4-9': 70,
    '5-5': 80, '5-6': 70, '5-7': 85, '5-8': 75, '5-9': 90,
    '6-6': 90, '6-7': 80, '6-8': 85, '6-9': 75,
    '7-7': 75, '7-8': 70, '7-9': 80,
    '8-8': 85, '8-9': 75,
    '9-9': 85
  };

  const key1 = `${lifePath1}-${lifePath2}`;
  const key2 = `${lifePath2}-${lifePath1}`;
  
  return compatibilityMatrix[key1] || compatibilityMatrix[key2] || 70;
}

// Mô tả tính cách theo số mệnh
function getPersonalityTraits(lifePath: number): string {
  const traits: { [key: number]: string } = {
    1: 'Lãnh đạo, độc lập, sáng tạo',
    2: 'Hợp tác, nhạy cảm, hòa hợp',
    3: 'Giao tiếp, nghệ thuật, lạc quan',
    4: 'Thực tế, ổn định, kiên trì',
    5: 'Tự do, phiêu lưu, linh hoạt',
    6: 'Yêu thương, trách nhiệm, gia đình',
    7: 'Tâm linh, trí tuệ, suy ngẫm',
    8: 'Quyền lực, thành công, vật chất',
    9: 'Nhân đạo, lý tưởng, rộng lượng'
  };
  
  return traits[lifePath] || 'Đặc biệt, có năng lực phi thường';
}

// Tính tuổi từ ngày sinh
function calculateAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

// Phân tích chi tiết dựa trên độ tương thích
function getDetailedAnalysis(score: number, lifePath1: number, lifePath2: number): {
  compatibility: string;
  love: string;
  marriage: string;
  communication: string;
  challenges: string;
  advice: string;
} {
  if (score >= 90) {
    return {
      compatibility: 'Tuyệt vời! Hai bạn rất hợp nhau.',
      love: 'Tình cảm sâu sắc, hiểu nhau rất tốt. Có sự thu hút mạnh mẽ và lâu dài.',
      marriage: 'Cuộc hôn nhân có triển vọng rất tốt. Hai bạn sẽ hỗ trợ nhau trong mọi khía cạnh của cuộc sống.',
      communication: 'Giao tiếp rất tốt, hiểu được ý nghĩ và cảm xúc của nhau một cách tự nhiên.',
      challenges: 'Ít xung đột, chủ yếu là những khác biệt nhỏ có thể dễ dàng giải quyết.',
      advice: 'Hãy tiếp tục duy trì sự thấu hiểu và tôn trọng lẫn nhau. Đừng quên tạo những kỷ niệm đẹp cùng nhau.'
    };
  } else if (score >= 80) {
    return {
      compatibility: 'Rất tốt! Mối quan hệ có nhiều tiềm năng.',
      love: 'Tình cảm chân thành và ổn định. Có sự hấp dẫn lẫn nhau về cả tinh thần và cảm xúc.',
      marriage: 'Hôn nhân có thể thành công nếu cả hai cùng nỗ lực và thấu hiểu nhau.',
      communication: 'Giao tiếp tốt nhưng đôi khi cần thêm kiên nhẫn để hiểu quan điểm của nhau.',
      challenges: 'Có thể có một số khác biệt về tính cách nhưng không quá nghiêm trọng.',
      advice: 'Hãy dành thời gian tìm hiểu sâu hơn về nhau. Sự kiên nhẫn và cởi mở sẽ giúp mối quan hệ phát triển tốt.'
    };
  } else if (score >= 70) {
    return {
      compatibility: 'Khá tốt, cần thêm sự hiểu biết lẫn nhau.',
      love: 'Tình cảm có cơ sở nhưng cần thời gian để phát triển sâu hơn.',
      marriage: 'Cần có sự chuẩn bị kỹ lưỡng và hiểu biết rõ ràng về nhau trước khi quyết định.',
      communication: 'Cần nỗ lực hơn trong việc giao tiếp và chia sẻ cảm xúc.',
      challenges: 'Có một số khác biệt cơ bản về tính cách và cách nhìn nhận cuộc sống.',
      advice: 'Hãy dành thời gian tìm hiểu nhau kỹ hơn. Tôn trọng sự khác biệt và tìm điểm chung.'
    };
  } else {
    return {
      compatibility: 'Cần cân nhắc kỹ lưỡng, có nhiều thách thức.',
      love: 'Tình cảm có thể gặp nhiều thử thách do sự khác biệt lớn về tính cách.',
      marriage: 'Cần suy nghĩ thật kỹ và có sự chuẩn bị tốt nếu muốn tiến tới hôn nhân.',
      communication: 'Giao tiếp có thể gặp khó khăn, cần có sự kiên nhẫn và nỗ lực đặc biệt.',
      challenges: 'Nhiều khác biệt cơ bản về tính cách, sở thích và cách sống.',
      advice: 'Nếu quyết định tiếp tục, hãy học cách chấp nhận và thích ứng với sự khác biệt. Tham khảo ý kiến từ những người có kinh nghiệm.'
    };
  }
}

export function calculateCompatibility(person1: Person, person2: Person): CompatibilityResult {
  const lifePath1 = calculateLifePath(person1.birthDate);
  const lifePath2 = calculateLifePath(person2.birthDate);
  
  const age1 = calculateAge(person1.birthDate);
  const age2 = calculateAge(person2.birthDate);
  
  // Tính điểm cơ bản từ số mệnh
  let baseScore = getCompatibilityScore(lifePath1, lifePath2);
  
  // Điều chỉnh theo độ tuổi
  const ageDiff = Math.abs(age1 - age2);
  if (ageDiff <= 3) {
    baseScore += 5; // Cùng lứa tuổi
  } else if (ageDiff <= 7) {
    baseScore += 2; // Chênh lệch hợp lý
  } else if (ageDiff > 15) {
    baseScore -= 10; // Chênh lệch lớn
  }
  
  // Đảm bảo điểm số nằm trong khoảng 0-100
  const finalScore = Math.max(0, Math.min(100, baseScore));
  
  const analysis = getDetailedAnalysis(finalScore, lifePath1, lifePath2);
  
  return {
    score: finalScore,
    ...analysis
  };
}

// Export thêm các hàm hỗ trợ
export { calculateAge, calculateLifePath, getPersonalityTraits };

