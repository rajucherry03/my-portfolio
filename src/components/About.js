import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-400">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-justify"> {/* Added text-justify */}
          <p className="text-lg mb-6">
            I'm <span className="font-semibold">Raju S</span>, a passionate and dedicated Computer Science student specializing in Data Science.
            With hands-on experience in web development, software solutions, and problem-solving, I thrive on building innovative and impactful digital experiences.
          </p>
          <p className="text-lg mb-6">
            I have successfully completed multiple internships, working on real-world projects such as <span className="font-semibold">Employee Management Systems, Learning Management Systems, and Faculty Management Systems.</span> 
            My expertise lies in full-stack development, leveraging <span className="font-semibold">React.js, JavaScript, Django, Firebase, and PostgreSQL</span> to create scalable applications.
          </p>
          <p className="text-lg mb-6">
            Beyond development, I have a strong interest in <span className="font-semibold">Networking, Cloud Computing, and Data Science.</span> 
            I hold certifications in Python for Data Science (IBM), Google Data Analytics, and CCNA (Cisco).
          </p>
          <p className="text-lg mb-6">
            I actively participate in tech workshops and conferences, presenting research on IoT-based healthcare solutions at ICONDEEPCOM. 
            I am always eager to explore new technologies, collaborate on projects, and contribute to the tech community.
          </p>
          <p className="text-lg font-semibold text-blue-300 text-center"> {/* Center-align the call-to-action */}
            Let's connect and innovate together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;