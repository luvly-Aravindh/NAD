import React from "react";
import { motion } from "framer-motion";

import bgMarble from "../assets/bg-texture.svg";
import heroImg from "../assets/hero-girl.png";
import badge from "../assets/badge.png";

const CertifiedBrilliance = () => {
  return (
    <section
      className="w-full py-6 md:py-16 px-4 md:px-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgMarble})` }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-5xl font-serif text-black mb-3 md:mb-4 leading-tight">
            Certified Brilliance!
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-[#2f4fa2] max-w-md mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed">
            Wear your dreams with certified lab-grown diamonds - 
            luxury sparkle for every occasion.
          </p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-6"
          >
            <img
              src={badge}
              alt="badge"
              className="h-8 sm:h-10 md:h-20 object-contain"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={heroImg}
            alt="model"
            className="w-full max-w-xs sm:max-w-sm md:max-w-xl object-cover rounded-sm"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CertifiedBrilliance;