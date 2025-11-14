"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { benefits } from "../../constants";
import InterectiveCardDesign from "../../ui/InterectiveCardDesign";
import ButtonBasic from "../../ui/ButtonBasic";

const MembershipBenefits = () => {
  const [selected, setSelected] = useState(benefits[0]);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["3vh", "-100vh"]);

  return (
    <section
      ref={containerRef}
      className="hidden lg:flex relative h-[350vh] bg-[#EDD8B5] flex-col"
    >
      {/* Sticky Wrapper */}
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-stretch overflow-hidden py-10 md:px-20">
        {/* Left Scrollable Section */}
        <div className="md:w-1/2 relative z-10 md:mt-20 md:mb-20 overflow-hidden">
          <motion.div style={{ y }} className="flex flex-col space-y-10">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                onMouseEnter={() => setSelected(benefit)}
                className={`relative cursor-pointer rounded-2xl shadow-lg px-6 py-3 bg-white items-center hover:scale-[1.02] transition-all border-l-8 ${
                  selected.id === benefit.id
                    ? "border-red-600"
                    : "border-transparent"
                }`}
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-2 w-[80%]">
                  {benefit.description}
                </p>
                <span
                  className={`absolute text-[72px] font-extrabold right-6 bottom-0 ${
                    selected.id === benefit.id ? "text-red-500" : "text-red-100"
                  }`}
                >
                  {benefit.id.toString().padStart(2, "0")}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Fixed Section */}
        <div className="md:w-[60vw] bg-gradient-to-b from-[#7a0e10] via-[#8b1417] to-[#3b0b0d] text-white p-8 relative -ml-10 md:-ml-24 z-0 border-t-[10px] border-[#690714]">
          <div className="absolute top-[-26px] left-0 w-full h-5 bg-[#EDD8B5] [clip-path:polygon(2_0,10%_0,12%_25%,88%_25%,90%_0,100%_0,100%_100%,90%_100%,88%_75%,12%_75%,10%_100%,0_100%)] shadow-[0px_15px_15px_#ff4d4d]"></div>
          <div className="absolute top-[-22px] left-0 w-full h-5 bg-[#EDD8B5] [clip-path:polygon(0_0,10%_0,12%_25%,88%_25%,90%_0,100%_0,100%_100%,90%_100%,88%_75%,12%_75%,10%_100%,0_100%)]"></div>
          <div className="flex flex-col h-full justify-between text-start md:pl-[15%]">
            <div>
              <h2 className="text-3xl mb-2">
                Benefits of Membership
              </h2>
              <p className="text-gray-200 mb-6">
                These are some of the ways AICWA serves and protects its
                members.
              </p>

              <InterectiveCardDesign />
            </div>
            {/* <div className="flex mt-2"></div> */}

            <div className="flex flex-row gap-10">
              {selected.stats.map((stat, index) => (
                <div
                  key={index}
                  className="px-10 rounded-2xl bg-gradient-to-b from-[#b5211b] to-[#6e0c0b] p-4 text-center shadow-[inset_0_2px_6px_rgba(255,255,255,0.2),0_8px_15px_rgba(0,0,0,0.4)]"
                >
                  <h2 className="text-[#fde8d2] text-xl font-semibold mb-4">
                    {stat.label}
                  </h2>

                  {/* Button */}
                  <ButtonBasic text={"Get Now"} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits;
