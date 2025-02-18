import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A web app for managing tasks.",
      link: "#",
    },
    {
      title: "Project 2",
      description: "An e-commerce platform built with React.",
      link: "#",
    },
    {
      title: "Project 3",
      description: "A portfolio website using Tailwind CSS.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-400 hover:text-blue-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;