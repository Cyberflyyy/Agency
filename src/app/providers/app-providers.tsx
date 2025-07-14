"use client";

import type { ReactNode } from "react";
import { WindowWidthProvider } from "./window-width-provider";
import { CursorLightProvider } from "./cursor-light-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <WindowWidthProvider>
      <CursorLightProvider>{children}</CursorLightProvider>
    </WindowWidthProvider>
  );
}
