
import React from 'react';
import { Shield, Twitter, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chainGuard-charcoal py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-chainGuard-purple" />
              <span className="font-bold text-lg text-white">ChainGuard</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Fully on-chain stop-loss trading platform that executes trades automatically without relying on centralized exchanges.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-chainGuard-purple transition-colors">Features</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-chainGuard-purple transition-colors">Demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#docs" className="text-gray-400 hover:text-chainGuard-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">SDK</a></li>
              <li><a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">Smart Contracts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-chainGuard-purple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ChainGuard. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
