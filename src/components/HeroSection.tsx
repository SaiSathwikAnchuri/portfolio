import React from 'react';
import { Button } from '@/components/ui/button';
import TypewriterText from './TypewriterText';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

const HeroSection = () => {
  const typingTexts = [
    "Crafting code with creativity",
    "Building digital experiences",
    "Full-stack developer & innovator",
    "Where technology meets artistry"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    try {
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = '/Resume.pdf'; // Place your PDF in public/cv/ folder
      link.download = 'Resume.pdf'; // Filename for download
      link.target = '_blank'; // Fallback to open in new tab if download fails
      
      // Temporarily add to DOM, click, then remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Add analytics tracking
      console.log('Resume download initiated');
    } catch (error) {
      console.error('Error downloading Resume:', error);
      // You could add a toast notification here for user feedback
      alert('Sorry, there was an error downloading the Resume. Please try again.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center space-y-8">
          {/* Avatar */}
          <div className="relative mx-auto w-48 h-48 floating-animation">
            <div className="w-full h-full rounded-full glass-card overflow-hidden glow-pulse">
              <img
                src="/1.jpg" // Ensure this path is correct
                alt="Developer Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '20s' }} />
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gradient">
              Saisathwik Anchuri
            </h1>
            <div className="text-2xl md:text-3xl text-white/80 h-16">
              <TypewriterText 
                texts={typingTexts}
                speed={80}
                deleteSpeed={40}
                delay={3000}
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions that bridge the gap between 
            cutting-edge technology and human-centered design. I transform complex ideas 
            into elegant, scalable applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-magenta-500 hover:from-blue-600 hover:to-magenta-600 text-white border-0 neon-glow transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-0 neon-glow transform hover:scale-105 transition-all duration-300"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card border-white/20 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Collaborate
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            {[
              { Icon: Github, href: "https://github.com/SaiSathwikAnchuri", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/saisathwik-anchuri-604b85292", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:saisathwik1402@gmail.com", label: "Email" }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all duration-300 neon-glow"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
