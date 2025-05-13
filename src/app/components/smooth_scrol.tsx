// app/components/SmoothScroll.tsx (lub inny folder)

"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // czas trwania animacji scrolla
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing z lekkim opóźnieniem
      // smooth: true, // Removed as it is not a valid property
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
