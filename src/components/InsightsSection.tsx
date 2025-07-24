
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const InsightsSection = () => {
  const insights = [
    {
      title: "The Future of Biodiversity Finance",
      excerpt: "Exploring innovative mechanisms to fund conservation and ecological restoration at scale through market-based solutions and technological innovation.",
      date: "April 18, 2025",
      category: "Sustainable Finance",
      imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Web3 Technologies for Environmental Impact",
      excerpt: "How blockchain, tokenization, and decentralized governance can transform environmental monitoring, reporting, and incentive structures.",
      date: "March 25, 2025",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Mental Wellness in the Digital Age",
      excerpt: "Examining the intersection of neuroscience, digital tools, and personal wellbeing in creating effective mental health solutions.",
      date: "February 10, 2025",
      category: "Wellness",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <section id="insights" className="bg-muted">
      <div className="container mx-auto">
        <div className="animate-on-scroll">
          <h2 className="section-heading">Insights</h2>
          <p className="section-subheading">Thoughts and essays on technology, sustainability, and wellness.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="overflow-hidden animate-on-scroll border-0 shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={insight.imageUrl}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-secondary font-medium">{insight.category}</span>
                  <span className="text-sm text-muted-foreground">{insight.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{insight.title}</h3>
                <p className="text-muted-foreground">{insight.excerpt}</p>
              </CardContent>
              <CardFooter className="pb-6 px-6">
                <Button variant="link" className="text-secondary p-0 group">
                  Read More
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Button variant="outline" size="lg">
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
