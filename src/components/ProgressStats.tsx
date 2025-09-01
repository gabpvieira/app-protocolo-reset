
import React from 'react';
import { TrendingUp, Target, Calendar, Award, Flame, Trophy, Zap, Star } from 'lucide-react';
import { useProgress } from '@/contexts/ProgressContext';

export const ProgressStats = () => {
  const { progress } = useProgress();
  
  const completedModules = Object.values(progress.modules).filter(m => m.completed).length;
  const totalTasks = Object.values(progress.modules).reduce((acc, m) => acc + (m.checklist?.length || 0), 0);
  const completedTasks = Object.values(progress.modules).reduce((acc, m) => acc + (m.checklist?.filter(item => item.completed).length || 0), 0);
  const totalProgress = Math.round((completedModules / 6) * 100);
  
  // Calculate streak days
  const calculateStreak = () => {
    return progress.streak || 0;
  };
  
  const stats = [
    {
      icon: Trophy,
      label: 'Módulos Concluídos',
      value: completedModules,
      total: 6,
      color: 'from-emerald-500 to-mint-500',
      bgColor: 'from-emerald-50 to-mint-50 dark:from-emerald-950/20 dark:to-mint-950/20',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-mint-500'
    },
    {
      icon: Target,
      label: 'Tarefas Realizadas',
      value: completedTasks,
      total: totalTasks,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      icon: Flame,
      label: 'Sequência de Dias',
      value: calculateStreak(),
      total: null,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      icon: Star,
      label: 'Progresso Total',
      value: totalProgress,
      total: 100,
      suffix: '%',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => {
        const percentage = stat.total ? Math.round((stat.value / stat.total) * 100) : 100;
        
        return (
          <div key={index} className="group relative overflow-hidden">
            {/* Background with gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-2xl`}></div>
            
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-white/40 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-white/10"></div>
            
            {/* Content */}
            <div className="relative p-4 text-center">
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${stat.iconBg} mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Value */}
              <div className="mb-2">
                <span className="text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                {stat.total && (
                  <span className="text-lg text-muted-foreground font-medium">/{stat.total}</span>
                )}
                {stat.suffix && (
                  <span className="text-lg text-muted-foreground font-medium">{stat.suffix}</span>
                )}
              </div>
              
              {/* Label */}
              <p className="text-xs font-medium text-muted-foreground mb-3">{stat.label}</p>
              
              {/* Progress bar for stats with totals */}
              {stat.total && (
                <div className="w-full bg-white/30 dark:bg-black/20 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              )}
              
              {/* Streak indicator for days */}
              {stat.label.includes('Sequência') && stat.value > 0 && (
                <div className="flex justify-center mt-2">
                  {[...Array(Math.min(stat.value, 7))].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-0.5"></div>
                  ))}
                  {stat.value > 7 && (
                    <span className="text-xs text-muted-foreground ml-1">+{stat.value - 7}</span>
                  )}
                </div>
              )}
            </div>
            
            {/* Hover glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
          </div>
        );
      })}
    </div>
  );
};
