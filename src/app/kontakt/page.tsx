"use client";

import type React from "react";
import { useState } from "react";

import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import HeaderKontakt from "../components/header_kontakt";
import Link from "next/link";

const Page = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        projectType: "",
        budget: "",
      });
    }, 3000);
  };

  return (
    <div className="grid grid-cols-[minmax(1px,0.5fr)_minmax(300px,6fr)_minmax(1px,0.5fr)] bg-black sm:grid-cols-[minmax(20px,0.7fr)_minmax(400px,5fr)_minmax(20px,0.7fr)] md:grid-cols-[minmax(30px,1fr)_minmax(500px,3fr)_minmax(30px,1fr)] lg:grid-cols-[1fr_5fr_1fr]">
      <HeaderKontakt />

      <div className="col-span-3 mt-8 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Porozmawiajmy o Twoim projekcie
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
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
                        Imię i nazwisko <span className="text-blue-500">*</span>
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
                      <select
                        id="projectType"
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white text-sm transition-all appearance-none"
                      >
                        <option value="" disabled className="bg-gray-900">
                          Wybierz rodzaj projektu
                        </option>
                        <option value="website" className="bg-gray-900">
                          Strona internetowa
                        </option>
                        <option value="ecommerce" className="bg-gray-900">
                          Sklep internetowy
                        </option>
                        <option value="webapp" className="bg-gray-900">
                          Aplikacja webowa
                        </option>
                        <option value="redesign" className="bg-gray-900">
                          Redesign istniejącej strony
                        </option>
                        <option value="other" className="bg-gray-900">
                          Inny
                        </option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-300"
                      >
                        Budżet
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white text-sm transition-all appearance-none"
                      >
                        <option value="" disabled className="bg-gray-900">
                          Wybierz przedział budżetowy
                        </option>
                        <option value="1500-3000" className="bg-gray-900">
                          1 500 - 3 000 zł
                        </option>
                        <option value="3000-5000" className="bg-gray-900">
                          3 000 - 5 000 zł
                        </option>
                        <option value="5000-10000" className="bg-gray-900">
                          5 000 - 10 000 zł
                        </option>
                        <option value="10000+" className="bg-gray-900">
                          Powyżej 10 000 zł
                        </option>
                      </select>
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
                    Dziękujemy za kontakt. Nasz zespół skontaktuje się z Tobą w
                    ciągu 24 godzin roboczych.
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
                <div className="flex items-start gap-3">
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

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Adres</p>
                    <p className="text-white">
                      ul. Przykładowa 123
                      <br />
                      00-000 Warszawa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Godziny pracy</p>
                    <p className="text-white">
                      Poniedziałek - Piątek
                      <br />
                      9:00 - 17:00
                    </p>
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
          className="bg-gradient-to-b from-transparent to-gray-900/50 py-16 px-4"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Zacznijmy razem
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
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
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
