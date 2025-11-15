import { TestimonialCarousel } from "./card";

export default function Testimonials() {
  return (
    <div className=" text-center min-h-screen bg-[#EDD8B5] py-10 px-4 md:px-20">
      <div>
        <h2 className="text-[36px] text-[#690714] mb-8 lg:mb-8 leading-[0px]">
          Nationwide Footprint
        </h2>
        <p className="sm:text-[18px] lg:text-[18px] text-[#690714]">
          AICWA are strategically located across states to provide equal
          opportunity and access to disciplined, defense-oriented education.
        </p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
