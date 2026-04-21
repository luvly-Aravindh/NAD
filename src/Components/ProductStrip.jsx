import React from "react";
import { motion } from "framer-motion";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

const products = [
  {
    image: p1,
    name: "Men's Solitaire Ring - 0.92 Ct · Sterling Silver",
    price: "₹36,703",
  },
  {
    image: p2,
    name: "Gold Vermeil Solitaire Drop Pendant Necklace",
    price: "₹36,703",
  },
  {
    image: p3,
    name: "Round Solitaire Stud Earrings - 1.68 Ct · Gold Vermeil",
    price: "₹36,703",
  },
  {
    image: p4,
    name: "1 CT Ascher Solitaire Pendant with Chain",
    price: "₹36,703",
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

const SolitaireSection = () => {
  return (
    <section className="bg-[#f4f4f2] py-12 md:py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm sm:text-sm md:text-xl text-[#2f4fa2] mb-2"
        >
          For the Real Luxury
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-2xl md:text-5xl font-serif text-black mb-8 md:mb-14 leading-tight"
        >
          Make It a Solitaire
        </motion.h2>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 text-center">
          {products.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -5 }}
            >
              {/* Image Box */}
              <div className="bg-[#e9e7e4] flex items-center justify-center h-auto sm:h-[180px] md:h-full mb-3 md:mb-4">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Title */}
              <p className="text-base sm:text-xs md:text-xl text-[#2f4fa2] leading-snug mb-1 md:mb-2 px-1">
                {item.name}
              </p>

              {/* Price */}
              <p className="text-base sm:text-sm md:text-base font-semibold text-black">
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-36 flex justify-center">
          <button
            type="button"
            onClick={() =>
              document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="bg-black text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            View Collections At Home
          </button>
        </div>

      </div>
    </section>
  );
};

export default SolitaireSection;
