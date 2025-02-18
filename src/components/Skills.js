import React from "react";

const Skills = () => {
  const skills = [
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Django",
    "Node JS",
    "Tailwind CSS",
    "Bootstrap",
    "Firebase",
    "PostgreSQL",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 animate-pulse">
          Technical Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 px-6 py-2 rounded-full text-gray-300 hover:bg-blue-400 hover:text-white transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;