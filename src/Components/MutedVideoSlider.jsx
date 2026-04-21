import React from "react";
import logo from "../assets/logo.png";

export default function VideoSection() {
  return (
    <>
      <div className="w-full bg-white py-3 flex justify-center">
        <img
          src={logo}
          alt="logo"
          className="h-16 md:h-20 object-contain"
        />
      </div>

      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative w-full h-[60vh] md:h-[85vh] overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[140vw] h-[78vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-110 pointer-events-none"
            src="https://www.youtube-nocookie.com/embed/xBSwuLnsqbs?autoplay=1&mute=1&start=0&loop=1&playlist=xBSwuLnsqbs&controls=0&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&rel=0&playsinline=1"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; loop"
          ></iframe>

          {/* Hide YouTube Suggestions */}
          
        </div>

        {/* Bottom White Fade Gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-44 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </section>
    </>
  );
}