// Lunar Calendar Conversion Library
// Based on Chinese Lunar Calendar calculations

interface LunarDate {
  year: number;
  month: number;
  day: number;
  isLeapMonth: boolean;
  canChi?: string;
  dayOfWeek?: string;
  season?: string;
}

interface SolarDate {
  year: number;
  month: number;
  day: number;
}

// Lunar calendar data for common years (simplified for demo)
const LUNAR_MONTHS_DAYS = [29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30];
const LEAP_MONTHS = [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0]; // Simplified leap month pattern

// Can (Thiên can) and Chi (Địa chi) arrays
const CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

const ZODIAC_ANIMALS = {
  'Tý': '🐭 Chuột',
  'Sửu': '🐮 Trâu',
  'Dần': '🐅 Dần',
  'Mão': '🐰 Mão',
  'Thìn': '🐲 Rồng',
  'Tỵ': '🐍 Rắn',
  'Ngọ': '🐴 Ngựa',
  'Mùi': '🐐 Dê',
  'Thân': '🐵 Khỉ',
  'Dậu': '🐓 Gà',
  'Tuất': '🐶 Chó',
  'Hợi': '🐷 Heo'
};

const DAY_NAMES = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

// Calculate Can Chi for a given year
function getCanChi(year: number): string {
  const canIndex = (year - 4) % 10;
  const chiIndex = (year - 4) % 12;
  return `${CAN[canIndex]} ${CHI[chiIndex]}`;
}

// Get zodiac animal for a year
function getZodiacAnimal(year: number): string {
  const chiIndex = (year - 4) % 12;
  const chi = CHI[chiIndex];
  return ZODIAC_ANIMALS[chi as keyof typeof ZODIAC_ANIMALS];
}

// Get day of week in Vietnamese
function getDayOfWeek(date: Date): string {
  return DAY_NAMES[date.getDay()];
}

// Get season based on month
function getSeason(month: number): string {
  if (month >= 3 && month <= 5) return '🌸 Xuân';
  if (month >= 6 && month <= 8) return '☀️ Hạ';
  if (month >= 9 && month <= 11) return '🍂 Thu';
  return '❄️ Đông';
}

// Solar to Lunar conversion (simplified algorithm)
export function solarToLunar(dateString: string): LunarDate {
  const solarDate = new Date(dateString);
  const solarYear = solarDate.getFullYear();
  const solarMonth = solarDate.getMonth() + 1;
  const solarDay = solarDate.getDate();

  // This is a simplified conversion for demonstration
  // In real applications, you would use precise astronomical calculations
  
  // Approximate lunar year (usually 1 year behind, but can be same year)
  let lunarYear = solarYear;
  
  // Approximate lunar month (shifted by ~1-2 months)
  let lunarMonth = solarMonth - 1;
  if (lunarMonth <= 0) {
    lunarMonth += 12;
    lunarYear -= 1;
  }
  
  // Approximate lunar day (similar but may vary)
  let lunarDay = solarDay;
  
  // Check for leap month (simplified)
  const isLeapMonth = false; // In real calculation, this would be more complex
  
  // Adjust day if it exceeds lunar month days
  const maxDaysInMonth = LUNAR_MONTHS_DAYS[lunarMonth - 1];
  if (lunarDay > maxDaysInMonth) {
    lunarDay = maxDaysInMonth;
  }

  return {
    year: lunarYear,
    month: lunarMonth,
    day: lunarDay,
    isLeapMonth,
    canChi: getCanChi(lunarYear),
    dayOfWeek: getDayOfWeek(solarDate),
    season: getSeason(lunarMonth)
  };
}

// Lunar to Solar conversion (simplified algorithm)
export function lunarToSolar(lunarDate: LunarDate): Date {
  // This is a simplified conversion for demonstration
  // In real applications, you would use precise astronomical calculations
  
  let solarYear = lunarDate.year;
  let solarMonth = lunarDate.month + 1;
  let solarDay = lunarDate.day;
  
  // Adjust for year boundary
  if (solarMonth > 12) {
    solarMonth -= 12;
    solarYear += 1;
  }
  
  // Ensure day is valid for the solar month
  const daysInSolarMonth = new Date(solarYear, solarMonth, 0).getDate();
  if (solarDay > daysInSolarMonth) {
    solarDay = daysInSolarMonth;
  }
  
  const result = new Date(solarYear, solarMonth - 1, solarDay);
  
  // Add properties for display
  (result as any).dayOfWeek = getDayOfWeek(result);
  (result as any).canChi = getCanChi(solarYear);
  (result as any).season = getSeason(solarMonth);
  
  return result;
}

// Format lunar date for display
export function formatLunarDate(lunarDate: LunarDate): string {
  const leapText = lunarDate.isLeapMonth ? ' (Nhuận)' : '';
  return `Ngày ${lunarDate.day} tháng ${lunarDate.month}${leapText} năm ${lunarDate.year} (${lunarDate.canChi})`;
}

// Format solar date for display
export function formatSolarDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `Ngày ${day} tháng ${month} năm ${year}`;
}

// Get detailed lunar information
export function getLunarInfo(lunarDate: LunarDate) {
  return {
    canChi: lunarDate.canChi,
    zodiacAnimal: getZodiacAnimal(lunarDate.year),
    season: lunarDate.season,
    isLeapMonth: lunarDate.isLeapMonth,
    monthDays: LUNAR_MONTHS_DAYS[lunarDate.month - 1],
    yearType: (lunarDate.year % 2 === 0) ? 'Năm Chẵn' : 'Năm Lẻ'
  };
}

// Get important lunar calendar notes
export function getLunarNotes(lunarDate: LunarDate): string[] {
  const notes: string[] = [];
  
  // Special days
  if (lunarDate.day === 1) {
    notes.push('🌑 Ngày mồng 1 - Ngày đầu tháng âm lịch');
  }
  
  if (lunarDate.day === 15) {
    notes.push('🌕 Ngày rằm - Trăng tròn');
  }
  
  if (lunarDate.month === 1 && lunarDate.day === 1) {
    notes.push('🎊 Tết Nguyên Đán - Năm mới âm lịch');
  }
  
  if (lunarDate.month === 8 && lunarDate.day === 15) {
    notes.push('🌕 Tết Trung Thu - Ngày trăng tròn tháng 8');
  }
  
  if (lunarDate.month === 4 && lunarDate.day === 8) {
    notes.push('🙏 Phật Đản - Ngày sinh Phật Thích Ca');
  }
  
  if (lunarDate.month === 7 && lunarDate.day === 15) {
    notes.push('👻 Vu Lan - Ngày cúng dường báo hiếu');
  }
  
  return notes;
}

// Conversion accuracy note
export function getConversionNote(): string {
  return "Lưu ý: Đây là phép chuyển đổi gần đúng dành cho mục đích tham khảo. Để có kết quả chính xác tuyệt đối, vui lòng sử dụng các công cụ chuyên dụng hoặc tham khảo lịch âm chính thức.";
}
