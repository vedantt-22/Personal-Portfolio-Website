
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Code, Users } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      value: "5+",
      label: "Years of Experience",
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      value: "50+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      value: "20+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      value: "10+",
      label: "Awards Received",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <p className="text-gray-600 mb-6">
              I am a passionate web developer with 2+ years of experience in
              creating beautiful, functional, and user-centered digital
              experiences. With a background in both design and development, I
              bring a unique perspective to every project.
            </p>
            <p className="text-gray-600 mb-6">
              My journey in web development started when I was in college, and I've
              been honing my skills ever since. I specialize in front-end
              development with expertise in React, TypeScript, and modern CSS
              frameworks like Tailwind CSS. I'm also experienced in back-end
              technologies and enjoy creating full-stack applications.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or hiking in the great
              outdoors. I believe in continuous learning and am always looking to
              expand my knowledge and skills.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 bg-blue-50 p-3 rounded-full">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
