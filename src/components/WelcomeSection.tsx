import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { FaLock } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

// Welcome Section Component of dashboard

const WelcomeSection: React.FC = () => {
  const currentUser = useSelector(
    (state: RootState) => state.course.currentUser
  );

  return (
    <div className="py-2 px-4">
      {/* Welcome Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 text-left">
          Welcome,{" "}
          {currentUser && currentUser.displayName
            ? currentUser.displayName
            : "Guest"}
        </h2>
      </div>

      <section className="border border-gray-200 rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            {/* Lightning Bolt Icon */}
            <div className="flex items-center">
              <span className="text-5xl font-bold text-black">1</span>
              <BsLightningChargeFill className="text-gray-400 text-4xl ml-2" />
            </div>
            <p className="text-lg text-gray-600 mt-6">
              Solve <span className="font-bold">3 problems</span> to continue
              your streak
            </p>
          </div>
        </div>
        {/* Streak Display */}
        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 bg-yellow-300 text-black rounded-full flex items-center justify-center border-2 border-gray-400">
              <BsLightningChargeFill />
            </div>
            <span className="text-sm mt-1">T</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-2 border-gray-400 text-gray-400 rounded-full flex items-center justify-center">
              <BsLightningChargeFill />
            </div>
            <span className="text-sm mt-1">W</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-2 border-gray-400 text-gray-400 rounded-full flex items-center justify-center">
              <BsLightningChargeFill />
            </div>
            <span className="text-sm mt-1">Th</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-2 border-gray-400 text-gray-400 rounded-full flex items-center justify-center">
              <BsLightningChargeFill />
            </div>
            <span className="text-sm mt-1">F</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 border-2 border-gray-400 text-gray-400 rounded-full flex items-center justify-center">
              <BsLightningChargeFill />
            </div>
            <span className="text-sm mt-1">S</span>
          </div>
        </div>
      </section>

      {/* XP Unlock Section */}
      <div className="flex items-center p-4 mt-4 border border-gray-200 rounded-md">
        <FaLock className="text-yellow-600 text-2xl" />
        <div className="text-left pl-4">
          <p className="font-semibold text-gray-800">UNLOCK LEAGUES</p>
          <p className="text-sm text-gray-500">70 of 175 XP</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
