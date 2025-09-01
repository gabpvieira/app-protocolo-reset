import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, Clock, Target, Lightbulb, Zap, Calendar, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useProgress } from '@/contexts/ProgressContext';

interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

const Module2Content = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { progress, updateModuleProgress, updateModuleChecklist } = useProgress();
  
  const moduleId = 2;
  const moduleProgress = progress.modules.find(m => m.id === moduleId);
  
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: '1', text: 'Defina seu horário fixo para as 3 principais refeições', completed: false },
    { id: '2', text: 'Adicione pelo menos 1 alimento resetador em cada refeição', completed: false },
    { id: '3', text: 'Evite picos de glicose: sempre combine carboidratos com fibras ou proteínas', completed: false },
    { id: '4', text: 'Reserve 5 minutos antes de dormir para um ritual de relaxamento', completed: false },
    { id: '5', text: 'Anote diariamente: nível de energia, fome, humor e peso (se desejar)', completed: false }
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
        description: "Excelente! Você está no caminho certo para resetar seu metabolismo.",
      });
    }
  };

  const completeModule = () => {
    updateModuleProgress(moduleId, true);
    
    toast({
      title: "Módulo 2 Concluído!",
      description: "Parabéns! Você dominou o Reset Metabólico de 7 Dias. Módulo 3 desbloqueado!",
    });
    
    // Navigate to next module
    setTimeout(() => {
      navigate('/module/3');
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
            <h1 className="text-lg font-semibold">Módulo 2 - Reset Metabólico de 7 Dias</h1>
            <p className="text-sm opacity-90">Protocolo Reset da Barriga</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Título Principal */}
          <div className="text-center">
            <div className="w-16 h-16 bg-mint-100 dark:bg-mint-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-mint-600 dark:text-mint-400" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              📘 Módulo 2 – Reset Metabólico de 7 Dias
            </h2>
          </div>

          {/* Introdução */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Agora que você entendeu a lógica por trás do <strong className="text-mint-600 dark:text-mint-400">Protocolo Reset da Barriga</strong>, é hora de entrar na primeira etapa prática: o <strong className="text-foreground">Reset Metabólico de 7 Dias</strong>. Este é o ponto de partida para acordar o metabolismo, reduzir o inchaço, controlar a fome e mostrar ao seu corpo que algo diferente e positivo está acontecendo.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                O grande erro das dietas tradicionais é tentar forçar mudanças radicais logo no início. Cortam carboidratos, retiram grupos inteiros de alimentos e exigem rotinas impossíveis de manter. Isso até pode trazer um resultado rápido, mas é insustentável. Em poucos dias, o corpo se rebela, os hormônios do apetite disparam e você volta à estaca zero.
              </p>
              
              <div className="bg-gradient-to-r from-mint-50 to-mint-100 dark:from-mint-900/20 dark:to-mint-800/20 rounded-lg p-6 border border-mint-200 dark:border-mint-700">
                <p className="text-lg font-semibold text-mint-700 dark:text-mint-300 mb-2">
                  O Reset Metabólico de 7 Dias não é sobre restrição, e sim sobre <strong>reprogramação</strong>.
                </p>
                <p className="text-mint-600 dark:text-mint-400">
                  O objetivo é ajustar os hormônios ligados à fome e ao acúmulo de gordura (como a insulina, a leptina e o cortisol), usando pequenas mudanças estratégicas. Em vez de privar, você vai dar ao corpo exatamente os estímulos certos para que ele volte a queimar energia de forma eficiente.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* O que você vai conseguir */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-7 h-7 text-mint-500" />
                Durante esses 7 dias, você vai:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                  <p className="text-lg text-blue-700 dark:text-blue-300">
                    <strong>Reduzir o inchaço</strong> causado por retenção de líquidos e excesso de sódio.
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                  <p className="text-lg text-green-700 dark:text-green-300">
                    <strong>Aumentar a energia</strong> ao equilibrar picos de glicose e evitar quedas bruscas.
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                  <p className="text-lg text-purple-700 dark:text-purple-300">
                    <strong>Controlar a fome oculta</strong>, aquela vontade de comer que não vem da necessidade real, mas de desequilíbrios hormonais.
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                  <p className="text-lg text-orange-700 dark:text-orange-300">
                    <strong>Acelerar o metabolismo</strong> com pequenas mudanças em horários, combinações de alimentos e hábitos diários.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg p-6 mt-6 border border-amber-200 dark:border-amber-700">
                <p className="text-lg font-medium text-amber-800 dark:text-amber-200 mb-2">
                  👉 <strong>Exemplo prático:</strong>
                </p>
                <p className="text-amber-700 dark:text-amber-300">
                  Muitas pessoas relatam que, já nos primeiros 3 dias, conseguem acordar com a barriga menos estufada e sentir a roupa mais solta. Esse é o tipo de progresso que aumenta a confiança e mostra que o método é real.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Como aplicar */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Lightbulb className="w-7 h-7 text-mint-500" />
                🔑 Como aplicar o Reset Metabólico de 7 Dias
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-mint-500 pl-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Organize sua rotina de refeições
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    Em vez de cortar grupos de alimentos, vamos reorganizar horários e combinações.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Inclua os alimentos "resetadores"
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    São alimentos que ativam a queima de gordura e regulam hormônios (lista no próximo módulo, nos 3 Gatilhos Alimentares).
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Controle o estresse e o sono
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    Altos níveis de estresse e noites mal dormidas aumentam o cortisol, que trava o emagrecimento. Por isso, o Reset já inclui técnicas simples para melhorar esse ponto.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Monitore seu progresso
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    Não apenas na balança, mas também na energia, disposição e bem-estar.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Checklist Prático */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Calendar className="w-7 h-7 text-mint-500" />
                ✅ Checklist Prático – 7 Dias de Reset
              </h3>
              
              <div className="space-y-4">
                {checklist.map((item) => (
                  <div key={item.id} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
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

          {/* Resultados Esperados */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="w-7 h-7 text-mint-500" />
                ⚡ O que esperar ao final dos 7 dias:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-mint-50 to-mint-100 dark:from-mint-900/20 dark:to-mint-800/20 rounded-lg p-6 border border-mint-200 dark:border-mint-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-mint-500 text-white rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-mint-700 dark:text-mint-300">
                      Menos inchaço abdominal
                    </h4>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300">
                      1 a 3kg a menos, de forma saudável
                    </h4>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 border border-green-200 dark:border-green-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-green-700 dark:text-green-300">
                      Mais energia ao acordar
                    </h4>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-purple-700 dark:text-purple-300">
                      Diminuição da compulsão por doces
                    </h4>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusão */}
          <Card>
            <CardContent className="p-8">
              <div className="bg-gradient-to-r from-mint-50 to-mint-100 dark:from-mint-900/20 dark:to-mint-800/20 rounded-lg p-6 text-center">
                <p className="text-xl font-semibold text-mint-700 dark:text-mint-300 mb-4">
                  <strong>Esse é apenas o aquecimento do protocolo.</strong>
                </p>
                
                <p className="text-lg text-mint-600 dark:text-mint-400">
                  A partir daqui, você já vai sentir que o corpo está respondendo, o metabolismo está mais ativo e a vontade de continuar será natural.
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
                {isModuleCompleted ? '✅ Módulo Concluído!' : 'Concluir Módulo 2'}
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

export default Module2Content;