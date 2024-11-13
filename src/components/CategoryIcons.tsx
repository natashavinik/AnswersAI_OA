import React from "react";

// Component to display categoryies of courses on the landing page

const categories = [
  { name: "Math", icon: "/images/icons/math.svg" },
  { name: "Data Analysis", icon: "/images/icons/data.svg" },
  { name: "Computer Science", icon: "/images/icons/computer-science.svg" },
  { name: "Programming & AI", icon: "/images/icons/programming.svg" },
  { name: "Science & Engineering", icon: "/images/icons/science.svg" },
];

const CategoryIcons: React.FC = () => {
  return (
    <section className="py-10 text-center bg-white">
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center">
            <img
              className="h-9 w-9 mr-2"
              src={category.icon}
              alt={`${category.name} Icon`}
            />
            <p className="text-lg font-semibold text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryIcons;
