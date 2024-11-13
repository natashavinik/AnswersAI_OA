import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to log in with email and password");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to log in with Google");
    }
  };

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form
        onSubmit={handleEmailLogin}
        className="w-80 flex flex-col gap-4 mb-4"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-3 border rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
        >
          Login with Email
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition"
      >
        Login with Google
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default LoginPage;
