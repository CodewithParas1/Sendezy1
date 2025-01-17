import React from "react";

const Growincome = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-14 bg-blue-950">
      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-10 items-center max-w-7.5xl w-full">
        {/* Text Section */}
        <div className="md:col-span-2 flex flex-col text-left md:pr-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white font-lexend leading-snug">
            Grow Your Income with No Effort:
            <span className="text-blue-300 block">Enroll Students on the SENDEZY Portal</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white leading-relaxed">
            Manage student data and make payments effortlessly from your office using our SENDEZY portal!
          </p>
          <button className="mt-8 px-8 py-3 bg-blue-700 text-white rounded-lg shadow-md font-semibold hover:bg-blue-600 hover:scale-105 duration-300">
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="md:col-span-3 flex justify-center items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E12AQHzkN2Y8WFrCg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1671631711870?e=2147483647&v=beta&t=7Ymuhw5eFfqVbntA6TpePJZwizqx-6GCV4j34yOG3kA"
            alt="Digital Wallets"
            className="rounded-lg shadow-2xl hover:scale-105 duration-300 max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Growincome;
