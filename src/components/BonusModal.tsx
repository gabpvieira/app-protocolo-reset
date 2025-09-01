
import React from 'react';
import { createPortal } from 'react-dom';
import { X, Play, Crown, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Bonus {
  id: number;
  title: string;
  description: string;
  icon: string;
  isPremium: boolean;
}

interface BonusModalProps {
  bonus: Bonus;
  onClose: () => void;
}

export const BonusModal: React.FC<BonusModalProps> = ({ bonus, onClose }) => {
  const navigate = useNavigate();

  const handleViewContent = () => {
    navigate(`/bonus/${bonus.id}`);
    onClose();
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src={(() => {
                  const imageMap: { [key: number]: string } = {
                    1: 'https://i.postimg.cc/CMRpCvNK/bonus1.png',
                    2: 'https://i.postimg.cc/T3686TXy/bonus2.png',
                    3: 'https://i.postimg.cc/ZK3k2CXt/bonus3.png',
                    4: 'https://i.postimg.cc/Vs2QKjGW/bonus4.png',
                    5: 'https://i.postimg.cc/wMCVDxkD/bonus5.png'
                  };
                  return imageMap[bonus.id] || `/text-contents/bonus-content/capas/bonus${bonus.id}.jpg`;
                })()}
                alt={bonus.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4" />
                <h3 className="text-lg font-semibold">Bônus Premium</h3>
              </div>
              <p className="text-amber-100 text-sm">Conteúdo Exclusivo</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h4 className="text-xl font-semibold text-foreground mb-3">
            {bonus.title}
          </h4>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {bonus.description}
          </p>

          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-300 mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium text-sm">Conteúdo Premium</span>
            </div>
            <p className="text-amber-600 dark:text-amber-400 text-sm">
              Este bônus exclusivo oferece estratégias avançadas para potencializar seus resultados no Protocolo Reset.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleViewContent}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Visualizar Conteúdo
            </button>
            
            <button 
              onClick={onClose}
              className="btn-secondary w-full"
            >
              Fechar Preview
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
