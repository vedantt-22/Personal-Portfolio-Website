
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-gray-400 mt-2">Web Developer & Designer</p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">johndoe@example.com</li>
                <li className="text-gray-400">+1 (123) 456-7890</li>
                <li className="text-gray-400">New York, NY, USA</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {year} John Doe. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#home"
              className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
