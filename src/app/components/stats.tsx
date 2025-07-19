"use client";
import LeftSection from "./left_section";
import RightSection from "./right_section";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      value: "50+",
      label: "Zrealizowanych projektów",
      color: "from-blue-400 to-blue-600",
    },
    {
      value: "100%",
      label: "Satysfakcja klientów",
      color: "from-blue-400 to-blue-600",
    },
    {
      value: "67%",
      label: "Poprawa wydajności",
      color: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <>
      <LeftSection />

      <section className="py-16 md:py-24  relative overflow-hidden -mb-[0.5px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 justify-items-center gap-8 min-[1441px]:grid-cols-3 min-[1441px]:justify-items-start">
            {stats.map((stat, idx) => {
              const numericValue = parseFloat(stat.value);
              const suffix = stat.value.replace(/[\d.]/g, "");

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="flex flex-col min-[1441px]:flex-row items-center justify-start p-8 rounded-xl bg-black/30 backdrop-blur-sm duration-300 w-full max-w-[400px]"
                >
                  <CountUp
                    start={0}
                    end={numericValue}
                    duration={2}
                    suffix={suffix}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={200}
                  >
                    {({ countUpRef }) => (
                      <span
                        ref={countUpRef}
                        className={`font-bold text-6xl md:text-7xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      />
                    )}
                  </CountUp>

                  <span className="mt-4 min-[1441px]:mt-0 min-[1441px]:ml-4 text-white/80 font-medium text-center min-[1441px]:text-left">
                    {stat.label.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <RightSection />
    </>
  );
};

export default Stats;
