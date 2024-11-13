import React from "react";

// JumpBackIn Component for the dashboard

const JumpBackIn: React.FC = () => {
  return (
    <div className="py-2 px-1">
      <h2 className="text-2xl font-semibold text-gray-900 text-left">
        Jump back in
      </h2>

      <section className="border border-gray-200 rounded-lg shadow-sm p-8 max-w-lg mt-6">
        <div className="flex justify-center mb-6">
          <img
            src="/images/scientific-thinking.png"
            alt="Scientific Thinking Illustration"
            className="w-full max-w-md rounded-lg"
          />
        </div>

        {/* Course Info */}
        <div className="text-center mb-4">
          <p className="text-yellow-600 text-sm font-bold uppercase mb-2">
            Science · Level 1
          </p>
          <h3 className="text-2xl font-bold text-gray-900">
            Scientific Thinking
          </h3>
        </div>

        {/* Continue Button */}
        <div className="flex justify-center">
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            Continue path
          </button>
        </div>
      </section>
    </div>
  );
};

export default JumpBackIn;
