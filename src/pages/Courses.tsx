import React from "react";
import Header from "../components/Header";
import CourseCatalog from "../components/CourseCatalog";

const Courses: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="max-full mx-auto p-8 mt-6">
        {/* Course Catalog Section */}
        <CourseCatalog />
      </main>
    </div>
  );
};

export default Courses;
