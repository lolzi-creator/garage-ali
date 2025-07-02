'use client';

import { useState, useEffect } from 'react';
import AdminLogin from '@/components/admin/AdminLogin';
import CarManager from '@/components/admin/CarManager';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('admin_authenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {!isAuthenticated ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <CarManager onLogout={handleLogout} />
      )}
    </div>
  );
} 