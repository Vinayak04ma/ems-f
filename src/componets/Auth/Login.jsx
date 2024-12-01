import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Login = ({ handleLogin }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className={`relative flex h-screen w-screen items-center justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-400 text-gray-900"
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 text-2xl p-2 rounded-full focus:outline-none"
        title="Toggle Theme"
      >
        {theme === "dark" ? (
          <FaSun color="yellow" className="hover:scale-110 transition-transform" />
        ) : (
          <FaMoon color="blue" className="hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Login Form */}
      <div
        className={`border-2 rounded-xl p-10 shadow-lg ${
          theme === "dark" ? "border-emerald-600 bg-gray-800" : "border-gray-300 bg-white"
        }`}
      >
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          {/* Email Input */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`outline-none border-2 font-medium text-lg py-2 px-6 rounded-full placeholder-opacity-70 w-full mb-5 ${
              theme === "dark"
                ? "bg-gray-700 border-emerald-600 text-white placeholder-gray-400"
                : "bg-gray-100 border-gray-400 text-gray-900 placeholder-gray-500"
            }`}
            type="email"
            placeholder="Enter your email"
          />

          {/* Password Input */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={`outline-none border-2 font-medium text-lg py-2 px-6 rounded-full placeholder-opacity-70 w-full mb-7 ${
              theme === "dark"
                ? "bg-gray-700 border-emerald-600 text-white placeholder-gray-400"
                : "bg-gray-100 border-gray-400 text-gray-900 placeholder-gray-500"
            }`}
            type="password"
            placeholder="Enter your password"
          />

          {/* Submit Button */}
          <button
            className={`font-semibold text-lg py-2 px-8 w-full rounded-full ${
              theme === "dark"
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
