import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Components/Context/AuthContext";

export default function ProtectedRoute() {
  const { isAuth, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return isAuth ? <Outlet /> : <Navigate to="/" />; // use Outlet to render nested routes
}
