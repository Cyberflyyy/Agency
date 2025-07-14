"use client";

import { useWindowWidth } from "../providers/window-width-provider";
import StackingCards from "./stacking_cards";
import NonStackingCards from "./non_stacking_cards";

export default function ConditionalCards() {
  const { windowWidth } = useWindowWidth();

  return windowWidth < 1250 ? <NonStackingCards /> : <StackingCards />;
}
