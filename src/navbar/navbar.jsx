import React, { useState } from "react";
import { navLinks } from "./navbar-const";
import { Link } from "react-router-dom";

const Navbar = ({ scrollMoveY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("scrollMoveY: ", scrollMoveY);

  return (
    <div>
      <nav
        className={`navbar border-b-1 border-[#50506b] shadow-2xl ${
          scrollMoveY ? "navScrolled" : "py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 scroll-smooth">
          <img
            src={"/assets/A5.png"}
            alt="logo"
            className={`h-18 bg-blend-overlay ${
              scrollMoveY && "invert opacity-80"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.pathname}
              className={`navbarMid group ${
                scrollMoveY ? "text-gray-900" : "text-orange-300"
              }`}
            >
              {link.name}
              <div
                className={`${
                  scrollMoveY ? "bg-gray-900" : "bg-orange-300"
                } h-0.5 w-0 group-hover:w-2 transition-all duration-300`}
              />
            </Link>
          ))}
          <Link to="/promociones">
            <button
              className={`px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
                scrollMoveY ? "text-white " : "text-white"
              } transition-all hover:text-[#282732]`}
            >
              Promociones
            </button>
          </Link>
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <svg
            className={`h-6 w-6 ${scrollMoveY ? "invert" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <Link to="/login">
            <button className="bg-black text-white hover:text-[#282732] px-4 py-1 rounded-full ml-4 transition-all duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer ${scrollMoveY ? "invert" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}

          <Link
            className="border px-4 py-1 text-white hover:text-[#282732] text-sm font-light rounded-full cursor-pointer transition-all button"
            to="#newsletter"
          >
            Newsletter
          </Link>
          <Link to="/login">
            <button className="bg-white text-white hover:text-[#282732] px-8 py-2.5 rounded-full transition-all duration-500 button">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
