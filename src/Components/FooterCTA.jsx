import React from "react";
import { motion } from "framer-motion";

const FooterCTA = () => {
  return (
    <section className="bg-white py-8 md:py-20 px-4 md:px-10 text-center">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-serif text-black mb-6 md:mb-8 leading-tight"
        >
          Book My Home Trial Now
        </motion.h2>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          viewport={{ once: true }}
          className="bg-[#F6F5F0] text-black px-5 sm:px-6 py-3 text-lg sm:text-base md:text-lg font-medium transition hover:bg-[#dedcd7]"
        >
          Book a Free Consultation Call
        </motion.button>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 mb-6 md:mb-8 h-px w-full origin-center bg-gradient-to-r from-transparent via-gray-400 to-transparent"
        ></motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-sm sm:text-xs md:text-base text-gray-600 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          <span>© 2026, New Age Diamonds</span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">Refund policy</span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">Shipping policy</span>
          <span>•</span>
          <span className="hover:underline cursor-pointer">Terms of service</span>
        </motion.div>

      </div>
    </section>
  );
};

export default FooterCTA;