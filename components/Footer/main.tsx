"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient } from "./hover-footer";
import { TextHoverEffect } from "./hover-footer";

function FooterTwo() {
  // Footer link data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#" },
        { label: "Controversy", href: "#" },
        { label: "Membership", href: "#" },
        { label: "Our Articles", href: "#" },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { label: "Terms & Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#EDD8B5]" />,
      text: "info@aicwa.in",
      href: "mailto:info@aicwa.in",
    },
    {
      icon: <Phone size={18} className="text-[#EDD8B5]" />,
      text: "+91 7700999457",
      href: "tel:+917700999457",
    },
    {
      icon: <MapPin size={18} className="text-[#EDD8B5]" />,
      text: "Mumbai, Maharashtra",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
    { icon: <Globe size={20} />, label: "Globe", href: "#" },
  ];

  return (
    <footer className="h-full p-8 bg-[#EDD8B5] text-[#EDD8B5]">
      <div
        className="bg-[#0F0F11]/70 relative rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1653299448072-fb7408c264b3?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto p-14 z-40 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
            {/* Brand section */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <h3 className="text-white text-3xl">AICWA</h3>
              </div>
              <p className="text-sm leading-relaxed">
                AICWA is the only association in Bollywood affiliated with
                Government of Maharashtra.
              </p>
            </div>

            {/* Footer link sections */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white text-lg mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label} className="relative">
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact section */}
            <div>
              <h4 className="text-white text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    {item.icon}
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-white transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="hover:text-white transition-colors">
                        {item.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-t border-gray-700 my-8" />

          {/* Footer bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
            {/* Social icons */}
            {/* <div className="flex space-x-6 text-gray-400">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover:text-[#EDD8B5] transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div> */}

            {/* Copyright */}
            {/* <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} AICWA. All rights reserved.
            </p> */}
          </div>
        </div>

        {/* Text hover effect */}
        <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
          <TextHoverEffect text="AICWA" className="z-50" />
        </div>

        <FooterBackgroundGradient />
      </div>
    </footer>
  );
}

export default FooterTwo;
