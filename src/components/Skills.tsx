
import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML & CSS", percentage: 95 },
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "React", percentage: 92 },
    { name: "Node.js", percentage: 80 },
    { name: "UI/UX Design", percentage: 75 },
    { name: "Tailwind CSS", percentage: 88 },
    { name: "MongoDB", percentage: 70 },
  ];

  const techStack = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Git & GitHub",
    "Jest",
    "Figma",
    "Webpack",
    "Docker",
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">My Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Team Collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Problem Solving</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Time Management</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Communication</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Adaptability</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  <span>Creativity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
