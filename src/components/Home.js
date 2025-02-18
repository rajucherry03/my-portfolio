import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Fade out the current skill
      setTimeout(() => {
        // Update the skill after fade-out
        setCurrentSkill((prevSkill) => {
          const currentIndex = skills.indexOf(prevSkill);
          const nextIndex = (currentIndex + 1) % skills.length;
          return skills[nextIndex];
        });
        setFade(true); // Fade in the new skill
      }, 500); // Wait for fade-out to complete
    }, 2000); // Change skill every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [skills]);

  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Hi, I'm Raju S</h1>
        <p className="text-2xl mt-4">
          A Passionate Student and Versatile Developer skilled in{" "}
          <span
            className={`text-blue-400 transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentSkill}
          </span>
        </p>
      </div>
    </section>
  );
};

export default Home;