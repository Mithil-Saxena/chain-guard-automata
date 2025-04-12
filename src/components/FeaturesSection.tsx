
import React from 'react';
import { Activity, Lock, BarChart, Zap, Shield, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <Card 
    className="gradient-border bg-chainGuard-dark/60 p-6 backdrop-blur-sm"
    style={{ 
      opacity: 0,
      animation: `fade-in-up 0.6s ease-out ${delay}s forwards`
    }}
  >
    <div className="h-12 w-12 rounded-lg bg-chainGuard-purple/20 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </Card>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Activity size={24} className="text-chainGuard-purple" />,
      title: "On-Chain Price Triggers",
      description: "Define price thresholds that automatically execute trades when conditions are met, all without relying on centralized services.",
      delay: 0.1
    },
    {
      icon: <Lock size={24} className="text-chainGuard-purple" />,
      title: "Non-Custodial Security",
      description: "Your assets remain in your control until the exact moment trades need to execute. No centralized points of failure.",
      delay: 0.2
    },
    {
      icon: <BarChart size={24} className="text-chainGuard-purple" />,
      title: "Decentralized Oracles",
      description: "Integrated with Chainlink and other decentralized price oracles to ensure accurate and tamper-proof price feeds.",
      delay: 0.3
    },
    {
      icon: <Zap size={24} className="text-chainGuard-purple" />,
      title: "Testnet Compatibility",
      description: "Test your automated trading strategies risk-free on Arbitrum, Base, and other popular testnets before deploying.",
      delay: 0.4
    },
    {
      icon: <Shield size={24} className="text-chainGuard-purple" />,
      title: "Rigorous Security",
      description: "Thoroughly audited smart contracts with comprehensive testing processes to ensure the safety of user funds.",
      delay: 0.5
    },
    {
      icon: <Layers size={24} className="text-chainGuard-purple" />,
      title: "Multi-DEX Integration",
      description: "Execute trades across multiple decentralized exchanges to ensure optimal price execution and liquidity.",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="relative min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Key Features</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ChainGuard leverages blockchain technology to provide secure and automated trading solutions that execute directly on-chain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
