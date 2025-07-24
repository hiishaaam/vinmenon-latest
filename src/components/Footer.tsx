
import React from 'react';
import { Linkedin, Mail, Youtube, XIcon, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dr. Vin Menon</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Global entrepreneur and thought leader in regenerative technology,
              sustainable finance, and nature-based innovation.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full text-white hover:text-white hover:bg-white/20">
                <a href="https://www.linkedin.com/in/drvinmenon">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-white hover:text-white hover:bg-white/20">
                <a href="https://x.com/drvinmenon">
                  <XIcon size={20} />
                  <span className="sr-only">Twitter/X</span>
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-white hover:text-white hover:bg-white/20">
                <a href="mailto:connect@drvinmenon.com">
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </a>

              </Button>
              <Button size="icon" variant="ghost" className="rounded-full text-white hover:text-white hover:bg-white/20">
                <a href="https://youtube.com/@dr.vinmenon6065?si=ihGwgOAvWy6ou5uH">
                  <Youtube size={20} />
                  <span className="sr-only">Youtube</span>
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#media" className="text-white/80 hover:text-white transition-colors">Media</a>
              </li>
              <li>
                <a href="#insights" className="text-white/80 hover:text-white transition-colors">Insights</a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-white/80 mb-2">Email: connect@drvinmenon.com</p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">© {new Date().getFullYear()} Dr. Vin Menon. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
