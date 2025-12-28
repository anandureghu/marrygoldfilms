"use client";

import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rini & Vishnu",
    text: `We were absolutely thrilled with the exceptional photography services provided by Mr. Jithin and the team at Marry Gold Films during our special day.

From the initial consultation to the final delivery of our stunning wedding album, Marry Gold Films exceeded our expectations in every way.

Their professionalism, creativity, and attention to detail ensured that every moment of our wedding was beautifully captured. Our families and friends are still raving about the incredible photos!

Five stars isn’t enough—we’d give Marry Gold Films ten stars if we could!`,
  },
  {
    name: "Viswajith & Aiswarya",
    text: `A huge thank you to the entire crew for the amazing job you did capturing our wedding day.

The photos and videos are absolutely stunning. You truly captured the joy, emotion, and magic of the day.

Every member of the team was professional, kind, and easy to work with. We’ll be recommending Marry Gold Films to anyone looking for the best in the business.`,
  },
  {
    name: "Aiswarya Rakesh",
    text: `After my engagement shoot, I didn’t have to think twice about choosing Marry Gold Films for my wedding.

The team was highly professional and made us feel comfortable throughout the process. Every special moment was captured beautifully, full of emotion and magic.

A special thanks to Melvin—because of him, I came across Marry Gold Films!`,
  },
  {
    name: "Sandra & Karthik",
    text: `Marry Gold Films captured so many beautiful, real moments throughout the day.

The photos don’t just look stunning—they tell the story perfectly, from laughter to happy tears.

I’d recommend them in a heartbeat to anyone looking for a talented photographer who’s also a joy to work with.`,
  },
  {
    name: "Rajeev & Sree Lakshmi",
    text: `Marry Gold Films made our special day truly memorable.

Their communication was excellent, the team was extremely professional, and every priceless moment was captured beautifully.

The album quality is premium and absolutely stunning. We’ll definitely recommend Team MGF to others!`,
  },
  {
    name: "Dr. Jerry & Dr. Divya",
    text: `The photography team delivered exceptional work from concept to execution.

Their professionalism, punctuality, and artistic vision were impressive. Every shot was thoughtfully composed and beautifully edited.

Special mention to Melvin for making the entire process smooth and stress-free. Highly recommended!`,
  },
];

const MAX_HEIGHT = 220; // px – keeps layout stable
const AUTO_DELAY = 6000;

export default function LandingTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length);
    }, AUTO_DELAY);
  };

  const prev = () => {
    setExpanded(false);
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    resetTimer();
  };

  const next = () => {
    setExpanded(false);
    setActiveIndex((i) => (i + 1) % testimonials.length);
    resetTimer();
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  // Detect overflow
  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > MAX_HEIGHT);
    }
  }, [activeIndex]);

  return (
    <section className="py-28 bg-white">
      <div className="app-container max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-costaline font-bold text-primary-900 mb-16">
          Testimonials
        </h2>

        <Quote
          size={72}
          className="mx-auto mb-8 text-neutral-300 -scale-x-100"
        />

        {/* TEXT CONTAINER */}
        <div
          className={`relative transition-opacity duration-500`}
          key={activeIndex}
        >
          <div
            ref={textRef}
            className={`text-neutral-600 leading-relaxed whitespace-pre-line px-2
              ${
                expanded
                  ? "max-h-none"
                  : `max-h-[${MAX_HEIGHT}px] overflow-y-auto`
              }
            `}
            style={!expanded ? { maxHeight: MAX_HEIGHT } : undefined}
          >
            {testimonials[activeIndex].text}
          </div>

          {/* SHOW MORE */}
          {isOverflowing && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-4 text-sm text-accent-600 hover:underline"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        {/* NAME */}
        <p className="mt-6 font-medium text-neutral-800">
          — {testimonials[activeIndex].name}
        </p>

        {/* NAVIGATION */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="p-3 rounded-full border text-accent-400 hover:text-accent-600 transition"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={next}
            className="p-3 rounded-full border text-accent-400 hover:text-accent-600 transition"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* COUNTER */}
        <div className="mt-6 text-sm text-neutral-400">
          {activeIndex + 1} / {testimonials.length}
        </div>
      </div>
    </section>
  );
}
