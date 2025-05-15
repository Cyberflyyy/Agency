"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Minus } from "lucide-react";
const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="border-b border-r border-white/15 h-16   flex items-center justify-center "></div>
      <div className="border-b border-l border-r border-white/15 h-16 flex items-center justify-center relative">
        {windowWidth < 640 ? (
          <div className="flex relative ">
            <div>
              <Link
                href="#"
                className="block px-4 text-sm rounded-sm   py-2 hover:bg-white/10"
              >
                REQUEST A QUOTE
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="minus"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Minus className="text-white" size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="text-white" size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 bg-black border border-white/15 rounded-md py-2 w-44 z-50">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-white/10"
                >
                  WORK
                </Link>
                <Link
                  href="#"
                  className="block px-4 text-sm py-2 hover:bg-white/10"
                >
                  SERVICES
                </Link>
                <Link
                  href="#"
                  className="block px-4 text-sm py-2 hover:bg-white/10"
                >
                  TESTIMONIALS
                </Link>
              </div>
            )}
          </div>
        ) : (
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
              <li>
                <Link
                  href="#"
                  className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity "
                >
                  <div className=" bg-gradient-to-r from-[#BCC6CC] text-black to-[#EAEAEA] p-1 rounded-xs">
                    PROJEKTY
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity"
                >
                  <div className=" bg-gradient-to-r from-[#BCC6CC] text-black to-[#EAEAEA]  p-1 rounded-xs">
                    USŁUGI
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity"
                >
                  <div className=" bg-gradient-to-r from-[#BCC6CC] text-black to-[#EAEAEA]  p-1 rounded-xs">
                    O NAS
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity"
                >
                  <div className=" bg-gradient-to-r from-[#BCC6CC] text-black to-[#EAEAEA] p-1 rounded-xs">
                    KONTAKT
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <div className="border-b border-l border-white/15 h-16"></div>
    </>
  );
};

export default Header;
