import React from "react";
import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import JumpBackIn from "../components/JumpBackIn";
import CourseRecommendations from "../components/CourseRecommendations";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      <main className="max-w-7xl mx-auto p-8 mt-6">
        {/* Top Section with Welcome, Jump Back In, and Recommended Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Welcome Section */}
          <div className="lg:col-span-1">
            <WelcomeSection />
          </div>

          {/* Jump Back In and Recommended Courses Section */}
          <div className="lg:col-span-2 space-y-8">
            <JumpBackIn />
            <CourseRecommendations />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
