import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import PromptEngineer from './pages/PromptEngineer';
import CodeEditor from './pages/CodeEditor';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoginModal from './components/auth/LoginModal';

function AppContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginTab, setLoginTab] = useState<'login' | 'register'>('login');

  useEffect(() => {
    const loginParam = searchParams.get('login');
    const registerParam = searchParams.get('register');
    
    if (loginParam === 'true') {
      setShowLoginModal(true);
      setLoginTab('login');
      // Remove the parameter from URL
      searchParams.delete('login');
      setSearchParams(searchParams);
    } else if (registerParam === 'true') {
      setShowLoginModal(true);
      setLoginTab('register');
      // Remove the parameter from URL
      searchParams.delete('register');
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage onShowLogin={() => setShowLoginModal(true)} />} />
        <Route 
          path="/prompt" 
          element={
            <ProtectedRoute>
              <PromptEngineer />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/editor" 
          element={
            <ProtectedRoute>
              <CodeEditor />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>

      <LoginModal 
        isOpen={showLoginModal}
        onClose={handleCloseLoginModal}
        defaultTab={loginTab}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;