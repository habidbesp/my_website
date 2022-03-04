import React from "react";
import { Outlet } from "react-router-dom";

export default function BackScreen() {
  return (
    <div className="back-screen">
      <Outlet />
    </div>
  );
}
