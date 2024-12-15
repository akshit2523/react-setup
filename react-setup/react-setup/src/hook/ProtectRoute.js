import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectRoute() {
  const authToken = localStorage.getItem("auth:token");
  if (!authToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
