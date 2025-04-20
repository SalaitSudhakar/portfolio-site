import React, { useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-custom-dark-blue shadow-md shadow-white/20">
      <div className="max-w-7xl mx-auto flex gap-1  items-center justify-between text-white font-semibold px-3 sm:px-6 py-3 text-xl">
        <div className="font-bold text-teal-500 whitespace-nowrap tracking-tighter">
          {"</"} <span className="text-4xl">S</span> {">"}
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex gap-10 md:gap-15 lg:gap-20 justify-between items-center">
          {navLinks.map((navlink, index) => (
            <a
              key={index}
              href={`#${navlink}`}
              onClick={() => setActiveSection(navlink)}
              className={`capitalize group relative  transition-colors duration-300 ${
                activeSection !== navlink && "hover:text-teal-300"
              } ${activeSection === navlink && "text-teal-500"}`}
            >
              {navlink}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
          className="sm:hidden flex flex-col justify-center h-12 w-12 gap-1 hover:bg-gray-200/20 p-3 rounded-full cursor-pointer transition-all duration-300"
        >
          <span
            className={`block h-1 bg-white rounded transition-all duration-300 transform ${
              hamburgerClicked ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-white rounded transition-all duration-300 transform ${
              hamburgerClicked ? "-rotate-45 -translate-y-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 bg-white rounded transition-all duration-300 ${
              hamburgerClicked ? "opacity-0" : "opacity-100"
            }`}
          ></span>
        </button>

        {/* Hamburger Menu Dropdown */}
        <div
          className={`sm:hidden absolute top-full left-0 right-0 bg-custom-dark-blue shadow-xl shadow-white/5 overflow-hidden transition-all duration-500 transform  ${
            hamburgerClicked ? "translate-x-0 " : " -translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-3 m-4">
            {navLinks.map((navlink, index) => (
              <a
                key={index}
                href={`#${navlink}`}
                onClick={() => {
                  setActiveSection(navlink);
                  setHamburgerClicked(false); // close menu after clicking
                }}
                className={`p-2 capitalize group relative bg-transparent transition-all duration-300 rounded-md ${
                  activeSection !== navlink &&
                  "hover:text-gray-800 hover:bg-gray-200/80"
                } ${activeSection === navlink && "text-[#3FBAC2]"}`}
              >
                {navlink}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
