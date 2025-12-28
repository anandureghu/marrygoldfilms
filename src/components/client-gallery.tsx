"use client";

import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "./image-light-box";

type Props = {
  images: string[];
  title: string;
};

export default function ClientGallery({ images, title }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid cursor-zoom-in"
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={src}
              alt={`${title} ${index + 1}`}
              width={800}
              height={1200}
              className="w-full rounded-lg hover:opacity-90 transition"
            />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <ImageLightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onChange={setActiveIndex}
          title={title}
        />
      )}
    </>
  );
}
