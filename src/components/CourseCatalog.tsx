import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

//Component to display all courses

const CourseCatalog: React.FC = () => {
  const courses = useSelector((state: RootState) => state.course.courses);

  return (
    <div className="w-full bg-white px-1 py-6 rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-4 text-left">
        Browse all 70+ courses
      </h2>
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="  Search"
          className="flex-grow border border-gray-300 rounded-full p-2 mb-2 w-full md:w-auto"
        />
      </div>

      <div className="flex gap-4 py-4">
        <button className="bg-white text-black border-2 border-black px-6 py-2 rounded-full hover:bg-gray-100 transition ease-in-out">
          New courses
        </button>
        <button className="bg-white text-black border-2 border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition ease-in-out">
          Math
        </button>
        <button className="bg-white text-black border-2 border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition ease-in-out">
          Data
        </button>
        <button className="bg-white text-black border-2 border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition ease-in-out">
          Computer Science
        </button>
        <button className="bg-white text-black border-2 border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition ease-in-out">
          Science
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-0 mt-4 mx-1">
        {courses.map((course) => (
          <div key={course.id} className="mb-4">
            <div className="bg-white p-6 rounded-lg shadow-[0_3px_0px_rgba(211,211,211,0.5)] border border-gray-300 mb-4 relative w-fit mx-auto">
              {course.isNew && (
                <span className="absolute top-2 right-2 text-xs bg-green-500 text-white px-2 py-0 rounded-sm">
                  NEW
                </span>
              )}
              <img
                src={course.image}
                alt={course.title}
                className="mx-auto max-w-xs h-24 object-contain"
              />
            </div>
            <h3 className="font-semibold text-sm text-center break-words w-fit mx-auto">
              {course.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
