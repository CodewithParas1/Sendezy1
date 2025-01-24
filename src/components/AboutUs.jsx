import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer"; // Adjust the path based on your project structure

const AboutUs = () => {
  return (
    <div className="bg-blue-950 text-white font-lexend">
      {/* Hero Section */}
      <motion.div
        className="text-center py-16 px-6 md:py-40 md:px-32"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-lexend leading-snug">
          <span className="font-semibold">
            Sendezy International:
            <br />
          </span>{" "}
          <motion.span
            className="mt-6 text-center text-5xl md:text-5xl font-semibold text-green-400 font-lexend"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Simplifying Global Money Transfers
          </motion.span>
        </h1>
      </motion.div>

      {/* Our Story Section */}
      <motion.div
        className="bg-white text-blue-950 px-6 py-16 md:px-32 md:py-20"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Sendezy International is an aggregator platform dedicated to providing simple,
          secure, and cost-effective international money transfer services. Born out of a
          vision to bridge financial gaps across borders, Sendezy empowers individuals and
          businesses by offering seamless and reliable solutions for global remittances.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4">
          With a focus on partnering with RBP Finivis Private Limited, a Reserve Bank of
          India (RBI) licensed fintech company, Sendezy facilitates international money
          transfers through a robust network of trusted partners. This ensures that our
          customers receive exceptional service with the highest standards of security and
          reliability.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4">
          Sendezy is committed to fostering financial inclusion, making global transactions
          accessible and affordable for everyone. By prioritizing user experience and
          innovation, we are redefining how people connect financially, one transaction at
          a time.
        </p>
      </motion.div>

      {/* Why Choose Sendezy Section */}
      <motion.div
        className="bg-blue-950 text-white px-6 py-16 md:px-32 md:py-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-8 text-green-400">
              Why Choose Sendezy?
            </h2>
            <ul className="list-disc list-inside space-y-10 text-lg md:text-xl leading-relaxed">
              <li>Backed by a trusted and licensed fintech company.</li>
              <li>Access to an extensive network of payout locations.</li>
              <li>Customer-first approach with 24/7 support.</li>
              <li>Continuous innovation to meet evolving financial needs.</li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full sm:w-80 mt-8 sm:mt-0 sm:ml-24 px-4 transform sm:translate-x-40"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/assets/logofinal.jpg"
              alt="Why Choose Sendezy"
              className="rounded-lg shadow-lg mx-auto"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
