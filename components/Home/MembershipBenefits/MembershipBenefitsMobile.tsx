"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Benefit, benefits } from "../../constants";
import InterectiveCardDesign from "../../ui/InterectiveCardDesign";
import ButtonBasic from "../../ui/ButtonBasic";

const MembershipBenefitsMobile = () => {
  const [selected, setSelected] = useState<Benefit>(benefits[0]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Horizontal movement of cards based on scroll progress
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(benefits.length - 1) * 100}%`]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-[#EDD8B5] lg:hidden flex flex-col"
    >
      {/* Sticky content wrapper */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden py-10">
        {/* Horizontally scrolling cards */}
        <motion.div
          style={{ x }}
          className="flex flex-row h-[30vh] items-center justify-start space-x-4 px-6"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              onClick={() => setSelected(benefit)}
              className={`flex-shrink-0 w-[80vw] h-[30vh] bg-white rounded-2xl shadow-lg px-6 py-4 relative cursor-pointer transition-all border-l-8 ${
                selected.id === benefit.id
                  ? "border-red-600 scale-[1.02]"
                  : "border-transparent"
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-2 text-sm">
                {benefit.description}
              </p>
              <span
                className={`absolute text-[48px] font-extrabold right-4 bottom-0 ${
                  selected.id === benefit.id ? "text-red-500" : "text-red-100"
                }`}
              >
                {benefit.id.toString().padStart(2, "0")}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom content (now shorter height) */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-[#7a0e10] via-[#8b1417] to-[#3b0b0d] text-white p-6 rounded-t-3xl border-t-[10px] border-[#690714] h-[60vh] overflow-y-auto">
          <h2 className="text-xl font-bold mb-2 text-center">
            Benefits of Membership
          </h2>
          <p className="text-gray-200 mb-4 text-sm text-center">
            These are some of the ways AICWA serves and protects its members.
          </p>

          <div className="flex justify-center mb-4">
            <InterectiveCardDesign />
          </div>

          <div className="flex justify-center gap-3">
            {selected.stats.map((stat, index) => (
              <div
                key={index}
                className="px-3 py-3 rounded-2xl bg-gradient-to-b from-[#b5211b] to-[#6e0c0b] text-center shadow-[inset_0_2px_6px_rgba(255,255,255,0.2),0_6px_10px_rgba(0,0,0,0.4)]"
              >
                <h2 className="text-[#fde8d2] text-sm font-semibold mb-2">
                  {stat.label}
                </h2>
                <ButtonBasic text="Get Now" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefitsMobile;
