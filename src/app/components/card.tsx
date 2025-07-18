"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

type CardProps = {
  meta: string;
  title: string;
  items: string[];
  buttonText: string;
  src: string;
  i: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
};

const Card = ({
  meta,
  title,
  items,
  buttonText,
  src,
  i,
  range,
  targetScale,
  progress,
}: CardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const rawImageScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const rawOffset = useTransform(scrollYProgress, [0, 1], [30, 0]);

  const imageScale = useSpring(rawImageScale, { stiffness: 90, damping: 20 });
  const offsetX = useSpring(rawOffset, { stiffness: 90, damping: 20 });
  const offsetY = useSpring(rawOffset, { stiffness: 90, damping: 20 });

  return (
    <div
      ref={ref}
      className="h-screen w-full sticky top-0 flex items-center justify-center"
    >
      <motion.div
        style={{ scale, top: `calc(-10% + ${i * 25}px)` }}
        className="relative w-full max-w-[1100px] h-[500px] bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden p-8 shadow-lg grid grid-cols-[35%_65%]"
      >
        {/* LEWA KOLUMNA */}
        <div className="flex flex-col justify-center pr-8">
          <span className="text-xs uppercase text-blue-400 font-medium mb-2">
            {meta}
          </span>
          <h2 className="font-semibold text-4xl leading-tight text-white mb-4">
            {title}
          </h2>
          <div className="w-20 h-px bg-white/20 mb-6" />
          <ul className="space-y-4 mb-8">
            {items.map((text, idx) => (
              <li key={idx} className="flex items-center text-white/70">
                <svg
                  className="w-5 h-5 mr-3 text-white/50 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {text}
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group py-2 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm rounded-lg transition-all duration-200 shadow-md shadow-blue-500/20 flex items-center justify-center gap-1"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="font-medium">{buttonText}</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* PRAWA KOLUMNA – obraz zsynchronizowany i płynny */}
        <motion.div
          style={{ scale: imageScale, x: offsetX, y: offsetY }}
          className="absolute bottom-0 right-0 w-[64%] h-[90%] overflow-hidden rounded-tl-2xl"
        >
          <Image src={src} alt={title} fill className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
