'use client';

interface LoadingProps {
  message?: string;
}

export default function Loading({ message = "Đang tải..." }: LoadingProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 backdrop-blur rounded-3xl p-8 border border-purple-300/30 text-center">
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
        <p className="text-purple-200 text-sm">
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
