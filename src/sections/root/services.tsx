import { SERVICES } from "@/utils/consts";
import { cn } from "@/utils/utils";
import Image from "next/image";
import React from "react";

const LandingServices = () => {
  return (
    <section className="app-container py-[50px]">
      <header className="mb-10">
        <h1 className="font-costaline text-3xl font-bold text-center">
          Our Services
        </h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {SERVICES.map((service) => {
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
                  className={cn(
                    "object-cover transition-transform duration-500 group-hover:scale-105",
                    service.position
                  )}
                />
              </div>
              <h2 className="pt-6 pb-2 px-2 text-xl font-highlight font-medium text-primary-600">
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
