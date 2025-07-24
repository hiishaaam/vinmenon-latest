
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
    <section id="about" className="bg-[#0F172A] py-16">
      <div className="container mx-auto">
        {/* Section Heading and Subheading */}
        <div className="animate-on-scroll mb-8">
          <h2 className="section-heading text-[#F8FAFC]">About</h2>
          <p className="section-subheading text-[#CBD5E1]">With over 20 years of experience, Dr. Menon bridges technology innovation with environmental sustainability.</p>
        </div>
        {/* Biography Content - always above cards */}
        <div className="animate-on-scroll mb-10">
          <p className="text-lg md:text-xl text-[#F8FAFC] font-inter font-semibold mb-4">
            Dr. Vin Menon is a global entrepreneur and thought leader with more than two decades of experience in technology innovation, sustainable finance, and environmental initiatives.
          </p>
          <p className="text-base md:text-lg text-[#CBD5E1] font-inter mb-4">
            As a pioneer in the field of regenerative technologies and decentralized finance (DeFi), Dr. Menon has developed groundbreaking solutions that address critical environmental challenges while creating economic value. His work bridges the gap between cutting-edge technology and ecological sustainability, demonstrating how innovation can drive positive change.
          </p>
          <p className="text-base md:text-lg text-[#CBD5E1] font-inter mb-4">
            A passionate advocate for the UN Sustainable Development Goals, Dr. Menon has contributed to international initiatives focused on biodiversity conservation, climate action, and sustainable economic growth. His ventures span multiple continents, implementing nature-based innovations and financial mechanisms that support environmental restoration and protection.
          </p>
          <p className="text-base md:text-lg text-[#CBD5E1] font-inter">
            Dr. Menon also leads research and development in mental wellness technologies, exploring the intersection of cognitive science, digital tools, and personal wellbeing.
          </p>
        </div>
        {/* Redesigned Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {achievements.map((item, index) => (
            <Card
              key={index}
              className={cn(
                "bg-[#1E293B] border-0 shadow-inner rounded-xl p-0 transition-all duration-300 ease-in-out group hover:-translate-y-1 hover:shadow-md hover:shadow-emerald-500/10 flex flex-col min-h-[200px]",
                index % 2 === 0 ? "md:translate-y-2" : ""
              )}
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="flex-shrink-0">
                  {/* Emerald green Lucide icon, subtle pulse on hover */}
                  {React.cloneElement(item.icon, {
                    className: "w-9 h-9 text-[#10B981] transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse"
                  })}
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg md:text-xl text-[#F8FAFC] mb-1 leading-tight tracking-tight">{item.title}</h3>
                  <p className="font-inter text-sm md:text-base text-[#CBD5E1] leading-relaxed font-medium mb-0">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Key Milestones Section */}
        <div className="animate-on-scroll mt-16">
          <h2 className="section-heading text-[#F8FAFC]">Key Milestones</h2>
          <p className="section-subheading text-white/80">Tracing the journey of innovation, leadership, and global impact</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {milestones.map((milestone, index) => (
            <Card
              key={index}
              className={cn(
                "bg-white shadow-md shadow-slate-200 rounded-xl p-0 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-emerald-100/40 hover:bg-white/90 flex flex-col min-h-[180px] group",
                "animate-on-scroll"
              )}
            >
              <div className="relative">
                {/* Background icon, only visible on hover */}
                <div className="absolute inset-0 flex items-center justify-center z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none select-none">
                  {React.cloneElement(milestone.icon, {
                    className: "w-28 h-28 text-emerald-500"
                  })}
                </div>
                {/* Foreground content */}
                <CardContent className="relative z-10 p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-slate-50 rounded-full mr-3 flex items-center justify-center">
                      {React.cloneElement(milestone.icon, {
                        className: "w-7 h-7 text-emerald-500 transition-transform duration-300 ease-in-out group-hover:scale-110"
                      })}
                    </div>
                    {milestone.year && (
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-xs font-medium ml-1">
                        {milestone.year}
                      </span>
                    )}
                  </div>
                  <h3 className="font-inter text-xl font-semibold text-slate-900 mb-1 tracking-tight">{milestone.title}</h3>
                  <p className="font-inter text-base text-slate-600 leading-relaxed font-medium mb-0">{milestone.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
