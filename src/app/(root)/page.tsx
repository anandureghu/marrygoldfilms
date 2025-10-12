import LandingAbout from "@/sections/root/about";
import LandingHeader from "@/sections/root/header";
import LandingServices from "@/sections/root/services";
import React from "react";

const Home = () => {
  return (
    <main>
      <LandingHeader />
      <LandingAbout />
      <LandingServices />
    </main>
  );
};

export default Home;
