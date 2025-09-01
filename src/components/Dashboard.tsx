import React, { useState, useEffect } from 'react';
import { ModuleCard } from './ModuleCard';
import { BonusCard } from './BonusCard';
import { ProgressStats } from './ProgressStats';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/contexts/ProgressContext';
import { User, Trophy, Clock, LogOut, Sparkles, Target, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { progress } = useProgress();
  const { toast } = useToast();
  const [greeting, setGreeting] = useState('');
  const [motivationalQuote, setMotivationalQuote] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Bom dia');
      setMotivationalQuote('Comece o dia com energia e determinação!');
    } else if (hour < 18) {
      setGreeting('Boa tarde');
      setMotivationalQuote('Continue firme na sua jornada de transformação!');
    } else {
      setGreeting('Boa noite');
      setMotivationalQuote('Reflita sobre seus progressos de hoje!');
    }
  }, []);

  const handleLogout = () => {
    logout();
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
  };

  const modules = [
    {
      id: 1,
      title: 'Boas-vindas ao Reset',
      description: 'Prepare-se para transformar sua relação com o emagrecimento',
      icon: '🎯',
      progress: 0,
      duration: '15 min'
    },
    {
      id: 2,
      title: 'Reset Metabólico de 7 Dias',
      description: '7 dias para reativar seu metabolismo e começar a queimar gordura',
      icon: '🔥',
      progress: 0,
      duration: '25 min'
    },
    {
      id: 3,
      title: 'Os 3 Gatilhos Alimentares',
      description: 'Descubra os 3 mecanismos que controlam sua queima de gordura',
      icon: '⚡',
      progress: 0,
      duration: '20 min'
    },
    {
      id: 4,
      title: 'Estratégia dos 21 Dias',
      description: 'Seu plano completo para os próximos 21 dias de transformação',
      icon: '📈',
      progress: 0,
      duration: '30 min'
    },
    {
      id: 5,
      title: 'Resultados & Continuidade',
      description: 'Como medir seu progresso real e manter os resultados',
      icon: '🎯',
      progress: 0,
      duration: '18 min'
    },
    {
      id: 6,
      title: 'Encerramento & Próximos Passos',
      description: 'Seu protocolo de manutenção para nunca mais recuperar o peso',
      icon: '🏆',
      progress: 0,
      duration: '22 min'
    }
  ];

  const bonuses = [
    {
      id: 1,
      title: 'Lista das Substituições Inteligentes',
      description: '200+ substituições para nunca ficar sem opções saudáveis',
      icon: '🔄',
      isPremium: true
    },
    {
      id: 2,
      title: 'Cardápio Anti-Compulsão de 21 Dias',
      description: 'Cardápios balanceados que eliminam a compulsão alimentar',
      icon: '📋',
      isPremium: true
    },
    {
      id: 3,
      title: 'Reset Hormonal da Queima',
      description: 'Reprograme seus hormônios para queima máxima 24h por dia',
      icon: '⚖️',
      isPremium: true
    },
    {
      id: 4,
      title: 'Treino de 7 Minutos em Casa',
      description: 'Treinos rápidos e eficientes que cabem na sua rotina',
      icon: '💪',
      isPremium: true
    },
    {
      id: 5,
      title: 'Guia do Sono Emagrecedor',
      description: 'Como otimizar seu sono para emagrecer enquanto dorme',
      icon: '😴',
      isPremium: true
    }
  ];

  const completedModules = Object.values(progress.modules).filter(m => m.completed).length;
  const totalProgress = Math.round((completedModules / 6) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-mint-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pb-20">
      {/* Premium Header with Glass Effect */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-mint-600 via-mint-500 to-emerald-600">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.05%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%274%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>
        </div>
        
        <div className="relative px-3 sm:px-4 py-6 sm:py-8 pb-8 sm:pb-12 mb-6 sm:mb-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                  <User className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-white/80 text-xs sm:text-sm font-medium">{greeting}!</p>
                <h1 className="text-lg sm:text-2xl font-bold text-white truncate">{user?.name || user?.email}</h1>
                <p className="text-white/70 text-xs mt-0.5 sm:mt-1 hidden sm:block">{motivationalQuote}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 w-8 h-8 sm:w-10 sm:h-10"
              >
                <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
          
          {/* Premium Progress Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base sm:text-xl font-bold text-white truncate">Protocolo Reset da Barriga</h2>
                  <p className="text-white/70 text-xs sm:text-sm">Sua jornada de transformação</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xl sm:text-3xl font-bold text-white">{totalProgress}%</div>
                <div className="text-white/70 text-xs">Concluído</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-3 sm:mb-4">
              <div className="w-full bg-white/20 rounded-full h-2 sm:h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full transition-all duration-1000 ease-out shadow-lg"
                  style={{ width: `${totalProgress}%` }}
                ></div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-white mb-0.5 sm:mb-1">
                  <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-semibold text-sm sm:text-base">{completedModules}/6</span>
                </div>
                <p className="text-white/70 text-xs">Módulos</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-white mb-0.5 sm:mb-1">
                  <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-semibold text-sm sm:text-base">{Object.values(progress.modules).reduce((acc, m) => acc + (m.checklist?.filter(item => item.completed).length || 0), 0)}</span>
                </div>
                <p className="text-white/70 text-xs">Tarefas</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-0.5 sm:gap-1 text-white mb-0.5 sm:mb-1">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-semibold text-sm sm:text-base">{progress.streak || 0}</span>
                </div>
                <p className="text-white/70 text-xs">Sequência</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="px-4 -mt-6 sm:-mt-8 md:-mt-10 relative z-10">
        <ProgressStats />
      </div>

      {/* Premium Main Content - White Container */}
      <div className="bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-t-[2rem] shadow-2xl mx-2 sm:mx-4" style={{marginTop: '40px'}}>
        <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
          {/* Modules Section with Premium Design */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Módulos Principais</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">Sua jornada de transformação em 6 etapas</p>
              </div>
              <div className="bg-gradient-to-r from-mint-500 to-emerald-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg self-start sm:self-auto">
                {completedModules}/6 Concluídos
              </div>
            </div>
            <div className="grid gap-4 sm:gap-6">
              {modules.map((module, index) => {
                const moduleProgress = progress.modules[module.id];
                const isCompleted = moduleProgress?.completed || false;
                const isUnlocked = true; // All modules are now unlocked
                
                return (
                  <div key={module.id} className={`relative group transition-all duration-500 ${
                    isCompleted ? 'scale-[0.98] opacity-90' : isUnlocked ? 'hover:scale-[1.02]' : 'opacity-60'
                  }`}>
                    {/* Completion Glow Effect */}
                    {isCompleted && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-mint-400/20 rounded-2xl blur-xl"></div>
                    )}
                    
                    {/* Lock Overlay for Locked Modules */}
                    {!isUnlocked && (
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] rounded-2xl z-10 flex items-center justify-center">
                        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                          <Clock className="w-6 h-6 text-muted-foreground" />
                        </div>
                      </div>
                    )}
                    
                    <ModuleCard module={module} />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Premium Bonuses Section */}
          <section>
            <div className="relative">
              {/* Premium Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/20 dark:via-yellow-950/20 dark:to-orange-950/20 rounded-3xl"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2740%27 height=%2740%27 viewBox=%270 0 40 40%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27%23f59e0b%27 fill-opacity=%270.03%27%3E%3Cpath d=%27M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%27/%3E%3C/g%3E%3C/svg%3E')] opacity-30 rounded-3xl"></div>
              
              <div className="relative p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Bônus Exclusivos</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">Conteúdos premium para acelerar seus resultados</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-bold shadow-lg">
                      ✨ PREMIUM
                    </span>
                  </div>
                </div>
                
                <div className="grid gap-3 sm:gap-4">
                  {bonuses.map((bonus, index) => (
                    <div key={bonus.id} className="group transition-all duration-300 hover:scale-[1.01]">
                      <BonusCard bonus={bonus} />
                    </div>
                  ))}
                </div>
                
                {/* Premium CTA */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl sm:rounded-2xl border border-amber-200/50 dark:border-amber-800/50">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Desbloqueie Todo o Potencial</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Acesse todos os bônus premium e acelere sua transformação</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;