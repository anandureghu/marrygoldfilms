import React from "react";

const LandingHeader = () => {
  return (
    <header className="h-screen relative">
      <div
        className="absolute w-full h-full top-0 left-0 bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/2959196/pexels-photo-2959196.jpeg)",
        }}
      />
      <main className="relative z-10 app-container flex items-start justify-center w-full h-dvh flex-col">
        <h1 className="text-primary-50 text-6xl font-costaline tracking-wider leading-snug">
          Capture Life&apos;s <br /> Moments With <br />{" "}
          <strong>Marry Gold Films</strong>
        </h1>
        <div className="w-full flex flex-col items-end justify-center">
          <div className="text-primary-50/70 text-lg">
            a team of passionate photographers <br /> dedicated to capturing
            life&apos;s <br />
            precious moments
            <button className="block bg-primary-950 p-3 px-7 mt-4 capitalize">
              book a session now
            </button>
          </div>
        </div>
      </main>
    </header>
  );
};

export default LandingHeader;
