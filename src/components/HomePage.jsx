import React from "react";
import videoSrc from "../assets/videos/4873111-hd_1920_1080_25fps.mp4"; // Import the video file

const HomePage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.8"
      className="w-full h-screen pt-1 relative"
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-6 md:p-12">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-blue-900 font-bold text-4xl md:text-5xl lg:text-6xl leading-tight font-lexend">
            You can Handle it Anytime, from Anywhere!
          </h1>
          <p className="text-gray-100 text-lg mt-4">
            Sendezy, say goodbye to long waits, piles of paperwork, and high
            fees. Complete your KYC once, submit the A2 Form online, and you're
            all set—no need to repeat the process.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transform hover:scale-105 duration-200">
              Open a Free Account
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold px-6 py-3 rounded-lg shadow-md transform hover:scale-105 duration-200">
              See How it Works
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative mt-12 md:mt-0 flex justify-center items-center">
          {/* Broader mobile-shaped card */}
          <div className="bg-white shadow-2xl rounded-3xl p-8 w-98 h-auto">
            <h2 className="text-center font-semibold text-lg mb-4">
              How much do you want to send?
            </h2>
            <div className="space-y-4">
              {/* Input Section */}
              <div className="flex items-center space-x-2">
                <select className="border rounded-lg px-3 py-2 focus:outline-none">
                  <option>USD</option>
                  <option>INR</option>
                  <option>EUR</option>
                </select>
                <input
                  type="number"
                  placeholder="0"
                  className="flex-1 border rounded-lg px-0 py-2 focus:outline-none"
                />
                <button className="bg-blue-800 text-white font-semibold px-2.5 py-2 rounded-lg">
                  Convert
                </button>
              </div>

              {/* Conversion Section */}
              <div>
                <p className="text-sm text-gray-500">Forex Conversion</p>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value="INR"
                    readOnly
                    className="border rounded-lg px-0 py-2 flex-1 bg-gray-100 focus:outline-none"
                  />
                  <input
                    type="text"
                    value="0.00"
                    readOnly
                    className="border rounded-lg px-0 py-2 flex-1 bg-gray-100 focus:outline-none"
                  />
                </div>
              </div>

              {/* Fee Structure */}
              <div>
                <h3 className="text-blue-700 font-semibold mb-2">Fee Structure</h3>
                <div className="text-sm text-gray-600 space-y-1">
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
                  <p className="flex justify-between font-bold text-gray-800">
                    <span>Total Payable</span> <span>₹ 2750.00</span>
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  *TCS will be calculated at final step
                </p>
              </div>

              {/* Continue Button */}
              <button className="bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg w-full mt-4 hover:bg-blue-700">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
