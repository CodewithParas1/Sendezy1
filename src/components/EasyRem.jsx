import React from "react";

const EasyRem = () => {
  return (
    <div className="bg-blue-900 text-white py-36 px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-300 mb-4">
            Easy Remittance: <span className="text-white">Skip the Forms and KYC Hassles</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            No more paperwork! Sendezy simplifies remittance by removing the need for physical LRS/A2 forms, repeated transaction details, and KYC copies. Set up your account once and enjoy easy, hassle-free transfers.
          </p>
          <button className="mt-4 px-8 py-3 bg-yellow-400 text-blue-900 rounded-md font-semibold hover:bg-yellow-500 transition duration-300">
            Send Money
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="https://cms-attachments.storage.googleapis.com/blog/uploads/2023/08/6-Best-International-Money-Transfer-Services-in-India.png"  // Add your image URL here
            alt="Easy Remittance"
            className="w-full max-w rounded-lg shadow-lg mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default EasyRem;
