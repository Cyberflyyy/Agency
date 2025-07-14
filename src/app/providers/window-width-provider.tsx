"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface WindowWidthContextType {
  windowWidth: number;
}

const WindowWidthContext = createContext<WindowWidthContextType>({
  windowWidth: 0,
});

export function WindowWidthProvider({ children }: { children: ReactNode }) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <WindowWidthContext.Provider value={{ windowWidth }}>
      {children}
    </WindowWidthContext.Provider>
  );
}

export function useWindowWidth() {
  const context = useContext(WindowWidthContext);
  if (!context) {
    throw new Error("useWindowWidth must be used within WindowWidthProvider");
  }
  return context;
}
