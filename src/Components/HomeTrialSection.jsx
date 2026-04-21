import React from "react";
import bgImage from "../assets/bg-texture.svg";

const steps = [
  {
    number: "01",
    title: "Browse & Shortlist",
    desc: "Explore our IGI-certified collection online or via WhatsApp. Pick up to 5 pieces you'd like to try.",
  },
  {
    number: "02",
    title: "Book Your Trial Slot",
    desc: "Fill the form or WhatsApp us with your city, preferred date, and time. We confirm within 2 hours.",
  },
  {
    number: "03",
    title: "Experience at Home",
    desc: "Your stylist arrives with your selected pieces. Try them in your own space and lighting.",
  },
  {
    number: "04",
    title: "Keep What You Love",
    desc: "Pay only for what you keep. Return the rest effortlessly. All pieces are fully insured.",
  },
];

const HomeTrialSection = () => {
  return (
    <section
      className="bg-[#f8f6f2] px-4 py-6 md:px-10 md:py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="mx-auto max-w-6xl text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl  text-[#1f1c18]">
          Choose Your Diamond from Home
        </h2>

        <p className="mt-4 text-[#6b645c] max-w-2xl mx-auto">
          Try it at home before you own it.
        </p>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
  {steps.map((step, index) => (
    <div
      key={index}
      className="group bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition"
    >
      {/* Number */}
      <div className="flex justify-center md:justify-start">
        <div className="h-14 w-14 flex items-center justify-center rounded-full bg-[#1f1c18] text-white text-lg font-semibold">
          {step.number}
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 text-center md:text-left">
        <h3 className="text-lg md:text-xl font-semibold text-[#1f1c18]">
          {step.title}
        </h3>
        <p className="mt-2 text-[#6b645c] text-sm leading-6">
          {step.desc}
        </p>
      </div>
    </div>
  ))}
</div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="rounded-full bg-[#1f1c18] px-8 py-3 text-sm lg:text-xl text-white font-medium hover:bg-black transition"
          >
            Schedule My Home Trial Now
          </button>

          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="rounded-full border border-[#1f1c18] px-8 py-3 text-sm lg:text-xl text-[#1f1c18] font-medium hover:bg-[#1f1c18] hover:text-white transition"
          >
            Book via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeTrialSection;
