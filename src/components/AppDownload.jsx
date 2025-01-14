import React from 'react';

const AppDownload = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-4 md:px-8 lg:px-16">
      {/* Left Section: Text Content */}
      <div className="flex-1 md:mr-8">
        <h2 className="text-indigo-600 font-semibold text-lg"> </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-1 p-14 ">
        Save Big on Fees: Transparent and Affordable for Students
        </h1>
        <p className="text-gray-600 mt-4">
        Enjoy a fully digital way to handle international payments—no paper needed for A2 forms, KYC details, or LRS declarations.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-start">
            <span className="text-indigo-500 text-xl mr-3">✔️</span>
            <p className="text-gray-600">Login with fingerprint or Face ID.</p>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-500 text-xl mr-3">✔️</span>
            <p className="text-gray-600">Simple few taps to send money.</p>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-500 text-xl mr-3">✔️</span>
            <p className="text-gray-600">View transaction history.</p>
          </li>
          <li className="flex items-start">
            <span className="text-indigo-500 text-xl mr-3">✔️</span>
            <p className="text-gray-600">Get instant app notifications.</p>
          </li>
        </ul>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://www.shutterstock.com/image-vector/international-financial-freedom-digital-platform-600nw-2402315097.jpg"
          alt="Digital Platform Illustration"
          className="w-full h-full max-w-lg md:max-w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AppDownload;
