import { BRAND_NAME } from "@/utils/consts";
import React from "react";

const LandingAbout = () => {
  return (
    <section className="app-container py-[50px]">
      <header className="flex items-start justify-between gap-5 max-md:flex-col-reverse">
        <h2 className="uppercase max-w-1/2 max-md:max-w-full text-2xl font-costaline tracking-widest font-bold">
          We believe that photography is an art form that requires both
          technical skill and creativity
        </h2>
        <div className="w-full bg-primary-900 h-0.5 mt-3" />
        <h1 className="min-w-fit font-light">
          About{" "}
          <span className="font-costaline font-extrabold">{BRAND_NAME}</span>
        </h1>
      </header>
      <main className="flex items-end justify-between gap-10 max-lg:flex-col-reverse">
        <p className="flex-1 w-full text-primary-600">
          &quot;And they said yes.&quot; With those words, a beautiful journey
          begins, weaving two families together in an eternal bond. At Team Oh
          My Wed, we capture the pure joy of every marriage & making it a
          timeless memory filled with love, emotion, and magical moments. <br />{" "}
          <br />
          As an international wedding company, we bring an elegant touch to
          every detail, creating a wedding story that reflects the true essence
          of your love. On your special day, let go of everything else and
          immerse yourself in your fairytale dream.
        </p>
        <video
          controls={false}
          autoPlay
          muted
          loop
          className="flex-1 w-1/2 h-auto max-lg:w-3/4 max-lg:mx-auto max-lg:mt-4 max-md:w-full"
        >
          <source
            src="https://www.pexels.com/download/video/8776126/"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </main>
    </section>
  );
};

export default LandingAbout;
