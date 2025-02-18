import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Employee Management System (EMS)",
      description:
        "Developed a fully responsive website using React with separate Admin and User navigation...",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Firebase"],
      githubLink: "https://github.com/yourusername/employee-management-system",
    },
    {
      title: "Learning Management System (LMS)",
      description:
        "Led the LMS project, contributing to its development using HTML, CSS, JavaScript, ReactJS, and Firebase...",
      technologies: ["React", "Firebase", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/yourusername/learning-management-system",
    },
    {
      title: "Faculty Management System",
      description:
        "Developed a tailored Faculty Management System for departmental use...",
      technologies: ["HTML", "CSS", "JavaScript", "Django", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/faculty-management-system",
    },
    {
      title: "Exam Registration Portal",
      description:
        "Developed a comprehensive exam registration portal and hall ticket generation system...",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/exam-portal",
    },
    {
      title: "E-Commerce Website",
      description:
        "Designed a single-page e-commerce website with interactive elements for user engagement...",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/yourusername/e-commerce-website",
    },
    {
      title: "College Fee Management System",
      description:
        "Collaborated with Dr. Y C James Yen Govt Polytechnic to develop a College Fee Management System...",
      technologies: ["HTML", "CSS", "Python", "Django"],
      githubLink: "https://github.com/yourusername/college-fee-management-system",
    },
    {
      title: "Employee Management System (Django)",
      description:
        "Developed a tailored Employee Management System using HTML, CSS, Tailwind, and Django for backend functionality...",
      technologies: ["HTML", "CSS", "JavaScript", "Django", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/employee-management-system-2",
    },
  ];

  // State to manage showing more projects
  const [showAll, setShowAll] = useState(false);

  // Determine how many projects to show
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-3 py-1 rounded-full text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 font-medium"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

        {/* View More / View Less Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
