"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://v1.pinimg.com/videos/mc/720p/bd/54/af/bd54af7fa5b3139be0dd12dbd3ce58cd.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 py-12 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white max-w-lg">
            <h2 className="text-5xl font-bold mb-3 tracking-tight">Contact</h2>
            <p className="mb-8 text-lg opacity-90 leading-relaxed">
              Get in touch for energy solutions.
            </p>

            <div className="space-y-4 mb-8">
              <a 
                href="mailto:info@premandbrothers.com"
                className="flex items-center gap-3 hover:text-blue-300 transition-colors group"
              >
                <span className="text-2xl">📧</span>
                <span className="group-hover:underline">info@premandbrothers.com</span>
              </a>
              <a 
                href="tel:+918193801127"
                className="flex items-center gap-3 hover:text-blue-300 transition-colors group"
              >
                <span className="text-2xl">📞</span>
                <span className="group-hover:underline">+91-8193801127</span>
              </a>
            </div>

            <p className="uppercase text-sm font-semibold mb-4 tracking-wider">
              Follow us on
            </p>
            <div className="flex gap-4 mb-8">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/90 text-black hover:bg-blue-600 hover:text-white hover:scale-110 md:hover:bg-blue-600 active:bg-black md:active:bg-blue-600 transition-all duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/90 text-black hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white hover:scale-110 active:bg-black md:active:bg-gradient-to-br md:active:from-purple-600 md:active:to-pink-600 transition-all duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/90 text-black hover:bg-blue-700 hover:text-white hover:scale-110 active:bg-black md:active:bg-blue-700 transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/90 text-black hover:bg-black hover:text-white hover:scale-110 active:bg-black transition-all duration-300 shadow-lg"
                aria-label="X (Twitter)"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md mx-auto md:ml-auto transform hover:scale-105 transition-transform duration-300">

            {/* ADDRESS + HOURS */}
            <div className="p-6 border-b border-gray-200 text-black">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Address
              </h3>
              <p className="text-sm leading-relaxed mb-4 text-gray-700">
                PREM AND BROTHER,<br />
                NEAR HINDU COLLEGE,<br />
                STATION ROAD, MORADABAD-244001
              </p>

              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span className="text-2xl">🕐</span>
                Hours
              </h3>
              <p className="text-sm text-gray-700 font-medium">10AM - 6PM</p>
            </div>

            {/* RESPONSIVE MAP */}
            <div className="w-full h-34">
              <iframe
                src="https://www.google.com/maps?q=Hindu%20College%20Moradabad&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Location Map"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER TEXT */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm opacity-90">
        <p>© 2025 Prem and Brothers. All rights reserved. </p>
        
        
      </div>

    </section>
  );
}