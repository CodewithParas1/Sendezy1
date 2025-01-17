import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FooterCons = () => {
  return (
    <div className="bg-indigo-900 text-white">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto text-center py-12 px-4">
        <p className="text-gray-300 text-lg font-medium">
          “Sendezy is a global remittance platform that handles transactions
          via RBI-approved partners. Our transfers are safeguarded through
          SWIFT APIs, and all documents are secure.”
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bg-indigo-800 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-6 gap-x-12">
          {/* Support Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="text-gray-300 space-y-2">
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Live Chat</li>
            </ul>
          </div>

          {/* Fees Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Fees</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Transaction Fees</li>
              <li>Service Fees</li>
              <li>Payment Plans</li>
            </ul>
          </div>

          {/* Connect with Us Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect with Us
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-indigo-700">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Sendezy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterCons;
