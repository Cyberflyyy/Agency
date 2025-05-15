import React from "react";

import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
const Main = () => {
  return (
    <>
      <div className="border-b border-r border-white/15 min-h-[450px] md:min-h-[750px]"></div>
      <div className="border-b border-r pb-24 border-white/15 min-h-[490px] md:min-h-[750px] relative overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />

        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 font-medium">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
                Great design.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Greater results.
              </span>
            </h1>

            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="absolute transform rotate-3 border-2 border-white/80 w-14 h-14 bg-gray-800/50"></div>
              <div className="absolute -bottom-1 -right-1 w-14 h-14 bg-blue-500/20 blur-md rounded-sm"></div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8 max-w-lg mx-auto text-sm sm:text-base text-white/70"
            >
              I design & build websites that look great, launch quickly and
              drive sales for your business.
            </motion.p>

            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                }}
                className="group flex items-center gap-2 py-2 border border-white/15 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm tracking-wide transition-all"
              >
                SEE PROJECTS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                className="group flex items-center gap-2 border border-white/15 py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm tracking-wide transition-all"
              >
                TESTIMONIALS
                <ExternalLink className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="border-b border-l border-white/15 min-h-[450px] md:min-h-[750px] flex items-center pl-4">
        <span className="text-white/50 text-xs sm:text-sm"></span>
      </div>
    </>
  );
};

export default Main;
