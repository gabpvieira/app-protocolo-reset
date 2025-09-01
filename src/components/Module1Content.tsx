import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Target, BookOpen, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useProgress } from '@/contexts/ProgressContext';

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

const Module1Content = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { progress, updateModuleProgress, updateModuleChecklist } = useProgress();
  
  const moduleId = 1;
  const moduleProgress = progress.modules.find(m => m.id === moduleId);
  
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: '1', text: 'Estabeleça um objetivo pessoal (ex: perder 3kg, reduzir inchaço, ganhar energia)', completed: false },
    { id: '2', text: 'Separe um caderno ou use o app para anotar sua evolução', completed: false },
    { id: '3', text: 'Escolha um dia para começar oficialmente e se comprometa com os próximos 21 dias', completed: false },
    { id: '4', text: 'Prepare sua casa com alimentos básicos do protocolo (lista no próximo módulo)', completed: false },
    { id: '5', text: 'Lembre-se: não existe perfeição, existe progresso', completed: false }
  ]);
  
  // Load checklist from context on component mount
  useEffect(() => {
    if (moduleProgress?.checklist) {
      setChecklist(moduleProgress.checklist);
    }
  }, [moduleProgress]);

  const toggleChecklistItem = (id: string) => {
    const updatedChecklist = checklist.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setChecklist(updatedChecklist);
    updateModuleChecklist(moduleId, updatedChecklist);
    
    const item = checklist.find(item => item.id === id);
    if (item && !item.completed) {
      toast({
        title: "Item concluído!",
        description: "Parabéns por dar mais um passo rumo à sua transformação.",
      });
    }
  };

  const completeModule = () => {
    updateModuleProgress(moduleId, {
      completed: true,
      completedAt: new Date().toISOString(),
      checklist
    });
    
    toast({
      title: "Módulo 1 Concluído!",
      description: "Parabéns! Você está pronto para começar sua jornada de transformação. Módulo 2 desbloqueado!",
    });
    
    // Navigate to next module or dashboard
    setTimeout(() => {
      navigate('/module/2');
    }, 2000);
  };
  
  const completedItems = checklist.filter(item => item.completed).length;
  const progressPercentage = Math.round((completedItems / checklist.length) * 100);
  const isModuleCompleted = moduleProgress?.completed || false;

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-mint-500 to-mint-600 text-white p-4">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Módulo 1 - Boas-vindas ao Reset</h1>
            <p className="text-sm opacity-90">Protocolo Reset da Barriga</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Título Principal */}
          <div className="text-center">
            <div className="w-16 h-16 bg-mint-100 dark:bg-mint-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-mint-600 dark:text-mint-400" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              📘 Módulo 1 – Boas-vindas ao Reset
            </h2>
          </div>

          {/* Introdução */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Você está prestes a iniciar uma das etapas mais importantes da sua vida: o momento de dar um <strong className="text-foreground">"reset" no seu corpo</strong> e, principalmente, na forma como você se relaciona com a comida e com o seu metabolismo.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                O <strong className="text-mint-600 dark:text-mint-400">Protocolo Reset da Barriga</strong> não é mais uma dieta da moda, nem uma fórmula milagrosa. Aqui, você não vai ouvir que precisa cortar tudo o que gosta, nem viver à base de restrições impossíveis de sustentar.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                O que você vai aprender é um <strong className="text-foreground">método simples, prático e educativo</strong>, pensado para funcionar na vida real, mesmo para quem tem rotina corrida, pouco tempo ou já tentou de tudo e não conseguiu manter os resultados.
              </p>
            </CardContent>
          </Card>

          {/* Por que as dietas falham */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-7 h-7 text-red-500" />
                Por que as dietas tradicionais falham?
              </h3>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                A verdade é que a maioria das dietas tradicionais falham porque colocam você em um <strong className="text-red-600 dark:text-red-400">ciclo de restrição e compulsão</strong>.
              </p>
              
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  No início, até parece que funciona: você perde peso rápido porque corta carboidratos, doces ou calorias de forma drástica. Mas logo o corpo percebe essa falta de energia e <strong className="text-red-700 dark:text-red-300">reduz o metabolismo</strong>, como uma forma de proteção.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-red-700 dark:text-red-300">Resultado?</strong> Você para de emagrecer, sente mais fome, perde energia e, quando volta a comer normalmente, recupera todo o peso – muitas vezes até mais. Esse é o famoso <strong className="text-red-700 dark:text-red-300">efeito sanfona</strong>, que destrói não só os resultados, mas também a autoestima.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Os 3 Princípios */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Lightbulb className="w-7 h-7 text-mint-500" />
                Os 3 Princípios Fundamentais do Reset
              </h3>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                O <strong className="text-mint-600 dark:text-mint-400">Reset da Barriga</strong> foi criado para quebrar esse ciclo de uma vez por todas. O objetivo é <strong className="text-foreground">reativar o metabolismo de forma natural</strong>, usando três princípios fundamentais:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                        Ativar a queima de gordura com alimentos estratégicos
                      </h4>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 border border-green-200 dark:border-green-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                        Reduzir a fome oculta e a compulsão por doces, equilibrando hormônios ligados ao apetite
                      </h4>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 border border-purple-200 dark:border-purple-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                    <div>
                      <h4 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                        Estabilizar os resultados, para que você nunca mais precise recomeçar do zero
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Próximos 21 dias */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Seus Próximos 21 Dias
              </h3>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Nos próximos <strong className="text-mint-600 dark:text-mint-400">21 dias</strong>, você terá acesso a um guia simples e estruturado para colocar esses princípios em prática. A cada módulo, você vai aprender um passo importante e terá <strong className="text-foreground">checklists claros</strong> para aplicar imediatamente.
              </p>
              
              <div className="bg-mint-50 dark:bg-mint-900/20 border border-mint-200 dark:border-mint-700 rounded-lg p-6 mb-6">
                <p className="text-lg leading-relaxed text-mint-700 dark:text-mint-300 mb-4">
                  <strong>Esse não é um protocolo de "tudo ou nada":</strong> se em algum momento você cometer deslizes, não precisa desistir. O método foi desenhado justamente para que seja possível retomar rápido, sem culpa, sem frustração e sem perder o progresso.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                O mais importante aqui não é a pressa em perder peso, mas a <strong className="text-foreground">consistência</strong>. Seguindo o Reset, você pode eliminar até <strong className="text-mint-600 dark:text-mint-400">5kg em 21 dias</strong>, mas, mais do que isso, você vai sentir o corpo menos inchado, mais leve e com muito mais energia.
              </p>
              
              <div className="bg-gradient-to-r from-mint-50 to-mint-100 dark:from-mint-900/20 dark:to-mint-800/20 rounded-lg p-6">
                <p className="text-lg font-semibold text-mint-700 dark:text-mint-300">
                  <strong>Esse é o verdadeiro diferencial:</strong> não estamos apenas falando em emagrecimento, mas em <strong>reeducação metabólica</strong>, algo que vai beneficiar sua saúde no longo prazo.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Checklist */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-7 h-7 text-green-500" />
                👉 Checklist Inicial – Preparando-se para o Reset
              </h3>
              
              <div className="space-y-4">
                {checklist.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 p-4 rounded-lg border border-muted hover:bg-muted/50 transition-colors">
                    <button
                      onClick={() => toggleChecklistItem(item.id)}
                      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 mt-1 ${
                        item.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-muted-foreground hover:border-green-400'
                      }`}
                    >
                      {item.completed && <CheckCircle className="w-4 h-4" />}
                    </button>
                    <span className={`flex-1 text-lg leading-relaxed ${
                      item.completed ? 'text-muted-foreground line-through' : 'text-foreground'
                    }`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Conclusão */}
          <Card>
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-mint-50 to-mint-100 dark:from-mint-900/20 dark:to-mint-800/20 rounded-lg p-6 text-center">
                <p className="text-xl font-semibold text-mint-700 dark:text-mint-300 mb-4">
                  <strong>Lembre-se: não existe perfeição, existe progresso.</strong>
                </p>
                
                <p className="text-lg text-mint-600 dark:text-mint-400">
                  Esse é o primeiro passo da sua jornada. Ao terminar este módulo, você já deve entender que o Reset da Barriga não é mais uma dieta, mas sim uma <strong>forma inteligente e realista</strong> de ensinar seu corpo a queimar gordura de forma sustentável.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Botão de conclusão */}
          <div className="text-center pt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={completeModule}
                disabled={isModuleCompleted}
                size="lg"
                className="flex-1 bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-lg px-8 py-4 disabled:opacity-50"
              >
                {isModuleCompleted ? '✅ Módulo Concluído!' : 'Concluir Módulo 1'}
                <CheckCircle className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                size="lg"
                className="flex-1 border-mint-300 text-mint-600 hover:bg-mint-50 text-lg px-8 py-4"
              >
                Voltar ao Dashboard
              </Button>
            </div>
            
            {/* Progress indicator */}
            <div className="mt-4 bg-white p-4 rounded-lg border border-mint-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progresso do Módulo</span>
                <span className="text-sm text-gray-600">{completedItems}/{checklist.length} itens</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-mint-500 to-mint-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{progressPercentage}% concluído</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module1Content;