import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value?: number | null) {
  if (value === null || value === undefined) return "Price varies";
  return `$${value.toFixed(2)}`;
}
