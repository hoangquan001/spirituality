'use client';

import { useLoading } from '@/contexts/LoadingContext';

interface LoadingProps {
  message?: string;
}

export default function Loading({ message = "Đang tải..." }: LoadingProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-gray-900/90 to-blue-900/90 backdrop-blur rounded-3xl p-8 border border-gray-400/30 text-center">
        {/* Mystical Loading Animation */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-golden/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-golden animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-2 border-purple-400/50"></div>
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-golden text-xl animate-pulse">✦</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">
          {message}
        </h3>
        <p className="text-gray-300 text-sm">
          Vũ trụ đang kết nối với năng lượng của bạn...
        </p>

        {/* Floating dots */}
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-golden rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-golden rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-golden rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

// Simple loading spinner for inline use
export function SimpleLoading({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <div className="absolute inset-0 rounded-full border-2 border-golden/30"></div>
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-golden animate-spin"></div>
    </div>
  );
}

// Loading Spinner with context
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} border-2 border-golden border-t-transparent rounded-full animate-spin`} />
  );
}

// Loading Overlay
export function LoadingOverlay({ message = 'Đang tải...', show }: { message?: string; show?: boolean }) {
  const { isLoading } = useLoading();
  const shouldShow = show !== undefined ? show : isLoading;

  if (!shouldShow) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-[70] flex items-center justify-center">
      <div className="cosmic-card rounded-2xl p-8 border border-gray-400/20 text-center max-w-sm mx-4">
        <div className="relative mb-6">
          <div className="w-16 h-16 border-2 border-golden/30 rounded-full animate-spin mx-auto">
            <div className="w-full h-full border-2 border-transparent border-t-golden rounded-full animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-golden text-2xl animate-pulse">✦</span>
          </div>
        </div>
        <h3 className="text-white font-medium mb-2">{message}</h3>
        <p className="text-gray-300 text-sm">Vui lòng chờ trong giây lát...</p>
      </div>
    </div>
  );
}

// Loading Dots
export function LoadingDots({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  return (
    <div className="flex space-x-1">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} bg-golden rounded-full animate-bounce`}
          style={{
            animationDelay: `${i * 150}ms`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
}

// Hook for easy loading state management
export function usePageLoading() {
  const { isLoading, startLoading, finishLoading } = useLoading();

  const withLoading = async <T,>(asyncFn: () => Promise<T>): Promise<T> => {
    try {
      startLoading();
      const result = await asyncFn();
      return result;
    } finally {
      finishLoading();
    }
  };

  return {
    isLoading,
    startLoading,
    finishLoading,
    withLoading
  };
}
