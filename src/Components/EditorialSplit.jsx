import React from "react";
import { motion } from "framer-motion";

import bgImage from "../assets/bg-texture.svg";
import rightImage from "../assets/hero-girl-2.png";

const SimpleHeroSection = () => {
  return (
    <section
      className="w-full py-4 md:py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-5">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-xl text-left md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-5 md:mb-6 text-black">
            See every detail of your diamond,
            <br className="hidden sm:block" /> wherever you are.
          </h1>

          <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-gray-700 text-sm sm:text-base md:text-lg">
            <li>• Watch your diamond in real light, in motion.</li>
            <li>• Zoom in.</li>
            <li>• Ask questions.</li>
            <li>• Get complete clarity before you choose.</li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-black px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold tracking-wide hover:bg-gray-800 hover:text-white transition"
          >
            Schedule My Free Video Call
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-[550px] flex justify-center md:justify-end"
        >
          <img
            src={rightImage}
            alt="Jewelry model"
            className="w-full max-w-xs sm:max-w-sm md:max-w-none h-auto object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default SimpleHeroSection;