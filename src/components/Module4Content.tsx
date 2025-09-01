import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CheckCircle2, Circle, ArrowLeft, Clock, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/contexts/ProgressContext';
import { useToast } from '@/hooks/use-toast';

const Module4Content = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { progress, updateModuleProgress, updateModuleChecklist } = useProgress();
  
  const moduleId = 4;
  const moduleProgress = progress.modules.find(m => m.id === moduleId);
  
  const checklistItems = [
    "Aplique o Timing Metabólico em pelo menos 2 refeições principais",
    "Teste a Janela de Queima em um dos lanches do dia",
    "Implemente o Protocolo de Aceleração em uma refeição",
    "Monitore os sinais de fome e saciedade ao longo do dia",
    "Anote os resultados: energia, disposição e controle da fome"
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
      title: "Módulo 4 Concluído!",
      description: "Perfeito! Você dominou o Timing Metabólico. Módulo 5 desbloqueado!",
    });
    
    // Navigate to next module
    setTimeout(() => {
      navigate('/module/5');
    }, 2000);
  };

  const completedCount = checklist.filter(item => item.completed).length;
  const progressPercentage = (completedCount / checklist.length) * 100;
  const isModuleCompleted = moduleProgress?.completed || false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
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
            <h1 className="text-2xl font-bold">Módulo 4</h1>
            <p className="text-blue-100">Estratégia dos 21 Dias</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>35 min</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
            <span>{Math.round(progressPercentage)}% concluído</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Introduction */}
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">Aplicando Tudo na Prática</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Agora que você já entendeu o Reset Metabólico de 7 Dias e os 3 Gatilhos Alimentares, chegou o momento de aplicar 
                  tudo na prática com a <strong>Estratégia dos 21 Dias</strong>. Esse é o plano que vai consolidar sua evolução, 
                  transformar hábitos e mostrar resultados reais no espelho e na balança.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    💡 A boa notícia é que não existe segredo escondido: o que funciona é a <strong>consistência</strong>. 
                    Se você aplicar os gatilhos todos os dias, fizer as trocas inteligentes e seguir a rotina, 
                    seu corpo inevitavelmente vai responder.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Estrutura dos 21 Dias */}
        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              🔑 Estrutura dos 21 Dias
            </h3>
            <p className="text-gray-600 mb-6">Para facilitar, vamos dividir em 3 fases de 7 dias:</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Semana 1 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h4 className="font-bold text-gray-800">📅 Semana 1 – Reprogramação</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">Objetivo:</p>
                    <p className="text-gray-600 text-sm">Introduzir os gatilhos, reduzir inchaço e controlar a fome oculta</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">O que esperar:</p>
                    <p className="text-gray-600 text-sm">Menos compulsão, saciedade maior e até 2kg a menos</p>
                  </div>
                </div>
              </div>

              {/* Semana 2 */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h4 className="font-bold text-gray-800">📅 Semana 2 – Aceleração</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">Objetivo:</p>
                    <p className="text-gray-600 text-sm">Aumentar variedade de alimentos e intensificar os resultados</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">O que esperar:</p>
                    <p className="text-gray-600 text-sm">Emagrecimento visível (até 3kg), roupas mais folgadas</p>
                  </div>
                </div>
              </div>

              {/* Semana 3 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h4 className="font-bold text-gray-800">📅 Semana 3 – Estabilização</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">Objetivo:</p>
                    <p className="text-gray-600 text-sm">Consolidar hábitos, fortalecer metabolismo e evitar efeito sanfona</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">O que esperar:</p>
                    <p className="text-gray-600 text-sm">Até 5kg eliminados, corpo menos estufado, mais energia e leveza</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist Diário */}
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              ✅ Checklist Diário (Aplicação Prática)
            </h3>
            <p className="text-gray-600 mb-4">Todos os dias você deve:</p>
            <div className="space-y-3">
              {checklist.map((item, index) => (
                <div key={item.id} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
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
            
            <div className="mt-4 bg-white p-3 rounded-lg border border-blue-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progresso do Checklist</span>
                <span className="text-sm text-gray-600">{completedCount}/{checklist.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sugestões de Cardápio */}
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              🍳 Sugestões de Cardápio – 21 Dias
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Café da manhã */}
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  Café da manhã (Ativadores de queima)
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Omelete com espinafre + chá verde</li>
                  <li>• Pão integral com ovo mexido + café sem açúcar</li>
                  <li>• Iogurte natural + canela + 1 fruta</li>
                  <li>• Shake caseiro de banana + proteína em pó + gengibre</li>
                </ul>
                <div className="bg-yellow-100 p-3 rounded text-xs text-gray-600">
                  <strong>Substituições:</strong> Ovo → queijo branco ou peito de peru | Iogurte → kefir | Banana → maçã ou pera
                </div>
              </div>

              {/* Almoço */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Almoço (Estabilizador + proteína)
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Frango grelhado + arroz integral + feijão + salada</li>
                  <li>• Peixe assado + batata-doce + legumes no vapor</li>
                  <li>• Carne magra cozida + quinoa + brócolis</li>
                  <li>• Omelete de claras + lentilha + salada variada</li>
                </ul>
                <div className="bg-green-100 p-3 rounded text-xs text-gray-600">
                  <strong>Substituições:</strong> Arroz integral → batata-doce, quinoa | Feijão → lentilha | Frango → peixe ou ovos
                </div>
              </div>

              {/* Lanche da tarde */}
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  Lanche da tarde (Redutor da fome oculta)
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Iogurte natural + chia + frutas vermelhas</li>
                  <li>• Abacate amassado com cacau em pó (sem açúcar)</li>
                  <li>• Mix de castanhas (amêndoas, nozes, castanha-do-pará)</li>
                  <li>• Panqueca de banana + aveia</li>
                </ul>
                <div className="bg-orange-100 p-3 rounded text-xs text-gray-600">
                  <strong>Substituições:</strong> Castanhas → sementes (linhaça, chia) | Abacate → creme de iogurte com frutas
                </div>
              </div>

              {/* Jantar */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  Jantar (Leve e estabilizador)
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Sopa de legumes + frango desfiado</li>
                  <li>• Salada completa (folhas, frango grelhado, ovo cozido)</li>
                  <li>• Omelete de vegetais + batata-doce</li>
                  <li>• Peixe grelhado + legumes cozidos</li>
                </ul>
                <div className="bg-purple-100 p-3 rounded text-xs text-gray-600">
                  <strong>Substituições:</strong> Frango → atum ou ovo cozido | Sopa → creme de abóbora | Batata-doce → arroz integral
                </div>
              </div>
            </div>

            {/* Ritual antes de dormir */}
            <div className="mt-6 bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-indigo-600" />
                Ritual antes de dormir
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Chá de camomila, erva-doce ou capim-santo</li>
                <li>• Respiração profunda (5 minutos)</li>
                <li>• Evitar celular até 30 minutos antes de dormir</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Exemplo de Planner */}
        <Card className="border-l-4 border-l-teal-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              📅 Exemplo de Planner – Primeira Semana
            </h3>
            <div className="space-y-3">
              {[
                "Dia 1: Omelete + chá verde | Frango + arroz integral | Iogurte + chia | Sopa de legumes | Chá",
                "Dia 2: Pão integral + ovo mexido | Peixe + batata-doce | Abacate com cacau | Omelete de vegetais | Chá",
                "Dia 3: Shake de banana + gengibre | Carne magra + quinoa | Mix de castanhas | Salada completa | Chá",
                "Dia 4: Iogurte natural + fruta | Frango + lentilha | Panqueca de banana + aveia | Peixe + legumes | Chá",
                "Dia 5: Omelete com espinafre | Peixe + arroz integral | Iogurte + frutas vermelhas | Sopa de abóbora | Chá",
                "Dia 6: Pão integral + ovo | Carne + feijão + salada | Abacate + cacau | Omelete de vegetais | Chá",
                "Dia 7: Shake caseiro + gengibre | Frango + batata-doce | Castanhas | Salada completa | Chá"
              ].map((day, index) => (
                <div key={index} className="bg-teal-50 p-3 rounded-lg border border-teal-200">
                  <p className="text-sm text-gray-700">{day}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dicas para Consistência */}
        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Dicas para manter a consistência</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">📝 Use lista de compras semanal para não faltar alimentos-chave</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">🍽️ Prepare refeições simples, evite receitas complexas</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">🔄 Se tiver deslize, volte no próximo prato (não espere até o dia seguinte)</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">📸 Tire fotos semanais → o progresso visual é mais motivador que a balança</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Final */}
        <Card className="border-l-4 border-l-indigo-500 bg-gradient-to-r from-indigo-50 to-purple-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              ⚡ Resumo Final do Módulo
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              A <strong>Estratégia dos 21 Dias</strong> não é uma dieta, é uma reeducação metabólica. Você vai aprender a organizar refeições, 
              usar os gatilhos de forma inteligente e adotar trocas que fazem diferença no longo prazo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Em 21 dias, seu corpo estará mais leve, seu metabolismo mais ativo e sua mente mais confiante para continuar 
              sem nunca mais cair no ciclo das dietas restritivas.
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            onClick={handleComplete}
            disabled={isModuleCompleted}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 text-lg font-semibold disabled:opacity-50"
          >
            {isModuleCompleted ? '✅ Módulo Concluído!' : 'Marcar como Concluído'}
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-50 py-3 text-lg"
          >
            Voltar ao Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Module4Content;