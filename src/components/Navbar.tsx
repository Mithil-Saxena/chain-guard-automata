
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-chainGuard-dark/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-chainGuard-purple" />
          <span className="font-bold text-xl text-white">ChainGuard</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white hover:text-chainGuard-purple transition-colors">Features</a>
          <a href="#demo" className="text-white hover:text-chainGuard-purple transition-colors">Demo</a>
          <a href="#tech" className="text-white hover:text-chainGuard-purple transition-colors">Architecture</a>
          <a href="#docs" className="text-white hover:text-chainGuard-purple transition-colors">Docs</a>
          <Button 
            variant="default" 
            className="bg-chainGuard-purple hover:bg-chainGuard-purple/80 text-white ml-4"
          >
            Get Started
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-chainGuard-dark/95 backdrop-blur-md shadow-lg animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#features" 
              className="text-white hover:text-chainGuard-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="text-white hover:text-chainGuard-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a 
              href="#tech" 
              className="text-white hover:text-chainGuard-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Architecture
            </a>
            <a 
              href="#docs" 
              className="text-white hover:text-chainGuard-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </a>
            <Button 
              variant="default" 
              className="bg-chainGuard-purple hover:bg-chainGuard-purple/80 text-white w-full mt-2"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
