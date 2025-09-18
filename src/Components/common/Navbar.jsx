import React from "react";
import { useNavigate } from "react-router-dom";
import navItems from "../../Components/utils/constants";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center px-6 py-3 bg-yellow-100 shadow-sm">
      {/* Logo */}
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        Space<span className="text-yellow-500">wize</span>
      </h1>

      {/* Center Navigation */}
      <nav className="flex items-center gap-3 bg-white rounded-full px-3 py-1 shadow">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            className="p-2 rounded-full hover:bg-yellow-200"
          >
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
          </button>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center bg-white rounded-full px-3 py-2 shadow">
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="search"
            className="w-4 h-4 mr-2"
          />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent w-32 md:w-48"
          />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow cursor-pointer">
          <span className="font-medium">Admin</span>
          <img src="https://i.pravatar.cc/40" alt="avatar" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </header>
  );
}
