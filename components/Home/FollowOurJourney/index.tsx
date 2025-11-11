"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Globe,
} from "lucide-react";

const FollowOurJourney = () => {
  //   const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    {
      id: "facebook",
      icon: Facebook,
      color: "#1877F2",
      borderColor: "border-blue-500",
      textColor: "text-blue-500",
      label: "Facebook",
      followers: "15.2K",
    },
    {
      id: "instagram",
      icon: Instagram,
      color: "#E4405F",
      borderColor: "border-pink-500",
      textColor: "text-pink-500",
      label: "Instagram",
      followers: "23.8K",
    },
    {
      id: "twitter",
      icon: Twitter,
      color: "#1DA1F2",
      borderColor: "border-sky-500",
      textColor: "text-sky-500",
      label: "Twitter",
      followers: "18.5K",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      color: "#0077B5",
      borderColor: "border-blue-600",
      textColor: "text-blue-600",
      label: "LinkedIn",
      followers: "12.3K",
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      color: "#25D366",
      borderColor: "border-green-500",
      textColor: "text-green-500",
      label: "WhatsApp",
      followers: "Direct",
    },
    {
      id: "website",
      icon: Globe,
      color: "#6A1319",
      borderColor: "border-red-800",
      textColor: "text-red-800",
      label: "Website",
      followers: "Official",
    },
  ];
  return (
    <section
      className="relative overflow-hidden py-10"
      style={{ backgroundColor: "#EDD8B5" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8 order-2 lg:order-1"
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#6A1319] leading-tight"
              >
                Follow Our Journey
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-lg sm:text-xl text-[#6A1319] opacity-80 leading-relaxed max-w-lg"
              >
                All Indian Cine Workers Association (AICWA) is the only
                association in Bollywood affiliated with Government of
                Maharashtra.
              </motion.p>
            </div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href="#"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  //   onMouseEnter={() => setHoveredIcon(social.id)}
                  //   onMouseLeave={() => setHoveredIcon(null)}
                  className={`relative group w-14 h-14 border-[1px] ${social.borderColor} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <social.icon className={`w-7 h-7 ${social.textColor}`} />

                  {/* Tooltip */}
                  {/* <AnimatePresence>
                    {hoveredIcon === social.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-10"
                      >
                        <div className="text-center">
                          <div className="font-semibold">{social.label}</div>
                          <div className="text-xs opacity-80">
                            {social.followers}
                          </div>
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                      </motion.div>
                    )}
                  </AnimatePresence> */}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Orange Circle Background */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="absolute inset-0 flex items-end justify-end"
              >
                <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-2xl"></div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative z-10 flex items-end justify-center h-96 sm:h-[450px] lg:h-[500px]"
              >
                <img
                  src="/founder.png"
                  alt="AICWA President"
                  className="h-full object-cover object-top rounded-t-full max-w-xs sm:max-w-sm"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FollowOurJourney;
