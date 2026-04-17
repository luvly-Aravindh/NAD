import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo.png";
import hero1 from "../assets/banner-1.svg";
import hero2 from "../assets/banner-2.svg";
import hero3 from "../assets/banner-3.svg";

const slides = [
  {
    image: hero1,
    title: "The ring she'll describe for the rest of her life.",
    subtitle:
      "IGI-Certified Lab-Grown Diamonds · 18K Gold · Try Before You Buy",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Logo */}
      <div className="w-full bg-white py-3 flex justify-center">
        <img
          src={logo}
          alt="logo"
          className="h-16 md:h-20 object-contain"
        />
      </div>

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
            <img
              src={slides[index].image}
              alt="hero"
              className="w-full h-full object-cover object-center md:object-right"
            />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
                
                <div className="max-w-xl text-center md:text-left mx-auto md:mx-0">

                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-serif text-black leading-tight"
                  >
                    {slides[index].title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-3 md:mt-4 text-sm sm:text-sm md:text-base text-gray-800"
                  >
                    {slides[index].subtitle}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
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
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full cursor-pointer transition ${
                i === index ? "bg-black" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSlider;