import React from "react";
import { motion } from "framer-motion";

import ring from "../assets/p5.png";
import pendant from "../assets/p6.png";
import earring from "../assets/p7.png";
import heart from "../assets/p8.png";

const products = [
  { id: 1, name: "Solitaire Women’s rings", price: "₹36,703", image: ring },
  { id: 2, name: "Charms and Pendants", price: "₹36,703", image: pendant },
  { id: 3, name: "Earrings", price: "₹36,703", image: earring },
  { id: 4, name: "Hearts Collection", price: "₹36,703", image: heart },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function BestSellingCollections() {
  return (
    <section className="bg-[#f3f3f3] px-2 sm:px-6 md:px-12 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-0 mb-8 md:mb-10">
          <div>
            <p className="text-sm sm:text-base md:text-xl text-blue-600 mb-2">
              New & Trending
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
              Our Bestselling Collections
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:block bg-white px-5 py-2 text-xl shadow hover:shadow-md transition"
          >
            Full Collection
          </motion.button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {products.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -6 }}
              className="text-center"
            >
              <div className="bg-[#EDEBE7] flex items-center justify-center h-auto sm:h-[260px] md:h-[300px]">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <h3 className="mt-4 text-base sm:text-lg md:text-xl text-blue-700 hover:underline cursor-pointer">
                {item.name}
              </h3>

              <p className="mt-2 text-sm sm:text-base font-bold text-gray-900">
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white px-5 sm:px-6 py-2 text-base sm:text-lg md:text-xl shadow hover:shadow-md transition"
          >
            Luxury Collections
          </motion.button>
        </div>

      </div>
    </section>
  );
}