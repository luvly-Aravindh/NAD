import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/Reception.png";
import img5 from "../assets/img4.png";

const baseData = [
  { img: img1, title: "Engagement" },
  { img: img2, title: "Wedding" },
  { img: img3, title: "Birthday" },
  { img: img4, title: "Reception" },
  { img: img5, title: "Anniversary" },
];

// 🔁 duplicate for seamless loop
const data = [...baseData, ...baseData];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto Slide (continuous forward only)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset smoothly (no visible jump)
  useEffect(() => {
    if (index >= baseData.length) {
      setTimeout(() => {
        setIndex(0);
      }, 500); // match transition duration
    }
  }, [index]);

  return (
    <section className="w-full bg-[#f5f5f5] py-14 md:py-20 overflow-hidden">
      <div className="w-full">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14 px-4">
          <p className="text-lg sm:text-sm text-gray-500 mb-2">
            Shop by Occasion
          </p>
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-serif leading-tight">
            Find the Perfect Diamond for Every Occasion
          </h2>
        </div>

        {/* Slider */}
    <div className="overflow-hidden w-full">
  <motion.div
    className="flex md:gap-6 px-0 md:px-6" // ❌ no gap/padding for mobile
    animate={{
      x: isMobile
        ? `-${index * 100}%`
        : `-${index * (100 / 3)}%`,
    }}
    transition={{
      duration: 0.5,
      ease: "easeInOut",
    }}
  >
    {data.map((item, i) => (
      <div
        key={i}
        className={`${
          isMobile
            ? "flex-[0_0_100%]" // ✅ exact full width
            : "flex-[0_0_calc(33.333%-16px)]"
        }`}
      >
        <div className="w-full h-auto sm:h-[320px] md:h-[380px] rounded-md overflow-hidden shadow-md bg-white">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-center mt-4 md:mt-6 text-2xl sm:text-lg md:text-2xl font-serif">
          {item.title}
        </h3>
      </div>
    ))}
  </motion.div>
</div>

      </div>
    </section>
  );
}