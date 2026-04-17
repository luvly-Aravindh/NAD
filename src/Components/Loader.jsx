import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UltraLuxuryLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 bg-[#f4f4f2] flex items-center justify-center z-[9999]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col items-center gap-10">

              {/* 💍 Premium Gold Ring */}
              <motion.div
                className="relative w-28 h-28 rounded-full"
                style={{
                  background:
                    "conic-gradient(#d4af37, #f6e27a, #c9a227, #d4af37)",
                  boxShadow:
                    "0 0 30px rgba(212,175,55,0.5), inset 0 0 10px rgba(255,255,255,0.5)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-4 bg-[#f4f4f2] rounded-full"></div>
              </motion.div>

              {/* 💎 Ultra Diamond */}
              <motion.div
                className="relative w-16 h-16"
                animate={{ rotateY: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
              >
                {/* Main Diamond Body */}
                <div
                  className="w-full h-full"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 85% 25%, 100% 60%, 50% 100%, 0% 60%, 15% 25%)",
                    background:
                      "linear-gradient(145deg, #ffffff, #dfe6ee, #bfc9d9)",
                    boxShadow:
                      "0 0 20px rgba(255,255,255,0.9), inset 0 0 15px rgba(255,255,255,0.7)",
                  }}
                />

                {/* Facet Shine Layers */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/70 to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-100/40 to-transparent"></div>

                {/* Sparkle Points */}
                <motion.span
                  className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full blur-[1px]"
                  animate={{ scale: [0.5, 1.5, 0.5], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
                <motion.span
                  className="absolute bottom-2 right-0 w-2 h-2 bg-white rounded-full blur-[1px]"
                  animate={{ scale: [0.5, 1.3, 0.5], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                />
              </motion.div>

              {/* ✨ Logo Cinematic Reveal */}
              <motion.h1
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.1em" }}
                transition={{ duration: 1.2 }}
                className="text-2xl md:text-4xl font-serif text-black text-center"
              >
                New Age Diamonds
              </motion.h1>

              <p className="text-sm text-gray-500 tracking-wide">
                Precision. Purity. Perfection.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎬 Cinematic Page Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
        animate={{
          opacity: loading ? 0 : 1,
          scale: loading ? 1.05 : 1,
          filter: loading ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 1 }}
      >
        {!loading && children}
      </motion.div>
    </>
  );
}