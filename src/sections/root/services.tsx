import { PHOTOS } from "@/utils/consts/photos";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Weddings & Engagements",
    image: PHOTOS.OUR_SERVICES[0],
  },
  {
    title: "Family Portraits",
    image: PHOTOS.OUR_SERVICES[1],
  },
  {
    title: "Maternity & Newborns",
    image: PHOTOS.OUR_SERVICES[2],
  },
  {
    title: "Corporate Photography",
    image: PHOTOS.OUR_SERVICES[3],
  },
  {
    title: "Real Estate Photography",
    image: PHOTOS.OUR_SERVICES[4],
  },
  {
    title: "Product & Commercial",
    image: PHOTOS.OUR_SERVICES[5],
  },
];

const LandingServices = () => {
  return (
    <section className="app-container py-[50px]">
      <header className="mb-10">
        <h1 className="font-costaline text-3xl font-bold text-center">
          Our Services
        </h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => {
          return (
            <div
              key={service.title}
              className="group relative bg-primary-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="pt-6 pb-2 px-2 text-xl font-secondary font-medium text-primary-600">
                {service.title}
              </h2>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default LandingServices;
