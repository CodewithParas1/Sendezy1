import React from "react";

const EasyRem = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-blue-900 py-28 px-6 md:px-12 lg:px-20">
      {/* Left Section: Text Content */}
      <div className="flex-1 md:mr-12 text-center md:text-left">
        
        <h1 className="text-4xl md:text-5xl font-lexend font-semibold text-white leading-tight mb-6">
        Easy Remittance: Skip the KYC Hassles
        </h1>
        <p className="text-white text-lg leading-relaxed mb-8 pt-5 text-wrap font-lexend">
        No more paperwork! Sendezy simplifies remittance by removing the need for physical LRS/A2 forms, repeated transaction details, and KYC copies. Set up your account once and enjoy easy, hassle-free transfers.
        </p>
        <button className="px-8 py-4 bg-yellow-400 text-blue-900 font-lexend rounded-md shadow-lg hover:bg-yellow-500 transition duration-300">
        Send Money
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src="/assets/EasyRem.png"
          alt="Digital Platform Illustration"
          className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg object-cover"
        />
      </div>
      
    </div>
  );
};

export default EasyRem;
