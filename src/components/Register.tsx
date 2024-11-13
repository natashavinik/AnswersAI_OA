import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to sign in with Google");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to register");
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center h-screen px-6">
      {/* Image Section */}
      <div className="hidden md:flex md:w-1/2 justify-center">
        <img
          src="/images/signup.png"
          alt="Signup Illustration"
          className="w-full max-w-md"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:w-1/2 items-center bg-white p-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Create a free account to discover your personalized learning path
        </h2>

        {/* Sign Up */}
        <div className="flex gap-4 mb-4 w-full justify-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 px-6 py-3 w-full bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100"
            style={{ boxShadow: "0 4px 0px rgba(0, 0, 0, 0.1)" }} // 4-pixel drop shadow with no blur
          >
            <img
              src="/images/Google_logo.svg"
              alt="Google Icon"
              className="h-5"
            />
            Sign up with Google
          </button>
        </div>

        <p className="text-gray-500 my-4 flex items-center">
          <span className="mx-4">or</span>
        </p>

        {/* Registration Form */}
        <form onSubmit={handleRegister} className="w-full max-w-md">
          <div className="flex flex-col mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (!showAdditionalFields) setShowAdditionalFields(true);
              }}
              onFocus={() => setShowAdditionalFields(true)}
              required
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>

          {/* Show additional fields if the email input has been focused */}
          {showAdditionalFields && (
            <>
              <div className="flex flex-col mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
                />
              </div>
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-200"
                />
              </div>
            </>
          )}

          {/* Update button styling based on showAdditionalFields state */}
          <button
            type="submit"
            className={`w-full py-3 ${
              showAdditionalFields
                ? "bg-gray-300 text-gray-500"
                : "bg-black text-white"
            } font-semibold rounded-full hover:bg-gray-300 transition ease-in-out`}
          >
            Sign up
          </button>
          {error && (
            <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
          )}
        </form>

        <p className="text-sm text-center mt-6 text-gray-500">
          By clicking above, I agree to Brilliant's{" "}
          <a href="#" className="text-blue-600 underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </p>
        <p className="text-sm text-center mt-2">
          Existing user?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Log in
          </a>
        </p>
      </div>
    </section>
  );
};

export default Register;
