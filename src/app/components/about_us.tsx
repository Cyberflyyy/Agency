import Image from "next/image";
import LeftSection from "./left_section";
import RightSection from "./right_section";
import { Code, Database, Layout, Rocket, Server, Zap } from "lucide-react";
import { GlowingEffect } from "./glowing-effect";

const AboutUs = () => {
  return (
    <>
      <LeftSection />
      <div
        id="onas"
        className="border border-white/15 min-h-[500px] flex flex-col items-center justify-center px-8 sm:px-6 xl:px-8 py-[150px]"
      >
        {/* Heading section - improved styling */}
        <div className="w-full flex flex-col items-center justify-center mb-6 sm:mb-8 xl:mb-12">
          <h1 className="text-2xl sm:text-4xl xl:text-4xl font-extrabold text-center px-2 sm:px-4 max-w-4xl leading-tight">
            <span className="block">Noweczesne Technologie </span>
            <span className="block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Gwarantujące Sukces
            </span>
          </h1>
        </div>
        {/* Squares and wide rectangle below */}
        <div className="w-full flex  flex-col xl:grid xl:grid-cols-2 gap-2 sm:gap-3 xl:gap-4">
          {/* Top-left square */}
          <div className="relative border border-white/15 bg-[#1a1a1a]/80 backdrop-blur-sm transition-all duration-300 rounded-2xl xl:rounded-tl-2xl flex flex-col ">
            <GlowingEffect glow={true} disabled={false} spread={30} />
            <div className="relative z-10 px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-2xl  font-semibold  tracking-tight  bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent max-lg:text-center">
                Wydajność
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                Zapewniamy najwyższą wydajność, by Twoi użytkownicy zawsze
                cieszyli się płynną pracą strony internetowej.
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 pt-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
              <Image
                className="w-full max-w-[330px]"
                src="/colored-logo.png"
                alt="Performance illustration"
                width={400}
                height={250}
                style={{ width: "100%", height: "auto" }}
                unoptimized
              />
            </div>
          </div>

          {/* Top-right card with code preview */}
          <div className="relative border  border-white/15 bg-[#1a1a1a]/80 backdrop-blur-sm transition-all duration-300 rounded-2xl xl:rounded-tr-2xl  flex flex-col">
            <GlowingEffect glow={true} disabled={false} spread={30} />
            <div className="relative z-10 px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <p className="mt-2 text-2xl font-semibold  tracking-tight  bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent  max-lg:text-center">
                Kod i Jakość
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center">
                Tworzymy czysty i skalowalny kod – każdy projekt dopasowujemy
                ściśle do potrzeb Twojego biznesu.
              </p>
            </div>
            <div className="relative min-h-[15rem] w-full grow overflow-hidden rounded-2xl xl:rounded-bl-2xl xl:rounded-br-2xl">
              <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                      NotificationSetting.jsx
                    </div>
                    <div className="border-r border-gray-600/10 px-4 py-2">
                      App.jsx
                    </div>
                  </div>
                </div>
                <pre
                  className="language-jsx text-sm text-gray-100 p-4  h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-b-xl overflow-hidden
                "
                >
                  {`function NotifyButton() {
  return (
    <button
      className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white"
      >
        Enable Notifications
         </button>
       )
     }

  export default NotifyButton;`}
                </pre>
              </div>
            </div>
          </div>

          {/* Bottom-wide rectangle spanning two columns */}

          <div className="relative col-span-2 border border-white/20 rounded-2xl xl:rounded-bl-2xl xl:rounded-br-2xl">
            <GlowingEffect
              glow
              className="rounded-2xl xl:rounded-bl-2xl xl:rounded-br-2xl z-10"
              disabled={false}
              borderWidth={2}
              spread={30}
            />
            <div className="relative z-10 bg-[#1a1a1a]  backdrop-blur-sm transition-all duration-300 p-3 sm:p-4 xl:p-6 w-full flex flex-col rounded-2xl xl:rounded-bl-2xl xl:rounded-br-2xl">
              <div className="ml-2">
                <p className="mt-2 font-semibold text-2xl  border-white/15 tracking-tight  bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent  max-lg:text-center">
                  Nasz Tech Stack
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-white max-lg:text-center mb-6">
                  Oferujemy pełne wsparcie i nowoczesne rozwiązania, które
                  pomogą Ci osiągnąć sukces szybciej i efektywniej.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 flex-1 rounded-2xl overflow-hidden ">
                {[
                  {
                    icon: <Rocket className="h-8 w-8 text-purple-400" />,
                    name: "Next.js",
                    desc: "Framework React dla nowoczesnych aplikacji",
                  },
                  {
                    icon: <Layout className="h-8 w-8 text-cyan-400" />,
                    name: "Tailwind CSS",
                    desc: "Utility-first CSS dla szybkiego projektowania",
                  },
                  {
                    icon: <Database className="h-8 w-8 text-emerald-400" />,
                    name: "Prisma",
                    desc: "Zaawansowana baza danych relacyjna",
                  },
                  {
                    icon: <Server className="h-8 w-8 text-amber-400" />,
                    name: "Node.js",
                    desc: "Środowisko uruchomieniowe JavaScript",
                  },
                  {
                    icon: <Code className="h-8 w-8 text-rose-400" />,
                    name: "TypeScript",
                    desc: "Typowany JavaScript dla lepszej jakości kodu",
                  },
                  {
                    icon: <Zap className="h-8 w-8 text-blue-400" />,
                    name: "Vercel",
                    desc: "Platforma do wdrażania aplikacji webowych",
                  },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center gap-1 bg-gradient-to-br from-gray-800 to-gray-700 p-3 hover:from-gray-700 hover:to-gray-600 transition-all duration-300"
                  >
                    {tech.icon}
                    <h4 className="font-medium text-white text-sm sm:text-base">
                      {tech.name}
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm">
                      {tech.desc}
                    </p>
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
