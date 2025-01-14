import React from "react";

const FeaturesPage = () => {
  return (
    <div className="w-full bg-gray-50 flex flex-col items-center py-12 font-lexend">
      {/* Features Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-0">
        {/* Feature Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-blue-700 text-4xl mb-2">50+</h2>
          <p className="text-gray-600 text-lg">Supported Currencies</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-blue-700 text-4xl mb-2">100+</h2>
          <p className="text-gray-600 text-lg">Available Countries</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-blue-700 text-4xl mb-2">70+</h2>
          <p className="text-gray-600 text-lg">Payment Methods</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-blue-700 text-4xl mb-2">7/24+</h2>
          <p className="text-gray-600 text-lg">Support Team</p>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full max-w-4xl text-center mt-20">
        <h3 className="text-blue-700 font-lexend text-2xl ">Send money in a heartbeat</h3>
        <h1 className="text-blue-900 font-bold text-4xl md:text-6xl mt-6 leading-tight">
          The World At Your Fingertips
        </h1>
        <p className="text-gray-600 text-lg mt-4 font-lexend">
          Sign up to start saving on international money transfers and currency exchange.
        </p>
      </div>
    </div>
  );
};

export default FeaturesPage;
