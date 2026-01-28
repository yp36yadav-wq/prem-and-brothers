"use client";
import { useState, useEffect } from "react";

export default function Calculator() {
  const [capacity, setCapacity] = useState(1);
  const [centralSubsidy, setCentralSubsidy] = useState(32000);
  const [stateSubsidy, setStateSubsidy] = useState(17000);
  const [totalSubsidy, setTotalSubsidy] = useState(49000);
  const [totalCost, setTotalCost] = useState(74000);
  const [netCost, setNetCost] = useState(25000);

  // Corrected subsidy data matching the table
  const subsidyData = {
    1: { central: 32000, state: 17000, total: 49000, cost: 74000, net: 25000 },
    2: { central: 62000, state: 32000, total: 94000, cost: 144000, net: 50000 },
    3: { central: 80000, state: 32000, total: 112000, cost: 194000, net: 82000 },
    4: { central: 80000, state: 32000, total: 112000, cost: 249000, net: 137000 },
    5: { central: 80000, state: 32000, total: 112000, cost: 299000, net: 187000 },
    6: { central: 80000, state: 32000, total: 112000, cost: 339000, net: 227000 },
    7: { central: 80000, state: 32000, total: 112000, cost: 394000, net: 282000 },
    8: { central: 80000, state: 32000, total: 112000, cost: 409000, net: 297000 },
    9: { central: 80000, state: 32000, total: 112000, cost: 459000, net: 347000 },
    10: { central: 80000, state: 32000, total: 112000, cost: 509000, net: 397000 },
  };

  // Update subsidy data when capacity changes
  useEffect(() => {
    const data = subsidyData[capacity] || subsidyData[10];
    setCentralSubsidy(data.central);
    setStateSubsidy(data.state);
    setTotalSubsidy(data.total);
    setTotalCost(data.cost);
    setNetCost(data.net);
  }, [capacity]);

  const handleManualChange = (value) => {
    setCapacity(value);
  };

  const formatCurrency = (value) => `₹${value.toLocaleString("en-IN")}`;

  // Calculate savings percentage
  const savingsPercentage = ((totalSubsidy / totalCost) * 100).toFixed(1);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* LEFT – CALCULATOR */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold text-center text-indigo-900 mb-4">
              SOLAR SUBSIDY CALCULATOR
            </h1>

            {/* Slider */}
            <div className="mb-5">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-gray-700">System Capacity</span>
                <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                  {capacity} kW
                </div>
              </div>

              <div className="relative py-2">
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={capacity}
                  onChange={(e) => handleManualChange(+e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${
                      ((capacity - 1) / 9) * 100
                    }%, #e5e7eb ${((capacity - 1) / 9) * 100}%)`,
                  }}
                />
              </div>

              {/* Clear kW labels for all values */}
              <div className="flex justify-between text-xs text-gray-600 mt-2 font-medium">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                  <span
                    key={val}
                    className={`transition-all ${
                      val === capacity ? 'text-indigo-700 font-bold text-sm' : ''
                    }`}
                  >
                    {val} KW
                  </span>
                ))}
              </div>
              <div className="text-center text-xs text-gray-500 mt-1">
                (in kilowatts)
              </div>
            </div>

            {/* Subsidy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3 transition-all hover:shadow-md">
                <p className="text-xs text-blue-700 font-medium">Central Govt</p>
                <p className="font-bold text-lg text-blue-900">
                  {formatCurrency(centralSubsidy)}
                </p>
              </div>

              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-3 transition-all hover:shadow-md">
                <p className="text-xs text-green-700 font-medium">State Govt</p>
                <p className="font-bold text-lg text-green-900">
                  {formatCurrency(stateSubsidy)}
                </p>
              </div>

              <div className="bg-indigo-50 border-2 border-indigo-400 rounded-lg p-3 transition-all hover:shadow-md">
                <p className="text-xs text-indigo-700 font-medium">Total Subsidy</p>
                <p className="font-bold text-lg text-indigo-900">
                  {formatCurrency(totalSubsidy)}
                </p>
              </div>
            </div>

            {/* Savings Badge */}
            <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-lg p-3 mb-5 text-center">
              <p className="text-white font-bold text-lg">
                You Save {savingsPercentage}% with Government Subsidy!
              </p>
            </div>

            {/* Breakdown */}
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-3 text-lg">
                Cost Breakdown
              </h3>

              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">System Capacity</span>
                  <span className="font-semibold text-gray-900">{capacity} kW</span>
                </div>
                <div className="h-px bg-gray-300"></div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Central Govt Subsidy</span>
                  <span className="font-semibold text-blue-800">
                    {formatCurrency(centralSubsidy)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">State Govt Subsidy</span>
                  <span className="font-semibold text-green-800">
                    {formatCurrency(stateSubsidy)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Subsidy Amount</span>
                  <span className="font-semibold text-indigo-800">
                    {formatCurrency(totalSubsidy)}
                  </span>
                </div>
                
                <div className="h-px bg-gray-300"></div>
                
                <div className="flex justify-between items-center bg-yellow-100 rounded-md px-3 py-2.5 font-bold">
                  <span className="text-gray-800">Estimated Total Cost</span>
                  <span className="text-orange-700 text-lg">{formatCurrency(totalCost)}</span>
                </div>
                
                <div className="flex justify-between items-center bg-indigo-600 rounded-md px-3 py-2.5 font-bold">
                  <span className="text-white">Net Cost After Subsidy</span>
                  <span className="text-yellow-300 text-lg">{formatCurrency(netCost)}</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-900">
                <strong>Note:</strong> Subsidy amounts are for Uttar Pradesh under PM Surya Ghar Scheme. 
                Actual costs may vary based on installation and component quality.
              </p>
            </div>
          </div>

          {/* RIGHT – INFO */}
          <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-4">
              ABOUT PM SURYA GHAR SCHEME
            </h2>

            <div className="space-y-3 text-sm flex-grow">
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-3">
                <h3 className="font-semibold text-blue-900 mb-1.5">
                  Central Government Subsidy
                </h3>
                <p className="text-gray-700">
                  Ministry of New & Renewable Energy (MNRE) provides subsidy up to ₹80,000 
                  for rooftop solar installations to promote clean energy adoption.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-3">
                <h3 className="font-semibold text-green-900 mb-1.5">
                  State Government Benefits
                </h3>
                <p className="text-gray-700">
                  Uttar Pradesh offers additional subsidy of up to ₹32,000, making solar 
                  installation more affordable for residents.
                </p>
              </div>

              <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-3">
                <h3 className="font-semibold text-indigo-900 mb-1.5">
                  Key Benefits
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Combined subsidy up to ₹1.12 Lakhs</li>
                  <li>Reduce electricity bills by 80-90%</li>
                  <li>25+ years solar panel lifespan</li>
                  <li>Environmental impact - reduce carbon footprint</li>
                  <li>Low maintenance costs</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-3">
                <h3 className="font-semibold text-orange-900 mb-1.5">
                  How to Apply
                </h3>
                <p className="text-gray-700">
                  Apply through the National Rooftop Solar Portal or contact authorized 
                  vendors like Prem & Brothers for hassle-free installation and subsidy processing.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-3">
                <h3 className="font-semibold text-purple-900 mb-1.5">
                  Eligibility Criteria
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Residential property owner</li>
                  <li>Available rooftop space</li>
                  <li>Electricity connection in owner's name</li>
                  <li>No existing rooftop solar system</li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
                Get Free Consultation
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        /* Custom slider thumb styling */
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #4f46e5;
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.5);
          transition: all 0.2s ease;
        }

        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.6);
        }

        .slider-thumb::-webkit-slider-thumb:active {
          transform: scale(1.1);
          box-shadow: 0 2px 6px rgba(79, 70, 229, 0.5);
        }

        .slider-thumb::-moz-range-thumb {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #4f46e5;
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.5);
          transition: all 0.2s ease;
        }

        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.6);
        }

        .slider-thumb::-moz-range-thumb:active {
          transform: scale(1.1);
          box-shadow: 0 2px 6px rgba(79, 70, 229, 0.5);
        }

        /* Track styling */
        .slider-thumb::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 4px;
        }

        .slider-thumb::-moz-range-track {
          height: 8px;
          border-radius: 4px;
          background: #e5e7eb;
        }

        .slider-thumb:focus {
          outline: none;
        }

        .slider-thumb:focus::-webkit-slider-thumb {
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
        }

        .slider-thumb:focus::-moz-range-thumb {
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.2);
        }
      `}</style>
    </div>
  );
}