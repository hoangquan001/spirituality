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
        value: "12,847",
        label: "Lần Tính Thần Số",
        color: "from-purple-500 to-blue-500"
      },
      {
        icon: "⭐",
        value: "8,293",
        label: "Cung Hoàng Đạo Xem",
        color: "from-golden to-yellow-500"
      },
      {
        icon: "💫",
        value: "5,621",
        label: "Giấc Mơ Giải Thích",
        color: "from-pink-500 to-purple-500"
      },
      {
        icon: "✨",
        value: "98.5%",
        label: "Độ Hài Lòng",
        color: "from-green-500 to-emerald-500"
      }
    ];

    // Animate counting effect
    setStats(mysticStats);
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/20 animate-pulse">
            <div className="h-8 bg-purple-300/20 rounded mb-3"></div>
            <div className="h-6 bg-purple-300/20 rounded mb-2"></div>
            <div className="h-4 bg-purple-300/20 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
      className={`bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/20 hover:border-golden/50 transition-all duration-500 group cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="text-center">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {stat.icon}
        </div>
        
        <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
          {stat.value}
        </div>
        
        <div className="text-sm text-purple-300 group-hover:text-white transition-colors duration-300">
          {stat.label}
        </div>
      </div>

      {/* Mystical glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
    </div>
  );
}
