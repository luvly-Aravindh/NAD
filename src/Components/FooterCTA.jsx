import React from "react";
import { motion } from "framer-motion";

const FooterCTA = () => {
  return (
    <section className="bg-white py-8 md:py-20 px-4 md:px-10 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-serif text-black mb-6 md:mb-8 leading-tight"
        >
          Book My Home Trial Now
        </motion.h2>

        {/* Button */}
        <motion.button
          type="button"
          onClick={() =>
            document.getElementById("lead-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          viewport={{ once: true }}
          className="bg-[#F6F5F0] text-black px-5 sm:px-6 py-3 text-lg sm:text-base md:text-lg font-medium transition hover:bg-[#dedcd7]"
        >
          Book a Free Consultation Call
        </motion.button>

        {/* Support & Policies */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 grid gap-4 sm:gap-5 md:grid-cols-2 text-left"
        >
          <article className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-5 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900">Easy 3-Day Returns</h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              Hassle-free returns on all purchases within 3 days. No questions asked.
            </p>
            <a href="#" className="mt-3 inline-block text-sm font-medium text-black hover:underline">
              Refund Policy &rarr;
            </a>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-5 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900">Free Pan India Shipping</h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              Complimentary shipping on all orders. Delivered within 5 working days.
            </p>
            <a href="#" className="mt-3 inline-block text-sm font-medium text-black hover:underline">
              Shipping Policy &rarr;
            </a>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-5 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900">Secure &amp; Insured</h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              All home trial pieces are fully insured. Trusted payment partners for secure checkout.
            </p>
            <a href="#" className="mt-3 inline-block text-sm font-medium text-black hover:underline">
              Terms of Service &rarr;
            </a>
          </article>

          <article className="rounded-2xl border border-gray-200 bg-[#faf9f6] p-5 md:p-6">
            <h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
            <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
              WhatsApp or email anytime. Our team responds within 2 hours every day.
            </p>
            <a href="#" className="mt-3 inline-block text-sm font-medium text-black hover:underline">
              Chat on WhatsApp &rarr;
            </a>
          </article>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 mb-6 md:mb-8 h-px w-full origin-center bg-gradient-to-r from-transparent via-gray-400 to-transparent"
        ></motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-sm sm:text-xs md:text-base text-gray-600 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          <span>&copy; 2026, New Age Diamonds</span>
          <span>&bull;</span>
          <span className="hover:underline cursor-pointer">Refund policy</span>
          <span>&bull;</span>
          <span className="hover:underline cursor-pointer">Shipping policy</span>
          <span>&bull;</span>
          <span className="hover:underline cursor-pointer">Terms of service</span>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCTA;
