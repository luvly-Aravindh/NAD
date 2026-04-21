import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import profile1 from "../assets/profile.png";
import profile2 from "../assets/profile-2.png";
import profile3 from "../assets/profile-3.png";

import stars from "../assets/stars.svg";

const testimonials = [
  {
    name: "Rohit Malhotra,",
    location: "Gurugram",
    image: profile1,
    text: `"I compared the IGI certificate side by side with a mined stone costing ₹3.5 lakhs. New Age sold me the same grade for ₹92,000. My fiancée cried. So did my bank account, with relief."`,
  },
  {
    name: "Priya Sharma",
    location: "South Delhi",
    image: profile2,
    text: `"The try-at-home was seamless. The executive arrived with 8 pieces beautifully packed. I bought a solitaire necklace and a pair of studs without stepping out once. This is how jewellery should be bought."`,
  },
  {
    name: "Arvind Kapoor",
    location: "Noida",
    image: profile3,
    text: `"I gifted my wife a 0.5ct diamond bracelet for our 10th anniversary. She assumed it was from Tanishq. When I told her the price, half of what we'd normally pay, and she was more impressed, not less."`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const TestimonialSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-14 md:py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* TOP TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm sm:text-lg text-[#2f4fa2] mb-2"
        >
          Real buyers. Real stories
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-3xl md:text-5xl font-serif text-black mb-10 md:mb-12 leading-tight"
        >
          600+ happy customers later, here's what they said
        </motion.h2>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -5 }}
              className="bg-[#e9e7e3] p-5 sm:p-6 md:p-8 rounded-sm"
            >
              {/* Profile */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm sm:text-base md:text-xl font-medium text-black">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <img
                src={stars}
                alt="stars"
                className="h-4 sm:h-5 mb-4"
              />

              {/* Text */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA TEXT */}
   <section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl"
      >
        <p className="text-sm sm:text-lg md:text-xl text-[#2f4fa2] mb-2 tracking-wide">
          Choose Your Diamond from Home
        </p>

        <h3 className="text-2xl sm:text-4xl md:text-5xl font-serif text-black mb-6 leading-tight">
          Try it before
          <span className="block text-[#2f4fa2]">you own it.</span>
        </h3>

        <p className="text-sm sm:text-base md:text-xl text-gray-600 leading-relaxed mb-6">
          Skip the showroom. Skip the pressure.
          <br />
          We bring up to 10 of your shortlisted diamond pieces straight to your home
          so you can experience them where it matters most.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-black font-medium tracking-wide">
          • No deposit &nbsp; • No risk &nbsp; • Just clarity
        </p>
      </motion.div>

      {/* Right Logo Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex justify-center items-center"
      >
        {/* Glow background */}
        <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#2f4fa2]/10 blur-3xl" />

        {/* Decorative card */}
        <div className="relative bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">
          <img
            src={logo}
            alt="Brand Logo"
            className="w-32 sm:w-40 md:w-52 object-contain"
          />

          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#2f4fa2]" />
          <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-gray-200" />
        </div>
      </motion.div>
    </div>
  </div>
</section>

      </div>
    </section>
  );
};

export default TestimonialSection;