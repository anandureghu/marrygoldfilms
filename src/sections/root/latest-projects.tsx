"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { LATEST_PROJECTS } from "@/utils/consts";
import { cn } from "@/utils/utils";

const LandingLatestProjects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
    scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#6b6054] py-16 text-white relative overflow-hidden">
      <div className="app-container">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold font-costaline">
            Our Latest Projects
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-white/50 rounded-full hover:bg-white/10"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-white/50 rounded-full hover:bg-white/10"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[2px] bg-white/30 mb-8"></div>

      {/* Projects Slider */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar ml-[10%] pr-[10%]"
      >
        {LATEST_PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className={cn(
              "relative overflow-hidden transition-all duration-500 transform group",
              active == i ? "min-w-[600px] z-20" : "min-w-[300px] z-10"
            )}
            onMouseEnter={() => setActive(i)}
          >
            {/* Shadow Layer on Left Side */}
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />

            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={500}
              className="object-cover w-full h-[450px] transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-6 z-20">
              <p className="text-sm text-gray-200">{project.id}</p>
              <p className="text-xs uppercase tracking-wide text-gray-300 mt-1">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold mt-1 font-costaline">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">{project.client}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingLatestProjects;
