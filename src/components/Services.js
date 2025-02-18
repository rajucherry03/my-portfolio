import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern websites using React, Tailwind CSS, and more.",
    },
    {
      title: "Full-Stack Development",
      description: "Developing full-stack applications with Django, Node.js, and Firebase.",
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces with Figma and Tailwind CSS.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 animate-bounce">
          Freelancer Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;