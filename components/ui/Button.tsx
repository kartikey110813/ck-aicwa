import React from "react";

const Button = ({ text }: { text: string }) => {
  return (
    <button className="relative bg-transparent text-white font-semibold text-[14px] px-2 py-2 overflow-hidden group">
      <div className="px-8 py-2 bg-[#F10424] rounded-2xl ">{text}</div>

      {/* Top Left */}
      <span className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#F10424] rounded-tl-full"></span>
      {/* Top Right */}
      <span className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#F10424] rounded-tr-full"></span>
      {/* Bottom Left */}
      <span className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#F10424] rounded-bl-full"></span>
      {/* Bottom Right */}
      <span className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#F10424] rounded-br-full"></span>
    </button>
  );
};

export default Button;
