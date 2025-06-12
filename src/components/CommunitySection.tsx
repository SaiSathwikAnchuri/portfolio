
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Book } from 'lucide-react';

const CommunitySection = () => {
  const communityInvolvement = [
    {
      title: "Google Developer Groups Campus",
      role: "Web Developer Volunteer",
      description: "Contributing to the tech community through web development initiatives at GDGC VNRVJIET.",
      icon: <Github className="h-6 w-6" />,
      tags: ["Web Development", "Community", "Google Technologies"],
      highlight: true
    },
    {
      title: "Open Source Contributor",
      role: "Developer",
      description: "Contributing to open source projects and helping fellow developers in the community.",
      icon: <Github className="h-6 w-6" />,
      tags: ["Open Source", "Collaboration", "Community Support"],
      highlight: false
    },
    {
      title: "Turing Hut Coding Club",
      role: "Core Member",
      description: "Actively contributing to the college's coding club, organizing events, and fostering a collaborative learning environment.",
      icon: <Book className="h-6 w-6" />,
      tags: ["Club Activities", "Event Organization", "Teamwork"],
      highlight: true
    }
  ];

  return (
    <section id="community" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Community Involvement
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My contributions to the tech community and leadership roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityInvolvement.map((item, index) => (
            <Card
              key={item.title}
              className={`glass-card p-6 hover:scale-105 transition-all duration-500 group relative ${
                item.highlight ? 'border-blue-500/30' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.highlight && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-magenta-500 text-white border-0">
                    ❤️
                  </Badge>
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-magenta-500/20 text-blue-300 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-blue-300 text-sm font-medium mb-2">
                    {item.role}
                  </p>
                </div>
              </div>

              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs glass-card border-white/20 text-white/70 hover:bg-white/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
