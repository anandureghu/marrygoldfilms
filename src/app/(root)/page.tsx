import LandingAbout from "@/sections/root/about";
import LandingContact from "@/sections/root/contact";
import LandingGallery from "@/sections/root/gallery";
import LandingHeader from "@/sections/root/header";
import LandingHighlights from "@/sections/root/highlights";
import LandingSchedule from "@/sections/root/schedule";
import LandingServices from "@/sections/root/services";
import LandingTestimonial from "@/sections/root/testimonial";
import React from "react";

const Home = () => {
  return (
    <main>
      <LandingHeader />
      <LandingAbout />
      <LandingServices />
      <LandingGallery />
      <LandingTestimonial />
      <LandingHighlights />
      <LandingContact />
      <LandingSchedule />
    </main>
  );
};

export default Home;
