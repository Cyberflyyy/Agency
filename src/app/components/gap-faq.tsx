import React from "react";
import RightSection from "./right_section";
import LeftSection from "./left_section";

const Gapfaq = () => {
  return (
    <>
      <LeftSection />
      <div className="border-l border-r border-b  border-white/15 overflow-hidden flex items-start justify-center pt-4 h-[150px]"></div>
      <RightSection />
    </>
  );
};

export default Gapfaq;
