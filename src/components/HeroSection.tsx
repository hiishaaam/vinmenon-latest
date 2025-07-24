
import React, { useEffect, useState } from 'react';
import { ArrowRight, Clock, Rocket, Mic, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(0);
  
  const highlights = [
    "20+ years in tech, strategy & innovation",
    "Co-Founder of AQUAE Labs and MindWaveDAO",
    "Speaker at UNGA, APEA, and Forbes Councils",
    "$2.4B+ in Bitcoin-based ecosystem initiatives"
  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Rotate through highlights
    const interval = setInterval(() => {
      setActiveHighlight(prev => (prev + 1) % highlights.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row md:items-center bg-primary overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>
      
      {/* Mobile image at top */}
      <div className="relative w-full h-[40vh] md:hidden mt-8">
        <img 
          src="/uploads/vin.png" 
          alt="Dr. Vin Menon" 
          className="object-contain object-center h-full w-full"
        />
      </div>
      
      {/* Desktop image (hidden on mobile) */}
      <div className="absolute right-0 bottom-[-40px] hidden md:block w-1/2 h-full">
        <img 
          src="/uploads/vin.png" 
          alt="Dr. Vin Menon" 
          className="object-contain object-center h-full w-full"
        />
      </div>
      
      {/* Content container */}
      <div className="container mx-auto relative z-10 flex-1 flex flex-col justify-center mt-3">
        <div className="max-w-3xl">
          <h2 
            className={cn(
              "text-sm sm:text-base md:text-lg font-medium text-white/80 opacity-0",
              isVisible && "animate-fade-in"
            )}
          >
            Global Entrepreneur & Thought Leader
          </h2>
          <h1 
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-2 mb-4 font-playfair opacity-0",
              isVisible && "animate-fade-in-delayed"
            )}
          >
            Dr. Vin Menon
          </h1>
          <p 
            className={cn(
              "text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl mb-8 md:mb-12 opacity-0",
              isVisible && "animate-fade-in-delayed-lg"
            )}
          >
            Pioneering regenerative technologies and sustainable finance solutions for global impact
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 opacity-0",
              isVisible && "animate-fade-in-delayed-lg"
            )}
          >
            <Button 
              size="lg" 
              className="bg-white text-primary hover:text-white hover:bg-secondary text-base md:text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView()}
            >
              Explore Projects
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 text-base md:text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Get in Touch
            </Button>
          </div>
          
          {/* UN SDG icon */}
          <div 
            className={cn(
              "mt-16 mb-4 md:mt-24 opacity-0",
              isVisible && "animate-fade-in-delayed-lg"
            )}
          >
            <p className="text-white/70 text-sm mb-3">Proud contributor to</p>
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full w-14 h-14 md:w-16 md:h-16 p-1 flex items-center justify-center">
                <div className="bg-[#fff] rounded-full w-full h-full flex items-center justify-center">
                  <img src="https://jssuni.edu.in/jssaher/dental-college/img/sdg-main.png" alt="UN SDG" className="w-10 h-10 md:w-12 md:h-12" />
                </div>
              </div>
              <p className="text-white/90 text-sm md:text-base w-44">UN Sustainable Development Goals</p>
            </div>
          </div>
          {/* Professional Highlights */}
          <div 
            className={cn(
              "bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20 opacity-0",
              isVisible && "animate-fade-in-delayed-lg"
            )}
          >
            <h3 className="text-white/80 text-sm uppercase tracking-wider mb-3 font-medium">Professional Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded transition-all duration-300",
                    activeHighlight === index ? "bg-white/20 scale-105" : "bg-transparent"
                  )}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    {index === 0 && <Clock className="text-white w-5 h-5" />}
                    {index === 1 && <Rocket className="text-white w-5 h-5" />}
                    {index === 2 && <Mic className="text-white w-5 h-5" />}
                    {index === 3 && <DollarSign className="text-white w-5 h-5" />}
                  </div>
                  <p className="text-white text-sm md:text-base">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
