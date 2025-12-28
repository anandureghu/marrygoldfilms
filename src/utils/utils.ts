import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind classes conditionally.
 * Example: cn("p-4", isActive && "bg-blue-500")
 */
export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export const generateContinousImageNames = (
  basePath: string,
  start: number,
  end: number,
  prefix: string = "IMG_",
  postfix: string = ""
) =>
  Array.from(
    { length: end - start + 1 },
    (_, i) => `${basePath}/${prefix}${start + i}${postfix}.webp`
  );
