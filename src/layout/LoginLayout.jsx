import React from "react";
import "../App.css";
import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div className="scroll-smooth w-auto">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default LoginLayout;
