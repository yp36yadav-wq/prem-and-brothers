"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import { useRouter } from "next/navigation"; // ✅ CORRECT IMPORT

const slidesData = [
  {
    image:
      "https://i.pinimg.com/736x/fd/de/6f/fdde6fbebd82f75da1288f75f587c810.jpg",
    subtitle: "Prem And Brothers",
    title: "Plug Into The Sun",
    description:
      "Prem And Brothers is a complete turnkey solution provider in the solar photovoltaic and thermal sector.",
  },
  {
    image:
      "https://i.pinimg.com/736x/6e/5b/d1/6e5bd17938ee92070f8c7e102db8da60.jpg",
    subtitle: "Prem And Brothers",
    title: "Power Your Future",
    description:
      "We deliver efficient and sustainable solar solutions for residential, commercial, and industrial needs.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/e4/4d/a5/e44da5f0251f003cb6e5a3054b24e670.jpg",
    subtitle: "Prem And Brothers",
    title: "Sustainable & Reliable",
    description:
      "Our expert team ensures high-quality installation, long-term performance, and reliable solar systems.",
  },
];

const HeroSlider = () => {
  const router = useRouter(); // ✅ hook inside component

  const handleRouter = () => {
    router.push("/contact");
  };

  return (
    <section className="relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideContent {...slide} onClick={handleRouter} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

/* SLIDE CONTENT COMPONENT */
function SlideContent({ image, subtitle, title, description, onClick }) {
  return (
    <div
      className="relative w-full h-full bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
        <p className="tracking-widest uppercase mb-4 text-sm md:text-base">
          {subtitle}
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
          {title}
        </h1>

        <p className="max-w-2xl text-lg md:text-xl mb-8 opacity-90">
          {description}
        </p>

        <button
          className="px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-yellow-400 transition"
          onClick={onClick}
        >
          GET QUOTE
        </button>
      </div>
    </div>
  );
}

export default HeroSlider
