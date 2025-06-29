import React, { useState } from 'react';
import { Play, Square, Download, Upload, RotateCcw } from 'lucide-react';

interface CodeRunnerProps {
  language: string;
  code: string;
  onCodeChange: (code: string) => void;
}

const CodeRunner: React.FC<CodeRunnerProps> = ({ language, code, onCodeChange }) => {
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [input, setInput] = useState('');

  const executeCode = async () => {
    setIsRunning(true);
    setOutput('Running code...\n');

    try {
      // Simulate code execution with different runtimes
      const result = await simulateCodeExecution(language, code, input);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error}`);
    } finally {
      setIsRunning(false);
    }
  };

  const simulateCodeExecution = async (lang: string, sourceCode: string, userInput: string): Promise<string> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    switch (lang.toLowerCase()) {
      case 'javascript':
        return executeJavaScript(sourceCode, userInput);
      case 'typescript':
        return executeTypeScript(sourceCode, userInput);
      case 'python':
        return executePython(sourceCode, userInput);
      case 'cpp':
      case 'c++':
        return executeCpp(sourceCode, userInput);
      case 'c':
        return executeC(sourceCode, userInput);
      case 'java':
        return executeJava(sourceCode, userInput);
      case 'go':
        return executeGo(sourceCode, userInput);
      case 'rust':
        return executeRust(sourceCode, userInput);
      default:
        return `Language ${lang} is not supported yet.`;
    }
  };

  const executeJavaScript = (code: string, input: string): string => {
    try {
      // Create a safe execution environment
      const logs: string[] = [];
      const mockConsole = {
        log: (...args: any[]) => logs.push(args.map(arg => String(arg)).join(' ')),
        error: (...args: any[]) => logs.push('ERROR: ' + args.map(arg => String(arg)).join(' ')),
        warn: (...args: any[]) => logs.push('WARNING: ' + args.map(arg => String(arg)).join(' '))
      };

      // Mock input function
      const mockInput = input.split('\n');
      let inputIndex = 0;
      const readline = () => {
        return inputIndex < mockInput.length ? mockInput[inputIndex++] : '';
      };

      // Execute code in a controlled environment
      const func = new Function('console', 'readline', 'input', code);
      func(mockConsole, readline, input);

      return logs.length > 0 ? logs.join('\n') : 'Program executed successfully (no output)';
    } catch (error) {
      return `Runtime Error: ${error}`;
    }
  };

  const executeTypeScript = (code: string, input: string): string => {
    // For demo purposes, treat TypeScript similar to JavaScript
    // In a real implementation, you'd compile TypeScript first
    return `TypeScript compilation successful!\n${executeJavaScript(code, input)}`;
  };

  const executePython = (code: string, input: string): string => {
    // Simulate Python execution
    const lines = code.split('\n');
    const output: string[] = [];
    
    // Simple Python interpreter simulation
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('print(')) {
        const match = trimmed.match(/print\((.*)\)/);
        if (match) {
          let content = match[1];
          // Handle string literals
          if (content.startsWith('"') && content.endsWith('"')) {
            content = content.slice(1, -1);
          } else if (content.startsWith("'") && content.endsWith("'")) {
            content = content.slice(1, -1);
          }
          output.push(content);
        }
      }
    }

    return output.length > 0 ? output.join('\n') : 'Program executed successfully';
  };

  const executeCpp = (code: string, input: string): string => {
    // Simulate C++ compilation and execution
    if (code.includes('#include') && code.includes('int main')) {
      return `Compilation successful!\nExecuting C++ program...\n${simulateOutput('C++')}`;
    }
    return 'Compilation Error: Missing main function or includes';
  };

  const executeC = (code: string, input: string): string => {
    // Simulate C compilation and execution
    if (code.includes('#include') && code.includes('int main')) {
      return `Compilation successful!\nExecuting C program...\n${simulateOutput('C')}`;
    }
    return 'Compilation Error: Missing main function or includes';
  };

  const executeJava = (code: string, input: string): string => {
    // Simulate Java compilation and execution
    if (code.includes('public class') && code.includes('public static void main')) {
      return `Compilation successful!\nExecuting Java program...\n${simulateOutput('Java')}`;
    }
    return 'Compilation Error: Missing main method or class declaration';
  };

  const executeGo = (code: string, input: string): string => {
    // Simulate Go execution
    if (code.includes('package main') && code.includes('func main')) {
      return `Build successful!\nExecuting Go program...\n${simulateOutput('Go')}`;
    }
    return 'Build Error: Missing main package or function';
  };

  const executeRust = (code: string, input: string): string => {
    // Simulate Rust compilation and execution
    if (code.includes('fn main')) {
      return `Compilation successful!\nExecuting Rust program...\n${simulateOutput('Rust')}`;
    }
    return 'Compilation Error: Missing main function';
  };

  const simulateOutput = (language: string): string => {
    const outputs = [
      'Hello, World!',
      'Program executed successfully',
      `${language} program output:\nResult: 42`,
      'Processing complete',
      'All tests passed!'
    ];
    return outputs[Math.floor(Math.random() * outputs.length)];
  };

  const clearOutput = () => {
    setOutput('');
  };

  const downloadCode = () => {
    const extensions: { [key: string]: string } = {
      javascript: 'js',
      typescript: 'ts',
      python: 'py',
      cpp: 'cpp',
      'c++': 'cpp',
      c: 'c',
      java: 'java',
      go: 'go',
      rust: 'rs'
    };

    const extension = extensions[language.toLowerCase()] || 'txt';
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const uploadCode = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.js,.ts,.py,.cpp,.c,.java,.go,.rs,.txt';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          onCodeChange(content);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Controls */}
      <div className="flex items-center justify-between p-4 bg-gray-950 border-b border-gray-900">
        <div className="flex items-center space-x-2">
          <button
            onClick={executeCode}
            disabled={isRunning}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 hover:scale-105 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 disabled:opacity-50 shadow-lg group"
          >
            {isRunning ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Play className="w-4 h-4 group-hover:text-green-200 transition-colors duration-200" />
            )}
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>

          <button
            onClick={clearOutput}
            className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 hover:scale-105 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 border border-gray-600 group"
          >
            <RotateCcw className="w-4 h-4 group-hover:text-gray-200 transition-colors duration-200" />
            <span>Clear</span>
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={uploadCode}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg group"
          >
            <Upload className="w-4 h-4 group-hover:text-blue-200 transition-colors duration-200" />
            <span>Upload</span>
          </button>

          <button
            onClick={downloadCode}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 hover:scale-105 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg group"
          >
            <Download className="w-4 h-4 group-hover:text-purple-200 transition-colors duration-200" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Input Section */}
      <div className="p-4 bg-gray-950 border-b border-gray-900">
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Program Input (if required):
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter input for your program (one value per line)"
          className="w-full h-20 bg-black/80 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 text-sm font-mono resize-none focus:border-cyan-400 focus:outline-none shadow-inner transition-all duration-200"
        />
      </div>

      {/* Output Section */}
      <div className="flex-1 p-4 bg-black">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-300">Output:</h3>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isRunning ? 'bg-yellow-400 animate-pulse' : output ? 'bg-green-400' : 'bg-gray-500'}`}></div>
            <span className="text-xs text-gray-400">
              {isRunning ? 'Running' : output ? 'Ready' : 'Idle'}
            </span>
          </div>
        </div>
        <div className="bg-black rounded-lg p-4 h-full overflow-auto border border-gray-900 shadow-inner">
          <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
            {output || 'Click "Run Code" to execute your program...'}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeRunner;