import React from 'react';
import { MessageSquare, Edit3, Monitor, Puzzle, Rocket, GitBranch, Users, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language → Real Apps",
      description: "Transform simple prompts into fully functional applications with frontend, backend, authentication, and database—all automatically generated.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Edit3,
      title: "Prompt-Based Code Editing",
      description: "Modify and extend your app with natural language. Zolt understands your project structure and applies changes intelligently.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Monitor,
      title: "Full Dev Environment",
      description: "Complete development environment in your browser with Node.js, terminal, VS Code-like editor, and live preview.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Puzzle,
      title: "Built-in Integrations",
      description: "Connect to modern services like Supabase, Stripe, Clerk, and more with simple prompts. No complex setup required.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Rocket,
      title: "One-Click Deployment",
      description: "Deploy to production in seconds with automated builds, environment setup, and hosting on Netlify, Vercel, or Expo.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: GitBranch,
      title: "Project Management",
      description: "Built-in versioning with branching support, change tracking, and the ability to revert to previous versions.",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Collaboration & Sharing",
      description: "Share your apps with a link, invite collaborators, and work together on projects with real-time updates.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: Target,
      title: "Multiple Use Cases",
      description: "Perfect for SaaS MVPs, internal tools, e-commerce platforms, mobile apps, personal projects, and AI tools.",
      color: "from-violet-500 to-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x"> Build Apps</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Zolt provides a complete development ecosystem that handles everything from ideation to deployment, 
            all through natural language interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;