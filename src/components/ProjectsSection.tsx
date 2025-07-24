
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const ProjectsSection = () => {
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);
  
  const projects = [
    {
      title: "AQUAE Labs",
      description: "We Are A Collective Of Dedicated Individuals Deeply Invested In The Restoration Of Our Planet With A Passion For Environmental Stewardship. We invite you to join us to realize the value of conservation using tokenized credit",
      imageUrl: "https://labs.aquaeimpact.com/wp-content/uploads/image-labs-13.webp",
      link: "https://labs.aquaeimpact.com/"
    },
    {
      title: "MindWaveDAO",
      description: "​MindWaveDAO is a cutting-edge blockchain platform that integrates Bitcoin-backed yield generation with decentralized finance (DeFi), artificial intelligence (AI), and real-world applications.",
      imageUrl: "https://pbs.twimg.com/media/GY40TWAXEAAKZlo.jpg:large",
      link: "http://www.mindwavedao.com"
    },
    {
      title: "ALECI Conservation Credits”",
      description: "ALECI is an index that reflects an annually verified composite of environmental and social variables as landscape assets backed by its Biodiversity & Biomass which is Monitored Recorded & Validated (MRV’d) and value set (VS) as a financial tool",
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbnNlcnZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      link: "#"
    }
  ];

  const handleOpenDialog = (index: number) => {
    setOpenProjectIndex(index);
  };

  const handleCloseDialog = () => {
    setOpenProjectIndex(null);
  };

  return (
    <section id="projects" className="bg-muted">
      <div className="container mx-auto">
        <div className="animate-on-scroll">
          <h2 className="section-heading">Projects & Ventures</h2>
          <p className="section-subheading">Key initiatives at the intersection of technology, sustainability, and wellbeing.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl shadow-md shadow-slate-200 bg-white p-0 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:bg-slate-50 animate-on-scroll min-h-[500px]"
            >
              {/* Image section */}
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Content section */}
              <CardContent className="p-8 flex-1 flex flex-col">
                <h3 className="font-inter text-2xl font-semibold text-[#0F172A] mb-3 tracking-tight">{project.title}</h3>
                <p className="font-inter text-base text-slate-600 mb-6 flex-1">{project.description}</p>
                <div className="mt-auto">
                  <button
                    onClick={() => handleOpenDialog(index)}
                    className="inline-flex items-center border border-slate-300 rounded-full px-4 py-2 font-inter text-base text-[#0F172A] transition-all duration-300 group hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700"
                  >
                    Learn More
                    <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Dialog */}
        {openProjectIndex !== null && (
          <Dialog open={openProjectIndex !== null} onOpenChange={handleCloseDialog}>
            <DialogContent className="fixed left-1/2 top-1/2 z-50 bg-white/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl p-2 sm:p-10 max-w-full sm:max-w-lg w-[95vw] sm:w-full translate-x-[-50%] translate-y-[-50%] animate-fade-in max-h-[90vh] overflow-y-auto">
              <DialogHeader className="mb-2">
                <DialogTitle className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-inter flex items-center gap-2">
                  {projects[openProjectIndex].title}
                  {/* Emerald accent dot */}
                  <span className="block w-2 h-2 bg-emerald-400 rounded-full"></span>
                </DialogTitle>
              </DialogHeader>
              <img
                src={projects[openProjectIndex].imageUrl}
                alt={projects[openProjectIndex].title}
                className="w-full rounded-xl mb-4 sm:mb-6 shadow max-h-40 sm:max-h-64 object-cover"
              />
              {projects[openProjectIndex].title === "AQUAE Labs" ? (
                <div className="space-y-4 text-base text-slate-600 font-inter mb-6">
                  <p>We Are A Collective Of Dedicated Individuals Deeply Invested In The Restoration Of Our Planet With A Passion For Environmental Stewardship. We invite you to join us to realize the value of conservation using tokenized credit</p>
                  <p>Aquae Labs Ecosystems Conservation Index (ALECI) : Guaranteed Conservation Credits While we all agree that conservation of biodiversity and the conservation of ecosystem services are critical for our sustainability, the value of this activity has not been recognized as a vital component of our commitment to enhancing and preserving biodiversity. ALECI is an index that reflects an annually verified composite of environmental and social variables as landscape assets backed by its Biodiversity & Biomass which is Monitored Recorded & Validated (MRV’d) and value set (VS) as a financial tool.</p>
                  <p>Tokenized 'conservation credits' issued using the ALECI represents the value achieved through habitat restoration and species conservation efforts. By engaging in contracted conservation credits, organizations and individuals can support targeted environmental projects that restore ecosystems, protect endangered species, and promote sustainable land management. When you purchase or invest in these credits, you are directly contributing to verified conservation actions and receiving a measurable impact report. This process ensures transparency and accountability, demonstrating how your investment is making a tangible difference in biodiversity conservation</p>
                  <p>Our platform facilitates the trading and management of tokenzed ALECI conservation credits, enabling stakeholders to participate in emerging markets and focussing on financing the conservation of biodiversity. By integrating ALECI guaranteed conservation credits into your environmental strategy, yougain clear insights to positive impacts to your business while supporting informed decision-making and promoting transparency suitable for any emerging market.</p>
                </div>
              ) : (
                <div className="space-y-4 text-base text-slate-600 font-inter mb-6">
                  <p>{projects[openProjectIndex].description}</p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-end">
                <a href={projects[openProjectIndex].link} target="_blank" rel="noopener noreferrer" className="border border-emerald-300 bg-emerald-50 rounded-full px-4 py-2 text-emerald-700 font-semibold hover:bg-emerald-100 transition-all flex items-center group justify-center">
                  Visit Project
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
