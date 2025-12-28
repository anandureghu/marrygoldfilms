import { Quote } from "lucide-react";

const YOUTUBE_VIDEOS = [
  "V3tQjjlc5Vk",
  "P1BTJ1dDDb8",
  "LuCv3lMDNTU",
  "v0LSGYLUBZQ",
  "iFt9DWX6m9Q",
  "DqGPUqSVdaM",
];

const LandingGallery = () => {
  return (
    <section>
      {/* Quote Section */}
      <div className="app-container flex items-start justify-center gap-3 my-[200px]">
        <Quote
          className="text-accent-300 transform -rotate-y-180 -mt-[155px]"
          size={200}
        />
        <div>
          <h1 className="text-5xl font-secondary">
            Photography is the art of observation. It has little to do with the
            things you see and everything to do with the way you see them.
          </h1>
          <p className="text-primary-500 mt-2">– Elliot Erwitt</p>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto">
        {YOUTUBE_VIDEOS.map((id, index) => (
          <div
            key={index}
            className="relative w-full aspect-video overflow-hidden rounded-lg"
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}?rel=0`}
              title={`YouTube video ${index + 1}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingGallery;
