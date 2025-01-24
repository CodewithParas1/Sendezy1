import React from "react";

const SaveFees = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 py-28 px-6 md:px-12 lg:px-20">
      {/* Left Section: Text Content */}
      <div className="flex-1 md:mr-12 text-center md:text-left">
        
        <h1 className="text-4xl md:text-5xl font-lexend font-semibold text-blue-900 leading-tight mb-6">
          Save Big on Fees
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Enjoy a seamless and fully digital way to manage international payments. 
          Say goodbye to paperwork for A2 forms, KYC details, or LRS declarations.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-indigo-600 text-2xl mr-3">✔️</span>
            <p className="text-gray-700">Login with fingerprint or Face ID for enhanced security.</p>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 text-2xl mr-3">✔️</span>
            <p className="text-gray-700">Send money in just a few simple taps.</p>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 text-2xl mr-3">✔️</span>
            <p className="text-gray-700">Access and review your transaction history anytime.</p>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-600 text-2xl mr-3">✔️</span>
            <p className="text-gray-700">Receive instant notifications for all app activities.</p>
          </li>
        </ul>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src="https://www.shutterstock.com/image-vector/international-financial-freedom-digital-platform-600nw-2402315097.jpg"
          alt="Digital Platform Illustration"
          className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg object-cover"
        />
      </div>
    </div>
  );
};

export default SaveFees;
