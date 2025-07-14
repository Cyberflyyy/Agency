"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  type ReactNode,
  type CSSProperties,
  type RefObject,
} from "react";

interface CursorLightContextType {
  ref: RefObject<HTMLDivElement>;
  style: CSSProperties;
}

const CursorLightContext = createContext<CursorLightContextType | null>(null);

export function CursorLightProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [maskPos, setMaskPos] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMaskPos({ x: `${x}%`, y: `${y}%` });
    };

    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;

      const rect = el.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * 100;
      const y = ((touch.clientY - rect.top) / rect.height) * 100;
      setMaskPos({ x: `${x}%`, y: `${y}%` });
    };

    el.addEventListener("mousemove", handleMouse);
    el.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      el.removeEventListener("mousemove", handleMouse);
      el.removeEventListener("touchmove", handleTouch);
    };
  }, []);

  const style: CSSProperties = {
    backgroundImage: `radial-gradient(circle at ${maskPos.x} ${maskPos.y}, rgba(255,255,255,0.8) 0%, transparent 40%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <CursorLightContext.Provider
      value={{ ref: ref as RefObject<HTMLDivElement>, style }}
    >
      <div ref={ref} className="w-full min-h-screen">
        {children}
      </div>
    </CursorLightContext.Provider>
  );
}

export function useCursorLight() {
  const context = useContext(CursorLightContext);
  if (!context) {
    throw new Error("useCursorLight must be used within CursorLightProvider");
  }
  return context;
}
