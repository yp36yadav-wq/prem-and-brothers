export default function Stand() {
  return (
    <section className="w-full bg-blue-200 py-14 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-2xl  md:text-lgm text-blue-900 leading-relaxed mb-6">
            When it comes to installing solar panels,{" "}
            <span className="font-semibold">
              quality, reliability, and post-installation service
            </span>{" "}
            matter. That’s where{" "}
            <span className="italic font-semibold">Prem and Brothers</span>{" "}
            stand out.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold text-blue-950 mb-8">
            ✨ Here’s Why We Recommend Prem and Brothers:
          </h2>

          <ul className="space-y-4 text-lg md:text-xl font-semibold text-blue-900">
            {[
              "Govt-Approved Vendor",
              "Experienced Team",
              "Transparent Pricing",
              "Top-Quality Solar Panels",
              "Fast Installation & Support",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-green-600 text-2xl">✅</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[380px] sm:h-[440px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl">

          {/* IMAGE */}
          <img
            src="https://i.pinimg.com/1200x/dd/f4/78/ddf47897a1c7c32ed2c343cc33472c15.jpg"
            alt="PM Surya Ghar Muft Bijli Yojana"
            className="w-full h-full  object-top object-cover"
          />

          {/* SOFT DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* SMALL TEXT ON IMAGE */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-lg max-w-[85%]">
            <p className="text-xs sm:text-sm font-semibold text-gray-800">
              PM Surya Ghar Muft Bijli Yojana
            </p>
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-900 leading-snug">
              Trusted Installation by <br className="hidden sm:block" />
              Prem & Brothers
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
