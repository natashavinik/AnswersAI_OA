import React from "react";

const CourseRecommendations: React.FC = () => {
  const recommendedCourses = [
    {
      id: "1",
      title: "Logic",
      description: "",
      level: "",
      image: "/images/courses/data.svg",
    },
    {
      id: "2",
      title: "Computer Science Fundamentals",
      description: "CS & PROGRAMMING · LEVEL 2",
      level: "LEVEL 2",
      image: "/images/courses/programming.svg",
    },
    {
      id: "3",
      title: "Solving Equations",
      description: "FOUNDATIONAL MATH · LEVEL 1",
      level: "LEVEL 1",
      image: "/images/courses/math.svg",
    },
  ];

  return (
    <section className="py-10 px-1">
      <h2 className="text-2xl font-semibold text-gray-900 text-left">
        Recommended for you
      </h2>
      <div className="flex flex-wrap gap-6 mt-6">
        {recommendedCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 rounded-lg p-6 w-[200px] text-center shadow-sm hover:shadow-md transition"
          >
            <img
              className="h-16 mx-auto mb-2"
              src={course.image}
              alt={course.title}
            />
            {course.description && (
              <p className="text-purple-700 text-sm font-semibold mb-1">
                {course.description}
              </p>
            )}
            <h4 className="text-md font-bold text-gray-900">{course.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseRecommendations;
