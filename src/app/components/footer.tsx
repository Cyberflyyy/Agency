"use client";
import React from "react";

type BottomBackdropTextProps = {
  highlightStyle: React.CSSProperties;
};

const BottomBackdropText: React.FC<BottomBackdropTextProps> = ({
  highlightStyle,
}) => {
  return (
    <div className="relative w-full overflow-hidden ">
      <h1
        className="
          w-full text-center font-semibold   leading-none
          text-[clamp(5rem,26vw,20rem)] tracking-tight
          transform translate-y-[15%] user-select-none"
        style={{ ...highlightStyle, userSelect: 'none' }}
      >
        VISION
      </h1>
    </div>
  );
};

export default BottomBackdropText;
