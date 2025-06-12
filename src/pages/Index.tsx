
import React from 'react';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import HeroSection from '@/components/HeroSection';
import ScrollDownSection from '@/components/ScrollDownSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CommunitySection from '@/components/CommunitySection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <ScrollDownSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CommunitySection />
      <CertificationsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2024 Alex Chen. Crafted with ❤️ and cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
