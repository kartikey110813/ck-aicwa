"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { newsData } from "../constants";

// GSAP is ready to use
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (heroRef.current) {
      // GSAP animations for hero section
      const tl = gsap.timeline();

      tl.fromTo(
        heroRef.current.querySelector(".hero-title"),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          heroRef.current.querySelector(".hero-subtitle"),
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          heroRef.current.querySelector(".swiper-container"),
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" },
          "-=0.3"
        );

      // Simple parallax effect
      gsap.to(heroRef.current.querySelector(".parallax-bg"), {
        yPercent: -20,
        ease: "power2.out",
        duration: 2,
      });
    }
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section ref={heroRef} className="relative md:h-full w-full">
      {/* Hero Content */}
      <div className="relative z-10 w-full">
        {/* Swiper Container */}
        <motion.div
          className="swiper-container relative w-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, Parallax]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            parallax={true}
            speed={1000}
            loop={true}
            className="hero-swiper w-full overflow-hidden bg-[#691218]"
          >
            {newsData.map((news, index) => (
              <SwiperSlide key={news.id}>
                <div className="relative h-full md:h-[85vh] overflow-hidden">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${news.image})` }}
                    data-swiper-parallax="-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-center h-[100%] p-6 sm:p-8 md:p-12">
                    <div className="max-w-6xl mx-auto w-full">
                      {/* Category Badge */}
                      {/* <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block mb-4"
                      >
                        <span className="px-4 py-2 bg-[#F10424] text-white text-sm font-semibold rounded-full">
                          {news.category}
                        </span>
                      </motion.div> */}
                      <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg md:text-xl text-[red] mb-6 max-w-3xl leading-relaxed"
                        data-swiper-parallax="-100"
                      >
                        {news.excerpt}
                      </motion.p>
                      {/* Title */}
                      <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight md:w-[50%]"
                        data-swiper-parallax="-200"
                      >
                        {news.title}
                      </motion.h2>

                      {/* Excerpt */}

                      {/* Meta Information */}
                      {/* <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap items-center gap-6 mb-8"
                      >
                        <div className="flex items-center gap-2 text-gray-300">
                          <User className="w-5 h-5" />
                          <span className="font-medium">{news.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Calendar className="w-5 h-5" />
                          <span>{formatDate(news.date)}</span>
                        </div>
                      </motion.div> */}

                      {/* Read More Button */}
                      {/* <motion.button
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-[#F10424] text-white font-semibold rounded-full hover:bg-[#F10424]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Read Full Story
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button className="swiper-button-next-custom absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"></div>
        </motion.div>

        {/* Small Bottom Right Slider */}
        <motion.div
          className="absolute bottom-10 right-4 z-30 w-72 sm:w-80 h-28 sm:h-32 hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            className="small-swiper rounded-lg overflow-hidden shadow-lg"
          >
            {newsData.slice(0, 6).map((news, index) => (
              <SwiperSlide key={`small-${news.id}`}>
                <div className="relative h-28 sm:h-32 overflow-hidden cursor-pointer group">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 group-hover:scale-100 transition-transform duration-500"
                    style={{ backgroundImage: `url(${news.image})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-3">
                    <div className="text-white">
                      {/* Category */}
                      <span className="text-xs bg-[#F10424] px-2 py-1 rounded-full font-semibold">
                        {news.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-sm font-bold mt-2 line-clamp-2 leading-tight">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between text-sm font-semibold text-gray-300">
            <span>{String(1).padStart(2, "0")}</span>
            <div className="h-[2px] bg-red-400 flex-1 mx-3 mt-2" />
            <span>{String(newsData.length).padStart(2, "0")}</span>
          </div>
        </motion.div>

        {/* Mobile Small Slider */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 z-30 h-24 md:hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
            slidesPerView={2.5}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            className="small-swiper rounded-lg overflow-hidden shadow-lg"
          >
            {newsData.slice(0, 4).map((news, index) => (
              <SwiperSlide key={`mobile-${news.id}`}>
                <div className="relative h-24 overflow-hidden cursor-pointer group">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 group-hover:scale-100 transition-transform duration-500"
                    style={{ backgroundImage: `url(${news.image})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-2">
                    <div className="text-white">
                      {/* Category */}
                      <span className="text-xs bg-[#F10424] px-1.5 py-0.5 rounded-full font-semibold">
                        {news.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-xs font-bold mt-1 line-clamp-2 leading-tight">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .hero-swiper .swiper-slide {
          height: 100vh;
        }

        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active-custom {
          background: #f10424;
          transform: scale(1.2);
        }

        .swiper-button-prev-custom:after,
        .swiper-button-next-custom:after {
          display: none;
        }

        .small-swiper .swiper-slide {
          height: None;
        }

        .small-swiper .swiper-slide-active {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Hero;
