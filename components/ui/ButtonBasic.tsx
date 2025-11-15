import React from "react";

const ButtonBasic = ({ text }: { text: string }) => {
  return (
    <button className="relative bg-transparent text-[#EDD8B5] text-[16px] px-4 py-3 overflow-hidden">
      <div className="md:px-5 md:py-2 px-3 py-[0px] bg-[#F10424] rounded-[20px]">
        {text}
      </div>
    </button>
  );
};

export default ButtonBasic;
