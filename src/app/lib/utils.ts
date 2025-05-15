import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Łączy klasy CSS, automatycznie obsługując konflikty Tailwind CSS.
 * Przykład:
 * cn("p-2", condition && "bg-red-500") → "p-2 bg-red-500" (jeśli condition jest true)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
