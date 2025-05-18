"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LeftSection from "./left_section";
import RightSection from "./right_section";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  order_number: number;
  category: string;
}

// Lokalna lista pytań i odpowiedzi
const localFAQs: FAQ[] = [
  {
    id: 1,
    question: "Nie mam pomysłu na stronę — czy możecie mi pomóc?",
    answer:
      "Oczywiście! Wystarczy, że opowiesz nam czym się zajmujesz, a my zaproponujemy Ci kilka koncepcji strony dopasowanej do Twojej branży i stylu.",
    order_number: 1,
    category: "Pomysły ",
  },
  {
    id: 2,
    question: "Jak wygląda proces tworzenia strony?",
    answer:
      "Najpierw poznajemy Twoje potrzeby, potem projektujemy stronę, wdrażamy ją i testujemy. Na każdym etapie możesz zgłaszać swoje uwagi.",
    order_number: 2,
    category: "Współpraca",
  },
  {
    id: 3,
    question: "Czy oferujecie również sklep internetowy?",
    answer:
      "Tak, tworzymy zarówno proste strony wizytówki, jak i rozbudowane sklepy internetowe z systemem płatności i zarządzania produktami.",
    order_number: 3,
    category: "Oferta",
  },
  {
    id: 4,
    question: "Ile kosztuje stworzenie strony internetowej?",
    answer:
      "Koszt zależy od złożoności strony. Prosta strona zaczyna się już od 1500 zł, ale każdą wycenę przygotowujemy indywidualnie.",
    order_number: 4,
    category: "Oferta",
  },
  {
    id: 5,
    question: "Czy mogę później samodzielnie edytować stronę?",
    answer:
      "Tak! Tworzymy strony w systemach, które pozwalają na łatwą edycję treści, np. WordPress lub własny panel administracyjny.",
    order_number: 5,
    category: "Współpraca",
  },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openId, setOpenId] = useState<number | null>(null);

  const categories = useMemo(
    () => Array.from(new Set(localFAQs.map((faq) => faq.category))),
    []
  );

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = selectedCategory
    ? localFAQs.filter((faq) => faq.category === selectedCategory)
    : localFAQs;

  return (
    <>
      <LeftSection />
      <div id="FAQ" className="min-h-screen border-b border-white/15   ">
        <main className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Często zadawane pytania
            </span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`p-4 rounded-xl text-white font-semibold border border-blue-300/80 transition-all duration-200 
              ${
                selectedCategory === null
                  ? "bg-blue-500 shadow-lg shadow-blue-500/30"
                  : "bg-gray-800/50 hover:bg-gray-700/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Wszystkie
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`p-4 rounded-xl text-white font-semibold transition-all border border-blue-300/80 duration-200 
                ${
                  selectedCategory === category
                    ? "bg-blue-500 shadow-lg shadow-blue-500/30"
                    : "bg-gray-800/50 hover:bg-gray-700/50"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="max-w-3xl mx-auto grid gap-6">
            <AnimatePresence mode="wait">
              {filteredFAQs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  layout
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-gray-700/50">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 flex justify-between items-center text-left group-hover:bg-gray-800/80 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openId === faq.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-blue-400"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openId === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-4">
                            <div className="pt-4 border-t border-gray-700/50 text-gray-300 whitespace-pre-wrap">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </main>
      </div>
      <RightSection />
    </>
  );
}
