"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* 🔹 TOP BLUE STRIP */}
      <div className="bg-[#061b3a] text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 gap-2">

          {/* Social Icons - Left side */}
          <div className="flex gap-3 sm:gap-4">
            <a href="https://x.com" target="_blank" className="hover:text-black transition-colors">
              <FaXTwitter className="text-base sm:text-lg" />
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-[#1877F2] transition-colors">
              <FaFacebookF className="text-base sm:text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-[#E1306C] transition-colors">
              <FaInstagram className="text-base sm:text-lg" />
            </a>
          </div>

          {/* Contact Info - Right side */}
          <div className="flex flex-row items-center gap-3 sm:gap-6">
            <a href="mailto:info@premandbrothers.com" className="flex items-center gap-1.5 sm:gap-2 hover:text-yellow-300 transition-colors">
              <FaEnvelope className="text-xs sm:text-sm flex-shrink-0" /> 
              <span className="text-[10px] sm:text-sm">info@premandbrothers.com</span>
            </a>
            <a href="tel:+918193801127" className="flex items-center gap-1.5 sm:gap-2 hover:text-yellow-300 transition-colors">
              <FaPhone className="text-xs sm:text-sm flex-shrink-0" /> 
              <span className="text-[10px] sm:text-sm whitespace-nowrap">+91-8193801127</span>
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 MAIN NAVBAR */}
      <div className="bg-blue-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">

          {/* Logo */}
          <img
            src="/logo.avif"
            alt="Prem and Brothers Logo"
            className="h-16 sm:h-20"
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-10 text-sm font-semibold tracking-widest text-[#2c3e63]">
            <a href="/" className="hover:text-yellow-500 transition-colors">HOME</a>
            <a href="/about" className="hover:text-yellow-500 transition-colors">ABOUT US</a>
            <a href="/muft" className="hover:text-yellow-500 transition-colors">PM MUFT BIJLI YOJANA</a>
            <a href="/choose" className="hover:text-yellow-500 transition-colors">WHY CHOOSE US</a>
              <a href="/portfolio" className="block hover:text-yellow-500 transition-colors">PORTFOLIO</a>
            <a href="/contact" className="hover:text-yellow-500 transition-colors">CONTACT US</a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-[#2c3e63]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-blue-100 px-6 py-6 space-y-4 text-[#2c3e63] font-semibold">
            <a href="/" className="block hover:text-yellow-500 transition-colors">HOME</a>
            <a href="/about" className="block hover:text-yellow-500 transition-colors">ABOUT US</a>
            <a href="/muft" className="block hover:text-yellow-500 transition-colors">PM MUFT BIJLI YOJANA</a>
            <a href="/choose" className="block hover:text-yellow-500 transition-colors">WHY CHOOSE US</a>
             <a href="/portfolio" className="block hover:text-yellow-500 transition-colors">PORTFOLIO</a>
            <a href="/contact" className="block hover:text-yellow-500 transition-colors">CONTACT US</a>
          </div>
        )}
      </div>
    </header>
  );
}