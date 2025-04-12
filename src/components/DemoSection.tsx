
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp, Check, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const DemoSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [price, setPrice] = useState(1500);
  const [triggerPrice, setTriggerPrice] = useState(1450);
  const [isTriggered, setIsTriggered] = useState(false);
  const [isExecuted, setIsExecuted] = useState(false);
  
  const timerRef = useRef<number | null>(null);
  
  const steps = [
    { title: "Set Stop-Loss", description: "User defines price trigger and amount" },
    { title: "Deploy Trigger", description: "Trigger is registered on-chain" },
    { title: "Monitor Price", description: "Oracle feeds monitor price movements" },
    { title: "Trigger Execution", description: "Order executes when conditions are met" },
    { title: "On-Chain Settlement", description: "Transaction settles directly on-chain" }
  ];
  
  const playDemo = () => {
    setIsAutoPlaying(true);
    setActiveStep(0);
    setPrice(1500);
    setIsTriggered(false);
    setIsExecuted(false);
    
    // Auto-advance through steps
    if (timerRef.current) window.clearInterval(timerRef.current);
    
    timerRef.current = window.setInterval(() => {
      setActiveStep(prev => {
        const nextStep = prev + 1;
        if (nextStep >= steps.length) {
          setIsAutoPlaying(false);
          window.clearInterval(timerRef.current!);
          return prev;
        }
        
        // For price monitoring step
        if (nextStep === 2) {
          simulatePriceMovement();
        }
        
        return nextStep;
      });
    }, 3000);
  };
  
  const simulatePriceMovement = () => {
    let priceTimer = setInterval(() => {
      setPrice(prev => {
        const newPrice = prev - Math.random() * 10;
        
        // Check if trigger price reached
        if (newPrice <= triggerPrice && !isTriggered) {
          setIsTriggered(true);
          setTimeout(() => {
            setActiveStep(3); // Move to trigger execution step
            setTimeout(() => {
              setIsExecuted(true);
              setTimeout(() => {
                setActiveStep(4); // Move to final step
                clearInterval(priceTimer);
              }, 1000);
            }, 1000);
          }, 500);
        }
        
        return Number(newPrice.toFixed(2));
      });
    }, 200);
  };
  
  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section id="demo" className="relative min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">See It In Action</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Watch how ChainGuard automatically executes trades when your predefined conditions are met.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo Visualization */}
          <Card className="relative bg-chainGuard-dark/80 border border-chainGuard-purple/30 p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-6">Stop-Loss Demo</h3>
            
            <div className="min-h-[300px] flex flex-col items-center justify-center">
              {activeStep === 0 && (
                <div className="text-center animate-fade-in-up">
                  <h4 className="text-lg font-medium mb-4">Configure Stop-Loss</h4>
                  <div className="code-block mb-4">
                    <pre>
                      {`{
  "asset": "ETH",
  "stopLossPrice": "${triggerPrice}",
  "currentPrice": "${price}",
  "amount": "1.0 ETH"
}`}
                    </pre>
                  </div>
                </div>
              )}
              
              {activeStep === 1 && (
                <div className="text-center animate-fade-in-up">
                  <h4 className="text-lg font-medium mb-4">Deploying Smart Contract</h4>
                  <div className="code-block mb-4">
                    <pre>
                      {`// On-chain deployment
await chainGuard.createTrigger({
  asset: "ETH",
  triggerPrice: ${triggerPrice},
  action: "SELL",
  amount: ethers.utils.parseEther("1.0")
});`}
                    </pre>
                  </div>
                </div>
              )}
              
              {activeStep === 2 && (
                <div className="text-center animate-fade-in-up">
                  <h4 className="text-lg font-medium mb-4">Price Monitoring</h4>
                  <div className="relative h-40 w-full mb-4 bg-chainGuard-charcoal rounded-md p-4">
                    <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-700"></div>
                    
                    {/* Trigger price line */}
                    <div 
                      className="absolute left-0 right-0 h-0.5 bg-red-500"
                      style={{ bottom: `${(triggerPrice / 1600) * 100}%` }}
                    >
                      <div className="absolute right-0 -top-4 bg-red-500/20 px-2 py-1 rounded text-xs">
                        Trigger: ${triggerPrice}
                      </div>
                    </div>
                    
                    {/* Current price indicator */}
                    <div 
                      className={cn(
                        "absolute right-4 transition-all duration-200 flex items-center",
                        isTriggered ? "text-red-500" : "text-green-500"
                      )}
                      style={{ bottom: `${(price / 1600) * 100}%` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-current mr-1"></div>
                      <span className="text-sm font-mono">
                        ${price.toFixed(2)}
                      </span>
                    </div>
                    
                    {/* Status */}
                    <div className="absolute top-2 left-2">
                      {isTriggered ? (
                        <div className="flex items-center text-red-500">
                          <AlertCircle size={16} className="mr-1" />
                          <span className="text-xs">Trigger activated</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-green-500">
                          <Check size={16} className="mr-1" />
                          <span className="text-xs">Monitoring</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {activeStep === 3 && (
                <div className="text-center animate-fade-in-up">
                  <h4 className="text-lg font-medium mb-4">
                    {isExecuted ? "Order Executed" : "Executing Order"}
                  </h4>
                  
                  <div className={cn(
                    "code-block mb-4",
                    isExecuted ? "border border-green-500/50" : "border border-yellow-500/50"
                  )}>
                    <pre>
                      {isExecuted ? (
                        `// Transaction confirmed
Hash: 0x7a9d...8f21
Status: SUCCESS
Gas used: 187,492
ETH sold: 1.0
USDC received: ${(price * 1).toFixed(2)}
Block: #14,293,881`
                      ) : (
                        `// Executing transaction
Trigger ID: #28371
Price condition met: ${price} <= ${triggerPrice}
Routing trade via: Uniswap V3
Est. slippage: 0.12%
Awaiting confirmation...`
                      )}
                    </pre>
                  </div>
                  
                  {!isExecuted && (
                    <div className="flex justify-center">
                      <div className="w-6 h-6 border-2 border-chainGuard-purple border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              )}
              
              {activeStep === 4 && (
                <div className="text-center animate-fade-in-up">
                  <h4 className="text-lg font-medium mb-4">Transaction Settled</h4>
                  <div className="bg-green-500/10 border border-green-500/30 rounded-md p-4 text-green-400 mb-4">
                    <Check size={24} className="mx-auto mb-2" />
                    <p>Stop-loss executed successfully on-chain</p>
                  </div>
                  
                  <div className="code-block">
                    <pre>
                      {`// On-chain verification
{
  "transactionHash": "0x7a9d...8f21",
  "blockNumber": 14293881,
  "gasUsed": "187492",
  "status": 1,
  "logs": [
    {
      "name": "Swap",
      "params": {
        "sender": "0x...",
        "recipient": "0x...",
        "amount0": "1000000000000000000",
        "amount1": "${(price * 1 * 10**6).toFixed(0)}"
      }
    }
  ]
}`}
                    </pre>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button
                className="bg-chainGuard-purple hover:bg-chainGuard-purple/80"
                disabled={isAutoPlaying}
                onClick={playDemo}
              >
                {isAutoPlaying ? "Demo Running..." : "Run Demo Again"}
              </Button>
            </div>
          </Card>
          
          {/* Steps Explanation */}
          <div>
            <h3 className="text-xl font-semibold mb-6">How It Works</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={cn(
                    "flex items-start p-4 border rounded-md transition-all duration-300",
                    activeStep === index 
                      ? "border-chainGuard-purple bg-chainGuard-purple/10" 
                      : "border-gray-700 bg-chainGuard-dark/50",
                    index < activeStep ? "opacity-70" : ""
                  )}
                >
                  <div 
                    className={cn(
                      "flex items-center justify-center h-8 w-8 rounded-full mr-4 flex-shrink-0",
                      activeStep === index 
                        ? "bg-chainGuard-purple text-white" 
                        : index < activeStep 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-gray-800 text-gray-400"
                    )}
                  >
                    {index < activeStep ? <Check size={16} /> : index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
