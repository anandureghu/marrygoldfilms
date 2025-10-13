import { PHOTOS } from "@/utils/consts/photos";
import { CircleArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";

const LandingContact = () => {
  return (
    <section className="bg-accent-500 pt-20 md:pt-[100px] overflow-hidden">
      <div className="app-container flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left text section */}
        <div className="flex-1 text-center md:text-left flex flex-col items-start max-md:items-center gap-5 pb-[70px]">
          <CircleArrowRight
            strokeWidth={0.5}
            className="text-accent-300 -rotate-45"
            size={50}
          />
          <h1 className="text-primary-50 text-4xl md:text-5xl font-costaline font-bold leading-tight md:leading-[1.2] relative z-50 text-shadow-md">
            Contact us now <br /> to learn more
          </h1>
          <button className="block bg-primary-950 p-3 px-7 mt-4 capitalize text-primary-50">
            Contat now
          </button>
        </div>

        {/* Right image section */}
        <div className="relative flex-1 w-full max-w-[500px] aspect-[4/3]">
          {/* Image */}
          <Image
            src={PHOTOS.CONTACT}
            alt="contact-us"
            fill
            className="object-cover rounded-lg relative z-10"
          />

          {/* Decorative circle */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-accent-400 rounded-full z-[0] right-1/2 md:right-0 transform translate-x-1/2 md:translate-x-[60px] -translate-y-[100px]">
            <div className="w-full h-full rounded-full relative">
              <Sparkles className="text-accent-300 absolute right-0 top-1/2 transform translate-x-[30px] translate-y-[60px] z-30" />
              <Sparkles
                className="text-accent-300 absolute left-0 top-[40%] transform -translate-x-[30px] -translate-y-[60px] z-30 rotate-12"
                size={40}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingContact;
