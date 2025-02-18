import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with React",
      content:
        "React is a powerful JavaScript library for building user interfaces. In this blog, we'll explore the basics of React and how to get started.",
      date: "October 10, 2023",
    },
    {
      title: "Mastering Tailwind CSS",
      content:
        "Tailwind CSS is a utility-first CSS framework that allows you to build modern designs quickly. Learn how to use Tailwind CSS effectively in your projects.",
      date: "October 15, 2023",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-bounce">
          Blog
        </h2>
        <div className="flex flex-col items-center space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="relative bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-blue-500 transition-all 
                duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] w-full max-w-2xl"
            >
              <h3 className="text-2xl font-bold text-blue-400">{post.title}</h3>
              <p className="text-gray-300 mt-2">{post.content}</p>
              <p className="text-gray-500 mt-4">{post.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
