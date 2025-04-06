import React from "react";
import { Download } from "lucide-react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen hero-gradient flex items-center py-20 pt-28"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-lg md:text-xl font-medium text-primary mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Vedant Karekar
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              Web Developer & Designer
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              I create engaging and functional web experiences with a focus on
              user experience and clean code. Passionate about building products
              that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
  href="/Vedant_Karekar_Resume.pdf"
  download
  className="btn-primary inline-flex items-center justify-center px-6 py-2 rounded-md font-medium bg-primary text-white hover:bg-primary/90 transition-colors"
>
  <Download className="w-4 h-4 mr-2" />
  Download CV
</a>
              <div className="flex items-center gap-4 justify-center">
                <a
                  href="https://github.com/vedantt-22"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vedant-karekar/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/public/Vedant_Karekar.png"
                  alt="Vedant Karekar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-primary text-white p-2 rounded-full">
                  <code className="text-xs">{"</>"}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
