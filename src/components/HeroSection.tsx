import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register"); // Redirect to the registration page
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-12 px-6 bg-white-100">
      <div className="max-w-lg mb-8 md:mb-0">
        <h1 className="text-left text-4xl font-bold font-serif mb-4">
          Learn by <span className="text-blue-500">doing</span>
        </h1>
        <p className="text-left text-lg text-gray-600 mb-6">
          Guided interactive problem solving that’s effective and fun. Master
          concepts in 15 minutes a day.
        </p>
        <button
          onClick={handleGetStarted}
          className="text-white px-6 py-3 rounded-full transition ease-in-out outline-none hover:opacity-75"
          style={{
            backgroundColor: "#4CAF50",
            boxShadow: "0 4px 0px #43A047",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "65%",
          }}
        >
          Get started
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img
          className="w-full"
          src="/images/ipad-visual.svg"
          alt="Interactive Lesson Visual"
        />
      </div>
    </section>
  );
};

export default HeroSection;
