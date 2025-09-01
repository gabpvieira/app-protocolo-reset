
import React from 'react';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Module1Content from './Module1Content';
import Module2Content from './Module2Content';
import Module3Content from './Module3Content';
import Module4Content from './Module4Content';
import Module5Content from './Module5Content';
import Module6Content from './Module6Content';
import Bonus1Content from './Bonus1Content';
import Bonus2Content from './Bonus2Content';
import Bonus3Content from './Bonus3Content';
import Bonus4Content from './Bonus4Content';
import Bonus5Content from './Bonus5Content';

export const ContentPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  
  const isModule = location.pathname.includes('/module/');
  const title = isModule ? `Módulo ${id}` : `Bônus ${id}`;
  const subtitle = isModule ? 'Protocolo Reset da Barriga' : 'Conteúdo Premium';

  // Render specific content for modules
  if (isModule && id === '1') {
    return <Module1Content />;
  }
  
  if (isModule && id === '2') {
    return <Module2Content />;
  }
  
  if (isModule && id === '3') {
    return <Module3Content />;
  }
  
  if (isModule && id === '4') {
     return <Module4Content />;
   }
   
   if (isModule && id === '5') {
     return <Module5Content />;
   }
   
   if (isModule && id === '6') {
     return <Module6Content />;
   }

  // Render specific content for bonuses
  if (!isModule && id === '1') {
    return <Bonus1Content />;
  }
  
  if (!isModule && id === '2') {
    return <Bonus2Content />;
  }
  
  if (!isModule && id === '3') {
    return <Bonus3Content />;
  }
  
  if (!isModule && id === '4') {
    return <Bonus4Content />;
  }
  
  if (!isModule && id === '5') {
    return <Bonus5Content />;
  }

  const handleComplete = () => {
    // Here you would save progress to Airtable
    console.log(`Completed ${type} ${id}`);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`${isModule ? 'bg-gradient-to-r from-mint-500 to-mint-600' : 'bg-gradient-to-r from-amber-500 to-amber-600'} text-white p-4`}>
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div>
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-sm opacity-90">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm opacity-90">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>25 min</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            <span>0% concluído</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="premium-card p-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📝</span>
            </div>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Conteúdo em Configuração
            </h2>
            
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 mb-6">
              <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-2">
                SEU TEXTO AQUI
              </p>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                Este espaço será preenchido com o conteúdo específico do {isModule ? 'módulo' : 'bônus'}.
              </p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleComplete}
                className="btn-hero w-full"
              >
                Marcar como Concluído
              </button>
              
              <button 
                onClick={() => navigate('/')}
                className="btn-secondary w-full"
              >
                Voltar ao Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
