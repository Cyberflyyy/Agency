"use client";

import { useCursorLight } from "../providers/cursor-light-provider";
import Button from "./button";

export default function EnhancedButton() {
  const { style } = useCursorLight();

  return <Button highlightStyle={style} />;
}
