
import React from 'react';
import Dashboard from '../components/Dashboard';
import { BottomNavigation } from '../components/BottomNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Dashboard />
      <BottomNavigation />
    </div>
  );
};

export default Index;
