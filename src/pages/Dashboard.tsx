import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  Calendar, 
  Star, 
  MoreVertical,
  Play,
  Edit3,
  Trash2,
  ExternalLink,
  Zap,
  Crown,
  TrendingUp
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  type: 'web' | 'mobile' | 'api' | 'ai';
  status: 'active' | 'deployed' | 'draft';
  lastModified: string;
  url?: string;
  technologies: string[];
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'projects' | 'templates' | 'analytics'>('projects');

  const mockProjects: Project[] = [
    {
      id: '1',
      name: 'E-commerce Dashboard',
      description: 'Admin panel for online store with analytics and inventory management',
      type: 'web',
      status: 'deployed',
      lastModified: '2 hours ago',
      url: 'https://ecommerce-dashboard.zolt.app',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Supabase']
    },
    {
      id: '2',
      name: 'Task Manager Mobile',
      description: 'Cross-platform mobile app for team task management',
      type: 'mobile',
      status: 'active',
      lastModified: '1 day ago',
      technologies: ['React Native', 'Expo', 'Firebase']
    },
    {
      id: '3',
      name: 'AI Content Generator',
      description: 'OpenAI-powered content creation tool with templates',
      type: 'ai',
      status: 'draft',
      lastModified: '3 days ago',
      technologies: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL']
    }
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'web': return Globe;
      case 'mobile': return Smartphone;
      case 'api': return Database;
      case 'ai': return Zap;
      default: return Code;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deployed': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'active': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'draft': return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-gray-950 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zolt Dashboard
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/prompt')}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>New Project</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, {user?.name}! 👋
              </h1>
              <p className="text-gray-400">
                Manage your AI-generated applications and track your development progress.
              </p>
            </div>
            {user?.subscription?.plan === 'free' && (
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4 text-center">
                <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-yellow-400 font-semibold mb-1">Upgrade to Pro</p>
                <p className="text-gray-400 text-sm mb-3">Unlock unlimited projects</p>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-transform duration-200">
                  Upgrade Now
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Projects</p>
                <p className="text-2xl font-bold text-white">12</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Deployed</p>
                <p className="text-2xl font-bold text-white">8</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">This Month</p>
                <p className="text-2xl font-bold text-white">4</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Plan Usage</p>
                <p className="text-2xl font-bold text-white">
                  {user?.subscription?.plan === 'free' ? '3/5' : '∞'}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-900/60 rounded-lg p-1 mb-8 w-fit">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'projects'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            My Projects
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'templates'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Templates
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              activeTab === 'analytics'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Analytics
          </button>
        </div>

        {/* Projects Grid */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProjects.map((project) => {
              const IconComponent = getProjectIcon(project.type);
              return (
                <div
                  key={project.id}
                  className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-gray-700/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-200">
                          {project.name}
                        </h3>
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors duration-200">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded text-xs border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-500 text-xs">
                      <Calendar className="w-4 h-4" />
                      <span>{project.lastModified}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      {project.url && (
                        <button className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                      <button className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Create New Project Card */}
            <div
              onClick={() => navigate('/prompt')}
              className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-900/50 transition-all duration-300 cursor-pointer group flex items-center justify-center min-h-[280px]"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Plus className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  Create New Project
                </h3>
                <p className="text-gray-400 text-sm">
                  Start building with AI assistance
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Project Templates</h3>
            <p className="text-gray-400 mb-6">Coming soon! Pre-built templates for faster development.</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300">
              Get Notified
            </button>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Project Analytics</h3>
            <p className="text-gray-400 mb-6">Track your development progress and app performance.</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300">
              Coming Soon
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;