import React from 'react';
import { BarChart3, ShoppingCart, Smartphone, Brain, Building, User } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: Building,
      title: "Internal Tools",
      description: "Admin dashboards, CRMs, analytics apps",
      example: "Build a customer support dashboard with ticket management, user analytics, and real-time chat integration.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "SaaS MVPs",
      description: "Startups building quickly with Stripe, auth",
      example: "Create a subscription-based analytics platform with user authentication, payment processing, and data visualization.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Storefronts, carts, checkout with Stripe",
      example: "Launch an online marketplace with product catalogs, shopping cart, payment processing, and order management.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Expo-based cross-platform apps",
      example: "Develop a fitness tracking app with workout plans, progress tracking, and social features for iOS and Android.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: User,
      title: "Personal Projects",
      description: "Blogs, portfolios, to-do apps",
      example: "Create a personal blog with markdown support, comment system, and social media integration.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "AI Tools",
      description: "Wrapper UIs for AI APIs and LLMs",
      example: "Build an AI-powered content creation tool with OpenAI integration, templates, and collaboration features.",
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-gradient-to-br from-gray-950 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for Every
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x"> Use Case</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From simple personal projects to complex enterprise applications, 
            Zolt adapts to your needs and scales with your ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:bg-gray-900/80 hover:border-gray-700/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                <useCase.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                {useCase.title}
              </h3>
              
              <p className="text-gray-300 mb-4 font-medium">
                {useCase.description}
              </p>
              
              <p className="text-sm text-gray-500 leading-relaxed italic">
                "{useCase.example}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-xl shadow-cyan-500/25 animate-pulse-glow">
            Start Building Your App
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;