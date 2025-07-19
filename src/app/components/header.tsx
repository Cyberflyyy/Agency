"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Layers, Briefcase, Users, Mail } from "lucide-react";
import { cn } from "../lib/utils";

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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const menuItems = [
    { name: "REALIZACJE", icon: <Layers size={18} />, href: "#realizacje" },

    { name: "STACK", icon: <Briefcase size={18} />, href: "#onas" },
    { name: "FAQ", icon: <Users size={18} />, href: "#faq" },
  ];

  return (
    <>
      <div className="border-b-2 border-r-2 border-white/15 h-16 flex items-center justify-center "></div>
      <div className="h-16  border-white/15 flex items-center justify-center sticky top-0 z-50   ">
        {windowWidth < 640 ? (
          <div className="flex justify-center items-center w-full px-4 ">
            <div className="flex items-center">
              <Link
                href="/kontakt"
                className={cn(
                  "block px-5 text-sm rounded-md py-1.5 border border-blue-500/50 bg-black text-blue-400 font-medium  transition-all hover:scale-105   active:scale-95 duration-300"
                )}
              >
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  KONTAKT
                </div>
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2  rounded-md transition-all duration-300 hover:cursor-pointer bg-black hover:scale-105    active:scale-95 border border-white/20"
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="text-white" size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="text-white" size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <>
                  {/* Backdrop overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    onClick={() => setMenuOpen(false)}
                  />

                  {/* Menu panel */}
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                      type: "spring",
                      damping: 25,
                      stiffness: 300,
                    }}
                    className="fixed right-0 top-0 h-full w-3/4 max-w-xs bg-gradient-to-b from-gray-900 to-black border-l border-white/15 z-50 overflow-y-auto"
                  >
                    <div className="flex flex-col h-full">
                      <div className="p-6 border-b border-white/10 flex items-center justify-between">
                        <span className="text-lg font-medium bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                          Menu
                        </span>
                        <button
                          onClick={() => setMenuOpen(false)}
                          className="p-2 hover:bg-white/10 rounded-full transition-all"
                        >
                          <X size={20} className="text-white/70" />
                        </button>
                      </div>

                      <div className="p-4 flex-1">
                        <nav className="space-y-1">
                          {menuItems.map((item, index) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + 0.2 }}
                            >
                              <Link
                                href={item.href}
                                scroll={true}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                                onClick={() => setMenuOpen(false)}
                              >
                                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-400/20 to-blue-500/20 border border-white/10 group-hover:border-blue-400/30 transition-all duration-300">
                                  {item.icon}
                                </div>
                                <span className="font-medium tracking-wide text-sm">
                                  {item.name}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </nav>
                      </div>

                      <div className="mt-auto p-6 border-t border-white/10">
                        <Link
                          href="/kontakt"
                          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20"
                          onClick={() => setMenuOpen(false)}
                        >
                          <Mail size={16} />
                          <span className="font-medium">KONTAKT</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <nav className="sticky top-0 z-50  ">
            <ul className="flex flex-wrap items-center justify-center gap-[2px]">
              <li>
                <Link
                  href="#realizacje"
                  scroll={true}
                  className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity "
                >
                  <div className="px-5 py-1.5 text-sm  text-white border border-white/15 bg-black hover:scale-105    active:scale-95 rounded-lg hover:bg-[#8cb3e0]/10 transition-all duration-300">
                    REALIZACJE
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href="#onas"
                  scroll={true}
                  className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity"
                >
                  <div className="px-5 py-1.5 text-white border border-white/15 bg-black text-sm hover:scale-105    active:scale-95   rounded-lg hover:bg-[#8cb3e0]/10 transition-all duration-300">
                    STACK
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  scroll={true}
                  className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity"
                >
                  <div className="px-6 py-1.5 text-white border border-white/15 bg-black hover:scale-105    active:scale-95   text-sm  rounded-lg hover:bg-[#8cb3e0]/10 transition-all duration-300">
                    FAQ
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  scroll={true}
                  className="flex items-center text-sm justify-center gap-2 w-full py-1.5  px-4 bg-gradient-to-r hover:scale-105    active:scale-95 from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20"
                  onClick={() => setMenuOpen(false)}
                >
                  <Mail size={16} />
                  <span className="font-medium">KONTAKT</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <div className="border-b-2 border-l-2 border-white/15 h-16"></div>
    </>
  );
};

export default Header;

// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, Minus } from "lucide-react";
// import { cn } from "../lib/utils";
// const Header = () => {
//   const [windowWidth, setWindowWidth] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   useEffect(() => {
//     setWindowWidth(window.innerWidth);

//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <>
//       <div className="border-b border-r  border-white/15 h-16   flex items-center justify-center "></div>
//       <div className="border-b border-l border-r border-white/15 h-16 flex items-center justify-center relative">
//         {windowWidth < 640 ? (
//           <div className="flex relative  ">
//             <div>
//               <Link
//                 href="#"
//                 className={cn(
//                   "block px-10 text-sm rounded-sm py-2 hover:bg-white/10",
//                   menuOpen &&
//                     "bg-blue-500  hover:bg-blue-500  hover:scale-105 active:scale-95  transition-all duration-300"
//                 )}
//               >
//                 KONTAKT
//               </Link>
//             </div>

//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="p-2 hover:bg-white/10 rounded-md transition-colors"
//             >
//               <AnimatePresence mode="wait">
//                 {menuOpen ? (
//                   <motion.div
//                     key="minus"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <Minus className="text-white" size={20} />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="menu"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <Menu className="text-white" size={20} />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </button>

//             {menuOpen && (
//               <div className="absolute right-0 top-full mt-2 bg-black border border-white/15 rounded-md py-2 w-44 z-50">
//                 <Link
//                   href="#"
//                   className="block px-4 py-2 text-sm hover:bg-white/10"
//                 >
//                   REALIZACJE
//                 </Link>
//                 <Link
//                   href="#"
//                   className="block px-4 text-sm py-2 hover:bg-white/10"
//                 >
//                   USŁUGI
//                 </Link>
//                 <Link
//                   href="#"
//                   className="block px-4 text-sm py-2 hover:bg-white/10"
//                 >
//                   O NAS
//                 </Link>
//               </div>
//             )}
//           </div>
//         ) : (
//           <nav>
//             <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
//               <li>
//                 <Link
//                   href="#"
//                   className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity "
//                 >
//                   <div className="px-5 py-1.5 text-white text-sm border border-[#8cb3e0]/30 rounded-xs hover:bg-[#8cb3e0]/10 transition-all duration-300">
//                     REALIZACJE
//                   </div>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity"
//                 >
//                   <div className="px-5 py-1.5 text-white text-sm border border-[#8cb3e0]/30 rounded-xs hover:bg-[#8cb3e0]/10 transition-all duration-300">
//                     USŁUGI
//                   </div>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity"
//                 >
//                   <div className="px-5 py-1.5 text-white text-sm border border-[#8cb3e0]/30 rounded-xs hover:bg-[#8cb3e0]/10 transition-all duration-300">
//                     O NAS
//                   </div>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="text-xs sm:text-sm tracking-wide hover:opacity-80 transition-opacity"
//                 >
//                   <div className="px-5 py-1.5 text-white text-sm border border-[#8cb3e0]/30 rounded-xs hover:bg-[#8cb3e0]/10 transition-all duration-300">
//                     KONTAKT
//                   </div>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         )}
//       </div>
//       <div className="border-b border-l border-white/15 h-16"></div>
//     </>
//   );
// };

// export default Header;
