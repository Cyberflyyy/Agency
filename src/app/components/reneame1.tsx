"use client";
import React, { useEffect, useState } from "react";
import LeftSection from "./left_section";
import RightSection from "./right_section";
interface FAQ {
  id: number;
  question: string;
  answer: string;
  order_number: number;
  category: string;
}
const Rename1 = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
    {
      id: 6,
      question: "Czy mogę później samodzielnie edytować stronę?",
      answer:
        "Tak! Tworzymy strony w systemach, które pozwalają na łatwą edycję treści, np. WordPress lub własny panel administracyjny.",
      order_number: 5,
      category: "Współpraca",
    },
  ];

  return (
    <>
      {windowWidth < 900 ? (
        <>
          <LeftSection></LeftSection>
          <section
            id="faq"
            className="coll-span-3 border-b border-white/15 min-h-[1000px]  flex flex-col items-center justify-center "
          >
            <h2 className="text-3xl  md:text-4xl xl:text-5xl mt-8 font-bold mb-8 text-center">
              <span className=" ">Często zadawane pytania</span>
            </h2>

            <div className=" flex flex-col xl:flex-row   flex-1  w-full  ">
              <div className="flex-1 flex flex-col   ">
                {localFAQs.slice(0, 3).map((item) => (
                  <article
                    key={item.id}
                    className={` flex flex-col p-4 xl:pr-8  items-start xl:pl-28 justify-center  border-b border-t border-r flex-1 border-white/15 `}
                  >
                    <h3 className="text-xl xl:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-500  bg-clip-text text-transparent transition-colors duration-200">
                      {item.question}
                    </h3>
                    <p className="text-gray-300 whitespace-pre-wrap pt-2">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
              <div className=" flex-1  flex flex-col  ">
                {localFAQs.slice(3, 6).map((item) => (
                  <article
                    key={item.id}
                    className={` flex flex-col p-4   xl:pr-8 items-start xl:pl-28 justify-center flex-1 border-t border-b border-white/15  `}
                  >
                    <h3 className="text-xl xl:text-2xl  font-semibold bg-gradient-to-r from-blue-400 to-blue-500  bg-clip-text text-transparent transition-colors duration-200">
                      {item.question}
                    </h3>

                    <p className="text-gray-300 whitespace-pre-wrap pt-2">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <RightSection></RightSection>
        </>
      ) : (
        <div className="col-span-3">
          <LeftSection></LeftSection>
          <section
            id="faq"
            className="coll-span-3 border-b border-white/15 min-h-[1000px]  flex flex-col items-center justify-center "
          >
            <h2 className="text-3xl  md:text-4xl xl:text-5xl mt-8 font-semibold mb-8 text-center">
              <span className="">Często zadawane pytania</span>
            </h2>

            <div className=" flex flex-col xl:flex-row   flex-1  w-full  ">
              <div className="flex-1 flex flex-col   ">
                {localFAQs.slice(0, 3).map((item) => (
                  <article
                    key={item.id}
                    className={` flex flex-col p-4 xl:pr-8  items-start xl:pl-28 justify-center  border-b border-t border-r flex-1 border-white/15 `}
                  >
                    <h3 className="text-xl xl:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-blue-500  bg-clip-text text-transparent transition-colors duration-200">
                      {item.question}
                    </h3>
                    <p className="text-gray-300 whitespace-pre-wrap pt-2">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
              <div className=" flex-1  flex flex-col  ">
                {localFAQs.slice(3, 6).map((item) => (
                  <article
                    key={item.id}
                    className={` flex flex-col p-4   xl:pr-8 items-start xl:pl-28 justify-center flex-1 border-t border-b border-white/15  `}
                  >
                    <h3 className="text-xl xl:text-2xl  font-semibold  bg-gradient-to-r from-blue-400 to-blue-500  bg-clip-text text-transparent  transition-colors duration-200">
                      {item.question}
                    </h3>

                    <p className="text-gray-300 whitespace-pre-wrap pt-2">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <RightSection></RightSection>
        </div>
      )}
    </>
  );
};

export default Rename1;
