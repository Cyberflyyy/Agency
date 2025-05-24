"use client";
import { useState, useRef, useEffect, CSSProperties, RefObject } from "react";

export function useCursorLight(): {
  ref: RefObject<HTMLDivElement>;
  style: CSSProperties;
} {
  const ref = useRef<HTMLElement | null>(null);
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

  return { ref: ref as RefObject<HTMLDivElement>, style };
}
