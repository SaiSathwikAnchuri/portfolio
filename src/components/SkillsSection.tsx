
import React from 'react';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "Next.js", icon: "▲" },
        { name: "Vue.js", icon: "💚" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Three.js", icon: "🎮" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "GraphQL", icon: "🚀" }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Terraform", icon: "🏗️" },
        { name: "Monitoring", icon: "📊" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "VS Code", icon: "💻" },
        { name: "Figma", icon: "🎨" },
        { name: "Postman", icon: "📮" },
        { name: "Jira", icon: "🎫" },
        { name: "Slack", icon: "💬" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Technical Arsenal
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A comprehensive toolkit spanning the entire development spectrum, 
            from elegant frontends to robust backend architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="glass-card p-6 hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${(categoryIndex * 6 + skillIndex) * 50}ms` }}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-white/90 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Soft Skills & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem Solving", "Team Leadership", "Agile/Scrum", "Code Review",
              "Technical Writing", "Mentoring", "System Architecture", "Performance Optimization"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 glass-card text-white/80 rounded-full hover:scale-105 hover:text-gradient transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
