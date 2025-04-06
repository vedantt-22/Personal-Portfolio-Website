
import React, { useState } from "react";
import { ExternalLink, GitHub, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      description: "A comprehensive admin dashboard for e-commerce businesses with sales analytics, inventory management, and customer insights.",
      liveLink: "https://example.com/project1",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Redux", "Firebase"],
      description: "A mobile task management application that helps users organize their daily activities with features like reminders, labels, and priority settings.",
      liveLink: "https://example.com/project2",
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      id: 3,
      title: "Personal Blog Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Tailwind CSS"],
      description: "A feature-rich blogging platform with a clean, minimalist design, supporting markdown editing, categories, tags, and SEO optimization.",
      liveLink: "https://example.com/project3",
      githubLink: "https://github.com/yourusername/project3",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "OpenWeather API", "Styled Components"],
      description: "A mobile weather application with hourly and 7-day forecasts, location-based weather updates, and visually appealing UI.",
      liveLink: "https://example.com/project4",
      githubLink: "https://github.com/yourusername/project4",
    },
  ];

  const filters = [
    { name: "All", value: "all" },
    { name: "Web", value: "web" },
    { name: "Mobile", value: "mobile" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <GitHub className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
