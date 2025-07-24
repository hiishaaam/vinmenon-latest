import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // 1. State to track the active link, initialized to the first link's href
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Media', href: '#media' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link
          to="/"
          className={cn(
            'font-playfair font-bold text-xl transition-colors',
            isScrolled ? 'text-primary' : 'text-white'
          )}
        >
          <img
            src={isScrolled? '/uploads/1.png' : '/uploads/2.png'}
            alt="Profile"
            className="w-64 object-cover rounded-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              // 2. Set the active link on click
              onClick={() => setActiveLink(link.href)}
              className={cn(
                'relative group text-sm font-medium transition-colors',
                // 3. Conditional styling for the link text
                isScrolled
                  ? (activeLink === link.href ? 'text-secondary' : 'text-primary hover:text-secondary')
                  : 'text-white/80 hover:text-white'
              )}
            >
              {link.name}
              <span className={cn(
                'absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300',
                // 4. Conditional styling for the underline
                isScrolled && activeLink === link.href
                  ? 'w-full' // Always show underline if active and scrolled
                  : 'w-0 group-hover:w-full' // Otherwise, only show on hover
              )}></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            'md:hidden p-2 rounded-full transition-colors',
            isScrolled ? 'text-primary hover:bg-muted' : 'text-white hover:bg-white/10'
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary hover:text-secondary text-lg font-medium"
                  onClick={() => {
                    setActiveLink(link.href);
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;