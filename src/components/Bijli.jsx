"use client"
import { useState } from 'react';

export default function SubsidySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    capacity: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

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
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">34,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">19,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">54,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">74,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">20,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">2 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">64,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">34,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">99,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">1,44,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">45,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">3 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">82,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">34,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,17,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">1,94,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">77,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">4 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">82,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">34,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,17,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">2,49,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">1,32,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">5 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">82,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">34,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,17,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">2,99,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">1,82,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">6 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">82,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">34,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,17,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">3,39,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">2,22,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">7 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">82,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">34,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,17,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">3,94,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">2,77,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">8 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">82,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">34,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,17,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">4,09,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">2,92,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">9 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">82,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">34,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,17,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">4,59,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">3,42,000</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold text-blue-900">10 KW</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">82,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">34,500</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 font-semibold">1,17,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5 bg-yellow-50 font-bold text-orange-600">5,09,000</td>
                  <td className="border border-gray-300 px-2 md:px-3 py-1.5">3,92,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-6 md:p-8 order-1 lg:order-2">
          <div className="bg-blue-900 text-white rounded-lg p-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Get Free Consultation</h2>
            <p className="text-sm md:text-base mt-2 opacity-90">
              Fill the form to know your subsidy eligibility
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="10-digit mobile number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="capacity" className="block text-sm font-semibold text-gray-700 mb-2">
                System Capacity *
              </label>
              <select
                id="capacity"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white"
              >
                <option value="">Select capacity</option>
                <option value="1kw">1 KW</option>
                <option value="2kw">2 KW</option>
                <option value="3kw">3 KW</option>
                <option value="4kw">4 KW</option>
                <option value="5kw">5 KW</option>
                <option value="6kw">6 KW</option>
                <option value="7kw">7 KW</option>
                <option value="8kw">8 KW</option>
                <option value="9kw">9 KW</option>
                <option value="10kw">10 KW</option>
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Enter your city"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Get Free Quote
            </button>

            <p className="text-xs text-gray-600 text-center mt-4">
              By submitting this form, you agree to our terms and privacy policy
            </p>
          </form>
        </div>
        
      </div>
    </section>
  );
}