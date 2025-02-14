import React from "react";
import { useNavigate } from "react-router-dom";

const Ongoing = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[85vh] bg-gray-100 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/assets/SwiftRem.jpg")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] px-6 lg:px-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-10">
          Ongoing Commission:
          <br />
          <span className="text-yellow-400">
            Easy Rewards, No Matter Where You Are
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed">
          Imagine earning commissions without any extra work! With SENDEZY, you
          keep earning even after the student has traveled abroad. Our special
          system ensures you receive rewards throughout the student’s academic
          journey, not just at the time of payment—setting us apart from other
          forex providers.
        </p>
        <button
          className="mt-10 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-900 transition duration-300 ease-in-out"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Ongoing;
