
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Video, Newspaper, Mic } from 'lucide-react';

const MediaSection = () => {
  const features = [
    { name: "Forbes", year: "2023", topic: "Sustainable DeFi Innovations" },
    { name: "Nasdaq", year: "2022", topic: "Future of Green Finance" },
    { name: "UN General Assembly", year: "2022", topic: "SDG Technology Solutions" },
    { name: "APEA Awards", year: "2021", topic: "Environmental Leadership" },
    { name: "World Economic Forum", year: "2021", topic: "Tech for Good Panel" },
    { name: "Bloomberg", year: "2020", topic: "Nature-Based Investments" },
    { name: "COP26", year: "2021", topic: "Biodiversity Finance" },
    { name: "Reuters", year: "2020", topic: "Mental Wellness Technologies" }
  ];

  const featuredIn = [
    { 
      icon: <Newspaper className="w-6 h-6 text-secondary" />,
      name: "Forbes", 
      topic: "Sustainability in Web3 Is Becoming Non-Negotiable",
      type: "article"
    },
    { 
      icon: <Newspaper className="w-6 h-6 text-secondary" />,
      name: "CoinTelegraph", 
      topic: "The Future of Regenerative DeFi",
      type: "article"
    },
    { 
      icon: <Newspaper className="w-6 h-6 text-secondary" />,
      name: "Nasdaq", 
      topic: "Blockchain & Biodiversity: What Comes Next",
      type: "article"
    },
    { 
      icon: <Mic className="w-6 h-6 text-secondary" />,
      name: "UNGA 2023", 
      topic: "Speaker, Biodiversity Finance Panel",
      type: "speaking"
    },
    { 
      icon: <Award className="w-6 h-6 text-secondary" />,
      name: "APEA Award 2023", 
      topic: "Outstanding Ecosystem Leadership",
      type: "award"
    },
    { 
      icon: <Award className="w-6 h-6 text-secondary" />,
      name: "Rotary-ASME Award", 
      topic: "Innovation for Community Health",
      type: "award"
    }
  ];

  const videoHighlights = [
    {
      title: "UN General Assembly Talk (2023)",
      thumbnail: "/images/video-unga.jpg",
      description: "Dr. Menon addresses global leaders on sustainable technology solutions",
      link: "#"
    },
    {
      title: "ALCI Green Credits Demo @ Climate Impact Asia",
      thumbnail: "/images/video-alci.jpg",
      description: "Showcasing innovative green credit mechanisms for environmental impact",
      link: "#"
    },
    {
      title: "MindWaveDAO Launch & Global Hackathon",
      thumbnail: "/images/video-mindwave.jpg",
      description: "Introducing the revolutionary platform bridging brainwave data with DeFi",
      link: "#"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let interval: NodeJS.Timeout | null = null;
    let isHovered = false;
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    // Auto-scroll
    const startScroll = () => {
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        if (!isHovered && !isDragging) {
          container.scrollLeft += 1;
          if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
          }
        }
      }, 16);
    };
    const stopScroll = () => { if (interval) clearInterval(interval); };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
      container.style.userSelect = 'none';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const onPointerUp = () => {
      isDragging = false;
      container.style.cursor = 'grab';
      container.style.removeProperty('user-select');
    };

    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('pointerleave', onPointerUp);
    container.addEventListener('mouseenter', () => { isHovered = true; stopScroll(); });
    container.addEventListener('mouseleave', () => { isHovered = false; startScroll(); });

    startScroll();

    return () => {
      stopScroll();
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('pointerleave', onPointerUp);
      container.removeEventListener('mouseenter', () => { isHovered = true; stopScroll(); });
      container.removeEventListener('mouseleave', () => { isHovered = false; startScroll(); });
    };
  }, []);

  return (
    <section id="media" className="bg-white py-16">
      <div className="container mx-auto">
        <div className="animate-on-scroll">
          <h2 className="section-heading">Media & Recognition</h2>
          <p className="section-subheading">Featured in leading publications and global forums.</p>
        </div>
        
        {/* Featured In Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-6 animate-on-scroll">Featured In</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIn.map((item, index) => (
              <Card
                key={index}
                className="group relative flex flex-col justify-between min-h-[220px] bg-white/90 backdrop-blur shadow-xl shadow-emerald-200/30 rounded-3xl border border-slate-100 transition-all duration-300 hover:scale-[1.015] hover:-translate-y-1 hover:bg-white/100 p-0"
                role="article"
                aria-label={`${item.name} - ${item.topic}`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4 gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 group-hover:shadow-lg group-hover:shadow-emerald-200/40 transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium gap-1
                      ${item.type === 'award' ? 'bg-yellow-100 text-yellow-800' :
                        item.type === 'speaking' ? 'bg-blue-100 text-blue-800' :
                        'bg-emerald-100 text-emerald-800'}`}
                    >
                      {item.type === 'award' && <Award className="w-4 h-4 mr-1" />}
                      {item.type === 'speaking' && <Mic className="w-4 h-4 mr-1" />}
                      {item.type === 'article' && <Newspaper className="w-4 h-4 mr-1" />}
                      {item.type === 'award' ? 'Award' : item.type === 'speaking' ? 'Speaking' : 'Publication'}
                    </span>
                  </div>
                  <h3 className="font-inter text-lg lg:text-xl font-semibold tracking-tight text-slate-900 mb-1">{item.name}</h3>
                  <p className="font-inter text-sm text-slate-600 max-w-prose mb-0">{item.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Additional Media Coverage */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-6 animate-on-scroll">Additional Media Coverage</h3>
          <div className="w-full overflow-x-auto pb-2 scrollbar-none" ref={scrollRef} role="region" aria-live="polite" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex flex-row gap-x-6 scroll-snap-x snap-x snap-mandatory px-1">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="group relative min-w-[280px] max-w-xs w-full bg-[#d1fae5] backdrop-blur-md rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl border-2 border-transparent hover:border-emerald-300 snap-center flex-shrink-0 flex flex-col items-start px-6 py-5 animate-fade-in-up"
                  role="article"
                  aria-label={`${feature.name} - ${feature.topic}`}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <span className="text-sm text-black font-medium mb-2">{feature.year}</span>
                  <h3 className="font-inter text-xl font-bold text-black mb-1">{feature.name}</h3>
                  <p className="font-inter text-base text-black mb-0">{feature.topic}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
