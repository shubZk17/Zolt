import React from 'react';
import { Database, Shield, CreditCard, Figma, Globe, Smartphone as Mobile } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      icon: Database,
      name: "Supabase",
      description: "Auth, database, storage",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      name: "Clerk/Auth0",
      description: "Authentication and user flows",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: CreditCard,
      name: "Stripe",
      description: "Payment processing",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Figma,
      name: "Figma",
      description: "UI → Code conversion",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Globe,
      name: "Netlify/Vercel",
      description: "Instant deployment",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Mobile,
      name: "Expo",
      description: "Mobile app creation",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section id="integrations" className="py-24 bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seamless
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x"> Integrations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Connect to modern development tools and services with simple prompts. 
            No complex configuration or API keys to manage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="group bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                <integration.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                {integration.name}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {integration.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-12 text-center border border-gray-800/50 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-3xl font-bold text-white mb-4">
            Just Say What You Want
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            "Add subscription billing using Stripe" automatically sets up Stripe hooks, 
            backend routes, and UI components. It's that simple.
          </p>
          <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-gray-800/50 shadow-xl animate-typing">
            <div className="text-left">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400 font-mono">user@zolt.new</span>
              </div>
              <p className="text-gray-200 font-mono text-sm">
                $ "Add Google login and user dashboard with profile management"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;