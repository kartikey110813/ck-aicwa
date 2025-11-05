import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="relative bg-transparent text-white font-semibold text-[14px] px-2 py-2 overflow-hidden group transition-all duration-300">
      {/* Inner button content */}
      <div className="px-8 py-2 bg-[#F10424] rounded-2xl transition-all duration-300 group-hover:scale-[1.02]">
        <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
          {text}
        </span>
      </div>

      {/* Top Left */}
      <span className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#F10424] rounded-tl-full transition-all duration-300 group-hover:top-0 group-hover:left-0"></span>
      {/* Top Right */}
      <span className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#F10424] rounded-tr-full transition-all duration-300 group-hover:top-0 group-hover:right-0"></span>
      {/* Bottom Left */}
      <span className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#F10424] rounded-bl-full transition-all duration-300 group-hover:bottom-0 group-hover:left-0"></span>
      {/* Bottom Right */}
      <span className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#F10424] rounded-br-full transition-all duration-300 group-hover:bottom-0 group-hover:right-0"></span>
    </button>
  );
};

export default Button;
