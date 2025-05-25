import Image from "next/image";
import { cn } from "../lib/utils";

type CardProps = {
  title: string;
  description: string;
  src: string;
};

const NonStackingCard = ({ title, description, src }: CardProps) => {
  return (
    <div className="mb-6 overflow-hidden rounded-xl bg-[#1a1a1a] border border-white/10">
      <div className="relative h-48 w-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3
          className={cn(
            "text-xl font-medium mb-2 bg-gradient-to-r from-blue-400 to-blue-500  bg-clip-text text-transparent"
          )}
        >
          {title}
        </h3>

        <p className="text-white/70 text-sm leading-relaxed">{description}</p>

        <div className="mt-4 flex justify-between items-center">
          <div
            className={cn(
              "h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-500   "
            )}
          ></div>

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
  );
};

export default NonStackingCard;
