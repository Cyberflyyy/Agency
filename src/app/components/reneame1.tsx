import React from "react";
import LeftSection from "./left_section";
import RightSection from "./right_section";

const Reneame1 = () => {
  return (
    <>
      <LeftSection />
      <div className="border-b border-l border-r border-white/15 min-h-[500px] flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full h-full flex items-center  justify-center">
          <p className="text-white/50 text-sm sm:text-base">Sekcja 3</p>
        </div>
      </div>
      <RightSection />
    </>
  );
};

export default Reneame1;
