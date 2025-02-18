import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Markatlas Inkjet Technologies Private Limited",
      role: "Web Developer Intern",
      duration: "June 2024 – July 2024",
      location: "Hyderabad, Telangana",
      description: [
        "Developed a fully responsive website using React with separate Admin and User navigation for the Employee Management System (EMS) project.",
        "Designed distinct functionalities for Admin and User.",
      ],
    },
    {
      company: "Ravuru Tech Private Limited",
      role: "Web Developer Intern",
      duration: "Mar 2024 – Apr 2024",
      location: "Remote",
      description: [
        "Led the Learning Management System (LMS) project, overseeing and coordinating team efforts.",
        "Developed a platform similar to Coursera and Udemy using ReactJS and Firebase.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-bounce">
          Experience
        </h2>

        <div className="flex flex-col items-center space-y-8 w-full max-w-4xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-800 p-6 rounded-lg shadow-xl w-full text-center border-2 border-blue-500
                transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]"
            >
              <h3 className="text-2xl font-bold text-blue-400">{exp.role} | {exp.company}</h3>
              <p className="text-gray-400 mt-1">{exp.duration} | {exp.location}</p>
              <ul className="list-disc list-inside mt-4 text-gray-300 text-left">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
