'use client';

import { useEffect, useState } from 'react';
import { getDailyFortune, getFortuneLevel, formatDate } from '@/lib/utils';

export default function FortuneCard() {
  const [fortune, setFortune] = useState<ReturnType<typeof getDailyFortune> | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setFortune(getDailyFortune());
  }, []);

  if (!mounted || !fortune) {
    return (
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-6 border border-purple-300/20 animate-pulse">
        <div className="h-6 bg-purple-300/20 rounded mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 bg-purple-300/20 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  const today = new Date();
  const overallFortune = getFortuneLevel(fortune.overall);

  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-3xl p-6 border border-purple-300/20 hover:border-golden/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">
          ✨ Vận Số Hôm Nay
        </h3>
        <span className="text-sm text-purple-300">
          {formatDate(today)}
        </span>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-semibold">Tổng Quan</span>
          <span className={`font-bold ${overallFortune.color}`}>
            {overallFortune.level}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-purple-500 to-golden h-2 rounded-full transition-all duration-500"
            style={{ width: `${fortune.overall}%` }}
          ></div>
        </div>
        <p className="text-sm text-purple-300 mt-2">
          {overallFortune.description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FortuneItem 
          icon="💕" 
          label="Tình Yêu" 
          score={fortune.love}
        />
        <FortuneItem 
          icon="💼" 
          label="Sự Nghiệp" 
          score={fortune.career}
        />
        <FortuneItem 
          icon="💚" 
          label="Sức Khỏe" 
          score={fortune.health}
        />
        <FortuneItem 
          icon="💰" 
          label="Tài Chính" 
          score={fortune.finance}
        />
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-golden/10 to-purple-500/10 rounded-2xl border border-golden/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-golden">🔮</span>
          <span className="text-white font-semibold text-sm">Lời Khuyên Hôm Nay</span>
        </div>
        <p className="text-purple-200 text-sm leading-relaxed">
          {fortune.overall >= 70 
            ? "Hôm nay là ngày tuyệt vời để thực hiện những kế hoạch quan trọng. Hãy tự tin và quyết đoán!"
            : fortune.overall >= 50
            ? "Ngày bình thường, hãy tập trung vào công việc và giữ tâm trạng tích cực."
            : "Ngày cần thận trọng, tránh những quyết định quan trọng và chăm sóc bản thân."
          }
        </p>
      </div>
    </div>
  );
}

interface FortuneItemProps {
  icon: string;
  label: string;
  score: number;
}

function FortuneItem({ icon, label, score }: FortuneItemProps) {
  const fortune = getFortuneLevel(score);
  
  return (
    <div className="text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-xs text-purple-300 mb-1">{label}</div>
      <div className={`text-sm font-bold ${fortune.color}`}>
        {score}%
      </div>
    </div>
  );
}
