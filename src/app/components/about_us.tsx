import React from "react";
import LeftSection from "./left_section";
import RightSection from "./right_section";

const AboutUs = () => {
  return (
    <>
      <LeftSection />
      <div className="border-b border-t border-l border-r border-white/15 min-h-[500px] flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full h-full flex items-center justify-center bg-amber-700">
          <p className="text-white/50 text-sm sm:text-base">About us</p>
        </div>
      </div>
      <RightSection />
    </>
  );
};

export default AboutUs;
