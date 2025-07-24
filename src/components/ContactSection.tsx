
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link , Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container mx-auto">
        <div className="animate-on-scroll">
          <h2 className="section-heading">Contact & Collaborate</h2>
          <p className="section-subheading">Get in touch for speaking engagements, partnerships, or inquiries.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="Subject" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={5} 
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center animate-on-scroll">
            <Card className="mb-6">
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="w-8 h-8 text-secondary mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <p className="text-muted-foreground mb-2">For direct inquiries and proposals</p>
                  <a href="mailto:connect@drvinmenon.com" className="text-primary hover:text-secondary">connect@drvinmenon.com</a>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="p-6 flex items-start gap-4">
                <Link className="w-8 h-8 text-secondary mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Connect</h3>
                  <p className="text-muted-foreground mb-2">Follow for updates and insights</p>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/drvinmenon" className="text-primary hover:text-secondary">LinkedIn</a>
                    <a href="https://x.com/drvinmenon" className="text-primary hover:text-secondary">X/Twitter</a>
                    <a href="https://youtube.com/@dr.vinmenon6065?si=ihGwgOAvWy6ou5uH" className="text-primary hover:text-secondary">Youtube</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
