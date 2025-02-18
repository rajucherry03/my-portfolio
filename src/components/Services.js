import React, { useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    { title: "Web Development", description: "Building and maintaining websites, including front-end and back-end development, responsive design, and e-commerce solutions." },
    { title: "Mobile App Development", description: "Creating applications for both iOS and Android platforms using frameworks like React Native, Flutter, or native development tools." },
    { title: "Software Development", description: "Developing custom software solutions, including desktop applications, enterprise software, and specialized tools." },
    { title: "Project Management", description: "Managing the development process, ensuring timely delivery, and maintaining communication with clients." },
    { title: "Quality Assurance", description: "Testing and debugging software to ensure it meets the required standards and specifications." },
    { title: "Consulting", description: "Providing expert advice on technology choices, architecture, and best practices." },
    { title: "Integration", description: "Integrating third-party services and APIs into existing systems to enhance functionality." },
    { title: "Maintenance and Support", description: "Ongoing support for existing software, including bug fixes, updates, and performance optimizations." },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fadeInUp">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl text-white"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Toggle View More / View Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
