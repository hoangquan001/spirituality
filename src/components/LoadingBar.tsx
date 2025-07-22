'use client';

import { useLoading } from '@/contexts/LoadingContext';

export default function LoadingBar() {
  const { isLoading, progress } = useLoading();

  if (!isLoading) return null;

  return (
    <>
      {/* Loading Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
        {/* Background track */}
        <div className="absolute inset-0 bg-gray-900/10"></div>
        
        {/* Progress bar */}
        <div
          className="h-full bg-gradient-to-r from-golden via-yellow-400 to-yellow-300 shadow-lg transition-all duration-500 ease-out relative overflow-hidden"
          style={{
            width: `${progress}%`,
            boxShadow: '0 0 15px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.4)'
          }}
        >
          {/* Animated shimmer effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            style={{
              animation: 'shimmer 1.5s infinite linear'
            }}
          ></div>
          
          {/* Leading edge glow */}
          <div className="absolute -top-0.5 -bottom-0.5 right-0 w-3 bg-gradient-to-r from-golden to-yellow-300 blur-[2px] opacity-90"></div>
        </div>

        {/* Sparkling particles effect */}
        {progress > 15 && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 transform -translate-y-1/2"
                style={{
                  left: `${Math.min(progress - 15 + i * 15, 98)}%`,
                }}
              >
                <div 
                  className="w-0.5 h-0.5 bg-golden rounded-full animate-ping"
                  style={{
                    animationDelay: `${i * 300}ms`,
                    animationDuration: '1.2s'
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Loading overlay blur effect (optional) */}
      {isLoading && progress < 100 && (
        <div className="fixed inset-0 bg-black/5 backdrop-blur-[0.5px] z-[55] pointer-events-none transition-opacity duration-300"></div>
      )}
    </>
  );
}
