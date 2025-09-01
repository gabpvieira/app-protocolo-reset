
import React from 'react';
import { ModuleCard } from '../components/ModuleCard';
import { BottomNavigation } from '../components/BottomNavigation';

const ModulesPage = () => {
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

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-mint-500 to-mint-600 text-white px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">Módulos Principais</h1>
        <p className="text-mint-100">Seu caminho para a transformação</p>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="grid gap-4">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ModulesPage;
