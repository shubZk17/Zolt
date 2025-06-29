import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { 
  Zap, 
  Play, 
  Save, 
  Download, 
  Share2, 
  Settings, 
  Terminal, 
  FileText, 
  Folder, 
  Globe,
  Smartphone,
  Database,
  Sparkles,
  MessageSquare,
  Code,
  Eye,
  RefreshCw,
  Split,
  Maximize2
} from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';
import CodeRunner from '../components/CodeRunner';

const CodeEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('code');
  const [isRunning, setIsRunning] = useState(false);
  const [prompt] = useState(location.state?.prompt || '');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [showAiPanel, setShowAiPanel] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [layout, setLayout] = useState<'split' | 'full'>('split');

  const files = [
    { name: 'main.js', type: 'javascript', active: true },
    { name: 'utils.ts', type: 'typescript', active: false },
    { name: 'algorithm.py', type: 'python', active: false },
    { name: 'solution.cpp', type: 'cpp', active: false },
    { name: 'program.c', type: 'c', active: false },
    { name: 'Main.java', type: 'java', active: false },
  ];

  useEffect(() => {
    // Set default code based on selected language
    handleLanguageChange('javascript', getDefaultTemplate('javascript'));
  }, []);

  const getDefaultTemplate = (language: string): string => {
    const templates: { [key: string]: string } = {
      javascript: `// JavaScript Example
console.log("Hello, World!");

// Function example
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci of 10:", fibonacci(10));`,
      python: `# Python Example
print("Hello, World!")

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(f"Fibonacci of 10: {fibonacci(10)}")`,
      cpp: `#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    cout << "Hello, World!" << endl;
    cout << "Fibonacci of 10: " << fibonacci(10) << endl;
    return 0;
}`
    };
    return templates[language] || '// Start coding here...';
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000);
  };

  const handleAiSuggest = () => {
    setShowAiPanel(true);
    setAiSuggestion(`I can help you with your ${selectedLanguage} code! Here are some suggestions:

1. **Code Optimization**: I can help optimize your algorithms for better performance
2. **Bug Detection**: Let me analyze your code for potential issues
3. **Best Practices**: I can suggest improvements following ${selectedLanguage} conventions
4. **Add Features**: Want to add specific functionality? Just ask!

What would you like me to help you with?`);
  };

  const handleLanguageChange = (language: string, template: string) => {
    setSelectedLanguage(language);
    setCode(template);
  };

  const handleCodeChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const getLanguageForMonaco = (language: string): string => {
    const languageMap: { [key: string]: string } = {
      javascript: 'javascript',
      typescript: 'typescript',
      python: 'python',
      cpp: 'cpp',
      'c++': 'cpp',
      c: 'c',
      java: 'java',
      go: 'go',
      rust: 'rust'
    };
    return languageMap[language] || 'javascript';
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="bg-black/95 backdrop-blur-sm border-b border-gray-900 animate-slide-down">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => navigate('/')}>
                <div className="w-7 h-7 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse-glow">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  Zolt Code Editor
                </span>
              </div>
              <div className="text-sm text-gray-400 hidden md:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Multi-Language Online IDE
              </div>
            </div>

            <div className="flex items-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => setLayout(layout === 'split' ? 'full' : 'split')}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 hover:scale-105 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 border border-gray-700 group"
              >
                {layout === 'split' ? <Maximize2 className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-200" /> : <Split className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-200" />}
                <span className="hidden sm:inline">{layout === 'split' ? 'Full' : 'Split'}</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg group">
                <Save className="w-4 h-4 group-hover:text-blue-200 transition-colors duration-200" />
                <span className="hidden sm:inline">Save</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg group">
                <Share2 className="w-4 h-4 group-hover:text-purple-200 transition-colors duration-200" />
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-950 border-r border-gray-900 flex flex-col animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Language Selector */}
          <LanguageSelector 
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          />

          {/* File Explorer */}
          <div className="p-4 border-b border-gray-900">
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <Folder className="w-4 h-4 mr-2 text-cyan-400" />
              Project Files
            </h3>
            <div className="space-y-1">
              {files.map((file, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer transition-all duration-300 hover:scale-105 ${
                    file.active 
                      ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-600/30 shadow-lg shadow-cyan-500/10' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-900/50'
                  }`}
                >
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">{file.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Assistant */}
          <div className="p-4 flex-1">
            <button
              onClick={handleAiSuggest}
              className="w-full flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:from-cyan-500 hover:to-purple-500 hover:scale-105 transition-all duration-300 shadow-lg animate-pulse-glow group"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
              <span>AI Code Assistant</span>
            </button>

            {showAiPanel && (
              <div className="mt-4 bg-gray-900/60 rounded-lg p-3 border border-gray-800/50 shadow-xl animate-fade-in-up">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-cyan-400 text-sm font-medium">Zolt AI</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed whitespace-pre-line">
                  {aiSuggestion}
                </p>
                <button className="mt-2 text-xs text-cyan-400 hover:text-cyan-300 hover:translate-x-1 transition-all duration-200 inline-block">
                  Get Code Suggestions →
                </button>
              </div>
            )}

            <div className="mt-6 space-y-3">
              <div className="text-xs text-gray-500 uppercase tracking-wide">Quick Actions</div>
              <button className="w-full flex items-center space-x-2 text-gray-400 hover:text-white px-2 py-1.5 rounded transition-all duration-300 hover:bg-gray-900/50 hover:translate-x-1 group">
                <Database className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-200" />
                <span className="text-sm">Code Templates</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-gray-400 hover:text-white px-2 py-1.5 rounded transition-all duration-300 hover:bg-gray-900/50 hover:translate-x-1 group">
                <Globe className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-200" />
                <span className="text-sm">Import Library</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-gray-400 hover:text-white px-2 py-1.5 rounded transition-all duration-300 hover:bg-gray-900/50 hover:translate-x-1 group">
                <Smartphone className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-200" />
                <span className="text-sm">Code Formatter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* Tabs */}
          <div className="bg-gray-950 border-b border-gray-900 px-4">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('code')}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeTab === 'code'
                    ? 'text-cyan-400 border-b-2 border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>Code Editor</span>
              </button>
              <button
                onClick={() => setActiveTab('runner')}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeTab === 'runner'
                    ? 'text-cyan-400 border-b-2 border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Play className="w-4 h-4" />
                <span>Run & Test</span>
              </button>
              <button
                onClick={() => setActiveTab('terminal')}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeTab === 'terminal'
                    ? 'text-cyan-400 border-b-2 border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span>Terminal</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-hidden">
            {activeTab === 'code' && (
              <div className="h-full">
                {layout === 'split' ? (
                  <div className="h-full flex">
                    <div className="flex-1 border-r border-gray-900">
                      <Editor
                        height="100%"
                        language={getLanguageForMonaco(selectedLanguage)}
                        value={code}
                        onChange={handleCodeChange}
                        theme="vs-dark"
                        options={{
                          fontSize: 14,
                          minimap: { enabled: false },
                          scrollBeyondLastLine: false,
                          automaticLayout: true,
                          tabSize: 2,
                          insertSpaces: true,
                          wordWrap: 'on',
                          lineNumbers: 'on',
                          renderWhitespace: 'selection',
                          bracketPairColorization: { enabled: true }
                        }}
                      />
                    </div>
                    <div className="w-1/2">
                      <CodeRunner 
                        language={selectedLanguage}
                        code={code}
                        onCodeChange={setCode}
                      />
                    </div>
                  </div>
                ) : (
                  <Editor
                    height="100%"
                    language={getLanguageForMonaco(selectedLanguage)}
                    value={code}
                    onChange={handleCodeChange}
                    theme="vs-dark"
                    options={{
                      fontSize: 14,
                      minimap: { enabled: true },
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                      tabSize: 2,
                      insertSpaces: true,
                      wordWrap: 'on',
                      lineNumbers: 'on',
                      renderWhitespace: 'selection',
                      bracketPairColorization: { enabled: true }
                    }}
                  />
                )}
              </div>
            )}

            {activeTab === 'runner' && (
              <CodeRunner 
                language={selectedLanguage}
                code={code}
                onCodeChange={setCode}
              />
            )}

            {activeTab === 'terminal' && (
              <div className="h-full bg-black text-green-400 font-mono text-sm animate-fade-in-up">
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-cyan-400">zolt@code-editor</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~/workspace</span>
                    <span className="text-white">$ </span>
                    <span className="text-green-400">echo "Multi-language IDE ready!"</span>
                  </div>
                  <div className="text-white mb-2">
                    Multi-language IDE ready!
                  </div>
                  <div className="text-gray-400 mb-2">
                    Supported languages: JavaScript, TypeScript, Python, C++, C, Java, Go, Rust
                  </div>
                  <div className="text-green-400 mb-1 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    ✓ Code editor initialized
                  </div>
                  <div className="text-cyan-400 mb-1 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                    ✓ Compiler services ready
                  </div>
                  <div className="text-purple-400 mb-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                    ✓ AI assistant available
                  </div>
                  <div className="text-gray-500">
                    Ready for coding in {selectedLanguage}
                  </div>
                  <div className="mt-4">
                    <span className="text-cyan-400">zolt@code-editor</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~/workspace</span>
                    <span className="text-white">$ </span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-950 border-t border-gray-900 px-4 py-2 flex items-center justify-between text-sm animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-center space-x-4 text-gray-400">
          <span>Ready</span>
          <span>•</span>
          <span className="capitalize text-cyan-400">{selectedLanguage}</span>
          <span>•</span>
          <span>Multi-Language IDE</span>
        </div>
        <div className="flex items-center space-x-4 text-gray-400">
          <span>Lines: {code.split('\n').length}</span>
          <span>•</span>
          <span>UTF-8</span>
          <span>•</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;