import React, { useState, useRef, useEffect } from 'react';
import { User, Settings, LogOut, Crown, Code, Zap, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserMenu: React.FC = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const handleProfileClick = () => {
    setIsOpen(false);
    navigate('/profile');
  };

  const handleSettingsClick = () => {
    setIsOpen(false);
    navigate('/settings');
  };

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 bg-gray-800/80 border border-gray-700/50 rounded-lg px-3 py-2 hover:bg-gray-700/80 hover:border-cyan-500/30 transition-all duration-300 group"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          ) : (
            <User className="w-4 h-4 text-white" />
          )}
        </div>
        <div className="hidden md:block text-left">
          <div className="text-white text-sm font-medium">{user.name}</div>
          <div className="text-gray-400 text-xs capitalize flex items-center space-x-1">
            {user.subscription?.plan === 'pro' && <Crown className="w-3 h-3 text-yellow-400" />}
            <span>{user.subscription?.plan || 'free'}</span>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl shadow-black/50 z-50 animate-fade-in-up">
          {/* User Info */}
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-6 h-6 text-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold truncate">{user.name}</div>
                <div className="text-gray-400 text-sm truncate">{user.email}</div>
                <div className="flex items-center space-x-1 mt-1">
                  {user.subscription?.plan === 'pro' && <Crown className="w-3 h-3 text-yellow-400" />}
                  <span className="text-xs text-gray-500 capitalize">
                    {user.subscription?.plan || 'free'} plan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <button
              onClick={handleProfileClick}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
            >
              <User className="w-5 h-5 group-hover:text-cyan-400 transition-colors duration-200" />
              <span>Profile Settings</span>
            </button>

            <button
              onClick={() => navigate('/dashboard')}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
            >
              <Code className="w-5 h-5 group-hover:text-cyan-400 transition-colors duration-200" />
              <span>My Projects</span>
            </button>

            <button
              onClick={handleSettingsClick}
              className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
            >
              <Settings className="w-5 h-5 group-hover:text-cyan-400 transition-colors duration-200" />
              <span>Settings</span>
            </button>

            {user.subscription?.plan === 'free' && (
              <button
                onClick={() => navigate('/upgrade')}
                className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
              >
                <Zap className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-200" />
                <span>Upgrade to Pro</span>
                <div className="ml-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
                  NEW
                </div>
              </button>
            )}
          </div>

          {/* Logout */}
          <div className="border-t border-gray-800 py-2">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200 group"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;