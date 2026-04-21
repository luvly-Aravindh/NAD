import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


import hero1 from "../assets/hero-girl.png";
import hero2 from "../assets/banner-2.svg";
import hero3 from "../assets/banner-3.svg";

const slides = [
  {
    image: hero1,
    title: "Experience Lab-Grown Diamond Jewellery at Home",
    subtitle:
      "IGI-Certified Brilliance · 09, 14, 18 Karat Gold · BIS Hallmarked Shortlist your favorite jewellery and see how they truly sparkle in your own light, and choose only when it feels right",
    button: "Book a Free Home Trial",
  },
  {
    image: hero2,
    title: "Timeless elegance crafted for every moment.",
    subtitle: "Premium Designs · Certified Quality · Lifetime Sparkle",
    button: "Explore Collection",
  },
  {
    image: hero3,
    title: "A symbol of love that lasts forever.",
    subtitle: "Handcrafted Rings · Elegant Finish · Trusted Quality",
    button: "Shop Now",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const contentVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  const scrollToLeadForm = () => {
    document
      .getElementById("lead-form-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Logo */}
      

      {/* Hero */}
      <section className="relative w-full h-[50vh] md:h-screen overflow-hidden bg-[#e9ecef]">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Image */}
            <motion.img
              src={slides[index].image}
              alt="hero"
              className="w-full h-full object-contain object-center md:object-right"
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
            <motion.div
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/35 to-transparent"
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
                
                <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">

                  <motion.h1
                    variants={contentVariants}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.25 }}
                    className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-serif text-black leading-tight"
                  >
                    {slides[index].title}
                  </motion.h1>

                  <motion.p
                    variants={contentVariants}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.45 }}
                    className="mt-3 md:mt-4 text-sm sm:text-sm md:text-base text-gray-800 font-bold"
                  >
                    {slides[index].subtitle}
                  </motion.p>

                  <motion.button
                    type="button"
                    onClick={scrollToLeadForm}
                    variants={contentVariants}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-5 md:mt-6 px-5 md:px-6 py-2.5 md:py-3 bg-white text-black text-sm sm:text-sm font-medium shadow hover:scale-105 transition-all"
                  >
                    {slides[index].button}
                  </motion.button>

                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setIndex(i)}
              animate={{ scale: i === index ? 1.2 : 1 }}
              transition={{ duration: 0.25 }}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full cursor-pointer transition ${
                i === index ? "bg-black" : "bg-gray-400"
              }`}
            ></motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
