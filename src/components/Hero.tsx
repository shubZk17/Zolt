import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Code, Smartphone, Cloud } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeroProps {
  onShowLogin: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowLogin }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleStartBuilding = () => {
    if (isAuthenticated) {
      navigate('/prompt');
    } else {
      onShowLogin();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300ffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60 animate-pulse"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-bounce opacity-30" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Build Apps with
            </span>
            <br />
            <span className="text-white">Natural Language</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Zolt is your AI-powered full-stack development environment that transforms plain English into production-ready web and mobile apps — no coding required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={handleStartBuilding}
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center space-x-2 shadow-xl shadow-cyan-500/25 animate-pulse-glow"
            >
              <span>Start Building Free</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="group bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 text-gray-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800/80 hover:shadow-xl hover:shadow-purple-500/10 hover:border-gray-600/50 transition-all duration-300 flex items-center space-x-2">
              <Play className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:bg-gray-900/80 hover:border-cyan-500/30 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-cyan-500/25 animate-float">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Full-Stack Apps</h3>
              <p className="text-gray-400">Frontend, backend, database, and deployment — all generated from your prompts.</p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:bg-gray-900/80 hover:border-purple-500/30 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/25 animate-float" style={{ animationDelay: '0.5s' }}>
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Mobile Ready</h3>
              <p className="text-gray-400">Build cross-platform mobile apps with React Native and Expo integration.</p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:bg-gray-900/80 hover:border-green-500/30 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 shadow-xl animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-green-500/25 animate-float" style={{ animationDelay: '1s' }}>
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">One-Click Deploy</h3>
              <p className="text-gray-400">Deploy to production instantly with Netlify, Vercel, or other platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;