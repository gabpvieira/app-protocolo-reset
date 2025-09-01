import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CheckCircle2, Circle, ArrowLeft, TrendingUp, Camera, Ruler, Scale, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/contexts/ProgressContext';
import { useToast } from '@/hooks/use-toast';

const Module5Content = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { progress, updateModuleProgress, updateModuleChecklist } = useProgress();
  
  const moduleId = 5;
  const moduleProgress = progress.modules.find(m => m.id === moduleId);
  
  const checklistItems = [
    "Tire fotos semanais para acompanhar evolução",
    "Registre medidas corporais a cada 7 dias",
    "Mantenha pelo menos 2 gatilhos alimentares por dia",
    "Planeje 80% das refeições saudáveis, 20% de flexibilidade",
    "Continue monitorando energia, disposição e sono",
    "Crie metas curtas (ex: mais 2kg em 30 dias, correr 5km, vestir aquela roupa guardada)"
  ];
  
  const [checklist, setChecklist] = useState(checklistItems.map((item, index) => ({
    id: (index + 1).toString(),
    text: item,
    completed: false
  })));
  
  // Load checklist from context on component mount
  useEffect(() => {
    if (moduleProgress?.checklist) {
      setChecklist(moduleProgress.checklist);
    }
  }, [moduleProgress]);

  const handleCheckItem = (index: number) => {
    const updatedChecklist = checklist.map((item, i) => 
      i === index ? { ...item, completed: !item.completed } : item
    );
    setChecklist(updatedChecklist);
    updateModuleChecklist(moduleId, updatedChecklist);
  };

  const handleComplete = () => {
    updateModuleProgress(moduleId, {
      completed: true,
      completedAt: new Date().toISOString(),
      checklist
    });
    
    toast({
      title: "Módulo 5 Concluído!",
      description: "Parabéns! Você dominou os Resultados & Continuidade. Agora você sabe como manter seus resultados!",
    });
  };

  const completedCount = checklist.filter(item => item.completed).length;
  const progressPercentage = (completedCount / checklist.length) * 100;
  const isModuleCompleted = moduleProgress?.completed || false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/20 p-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Módulo 5</h1>
            <p className="text-green-100">Resultados & Continuidade</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>25 min</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            <span>{Math.round(progressPercentage)}% concluído</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Introduction */}
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">🎉 Parabéns por chegar até aqui!</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chegar até aqui já é uma conquista. Muitas pessoas abandonam dietas nos primeiros dias porque não percebem 
                  mudanças rápidas, mas você conseguiu avançar e aplicar o Reset da Barriga até esta etapa.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Agora, é hora de falar sobre algo fundamental: como medir seus resultados de forma correta e como manter 
                  tudo o que conquistou sem cair no efeito sanfona.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Por que a balança engana */}
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Scale className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🔑 Por que a balança engana</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  É natural querer subir na balança todos os dias e esperar ver números menores. Mas aqui vai uma verdade 
                  que pouca gente fala: <strong>a balança não é o melhor indicador de progresso</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ela mostra apenas o peso total do seu corpo, sem diferenciar se você perdeu gordura, ganhou massa magra 
                  ou simplesmente eliminou líquidos.
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-3">Por isso, durante o Protocolo Reset da Barriga, é comum que:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Nos primeiros dias você elimine bastante líquido e veja a balança cair</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Depois, o corpo estabilize e mesmo assim continue mudando (perda de medidas, roupas mais soltas, barriga menos inchada)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Às vezes, a balança pode até subir um pouco, mas sua cintura diminuir — porque você ganhou massa magra ao mesmo tempo em que perdeu gordura</span>
                    </li>
                  </ul>
                  <p className="text-red-700 font-medium mt-4">
                    👉 Por isso, medir apenas o peso pode gerar frustração desnecessária.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Como medir o progresso corretamente */}
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              ✅ Como medir o progresso corretamente
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Fotos de evolução */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="h-5 w-5 text-blue-600" />
                  <h4 className="font-bold text-gray-800">📸 Fotos de evolução</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Tire fotos de frente, lado e costas a cada 7 dias</li>
                  <li>• Use a mesma roupa, no mesmo local e iluminação</li>
                  <li>• Compare após 21 dias: você verá mudanças que a balança não mostra</li>
                </ul>
              </div>

              {/* Medidas corporais */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Ruler className="h-5 w-5 text-purple-600" />
                  <h4 className="font-bold text-gray-800">📏 Medidas corporais</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cintura (na altura do umbigo)</li>
                  <li>• Quadril</li>
                  <li>• Coxas</li>
                  <li>• Braços</li>
                </ul>
                <div className="bg-purple-100 p-2 rounded text-xs text-purple-700 mt-3">
                  <strong>📌 Dica:</strong> anote no início e refaça a cada semana
                </div>
              </div>

              {/* Roupas como referência */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-5 w-5 text-green-600" />
                  <h4 className="font-bold text-gray-800">👗 Roupas como referência</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Escolha uma calça ou vestido que esteja justo no início</li>
                  <li>• Use como "termômetro" do progresso</li>
                  <li>• Muitas vezes, a roupa vai mostrar a evolução antes da balança</li>
                </ul>
              </div>

              {/* Nível de energia */}
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-bold text-gray-800">⚡ Nível de energia e disposição</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Anote diariamente sua energia (baixa, média, alta)</li>
                  <li>• Observe como você acorda: cansado ou disposto?</li>
                  <li>• Esse é um dos sinais mais importantes de que o metabolismo está ativo</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* O que esperar após os 21 dias */}
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🔑 O que esperar após os 21 dias
            </h3>
            <p className="text-gray-600 mb-4">
              Seguindo corretamente, você pode eliminar entre <strong>3 e 5kg de gordura</strong>, mas o mais importante é:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Reduzir a barriga estufada causada por retenção e má digestão",
                "Controlar a compulsão por doces",
                "Sentir-se mais leve, com energia e autoestima renovada",
                "Aprender uma rotina alimentar realista que pode ser mantida no longo prazo"
              ].map((benefit, index) => (
                <div key={index} className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <p className="text-sm text-gray-700 flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Continuidade */}
        <Card className="border-l-4 border-l-indigo-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🔄 Continuidade: como manter os resultados
            </h3>
            <p className="text-gray-600 mb-6">
              O maior erro das dietas é terminar um ciclo e voltar aos hábitos antigos. Por isso, a continuidade é a chave. 
              Após os 21 dias, siga essas estratégias:
            </p>
            
            <div className="space-y-4">
              {/* Mantenha os gatilhos */}
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-gray-800 mb-2">🎯 Mantenha os gatilhos alimentares</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Continue aplicando pelo menos 2 gatilhos por dia</li>
                  <li>• Exemplo: café da manhã com ativador de queima e lanche da tarde com redutor da fome oculta</li>
                </ul>
              </div>

              {/* Regra 80/20 */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-gray-800 mb-2">⚖️ Use a regra 80/20</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 80% do tempo siga o protocolo</li>
                  <li>• 20% do tempo se permita comer algo que gosta, sem culpa</li>
                  <li>• Isso evita compulsões e mantém equilíbrio</li>
                </ul>
              </div>

              {/* Planeje refeições */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-gray-800 mb-2">📋 Planeje suas refeições</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Separe 10 minutos por semana para planejar o cardápio básico</li>
                  <li>• Tenha sempre alimentos-chave em casa (ovos, arroz integral, legumes, frutas, castanhas)</li>
                </ul>
              </div>

              {/* Rotina de sono */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-gray-800 mb-2">😴 Rotina de sono e estresse</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Continue cuidando do sono, pois noites mal dormidas aumentam o cortisol</li>
                  <li>• Mantenha pequenos rituais de relaxamento (respiração, chá, leitura)</li>
                </ul>
              </div>

              {/* Acompanhamento */}
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-gray-800 mb-2">📊 Mantenha o acompanhamento</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Continue tirando fotos e anotando medidas a cada 15 dias</li>
                  <li>• Isso ajuda a manter a motivação mesmo sem mudanças visíveis na balança</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist da Continuidade */}
        <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              ✅ Checklist da Continuidade
            </h3>
            <div className="space-y-3">
              {checklist.map((item, index) => (
                 <div key={item.id} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-100">
                  <button
                    onClick={() => handleCheckItem(index)}
                    className="mt-0.5 flex-shrink-0"
                  >
                    {item.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <Circle className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  <span className={`text-sm ${item.completed ? 'text-green-700 line-through' : 'text-gray-700'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 bg-white p-3 rounded-lg border border-green-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progresso do Checklist</span>
                <span className="text-sm text-gray-600">{completedCount}/{checklist.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{progressPercentage}% concluído</p>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Final */}
        <Card className="border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              ⚡ Resumo Final do Módulo
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Os resultados do <strong>Protocolo Reset da Barriga</strong> vão muito além do peso na balança. Você aprendeu a medir 
              progresso de forma inteligente e a manter os ganhos sem precisar recomeçar do zero.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Essa é a verdadeira vitória: criar um estilo de vida que mantém seu corpo leve, ativo e saudável.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Agora, ao concluir esse módulo, você não só alcançou mudanças físicas, mas também conquistou um novo entendimento 
              sobre o seu corpo e metabolismo. Isso te dá liberdade para nunca mais depender de dietas restritivas.
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            onClick={handleComplete}
            disabled={isModuleCompleted}
            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 text-lg font-semibold disabled:opacity-50"
          >
            {isModuleCompleted ? '✅ Módulo Concluído!' : 'Marcar como Concluído'}
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex-1 border-green-300 text-green-600 hover:bg-green-50 py-3 text-lg"
          >
            Voltar ao Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Module5Content;