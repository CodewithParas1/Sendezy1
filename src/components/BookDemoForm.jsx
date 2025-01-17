import React, { useState } from "react";

const BookDemoForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className=" bg-blue-950 text-yellow-400 min-h-screen flex flex-col items-center justify-center px-4 ">
      {/* Schedule a Demo Section */}
      <div className="w-full max-w-5xl bg-blue-900 rounded-xl shadow-lg p-6 sm:p-8 flex flex-wrap justify-between items-center mt-2">
        {/* Left Section */}
        <div className="flex-1 pr-0 sm:pr-6 mb-6 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lexend">
            Schedule a Demo
          </h1>
          <p className="text-gray-300 mt-4">
            Let’s get some basic info, and we will get you on the calendar!
          </p>
          <p className="text-xs text-gray-400 mt-2">
            This data is protected by our Privacy Policy and Terms of Service.
          </p>
        </div>

        {/* Form Section */}
        <div className="flex-1 bg-white rounded-lg p-6 text-black">
          <form className="space-y-4">
            {["Full Name*", "Phone Number*", "Email Address*", "Name of Company*"].map((placeholder) => (
              <input
                key={placeholder}
                type="text"
                placeholder={placeholder}
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
            <select
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled selected>
                How did you hear about us?
              </option>
              {["Social Media", "Friend", "Advertisement", "Other"].map((option) => (
                <option value={option.toLowerCase()} key={option}>
                  {option}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Anything else you want us to know?"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            />
            <button
              type="button"
              onClick={openModal}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit Information
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
              Thank You for Booking!
            </h2>
            <p className="text-gray-600 mb-4">
              Our team will contact you shortly to schedule your demo.
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDemoForm;
