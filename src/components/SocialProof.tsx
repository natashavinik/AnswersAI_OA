import React from "react";

// Social Proof component of ladning page

const SocialProof: React.FC = () => {
  return (
    <section className="py-10 text-center bg-gray-100">
      {/* Main heading */}
      <h3 className="text-2xl font-bold text-gray-900 mb-8">
        Join over 10 million people learning on Brilliant
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
        {/* Media Mentions */}
        <div className="flex items-center gap-8">
          <img
            className="h-36 grayscale"
            style={{ filter: "contrast(50%) opacity(60%)" }}
            src="/images/logos/NYtimes.png"
            alt="The New York Times Logo"
          />
          <img
            className="h-6 grayscale"
            style={{ filter: "contrast(50%) opacity(70%)" }}
            src="/images/logos/newatlantic.png"
            alt="The Atlantic Logo"
          />
        </div>
        {/* Vertical Line Divider */}
        <div className="hidden lg:block h-20 border-l border-gray-300"></div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Reviews Section */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-yellow-500 text-3xl">★★★★★</span>
            <p className="text-xl font-medium text-gray-700">
              Over 50,000 5-star reviews
            </p>
          </div>
          {/* Vertical Line Divider */}
          <div className="hidden lg:block h-20 border-l border-gray-300"></div>
          {/* Trustpilot Rating */}
          <div className="flex items-center gap-2">
            <img
              className="h-10"
              src="/images/logos/trustpilot.png"
              alt="Trustpilot Logo"
            />
          </div>
        </div>
        {/* Vertical Line Divider */}
        <div className="hidden lg:block h-20 border-l border-gray-300"></div>

        {/* App Awards Section */}
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <img
              className="h-14"
              src="/images/logos/awards_new.png"
              alt="Apple App of the Day"
            />
            <p className="text-sm font-medium text-gray-700 mt-2">
              App of the Day
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-12"
              src="/images/logos/awards_new.png"
              alt="Google Play Best App"
            />
            <p className="text-sm font-medium text-gray-700 mt-2">Best App</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
