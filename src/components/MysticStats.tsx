'use client';

import { useEffect, useState } from 'react';

interface Stat {
  icon: string;
  value: string;
  label: string;
  color: string;
}

export default function MysticStats() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Simulate stats - in real app, these would come from analytics
    const mysticStats: Stat[] = [
      {
        icon: "🔮",
        value: "15,847",
        label: "Lần Tính Thần Số",
        color: "from-golden to-yellow-500"
      },
      {
        icon: "⭐",
        value: "12,293",
        label: "Cung Hoàng Đạo Xem",
        color: "from-indigo-500 to-gray-500"
      },
      {
        icon: "💑",
        value: "8,621",
        label: "Cặp Đôi Hợp Tuổi",
        color: "from-pink-500 to-red-500"
      },
      {
        icon: "🏠",
        value: "6,432",
        label: "Lượt Xem Phong Thủy",
        color: "from-orange-500 to-amber-500"
      },
      {
        icon: "💫",
        value: "9,184",
        label: "Giấc Mơ Giải Thích",
        color: "from-blue-500 to-cyan-500"
      },
      {
        icon: "✍️",
        value: "4,956",
        label: "Tên Được Phân Tích",
        color: "from-emerald-500 to-teal-500"
      },
      {
        icon: "📅",
        value: "11,247",
        label: "Ngày Tốt Được Chọn",
        color: "from-cyan-400 to-blue-400"
      },
      {
        icon: "✨",
        value: "98.7%",
        label: "Độ Hài Lòng",
        color: "from-green-500 to-emerald-500"
      }
    ];

    // Animate counting effect
    setStats(mysticStats);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20 animate-pulse">
            <div className="h-8 bg-gray-400/20 rounded mb-3"></div>
            <div className="h-6 bg-gray-400/20 rounded mb-2"></div>
            <div className="h-4 bg-gray-400/20 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
      {stats.map((stat, index) => (
        <StatCard 
          key={index} 
          stat={stat} 
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}

interface StatCardProps {
  stat: Stat;
  delay: number;
}

function StatCard({ stat, delay }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/20 hover:border-golden/50 transition-all duration-500 group cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="text-center">
        <div className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
          {stat.icon}
        </div>
        
        <div className={`text-lg md:text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform duration-300`}>
          {stat.value}
        </div>
        
        <div className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
          {stat.label}
        </div>
      </div>

      {/* Mystical glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
    </div>
  );
}
