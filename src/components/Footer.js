import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://linkedin.com/in/rajumits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
          <a
            href="https://github.com/rajucherry03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
        </div>
        <p className="text-gray-400">&copy; 2023 Raju S. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
