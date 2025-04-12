
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="parallax-layer parallax-layer-back">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-chainGuard-purple/20 filter blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-chainGuard-blue/20 filter blur-3xl"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="parallax-layer parallax-layer-base z-10 flex flex-col items-center max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-center">
          <div className="p-3 bg-chainGuard-dark/80 border border-chainGuard-purple/30 rounded-full">
            <Shield size={48} className="text-chainGuard-purple animate-pulse-slow" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">Fully On-Chain</span><br /> 
          Stop-Loss Trading Platform
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Execute trades automatically without relying on centralized exchanges.
          Define price triggers for automated trading that execute directly on-chain.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="bg-chainGuard-purple hover:bg-chainGuard-purple/80 text-white px-8 py-6 rounded-md flex items-center gap-2"
            onClick={scrollToFeatures}
          >
            Explore Features <ArrowRight size={16} />
          </Button>
          <Button 
            variant="outline" 
            className="border-chainGuard-purple text-chainGuard-purple hover:bg-chainGuard-purple/10 px-8 py-6 rounded-md"
          >
            View Documentation
          </Button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-chainGuard-purple" />
      </div>
    </section>
  );
};

export default HeroSection;
