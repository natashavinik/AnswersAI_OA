import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { auth } from "../firebase";
import { setCurrentUser } from "../store/courseSlice";

const Header: React.FC = () => {
  const currentUser = useSelector(
    (state: RootState) => state.course.currentUser
  );
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      dispatch(setCurrentUser(null));
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-4 py-2 bg-white border-b border-gray-200 h-16">
      {/* Logo and Navigation Links */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img
              className="h-8 w-auto m-0"
              src="/images/Exceptional.svg"
              alt="Exceptional Logo"
              style={{ margin: 0 }} // Remove any default margin
            />
          </Link>
        </div>

        {/* Navigation links - shown only if the user is logged in */}
        {currentUser && (
          <nav className="flex gap-6">
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 ${
                location.pathname === "/dashboard"
                  ? "text-black"
                  : "text-gray-500"
              } hover:text-black`}
            >
              <img
                className={`h-5 w-auto m-0 ${
                  location.pathname === "/dashboard"
                    ? "filter-none"
                    : "filter grayscale brightness-350"
                }`}
                src="/images/icons/Home.png"
                alt="Home Icon"
                style={{ margin: 0 }}
              />
              <span>Home</span>
            </Link>
            <Link
              to="/courses"
              className={`flex items-center gap-2 ${
                location.pathname === "/courses"
                  ? "text-black"
                  : "text-gray-500"
              } hover:text-black`}
            >
              <img
                className={`h-5 w-auto m-0 ${
                  location.pathname === "/courses"
                    ? "filter-none"
                    : "filter grayscale"
                }`}
                src="/images/icons/courses.png"
                alt="Courses Icon"
                style={{ margin: 0 }}
              />
              <span>Courses</span>
            </Link>
          </nav>
        )}
      </div>

      {/* Login or Logout button */}
      {currentUser ? (
        <button
          onClick={handleLogout}
          className="bg-transparent border-2 border-black px-4 py-2 rounded-lg hover:bg-gray-200 transition ease-in-out"
        >
          Log out
        </button>
      ) : (
        <Link to="/login">
          <button className="bg-transparent border-2 border-gray-400 px-4 py-2 rounded-full hover:border-black text-black transition ease-in-out">
            Log in
          </button>
        </Link>
      )}
    </header>
  );
};

export default Header;
