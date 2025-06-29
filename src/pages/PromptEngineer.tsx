import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, ArrowRight, Sparkles, Code, Database, Smartphone, Globe, Lightbulb, Wand2, Rocket } from 'lucide-react';

const PromptEngineer = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const promptTemplates = [
    {
      id: 'saas',
      title: 'SaaS Application',
      icon: Rocket,
      description: 'Build a subscription-based software service',
      template: 'Create a SaaS application with user authentication, subscription billing using Stripe, dashboard with analytics, and admin panel for user management.'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Store',
      icon: Globe,
      description: 'Online store with payment processing',
      template: 'Build an e-commerce platform with product catalog, shopping cart, Stripe checkout, order management, and customer dashboard.'
    },
    {
      id: 'mobile',
      title: 'Mobile App',
      icon: Smartphone,
      description: 'Cross-platform mobile application',
      template: 'Create a React Native mobile app with user authentication, real-time chat, push notifications, and offline data sync.'
    },
    {
      id: 'dashboard',
      title: 'Admin Dashboard',
      icon: Database,
      description: 'Data management and analytics',
      template: 'Build an admin dashboard with user management, data visualization charts, real-time analytics, and export functionality.'
    },
    {
      id: 'blog',
      title: 'Blog Platform',
      icon: Code,
      description: 'Content management system',
      template: 'Create a blog platform with markdown editor, user authentication, comment system, and SEO optimization.'
    },
    {
      id: 'ai-tool',
      title: 'AI Tool',
      icon: Wand2,
      description: 'AI-powered application',
      template: 'Build an AI-powered content generation tool with OpenAI integration, template library, and collaboration features.'
    }
  ];

  const handleTemplateSelect = (template: any) => {
    setSelectedTemplate(template.id);
    setPrompt(template.template);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate generation process
    setTimeout(() => {
      navigate('/editor', { state: { prompt, generatedCode: true } });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zolt
              </span>
            </div>
            <div className="text-sm text-gray-400">
              AI-Powered Development Environment
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-cyan-400/20 shadow-xl">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Prompt Engineering Studio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Describe Your
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Dream App</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Use natural language to build production-ready applications. Choose a template or write your own prompt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Lightbulb className="w-6 h-6 text-cyan-400 mr-2" />
              Quick Templates
            </h2>
            
            <div className="space-y-3">
              {promptTemplates.map((template) => (
                <div
                  key={template.id}
                  onClick={() => handleTemplateSelect(template)}
                  className={`group cursor-pointer bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 hover:bg-gray-900/80 hover:shadow-xl hover:shadow-cyan-500/10 ${
                    selectedTemplate === template.id 
                      ? 'border-cyan-400/50 bg-gray-900/80 shadow-xl shadow-cyan-500/10' 
                      : 'border-gray-800/50 hover:border-gray-700/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <template.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-200">
                        {template.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt Input */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 text-purple-400 mr-2" />
                Your Prompt
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Describe your application in detail:
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Example: Create a task management app with user authentication, real-time collaboration, drag-and-drop interface, email notifications, and mobile responsiveness..."
                    className="w-full h-48 bg-black/80 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-200 resize-none shadow-inner"
                  />
                </div>

                <div className="bg-black/60 rounded-xl p-4 border border-gray-800/30 shadow-inner">
                  <h3 className="text-white font-semibold mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                    Pro Tips for Better Results:
                  </h3>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Be specific about features and functionality</li>
                    <li>• Mention integrations you need (Stripe, Auth, Database)</li>
                    <li>• Describe the user interface and experience</li>
                    <li>• Include any specific technologies or frameworks</li>
                  </ul>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="w-full group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 shadow-xl shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Generating Your App...</span>
                    </>
                  ) : (
                    <>
                      <span>Generate Application</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/30 text-center shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Full-Stack Generation</h3>
            <p className="text-gray-400 text-sm">Frontend, backend, database, and deployment configuration</p>
          </div>
          
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/30 text-center shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">AI-Powered Editor</h3>
            <p className="text-gray-400 text-sm">Intelligent code completion and real-time suggestions</p>
          </div>
          
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-gray-800/30 text-center shadow-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Instant Deployment</h3>
            <p className="text-gray-400 text-sm">One-click deployment to production environments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptEngineer;