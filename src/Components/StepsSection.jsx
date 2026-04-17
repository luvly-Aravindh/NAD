import React from "react";
import { motion } from "framer-motion";
import checkIcon from "../assets/check-mark.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const steps = [
  {
    number: "01",
    title: "You Shortlist. We Curate.",
    desc1:
      "Browse 2,500+ IGI-certified designs online, or book a free 20-minute video consultation with a diamond stylist.",
    desc2:
      "Ask every question you've been Googling at 1 AM we've got you. Shortlist up to 10 pieces, completely commitment-free.",
    points: ["Rings", "Earrings", "Pendants", "Bracelets", "Men’s", "Custom"],
    type: "dot",
  },
  {
    number: "02",
    title: "We Come to You.",
    desc1:
      "A verified New Age Diamonds expert arrives at your home-same day or next.",
    desc2:
      "Each piece is delivered in premium packaging, complete with its IGI certificate. Try them in your own lighting, at your own pace, with the people who matter.",
    points: [
      "Expert guidance with loupe",
      "Transparent invoice before purchase",
      "Zero pressure, always",
    ],
    type: "check",
  },
  {
    number: "03",
    title: "Love It. Keep It.",
    desc1:
      "Pay only for what you love-via Card, UPI, or 0% EMI.",
    desc2:
      "We take back the rest. No questions. No follow-ups.",
    points: [
      "IGI-certified authenticity",
      "Certificate stays with your piece",
    ],
    type: "check",
  },
];

const StepsSection = () => {
  return (
    <section className="bg-[#fff] px-4 md:px-10 py-10 md:py-16">
      <div className="max-w-7xl mx-auto space-y-12">

        {steps.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={i}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] bg-[#F6F5F0]"
          >
            {/* LEFT STEP */}
            <div className="border-b md:border-b-0 md:border-r border-[#D9D7D0] flex flex-col items-center justify-center py-10 md:py-20">
              <p className="text-sm sm:text-base tracking-wide text-black mb-2 style-content-3">
                STEP
              </p>
              <h2 className="text-5xl sm:text-6xl md:text-[6rem] font-serif text-black leading-none">
                {step.number}
              </h2>
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-5 sm:p-6 md:p-10">
              <h3 className="text-lg sm:text-xl md:text-3xl font-serif text-black mb-3 style-content-3">
                {step.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed style-content-2">
                {step.desc1}
              </p>

              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed style-content-2">
                {step.desc2}
              </p>

              {/* POINTS */}
              <div className="flex flex-wrap items-start gap-3 sm:gap-4 text-sm sm:text-base text-black style-content-1">
                {step.points.map((p, idx) => (
                  <span key={idx} className="flex items-center gap-2">
                    {step.type === "check" ? (
                      <img
                        src={checkIcon}
                        alt="check"
                        className="w-4 h-4 object-contain mt-[2px]"
                      />
                    ) : (
                      <span>•</span>
                    )}
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default StepsSection;