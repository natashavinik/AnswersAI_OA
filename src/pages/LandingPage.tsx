import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategoryIcons from "../components/CategoryIcons";
import SocialProof from "../components/SocialProof";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="main-content">
        {/* Hero Section */}
        <HeroSection />

        {/* Category Icons Section */}
        <CategoryIcons />

        {/* Social Proof Section */}
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
