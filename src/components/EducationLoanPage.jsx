import React, { useRef } from "react";

const EducationLoanPage = () => {
  // Create a reference for the form
  const formRef = useRef(null);

  // Function to scroll to the form
  const scrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section with Background Image and Text */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)), url('/assets/Education.avif')",
        }}
      >
        <div className="relative flex flex-col justify-center h-full text-left px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-lexend mb-5 pr-10">
            One Click, Dream Funded: <br /> Find your Ideal Education Loan in
            Minutes
          </h1>
          <p className="text-lg md:text-xl mb-5 text-white font-lexend font-light pr-10">
            Forget about endless loan applications and confusing terms. Our
            streamlined process collects basic student and course details to
            match you with the best-suited provider, saving you time and money.
          </p>

          <div className="text-left">
            <button
              onClick={scrollToForm} // Add click handler
              className="bg-green-500 text-black font-bold py-3 px-5 rounded-md text-sm hover:bg-green-600 transition duration-300 max-w-xs mx-auto"
            >
              Apply For Loan
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div
        ref={formRef} // Attach the ref to the form container
        className="min-h-screen flex items-center justify-center bg-blue-950"
      >
        <form
          className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-xl mt-40 transform transition duration-500"
          style={{ animation: "fadeIn 1s ease-in-out" }}
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-800 animate-pulse">
            Apply for Overseas Education Loan
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                First Name*
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Last Name*
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email*
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mobile Number*
              </label>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <p className="text-sm text-gray-500 mt-1">
                * You will receive an OTP on this mobile number
              </p>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Course Level
            </label>
            <select className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
              <option>Select Option</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>PhD</option>
            </select>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">
              University Name
            </label>
            <input
              type="text"
              placeholder="University Name"
              className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Required Loan Amount*
            </label>
            <input
              type="text"
              placeholder="INR"
              className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Do you have security or collateral?*
            </label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="collateral"
                  className="mr-2 focus:ring-blue-500"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="collateral"
                  className="mr-2 focus:ring-blue-500"
                />
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-600 text-white font-bold py-2 px-4 rounded-lg mt-6 hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EducationLoanPage;
