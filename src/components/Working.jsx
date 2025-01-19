import React from 'react';

const Working = () => {
  const steps = [
    {
      title: "Register for free",
      description: "Sign up online for free and verify your identity effortlessly.",
      icon: "📝",
    },
    {
      title: "Set up your transfer",
      description: "Add the recipient's details and select the currency for your transfer.",
      icon: "⚙️",
    },
    {
      title: "Make your payment",
      description: "Send us your funds securely, and we’ll keep you updated in real time.",
      icon: "💳",
    },
    {
      title: "You’re all done!",
      description: "We’ll notify you when the money has been successfully sent.",
      icon: "✅",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <h2 className="text-indigo-600 font-semibold text-xl uppercase tracking-wide">
          How it works?
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
          Just a few steps to get started
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Follow these simple steps to enjoy seamless transactions with ease.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          >
            <div className="text-5xl text-indigo-500">{step.icon}</div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">
              {step.title}
            </h3>
            <p className="text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Working;
