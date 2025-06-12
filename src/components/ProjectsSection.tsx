import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Chatterbox Application",
      description: "A chatterbox application that uses web technologies to provide personalized responses, sentiment analysis, and conversation history.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tech: ["React", "Node.js", "websocket", "MongoDB", "Express"],
      category: "Full-Stack",
      liveUrl: "https://github.com/SaiSathwikAnchuri/chatterbox-application",
      githubUrl: "https://github.com/SaiSathwikAnchuri/chatterbox-application",
      featured: true
    },
    {
      id: 2,
      title: "Techlearn's company dashboard",
      description: "Real-time company dashboard for Techlearn, featuring live data updates, interactive charts, and collaborative tools for team management.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
      tech: ["Vue.js", "Socket.io", "React", "Node.js", "MongoDB"],
      category: "Full-Stack",
      liveUrl: "https://techlearn-frontend-w4xd.onrender.com",
      githubUrl: "https://github.com/SaiSathwikAnchuri/Tls-solutions",
      featured: true
    },
    {
      id: 4,
      title: "A Blog Application",
      description: "A blog application that allows users to create, read, update, and delete blog posts with a modern UI and responsive design.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      tech: ["Solidity", "Web3.js", "React", "MongoDB", "Express"],
      category: "Web3",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Smart Energy Management System",
      description: "predicting the energy consumed,bills and energy savings using static data",
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&h=600&fit=crop",
      tech: [ "React", "InfluxDB", "express"],
      category: "Full-Stack",
      liveUrl: "https://smart-energy-vista.lovable.app/",
      githubUrl: "https://github.com/Vishwaksen26/smart-energy-vista.git",
      featured: false
    },
    {
      id: 5,
      title: "AI-Immersive Chatbot",
      description: "AI chatbot application that provides personalized responses, sentiment analysis, and conversation history.",
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
              className="glass-card overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105"
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
                    onClick={() => {
                      if (project.liveUrl && project.liveUrl !== "#") {
                        window.open(project.liveUrl, '_blank');
                      } else {
                        alert("Live demo not available for this project.");
                      }
                    }}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
                    onClick={() => {
                      if (project.githubUrl && project.githubUrl !== "#") {
                        window.open(project.githubUrl, '_blank');
                      } else {
                        alert("GitHub link not available for this project.");
                      }
                    }}
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
                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* Live Demo Button */}
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-magenta-500 hover:from-blue-600 hover:to-magenta-600 text-white border-0"
                    onClick={() => {
                      if (project.liveUrl && project.liveUrl !== "#") {
                        window.open(project.liveUrl, '_blank');
                      } else {
                        alert("Live demo not available for this project.");
                      }
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>

                  {/* GitHub Code Button */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass-card border-white/20 text-white hover:bg-white/10"
                    onClick={() => {
                      if (project.githubUrl && project.githubUrl !== "#") {
                        window.open(project.githubUrl, '_blank');
                      } else {
                        alert("GitHub link not available for this project.");
                      }
                    }}
                  >
                    <Github className="h-4 w-4" />
                    Code
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
            onClick={() => window.open('https://github.com/SaiSathwikAnchuri', '_blank')}
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
