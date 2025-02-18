import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaBootstrap, FaWordpress, FaGoogle, FaFigma } from "react-icons/fa";

const skills = [
  { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3 />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-300" },
  { name: "React JS", icon: <FaReact />, color: "text-blue-400" },
  { name: "Django", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Node JS", icon: <FaNodeJs />, color: "text-green-600" },
  { name: "Tailwind CSS", icon: <FaCss3 />, color: "text-blue-400" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
  { name: "WordPress", icon: <FaWordpress />, color: "text-blue-400" },
  { name: "Firebase", icon: <FaDatabase />, color: "text-yellow-400" },
  { name: "PostgreSQL", icon: <FaDatabase />, color: "text-blue-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "Google Cloud", icon: <FaGoogle />, color: "text-red-500" },
  { name: "Figma", icon: <FaFigma />, color: "text-pink-500" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-12 animate-bounce">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] 
              transition-transform duration-300 transform hover:scale-110 flex flex-col items-center`}
              whileHover={{ rotateY: 15, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`text-5xl ${skill.color} mb-4`}>{skill.icon}</div>
              <p className="text-white font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
