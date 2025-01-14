import React from "react";

const Speedy = () => {
  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: 'url("https://www.shutterstock.com/image-illustration/soft-gray-studio-room-background-600nw-1493228318.jpg")' }}></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 font-lexend">
          Swift Remittance: <span className="text-black">24-Hour Advantage</span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg md:text-xl ">
        Discover the power of fast transfers with SENDEZY! Unlike others who take 4-6 business days, we ensure your funds reach the university account in just 24 hours, setting us apart from the competition.
        </p>

        {/* CTA Button */}
        <button className="mt-10 px-10 py-3 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-700 duration-300">
          Contact Us
        </button>

       
      </div>
    </div>
  );
};

export default Speedy;
