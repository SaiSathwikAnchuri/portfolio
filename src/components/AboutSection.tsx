
import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Heart, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const timeline = [
    {
      year: "2018",
      title: "Started Coding Journey",
      description: "Discovered the magic of programming with Python and fell in love with problem-solving."
    },
    {
      year: "2020",
      title: "First Internship",
      description: "Joined a startup as a frontend developer, learned React and modern web development."
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      description: "Expanded to backend development, mastering Node.js, databases, and cloud technologies."
    },
    {
      year: "2024",
      title: "Creative Technologist",
      description: "Now blending creativity with technology, building innovative solutions that inspire."
    }
  ];

  const dnaTraits = [
    { icon: Code, trait: "Problem Solver", description: "I love turning complex challenges into elegant solutions" },
    { icon: Heart, trait: "User Advocate", description: "Every line of code I write has the user experience in mind" },
    { icon: Zap, trait: "Innovation Driver", description: "Always exploring new technologies and pushing boundaries" },
    { icon: Users, trait: "Team Player", description: "Collaboration and knowledge sharing fuel my growth" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Every developer has a story. Here's mine - a journey of continuous learning, 
            creative problem-solving, and turning ideas into reality.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">My Evolution</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-magenta-500 to-emerald-500 rounded-full opacity-30" />
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`glass-card p-6 max-w-md hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-magenta-500 flex items-center justify-center text-white font-bold">
                      {item.year}
                    </div>
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-white/70">{item.description}</p>
                </Card>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-magenta-500 rounded-full border-4 border-background" />
              </div>
            ))}
          </div>
        </div>

        {/* Developer DNA */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Developer DNA</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dnaTraits.map((trait, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <trait.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{trait.trait}</h4>
                <p className="text-white/70 text-sm">{trait.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
