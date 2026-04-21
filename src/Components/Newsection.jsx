import React from "react";
import { Sparkles, ShieldCheck, Home, RefreshCcw, Video } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "IGI Certified - Every Piece",
    body:
      "Each diamond is independently graded by the International Gemological Institute. You receive the full certificate with complete transparency.",
  },
  {
    icon: Sparkles,
    title: "Luxury Diamonds. Lesser Cost.",
    body:
      "Lab-grown diamonds are physically, chemically, and optically identical to mined diamonds, at a fraction of the price.",
  },
  {
    icon: Home,
    title: "Try Before You Buy",
    body:
      "Our stylist brings shortlisted pieces to your home. No pressure. Try in your own comfort.",
  },
  {
    icon: RefreshCcw,
    title: "80% Buyback Guarantee",
    body:
      "Upgrade anytime. We buy back your jewellery at 80% of the prevailing rate.",
  },
  {
    icon: Video,
    title: "Live Video Shopping",
    body:
      "Connect with our experts via live video for demos, styling advice, and guidance.",
  },
];

const Newsection = () => {
  return (
    <section className="bg-[#f7f5f2] px-4 py-16 md:px-10 md:py-16">
      <div className="mx-auto max-w-8xl text-center">
        
        {/* Heading */}
        <h2 className="text-4xl  text-[#1f1c18] md:text-6xl">
          Why New Age Diamonds
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#6b645c] text-sm md:text-base">
          Certified brilliance, transparent value, and a home-trial experience
          designed for comfort and confidence.
        </p>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-3xl bg-white/70 p-6 backdrop-blur-md border border-white/40 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex justify-center">
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1f1c18] text-white">
    <Icon size={20} />
  </div>
</div>

                <h3 className="mt-5 text-lg font-semibold text-[#1f1c18]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6b645c]">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="rounded-full bg-[#1f1c18] px-7 py-3 text-sm lg:text-xl font-medium text-white transition hover:bg-black"
          >
            Book Home Trial
          </button>

          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="rounded-full border border-[#1f1c18] px-7 py-3 text-sm lg:text-xl font-medium text-[#1f1c18] transition hover:bg-[#1f1c18] hover:text-white"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsection;
