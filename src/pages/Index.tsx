
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DemoSection from '@/components/DemoSection';
import TechSection from '@/components/TechSection';
import DocsSection from '@/components/DocsSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "ChainGuard | On-Chain Stop-Loss Trading Platform";
  }, []);

  return (
    <div className="parallax-container">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <TechSection />
      <DocsSection />
      <Footer />
    </div>
  );
};

export default Index;
