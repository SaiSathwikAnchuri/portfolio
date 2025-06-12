
import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Heart, Zap, Users } from 'lucide-react';

const AboutSection = () => {
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

        {/* About Description */}
        <div className="mb-20">
          <Card className="glass-card p-8 max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience in creating innovative web applications. 
                My journey began with a curiosity about how websites work, and it has evolved into a deep love for crafting 
                digital experiences that make a difference.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                I specialize in modern JavaScript frameworks, particularly React and Node.js, and I'm always excited to learn 
                new technologies. Whether it's building scalable backends, creating intuitive user interfaces, or optimizing 
                performance, I approach every project with attention to detail and a commitment to excellence.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, sharing knowledge through tech talks, 
                or exploring the latest trends in web development. I believe in the power of technology to solve real-world 
                problems and am always looking for opportunities to make a positive impact.
              </p>
            </div>
          </Card>
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
