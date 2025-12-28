"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VIDEOS } from "@/utils/consts/video";

const AboutVideos = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const total = VIDEOS.ABOUT_US.length;

  const nextVideo = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevVideo = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  // Auto play next video when one ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    video.play();

    video.onended = nextVideo;

    return () => {
      video.onended = null;
    };
  }, [current]);

  return (
    <div className="relative flex-1 w-1/2 max-lg:w-3/4 max-md:w-full mx-auto h-[300px]">
      <video
        ref={videoRef}
        key={VIDEOS.ABOUT_US[current]}
        autoPlay
        muted
        playsInline
        className="w-full h-auto rounded-lg"
      >
        <source src={VIDEOS.ABOUT_US[current]} type="video/mp4" />
      </video>

      {/* LEFT ARROW */}
      <button
        onClick={prevVideo}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
      >
        <ChevronLeft size={22} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextVideo}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
};

export default AboutVideos;
