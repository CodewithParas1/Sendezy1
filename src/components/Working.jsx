import React from 'react';

const Working = () => {
  const steps = [
    {
      title: "Register for free",
      description: "Simply sign up online for free and verify your identity",
      icon: "📝",
    },
    {
      title: "Set up your transfer",
      description: "Add a recipient's details and choose which currency...",
      icon: "⚙️",
    },
    {
      title: "Make your payment",
      description: "Send us your funds with a bank transfer and we’ll notify...",
      icon: "💳",
    },
    {
      title: "You’re all done!",
      description: "We inform you when the money has been sent and can also...",
      icon: "✅",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white py-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-indigo-600 font-semibold text-xl">How it works?</h2>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
        Just a few steps to start
      </h1>
      <p className="text-gray-600 mt-4 text-center">
        It's easier than you think. Follow 3 simple easy steps
      </p>
      <div className="flex flex-col md:flex-row justify-center items-start mt-8 space-y-8 md:space-y-0 md:space-x-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-lg max-w-xs"
          >
            <div className="text-5xl text-indigo-500">{step.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
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
