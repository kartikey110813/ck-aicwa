"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

interface TestimonialType {
  id: number;
  title: string;
  text: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

const testimonialsData: TestimonialType[] = [
  {
    id: 1,
    title: "Best Farming",
    text: "I will really like to rate you 5 stars from the bottom of my heart. It is a long established fact that a reader will be distracted.",
    name: "Ridheema Tiwari",
    role: "Actress",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    title: "Amazing Experience",
    text: "The service was wonderful and exceeded my expectations. I'll recommend it to everyone. Truly amazing experience from start to finish!",
    name: "Arjun Mehta",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    title: "Great Support",
    text: "They have a fantastic support team. Everything was handled smoothly, and I'm really happy with how it turned out. Definitely worth 5 stars!",
    name: "Priya Sharma",
    role: "Designer",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    rating: 5,
  },
  {
    id: 4,
    title: "Highly Recommended",
    text: "A perfect blend of professionalism and creativity. I would highly recommend them to anyone looking for top-notch service!",
    name: "Rahul Verma",
    role: "Developer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=100&h=100&fit=crop",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonialsData[current];

  const progressPercent = ((current + 1) / testimonialsData.length) * 100;

  return (
    <div className="h-[100vh] bg-[#EDD8B5] flex md:justify-center md:flex-row flex-col justify-start py-4 md:py-10 px-4 md:px-20 overflow-hidden">
      <div className="w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="md:flex justify-end flex-col h-full bg-[#F26D7E] rounded-[20px] overflow-hidden hidden">
          <img
            src="/testimonials.png"
            alt="Testimonials visual"
            className="w-full object-contain rounded-[20px]"
          />
        </div>

        {/* Right Side */}
        <div className="space-y-8 relative">
          <div>
            <p className="text-[#690714] font-semibold text-lg mb-2">
              Testimonials
            </p>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What people say
            </h2>
            <p className="text-black font-light">
              Hear directly from people who experienced our work.
            </p>
          </div>

          {/* Quote Box */}
          <div className="relative transition-all duration-700 ease-in-out">
            {/* Animated Quote Box */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={t.id} // triggers re-animation on change
                  initial={{ y: -80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 80, opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="border-2 border-[#690714] p-8 relative bg-white rounded-xl shadow-md"
                >
                  {/* Large Quote Mark */}
                  <div className="absolute -top-2 -right-0 text-[#690714] text-8xl font-bold leading-none">
                    ❝
                  </div>

                  {/* Stars + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-[#690714]"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">{t.title}</span>
                  </div>

                  {/* Text */}
                  <p className="text-[#666666] italic leading-relaxed">
                    {t.text}
                  </p>

                  {/* Arrow pointer */}
                  <div className="absolute -bottom-6 left-20 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[24px] border-t-[#690714]"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Author Info & Pagination */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-12">
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-4 border-[#690714] object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                  <p className="text-[#690714] font-medium">{t.role}</p>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-[#690714]">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <div className="w-32 h-1 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#690714] transition-all duration-700"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <span className="text-2xl font-bold text-black">
                  {String(testimonialsData.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Navigation buttons (optional) */}
            <div className="absolute -bottom-14 right-0 flex gap-4">
              <button
                onClick={() =>
                  setCurrent(
                    (prev) =>
                      (prev - 1 + testimonialsData.length) %
                      testimonialsData.length
                  )
                }
                className="p-2 border border-[#690714] rounded-full hover:bg-[#690714] hover:text-white transition"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setCurrent((prev) => (prev + 1) % testimonialsData.length)
                }
                className="p-2 border border-[#690714] rounded-full hover:bg-[#690714] hover:text-white transition"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
