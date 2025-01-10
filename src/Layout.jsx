import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./comonents/Navbar.jsx";

function Layout() {
  return (
    <>
      <div className="bg">
        <Navbar />

        <Outlet />
      </div>
    </>
  );
}

export default Layout;
