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

  return (
    <div
      ref={container}
      className="h-screen flex      items-center w-full justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-10% + ${i * 25}px)`,
        }}
        className="w-full h-[500px]  rounded-xl bg-[#1a1a1a] border border-white/10 p-6 sm:p-[40px] flex flex-col origin-top relative shadow-lg"
      >
        <div className="flex  flex-col   xl:flex-row w-full h-full gap-6">
          <div className=" relative w-full xl:w-[60%] h-[60%] xl:h-full rounded-xl overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image
                src={src || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <div className="flex flex-col justify-start xl:justify-between w-full xl:w-[40%] h-[40%] xl:h-full">
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

            <div className="mt-6 flex justify-between items-center">
              <div
                className={cn(
                  "h-1 w-24 rounded-full",
                  color === "blue"
                    ? "bg-blue-500"
                    : color === "purple"
                    ? "bg-purple-500"
                    : "bg-white/30"
                )}
              ></div>
              <p></p>
              <button className="text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors flex items-center">
                View Project
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
