import React from "react";
import LeftSection from "./left_section";
import RightSection from "./right_section";

const Stats = () => {
  const stats = [
    { value: "50+", label: "Zrealizowanych projektów" },
    { value: "100%", label: "Satysfakcja klientów" },
    { value: "67%", label: "Poprawa wydajności" },
  ];

  return (
    <>
      <LeftSection />

      <section className="py-10 border-b border-white/15">
        <div
          className="mx-auto max-w-7xl grid gap-8"
          style={{ gridTemplateRows: "auto 1fr" }}
        >
          <div className="row-start-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center"
              >
                <div className="font-manrope font-bold text-4xl text-indigo-600 mb-2">
                  {stat.value}
                </div>
                <span className="text-white font-medium text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RightSection />
    </>
  );
};

export default Stats;
