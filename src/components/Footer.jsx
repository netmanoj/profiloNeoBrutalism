import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full px-10 py-6 bg-[#A6FAFF] border-black border-t-2 text-center">
      <p className="text-2xl mb-4">© 2023 Manoj | Made By a Human</p>
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="https://github.com/netmanoj/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-8 h-8 text-black hover:text-gray-700 transition duration-300" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/livingmanoj/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-8 h-8 text-blue-700 hover:text-blue-900 transition duration-300" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
