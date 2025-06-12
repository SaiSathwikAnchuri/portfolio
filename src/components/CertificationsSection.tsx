
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Webathon 3.0 Winner",
      issuer: "Overnight Hackathon",
      year: "2025",
      icon: "🏆",
      description: "First place winner in the overnight hackathon competition",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Certified for GFG 45 days of Code",
      issuer: "GeeksforGeeks",
      year: "2025",
      icon: "💻",
      description: "Completed 45 days of coding challenges on GeeksforGeeks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SIH Hackathon certification",
      issuer: "Smart India Hackathon",
      year: "2024",
      icon: "🌟",
      description: "Active contributor to open source projects during SIH Hackathon",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cisco Java Script Essentials Certification",
      issuer: "Cisco Networking Academy",
      year: "2024",
      icon: "🔒",
      description: "Comprehensive JavaScript programming skills certification",
      color: "from-red-500 to-rose-500"
    },
    {
      title: "Certified Smart Interviews",
      issuer: "Smart Interviews",
      year: "2025",
      icon: "☁️",
      description: "Gained expertise in smart interview techniques and strategies",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      year: "2023",
      icon: "📊",
      description: "Web analytics and data-driven decision making certification",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Professional qualifications and recognitions in the field
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="glass-card p-6 hover:scale-[1.02] transition-all duration-500 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-6">
                {/* Icon with gradient background */}
                <div className={`p-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                      {cert.title}
                    </h3>
                    <Badge className={`bg-gradient-to-r ${cert.color} text-white border-0 ml-4`}>
                      {cert.year}
                    </Badge>
                  </div>
                  <p className="text-white/70 mb-2 font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-white/60 text-sm">
                    {cert.description}
                  </p>
                </div>

                {/* Decorative line */}
                <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-magenta-500 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
