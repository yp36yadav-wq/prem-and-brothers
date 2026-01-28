export default function SubsidySection() {
  return (
    <section className="w-full bg-white py-6 md:py-8 px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <h1 className="text-blue-950 font-bold text-2xl md:text-4xl lg:text-5xl leading-tight">
            Avail Subsidy Upto ₹1.08 Lakhs for Solar in Uttar Pradesh
          </h1>

          <p className="mt-3 md:mt-4 text-gray-700 italic text-sm md:text-base leading-relaxed">
            At Prem & Brothers, we specialize in providing innovative
            power solutions, ensuring reliable energy for homes and
            businesses with our top-quality inverter batteries and solar panels.
          </p>

          {/* TABLE */}
          <div className="mt-4 md:mt-6 overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full border-collapse bg-white text-xs md:text-sm min-w-[800px]">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border border-gray-300 px-2 md:px-3 py-1.5 md:py-2 text-left font-semibold">
                    System Capacity
                  </th>
                  <th className="border border-gray-300 px-2 md:px-3 py-1.5 md:py-2 text-center font-semibold">
                    Central Govt Subsidy (₹)
                  </th>
                  <th className="border border-gray-300 px-2 md:px-3 py-1.5 md:py-2 text-center font-semibold">
                    State Govt Subsidy (₹)
                  </th>
                  <th className="border border-gray-300 px-2 md:px-3 py-1.5 md:py-2 text-center font-semibold">
                    Total Subsidy (₹)
                  </th>
                  <th className="border border-gray-300 px-2 md:px-3 py-1.5 md:py-2 bg-yellow-400 text-black text-center font-semibold">
                    Estimated Cost (₹)
                  </th>
                  <th className="border border-gray-300 px-2 md:px-3 py-1.5 md:py-2 text-center font-semibold">
                    After Subsidy (₹)
                  </th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">1 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">32,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">17,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">49,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">74,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">25,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">2 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">62,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">32,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">94,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">1,44,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">50,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">3 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">80,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">32,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,12,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">1,94,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">82,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">4 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">80,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">32,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,12,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">2,49,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">1,37,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">5 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">80,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">32,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,12,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">2,99,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">1,87,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">6 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">80,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">32,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,12,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">3,39,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">2,27,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">7 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">80,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">32,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,12,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">3,94,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">2,82,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">8 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">80,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">32,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,12,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">4,09,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">2,97,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">9 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">80,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">32,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,12,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">4,59,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">3,47,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">10 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">80,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">32,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,12,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">5,09,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">3,97,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT IMAGE WITH TEXT OVERLAY */}
        <div className="relative w-full h-56 md:h-80 lg:h-full min-h-[350px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
          <img
            src="https://i.pinimg.com/1200x/41/9c/e6/419ce6f5041e2200924e22dfe2afd15c.jpg"
            alt="PM Modi Solar Scheme"
            className="w-full h-full object-cover object-center"
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* TEXT ON IMAGE */}
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white drop-shadow-2xl">
              PM Surya Ghar Scheme
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-semibold text-white mt-1.5 drop-shadow-lg">
              Free Solar for Every Home
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}