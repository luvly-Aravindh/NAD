import React from "react";
import { motion } from "framer-motion";

import ringImg from "../assets/rings.svg";
import necklaceImg from "../assets/necklace.svg";
import coinImg from "../assets/coins.svg";
import mensImg from "../assets/mens.svg";
import pendantImg from "../assets/pendant.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const CategoryGrid = () => {
  return (
    <section className="bg-[#f4f4f2] py-10 md:py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] md:text-sm tracking-[0.2em] text-gray-700 mb-8 md:mb-12"
        >
          IGI CERTIFIED LAB-GROWN DIAMONDS · DELHI NCR · TRUSTED JEWELLERY · SINCE 2019
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

          {/* TOP CARDS */}
          {[{
            img: ringImg,
            tag: "Traditional",
            title: "Rings"
          },{
            img: necklaceImg,
            tag: "Trending",
            title: "Necklaces"
          },{
            img: coinImg,
            tag: "Modern",
            title: "Gold coins"
          }].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={i}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-[#edebe7] rounded-md overflow-hidden h-[140px] md:h-[200px] flex items-center justify-between px-5 md:px-8 cursor-pointer"
            >
              <div>
                <p className="text-[11px] text-[#2f4fa2] mb-1">
                  {item.tag}
                </p>
                <h3 className="text-xl md:text-2xl font-serif text-black">
                  {item.title}
                </h3>
              </div>

              <motion.img
                src={item.img}
                alt={item.title}
                className="h-[90%] object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}

          {/* MEN'S BIG CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            whileHover={{ scale: 1.02 }}
            className="relative md:col-span-2 h-[220px] md:h-[360px] rounded-md overflow-hidden cursor-pointer"
          >
            <motion.img
              src={mensImg}
              alt="Mens"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />

            <div className="absolute inset-0 bg-black/5"></div>

            <motion.div
              whileHover={{ y: -4 }}
              className="absolute bottom-6 left-6 md:bottom-10 md:left-10"
            >
              <p className="text-[11px] text-[#2f4fa2] mb-1">
                Big Deal
              </p>
              <h3 className="text-xl md:text-3xl font-serif text-black leading-snug">
                Men’s collection <br />
                rings and bracelets
              </h3>
            </motion.div>
          </motion.div>

          {/* PENDANT CARD */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            whileHover={{ scale: 1.02 }}
            className="relative h-[220px] md:h-[360px] rounded-md overflow-hidden cursor-pointer"
          >
            <motion.img
              src={pendantImg}
              alt="Pendant"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />

            <div className="absolute inset-0 bg-black/5"></div>

            <motion.div
              whileHover={{ y: -4 }}
              className="absolute bottom-6 left-6 md:bottom-10 md:left-10"
            >
              <p className="text-[11px] text-[#2f4fa2] mb-1">
                Big Deal
              </p>
              <h3 className="text-xl md:text-2xl font-serif text-black">
                For Pendant
              </h3>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CategoryGrid;