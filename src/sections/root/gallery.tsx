import { PHOTOS } from "@/utils/consts/photos";
import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const LandingGallery = () => {
  return (
    <section className="">
      <div className="app-container flex items-start justify-center gap-3 my-[200px]">
        <Quote
          className="text-accent-300 transform -rotate-y-180 -mt-[155px]"
          size={200}
        />
        <div>
          <h1 className="text-5xl font-secondary">
            Photography is the art of observation. It has little to do with the
            things you see and everything to do with the way you see them.
          </h1>
          <p className="text-primary-500">- Elliot Erwit</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-4">
        {PHOTOS.GALLERY.map((src, index) => (
          <div key={index} className="relative aspect-square overflow-hidden">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingGallery;
