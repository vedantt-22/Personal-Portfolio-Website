
import React from "react";

const Education = () => {
  const timeline = [
    {
      year: "2022 - 2026",
      degree: "Bachelor of Education in Artificial Intelligence & Data Science",
      institution: "SIES Graduate School of Technology",
      description:
        "Graduated with honors. Focused on web development, algorithms, and data structures. Completed a capstone project developing a full-stack web application.",
    },
    {
      year: "2024",
      degree: "Google Data Analytics Certification",
      institution: "Google",
      description:
        "Comprehensive course covering user research, wireframing, prototyping, and design systems. Created multiple portfolio projects.",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      name: "Professional Front-End Developer",
      issuer: "Meta",
      year: "2023",
    },
    {
      name: "React Native Specialist",
      issuer: "Udemy",
      year: "2023",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-8">Educational Journey</h3>
            <div className="timeline">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold mt-3 mb-1">{item.degree}</h4>
                    <p className="text-gray-700 font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-8">Certifications</h3>
            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg shadow-md border-l-4 border-primary"
                >
                  <h4 className="text-lg font-bold mb-1">{cert.name}</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{cert.issuer}</span>
                    <span className="text-gray-500">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Marathi</span>
                    <span className="text-gray-600">Native</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>English</span>
                    <span className="text-gray-600">Fluent</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
