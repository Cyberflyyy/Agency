import React from "react";

import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../lib/bc";

const Main = () => {
  return (
    <>
      <div className="border-b border-r border-white/15 min-h-[450px] md:min-h-[650px]"></div>
      <div className="border-b -mt-[1px]   border-t pb-24 border-white/15 min-h-[490px] pt-10 md:pt-0 md:min-h-[600px]  relative overflow-hidden flex items-center justify-center ">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, rgba(0, 0, 0, 0) 70%)",
          }}
        />

        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>

        <div className="container mx-auto px-6   md:px-12 relative z-10 mt-20 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center  justify-center"
          >
            <span className="block text-transparent font-bold  bg-clip-text bg-gradient-to-r pb-3  from-blue-300 to-blue-600">
              Vision Studio
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-6 font-medium">
              <span className="block   font-bold text-white">
                Nowoczesne strony
              </span>
              <span className="block text-transparent font-bold  bg-clip-text bg-gradient-to-r pb-3  from-blue-400 to-blue-500">
                Przyciągają uwagę
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8 max-w-lg mx-auto text-sm xl:text-md sm:text-base  text-white/70"
            >
              Projektujęmy i tworzymy strony internetowe, które przyciągają
              uwagę, działają błyskawicznie i realnie wspierają rozwój Twojego
              biznesu.
            </motion.p>

            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                }}
                className="group flex items-center gap-2 py-2 border border-white/15 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm tracking-wide transition-all rounded-md"
              >
                ZOBACZ PROJEKTY
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                className="group flex items-center gap-2 border border-white/15 py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm tracking-wide transition-all rounded-md "
              >
                KONTAKT
                <ExternalLink className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
        <BackgroundBeams />
      </div>
      <div className="border-b border-l border-white/15 min-h-[450px] md:min-h-[600px] flex items-center pl-4">
        <span className="text-white/50 text-xs sm:text-sm"></span>
      </div>
    </>
  );
};

export default Main;
