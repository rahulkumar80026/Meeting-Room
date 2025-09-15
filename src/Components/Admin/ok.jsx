import React from "react";
import { User, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-4">
      {/* Logo and tagline */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center"
      >
        <h1 className="text-3xl font-bold">
          space<span className="text-yellow-500">wize</span>
        </h1>
        <p className="text-sm text-gray-600 mt-1">Use your space, wisely.</p>
      </motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          {/* Left Side */}
          <div className="flex flex-col justify-center w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Welcome Admin!
            </h2>

            {/* Username */}
            <div className="mb-4 relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-yellow-100 border-none focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-yellow-100 border-none focus:ring-2 focus:ring-yellow-400 outline-none"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center mb-6">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
              />
              <label htmlFor="remember" className="ml-2 text-gray-600 text-sm">
                Remember Me
              </label>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl py-2 transition"
            >
              Login
            </motion.button>

            {/* Forgot Password */}
            <p className="mt-3 text-sm text-gray-500 cursor-pointer hover:underline text-center">
              Forgot Password?
            </p>
          </div>

          {/* Right Side Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Illustration"
              className="w-60 h-60 md:w-80 md:h-80 object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
