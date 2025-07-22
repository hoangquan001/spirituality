import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility functions for spiritual calculations
export function formatDate(date: Date): string {
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function calculateLuckyColor(number: number): string {
  const colors = [
    "Đỏ", "Cam", "Vàng", "Xanh lá", "Xanh dương", 
    "Chàm", "Tím", "Hồng", "Trắng", "Đen"
  ];
  return colors[number % colors.length];
}

export function calculateLuckyDirection(number: number): string {
  const directions = [
    "Đông", "Tây", "Nam", "Bắc", 
    "Đông Nam", "Tây Nam", "Đông Bắc", "Tây Bắc"
  ];
  return directions[number % directions.length];
}

export function generateLuckyTime(number: number): string {
  const hours = [
    "5-7h", "7-9h", "9-11h", "11-13h", 
    "13-15h", "15-17h", "17-19h", "19-21h", "21-23h"
  ];
  return hours[number % hours.length];
}

export function getZodiacElement(sign: string): string {
  const elements: { [key: string]: string } = {
    'bach-duong': 'Hỏa',
    'kim-nguu': 'Thổ',
    'song-tu': 'Khí',
    'cu-giai': 'Thủy',
    'su-tu': 'Hỏa',
    'xu-nu': 'Thổ',
    'thien-binh': 'Khí',
    'bo-cap': 'Thủy',
    'nhan-ma': 'Hỏa',
    'ma-ket': 'Thổ',
    'bao-binh': 'Khí',
    'song-ngu': 'Thủy'
  };
  return elements[sign] || 'Không xác định';
}

export function calculateCompatibility(sign1: string, sign2: string): number {
  // Simplified compatibility calculation based on elements
  const getElement = (sign: string) => getZodiacElement(sign);
  
  const element1 = getElement(sign1);
  const element2 = getElement(sign2);
  
  const compatibility: { [key: string]: { [key: string]: number } } = {
    'Hỏa': { 'Hỏa': 85, 'Thổ': 75, 'Khí': 60, 'Thủy': 40 },
    'Thổ': { 'Thổ': 85, 'Khí': 75, 'Thủy': 60, 'Hỏa': 75 },
    'Khí': { 'Khí': 85, 'Thủy': 75, 'Hỏa': 60, 'Thổ': 75 },
    'Thủy': { 'Thủy': 85, 'Hỏa': 40, 'Thổ': 60, 'Khí': 75 }
  };
  
  return compatibility[element1]?.[element2] || 50;
}

export function getDailyFortune(): {
  overall: number;
  love: number;
  career: number;
  health: number;
  finance: number;
} {
  const today = new Date();
  const seed = today.getDate() + today.getMonth() + today.getFullYear();
  
  return {
    overall: (seed * 17) % 100,
    love: (seed * 23) % 100,
    career: (seed * 31) % 100,
    health: (seed * 37) % 100,
    finance: (seed * 41) % 100
  };
}

export function getFortuneLevel(score: number): {
  level: string;
  color: string;
  description: string;
} {
  if (score >= 80) {
    return {
      level: "Xuất sắc",
      color: "text-green-500",
      description: "Ngày tuyệt vời cho mọi hoạt động"
    };
  } else if (score >= 60) {
    return {
      level: "Tốt",
      color: "text-blue-500",
      description: "Ngày thuận lợi, hãy tận dụng cơ hội"
    };
  } else if (score >= 40) {
    return {
      level: "Trung bình",
      color: "text-yellow-500",
      description: "Ngày bình thường, cần thận trọng"
    };
  } else {
    return {
      level: "Cần chú ý",
      color: "text-red-500",
      description: "Ngày cần cẩn thận và tránh rủi ro"
    };
  }
}

export function formatVietnameseNumber(num: number): string {
  const vietnameseNumbers = [
    "không", "một", "hai", "ba", "bốn", 
    "năm", "sáu", "bảy", "tám", "chín"
  ];
  
  if (num < 10) {
    return vietnameseNumbers[num];
  }
  
  return num.toString();
}
