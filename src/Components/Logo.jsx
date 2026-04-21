import React from "react";

import icon1 from "../assets/usp1.svg";
import icon2 from "../assets/usp2.svg";
import icon3 from "../assets/usp3.svg";
import icon4 from "../assets/usp4.svg";
import icon5 from "../assets/usp5.svg";

const features = [
  {
    title: ["IGI Certified", "Jewellery"],
    icon: icon1,
  },
  {
    title: ["80%", "Buyback"],
    icon: icon2,
  },
  {
    title: ["3 Days", "Return"],
    icon: icon3,
  },
  {
    title: ["Free", "Shipping"],
    icon: icon4,
  },
  {
    title: ["5 Days", "Delivery"],
    icon: icon5,
  },
];

const Logo = () => {
  return (
    <section className="bg-[#f4f4f2] py-10 md:py-14">
      <div className="logo-marquee overflow-hidden">
        <div className="logo-marquee-track flex w-max animate-logo-marquee-rtl">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="flex items-stretch gap-4 px-4 md:gap-10 md:px-10"
              aria-hidden={groupIndex === 1}
            >
              {features.map((feature, index) => (
                <div
                  key={`${groupIndex}-${index}`}
                  className="flex w-[160px] shrink-0 flex-col items-center justify-center rounded-[28px] bg-white px-4 py-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:w-[190px] md:w-[210px] md:px-6"
                >
                  <img
                    src={feature.icon}
                    alt={feature.title.join(" ")}
                    className="h-16 w-16 object-contain md:h-20 md:w-20"
                  />
                  <h3 className="mt-4 text-[16px] font-medium leading-tight tracking-wide text-[#163a2d] md:text-[20px]">
                    {feature.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logo;
