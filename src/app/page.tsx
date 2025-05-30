"use client";
import { useState, useEffect } from "react";

import LeftSection from "./components/left_section";
import RightSection from "./components/right_section";
import StackingCards from "./components/stacking_cards";
import NonStackingCards from "./components/non_stacking_cards";
import Main from "./components/main";
import AboutUs from "./components/about_us";
import Header from "./components/header";
import BottomBackdropText from "./components/footer";
import Reneame1 from "./components/reneame1";
import Stats from "./components/stats";
import Gap from "./components/gap";
import Button from "./components/button";
import { useCursorLight } from "./hooks/useCursorLight";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const { ref, style } = useCursorLight();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={ref} className="w-full  min-h-screen bg-[#000000] text-white">
      <div className="grid grid-cols-[minmax(1px,0.5fr)_minmax(300px,6fr)_minmax(1px,0.5fr)] sm:grid-cols-[minmax(20px,0.7fr)_minmax(400px,5fr)_minmax(20px,0.7fr)] md:grid-cols-[minmax(30px,1fr)_minmax(500px,3fr)_minmax(30px,1fr)] lg:grid-cols-[1fr_5fr_1fr]">
        <Header />
        <Main />
        <Gap />
        <Stats />
        <Gap />
        <LeftSection />

        {windowWidth < 640 ? <NonStackingCards /> : <StackingCards />}
        <RightSection />
        <Gap />
        <AboutUs />
        <Gap />
        <Reneame1 />
        <Gap />

        <Button highlightStyle={style} />
      </div>

      <BottomBackdropText highlightStyle={style} />
    </div>
  );
}
