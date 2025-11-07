import React from "react";

const ButtonBasic = ({ text }: { text: string }) => {
  return (
    <button className="relative bg-transparent text-white font-semibold text-lg px-4 py-2 overflow-hidden group">
      <div className="md:px-5 md:py-1 px-3 py-[0px] bg-[#F10424] text-[8px] md:text-[14px] rounded-2xl ">
        {text}
      </div>
    </button>
  );
};

export default ButtonBasic;
