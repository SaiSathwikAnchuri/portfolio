
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "AI-Powered E-Commerce Platform",
      description: "Full-stack e-commerce solution with AI product recommendations, real-time inventory management, and advanced analytics dashboard.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "TensorFlow", "AWS", "PostgreSQL"],
      category: "Full-Stack",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Real-Time Collaboration Tool",
      description: "WebRTC-based collaboration platform with video conferencing, shared whiteboards, and real-time document editing.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
      tech: ["Vue.js", "Socket.io", "WebRTC", "Docker", "Redis"],
      category: "Frontend",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Blockchain Voting System",
      description: "Secure, transparent voting application using blockchain technology with smart contracts and decentralized identity verification.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
      tech: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
      category: "Web3",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "IoT Dashboard & Analytics",
      description: "Real-time IoT device monitoring dashboard with predictive analytics, alerts, and automated reporting capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Python", "React", "InfluxDB", "Grafana", "MQTT"],
      category: "Backend",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "AR Mobile Shopping App",
      description: "Augmented reality mobile application allowing users to visualize products in their space before purchasing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tech: ["React Native", "ARCore", "Firebase", "Three.js"],
      category: "Mobile",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "ML-Powered Content Creator",
      description: "AI content generation platform that creates articles, social media posts, and marketing copy using advanced language models.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tech: ["Python", "FastAPI", "OpenAI", "React", "PostgreSQL"],
      category: "AI/ML",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "Mobile", "Web3", "AI/ML"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of innovative solutions that demonstrate my passion for creating 
            impactful digital experiences across various domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-magenta-500 text-white scale-105'
                  : 'glass-card text-white/70 hover:text-white hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`glass-card overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 ${
                project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: hoveredProject === project.id ? 'rotateX(5deg) rotateY(5deg)' : 'rotateX(0deg) rotateY(0deg)'
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-magenta-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-magenta-500 hover:from-blue-600 hover:to-magenta-600 text-white border-0"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass-card border-white/20 text-white hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="glass-card border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
