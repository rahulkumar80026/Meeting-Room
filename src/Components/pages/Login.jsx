import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, User } from "lucide-react";
import silder1 from "../../assets/Images/silder1.png";

// ---------- Validation Schema ----------
const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

// ---------- Slider Images ----------
const images = [
  silder1,
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1170&q=80",
];

function Login() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // Handle login submit
  const onSubmit = (data) => {
    console.log("✅ Login Data:", data);
    // TODO: Call your backend API here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50">
      {/* Brand + tagline */}
      <div className="mb-6 text-center">
        <h1 className="text-5xl font-bold shadow-md">
          Space<span className="text-yellow-500">wize</span>
        </h1>
        <p className="text-lg text-gray-600 mt-1 font-serif">
          Use your space, wisely.
        </p>
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl h-auto bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          {/* Left Side - Form */}
          <div className="flex flex-col justify-center w-full">
            <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Welcome Admin!
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Username */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-yellow-100 border-none focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5" />
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                  className="w-full pl-10 pr-3 py-2 rounded-lg bg-yellow-100 border-none focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  {...register("remember")}
                  className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                />
                <label htmlFor="remember" className="ml-2 text-gray-600 text-sm">
                  Remember Me
                </label>
              </div>

              {/* Login Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl py-2 transition"
              >
                Login
              </motion.button>
            </form>

            {/* Forgot Password */}
            <p className="text-sm text-gray-500 cursor-pointer hover:underline text-center mt-4">
              Forgot Password?
            </p>
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative flex items-center justify-center w-full overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt="Illustration"
                className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 flex space-x-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === current ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
