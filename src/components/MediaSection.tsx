
import React from 'react';
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
      thumbnail: "/images/video-unga.jpg", // You'll need to add these images to your public folder
      description: "Dr. Menon addresses global leaders on sustainable technology solutions",
      link: "#" // Replace with actual video link when available
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIn.map((item, index) => (
              <Card key={index} className="animate-on-scroll border border-border hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      {item.icon}
                    </div>
                    <span className={`text-sm font-semibold px-2 py-1 rounded ${
                      item.type === 'award' ? 'bg-yellow-100 text-yellow-800' : 
                      item.type === 'speaking' ? 'bg-blue-100 text-blue-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.type === 'award' ? 'Award' : 
                       item.type === 'speaking' ? 'Speaking' : 'Publication'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.name}</h3>
                  <p className="text-muted-foreground">{item.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Video Highlights Section */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-6 animate-on-scroll">Video Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoHighlights.map((video, index) => (
              <div key={index} className="animate-on-scroll group">
                <div className="relative overflow-hidden rounded-lg mb-3 aspect-video bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500">Video Thumbnail</span>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-primary mb-1">{video.title}</h4>
                <p className="text-sm text-muted-foreground">{video.description}</p>
              </div>
            ))}
          </div>
        </div> */}
        
        {/* Previous Media Mentions */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-6 animate-on-scroll">Additional Media Coverage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="animate-on-scroll border border-border hover:border-secondary transition-colors">
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-1">{feature.year}</div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{feature.name}</h3>
                  <p className="text-muted-foreground text-sm">{feature.topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
