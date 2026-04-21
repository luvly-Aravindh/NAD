import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Browse & Shortlist",
    body:
      "Explore our IGI-certified collection online or via WhatsApp. Pick up to 5 pieces you'd like to try, like rings, earrings, pendants, or bracelets.",
  },
  {
    number: "02",
    title: "Book Your Trial Slot",
    body:
      "Fill the form below or WhatsApp us with your city, preferred date, and time. We confirm within 2 hours and assign you a dedicated stylist.",
  },
  {
    number: "03",
    title: "Experience at Home",
    body:
      "Your stylist arrives at your doorstep with the pieces. Wear each one in your own space, your own light.",
  },
  {
    number: "04",
    title: "Keep What You Love",
    body:
      "Pay only for what you decide to keep. Return the rest effortlessly. All trial pieces are fully insured. Your safety is guaranteed throughout.",
  },
];

const HomeTrialSection = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8f6f1_0%,#eeece8_100%)] px-4 py-14 md:px-10 md:py-20">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/60 blur-3xl" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[#d4af37]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[36px] border border-white/50 bg-[linear-gradient(135deg,rgba(255,255,255,0.88)_0%,rgba(248,245,239,0.8)_100%)] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.035)] backdrop-blur-sm md:p-10"
        >
          <p className="text-center text-sm font-bold uppercase tracking-[0.45em] text-[#7a746c]">
            Home Trial
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold leading-tight text-[#1f1c18] sm:text-5xl md:text-7xl">
            Choose Your Diamond from Home
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-[#615b54] md:text-base">
            Try it at Home before you own it.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[34px] border border-white/50 bg-white/60 p-6 shadow-[0_10px_24px_rgba(0,0,0,0.03)] backdrop-blur-sm md:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.4em] text-[#7a746c]">
                Trial Process
              </p>
              <span className="rounded-full border border-[#e7e1d8] bg-white/70 px-3 py-1 text-xs font-medium text-[#615b54]">
                4 Steps
              </span>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-[26px] border border-[#e7e1d8] bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(250,248,244,0.9)_100%)] p-5 shadow-[0_8px_18px_rgba(0,0,0,0.025)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1f1c18] text-sm font-semibold text-white">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-[#1f1c18] md:text-xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#615b54]">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[34px] border border-white/50 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(247,245,240,0.88)_100%)] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.03)] backdrop-blur-sm md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#7a746c]">
              Secure Choice
            </p>
            <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-[#1f1c18] md:text-5xl">
              Keep what you love.
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#615b54] md:text-base">
              Pay only for what you decide to keep. Return the rest effortlessly.
              All trial pieces are fully insured. Your safety is guaranteed throughout.
            </p>

            <div className="mt-8 rounded-[28px] border border-[#e7e1d8] bg-white/70 p-5 md:p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-[#7a746c]">
                CTA
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button className="rounded-full bg-[#1f1c18] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#11100e]">
                  Schedule My Home Trial Now
                </button>
                <button className="rounded-full border border-[#1f1c18] px-6 py-3 text-sm font-semibold text-[#1f1c18] transition hover:bg-[#1f1c18] hover:text-white">
                  Book via WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeTrialSection;
