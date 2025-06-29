import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, Loader2, Github, Chrome } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register';
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, defaultTab = 'login' }) => {
  const { login, register, resetPassword, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'reset'>(defaultTab);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      if (activeTab === 'login') {
        await login(formData.email, formData.password);
        onClose();
      } else if (activeTab === 'register') {
        if (formData.password !== formData.confirmPassword) {
          setErrors({ confirmPassword: 'Passwords do not match' });
          return;
        }
        await register(formData.email, formData.password, formData.name);
        onClose();
      } else if (activeTab === 'reset') {
        await resetPassword(formData.email);
        setActiveTab('login');
      }
    } catch (error) {
      setErrors({ general: error instanceof Error ? error.message : 'An error occurred' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in-up">
      <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md mx-4 border border-gray-800 shadow-2xl shadow-cyan-500/10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">
            {activeTab === 'login' && 'Welcome Back'}
            {activeTab === 'register' && 'Create Account'}
            {activeTab === 'reset' && 'Reset Password'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        {activeTab !== 'reset' && (
          <div className="flex bg-gray-800/50 rounded-lg p-1 mb-6">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'login'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'register'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name field for register */}
          {activeTab === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                placeholder="Enter your full name"
                required
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
          )}

          {/* Email field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password field */}
          {activeTab !== 'reset' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-12 pr-12 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>
          )}

          {/* Confirm Password field for register */}
          {activeTab === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
          )}

          {/* General error */}
          {errors.general && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm">{errors.general}</p>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>
                  {activeTab === 'login' && 'Signing In...'}
                  {activeTab === 'register' && 'Creating Account...'}
                  {activeTab === 'reset' && 'Sending Reset Link...'}
                </span>
              </>
            ) : (
              <span>
                {activeTab === 'login' && 'Sign In'}
                {activeTab === 'register' && 'Create Account'}
                {activeTab === 'reset' && 'Send Reset Link'}
              </span>
            )}
          </button>
        </form>

        {/* Social login */}
        {activeTab !== 'reset' && (
          <>
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-700"></div>
              <span className="px-4 text-gray-400 text-sm">or continue with</span>
              <div className="flex-1 border-t border-gray-700"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center space-x-2 bg-gray-800/50 border border-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-gray-800/50 border border-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                <Chrome className="w-5 h-5" />
                <span>Google</span>
              </button>
            </div>
          </>
        )}

        {/* Footer links */}
        <div className="mt-6 text-center">
          {activeTab === 'login' && (
            <button
              onClick={() => setActiveTab('reset')}
              className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200"
            >
              Forgot your password?
            </button>
          )}
          {activeTab === 'reset' && (
            <button
              onClick={() => setActiveTab('login')}
              className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors duration-200"
            >
              Back to sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;