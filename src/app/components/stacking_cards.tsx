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
      id="realizacje"
      className="border-b border-l   border-r border-white/15 min-h-[500px] flex flex-col items-center justify-center mt-8 p-4 sm:p-8 "
    >
      <h2 className="text-5xl  font-bold text-white ">Nasze Realizacje</h2>

      {projects.map((p, i) => (
        <Card
          key={i}
          meta={p.meta}
          title={p.title}
          items={p.items}
          buttonText={p.buttonText}
          src={p.src}
          i={i}
          range={[0, 1]}
          targetScale={1.05}
          progress={scrollYProgress}
        />
      ))}


    </div>
  );
};

export default StackingCards;
