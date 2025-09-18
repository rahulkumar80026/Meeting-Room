

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/pages/Dashboard";
import RoomsPage from "./Components/pages/RoomsPage";
import MeetingsPage from "./Components/pages/MeetingPage";
import Login from "./Components/pages/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
      </Routes>
    </Router>
  );
}
