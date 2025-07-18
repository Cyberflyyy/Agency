"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const HeaderKontakt = () => {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-3 py-6 px-4 md:px-8 lg:px-16 flex flex-col items-center mt-8"
      >
        <Link
          href="/"
          className="block text-transparent font-bold  bg-clip-text bg-gradient-to-r pb-3  from-blue-300 to-blue-600"
        >
          Vision Studio
        </Link>
    
      </motion.header>
    </>
  );
};

export default HeaderKontakt;
