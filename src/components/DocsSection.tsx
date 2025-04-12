
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Terminal, BookOpen, ExternalLink, Copy } from 'lucide-react';

const DocsSection = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real application, we would add a toast notification here
  };

  return (
    <section id="docs" className="relative min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Documentation</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get started with ChainGuard's comprehensive documentation and guides.
          </p>
        </div>
        
        <Tabs defaultValue="quickstart" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
            <TabsTrigger value="quickstart">Quickstart</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="sdk">SDK</TabsTrigger>
          </TabsList>
          
          <TabsContent value="quickstart">
            <Card className="bg-chainGuard-dark/80 border border-chainGuard-purple/30 p-6">
              <div className="flex items-center mb-6">
                <FileText size={24} className="text-chainGuard-purple mr-2" />
                <h3 className="text-xl font-semibold">Quick Start Guide</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">1. Connect your wallet</h4>
                  <p className="text-gray-400 mb-4">
                    ChainGuard works with MetaMask, WalletConnect, and other popular Ethereum wallets.
                  </p>
                  <div className="code-block">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">JavaScript</span>
                      <button 
                        className="text-gray-500 hover:text-white"
                        onClick={() => copyToClipboard(`import { ChainGuard } from '@chainGuard/sdk';

const chainGuard = new ChainGuard();
await chainGuard.connectWallet();`)}
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                    <pre>
                      {`import { ChainGuard } from '@chainGuard/sdk';

const chainGuard = new ChainGuard();
await chainGuard.connectWallet();`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">2. Create a stop-loss trigger</h4>
                  <p className="text-gray-400 mb-4">
                    Define your trading parameters including the asset, trigger price, and amount.
                  </p>
                  <div className="code-block">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">JavaScript</span>
                      <button 
                        className="text-gray-500 hover:text-white"
                        onClick={() => copyToClipboard(`const triggerParams = {
  asset: "ETH",
  triggerPrice: "1450", // in USD
  amount: "1.0", // amount to sell
  slippageTolerance: 0.5, // 0.5%
};

const trigger = await chainGuard.createTrigger(triggerParams);
console.log("Trigger deployed:", trigger.address);`)}
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                    <pre>
                      {`const triggerParams = {
  asset: "ETH",
  triggerPrice: "1450", // in USD
  amount: "1.0", // amount to sell
  slippageTolerance: 0.5, // 0.5%
};

const trigger = await chainGuard.createTrigger(triggerParams);
console.log("Trigger deployed:", trigger.address);`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">3. Monitor and manage your triggers</h4>
                  <p className="text-gray-400 mb-4">
                    Track the status of your triggers and manage them through the dashboard.
                  </p>
                  <div className="code-block">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">JavaScript</span>
                      <button 
                        className="text-gray-500 hover:text-white"
                        onClick={() => copyToClipboard(`// Get all active triggers for the connected wallet
const activeTriggers = await chainGuard.getActiveTriggers();

// Cancel a specific trigger if needed
await chainGuard.cancelTrigger(trigger.address);`)}
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                    <pre>
                      {`// Get all active triggers for the connected wallet
const activeTriggers = await chainGuard.getActiveTriggers();

// Cancel a specific trigger if needed
await chainGuard.cancelTrigger(trigger.address);`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button className="bg-chainGuard-purple hover:bg-chainGuard-purple/80 gap-2">
                  <BookOpen size={16} />
                  Full Documentation
                </Button>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="examples">
            <Card className="bg-chainGuard-dark/80 border border-chainGuard-purple/30 p-6">
              <div className="flex items-center mb-6">
                <Terminal size={24} className="text-chainGuard-purple mr-2" />
                <h3 className="text-xl font-semibold">Code Examples</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-medium mb-2">ETH/USD Stop Loss Example</h4>
                  <div className="code-block">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">JavaScript</span>
                      <button 
                        className="text-gray-500 hover:text-white"
                        onClick={() => copyToClipboard(`import { ChainGuard } from '@chainGuard/sdk';

async function createEthStopLoss() {
  const chainGuard = new ChainGuard({
    network: 'arbitrum-goerli',
  });
  
  await chainGuard.connectWallet();
  
  const trigger = await chainGuard.createTrigger({
    asset: "ETH",
    triggerPrice: "1450", // Sell when ETH reaches $1450 or below
    amount: "1.0", // Sell 1.0 ETH
    targetToken: "USDC",  // Receive USDC
    dex: "uniswap"        // Use Uniswap for execution
  });
  
  console.log("Stop-loss deployed:", trigger.address);
  console.log("Monitor at:", \`https://testnet.chainguard.fi/triggers/\${trigger.id}\`);
}

createEthStopLoss().catch(console.error);`)}
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                    <pre>
                      {`import { ChainGuard } from '@chainGuard/sdk';

async function createEthStopLoss() {
  const chainGuard = new ChainGuard({
    network: 'arbitrum-goerli',
  });
  
  await chainGuard.connectWallet();
  
  const trigger = await chainGuard.createTrigger({
    asset: "ETH",
    triggerPrice: "1450", // Sell when ETH reaches $1450 or below
    amount: "1.0", // Sell 1.0 ETH
    targetToken: "USDC",  // Receive USDC
    dex: "uniswap"        // Use Uniswap for execution
  });
  
  console.log("Stop-loss deployed:", trigger.address);
  console.log("Monitor at:", \`https://testnet.chainguard.fi/triggers/\${trigger.id}\`);
}

createEthStopLoss().catch(console.error);`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Multiple Price Conditions</h4>
                  <p className="text-gray-400 mb-4">
                    Create more complex triggers with multiple price conditions.
                  </p>
                  <div className="code-block">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-500">JavaScript</span>
                      <button className="text-gray-500 hover:text-white">
                        <Copy size={14} />
                      </button>
                    </div>
                    <pre>
                      {`import { ChainGuard } from '@chainGuard/sdk';

async function createComplexTrigger() {
  const chainGuard = new ChainGuard();
  await chainGuard.connectWallet();
  
  // Create a trigger that executes when ETH goes below $1450
  // OR when BTC goes below $25,000
  const trigger = await chainGuard.createComplexTrigger({
    conditions: [
      {
        asset: "ETH",
        operator: "<=",
        price: "1450",
      },
      {
        asset: "BTC",
        operator: "<=",
        price: "25000",
      }
    ],
    logicalOperator: "OR",
    actions: [
      {
        type: "SELL",
        asset: "ETH",
        amount: "1.0",
        targetToken: "USDC"
      }
    ]
  });
  
  console.log("Complex trigger created:", trigger.id);
}

createComplexTrigger().catch(console.error);`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-chainGuard-purple text-chainGuard-purple hover:bg-chainGuard-purple/10 gap-2">
                  <ExternalLink size={16} />
                  View Example Repository
                </Button>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="api">
            <Card className="bg-chainGuard-dark/80 border border-chainGuard-purple/30 p-6">
              <div className="flex items-center mb-6">
                <Terminal size={24} className="text-chainGuard-purple mr-2" />
                <h3 className="text-xl font-semibold">API Reference</h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300">
                  ChainGuard provides a comprehensive API for interacting with the platform programmatically.
                  Below are the core endpoints for managing triggers.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-green-600 text-white text-xs px-2 py-1 rounded">POST</div>
                      <code className="text-sm">/api/v1/triggers</code>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">Create a new price trigger</p>
                    <div className="code-block">
                      <pre>
                        {`// Request
{
  "asset": "ETH",
  "triggerPrice": "1450",
  "amount": "1.0",
  "targetToken": "USDC",
  "slippageTolerance": 0.5
}

// Response
{
  "status": "success",
  "data": {
    "triggerId": "tg_8f21a97",
    "address": "0x7a9d...8f21",
    "status": "active",
    "createdAt": "2023-04-12T14:30:15Z"
  }
}`}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">GET</div>
                      <code className="text-sm">/api/v1/triggers</code>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">List all triggers for the authenticated wallet</p>
                    <div className="code-block">
                      <pre>
                        {`// Response
{
  "status": "success",
  "data": {
    "triggers": [
      {
        "triggerId": "tg_8f21a97",
        "asset": "ETH",
        "triggerPrice": "1450",
        "currentPrice": "1520.25",
        "status": "active",
        "createdAt": "2023-04-12T14:30:15Z"
      },
      // More triggers...
    ]
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button className="bg-chainGuard-purple hover:bg-chainGuard-purple/80 gap-2">
                  <FileText size={16} />
                  Full API Documentation
                </Button>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="sdk">
            <Card className="bg-chainGuard-dark/80 border border-chainGuard-purple/30 p-6">
              <div className="flex items-center mb-6">
                <BookOpen size={24} className="text-chainGuard-purple mr-2" />
                <h3 className="text-xl font-semibold">SDK Reference</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Installation</h4>
                  <div className="code-block">
                    <pre>
                      {`npm install @chainGuard/sdk

# or with yarn
yarn add @chainGuard/sdk`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Core Methods</h4>
                  
                  <div className="bg-chainGuard-charcoal rounded-md p-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium">connectWallet()</h5>
                        <p className="text-gray-400 text-sm">Connects to the user's Ethereum wallet</p>
                      </div>
                      <div className="text-xs text-gray-500">Promise&lt;void&gt;</div>
                    </div>
                  </div>
                  
                  <div className="bg-chainGuard-charcoal rounded-md p-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium">createTrigger(params)</h5>
                        <p className="text-gray-400 text-sm">Creates a new price trigger</p>
                      </div>
                      <div className="text-xs text-gray-500">Promise&lt;Trigger&gt;</div>
                    </div>
                  </div>
                  
                  <div className="bg-chainGuard-charcoal rounded-md p-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium">getActiveTriggers()</h5>
                        <p className="text-gray-400 text-sm">Returns all active triggers for the connected wallet</p>
                      </div>
                      <div className="text-xs text-gray-500">Promise&lt;Trigger[]&gt;</div>
                    </div>
                  </div>
                  
                  <div className="bg-chainGuard-charcoal rounded-md p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium">cancelTrigger(triggerId)</h5>
                        <p className="text-gray-400 text-sm">Cancels a specific trigger</p>
                      </div>
                      <div className="text-xs text-gray-500">Promise&lt;boolean&gt;</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-chainGuard-purple text-chainGuard-purple hover:bg-chainGuard-purple/10 gap-2">
                  <ExternalLink size={16} />
                  SDK Documentation
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DocsSection;
