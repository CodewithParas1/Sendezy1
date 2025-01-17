import React from "react";

const EasyRem = () => {
  return (
    <section className="bg-blue-900 text-white py-48 px-6 sm:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-300 mb-6">
            Easy Remittance: <span className="text-white">Skip the Forms and KYC Hassles</span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-8">
            No more paperwork! Sendezy simplifies remittance by removing the need for physical LRS/A2 forms, repeated transaction details, and KYC copies. Set up your account once and enjoy easy, hassle-free transfers.
          </p>
          <button className="px-6 py-3 bg-yellow-400 text-blue-900 font-medium rounded-md shadow-lg hover:bg-yellow-500 transition duration-300">
            Send Money
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
      <img
        src="https://cms-attachments.storage.googleapis.com/blog/uploads/2023/08/6-Best-International-Money-Transfer-Services-in-India.png"
        alt="Easy Remittance Illustration"
        className="w-full max-w-lg lg:max-w-xl rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
      />
    </div>
      </div>
    </section>
  );
};

export default EasyRem;
