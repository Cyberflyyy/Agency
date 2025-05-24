"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "../lib/utils";

type CardProps = {
  title: string;
  description: string;
  src: string;
  i: number;
  color: string;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>;
};

const Card = ({
  title,
  description,
  targetScale,
  range,
  progress,
  i,
  src,
  color,
}: CardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  const container = useRef(null);


  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });


  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);


  const offsetPx = useTransform(scrollYProgress, [0.5, 1], [-100, 0]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center w-full sticky top-0"
    >
      <motion.div
        style={{ scale, top: `calc(-10% + ${i * 25}px)` }}
        className="relative w-full h-[500px] bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden p-6 shadow-lg max-w-[1100px]"
      >

        <div className="relative z-10 w-[35%] h-full flex flex-col justify-between pr-6">
          <div>
            <h2
              className={cn(
                "text-xl sm:text-3xl font-medium mb-4",
                color === "blue"
                  ? "text-blue-400"
                  : color === "purple"
                  ? "text-purple-400"
                  : "text-white"
              )}
            >
              {title}
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <div
              className={cn(
                "h-1 w-24 rounded-full",
                color === "blue"
                  ? "bg-blue-500"
                  : color === "purple"
                  ? "bg-purple-500"
                  : "bg-white/30"
              )}
            />
            <button className="ml-4 text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors flex items-center">
              View Project
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          style={{

            bottom: offsetPx,
            right: offsetPx,
          }}
          className="absolute w-[65%] h-[90%] overflow-hidden rounded-tl-2xl"
        >
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <Image
              src={src || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
