import React from 'react';

const Marquee = () => {
  const feedbacks = [
    "Excellent service! Fast and reliable. ",
    "Loved the user experience! Highly recommend. ",
    "The process was smooth and easy.",
    "Amazing platform for transfers. Very convenient! ",
    "Secure and quick transfers every time. ",
    "Customer support was very helpful! ",
    "Great app! Easy to use and efficient. ",
    "Highly efficient and trustworthy service. ",
    "The platform is so easy to navigate, and it’s fast. ",
    "Best platform for quick transactions! Always reliable. ",
    "Customer-friendly and smooth service! Will use again. ",
    "Very user-friendly. Great design and functionality. ",
  ];

  return (
    <div className="bg-indigo-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800">
          What our customers say
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Here’s what people love about us!
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="marquee whitespace-nowrap flex items-center space-x-12 animate-marquee">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="flex-none bg-white rounded-lg shadow-lg px-8 py-6 text-indigo-800 font-medium text-center max-w-md mx-4"
            >
              {feedback}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .marquee {
            animation: scroll-left 15s linear infinite;
          }
          @keyframes scroll-left {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;
