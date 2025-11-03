"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, Play, Camera, Film } from "lucide-react";
import { galleryItems } from "../constants";

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: Camera },
    { id: "films", label: "Films", icon: Film },
    { id: "behind-scenes", label: "Behind Scenes", icon: Eye },
    { id: "events", label: "Events", icon: Play },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[24px] md:text-[36px] font-poppins font-bold text-white mb-6">
            Controversies We Have Handled
          </h2>

          {/* Category Filter */}
          {/* <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setActiveCategory(category.id)}
                  className={`${
                    activeCategory === category.id
                      ? "bg-gold text-black hover:bg-yellow-600"
                      : "border-white/20 text-white hover:bg-white/10"
                  } transition-all duration-300`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.label}
                </button>
              );
            })}
          </div> */}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/30 transition-all duration-300 ${
                index % 7 === 0 || index % 7 === 3
                  ? "md:col-span-2 md:row-span-2"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index % 7 === 0 || index % 7 === 3 ? "h-64 md:h-96" : "h-48"
                  }`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Play Button for Videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gold/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </div>
                )}

                {/* View Button for Images */}
                {item.type === "image" && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-poppins font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
