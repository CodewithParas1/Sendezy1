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
            <button className="border border-white text-white hover:bg-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md transform hover:scale-105 duration-200 text-sm sm:text-base">
              See How it Works
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative mt-6 md:mt-0 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-xs sm:max-w-sm mx-auto space-y-1">  {/* //space-y-1......for Card size and gap below// */}                                                                          
            <h2 className="text-gray-900 font-bold font-lexend text-xl text-center mb-4">
              Send money online
            </h2>

           {/* Receiver's Country */}
<div className="mb-4 flex justify-between">
  <div>
    <label className="block text-sm text-gray-600 mb-2 text-center">
      Receiver's country
    </label>
    {/* Image for the country flag */}
    <div className="w-25 h-10 ">
      <img
        src="/assets/Indiaflag.webp" // Update this with the actual path to the flag image
        alt="Country Flag"
        className="object-cover w-full h-full rounded-md"
      />
    </div>
  </div>
  <div className="flex flex-col items-center text-center">
    <span className="text-sm text-gray-600">Receiver's Amount</span>
    <span className="text-lg text-gray-600 font-semibold font-lexend mt-2 border-gray-500 rounded-lg p-1 pr-6 pl-6 shadow-md">₹ 566,049.74</span>
  </div>
</div>


            {/* Sender's Country */}
            <div className="mb-4 flex justify-between">
  <div>
    <label className="block text-sm text-gray-600 mb-2 text-center">
      Senders's country
    </label>
    {/* Image for the country flag */}
    <div className="w-25 h-10 ">
      <img
        src="/assets/Canada.webp" // Update this with the actual path to the flag image
        alt="Country Flag"
        className="object-cover w-full h-full rounded-md"
      />
    </div>
  </div>
  <div className="flex flex-col items-center text-center">
    <span className="text-sm text-gray-600">Senders's amount</span>
    <span className="text-lg text-gray-600 font-semibold font-lexend mt-2 border-gray-500 rounded-lg p-1 pr-6 pl-6 shadow-md">$ 8,961.73</span>
  </div>
</div>

            {/* Fee Structure */}
            <div>
              <h3 className="text-blue-600 font-lexend font-semibold text-xl text-center mt-8 mb-10 border border-gray-500 rounded-lg p-5 shadow-md ">
                <span className="text-black"> FX Rate: </span> 1 CAD = INR 63.58
              </h3>

              <hr className="border-t border-gray-300 my-4" />

              <div className="text-sm text-gray-600 space-y-3">
                <p className="flex justify-between">
                  <span>Bank Fees</span> <span>₹ 1,500</span>
                </p>
                <p className="flex justify-between">
                  <span>Service Charges</span> <span>₹ 1,250</span>
                </p>
                <p className="flex justify-between">
                  <span>FCCT</span> <span>₹ 877.86</span>
                </p>
                <p className="flex justify-between">
                  <span>Sendzy Fees</span> <span>₹ 0</span>
                </p>

                <hr className="border-t border-gray-300 my-4" />

                <p className="flex justify-center text-lg font-semibold ">
                  <span className="text-xl font-bold font-lexend items-center mt-0">Total Amount</span> 
                </p>
                <p className="flex justify-center text-4xl font-semibold ">
                   <span className="font-bold font-lexend items-center">₹ 573,305.46</span>
                </p>
              </div>
              <p className="flex text-xs text-gray-400 mt-6 justify-center">
                *TCS will be calculated at final step
              </p>
            </div>

            {/* Send Money Button */}
            <button className="bg-yellow-400 text-black font-semibold px-4 py-5 rounded-lg w-full mt-6 hover:bg-yellow-500 transition-all duration-300 hover:scale-95">
              Send Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
