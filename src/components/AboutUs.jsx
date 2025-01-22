import React from "react";
import Footer from "./Footer"; // Adjust the path based on your project structure

const AboutUs = () => {
  return (
    <div className="bg-blue-950 text-white font-lexend">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 md:py-40 md:px-32">
        <h1 className="text-5xl md:text-7xl font-lexend leading-snug">
          <span className="font-semibold">
          Sendezy International: 

    <br></br>

          </span>{" "}
          <span className="mt-6 text-center text-6xl md-text-5xl font-semibold text-yellow-400 font-lexend ">
            Simplifying Global Money Transfers
          </span> 
        </h1>
      </div>

      {/* Our Story Section */}
      <div className="bg-white text-blue-950 px-6 py-16 md:px-32 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-lg md:text-xl leading-relaxed">
        Sendezy International is an aggregator platform dedicated to providing simple,
         secure, and cost-effective international money transfer services. 
         Born out of a vision to bridge financial gaps across borders, 
         Sendezy empowers individuals and businesses by offering seamless and 
         reliable solutions for global remittances.

        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4">
        With a focus on partnering with RBP Finivis Private Limited, 
        a Reserve Bank of India (RBI) licensed fintech company, 
        Sendezy facilitates international money transfers through a 
        robust network of trusted partners. This ensures that our 
        customers receive exceptional service with the highest 
        standards of security and reliability.

        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4">
        Sendezy is committed to fostering financial inclusion,
        making global transactions accessible and affordable 
        for everyone. By prioritizing user experience and innovation,
        we are redefining how people connect financially, one transaction 
        at a time.
        </p>
      </div>

      {/* Why Choose Sendezy Section */}
      <div className="bg-blue-950 text-white px-6 py-16 md:px-32 md:py-20">
  <div className="flex flex-col md:flex-row items-start md:space-x-12">
    {/* Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-8">
        Why Choose Sendezy?
      </h2>
      <ul className="list-disc list-inside space-y-4 text-lg md:text-xl leading-relaxed">
        <li>Backed by a trusted and licensed fintech company.</li>
        <li>Access to an extensive network of payout locations.</li>
        <li>Customer-first approach with 24/7 support.</li>
        <li>Continuous innovation to meet evolving financial needs.</li>
      </ul>
    </div>

   {/* Image */}
<div className="w-full sm:w-80 mt-8 sm:mt-0 sm:ml-24 px-4 transform sm:translate-x-40">
  <img
    src="/assets/logofinal.jpg"
    alt="Why Choose Sendezy"
    className="rounded-lg shadow-lg mx-auto"
  />
</div>


  </div>
</div>
      
      


      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
