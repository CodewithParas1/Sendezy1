import React from "react";
import { useNavigate } from "react-router-dom";

const Growincome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-[85vh] flex items-center justify-center px-8 lg:px-14 bg-white">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-12 items-center max-w-7xl w-full">
        <div className="md:col-span-2 flex flex-col text-left md:pr-10">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-snug font-lexend">
            Grow Your Income with No Effort
          </h1>
          <span className="text-lg md:text-xl text-blue-700 mt-3 block font-lexend">
            Enroll Students on the SENDEZY Portal
          </span>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Simplify student data management and process payments effortlessly
            using our secure and reliable SENDEZY portal. A streamlined solution
            for consultants and agencies.
          </p>
          <button
            className="mt-8 px-5 py-3 bg-blue-900 text-white rounded-lg shadow-md font-semibold hover:bg-blue-800 transform hover:scale-105 transition duration-300"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
        <div className="md:col-span-3 flex justify-center items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E12AQHzkN2Y8WFrCg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1671631711870?e=2147483647&v=beta&t=7Ymuhw5eFfqVbntA6TpePJZwizqx-6GCV4j34yOG3kA"
            alt="Digital Wallets"
            className="rounded-lg shadow-lg hover:scale-105 transform duration-300 max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Growincome;
