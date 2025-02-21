import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/pic.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-800 p-4 z-50 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 w-10 rounded-full border-2 border-white shadow-lg" // Increased size and made it round
          />
        </a>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-xl">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#blog" className="hover:text-gray-400">Blog</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu (Slide-In Effect) */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col items-center justify-center space-y-6 text-white text-xl`}
      >
        <button onClick={toggleMenu} className="absolute top-6 right-6 text-white text-3xl">
          <FaTimes />
        </button>
        <a href="#home" className="hover:text-gray-400" onClick={toggleMenu}>Home</a>
        <a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>About</a>
        <a href="#skills" className="hover:text-gray-400" onClick={toggleMenu}>Skills</a>
        <a href="#services" className="hover:text-gray-400" onClick={toggleMenu}>Services</a>
        <a href="#projects" className="hover:text-gray-400" onClick={toggleMenu}>Projects</a>
        <a href="#blog" className="hover:text-gray-400" onClick={toggleMenu}>Blog</a>
        <a href="#contact" className="hover:text-gray-400" onClick={toggleMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
