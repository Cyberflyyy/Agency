"use client";
import { useRef } from "react";
import { projects } from "../lib/data";
import Card from "./card";
import { useScroll } from "framer-motion";

const StackingCards = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className="border-b border-l border-r border-white/15 min-h-[500px] flex flex-col items-center justify-center p-4 sm:p-8 mt-[10vh]"
    >
      <h2 className="text-3xl font-bold text-white mb-12  pl-4 sm:pl-8">
        Featured Projects
      </h2>

      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={i}
            i={i}
            {...project}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
};

export default StackingCards;
