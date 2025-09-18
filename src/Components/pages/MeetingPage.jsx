import React from "react";
import Navbar from "../common/Navbar";
import MeetingsOverview from "../Admin/meetingservices";

export default function MeetingsPage() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <Navbar />
      <MeetingsOverview />
    </div>
  );
}
