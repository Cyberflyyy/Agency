"use client";
import LeftSection from "./left_section";
import RightSection from "./right_section";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    {
      value: "50+",
      label: "Zrealizowanych projektów",
      color: "from-blue-400 to-blue-500",
    },
    {
      value: "100%",
      label: "Satysfakcja klientów",
      color: "from-blue-500 to-indigo-500",
    },
    {
      value: "67%",
      label: "Poprawa wydajności",
      color: "from-indigo-500 to-blue-400",
    },
  ];

  return (
    <>
      <LeftSection />

      <section className="py-16 md:py-24 border-b border-white/15 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Responsive grid that maintains symmetry at all breakpoints */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col items-center justify-center p-8 rounded-xl bg-black/30 border border-white/10 backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
              >
                <motion.div
                  className={`font-bold text-3xl md:text-4xl mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: idx * 0.1 + 0.2,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <span className="text-white/80 font-medium text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RightSection />
    </>
  );
};

export default Stats;
