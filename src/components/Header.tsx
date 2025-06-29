import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Zap, Code, Terminal, Play } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UserMenu from './auth/UserMenu';

interface HeaderProps {
  onShowLogin?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowLogin }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTryZolt = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      onShowLogin?.();
    }
  };

  const handleCodeEditor = () => {
    if (isAuthenticated) {
      navigate('/editor');
    } else {
      onShowLogin?.();
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl shadow-purple-500/5 border-b border-gray-800/50 animate-slide-down' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse-glow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Zolt
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#use-cases" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              Use Cases
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#integrations" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group">
              Integrations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button 
              onClick={handleCodeEditor}
              className="flex items-center space-x-2 bg-gray-800/80 border border-gray-700/50 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700/80 hover:text-cyan-400 hover:border-cyan-500/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm group"
            >
              <Terminal className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-200" />
              <span>Code Editor</span>
            </button>
            
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <button 
                onClick={handleTryZolt}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg shadow-cyan-500/25 font-medium animate-pulse-glow"
              >
                Try Zolt
              </button>
            )}
          </nav>

          <button 
            className="md:hidden text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50 animate-slide-down">
          <div className="px-4 py-2 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">Features</a>
            <a href="#use-cases" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">Use Cases</a>
            <a href="#integrations" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200">Integrations</a>
            <button 
              onClick={handleCodeEditor}
              className="w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 flex items-center space-x-2 font-medium transition-colors duration-200"
            >
              <Terminal className="w-4 h-4" />
              <span>Code Editor</span>
            </button>
            {!isAuthenticated && (
              <button 
                onClick={handleTryZolt}
                className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium"
              >
                Try Zolt
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;