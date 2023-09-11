import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex flex-row bg-gray-50 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}
