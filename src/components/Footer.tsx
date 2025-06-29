import React from 'react';
import { Zap, Github, Twitter, Disc as Discord } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-900 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-2 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 animate-pulse-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Zolt
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Your AI-powered full-stack development environment. 
              Build production-ready apps with natural language.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-110 transition-all duration-300 border border-gray-800 group">
                <Github className="w-5 h-5 group-hover:text-cyan-400 transition-colors duration-200" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-110 transition-all duration-300 border border-gray-800 group">
                <Twitter className="w-5 h-5 group-hover:text-cyan-400 transition-colors duration-200" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-110 transition-all duration-300 border border-gray-800 group">
                <Discord className="w-5 h-5 group-hover:text-cyan-400 transition-colors duration-200" />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Integrations</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold mb-4 text-purple-400">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-400 text-sm">
            © 2025 Zolt. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;