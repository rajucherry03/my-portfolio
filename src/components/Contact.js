import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 animate-pulse">
          Contact Me
        </h2>
        <div className="text-center">
          <p className="text-lg text-gray-300">
            Angallu, Madanapalle, Andhra Pradesh 517326
          </p>
          <p className="text-lg text-gray-300">6301201156</p>
          <p className="text-lg text-gray-300">rajuedusbs@gmail.com</p>
          <a
            href="https://linkedin.com/in/rajumits"
            className="text-blue-400 hover:text-blue-300"
          >
            linkedin.com/in/rajumits
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;