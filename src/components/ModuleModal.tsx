
import React from 'react';
import { createPortal } from 'react-dom';
import { X, Play, Clock, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Module {
  id: number;
  title: string;
  description: string;
  icon: string;
  progress: number;
  duration: string;
}

interface ModuleModalProps {
  module: Module;
  onClose: () => void;
}

export const ModuleModal: React.FC<ModuleModalProps> = ({ module, onClose }) => {
  const navigate = useNavigate();

  const handleViewContent = () => {
    navigate(`/module/${module.id}`);
    onClose();
  };

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-mint-500 to-mint-600 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src={`/text-contents/capas-modulos/md${module.id}.jpg`}
                alt={`Capa do ${module.title}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback para o ícone caso a imagem não carregue
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                    fallback.classList.add('text-2xl');
                  }
                }}
              />
              <span style={{display: 'none'}} className="text-2xl">{module.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Módulo {module.id}</h3>
              <p className="text-mint-100 text-sm">Protocolo Reset da Barriga</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h4 className="text-xl font-semibold text-foreground mb-3">
            {module.title}
          </h4>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {module.description}
          </p>

          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{module.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Target className="w-4 h-4" />
              <span>Progresso: {module.progress}%</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleViewContent}
              className="btn-hero w-full flex items-center justify-center gap-2"
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
