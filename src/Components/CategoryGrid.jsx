import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ringsImg from "../assets/rings.svg";
import necklaceImg from "../assets/necklace.svg";
import coinsImg from "../assets/coins.svg";
import mensImg from "../assets/mens.svg";
import pendantImg from "../assets/pendant.svg";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";

const categories = [
  { label: "Solitaires", image: p1 },
  { label: "Watch Jewellery", image: p8 },
  { label: "Men's Jewellery", image: mensImg },
  { label: "Mangalsutras", image: necklaceImg },
  { label: "Nose Pins", image: p2 },
  { label: "Kids Jewellery", image: p3 },
  { label: "Gold Coins", image: coinsImg },
  { label: "Anklets", image: p4 },
  { label: "Pendants", image: pendantImg },
  { label: "Necklaces", image: necklaceImg },
  { label: "Rings", image: ringsImg },
  { label: "Earrings", image: p5 },
  { label: "Bangles", image: p6 },
  { label: "Bracelets", image: p7 },
  { label: "Gold Chains", image: necklaceImg },
  { label: "Kada", image: p2 },
];

export default function CategoryGrid() {
  const itemsPerView = 10;
  const [startIndex, setStartIndex] = useState(0);

  const visibleItems = useMemo(() => {
    return Array.from({ length: itemsPerView }, (_, i) => {
      const index = (startIndex + i) % categories.length;
      return categories[index];
    });
  }, [startIndex]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerView) % categories.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - itemsPerView + categories.length) % categories.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + itemsPerView) % categories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [itemsPerView]);

  return (
    <section className="bg-[#f4f4f4] py-10 md:py-14 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="h-10 w-10 rounded-full border border-[#dccfd3] bg-white text-[#8f8a92] shadow-sm transition hover:bg-[#f7eff2]"
            aria-label="Previous categories"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="h-10 w-10 rounded-full border border-[#dccfd3] bg-white text-[#8f8a92] shadow-sm transition hover:bg-[#f7eff2]"
            aria-label="Next categories"
          >
            &rarr;
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6"
          >
            {visibleItems.map((item, i) => (
              <motion.article
                key={`${item.label}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.02 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center"
              >
                <div className="w-full h-[150px] md:h-[180px] rounded-3xl border border-[#e8dce0] bg-[#f7eff2] shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex items-center justify-center p-5">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-center text-sm md:text-lg font-medium text-[#9d98a1] leading-tight">
                  {item.label}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
        
      </div>
    </section>
  );
}
