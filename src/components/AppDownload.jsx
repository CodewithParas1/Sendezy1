
//Save Big on Fees

import React from "react";

const AppDownload = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white py-28 px-4 md:px-8 lg:px-16">
      {/* Left Section: Text Content */}
      <div className="flex-1 md:mr-8 text-center md:text-left">
        <h2 className="text-indigo-600 font-semibold text-lg"> </h2>
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-lexend font-semibold text-left text-blue-900 mt-0 mb-6 px-2 md:px-0">
          Save Big on Fees: 
        </h1>
        <p className="text-gray-800 mt-2 px-2 md:px-0 text-left">
          Enjoy a fully digital way to handle international payments—no paper
          needed for A2 forms, KYC details, or LRS declarations.
        </p>
        <ul className="mt-6 space-y-4 px-4 md:px-0">
          <li className="flex items-start">
            <span className="text-indigo-500 text-xl mr-3">✔️</span>
            <p className="text-gray-800">Login with fingerprint or Face ID.</p>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-500 text-xl mr-3">✔️</span>
            <p className="text-gray-800">Simple few taps to send money.</p>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-500 text-xl mr-3">✔️</span>
            <p className="text-gray-800">View transaction history.</p>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-500 text-xl mr-3">✔️</span>
            <p className="text-gray-800">Get instant app notifications.</p>
          </li>
        </ul>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src="https://www.shutterstock.com/image-vector/international-financial-freedom-digital-platform-600nw-2402315097.jpg"
          alt="Digital Platform Illustration"
          className="w-full h-full max-w-sm md:max-w-lg object-cover"
        />
      </div>
    </div>
  );
};

export default AppDownload;
