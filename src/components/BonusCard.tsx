
import React, { useState } from 'react';
import { Crown, Play, Sparkles, Gift, Star } from 'lucide-react';
import { BonusModal } from './BonusModal';
import { AspectRatio } from './ui/aspect-ratio';

interface Bonus {
  id: number;
  title: string;
  description: string;
  icon: string;
  isPremium: boolean;
}

interface BonusCardProps {
  bonus: Bonus;
}

export const BonusCard: React.FC<BonusCardProps> = ({ bonus }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="group relative overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/20"
        onClick={() => setShowModal(true)}
      >
        {/* Background with premium gradient and glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-orange-50/40 dark:from-amber-900/20 dark:to-orange-900/10 backdrop-blur-sm rounded-3xl border border-amber-200/30 dark:border-amber-700/30"></div>
        
        {/* Premium glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl"></div>
        
        {/* Floating premium badge */}
        <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-md opacity-60 animate-pulse"></div>
            {/* Badge */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-gray-900 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
              <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            {/* Sparkle effects */}
            <div className="absolute -top-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-300 rounded-full"></div>
            <div className="absolute -bottom-1 -right-1 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="relative p-4 sm:p-6">
          <div className="flex gap-3 sm:gap-4">
            {/* Cover Image with enhanced styling */}
            <div className="w-20 sm:w-28 flex-shrink-0">
              <AspectRatio ratio={3/4}>
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={{
                      1: 'https://i.postimg.cc/CMRpCvNK/bonus1.png',
                      2: 'https://i.postimg.cc/T3686TXy/bonus2.png',
                      3: 'https://i.postimg.cc/ZK3k2CXt/bonus3.png',
                      4: 'https://i.postimg.cc/Vs2QKjGW/bonus4.png',
                      5: 'https://i.postimg.cc/wMCVDxkD/bonus5.png'
                    }[bonus.id] || `/text-contents/bonus-content/capas/bonus${bonus.id}.jpg`}
                    alt={bonus.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Premium overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-amber-400/10"></div>
                  
                  {/* Premium indicator */}
                  <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-bold shadow-lg">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span className="hidden sm:inline">PREMIUM</span>
                      <span className="sm:hidden">P</span>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0 pr-2 sm:pr-4">
              <div className="mb-2 sm:mb-3">
                <h4 className="font-bold text-foreground text-base sm:text-lg leading-tight mb-1 group-hover:text-amber-600 transition-colors duration-300">
                  {bonus.title}
                </h4>
                <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                  <Gift className="w-3 h-3" />
                  <span className="text-xs font-medium">Conteúdo Exclusivo</span>
                </div>
              </div>
              
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                {bonus.description}
              </p>
              
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 bg-amber-100/50 dark:bg-amber-900/20 px-2 py-1 rounded-full self-start">
                  <Sparkles className="w-3 h-3" />
                  <span className="font-medium hidden sm:inline">Bônus Premium</span>
                  <span className="font-medium sm:hidden">Premium</span>
                </div>
                
                <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 self-start sm:self-auto">
                  <Play className="w-3 h-3" />
                  <span>Acessar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-orange-500/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100"></div>
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100"></div>
          <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-amber-300 rounded-full opacity-0 group-hover:opacity-100"></div>
        </div>
      </div>

      {showModal && (
        <BonusModal 
          bonus={bonus} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};
