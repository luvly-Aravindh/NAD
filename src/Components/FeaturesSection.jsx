import React from "react";
import { motion } from "framer-motion";

// icons
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";

const features = [
  { id: 1, title: "IGI Certified\nJewellery", icon: icon1 },
  { id: 2, title: "Free\nHome Trial", icon: icon2 },
  { id: 3, title: "3 Days\nDelivery", icon: icon3 },
  { id: 4, title: "Free\nShipping", icon: icon4 },
  { id: 5, title: "Free Video\nConsultation", icon: icon5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function FeaturesSection() {
  return (
    <section className="bg-[#CDDCDD] py-10 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 text-center">
          {features.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              
              {/* Circle Icon */}
              <div className="w-28 h-28 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#F6F5F0] rounded-full flex items-center justify-center mb-3 md:mb-4">
                <motion.img
                  src={item.icon}
                  alt="icon"
                  className="w-16 sm:w-10 md:w-16 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Text */}
              <p className="text-xl sm:text-sm md:text-xl font-medium text-gray-900 leading-snug whitespace-pre-line">
                {item.title}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}