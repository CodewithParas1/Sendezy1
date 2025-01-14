import React from "react";

const Benefits = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 text-center mb-12 font-lexend">
          Benefits of Partnering with <span className="text-blue-900">SENDEZY</span>
        </h1>

        {/* Benefits List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Benefit Item */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Schedule Payment Reminders</h2>
            <p className="text-black">
              No more rushing to remember deadlines. SENDEZY’s integrated reminder system through email, WhatsApp, and SMS will alert you before fees are due, keeping you organized and stress-free.
            </p>
          </div>

          {/* Benefit Item */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Commission Tracking</h2>
            <p className="text-black">
              Easily track your commissions with SENDEZY’s centralized platform. Say goodbye to spreadsheets and complicated calculations—enjoy seamless financial management with just a few clicks.
            </p>
          </div>

          {/* Benefit Item */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Seamless Digital Payment Solution</h2>
            <p className="text-black">
              Say goodbye to piles of paperwork! With SENDEZY, enjoy a completely digital international payment process, from completing A2 forms to submitting KYC details—quick and secure!
            </p>
          </div>

          {/* Benefit Item */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Get Your e-Challan Online</h2>
            <p className="text-black">
              Generate your e-challan online to take advantage of competitive FX rates, and then finalize your payment offline at a nearby branch. It’s the perfect balance of convenience and cost-effectiveness.
            </p>
          </div>

          {/* Benefit Item */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Smooth KYC and A2 Form Process</h2>
            <p className="text-black">
              Say goodbye to searching for forms or filling them out multiple times. Complete your KYC and A2 forms effortlessly within the platform, saving you time for what matters most.
            </p>
          </div>

          {/* Benefit Item */}
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl duration-300">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Pay How You Want</h2>
            <p className="text-black">
              No matter if you prefer online bank transfers or payment gateways, SENDEZY gives you the flexibility to choose what works best for you. Pick your preferred payment method with ease!
            </p>
          </div>

          {/* Benefit Item */}
         {/* Footer Section */}
            <div className="mt-2 bg-blue-900 text-white py-8 px-9 rounded-lg text-center md:col-span-2 lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-lexend mb-4 text-yellow-400">
                See the Difference and Grow Your Income
              </h2>
              <p className="text-lg md:text-xl">
                Be part of the increasing number of consultants who rely on SENDEZY’s Portal, designed to streamline student data management and payment processes.
              </p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Benefits;
