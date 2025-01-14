import React from "react";

const Cards = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6">
      {/* Content Container */}
      <div className="max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image Section with Light Gray Background */}
        <div className="flex-1 bg-gray-300 p-4 rounded-lg">
          <img
            src="https://media.istockphoto.com/id/1316049982/vector/core-banking-it-system-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=eVjsfYkt4mvU7JSH2U6FJhM0aHbraN5arZ-aOrAvbqY="
            alt="Core Banking IT System"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Cards Section */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/64"
              alt="Peace of Mind"
              className="mx-auto mb-4"
            />
            <h2 className="text-blue-700 text-xl font-bold mb-2">Apply for Student Loan</h2>
            <p className="text-gray-600">
            Skip the hassle of education loan applications. We gather your basic details and match you with the best provider, saving you time and money.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/64"
              alt="Business-Ready"
              className="mx-auto mb-4"
            />
            <h2 className="text-blue-700 text-xl font-bold mb-2">Smoothen Your Journey Abroad</h2>
            <p className="text-gray-600">
            Join thousands of students who trust us to succeed. Don’t just get by—flourish on your journey!
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/64"
              alt="100% Transparent"
              className="mx-auto mb-4"
            />
            <h2 className="text-blue-700 text-xl font-bold mb-2">
            Rapid Remittances
            </h2>
            <p className="text-gray-600">
            We guarantee that funds will reach the beneficiary account within 48 hours, though most transfers are completed in just 24 hours.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://via.placeholder.com/64"
              alt="International Network"
              className="mx-auto mb-4"
            />
            <h2 className="text-blue-700 text-xl font-bold mb-2">
              International Network
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
