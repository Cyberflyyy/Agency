"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

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
      className="h-screen flex items-center w-full justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          backgroundColor: "#2a2a2a",
          top: `calc(-10% + ${i * 25}px)`,
        }}
        className="w-full h-[500px] rounded-[25px] p-6 sm:p-[50px] flex flex-col origin-top relative"
      >
        <div className="flex flex-col md:flex-row w-full h-full gap-6">
          {/* Image container - responsive width */}
          <div className="relative w-full md:w-[60%] h-[60%] md:h-full rounded-[25px] overflow-hidden">
            <motion.div style={{ scale: imageScale }} className="w-full h-full">
              <Image
                src={src || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-start md:justify-center w-full md:w-[40%] h-[40%] md:h-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
            <p className="text-sm sm:text-base opacity-80">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
