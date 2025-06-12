
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saisathwik1402@gmail.com",
      href: "mailto:saisathwik1402@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8523086459",
      href: "tel:+91 8523086459"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/SaiSathwikAnchuri", 
      label: "GitHub", 
      color: "hover:text-gray-300",
      description: "Check out my latest projects and contributions"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/saisathwik-anchuri-604b85292", 
      label: "LinkedIn", 
      color: "hover:text-blue-400",
      description: "Connect with me professionally"
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "Twitter", 
      color: "hover:text-blue-300",
      description: "Follow for tech insights and updates"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life 
            with cutting-edge technology and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card p-8 bg-white/5 backdrop-blur-sm border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-card border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-card border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass-card border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400"
                  placeholder="Project collaboration"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="glass-card border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-magenta-500 hover:from-blue-600 hover:to-magenta-600 text-white border-0 neon-glow"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50">{info.label}</div>
                      <div className="font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center gap-4 p-3 rounded-lg glass-card text-white/70 ${social.color} hover:scale-105 transition-all duration-300 group`}
                  >
                    <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <social.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{social.label}</div>
                      <div className="text-sm text-white/60">{social.description}</div>
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-white/60 text-sm mt-4">
                Follow me for tech insights, project updates, and creative coding adventures!
              </p>
            </Card>

            {/* Quick Response */}
            <Card className="glass-card p-8 bg-gradient-to-r from-blue-500/10 to-emerald-500/10">
              <h4 className="text-lg font-bold text-white mb-3">Quick Response Guarantee</h4>
              <p className="text-white/70 text-sm">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to reach out via phone or LinkedIn for faster communication.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
