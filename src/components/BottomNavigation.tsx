
import React from 'react';
import { Home, BookOpen, Award } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Início', path: '/' },
    { icon: BookOpen, label: 'Módulos', path: '/modules' },
    { icon: Award, label: 'Bônus', path: '/bonuses' }
  ];

  return (
    <nav className="bottom-nav">
      <div className="flex items-center justify-around max-w-sm mx-auto">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg transition-colors min-w-0 flex-1 max-w-[80px] ${
              location.pathname === item.path
                ? 'text-mint-600 bg-mint-50 dark:bg-mint-900/30' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-[10px] sm:text-xs font-medium truncate w-full text-center leading-tight">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
