import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../footer/Footer";

function MainLayout() {
  const ref = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(ref.current.scrollTop > 10);
    };
    ref.current.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="scroll-smooth h-svh overflow-y-scroll">
      <div className="w-full">
        <Navbar scrollMoveY={isScrolled} />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
