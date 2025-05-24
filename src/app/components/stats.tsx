"use client";
import LeftSection from "./left_section";
import RightSection from "./right_section";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    { value: "50+", label: "Zrealizowanych projektów", color: "from-blue-400 to-blue-500" },
    { value: "100%", label: "Satysfakcja klientów",        color: "from-blue-500 to-indigo-500" },
    { value: "67%",  label: "Poprawa wydajności",          color: "from-indigo-500 to-blue-400" },
  ];

  return (
    <>
      <LeftSection />

      <section className="py-16 md:py-24 border-b border-white/15 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  className="flex items-center justify-start p-8 rounded-xl bg-black/30 backdrop-blur-sm duration-300"
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

                  <span className="ml-4 text-white/80 font-medium text-left">
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
