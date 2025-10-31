"use client";

import React from "react";

const FightForWorkers = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-[100vh]">
      {/* Left Quadrant Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-[#e6d8a0] flex items-center justify-center p-10 relative">
        <div className="relative w-full  h-[500px] flex items-center justify-center">
          {/* Center Cross Lines */}
          <div className="absolute w-px h-full bg-[#e6d8a0]/70"></div>
          <div className="absolute h-px w-full bg-[#e6d8a0]/70"></div>

          {/* Four Quadrants Text */}
          <div className="absolute top-20 md:left-20 w-full">
            <p className="text-lg md:text-xl">Labour Law</p>
          </div>
          <div className="absolute top-20 right-0 w-full text-end">
            <p className="text-xs md:text-xl">Film Industry Development</p>
          </div>
          <div className="absolute bottom-20 md:left-10 left-0 w-full">
            <p className="text-sm md:text-xl">Rights for Film Industry</p>
          </div>
          <div className="absolute bottom-20 right-10 md:right-20 w-full text-end">
            <p className="text-lg md:text-xl">Guidance</p>
          </div>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full h-full md:w-1/2 bg-[#f3e1ba] flex flex-col justify-center px-10 py-16 text-black">
        <h2 className="text-[26px] md:text-[50px] font-semibold mb-4 leading-[45px]">
          <span className="text-[#c70000] font-bold">We Fight for cine</span>
          <br />
          <span className="text-[#a10000] font-bold">workers</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-md">
          AICWA will draft a justice pathway against the injustice you have
          suffered.
        </p>
      </div>
    </section>
  );
};

export default FightForWorkers;
