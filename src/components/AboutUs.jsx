import React from "react";
import Footer from "./Footer"; // Adjust the path based on your project structure

const AboutUs = () => {
  return (
    <div className="bg-blue-950 text-white font-lexend">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 md:py-40 md:px-32">
        <h1 className="text-4xl md:text-5xl font-lexend leading-snug">
          <span className="font-semibold">
            Welcome to Sendezy International Money Transfer
          </span>{" "}
          <span className="text-xl text-yellow-400 font-lexend">
            Your trusted partner for fast, secure, and affordable global
            remittance solutions.
          </span>
        </h1>
      </div>

      {/* Our Story Section */}
      <div className="bg-white text-blue-950 px-6 py-16 md:px-32 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Sendezy International is powered by RBP Finivis Private Limited, a
          Reserve Bank of India (RBI) licensed fintech company established in
          2021. RBP Finivis has been at the forefront of financial innovation.
          With a robust network of over 25,000 agents across India, RBP Finivis
          ensures seamless financial services, enabling Sendezy to deliver
          exceptional value and reliability to our customers.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mt-4">
          Our mission is to provide simple, secure, and cost-effective
          international money transfer services, fostering financial inclusion
          and building bridges across borders.
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
    <div className="md:w-auto mt-8 md:mt-0 md:ml-32 pl-4 pr-4">
      <img
        src="/assets/logo1.jpg"
        alt="Why Choose Sendezy"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
      
      

      {/* Leadership Section */}
<div className="bg-white text-blue-950 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Leadership
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 */}
      <div className="text-center">
        <img
          src="https://www.cxooutlook.com/wp-content/uploads/2021/07/Sam-Gupta.jpg"
          alt="Sam Gupta"
          className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Sam Gupta</h3>
        <p className="text-gray-600">Founder and CEO</p>
      </div>

      {/* Card 2 */}
      <div className="text-center">
        <img
          src="https://media.licdn.com/dms/image/C4D03AQFP638hpvkvGg/profile-displayphoto-shrink_200_200/0/1516816665907?e=2147483647&v=beta&t=rLv56c7sbNS7fR8ALjijhnK_pzLUC5lA3-EnCwkBOC4"
          alt="Pankaj Gupta"
          className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Pankaj Gupta</h3>
        <p className="text-gray-600">CSO</p>
      </div>

      {/* Card 3
      <div className="text-center">
        <img
          src="path-to-ujwal-image.jpg"
          alt="Ujwal Tamminedi"
          className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Ujwal Tamminedi</h3>
        <p className="text-gray-600">Co-Founder and CTO</p>
      </div>

      {/* Card 4 */}
      {/* <div className="text-center">
        <img
          src="path-to-other-leader-image.jpg"
          alt="Other Leader"
          className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-semibold">Other Leader Name</h3>
        <p className="text-gray-600">Role</p>
      </div> */} 
    </div>
  </div>
</div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
