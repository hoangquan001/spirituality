'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  progress: number;
  startLoading: () => void;
  finishLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  progress: 0,
  startLoading: () => {},
  finishLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
  };

  const finishLoading = () => {
    setProgress(100);
    setTimeout(() => {
      setIsLoading(false);
      setProgress(0);
    }, 300);
  };

  // Auto-start loading on route change
  useEffect(() => {
    startLoading();
    
    // Simulate progressive loading
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 20;
      if (currentProgress > 90) {
        currentProgress = 90;
        clearInterval(interval);
      }
      setProgress(currentProgress);
    }, 150);

    // Complete loading after a short delay
    const timer = setTimeout(() => {
      clearInterval(interval);
      finishLoading();
    }, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [pathname, searchParams]);

  return (
    <LoadingContext.Provider value={{ isLoading, progress, startLoading, finishLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
