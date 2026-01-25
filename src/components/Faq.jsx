"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is a solar panel?",
    a: "A solar panel converts sunlight into electricity for homes and businesses.",
  },
  {
    q: "What are the benefits of solar energy?",
    a: "It reduces electricity bills, is eco-friendly, and saves money in the long run.",
  },
  {
    q: "How long do solar panels last?",
    a: "Solar panels typically last 25–30 years.",
  },
  {
    q: "Do solar panels work on cloudy days?",
    a: "Yes, but power generation may be slightly lower.",
  },
  {
    q: "How much space is needed for solar panels?",
    a: "About 100 sq. ft. area is required for a 1 kW system.",
  },
  {
    q: "Is government subsidy available?",
    a: "Yes, government subsidies are available for residential solar systems.",
  },
  {
    q: "What types of solar systems are there?",
    a: "On-grid, Off-grid, and Hybrid solar systems.",
  },
  {
    q: "How much maintenance is required?",
    a: "Very little—mainly regular cleaning of panels.",
  },
  {
    q: "Can solar panels run AC and heavy appliances?",
    a: "Yes, with the right system capacity.",
  },
  {
    q: "Is solar power safe?",
    a: "Yes, solar systems are safe and reliable when installed professionally.",
  },
];

export default function SolarFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl  font-bold text-center text-blue-950 mb-8">
          🔆 SOLAR PANEL – <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">FAQ</span>
        </h2>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-lg  bg-white  overflow-hidden  shadow-sm border   border-gray-200"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full  flex justify-between  hover:bg-blue-50  transition items-center   text-left  p-4   
                font-medium text-gray-800   "
              >
                <span className="text-sm sm:text-base">{item.q}</span>
                <span className="text-blue-600 text-lg font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
