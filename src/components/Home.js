import React, { useState, useEffect } from "react";
import computerImage from "./images/Computer1.gif"; // Import the 3D computer image
import resume from "./images/Resume_1.00.pdf"; // Import your resume
import { Sun, Moon, Menu } from "lucide-react"; // Using Lucide icons

const Home = () => {
  const skills = [
    "UI/UX Design",
    "App Development",
    "Web Development",
    "Web Design",
    "Figma",
    "React Native",
    "Freelancing",
    "Python",
    "React JS",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Django",
    "Node JS",
    "Firebase",
    "PostgreSQL",
  ];

  const [currentSkill, setCurrentSkill] = useState(skills[0]);
  const [fade, setFade] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSkill((prevSkill) => {
          const currentIndex = skills.indexOf(prevSkill);
          const nextIndex = (currentIndex + 1) % skills.length;
          return skills[nextIndex];
        });
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills]);

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Navbar with Menu and Theme Toggle */}
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
        >
          {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-900" />}
        </button>

        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
        >
          <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
        </button>
      </div>

      {/* Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-14 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
          <ul className="text-gray-900 dark:text-white">
            <li className="py-1 hover:text-blue-500 cursor-pointer">Home</li>
            <li className="py-1 hover:text-blue-500 cursor-pointer">About</li>
            <li className="py-1 hover:text-blue-500 cursor-pointer">Projects</li>
            <li className="py-1 hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>
      )}

      {/* Profile Content */}
      <div className="text-center">
        {/* Replace profile picture with 3D computer image */}
        <img
          src={computerImage}
          alt="3D Computer"
          className="w-48 h-65 mx-auto mb-4 animate-float" // Add animation
        />
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">Hi, I'm Raju S</h1>
        <p className="text-2xl mt-4 text-gray-600 dark:text-gray-300">
          A Passionate Student and Versatile Developer skilled in{" "}
          <span
            className={`text-blue-400 transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentSkill}
          </span>
        </p>
        <a
          href={resume} // Use imported resume path
          download="resume.pdf"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
};

export default Home;