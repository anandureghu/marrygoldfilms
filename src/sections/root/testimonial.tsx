"use client";

import { PHOTOS } from "@/utils/consts/photos";
import { Quote, ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah & John Stewart",
    text: "Marry Gold Films captured our wedding day perfectly. We were blown away by the quality of the photos and the attention to detail that was put into each shot. They truly captured the essence of our special day and we will cherish the photos forever.",
    image: PHOTOS.TESTIMONIAL[0],
  },
  {
    name: "Anita Thomas",
    text: "They made me feel completely comfortable during the shoot. The photos turned out so natural and full of emotion — truly timeless memories.",
    image: PHOTOS.TESTIMONIAL[1],
  },
  {
    name: "Priya & Arjun",
    text: "From concept to final delivery, everything was handled with such professionalism. Every photo tells our story beautifully.",
    image: PHOTOS.TESTIMONIAL[2],
  },
];

const LandingTestimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => nextTestimonial(), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="app-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-costaline font-bold text-primary-900 mb-8 max-sm:text-center">
            Testimonial
          </h2>

          <div className="flex items-start gap-3 mt-20 relative z-10">
            <Quote
              className="text-neutral-400 mb-4 transform -translate-y-full -scale-x-100"
              size={60}
            />

            <div>
              <p
                key={activeIndex}
                className="text-neutral-600 leading-relaxed mb-6 transition-opacity duration-700"
              >
                {testimonials[activeIndex].text}
              </p>

              <p className="text-neutral-800 font-medium">
                {testimonials[activeIndex].name}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Responsive Layout */}
        <div className="flex flex-col items-center gap-6 mt-12 lg:mt-0 w-full">
          {/* DESKTOP/TABLET - absolute position */}
          <div className="hidden lg:flex flex-col items-center gap-6 absolute right-0 top-1/2 -translate-y-1/2">
            {/* Arrow buttons (desktop) */}
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={prevTestimonial}
                className="p-2 border rounded-full text-accent-400 hover:text-accent-600 transition"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 border rounded-full text-accent-400 hover:text-accent-600 transition"
              >
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Image carousel */}
            <div className="flex items-center justify-end gap-3">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden transition-all duration-500 h-40 ${
                    i === activeIndex ? "opacity-100 w-48" : "opacity-50 w-28"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE layout — stacked below text */}
          <div className="flex flex-col lg:hidden items-center justify-center gap-4 w-full">
            <div className="flex items-center justify-center gap-3">
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden transition-all duration-500 h-40  ${
                    i === activeIndex ? "opacity-100 w-44" : "opacity-50 w-28"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="p-2 border rounded-full text-accent-400 hover:text-accent-600 transition"
              >
                <ArrowLeft size={20} />
              </button>

              <button
                onClick={nextTestimonial}
                className="p-2 border rounded-full text-accent-400 hover:text-accent-600 transition"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonial;
