import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

interface ModuleProgress {
  id: number;
  completed: boolean;
  completedAt?: string;
  checklist: ChecklistItem[];
  checklistProgress: number;
}

interface BonusProgress {
  id: number;
  unlocked: boolean;
  completed: boolean;
  completedAt?: string;
}

interface ProgressState {
  modules: ModuleProgress[];
  bonuses: BonusProgress[];
  currentStreak: number;
  totalProgress: number;
  startDate?: string;
  lastActiveDate?: string;
}

interface ProgressContextType {
  progress: ProgressState;
  updateModuleProgress: (moduleId: number, completed: boolean) => void;
  updateModuleChecklist: (moduleId: number, checklist: ChecklistItem[]) => void;
  updateBonusProgress: (bonusId: number, completed: boolean) => void;
  resetProgress: () => void;
  getModuleProgress: (moduleId: number) => ModuleProgress | undefined;
  getBonusProgress: (bonusId: number) => BonusProgress | undefined;
  isModuleUnlocked: (moduleId: number) => boolean;
  isBonusUnlocked: (bonusId: number) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'reset-protocol-progress';

const initialProgress: ProgressState = {
  modules: [
    { id: 1, completed: false, checklist: [], checklistProgress: 0 },
    { id: 2, completed: false, checklist: [], checklistProgress: 0 },
    { id: 3, completed: false, checklist: [], checklistProgress: 0 },
    { id: 4, completed: false, checklist: [], checklistProgress: 0 },
    { id: 5, completed: false, checklist: [], checklistProgress: 0 },
    { id: 6, completed: false, checklist: [], checklistProgress: 0 },
  ],
  bonuses: [
    { id: 1, unlocked: false, completed: false },
    { id: 2, unlocked: false, completed: false },
    { id: 3, unlocked: false, completed: false },
    { id: 4, unlocked: false, completed: false },
    { id: 5, unlocked: false, completed: false },
  ],
  currentStreak: 0,
  totalProgress: 0,
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressState>(initialProgress);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const parsedProgress = JSON.parse(savedProgress);
        setProgress(parsedProgress);
      } catch (error) {
        console.error('Error loading progress from localStorage:', error);
      }
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const updateModuleProgress = (moduleId: number, completed: boolean) => {
    setProgress(prev => {
      const updatedModules = prev.modules.map(module => {
        if (module.id === moduleId) {
          return {
            ...module,
            completed,
            completedAt: completed ? new Date().toISOString() : undefined,
          };
        }
        return module;
      });

      // Calculate total progress
      const completedModules = updatedModules.filter(m => m.completed).length;
      const totalProgress = Math.round((completedModules / updatedModules.length) * 100);

      // Update bonus unlocks based on module completion
      const updatedBonuses = prev.bonuses.map(bonus => {
        let unlocked = false;
        switch (bonus.id) {
          case 1:
            unlocked = updatedModules[0].completed; // Unlock after Module 1
            break;
          case 2:
            unlocked = updatedModules[1].completed; // Unlock after Module 2
            break;
          case 3:
            unlocked = updatedModules[2].completed; // Unlock after Module 3
            break;
          case 4:
            unlocked = updatedModules[3].completed; // Unlock after Module 4
            break;
          case 5:
            unlocked = updatedModules[4].completed; // Unlock after Module 5
            break;
        }
        return { ...bonus, unlocked };
      });

      return {
        ...prev,
        modules: updatedModules,
        bonuses: updatedBonuses,
        totalProgress,
        lastActiveDate: new Date().toISOString(),
        startDate: prev.startDate || new Date().toISOString(),
      };
    });
  };

  const updateModuleChecklist = (moduleId: number, checklist: ChecklistItem[]) => {
    setProgress(prev => {
      const updatedModules = prev.modules.map(module => {
        if (module.id === moduleId) {
          const completedItems = checklist.filter(item => item.completed).length;
          const checklistProgress = checklist.length > 0 ? Math.round((completedItems / checklist.length) * 100) : 0;
          
          return {
            ...module,
            checklist,
            checklistProgress,
          };
        }
        return module;
      });

      return {
        ...prev,
        modules: updatedModules,
        lastActiveDate: new Date().toISOString(),
      };
    });
  };

  const updateBonusProgress = (bonusId: number, completed: boolean) => {
    setProgress(prev => {
      const updatedBonuses = prev.bonuses.map(bonus => {
        if (bonus.id === bonusId) {
          return {
            ...bonus,
            completed,
            completedAt: completed ? new Date().toISOString() : undefined,
          };
        }
        return bonus;
      });

      return {
        ...prev,
        bonuses: updatedBonuses,
        lastActiveDate: new Date().toISOString(),
      };
    });
  };

  const resetProgress = () => {
    setProgress(initialProgress);
    localStorage.removeItem(STORAGE_KEY);
  };

  const getModuleProgress = (moduleId: number): ModuleProgress | undefined => {
    return progress.modules.find(module => module.id === moduleId);
  };

  const getBonusProgress = (bonusId: number): BonusProgress | undefined => {
    return progress.bonuses.find(bonus => bonus.id === bonusId);
  };

  const isModuleUnlocked = (moduleId: number): boolean => {
    return true; // All modules are now unlocked
  };

  const isBonusUnlocked = (bonusId: number): boolean => {
    const bonus = progress.bonuses.find(b => b.id === bonusId);
    return bonus?.unlocked || false;
  };

  const value: ProgressContextType = {
    progress,
    updateModuleProgress,
    updateModuleChecklist,
    updateBonusProgress,
    resetProgress,
    getModuleProgress,
    getBonusProgress,
    isModuleUnlocked,
    isBonusUnlocked,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export type { ChecklistItem, ModuleProgress, BonusProgress, ProgressState };