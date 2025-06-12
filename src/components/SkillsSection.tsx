
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'Next.js', level: 88, icon: '▲' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'Vue.js', level: 85, icon: '💚' },
      { name: 'Three.js', level: 78, icon: '🎮' }
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: '🟢' },
      { name: 'Python', level: 88, icon: '🐍' },
      { name: 'Express.js', level: 92, icon: '🚀' },
      { name: 'GraphQL', level: 85, icon: '📊' },
      { name: 'PostgreSQL', level: 87, icon: '🐘' },
      { name: 'MongoDB', level: 83, icon: '🍃' }
    ],
    devops: [
      { name: 'AWS', level: 85, icon: '☁️' },
      { name: 'Docker', level: 88, icon: '🐳' },
      { name: 'Kubernetes', level: 75, icon: '⚙️' },
      { name: 'CI/CD', level: 90, icon: '🔄' },
      { name: 'Terraform', level: 78, icon: '🏗️' },
      { name: 'Monitoring', level: 82, icon: '📈' }
    ],
    tools: [
      { name: 'Git', level: 95, icon: '🌿' },
      { name: 'VS Code', level: 98, icon: '💻' },
      { name: 'Figma', level: 85, icon: '🎨' },
      { name: 'Postman', level: 90, icon: '📮' },
      { name: 'Jira', level: 80, icon: '📋' },
      { name: 'Slack', level: 95, icon: '💬' }
    ]
  };

  const categories = [
    { key: 'frontend', label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', label: 'Backend', color: 'from-emerald-500 to-teal-500' },
    { key: 'devops', label: 'DevOps', color: 'from-purple-500 to-pink-500' },
    { key: 'tools', label: 'Tools', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A diverse toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 ${
                activeCategory === category.key
                  ? `bg-gradient-to-r ${category.color} scale-105`
                  : 'glass-card hover:scale-105'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
            <Card 
              key={skill.name} 
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{skill.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <div className="text-sm text-white/70">{skill.level}% proficiency</div>
                </div>
              </div>
              
              {/* Skill Bar */}
              <div className="relative">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
                <div className="absolute -top-8 right-0 text-xs text-white/50">
                  {skill.level}%
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Leadership', 'Communication', 'Problem Solving', 'Creativity', 
              'Adaptability', 'Mentoring', 'Project Management', 'Critical Thinking'
            ].map((skill, index) => (
              <div
                key={skill}
                className="px-4 py-2 glass-card rounded-full text-white/80 hover:text-white hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
