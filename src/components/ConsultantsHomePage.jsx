import React from "react";

const ConsultantsHomePage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">
        Help Your International Students Prepare for Their Journey
        </h1>
        <p className="text-lg mt-5">
        Complete your transfer in just 24 hours, no forms required, using SENDEZY
        </p>
      </div>

      {/* Video Section */}
      <div className="flex justify-center items-center">
        <div className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 border-4 border-black rounded-lg overflow-hidden shadow-2xl">
          <video
            src="YOUR_VIDEO_SOURCE_HERE"
            controls
            className="w-full h-full"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default ConsultantsHomePage;
