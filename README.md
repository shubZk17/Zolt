# Zolt - AI-Powered Full-Stack Development Environment

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Monaco_Editor-0.45.0-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="Monaco Editor" />
</div>

<div align="center">
  <h3>🌟 Transform Natural Language into Production-Ready Applications</h3>
  <p>Your AI-powered full-stack development environment that runs entirely in your browser</p>
</div>

---

## ✨ Features

### 🤖 **AI-Powered Development**
- **Natural Language to Code**: Transform plain English descriptions into fully functional applications
- **Intelligent Code Generation**: Frontend, backend, database, and deployment configuration
- **Smart Code Completion**: AI-powered suggestions and real-time assistance
- **Multi-Language Support**: JavaScript, TypeScript, Python, C++, C, Java, Go, Rust

### 🔐 **User Authentication & Management**
- **Secure Login System**: Email/password authentication with social login options
- **User Profiles**: Customizable profiles with avatar support
- **Project Management**: Personal dashboard to manage all your AI-generated projects
- **Subscription Plans**: Free and Pro tiers with different feature sets
- **Protected Routes**: Secure access to premium features

### 🎨 **Advanced Code Editor**
- **Monaco Editor Integration**: VS Code-like editing experience
- **Syntax Highlighting**: Support for 8+ programming languages
- **Real-time Code Execution**: Run and test code instantly
- **Split View Layout**: Code editor and output side-by-side
- **File Management**: Project structure with multiple files

### 🚀 **Full-Stack Capabilities**
- **Frontend Frameworks**: React, Vue, Angular support
- **Backend Services**: Node.js, Express, API generation
- **Database Integration**: Supabase, PostgreSQL, MongoDB
- **Authentication**: Clerk, Auth0, custom auth systems
- **Payment Processing**: Stripe integration
- **Mobile Development**: React Native with Expo

### 🎯 **Use Cases**
- **SaaS Applications**: Subscription-based software services
- **E-commerce Platforms**: Online stores with payment processing
- **Mobile Apps**: Cross-platform iOS and Android applications
- **Admin Dashboards**: Data management and analytics tools
- **AI Tools**: OpenAI and LLM integrations
- **Personal Projects**: Blogs, portfolios, productivity apps

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe development
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **React Router 6.20.1** - Client-side routing with protected routes
- **Lucide React 0.344.0** - Beautiful icon library

### **Authentication & State Management**
- **React Context API** - Global state management for authentication
- **Local Storage** - Persistent user sessions
- **Protected Routes** - Route-level authentication guards
- **User Management** - Profile management and subscription handling

### **Development Tools**
- **Vite 5.4.2** - Lightning-fast build tool
- **Monaco Editor 4.6.0** - VS Code editor in the browser
- **ESLint 9.9.1** - Code linting and formatting
- **PostCSS 8.4.35** - CSS processing
- **Autoprefixer 10.4.18** - CSS vendor prefixing

### **Code Execution**
- **Multi-language Runtime** - JavaScript, Python, C++, Java, Go, Rust
- **Real-time Compilation** - Instant feedback and error handling
- **Input/Output Management** - Interactive program execution
- **Code Templates** - Quick start examples for each language

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/zolt.git
   cd zolt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

---

## 📁 Project Structure

```
zolt/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── auth/           # Authentication components
│   │   │   ├── LoginModal.tsx      # Login/Register modal
│   │   │   ├── UserMenu.tsx        # User dropdown menu
│   │   │   └── ProtectedRoute.tsx  # Route protection
│   │   ├── Header.tsx      # Navigation header with auth
│   │   ├── Hero.tsx        # Landing page hero section
│   │   ├── Features.tsx    # Features showcase
│   │   ├── CodeRunner.tsx  # Code execution engine
│   │   └── ...
│   ├── contexts/           # React Context providers
│   │   └── AuthContext.tsx # Authentication state management
│   ├── pages/              # Page components
│   │   ├── HomePage.tsx    # Landing page
│   │   ├── Dashboard.tsx   # User dashboard
│   │   ├── PromptEngineer.tsx # AI prompt interface
│   │   └── CodeEditor.tsx  # Multi-language IDE
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles and animations
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite build configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🔐 Authentication Features

### **Login System**
- **Email/Password Authentication**: Secure login with validation
- **Social Login**: GitHub and Google OAuth integration
- **Password Reset**: Forgot password functionality
- **Registration**: New user account creation
- **Form Validation**: Real-time input validation and error handling

### **User Management**
- **User Profiles**: Customizable profiles with avatar support
- **Session Management**: Persistent login sessions
- **Protected Routes**: Automatic redirection for unauthenticated users
- **User Menu**: Dropdown with profile, settings, and logout options

### **Dashboard Features**
- **Project Overview**: Visual dashboard showing all user projects
- **Project Statistics**: Analytics on project creation and deployment
- **Quick Actions**: Easy access to create new projects
- **Subscription Management**: Plan usage and upgrade options

---

## 🎨 Design System

### **Color Palette**
- **Primary**: Cyan (#06b6d4) to Purple (#8b5cf6) gradients
- **Secondary**: Pink (#ec4899) and Emerald (#10b981) accents
- **Background**: Deep blacks and grays for dark theme
- **Text**: White and gray variants for optimal contrast

### **Typography**
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable sans-serif
- **Code**: Monospace fonts for code blocks

### **Animations**
- **Entrance**: Fade-in-up animations with staggered delays
- **Hover**: Scale, rotation, and glow effects
- **Background**: Floating particles and gradient animations
- **Interactive**: Smooth transitions and micro-interactions

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🌟 Key Features Walkthrough

### 1. **User Authentication**
- **Registration/Login**: Secure authentication system with social login options
- **Protected Routes**: Automatic redirection and route protection
- **User Dashboard**: Personal project management interface
- **Profile Management**: Customizable user profiles and settings

### 2. **AI Prompt Engineering**
Navigate to `/prompt` to access the AI-powered application generator:
- Choose from pre-built templates (SaaS, E-commerce, Mobile, etc.)
- Write custom prompts in natural language
- Generate full-stack applications instantly

### 3. **Multi-Language Code Editor**
Access the IDE at `/editor`:
- Support for 8+ programming languages
- Real-time code execution and testing
- Split-view layout with output panel
- File management and project structure

### 4. **Project Dashboard**
Manage all your projects at `/dashboard`:
- Visual project overview with statistics
- Project status tracking (active, deployed, draft)
- Quick access to edit and deploy projects
- Subscription plan management

### 5. **Code Execution Engine**
- **JavaScript/TypeScript**: Browser-based execution
- **Python**: Simulated Python interpreter
- **C/C++**: Compilation simulation with output
- **Java**: JVM simulation
- **Go/Rust**: Build system simulation

---

## 🚀 Deployment

### **Netlify** (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### **Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the deployment prompts

### **Manual Deployment**
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain consistent code formatting with ESLint
- Add animations for enhanced user experience
- Ensure responsive design across all devices
- Implement proper authentication checks for protected features

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vite Team** - For the lightning-fast build tool
- **Monaco Editor** - For bringing VS Code to the browser
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library

---

## 📞 Support

- **Documentation**: [Coming Soon]
- **Issues**: [GitHub Issues](https://github.com/your-username/zolt/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/zolt/discussions)

---

<div align="center">
  <h3>🚀 Ready to build the future with AI?</h3>
  <p>Start creating amazing applications with natural language today!</p>
  
  **[Try Zolt Now](http://localhost:5173)** | **[View Demo](http://localhost:5173/prompt)** | **[Code Editor](http://localhost:5173/editor)**
</div>