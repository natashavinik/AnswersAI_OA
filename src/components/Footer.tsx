import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-white border-t border-gray-200">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Brilliant. All rights reserved.
        </p>
        <div className="footer-links mt-4 flex gap-6">
          <a
            href="/terms"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Terms
          </a>
          <a
            href="/privacy"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
