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
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 animate-bounce">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-blue-400">
                {exp.role} | {exp.company}
              </h3>
              <p className="text-gray-400">
                {exp.duration} | {exp.location}
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-300">
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