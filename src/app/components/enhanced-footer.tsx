"use client";

import { useCursorLight } from "../providers/cursor-light-provider";
import BottomBackdropText from "./footer";

export default function EnhancedFooter() {
  const { style } = useCursorLight();

  return <BottomBackdropText highlightStyle={style} />;
}
