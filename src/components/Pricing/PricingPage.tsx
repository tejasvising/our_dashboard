import React, { useState } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Navbar from "../Profile/Navbar";

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: "BASIC",
      description: "for small websites or blogs",
      price: "$2",
      features: ["Up to 10 graphs", "Up to 500 chatbot queries"],
      color: "blue-800",
    },
    {
      name: "STANDARD",
      description: "for medium-sized businesses",
      price: "$5",
      features: [
        "Up to 50 graphs",
        "Up to 1000 chatbot queries",
        "Email + live chat support",
      ],
      color: "green-600",
    },
    {
      name: "PREMIUM",
      description: "for small businesses",
      price: "$10",
      features: [
        "Unlimited graphs",
        "Ability to upload custom PDFs",
        "24/7 phone + email support",
      ],
      color: "purple-600",
    },
  ];

  return (
    <div className="bg-slate-900 text-white p-4 min-h-screen font-inter text-center">
      <Navbar />

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        Our Product Pricing
      </h1>

      <section className="pricing-plans flex gap-4 md:gap-8 lg:gap-12 flex-wrap justify-center w-full p-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card relative min-w-[320px] max-w-[420px] p-6 md:p-8 lg:p-12 border-1 border-solid bg-${plan.color} border-white rounded-md shadow-md text-center hover:border-${plan.color} hover:bg-gray-600 transform hover:-translate-y-2 hover:scale-102 transition-all duration-500 ease-in-out`}
          >
            <div className="heading">
              <h4
                className={`pb-4 text-${plan.color} text-lg md:text-xl lg:text-2xl`}
              >
                {plan.name}
              </h4>
              <p className="text-gray-300 text-sm font-light">
                {plan.description}
              </p>
            </div>
            <p
              className={`price relative text-${plan.color} text-3xl md:text-4xl lg:text-5xl font-bold pb-4`}
            >
              {plan.price}
              <sub className="absolute bottom-2 text-gray-300 text-sm font-light">
                /month
              </sub>
            </p>
            <ul className="features text-left">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className={`pb-2 text-gray-300 text-base md:text-lg lg:text-xl font-light flex items-center justify-start ${
                    featureIndex === plan.features.length - 1 ? "mb-8" : ""
                  }`}
                >
                  <IoCheckmarkDoneSharp className="w-5 h-5 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`cta-btn absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[150px] md:w-[200px] p-2 md:p-3 rounded-md border-1 border-solid bg-${plan.color} text-white text-lg md:text-xl lg:text-2xl font-bold active:bg-transparent transition-all duration-300 ease`}
            >
              SELECT
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PricingPage;
