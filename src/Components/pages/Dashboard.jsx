import React from "react";
import Navbar from "../common/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <Navbar />
      <div className="flex-1 p-6">
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>
    </div>
  );
}
