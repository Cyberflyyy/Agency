import LeftSection from "./left_section";
import RightSection from "./right_section";
import { Code, Database, Layout, Rocket, Server, Zap } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <LeftSection />
      <div className="border-b border-t border-l border-r border-white/15 min-h-[500px] flex flex-col items-center justify-center p-4 sm:p-6 xl:p-8">
        {/* Heading section - improved styling */}
        <div className="w-full flex flex-col items-center justify-center mb-6 sm:mb-8 xl:mb-12">
          <span className="text-2xl sm:text-3xl xl:text-4xl font-medium  mb-2 sm:mb-4">
            Dlaczego my ?
          </span>
          <h1 className="text-xl sm:text-2xl xl:text-4xl font-bold text-center px-2 max-w-4xl">
            <span className="block mb-2">
              Zajmujemy się wszystkim co potrzebne do napisania strony którą
              potrzebujesz.
            </span>
            <span className="text-xl sm:text-xl xl:text-3xl block text-white/80">
              Oszczędzająć twoj czas i zmartwienia.
            </span>
          </h1>
        </div>

        {/* Main content - keeping desktop layout, improving mobile */}
        <div className="w-full h-full flex flex-col xl:flex-row gap-4 sm:gap-6 xl:gap-8">
          {/* Left column */}
          <div className="w-full xl:w-1/2 h-full space-y-4 sm:space-y-8 xl:space-y-14">
            <div className="bg-white/5 p-3 sm:p-4 xl:p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <h2 className="text-base sm:text-xl xl:text-xl font-medium text-white">
                Od pomysłu po wdrożenie – kompleksowo prowadzimy każdy etap
                projektu, dbając o płynność i bezproblemowy przebieg prac, abyś
                Ty mógł skupić się na rozwoju swojego biznesu.
              </h2>
            </div>
            <div className="bg-white/5 p-3 sm:p-4 xl:p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <h2 className="text-base sm:text-xl xl:text-xl font-medium text-white">
                Jesteśmy doświadczonymi programistami, którym możesz powierzyć
                realizację nawet najbardziej wymagających pomysłów – sprawnie,
                profesjonalnie i bez zbędnych komplikacji.
              </h2>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full xl:w-1/2 h-full mt-4 xl:mt-0">
            <div className="bg-white/5 p-3 sm:p-4 xl:p-6 rounded-xl backdrop-blur-sm border border-white/10 h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 xl:mb-6">
                Nasz Tech Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 xl:gap-4">
                {[
                  {
                    icon: (
                      <Rocket className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8 text-purple-400" />
                    ),
                    name: "Next.js",
                    desc: "Framework React dla nowoczesnych aplikacji",
                  },
                  {
                    icon: (
                      <Layout className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8 text-cyan-400" />
                    ),
                    name: "Tailwind CSS",
                    desc: "Utility-first CSS dla szybkiego projektowania",
                  },
                  {
                    icon: (
                      <Database className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8 text-emerald-400" />
                    ),
                    name: "Prisma",
                    desc: "Zaawansowana baza danych relacyjna",
                  },
                  {
                    icon: (
                      <Server className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8 text-amber-400" />
                    ),
                    name: "Node.js",
                    desc: "Środowisko uruchomieniowe JavaScript",
                  },
                  {
                    icon: (
                      <Code className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8 text-rose-400" />
                    ),
                    name: "TypeScript",
                    desc: "Typowany JavaScript dla lepszej jakości kodu",
                  },
                  {
                    icon: (
                      <Zap className="h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8 text-blue-400" />
                    ),
                    name: "Vercel",
                    desc: "Platforma do wdrażania aplikacji webowych",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2  sm:gap-3 bg-black/20 p-2 sm:p-3 rounded-xl hover:bg-black/40 transition-all duration-300"
                  >
                    {tech.icon}
                    <div>
                      <h4 className="font-medium text-white text-sm sm:text-base">
                        {tech.name}
                      </h4>
                      <p className="text-white/70 text-xs sm:text-sm">
                        {tech.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightSection />
    </>
  );
};

export default AboutUs;
