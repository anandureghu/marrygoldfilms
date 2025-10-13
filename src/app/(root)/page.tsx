import LandingAbout from "@/sections/root/about";
import LandingGallery from "@/sections/root/gallery";
import LandingHeader from "@/sections/root/header";
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
    </main>
  );
};

export default Home;
