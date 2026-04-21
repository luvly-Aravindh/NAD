import React from "react";
import backgroundImage from "../assets/bg-texture.svg";

export default function LeadFormSection() {
  return (
    <section id="lead-form-section" className="w-full bg-gray-50 py-10 px-4 md:px-10 scroll-mt-24 relative bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
        
        {/* LEFT PANEL */}
        <div className="space-y-5 md:space-y-6 md:self-center md:pr-6 lg:pr-10">
          <h2 className="text-2xl lg:text-4xl leading-tight text-gray-900 text-center md:text-left">
            Book Your Free Home Trial
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our team confirms your appointment within 2 hours. No payment required to book.
          </p>

          <div className="space-y-3">
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <h4 className="font-semibold text-gray-800">
                100% Safe & Insured Trial
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Every piece brought to your home is fully insured. Zero financial risk to you.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <h4 className="font-semibold text-gray-800">
                No Obligation to Purchase
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Try freely. Return what you don't love. We never apply pressure.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <h4 className="font-semibold text-gray-800">
                Confirmed Within 2 Hours
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                Our team calls to confirm your date, time and shortlisted pieces.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (FORM) */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
          <form className="space-y-4">
            
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Mobile Number *
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Your City *
              </label>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Preferred Time
                </label>
                <select className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                  <option>Select slot</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Looking for:
              </label>
              <select className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
                <option>Select jewellery type</option>
                <option>Necklace</option>
                <option>Rings</option>
                <option>Earrings</option>
                <option>Bangles</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Anything specific? (Optional)
              </label>
              <textarea
                rows="3"
                placeholder="Budget range, occasion, metal preference (gold / silver)..."
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Schedule My Free Home Trial →
            </button>

            <p className="text-xs text-gray-500 text-center">
              Your details are private. We only contact you to confirm your appointment.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
