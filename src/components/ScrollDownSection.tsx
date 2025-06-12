
import React from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';

const ScrollDownSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-magenta-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/3 left-1/6 w-4 h-4 border border-blue-400/30 rotate-45 floating-animation" />
        <div className="absolute top-2/3 right-1/6 w-6 h-6 border border-magenta-400/30 floating-animation" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-emerald-400/30 rounded-full floating-animation" style={{ animationDelay: '1.5s' }} />
        
        {/* Animated Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-magenta-500/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">
              Explore My Journey
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Dive deeper into my world of technology, creativity, and innovation. 
              Discover the skills, projects, and experiences that define my passion for development.
            </p>
          </div>

          {/* Interactive Scroll Button */}
          <div 
            onClick={scrollToAbout}
            className="group cursor-pointer inline-flex flex-col items-center space-y-4 hover:scale-110 transition-all duration-500"
          >
            {/* Animated Circle */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full glass-card border-2 border-gradient-to-r from-blue-500 to-magenta-500 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
                <ArrowDown className="h-8 w-8 text-gradient group-hover:text-white transition-all duration-300" />
              </div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" />
              <div className="absolute inset-0 rounded-full border-2 border-magenta-500/20 animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Text */}
            <div className="text-center space-y-2">
              <p className="text-white/80 font-medium group-hover:text-white transition-colors duration-300">
                Continue Exploring
              </p>
              <div className="flex items-center space-x-2 text-white/60 group-hover:text-white/80 transition-colors duration-300">
                <ChevronDown className="h-4 w-4 animate-bounce" />
                <span className="text-sm">Scroll Down</span>
                <ChevronDown className="h-4 w-4 animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center space-x-8 opacity-60">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-magenta-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollDownSection;
