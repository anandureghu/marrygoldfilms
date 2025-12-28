"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label="Go back"
      className="
        fixed
        top-6
        left-6
        z-50
        w-12
        h-12
        rounded-full
        bg-white
        text-black
        shadow-lg
        flex
        items-center
        justify-center
        hover:scale-105
        transition-transform
      "
    >
      ←
    </button>
  );
}
