import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface CTAProps {
  onShowLogin: () => void;
}

const CTA: React.FC<CTAProps> = ({ onShowLogin }) => {
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
    <section className="py-24 bg-gradient-to-br from-purple-950 via-blue-950 to-cyan-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300ffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60 animate-pulse"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-pink-400/35 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-400/20 shadow-xl animate-fade-in-up">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-white font-medium">Ready to build something amazing?</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your AI Software Engineer
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Awaits
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Join thousands of developers, designers, and entrepreneurs who are building 
            the future with Zolt. No coding required, no limits on creativity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={handleStartBuilding}
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex items-center space-x-3 shadow-2xl shadow-cyan-500/25 animate-pulse-glow"
            >
              <span>Start Building Free</span>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="group bg-transparent border-2 border-gray-700/50 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:bg-white/5 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm">
              <span>View Documentation</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 animate-count-up">10,000+</div>
              <div className="text-gray-400">Apps Built</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 animate-count-up">50+</div>
              <div className="text-gray-400">Integrations</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 animate-count-up">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;