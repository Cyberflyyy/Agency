"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import type React from "react";
import { useState } from "react";

import { motion } from "framer-motion";
import { Send, Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";
import HeaderKontakt from "../components/header_kontakt";
import Link from "next/link";
import BottomBackdropText from "../components/footer";
import { useCursorLight } from "../hooks/useCursorLight";
const price_options = [
  { id: 1, name: "1 500 - 3 000 zł" },
  { id: 2, name: "3 000 - 5 000 zł" },
  { id: 3, name: "5 000 - 10 000 zł" },
  { id: 4, name: "Powyżej 10 000 zł" },
  { id: 5, name: " Wybierz przedział budżetowy" },
];

const project_options = [
  { id: 1, name: "Strona internetowa" },
  { id: 2, name: "Sklep internetowy" },
  { id: 3, name: "Aplikacja webowa" },
  { id: 4, name: "Redesign istniejącej strony" },
  { id: 5, name: "Inny" },
];

const Page = () => {
  const { ref, style } = useCursorLight();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "Wybierz rodzaj projektu",
    budget: "Wybierz przedział budżetowy",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log("Form state:", formState);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        projectType: "Wybierz rodzaj projektu",
        budget: "Wybierz przedział budżetowy",
      });
    }, 3000);
  };

  return (
    <>
      <div
        ref={ref}
        className="grid grid-cols-[minmax(1px,0.5fr)_minmax(300px,6fr)_minmax(1px,0.5fr)] bg-black sm:grid-cols-[minmax(20px,0.7fr)_minmax(400px,5fr)_minmax(20px,0.7fr)] md:grid-cols-[minmax(30px,1fr)_minmax(500px,3fr)_minmax(30px,1fr)] lg:grid-cols-[1fr_5fr_1fr]"
      >
        <HeaderKontakt />

        <div className="col-span-3 mt-8 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Porozmawiajmy o Twoim projekcie
            </h1>
            <p className="text-gray-400 max-w-2xl  mx-auto text-sm md:text-base">
              Wypełnij formularz poniżej, a nasz zespół skontaktuje się z Tobą w
              ciągu 24 godzin, aby omówić szczegóły Twojego projektu i
              zaproponować najlepsze rozwiązania.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 mt-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Imię i nazwisko{" "}
                          <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white text-sm transition-all"
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Email <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white text-sm transition-all"
                          placeholder="jan@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white text-sm transition-all"
                          placeholder="+48 123 456 789"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Temat <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white text-sm transition-all"
                          placeholder="Nowa strona internetowa"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="projectType"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Rodzaj projektu
                        </label>
                        <Listbox
                          value={formState.projectType}
                          onChange={(value) =>
                            setFormState({ ...formState, projectType: value })
                          }
                        >
                          <div className="relative">
                            <ListboxButton className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white text-sm transition-all text-left flex items-center justify-between">
                              <span
                                className={
                                  formState.projectType ===
                                  "Wybierz rodzaj projektu"
                                    ? "text-gray-400"
                                    : "text-white"
                                }
                              >
                                {formState.projectType}
                              </span>
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </ListboxButton>
                            <ListboxOptions className="absolute z-10 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-lg max-h-60 overflow-auto">
                              {project_options.map((option) => (
                                <ListboxOption
                                  key={option.id}
                                  value={option.name}
                                  className="px-4 py-3 text-sm text-white hover:bg-blue-500/20 cursor-pointer transition-colors first:rounded-t-lg last:rounded-b-lg"
                                >
                                  {option.name}
                                </ListboxOption>
                              ))}
                            </ListboxOptions>
                          </div>
                        </Listbox>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Budżet
                        </label>
                        <Listbox
                          value={formState.budget}
                          onChange={(value) =>
                            setFormState({ ...formState, budget: value })
                          }
                        >
                          <div className="relative">
                            <ListboxButton className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white text-sm transition-all text-left flex items-center justify-between">
                              <span
                                className={
                                  formState.budget ===
                                  "Wybierz przedział budżetowy"
                                    ? "text-gray-400"
                                    : "text-white"
                                }
                              >
                                {formState.budget}
                              </span>
                              <svg
                                className="w-5 h-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </ListboxButton>
                            <ListboxOptions className="absolute z-10 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-lg max-h-60 overflow-auto">
                              {price_options.slice(0, -1).map((option) => (
                                <ListboxOption
                                  key={option.id}
                                  value={option.name}
                                  className="px-4 py-3 text-sm text-white hover:bg-blue-500/20 cursor-pointer transition-colors first:rounded-t-lg last:rounded-b-lg"
                                >
                                  {option.name}
                                </ListboxOption>
                              ))}
                            </ListboxOptions>
                          </div>
                        </Listbox>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Wiadomość <span className="text-blue-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white text-sm transition-all resize-none"
                        placeholder="Opisz swój projekt, cele i oczekiwania..."
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Wysyłanie...</span>
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Wyślij wiadomość</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Wiadomość wysłana!
                    </h3>
                    <p className="text-gray-400 max-w-md">
                      Dziękujemy za kontakt. Nasz zespół skontaktuje się z Tobą
                      w ciągu 24 godzin roboczych.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-medium text-white mb-4">
                  Informacje kontaktowe
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 ">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href="mailto:kontakt@example.pl"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        kontakt@example.pl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Telefon</p>
                      <a
                        href="tel:+48123456789"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        +48 123 456 789
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-medium text-white mb-4">
                  Powrót do strony głownej
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Chcesz jeszcze raz zobaczyć naszą ofertę? Odwiedź naszą stronę
                  główną, aby zapoznać się z naszymi usługami i projektami.
                </p>
                <Link
                  href="/"
                  className="flex items-center justify-between w-full px-4 py-3 bg-black border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/10 transition-all group"
                >
                  <span> Powrót </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className=" py-16 px-4"
          >
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Zacznijmy razem
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Twój projekt już dziś
                </span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-black/50 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-400">1</span>
                  </div>
                  <h3 className="text-white font-medium mb-2">Kontakt</h3>
                  <p className="text-gray-400 text-sm">
                    Skontaktuj się z nami i opowiedz o swoim projekcie
                  </p>
                </div>

                <div className="bg-black/50 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-400">2</span>
                  </div>
                  <h3 className="text-white font-medium mb-2">Konsultacja</h3>
                  <p className="text-gray-400 text-sm">
                    Omawiamy szczegóły i przygotowujemy plan działania
                  </p>
                </div>

                <div className="bg-black/50 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-blue-400">3</span>
                  </div>
                  <h3 className="text-white font-medium mb-2">Realizacja</h3>
                  <p className="text-gray-400 text-sm">
                    Projektujemy i wdrażamy Twoją stronę internetową
                  </p>
                </div>
              </div>
            </div>{" "}
          </motion.div>
          <BottomBackdropText highlightStyle={style}></BottomBackdropText>
        </div>
      </div>
    </>
  );
};

export default Page;
