import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/img3.png";
import img2 from "../assets/new-img.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img1.png";
import img5 from "../assets/new-img.png";

const products = [
  {
    left: img1,
    right: img2,
    tag: "Perfect Gifts",
    title: "Give Something They'll Keep Forever",
    name: "Gold Coins",
    desc: "BIS Hallmarked 24K pure gold in beautiful gift packaging. Perfect for Diwali, weddings, and birthdays.",
    price: "₹35,000 - 50,000",
  },
  {
    left: img2,
    right: img3,
    tag: "Luxury Picks",
    title: "Timeless Beauty in Every Piece",
    name: "Diamond Rings",
    desc: "Elegant diamond rings crafted for special moments and everlasting memories.",
    price: "₹50,000 - 1,20,000",
  },
  {
    left: img3,
    right: img4,
    tag: "Wedding",
    title: "Celebrate Love with Brilliance",
    name: "Necklace Set",
    desc: "Beautiful handcrafted necklace sets perfect for weddings and grand occasions.",
    price: "₹75,000 - 2,00,000",
  },
  {
    left: img4,
    right: img5,
    tag: "Occasions",
    title: "Perfect Gifts for Every Moment",
    name: "Bracelets",
    desc: "Stylish gold bracelets designed for elegance and everyday luxury.",
    price: "₹25,000 - 70,000",
  },
  {
    left: img5,
    right: img1,
    tag: "Exclusive",
    title: "Crafted to Impress",
    name: "Earrings",
    desc: "Modern and traditional earrings crafted with precision and beauty.",
    price: "₹15,000 - 60,000",
  },
];

export default function ProductShowcaseSlider() {
  const [index, setIndex] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === products.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = products[index];

  return (
    <section className="w-full bg-[#f3f3f3] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 items-center gap-10"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8 }}
          >

            {/* LEFT IMAGE */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={current.left}
                alt=""
                className="w-full max-w-[420px] h-[320px] object-cover"
              />
            </motion.div>

            {/* CENTER CONTENT */}
            <div className="text-center md:text-left">
              <p className="text-sm text-blue-600 mb-2">
                {current.tag}
              </p>

              <h2 className="text-3xl md:text-4xl font-serif mb-4 leading-snug">
                {current.title}
              </h2>

              <h3 className="text-2xl font-serif mb-3">
                {current.name}
              </h3>

              <p className="text-gray-600 mb-4">
                {current.desc}
              </p>

              <p className="text-lg font-semibold mb-6">
                {current.price}
              </p>

              <button
                type="button"
                onClick={() =>
                  document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="px-6 py-3 bg-white border shadow-sm hover:shadow-md transition"
              >
                Explore All Collections
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={current.right}
                alt=""
                className="w-full max-w-[300px] h-[320px] object-cover"
              />
            </motion.div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
