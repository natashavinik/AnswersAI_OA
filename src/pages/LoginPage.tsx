import React from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import Footer from "../components/Footer";

const LoginPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="login-container">
          <h2>Login to Your Account</h2>
          <Login />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
