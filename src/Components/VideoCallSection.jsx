import { video } from "framer-motion/client";
import React from "react";
import videoDemo from "../assets/Sequence 01.mp4";

export default function VideoCallSection() {
  return (
    <section className="w-full bg-[#f3f3f3] text-gray-900 py-4 md:py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 md:space-y-7 md:pr-6">
          <h2 className="text-3xl lg:text-5xl md:text-4xl leading-tight text-center md:text-left">
            View Designs Instantly <br /> On a Video Call
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Can't schedule a home visit? Our certified jewellery consultants walk you through the full collection live. Get exclusive personalised picks with honest answers and zero sales pressure. Available Pan India.
          </p>

          <ul className="space-y-4 text-sm md:text-base text-gray-700 text-center md:text-left">
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="font-semibold text-gray-900">+</span> 30-minute expert session
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="font-semibold text-gray-900">+</span> Live product demonstration
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="font-semibold text-gray-900">+</span> Styling and sizing guidance
            </li>
            <li className="flex items-start justify-center md:justify-start gap-2">
              <span className="font-semibold text-gray-900">+</span> Available Pan-India, any day
            </li>
          </ul>

          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="mt-5 mx-auto md:mx-0 block bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Book via WhatsApp &rarr;
          </button>
        </div>

        {/* RIGHT VISUAL CARD */}
        <div className="bg-[#f8f8f8] border border-gray-200 rounded-2xl p-7 md:p-10 shadow-sm">
          <div className="relative aspect-video bg-white border border-gray-200 rounded-xl overflow-hidden">
            
      <video
  className="h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src={videoDemo}
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
          </div>

          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-700">Zoom Consultation Preview</p>
            <p className="text-xs text-gray-500">Join a live Zoom call to review jewellery options with our expert</p>
          </div>
        </div>
      </div>
    </section>
  );
}
