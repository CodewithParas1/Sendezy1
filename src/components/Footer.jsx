import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-indigo-900 text-white py-12">
      <div className="max-w-6xl mx-auto flex justify-between items-start px-6">
        {/* Left Side: Footer Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-indigo-200">About Us</h3>
          <p className="text-gray-400">
          Sendezy is a global remittance platform that handles transactions via RBI-approved partners. Our transfers are safeguarded through SWIFT APIs, and all documents are secure
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-indigo-200">Support</h3>
          <ul className="text-gray-400 space-y-2">
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Live Chat</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-bold text-indigo-200">Fees</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Transaction Fees</li>
            <li>Service Fees</li>
            <li>Payment Plans</li>
          </ul>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-6 items-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          &copy; 2025 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
