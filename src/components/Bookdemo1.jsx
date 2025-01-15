import React from "react";

const Bookdemo1 = () => {
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col items-center text-white px-4">
      {/* Header Section */}
      <div className="w-full text-center py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-400 font-lexend">
          Request A Demo
        </h1>
        <p className="font-lexend text-sm sm:text-base md:text-lg mt-2">
          Increase your income with SENDEZY’s Portal, designed to make managing student data and payments easier.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-8 flex flex-col items-center w-full">
        <img
          src="https://img.freepik.com/free-vector/mobile-payment-transfer-flat-vector-illustration-tiny-man-woman-sending-receiving-money-wireless-doing-remittance-with-help-smartphone-bank-deposit-cashless-business-concept_74855-25190.jpg"
          alt="Demo Illustration"
          className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
        />
        <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl font-lexend text-yellow-400">
          Let's Get Started!
        </h2>
      </div>

      {/* Call-to-Action Button */}
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-blue-900 font-bold text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:bg-yellow-300 hover:shadow-2xl transition-all duration-300">
        Book a Demo
      </button>
    </div>
  );
};

export default Bookdemo1;
