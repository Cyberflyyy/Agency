import LeftSection from "./left_section"
import RightSection from "./right_section"
import { Code, Database, Layout, Rocket, Server, Zap } from "lucide-react"

const AboutUs = () => {
  return (
    <>
      <LeftSection />
      <div className="border-b border-t border-l border-r border-white/15 min-h-[500px] flex flex-col items-center justify-center p-8">
        <div className="w-full flex items-center justify-center mb-12">
          <h1 className="text-4xl font-bold  text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Zajmujemy się wszystkim co potrzebne do napisania strony którą potrzebujesz.
            <br />
            <span className="text-3xl  font-orbitron   ">Oszczędzająć twoj czas i zmartwienia.</span>
          </h1>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row gap-8">
          <div className="w-full  md:w-1/2 h-full space-y-14">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <h2 className="text-xl  font-medium text-white mb-3">
                Od pomysłu po wdrożenie – kompleksowo prowadzimy każdy etap projektu, dbając o płynność i bezproblemowy
                przebieg prac, abyś Ty mógł skupić się na rozwoju swojego biznesu.
              </h2>
            </div>
            <div className="bg-white/5 p-6  rounded-lg backdrop-blur-sm border  border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <h2 className="text-xl font-medium text-white mb-3">
                Jesteśmy doświadczonymi programistami, którym możesz powierzyć realizację nawet najbardziej wymagających
                pomysłów – sprawnie, profesjonalnie i bez zbędnych komplikacji.
              </h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full">
            <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Nasz Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
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
                    className="flex items-start gap-3 bg-black/20 p-3 rounded-lg hover:bg-black/40 transition-all duration-300"
                  >
                    {tech.icon}
                    <div>
                      <h4 className="font-medium text-white">{tech.name}</h4>
                      <p className="text-white/70 text-sm">{tech.desc}</p>
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
  )
}

export default AboutUs
