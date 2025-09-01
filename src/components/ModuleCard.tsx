
import React, { useState } from 'react';
import { Clock, Play, CheckCircle, Star, Sparkles, Lock } from 'lucide-react';
import { ModuleModal } from './ModuleModal';
import { AspectRatio } from './ui/aspect-ratio';
import { useProgress } from '@/contexts/ProgressContext';

interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  progress: number;
  duration: string;
}

interface ModuleCardProps {
  module: Module;
  isLocked?: boolean;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module, isLocked = false }) => {
  const [showModal, setShowModal] = useState(false);
  const { progress } = useProgress();
  
  const moduleProgress = progress.modules[module.id];
  const isCompleted = moduleProgress?.completed || false;
  const completedTasks = moduleProgress?.checklist?.filter(item => item.completed).length || 0;
  const totalTasks = moduleProgress?.checklist?.length || 0;
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const handleClick = () => {
    if (!isLocked) {
      setShowModal(true);
    }
  };

  return (
    <>
      <div 
        className={`group relative overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-[1.02] ${
          isLocked ? 'opacity-60' : 'hover:shadow-2xl hover:shadow-mint-500/20'
        }`}
        onClick={handleClick}
      >
        {/* Background with gradient and glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/80 dark:to-gray-800/40 backdrop-blur-sm rounded-3xl border border-white/20 dark:border-white/10"></div>
        
        {/* Completed glow effect */}
        {isCompleted && (
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-mint-500/20 rounded-3xl"></div>
        )}
        
        {/* Lock overlay */}
        {isLocked && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10">
            <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
              <Lock className="w-8 h-8 text-gray-600 dark:text-gray-400 mx-auto mb-2" />
              <p className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium">Bloqueado</p>
            </div>
          </div>
        )}
        
        <div className="relative p-4 sm:p-6">
          <div className="flex gap-3 sm:gap-4">
            {/* Cover Image with enhanced styling */}
            <div className="w-20 sm:w-28 flex-shrink-0">
              <AspectRatio ratio={3/4}>
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={`/text-contents/capas-modulos/md${module.id}.jpg`}
                    alt={`Capa do ${module.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-mint-400 to-emerald-500 flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-2xl sm:text-3xl text-white drop-shadow-lg">{module.icon}</span>
                  </div>
                  
                  {/* Completion badge */}
                  {isCompleted && (
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-500 to-mint-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  )}
                  
                  {/* Progress overlay */}
                  {!isCompleted && progressPercentage > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-black/20">
                      <div 
                        className="h-full bg-gradient-to-r from-mint-400 to-emerald-500 transition-all duration-1000"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </AspectRatio>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2 sm:mb-3">
                <div>
                  <h4 className="font-bold text-foreground text-base sm:text-lg leading-tight mb-1 group-hover:text-mint-600 transition-colors duration-300">
                    {module.title}
                  </h4>
                  {isCompleted && (
                    <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                      <Sparkles className="w-3 h-3" />
                      <span className="text-xs font-medium">Concluído</span>
                    </div>
                  )}
                  {!isCompleted && progressPercentage > 0 && (
                    <div className="flex items-center gap-1 text-mint-600 dark:text-mint-400">
                      <Star className="w-3 h-3" />
                      <span className="text-xs font-medium">{progressPercentage}% completo</span>
                    </div>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                {module.description}
              </p>
              
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded-full">
                    <Clock className="w-3 h-3" />
                    <span className="font-medium">{module.duration}</span>
                  </div>
                  
                  {totalTasks > 0 && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded-full">
                      <span className="font-medium">{completedTasks}/{totalTasks} tarefas</span>
                    </div>
                  )}
                </div>
                
                {!isLocked && (
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-mint-500 to-emerald-500 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 self-start sm:self-auto">
                    <Play className="w-3 h-3" />
                    <span>{isCompleted ? 'Revisar' : progressPercentage > 0 ? 'Continuar' : 'Começar'}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-mint-500/0 via-mint-500/5 to-emerald-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {showModal && (
        <ModuleModal 
          module={module} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};
