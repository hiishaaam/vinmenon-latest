
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Clock, Rocket, Mic, DollarSign, ChevronLeft, ChevronRight, Globe, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Highlight item interface
interface HighlightItem {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  id: string;
}

// Highlight item component
const HighlightItem: React.FC<{
  highlight: HighlightItem;
  isActive: boolean;
  index: number;
  onClick: () => void;
  activeHighlightIndex: number;
}> = ({ highlight, isActive, index, onClick, activeHighlightIndex }) => {
  const IconComponent = highlight.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "highlight-item relative flex items-center gap-3 p-3 rounded-xl transition-all duration-500 cursor-pointer group",
        isActive 
          ? "bg-gradient-to-r from-white/25 to-white/15 backdrop-blur-md scale-105 shadow-lg shadow-white/20 border border-white/30" 
          : "bg-transparent hover:bg-white/5 hover:scale-102"
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Select highlight: ${highlight.text}`}
      aria-pressed={isActive ? "true" : "false"}
    >
      {/* Subtle glow effect for active item */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl transition-opacity duration-200",
          isActive ? "opacity-100" : "opacity-0"
        )}
      />
      
      <motion.div 
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
          isActive 
            ? "bg-white/30 shadow-lg" 
            : "bg-white/15 group-hover:bg-white/25"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <IconComponent className={cn(
          "transition-all duration-500",
          isActive ? "text-white w-6 h-6" : "text-white/80 w-5 h-5 group-hover:text-white"
        )} />
      </motion.div>
      
      <motion.p 
        className={cn(
          "text-sm md:text-base font-medium transition-all duration-500",
          isActive ? "text-white" : "text-white/80 group-hover:text-white"
        )}
        animate={{ 
          opacity: isActive ? 1 : 0.8,
          x: isActive ? 0 : -2
        }}
      >
        {highlight.text}
      </motion.p>
    </motion.div>
  );
};

// Navigation dots component
const NavigationDots: React.FC<{
  total: number;
  active: number;
  onDotClick: (index: number) => void;
}> = ({ total, active, onDotClick }) => {
  return (
    <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Highlight navigation">
      {Array.from({ length: total }).map((_, index) => {
        const isSelected = active === index;
        return (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50",
              isSelected ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
            )}
            role="tab"
            aria-selected={isSelected ? "true" : "false"}
            aria-label={`Go to highlight ${index + 1}`}
          />
        );
      })}
    </div>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Enhanced highlights data structure
  const highlights: HighlightItem[] = [
    {
      icon: Clock,
      text: "20+ years in tech, strategy & innovation",
      id: "experience"
    },
    {
      icon: Rocket,
      text: "Co-Founder of AQUAE group of companies and MindWaveDAO.com",
      id: "leadership"
    },
    {
      icon: Mic,
      text: "Speaker at UNGA, APEA, Forbes Councils and BFI Summit",
      id: "speaking"
    },
    {
      icon: DollarSign,
      text: "$3B+ initiatives through MindWaveDAO.com",
      id: "impact"
    },
    {
      icon: Globe,
      text: "Multiple Succesfull exits to Private Equity and Public Companies",
      id: "global-reach"
    },
    {
      icon: Award,
      text: "",
      id: "awards"
    }
  ];
  
  // Start rotation
  const startRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveHighlight(prev => (prev + 1) % highlights.length);
    }, 2000);
  };
  
  // Stop rotation
  const stopRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  
  // Handle manual navigation
  const handleDotClick = (index: number) => {
    setActiveHighlight(index);
    // Restart rotation from new position
    stopRotation();
    setTimeout(startRotation, 100);
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const newIndex = activeHighlight === 0 ? highlights.length - 1 : activeHighlight - 1;
      handleDotClick(newIndex);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const newIndex = (activeHighlight + 1) % highlights.length;
      handleDotClick(newIndex);
    }
  };
  
  useEffect(() => {
    setIsVisible(true);
    startRotation();
    
    return () => {
      stopRotation();
    };
  }, []);
  
  // Pause/resume based on isPaused state
  useEffect(() => {
    if (isPaused) {
      stopRotation();
    } else {
      startRotation();
    }
  }, [isPaused]);

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
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg font-medium text-white"
          >
            Global Entrepreneur & Thought Leader
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-2 mb-4 font-playfair"
          >
            Dr. Vin Menon
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl mb-8 md:mb-12"
          >
            Pioneering regenerative technologies and sustainable finance solutions for global impact
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
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
          </motion.div>
          
          {/* UN SDG icon */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-16 mb-4 md:mt-24"
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
          </motion.div>
          
          {/* Professional Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20 shadow-lg shadow-white/10 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Professional highlights carousel"
          >
            <h3 className="text-white text-sm uppercase tracking-wider mb-3 font-medium">Professional Highlights</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative">
              {highlights.map((highlight, index) => (
                <HighlightItem
                  key={highlight.id}
                  highlight={highlight}
                  isActive={activeHighlight === index}
                  index={index}
                  onClick={() => handleDotClick(index)}
                  activeHighlightIndex={activeHighlight}
                />
              ))}
            </div>
            
            {/* Manual navigation arrows */}
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => {
                  const newIndex = activeHighlight === 0 ? highlights.length - 1 : activeHighlight - 1;
                  handleDotClick(newIndex);
                }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous highlight"
              >
                <ChevronLeft className="text-white w-4 h-4" />
              </button>
              
              <NavigationDots
                total={highlights.length}
                active={activeHighlight}
                onDotClick={handleDotClick}
              />
              
              <button
                onClick={() => {
                  const newIndex = (activeHighlight + 1) % highlights.length;
                  handleDotClick(newIndex);
                }}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next highlight"
              >
                <ChevronRight className="text-white w-4 h-4" />
              </button>
            </div>
            
            {/* Pause indicator */}
            {isPaused && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-2 right-2 text-white/60 text-xs"
              >
                Paused
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
