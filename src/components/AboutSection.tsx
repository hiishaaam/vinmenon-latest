
import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Globe, Users, Calendar, Star, Lightbulb, Trophy, Mic } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight - 100) {
          element.classList.add('show');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    {
      icon: <Globe className="w-8 h-8 text-secondary" />,
      title: "Global Impact",
      description: "Leading initiatives across 15+ countries focused on sustainable development and regenerative technologies."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: "Thought Leadership",
      description: "Published research and insights on DeFi, nature-based solutions, and sustainable finance innovation."
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Recognition",
      description: "Recipient of prestigious awards including APEA and featured in Forbes, Nasdaq, and global summits."
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Ecosystem Builder",
      description: "Founder of multiple ventures integrating technology, sustainability, and mental wellness solutions."
    }
  ];

  const milestones = [
    {
      icon: <Lightbulb className="w-6 h-6 text-secondary" />,
      year: "",
      title: "Co-Founder, AQUAE Labs",
      description: "A nature-based finance think tank pioneering sustainable solutions"
    },
    {
      icon: <Award className="w-6 h-6 text-secondary" />,
      year: "",
      title: "PhD in Blockchain & Healthcare",
      description: "From Swiss School of Management, bridging technology and wellness"
    },
    {
      icon: <Star className="w-6 h-6 text-secondary" />,
      year: "",
      title: "Founder, MindWaveDAO",
      description: "Innovative platform bridging brainwave data with DeFi"
    },
    {
      icon: <Mic className="w-6 h-6 text-secondary" />,
      year: "2023",
      title: "UNGA Speaker",
      description: "Presented ALCI Green Credits at the United Nations General Assembly"
    },
    {
      icon: <Trophy className="w-6 h-6 text-secondary" />,
      year: "2024",
      title: "Launch of \"The Giant\"",
      description: "Groundbreaking initiative featured at Super Bowl-scale events"
    },
    {
      icon: <Globe className="w-6 h-6 text-secondary" />,
      year: "",
      title: "Member, Forbes Council",
      description: "Recognized thought leader and Winner of APEA & Rotary-ASME Awards"
    }
  ];

  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto">
        <div className="animate-on-scroll">
          <h2 className="section-heading">About</h2>
          <p className="section-subheading">With over 20 years of experience, Dr. Menon bridges technology innovation with environmental sustainability.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16">
          <div className="md:w-1/2 animate-on-scroll">
            <p className="text-lg mb-5">
              Dr. Vin Menon is a global entrepreneur and thought leader with more than two decades of experience in technology innovation, sustainable finance, and environmental initiatives.
            </p>
            <p className="text-base mb-5">
              As a pioneer in the field of regenerative technologies and decentralized finance (DeFi), Dr. Menon has developed groundbreaking solutions that address critical environmental challenges while creating economic value. His work bridges the gap between cutting-edge technology and ecological sustainability, demonstrating how innovation can drive positive change.
            </p>
            <p className="text-base mb-5">
              A passionate advocate for the UN Sustainable Development Goals, Dr. Menon has contributed to international initiatives focused on biodiversity conservation, climate action, and sustainable economic growth. His ventures span multiple continents, implementing nature-based innovations and financial mechanisms that support environmental restoration and protection.
            </p>
            <p className="text-base mb-5">
              Dr. Menon also leads research and development in mental wellness technologies, exploring the intersection of cognitive science, digital tools, and personal wellbeing.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <Card 
                key={index} 
                className={cn(
                  "border border-border animate-on-scroll",
                  index % 2 === 0 ? "md:translate-y-8" : ""
                )}
              >
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Key Milestones Section */}
        <div className="animate-on-scroll mt-16">
          <h2 className="section-heading">Key Milestones</h2>
          <p className="section-subheading">Tracing the journey of innovation, leadership, and global impact</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {milestones.map((milestone, index) => (
            <Card 
              key={index} 
              className="border border-border animate-on-scroll hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-full mr-3">
                    {milestone.icon}
                  </div>
                  {milestone.year && (
                    <span className="text-sm font-semibold bg-secondary/20 text-secondary px-2 py-1 rounded">
                      {milestone.year}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
