import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          SR
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-gray-400">
              Education
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;