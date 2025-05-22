"use client";
import React from "react";
import LeftSection from "./left_section";
import RightSection from "./right_section";

const BottomBackdropText = () => {
  return (
    <>
      <LeftSection />

      <div className="border-l border-r border-b border-white/15 overflow-hidden flex items-start justify-center pt-4">
        <h1 className="text-white/30 font-orbitron leading-none text-[clamp(3rem,10vw,12em)] tracking-tight uppercase text-center w-full translate-y-[10%]">
          GRATEFUL
        </h1>
      </div>

      <RightSection />
    </>
  );
};

export default BottomBackdropText;
