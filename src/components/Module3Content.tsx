import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CheckCircle2, Circle, ArrowLeft, Zap, Heart, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '@/contexts/ProgressContext';
import { useToast } from '@/hooks/use-toast';

const Module3Content = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { progress, updateModuleProgress, updateModuleChecklist } = useProgress();
  
  const moduleId = 3;
  const moduleProgress = progress.modules.find(m => m.id === moduleId);
  
  const checklistItems = [
    "Inclua 2 ativadores de queima ao longo do dia",
    "Consuma 1 redutor da fome oculta nos lanches ou no jantar",
    "Garanta 1 estabilizador do peso em pelo menos uma refeição principal",
    "Anote diariamente: saciedade, compulsão por doces e energia"
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
      title: "Módulo 3 Concluído!",
      description: "Excelente! Você dominou os 3 Gatilhos Alimentares. Módulo 4 desbloqueado!",
    });
    
    // Navigate to next module
    setTimeout(() => {
      navigate('/module/4');
    }, 2000);
  };

  const completedCount = checklist.filter(item => item.completed).length;
  const progressPercentage = (completedCount / checklist.length) * 100;
  const isModuleCompleted = moduleProgress?.completed || false;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
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
            <h1 className="text-2xl font-bold">Módulo 3</h1>
            <p className="text-orange-100">Os 3 Gatilhos Alimentares</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>30 min</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
            <span>{Math.round(progressPercentage)}% concluído</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Introduction */}
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">O Ponto Central do Protocolo Reset</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Chegamos ao ponto central do Protocolo Reset da Barriga: os <strong>3 Gatilhos Alimentares</strong>. 
                  Eles são o diferencial que torna este método tão eficaz, porque atacam as três maiores barreiras do emagrecimento real:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Um metabolismo lento que não consegue queimar calorias de forma eficiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>A fome emocional e a compulsão por doces, que sabotam qualquer dieta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>O efeito sanfona, que faz o peso voltar sempre que a dieta acaba</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Diferente de planos restritivos que apenas reduzem calorias, os gatilhos foram criados para 
                  ensinar o corpo a funcionar a seu favor, regulando os hormônios e acelerando processos internos que estavam "travados".
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gatilho 1 */}
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  🔑 Gatilho 1 – O Ativador de Queima
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Esse é o gatilho que coloca o corpo em modo de queima acelerada. Imagine seu metabolismo como uma fogueira: 
                  se você não alimenta corretamente, o fogo apaga; se você alimenta demais e de forma errada, ele se apaga sufocado. 
                  O ativador de queima é o "lenho certo" para manter a chama acesa na intensidade ideal.
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Como funciona:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Estimula a termogênese natural, processo no qual o corpo gasta mais calorias para digerir determinados alimentos</li>
                    <li>• Fornece proteínas e nutrientes que mantêm a saciedade por mais tempo, evitando ataques de fome</li>
                    <li>• Dá suporte ao ganho de energia, evitando o cansaço comum das dietas tradicionais</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Exemplos de alimentos ativadores:</h4>
                    <p className="text-gray-600 text-sm">Ovos, frango, peixe, chá verde, gengibre, pimenta, canela</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Como aplicar:</h4>
                    <p className="text-gray-600 text-sm">Inclua pelo menos 2 ativadores por dia: no café da manhã e no almoço</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <p className="text-green-800 text-sm">
                    <strong>👉 Resultado esperado:</strong> Logo nos primeiros dias, você perceberá um aumento de energia 
                    e uma sensação de saciedade maior entre as refeições.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gatilho 2 */}
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  🔑 Gatilho 2 – O Redutor da Fome Oculta
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Esse é o mais poderoso para quem sofre com compulsão por doces ou lanches fora de hora. 
                  A chamada "fome oculta" não vem da necessidade real de energia, mas sim do desequilíbrio nos 
                  hormônios do apetite (insulina, leptina e grelina).
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Como funciona:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Ajuda a equilibrar a insulina, evitando picos e quedas bruscas de glicose que provocam compulsão</li>
                    <li>• Regula a leptina, o hormônio da saciedade, que em muitas pessoas está "adormecido"</li>
                    <li>• Gera uma sensação de bem-estar que reduz a necessidade de buscar conforto emocional em doces</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Exemplos de alimentos redutores:</h4>
                    <p className="text-gray-600 text-sm">Abacate, castanhas, amêndoas, chia, linhaça, banana, aveia</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Como aplicar:</h4>
                    <p className="text-gray-600 text-sm">Use entre refeições ou junto de pratos principais</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <p className="text-green-800 text-sm">
                    <strong>👉 Resultado esperado:</strong> Em poucos dias, você notará uma redução da vontade 
                    de atacar doces à noite, e maior controle sobre beliscar fora de hora.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gatilho 3 */}
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  🔑 Gatilho 3 – O Estabilizador do Peso
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Esse é o gatilho responsável por eliminar de vez o efeito sanfona. Muitas pessoas até conseguem 
                  emagrecer por um curto período, mas sem um estabilizador o corpo entende que está "em risco" 
                  e faz de tudo para recuperar o peso perdido.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Como funciona:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Garante que o metabolismo não desacelere depois das primeiras semanas</li>
                    <li>• Mantém a glicemia estável, evitando estocagem desnecessária de gordura</li>
                    <li>• Fortalece o equilíbrio hormonal de longo prazo, criando um ambiente metabólico saudável</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Exemplos de alimentos estabilizadores:</h4>
                    <p className="text-gray-600 text-sm">Batata-doce, arroz integral, quinoa, lentilha, iogurte natural, feijão</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Como aplicar:</h4>
                    <p className="text-gray-600 text-sm">Mantenha pelo menos um estabilizador no café da manhã ou jantar</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg mt-4">
                  <p className="text-green-800 text-sm">
                    <strong>👉 Resultado esperado:</strong> Você mantém a perda de peso de forma estável e contínua, 
                    sem recuperar o que eliminou.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist */}
        <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              ✅ Checklist dos 3 Gatilhos (aplicação diária)
            </h3>
            <div className="space-y-3">
              {checklist.map((item, index) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-orange-200">
                  <button
                    onClick={() => handleCheckItem(index)}
                    className="flex-shrink-0"
                  >
                    {item.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
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
            
            <div className="mt-4 bg-white p-3 rounded-lg border border-orange-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progresso do Checklist</span>
                <span className="text-sm text-gray-600">{completedCount}/{checklist.length}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{progressPercentage}% concluído</p>
            </div>
          </CardContent>
        </Card>

        {/* Resumo Final */}
        <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-indigo-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              ⚡ Resumo Final do Módulo
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Os <strong>3 Gatilhos Alimentares</strong> são o núcleo do Reset. Eles trabalham juntos para acelerar o metabolismo, 
              cortar a fome emocional e impedir o efeito sanfona. O segredo não está em restrição, mas em aprender a usar 
              os alimentos certos, nas combinações certas, nos momentos certos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              É <strong>simples, aplicável e realista</strong>. Seguindo essa estratégia, você não só emagrece nos próximos 21 dias, 
              mas cria uma base sólida para nunca mais precisar "recomeçar do zero".
            </p>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            onClick={handleComplete}
            disabled={isModuleCompleted}
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 text-lg font-semibold disabled:opacity-50"
          >
            {isModuleCompleted ? '✅ Módulo Concluído!' : 'Marcar como Concluído'}
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex-1 border-orange-300 text-orange-600 hover:bg-orange-50 py-3 text-lg"
          >
            Voltar ao Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Module3Content;