import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-5 py-0 bg-blue-950 shadow-md z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/assets/logofinal.jpg"
            alt="Logo"
            className="h-16 md:h-24 object-contain max-w-full"
            style={{
              objectFit: "contain",
            }}
          />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-blue-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-14 font-lexend absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-blue-950 text-white px-6 py-4 md:p-0 shadow-md md:shadow-none`}
      >
        {/* Links */}
        
        <div className="flex items-center border border-white rounded-full px-3 py-1.5">
          <Link
            to="/students"
            className={`cursor-pointer font-semibold px-4 ${
              location.pathname === "/students"
                ? "text-green-400 hover:text-green-600"
                : "text-white hover:text-green-400"
            }`}
          >
            Students
          </Link>
          
          <span className="mx-2 text-gray-300">|</span>
          <Link
            to="/consultants"
            className={`cursor-pointer font-semibold px-4 ${
              location.pathname === "/consultants"
                ? "text-green-400 hover:text-green-600"
                : "text-white hover:text-green-400"
            }`}
          >
            Consultants
          </Link>
        </div>
        
        <Link
          to="/"
          className={`font-medium  ${
            location.pathname === "/"
              ? "text-yellow-400 hover:scale-105 "
              : "text-white hover:text-yellow-400 hover:scale-105 "
          } duration-200`}
        >
          Home
        </Link>

        <Link
          to="/education-loan"
          className="pl-0 pr-0 font-medium text-white hover:text-yellow-400 hover:scale-105 duration-200"
        >
          Education Loan
        </Link>
        <Link
          to="/about-us"
          className={`font-medium pl=0 pr-2 ${
            location.pathname === "/about-us"
              ? "text-yellow-400 hover:scale-105"
              : "text-white hover:text-yellow-400 hover:scale-105"
          } duration-200`}
        >
          About Us
        </Link>
        

        {/* Login Button */}
        <button className="bg-yellow-400 text-black font-lexend font-semibold px-5 py-2.5 rounded-md mt-4 md:mt-0 pr-6 ">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
