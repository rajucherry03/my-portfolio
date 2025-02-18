import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-white animate-pulse">
          Education
        </h2>

        <div className="flex flex-col items-center space-y-8 w-full max-w-4xl">
          {/* Bachelor's Degree */}
          <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl w-full text-center border-2 border-blue-500
            transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]">
            <h3 className="text-2xl font-bold text-blue-400">
              Madanapalle Institute of Technology and Science, Madanapalle
            </h3>
            <p className="text-gray-300 mt-2">
              Bachelor of Technology - CSE Data Science | 2022 – 2025 | 8.53 CGPA
            </p>
          </div>

          {/* Diploma */}
          <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl w-full text-center border-2 border-blue-500
            transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]">
            <h3 className="text-2xl font-bold text-blue-400">
              Dr. Y C James Yen Government Polytechnic, Kuppam
            </h3>
            <p className="text-gray-300 mt-2">
              Diploma in Computer Engineering | 2019 – 2022 | 8.9 GPA
            </p>
          </div>

          {/* Schooling (SSLC) */}
          <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl w-full text-center border-2 border-blue-500
            transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)]">
            <h3 className="text-2xl font-bold text-blue-400">
              ZPHS Gudupalle
            </h3>
            <p className="text-gray-300 mt-2">
              SSLC (10th Class) | 2018 – 2019 | 9.7 GPA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
