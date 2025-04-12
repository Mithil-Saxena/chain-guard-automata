
import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Database, ServerIcon, ShieldCheck, ArrowDownUp } from 'lucide-react';

const TechSection = () => {
  const architectureSteps = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-chainGuard-purple" />,
      title: "User Wallet & Interface",
      description: "Users interact with ChainGuard through a secure web interface, connecting their wallet to define trading parameters.",
      position: "left"
    },
    {
      icon: <Code className="h-8 w-8 text-chainGuard-purple" />,
      title: "Smart Contract Trigger",
      description: "Deploy conditional triggers as immutable smart contracts that will execute trades when price conditions are met.",
      position: "right"
    },
    {
      icon: <Database className="h-8 w-8 text-chainGuard-purple" />,
      title: "Price Oracles",
      description: "Integration with Chainlink, UMA, and other decentralized oracles to provide reliable price data.",
      position: "left"
    },
    {
      icon: <ArrowDownUp className="h-8 w-8 text-chainGuard-purple" />,
      title: "DEX Integrations",
      description: "Connect with multiple DEXs through smart contract routers for optimal liquidity and price execution.",
      position: "right"
    },
    {
      icon: <ServerIcon className="h-8 w-8 text-chainGuard-purple" />,
      title: "On-Chain Settlement",
      description: "When triggers activate, trades execute on-chain with full transparency and without intermediaries.",
      position: "left"
    }
  ];

  return (
    <section id="tech" className="relative min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Architecture</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            ChainGuard leverages blockchain technology to provide secure and automated
            trading solutions that execute directly on-chain.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block architecture-line"></div>
          
          <div className="space-y-12">
            {architectureSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${step.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                style={{ 
                  opacity: 0,
                  animation: `fade-in-up 0.6s ease-out ${index * 0.2}s forwards`
                }}
              >
                <div className="md:w-1/2 flex justify-center">
                  <Card className="gradient-border bg-chainGuard-dark/60 p-6 backdrop-blur-sm w-full max-w-sm">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 rounded-full bg-chainGuard-purple/20 flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-[#eee]">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </Card>
                </div>
                
                <div className="hidden md:flex md:w-1/2 justify-center">
                  <div className="h-4 w-4 rounded-full bg-chainGuard-purple"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-6xl mt-24">
        <div className="gradient-border bg-chainGuard-dark/60 p-8 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 text-[#eee]">Technical Implementation</h3>
          
          <div className="code-block mb-6">
            <pre>
              {`// Example ChainGuard Smart Contract (Simplified)
pragma solidity ^0.8.17;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

contract ChainGuardTrigger {
    address public owner;
    address public asset;
    uint256 public triggerPrice;
    uint256 public amount;
    bool public executed;
    
    AggregatorV3Interface internal priceFeed;
    ISwapRouter public swapRouter;
    
    constructor(
        address _asset,
        uint256 _triggerPrice,
        uint256 _amount,
        address _priceFeed,
        address _swapRouter
    ) {
        owner = msg.sender;
        asset = _asset;
        triggerPrice = _triggerPrice;
        amount = _amount;
        priceFeed = AggregatorV3Interface(_priceFeed);
        swapRouter = ISwapRouter(_swapRouter);
    }
    
    function checkAndExecute() external {
        require(!executed, "Trigger already executed");
        
        // Get the current price from Chainlink
        (, int price, , , ) = priceFeed.latestRoundData();
        
        // Check if price condition is met
        if (uint256(price) <= triggerPrice) {
            // Execute the swap via DEX integration
            _executeSwap();
            executed = true;
        }
    }
    
    function _executeSwap() internal {
        // DEX integration logic
        // ...
    }
}`}
            </pre>
          </div>
          
          <h3 className="text-xl font-semibold mb-4 text-[#eee]">Testnet Deployments</h3>
          <p className="text-gray-300 mb-4">
            ChainGuard is currently deployed on the following testnets:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-chainGuard-charcoal rounded-md p-4">
              <h4 className="font-medium mb-2 text-[#eee]">Arbitrum Goerli</h4>
              <p className="text-xs font-mono text-gray-400">0x7a9d...8f21</p>
            </div>
            <div className="bg-chainGuard-charcoal rounded-md p-4">
              <h4 className="font-medium mb-2 text-[#eee]">Base Goerli</h4>
              <p className="text-xs font-mono text-gray-400">0xf239...4e72</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
