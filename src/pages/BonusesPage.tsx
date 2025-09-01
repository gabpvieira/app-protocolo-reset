
import React from 'react';
import { BonusCard } from '../components/BonusCard';
import { BottomNavigation } from '../components/BottomNavigation';

const BonusesPage = () => {
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

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-6">
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-2xl font-bold">Bônus Exclusivos</h1>
          <span className="bg-white/20 text-xs px-2 py-1 rounded-full font-medium">
            PREMIUM
          </span>
        </div>
        <p className="text-amber-100">Conteúdo premium para acelerar seus resultados</p>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        <div className="grid gap-4">
          {bonuses.map((bonus) => (
            <BonusCard key={bonus.id} bonus={bonus} />
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default BonusesPage;
