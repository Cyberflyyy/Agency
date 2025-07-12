import Image from "next/image";
import { cn } from "../lib/utils";

type CardProps = {
  meta: string;
  title: string;
  items: string[];
  buttonText: string;
  src: string;
};

const NonStackingCard = ({
  meta,
  title,
  items,
  buttonText,
  src,
}: CardProps) => {
  return (
    <div className="mb-6 overflow-hidden  rounded-xl bg-[#1a1a1a] border border-white/10">
      {/* Obraz */}
      <div className="relative h-48 w-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Treść */}
      <div className="p-4">
        {/* meta */}
        <span className="block text-xs uppercase text-blue-400 mb-1">
          {meta}
        </span>

        {/* title */}
        <h3
          className={cn(
            "text-xl font-medium mb-4 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"
          )}
        >
          {title}
        </h3>

        {/* items */}
        <ul className="space-y-2 mb-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center text-white/70">
              <svg
                className="w-4 h-4 mr-2 text-white/50 flex-shrink-0"
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
              {item}
            </li>
          ))}
        </ul>

        {/* divider + button */}
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-500"
            )}
          />
          <button className="text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors flex items-center">
            {buttonText}
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
    </div>
  );
};

export default NonStackingCard;
