import React from "react";


const HomePage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.8"
      className="w-full min-h-screen relative overflow-hidden pt-20" // Added pt-20
    >
       {/* Image Background */}
       <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: 'url("/assets/Home.jpg")' }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-4 sm:px-6 md:px-12">

      {/* Left Section */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-white font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug sm:leading-tight font-lexend">
            You can Handle it <br className="hidden sm:block" /> Anytime, from Anywhere!
          </h1>
          <p className="text-gray-100 text-base sm:text-lg md:text-xl mt-4">
            Sendezy, say goodbye to long waits, piles of paperwork, and high
            fees. Complete your KYC once, submit the A2 Form online, and you're
            all set—no need to repeat the process.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transform hover:scale-105 duration-200 text-sm sm:text-base">
              Open a Free Account
            </button>
    <button className="border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold px-6 py-3 rounded-lg shadow-md transform hover:scale-105 duration-200 text-sm sm:text-base">
      See How it Works
    </button>
  </div>
</div>


        {/* Right Section */}
        <div className="flex-1 relative mt-6 md:mt-0 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-2xl p-7 w-full max-w-xs sm:max-w-sm mx-auto">
            <h2 className="text-gray-900 font-bold text-lg text-center mb-1">
              Send money online
            </h2>
            {/* Receiver's Country */}
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                Receiver's country
              </label>
              <select className="border rounded-lg w-full px-3 py-2 focus:outline-none text-sm">
                <option>Select country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>

            {/* Send and Receive Amount */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">
                  Send amount
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="border rounded-lg w-full px-3 py-2 focus:outline-none text-sm"
                />
              </div>
              <div className="px-2 text-gray-500">↔</div>
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">
                  Receive amount
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="border rounded-lg w-full px-3 py-2 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Fee Structure */}
            <div>
              <h3 className="text-blue-600 font-semibold mb-4 text-sm">
                Fee Structure
              </h3>
              <div className="text-sm text-gray-600 space-y-3">
                <p className="flex justify-between">
                  <span>Forex Rate</span> <span>₹ 85.21</span>
                </p>
                <p className="flex justify-between">
                  <span>Bank Fees</span> <span>₹ 1500.00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sendezy Fees</span> <span>₹ 1250.00</span>
                </p>
                <p className="flex justify-between">
                  <span>FCCT</span> <span>₹ 0.00</span>
                </p>
                <p className="flex justify-between text-xl font-semibold">
                  <span className="text-2xl">Total Payable</span> <span>₹ 2750.00</span>
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-5">
                *TCS will be calculated at final step
              </p>
            </div>

            {/* Send Money Button */}
            <button className="bg-yellow-400 text-black font-semibold px-4 py-5 rounded-lg w-full mt-9 hover:bg-yellow-500 transition-all duration-300 hover:scale-95">
              Send Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
