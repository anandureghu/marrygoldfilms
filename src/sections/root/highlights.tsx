import { Plus } from "lucide-react";
import React from "react";

const highlights = [
  { value: "5", label: "countries shot on" },
  { value: "50", label: "successful works" },
  { value: "30", label: "happy clients" },
  { value: "5", label: "years of experience" },
];

const LandingHighlights = () => {
  return (
    <section className="border-y border-primary-500 py-20">
      <div className="app-container">
        <div className="grid grid-cols-2 md:grid-cols-4 max-md:gap-10 gap-3 text-left">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className={`flex flex-col justify-center items-center`}
            >
              <div className="flex items-center justify-center md:justify-start">
                <h1 className="text-5xl md:text-6xl font-costaline font-bold text-primary-900">
                  {highlight.value}
                </h1>
                <Plus
                  size={40}
                  className="text-primary-900 mb-1 ml-1 font-thin"
                />
              </div>
              <p className="text-neutral-700 text-sm md:text-base capitalize tracking-wide">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingHighlights;
