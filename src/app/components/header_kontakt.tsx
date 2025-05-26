"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const HeaderKontakt = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-3 py-6 px-4 md:px-8 lg:px-16 flex items-center justify-between"
    >
      <Link
        href="/"
        className="text-2xl  font-medium bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent"
      >
        VISION AGENCY
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default HeaderKontakt;
