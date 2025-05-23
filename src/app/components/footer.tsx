"use client";
import React from "react";
import LeftSection from "./left_section";
import RightSection from "./right_section";

const BottomBackdropText = () => {
  return (
    <div className="grid grid-cols-[minmax(1px,0.5fr)_minmax(300px,6fr)_minmax(1px,0.5fr)] sm:grid-cols-[minmax(20px,0.7fr)_minmax(400px,5fr)_minmax(20px,0.7fr)] md:grid-cols-[minmax(30px,1fr)_minmax(500px,3fr)_minmax(30px,1fr)] lg:grid-cols-[1fr_5fr_1fr] xl:flex xl:flex-col">
      <LeftSection />

      <div className="border-l border-r border-b border-white/15 overflow-hidden flex items-start justify-center pt-4">
        <h1
          className="text-white/30 font-orbitron leading-none text-[clamp(2.5rem,9vw,8.5rem)] tracking-tight uppercase text-center w-full translate-y-[10%]">
          GRATEFUL
        </h1>
      </div>

      <RightSection />
    </div>
  );
};

export default BottomBackdropText;
