// contexts/ViewportContext.tsx
'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ViewportContextProps {
  width: number;
  height: number;
}

const ViewportContext = createContext<ViewportContextProps | null>(null);

export const useViewport = (): ViewportContextProps => {
  const viewport = useContext(ViewportContext);
  if (!viewport) {
    throw new Error('useViewport must be used within a ViewportProvider');
  }
  return viewport;
};

interface ViewportProviderProps {
  children: React.ReactNode;
}

export const ViewportProvider: React.FC<ViewportProviderProps> = ({ children }) => {
  const [viewport, setViewport] = useState<ViewportContextProps>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const handleWindowResize = () => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={viewport}>
      {children}
    </ViewportContext.Provider>
  );
};