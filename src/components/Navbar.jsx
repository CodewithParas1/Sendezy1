import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-6 py-4 bg-white shadow-md z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo" className="h-8" />
        </Link>
        <h1 className="text-xl font-bold text-blue-800 font-lexend">
          <Link to="/">Sendezy</Link>
        </h1>
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
            className="w-6 h-6"
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
        } md:flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 font-lexend absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent px-6 py-4 md:p-0 shadow-md md:shadow-none`}
      >
        <div className="flex flex-col md:flex-row items-center md:space-x-6">
          {/* User Type Selector */}
          <div className="flex items-center border border-black rounded-full px-3 py-1 font-lexend">
            <Link
              to="/students"
              className={`cursor-pointer font-semibold px-2 ${
                location.pathname === "/students"
                  ? "text-green-500 hover:text-green-700"
                  : "text-gray-500 hover:text-green-500"
              }`}
            >
              Students
            </Link>
            <span className="mx-2 text-black-100">|</span>
            <Link
              to="/consultants"
              className={`cursor-pointer font-semibold px-2 ${
                location.pathname === "/consultants"
                  ? "text-green-500 hover:text-green-700"
                  : "text-gray-500 hover:text-green-500"
              }`}
            >
              Consultants
            </Link>
          </div>

          {/* Links */}
          <Link
            to="/"
            className={`font-medium ${
              location.pathname === "/"
                ? "text-blue-800 hover:scale-105"
                : "text-gray-800 hover:text-blue-800 hover:scale-105"
            } duration-200`}
          >
            Home
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setHoveredMenu("Forex")}
            onMouseLeave={() => setHoveredMenu("")}
          >
            <Link
              to="/forex"
              className="font-medium text-blue-800 hover:scale-105 duration-200"
            >
              Forex
            </Link>
            {/* Popup */}
            {hoveredMenu === "Forex" && (
              <div className="absolute top-full left-0 w-64 mt-2 bg-white shadow-lg rounded-lg p-4 z-10 border">
                <Link
                  to="/transfer-money"
                  className="flex items-center space-x-2 group hover:bg-gray-100 p-2 rounded"
                >
                  <span className="bg-green-100 text-green-500 rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01m6.938-4A8.938 8.938 0 1112 3a8.938 8.938 0 016.938 9z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-blue-800">Transfer Money</h3>
                    <p className="text-sm text-gray-600">
                      Send money abroad at cheaper rates.
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/education-loan"
            className="font-medium text-blue-800 hover:scale-105 duration-200"
          >
            Education Loan
          </Link>
          <Link
            to="/about-us"
            className="font-medium text-blue-800 hover:scale-105 duration-200"
          >
            About Us
          </Link>
          <Link
            to="/blogs"
            className="font-medium text-blue-800 hover:scale-105 duration-200"
          >
            Blogs
          </Link>
        </div>

        {/* Login Button */}
        <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md mt-4 md:mt-0">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
