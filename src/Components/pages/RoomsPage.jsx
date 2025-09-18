import React from "react";
import Navbar from "../common/Navbar";
import RoomsOverview from "../Admin/RoomService";

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <Navbar />
      <RoomsOverview />
    </div>
  );
}
