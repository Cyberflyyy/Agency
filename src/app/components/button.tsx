// components/Button.tsx
"use client";
import { useRouter } from "next/navigation";
import LeftSection from "./left_section";
import RightSection from "./right_section";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import React from "react";

type ButtonProps = {
  highlightStyle: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({ highlightStyle }) => {
  const router = useRouter();
  const handleClick = () => router.push("/kontakt");

  return (
    <>
      <LeftSection />

      <div className="border border-white/15 overflow-hidden flex flex-col items-center justify-center py-20 md:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center  text-center px-4 max-w-3xl"
        >
          <div className="inline-flex items-center justify-center p-1.5 px-3 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Mail className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-xs font-medium text-blue-400">
              Skontaktuj się z nami
            </span>
          </div>

          {/* tutaj nakładamy podświetlanie */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={highlightStyle}
          >
            <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Zacznijmy razem
            </span>
            <span className="block bg-gradient-to-r from-blue-400 to-blue-500 leading-tight mb-2 bg-clip-text text-transparent">
              Twój projekt już dziś
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">Napisz do nas</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 py-4 px-6 bg-black border border-blue-500/30 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="font-medium">Zobacz szczegóły</span>
            </motion.button>
          </div>
        </motion.div>

        {/* dekoracje */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-1.5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30" />
          ))}
        </div>
      </div>

      <RightSection />
    </>
  );
};

export default Button;
