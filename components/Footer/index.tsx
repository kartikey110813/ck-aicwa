import { MailOpen, MapPin, Phone, PhoneCall } from "lucide-react";
import React from "react";
import {
  FaPhone,
  FaMapPin,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#7a0e10] via-[#8b1417] to-[#3b0b0d] min-h-[100vh] text-white relative overflow-hidden">
      {/* Top Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left  border-b border-[#ffffff33]">
        {/* Phone */}
        <div className="flex flex-col items-center md:items-start gap-2 px-6 md:px-20 py-6 md:py-10">
          <PhoneCall className="mb-1 border-[1px] p-1 rounded-full" />
          <h3 className="text-[20px]">Phone Number</h3>
          <p className="font-bold text-white text-[25px]">+91 7700 999 457</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-start gap-2 md:border-l border-t border-b md:border-b-[0px] md:border-r border-[#ffffff33] md:px-10 mt-10 md:mt-0 px-6 md:px-20 py-6 md:py-10">
          <MapPin className="mb-1 border-[1px] p-1 rounded-full" />
          <h3 className="text-[20px]">Address</h3>
          <p className="font-bold text-white text-[20px]">
            5, Sunheights Building, Suncity Complex, <br />
            Nea Shyamlal Sohanal Gupta Chowk, <br />
            Powai, Mumbai-400076
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center md:items-start gap-2 mt-10 md:mt-0 px-6 md:px-20 py-6 md:py-10">
          <MailOpen className="text-2xl mb-1" />
          <h3 className="text-[20px]">Email Address</h3>
          <p className="font-bold text-white text-[20px]">
            aicwaofficial@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-20 py-6 md:py-20 gap-12 md:gap-0">
        {/* Left Circle Graphic */}
        <div className="md:flex md:items-center relative m-auto hidden">
          {/* Large Camera Circle */}
          {/* <div className="absolute -top-10 left-0">
            <div className="bg-[#E96572] w-40 h-40 rounded-full flex justify-center items-end shadow-lg">
              <img
                src="/footer1.png"
                alt="camera"
                className="w-full h-full object-contain"
              />
            </div>
          </div> */}

          {/* Film Circle + Text */}
          {/* <div className="flex flex-col items-center text-center md:ml-24 md:mt-16 z-10">
            <img
              src="/fil-reel.svg"
              alt=""
              className="relative w-[30vw] -left-20"
            />
            <div className="absolute flex flex-col items-center justify-center mt-20">
              <h3 className="text-lg md:text-xl font-semibold text-center leading-snug">
                No One Is Powerless
                <br />
                When AICWA Come Together
              </h3>
              <button className="mt-4 text-sm md:text-base bg-transparent px-5 py-2 flex items-center gap-2 hover:bg-white hover:text-[#B9314F] transition">
                Get Membership <span>→</span>
              </button>
            </div>
          </div> */}

          {/* Bottom Reel Circle */}
          {/* <div className="absolute bottom-0 left-28 md:left-56">
            <div className="w-24 h-24 rounded-full flex justify-center items-center">
              <img
                src="/footer2.png"
                alt="reel"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div> */}
          <img src="/footer3.png" className="w-[40vw]" />
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
          {/* Logo & Description */}
          <img
            src="/images/logo-white.png"
            alt="AICWA logo"
            className="w-32 mb-4 object-contain"
          />
          <p className="text-sm text-white/90 mb-8">
            AICWA is the only association in Bollywood affiliated with the
            Government of Maharashtra.
          </p>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:bg-white hover:text-[#B9314F] p-2 rounded inline-block transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-white hover:text-[#B9314F] p-2 rounded inline-block transition"
                >
                  Controversy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-white hover:text-[#B9314F] p-2 rounded inline-block transition"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:bg-white hover:text-[#B9314F] p-2 rounded inline-block transition"
                >
                  Our Articles
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#B9314F] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#B9314F] transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#B9314F] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#B9314F] transition"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Terms & Footer */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 mt-10 text-xs text-white/80">
            <a href="#" className="hover:underline">
              Terms & Condition
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          <p className="mt-6 text-xs text-white/70">
            © 2025 <span className="font-semibold">AICWA</span> | All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
