
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
            <Card key={index} className="overflow-hidden animate-on-scroll border-0 shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="pb-6 px-6">
                <Button 
                  variant="outline" 
                  className="bg-white text-primary hover:text-white hover:bg-secondary text-base md:text-lg"
                  onClick={() => handleOpenDialog(index)}
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Project Detail Dialog */}
        {openProjectIndex !== null && (
          <Dialog open={openProjectIndex !== null} onOpenChange={handleCloseDialog}>
            <DialogContent className="sm:max-w-[500px] h-[90vh] overflow-hidden">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary">
                  {projects[openProjectIndex].title}
                </DialogTitle>
              </DialogHeader>
              <div className="my-4 overflow-y-auto h-full pr-2">
                <img 
                  src={projects[openProjectIndex].imageUrl}
                  alt={projects[openProjectIndex].title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <DialogDescription className="text-base leading-relaxed">
                  {projects[openProjectIndex].description}
                  
                  {/* Additional project details that would only appear in the modal */}
                  <div className="mt-4">
                    <h4 className="font-semibold text-lg mb-2"></h4>
                    <p>
                      {projects[openProjectIndex].title === "AQUAE Labs" 
                        ? "Aquae Labs Ecosystems Conservation Index (ALECI) : Guaranteed Conservation Credits While we all agree that conservation of biodiversity and the conservation of ecosystem services are critical for our sustainability, the value of this activity has not been recognized as a vital component of our commitment to enhancing and preserving biodiversity. ALECI is an index that reflects an annually verified composite of environmental and social variables as landscape assets backed by its Biodiversity & Biomass which is Monitored Recorded & Validated (MRV’d) and value set (VS) as a financial tool."
                        : projects[openProjectIndex].title === "MindWaveDAO"
                        ? "MindWaveDAO is building a decentralized ecosystem of mental health resources that prioritizes user privacy, data ownership, and equitable access to therapeutic tools."
                        : "ALECI datasets include scope and derivatives guaranteed by MRV and Value Setting (VS) protocols and each landscape portfolio is placed in blockchain record in order to trace the source for its ecosystem productivity backed ‘credits’ issued immutable via ALECI operating system. These assets are monitored under contract to ensure accurate compliance with these metrics being produced as ‘private property’ within financial and legislative ecosystems. ALECI provides stakeholders with detailed metadata of the contracts."
                      }
                    </p>
                    
                    <h4 className="font-semibold text-lg mt-4 mb-2"></h4>
                    <p>
                      {projects[openProjectIndex].title === "AQUAE Labs" 
                        ? "Tokenized 'conservation credits' issued using the ALECI represents the value achieved through habitat restoration and species conservation efforts. By engaging in contracted conservation credits, organizations and individuals can support targeted environmental projects that restore ecosystems, protect endangered species, and promote sustainable land management. When you purchase or invest in these credits, you are directly contributing to verified conservation actions and receiving a measurable impact report. This process ensures transparency and accountability, demonstrating how your investment is making a tangible difference in biodiversity conservation"
                        : projects[openProjectIndex].title === "MindWaveDAO"
                        ? "the platform employs sophisticated AI-driven trading strategies—such as covered calls, volatility trading, and negative gamma techniques—to provide stable, risk-adjusted returns for its ecosystem . A significant portion of its assets is also allocated to liquidity provision and market-making in vetted DeFi projects, enhancing market stability and efficiency"
                        : "ALECI system offers clear insights into the sustainability and impact of the assets, supporting informed decision-making and promoting transparency suitable for any emerging market. "
                      }
                    </p>

                    <h4 className="font-semibold text-lg mt-4 mb-2"></h4>
                    <p>
                      {projects[openProjectIndex].title === "AQUAE Labs" 
                        ? "Our platform facilitates the trading and management of tokenzed ALECI conservation credits, enabling stakeholders to participate in emerging markets and focussing on financing the conservation of biodiversity. By integrating ALECI guaranteed conservation credits into your environmental strategy, yougain clear insights to positive impacts to your business while supporting informed decision-making and promoting transparency suitable for any emerging market."
                        : projects[openProjectIndex].title === "MindWaveDAO"
                        ? "Central to MindWaveDAO's ecosystem is the NILA Token, a BEP-20 utility token that empowers holders with governance rights, staking rewards, and access to premium features. NILA Tokens enable users to participate in decision-making processes, earn from ecosystem transactions, and engage with immersive AR/VR experiences and personalized NFTs . The platform's innovative approach extends to sectors like AdTech, InsurTech, AI Governance, and ClimateTech, aiming to transform digital interactions into sustainable value."
                        : "The measurement tool identified herewith as 'ALECI' provides a comprehensive end - to - end operating protocol and methodological approach for evaluating landscape based ‘conservation assets’. This system validates such asset management by integrating comprehensive MRV processes with datasets and derivative valuations. The ALECI framework provides a model that is sensitive to the changing ecological realities of a given ecosystem and reflects on the dynamic nature of the distribution patterns of many species and ecological services."
                      }
                    </p>
                  </div>
                </DialogDescription>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
                <Button onClick={() => window.location.href = projects[openProjectIndex].link}>
                  Visit Project
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
