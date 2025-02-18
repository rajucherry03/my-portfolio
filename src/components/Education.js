import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 animate-pulse">
          Education
        </h2>
        <div className="space-y-6">
          {/* Bachelor's Degree */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-400">
              Madanapalle Institute of Technology and Science, Madanapalle
            </h3>
            <p className="text-gray-300">
              Bachelor of Technology - CSE Data Science | 2022 – 2025 | 8.53 CGPA
            </p>
          </div>

          {/* Diploma */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-400">
              Dr. Y C James Yen Government Polytechnic, Kuppam
            </h3>
            <p className="text-gray-300">
              Diploma in Computer Engineering | 2019 – 2022 | 8.9 GPA
            </p>
          </div>

          {/* Schooling (SSLC) */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-400">
              ZPHS Gudupalle
            </h3>
            <p className="text-gray-300">
              SSLC (10th Class) | 2018 – 2019 | 9.7 GPA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;