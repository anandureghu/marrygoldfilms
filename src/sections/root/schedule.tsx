import { BRAND_NAME } from "@/utils/consts";
import React from "react";
import BookingForm from "./booking-form";

const LandingSchedule = () => {
  return (
    <section
      className="bg-cover backdrop-blur-2xl py-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.4)), url(/assets/images/schedule.webp)",
      }}
    >
      <div className="app-container">
        <header className="capitalize flex items-start flex-wrap mx-auto justify-between gap-6 text-accent-800 text-shadow-2xl">
          <h1 className="text-4xl font-costaline font-bold">
            schedule your <br />
            photography session
          </h1>
          <div className="flex flex-col gap-5">
            <h2>
              Choose your service and date and let{" "}
              <span className="font-costaline font-bold">{BRAND_NAME}</span>{" "}
              Help you create Beautiful memmories
            </h2>
            <BookingForm />
          </div>
        </header>
      </div>
    </section>
  );
};

export default LandingSchedule;
