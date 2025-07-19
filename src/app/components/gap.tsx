import React from "react";
import RightSection from "./right_section";
import LeftSection from "./left_section";

const gap = () => {
  return (
    <>
      <LeftSection />
      <div className="border-t-2 border-b-2  -mt-[0.5px] -mb-[1px]    border-white/15 overflow-hidden flex items-start justify-center pt-4 h-[150px]"></div>
      <RightSection />
    </>
  );
};

export default gap;
