
import React from 'react';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "React",
        "Next.js", 
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "TailwindCSS"
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "Python",
        "Node.js",
        "Express",
        "API Development"
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        "MongoDB",
        "SQL",
        "PostgreSQL",
        "Database Design"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        "Git",
        "Azure",
        "CI/CD (GitHub Actions)",
        "Linux",
        "Vercel",
        "Render"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Technologies and tools I work with
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="glass-card p-8 hover:scale-105 transition-all duration-500 group"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full glass-card text-white/90 text-sm font-medium hover:scale-105 hover:bg-white/10 transition-all duration-300 border border-white/10"
                    style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
