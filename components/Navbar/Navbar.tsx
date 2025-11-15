"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaInfoCircle,
  FaNewspaper,
  FaEnvelope,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering consistency
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("overflow-hidden"); // Prevent background scroll
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return (
      <div className="fixed top-0 left-0 w-full z-50 bg-[#EDD8B5]">
        <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-0">
          <div className="bg-[#EDD8B5] w-full max-w-[1380px] mx-auto mt-4 mb-4 px-4 sm:px-6 lg:px-8 text-white py-[18px] relative">
            <div className="flex justify-between items-center">
              {/* <div className="flex items-center gap-2 sm:gap-4">
                <Image
                  src="/images/logo.png"
                  alt="AICWA Logo"
                  width={120}
                  height={60}
                  className="h-8 sm:h-10 w-auto"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-[#EDD8B5]">
      <div className="">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 text-white py-[18px] relative">
          <div className="flex justify-between items-center">
            {/* <div className="flex items-center gap-2 sm:gap-4"> */}
            <Link href="/" className="cursor-pointer">
              <Image
                src="/images/logo.png"
                alt="AICWA Logo"
                width={160}
                height={55}
                className="h-14 w-auto sm:h-16" // Increased height for mobile
              />
            </Link>
            {/* </div> */}

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center">
              <div className="text-sm flex border-[2px] py-2 px-4 rounded-[20px] border-[#690714]">
                <div className="px-3 py-2 transition">
                  <Link href="/">
                    <p className="relative text-[#690714] text-[16px] transition-colors duration-300 hover:text-[#F10424] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F10424] after:transition-all after:duration-300 hover:after:w-full">
                      Home
                    </p>
                  </Link>
                </div>
                <div className="px-3 py-2 transition">
                  <Link href="/">
                    <p className="relative text-[#690714] text-[16px] transition-colors duration-300 hover:text-[#F10424] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F10424] after:transition-all after:duration-300 hover:after:w-full">
                      About Us
                    </p>
                  </Link>
                </div>
                <div className="px-3 py-2 transition">
                  <Link href="/">
                    <p className="relative text-[#690714] text-[16px] transition-colors duration-300 hover:text-[#F10424] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F10424] after:transition-all after:duration-300 hover:after:w-full">
                      Controversy
                    </p>
                  </Link>
                </div>
                <div className="px-3 py-2 transition">
                  <Link href="/">
                    <p className="relative text-[#690714] text-[16px] transition-colors duration-300 hover:text-[#F10424] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F10424] after:transition-all after:duration-300 hover:after:w-full">
                      Membership
                    </p>
                  </Link>
                </div>
                <div className="px-3 py-2 transition">
                  <Link href="/">
                    <p className="relative text-[#690714] text-[16px] transition-colors duration-300 hover:text-[#F10424] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F10424] after:transition-all after:duration-300 hover:after:w-full">
                      Gallery
                    </p>
                  </Link>
                </div>
                <div className="px-3 py-2 transition">
                  <Link href="/">
                    <p className="relative text-[#690714] text-[16px] transition-colors duration-300 hover:text-[#F10424] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F10424] after:transition-all after:duration-300 hover:after:w-full">
                      Our Articles
                    </p>
                  </Link>
                </div>
                <div className="px-3 py-2 transition">
                  <Link href="/">
                    <p className="relative text-[#690714] text-[16px] transition-colors duration-300 hover:text-[#F10424] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#F10424] after:transition-all after:duration-300 hover:after:w-full">
                      Contact Us
                    </p>
                  </Link>
                </div>
              </div>
              {/* Explore Dropdown */}
            </div>
            <div className="relative flex gap-5 hidden md:block">
              <Button text="Login" />
            </div>

            {/* Mobile Right Side - Schools Near You + Hamburger */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="focus:outline-none mobile-menu-container"
              >
                {mobileMenuOpen ? (
                  <FaTimes color="#6b0c0f" size={20} />
                ) : (
                  <FaBars color="#6b0c0f" size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Sidebar */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed top-0 right-0 h-full w-80 bg-[#EDD8B5] shadow-2xl z-50 mobile-menu-container flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700 flex-shrink-0">
                <span className="text-[#6b0c0f] text-xl">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#6b0c0f] hover:text-white transition"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Navigation Menu - Scrollable */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-6 space-y-2">
                  {/* Additional Links */}
                  <div className="mb-6">
                    <div className="space-y-2">
                      <Link
                        href="/About"
                        className="flex items-center p-3 rounded-lg hover:bg-[#2A2E34] transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FaInfoCircle
                          className="text-[#6b0c0f] mr-3"
                          size={18}
                        />
                        <span className="text-[#6b0c0f] font-medium">Home</span>
                      </Link>
                      <Link
                        href="/About"
                        className="flex items-center p-3 rounded-lg hover:bg-[#2A2E34] transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FaInfoCircle
                          className="text-[#6b0c0f] mr-3"
                          size={18}
                        />
                        <span className="text-[#6b0c0f] font-medium">
                          About Us
                        </span>
                      </Link>
                      <Link
                        href="/NewsUpdates"
                        className="flex items-center p-3 rounded-lg hover:bg-[#2A2E34] transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FaNewspaper
                          className="text-[#6b0c0f] mr-3"
                          size={18}
                        />
                        <span className="text-[#6b0c0f] font-medium">
                          Controversy
                        </span>
                      </Link>
                      <Link
                        href="/ContactUs"
                        className="flex items-center p-3 rounded-lg hover:bg-[#2A2E34] transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FaEnvelope className="text-[#6b0c0f] mr-3" size={18} />
                        <span className="text-[#6b0c0f] font-medium">
                          Membership
                        </span>
                      </Link>
                      <Link
                        href="/ContactUs"
                        className="flex items-center p-3 rounded-lg hover:bg-[#2A2E34] transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FaEnvelope className="text-[#6b0c0f] mr-3" size={18} />
                        <span className="text-[#6b0c0f] font-medium">
                          Gallery
                        </span>
                      </Link>
                      <Link
                        href="/ContactUs"
                        className="flex items-center p-3 rounded-lg hover:bg-[#2A2E34] transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FaEnvelope className="text-[#6b0c0f] mr-3" size={18} />
                        <span className="text-[#6b0c0f] font-medium">
                          Our Articles
                        </span>
                      </Link>
                      <Link
                        href="/ContactUs"
                        className="flex items-center p-3 rounded-lg hover:bg-[#2A2E34] transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FaEnvelope className="text-[#6b0c0f] mr-3" size={18} />
                        <span className="text-[#6b0c0f] font-medium">
                          Contact Us
                        </span>
                      </Link>
                      <div className="relative flex gap-5">
                        <Button text="Login" />
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
