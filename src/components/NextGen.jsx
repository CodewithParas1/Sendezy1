import React from "react";

const NextGen = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-6">
      {/* Background with Solid Blue Color */}
      <div className="absolute inset-0 bg-blue-950 "></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-10 items-center max-w-6xl w-full">
        {/* Text Section */}
        <div className="md:col-span-2 flex flex-col text-left md:pr-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-lexend">
            Next-Generation Digital Payments
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            Keep track of every commission in a single platform, making financial management easy.
          </p>
          <button className="mt-10 px-10 py-3 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-600 duration-300">
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="md:col-span-3 flex justify-center items-center">
          <img
            src="https://geniusee.com/storage/app/media/blog/blog230_wallets_you_should_know/top_digital_wallets_pv.png"
            alt="Digital Wallets"
            className="rounded-lg shadow-2xl hover:scale-105 duration-300 max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NextGen;
