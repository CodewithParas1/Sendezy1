import React from "react";

const Bookdemo1 = () => {
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center text-white">
      {/* Header Section */}
      <div className="w-full py-15 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-yellow-400 font-lexend">
        Request A Demo
        </h1>
        <p className="font-lexend text-lg md:text-xl mt-2">
        Increase your income with SENDEZY’s Portal, designed to make managing student data and payments easier.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center mt-10 px-4 max-w-screen-lg text-center">
        <div className="w-full flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/mobile-payment-transfer-flat-vector-illustration-tiny-man-woman-sending-receiving-money-wireless-doing-remittance-with-help-smartphone-bank-deposit-cashless-business-concept_74855-25190.jpg"
            alt="Demo Illustration"
            className=" max-w-2xl rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h2 className="mt-6 text-2xl md:text-5xl font-lexend text-yellow-400">
          Let's Get Started!
        </h2>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-8">
        <button className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold text-lg md:text-xl rounded-full shadow-lg hover:bg-yellow-300 hover:shadow-2xl transition-all duration-300">
          Book a Demo
        </button>
      </div>
    </div>
  );
};

export default Bookdemo1;
