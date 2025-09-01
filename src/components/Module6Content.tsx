import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Award, Target, Calendar, Heart } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { useToast } from '../hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Module6Content: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { updateModuleProgress, getModuleProgress, updateModuleChecklist, getModuleChecklist } = useProgress();
  
  const moduleId = 'module6';
  const moduleProgress = getModuleProgress(moduleId);
  
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Load checklist from context on component mount
  useEffect(() => {
    const savedChecklist = getModuleChecklist(moduleId);
    if (savedChecklist && savedChecklist.length > 0) {
      const checklistState: { [key: string]: boolean } = {};
      savedChecklist.forEach((item: any) => {
        checklistState[item.id] = item.completed;
      });
      setCheckedItems(checklistState);
    }
  }, [moduleId, getModuleChecklist]);

  const handleCheckboxChange = (itemId: string) => {
    const newCheckedItems = {
      ...checkedItems,
      [itemId]: !checkedItems[itemId]
    };
    setCheckedItems(newCheckedItems);
    
    // Update checklist in context
    const checklistForContext = checklistItems.map(item => ({
      id: item.id,
      text: item.text,
      completed: newCheckedItems[item.id] || false
    }));
    updateModuleChecklist(moduleId, checklistForContext);
    
    // Update module progress
    const completedCount = Object.values(newCheckedItems).filter(Boolean).length;
    const progressPercentage = Math.round((completedCount / checklistItems.length) * 100);
    updateModuleProgress(moduleId, progressPercentage, completedCount === checklistItems.length);
  };

  const handleModuleComplete = () => {
    // Mark all items as completed if not already
    const allCompleted = Object.values(checkedItems).every(Boolean) && Object.keys(checkedItems).length === checklistItems.length;
    if (!allCompleted) {
      const completedCheckedItems: { [key: string]: boolean } = {};
      checklistItems.forEach(item => {
        completedCheckedItems[item.id] = true;
      });
      setCheckedItems(completedCheckedItems);
      
      const checklistForContext = checklistItems.map(item => ({
        id: item.id,
        text: item.text,
        completed: true
      }));
      updateModuleChecklist(moduleId, checklistForContext);
    }
    
    setIsCompleted(true);
    
    // Update module progress to 100%
    updateModuleProgress(moduleId, 100, true);
    
    // Show completion toast
    toast({
      title: "🎉 Parabéns!",
      description: "Você concluiu o Protocolo Reset da Barriga! Sua jornada de transformação está completa.",
      duration: 5000,
    });
    
    // Navigate back to dashboard after a delay
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const checklistItems = [
    { id: 'gatilhos-queima', text: 'Aplicar 2 gatilhos de queima por dia' },
    { id: 'redutor-fome', text: 'Usar pelo menos 1 redutor da fome oculta diariamente' },
    { id: 'estabilizador-peso', text: 'Manter estabilizador do peso em 1 refeição principal' },
    { id: 'regra-80-20', text: 'Seguir a regra 80/20 nas refeições' },
    { id: 'monitorar-progresso', text: 'Monitorar fotos e medidas quinzenalmente' },
    { id: 'metas-curtas', text: 'Estabelecer 1 meta curta a cada mês' },
    { id: 'sono-estresse', text: 'Priorizar sono e reduzir estresse' }
  ];

  const achievements = [
    'Um metabolismo mais ativo e eficiente',
    'Redução de 3 a 5kg de gordura corporal (em média)',
    'Diminuição do inchaço abdominal',
    'Menor compulsão por doces e lanches fora de hora',
    'Mais disposição e energia no dia a dia',
    'Roupas mais folgadas e autoestima renovada'
  ];

  const maintenancePlan = [
    {
      title: '1. Continue aplicando os 3 Gatilhos Alimentares',
      items: [
        'Ativador de queima → 2 vezes ao dia',
        'Redutor da fome oculta → em lanches ou refeições leves',
        'Estabilizador do peso → ao menos 1 vez por dia'
      ]
    },
    {
      title: '2. Use a regra 80/20',
      items: [
        '80% das refeições seguem o protocolo',
        '20% podem incluir alimentos que você gosta (um doce, uma pizza, um vinho)'
      ]
    },
    {
      title: '3. Acompanhe seus resultados de forma inteligente',
      items: [
        'Tire fotos a cada 15 dias',
        'Anote medidas de cintura, quadril e coxas',
        'Use roupas como referência',
        'Observe energia e qualidade do sono'
      ]
    },
    {
      title: '4. Planeje pequenas metas',
      items: [
        'Exemplo: perder mais 2kg em 30 dias, correr 5km, usar determinada roupa especial',
        'Metas curtas mantêm a motivação alta'
      ]
    },
    {
      title: '5. Cuide do sono e do estresse',
      items: [
        'O sono de qualidade é fundamental para manter o metabolismo ativo',
        'Use o ritual de relaxamento aprendido no protocolo (chá + respiração)',
        'Busque momentos diários de prazer e bem-estar (caminhada, leitura, meditação)'
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
          <Award className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          📘 Módulo 6 – Encerramento & Próximos Passos
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Parabéns por chegar até aqui. Muitas pessoas começam, mas poucas têm disciplina suficiente para concluir 21 dias de mudança. Você não só concluiu o Protocolo Reset da Barriga, como também aprendeu a reprogramar seu metabolismo, controlar a fome oculta e adotar um estilo de vida muito mais saudável.
        </p>
      </div>

      {/* Conquistas */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
        <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
          <Award className="w-6 h-6" />
          🔑 O que você conquistou em 21 dias
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <p className="text-green-800 dark:text-green-200 font-medium">
            <strong>Esses são os resultados visíveis.</strong> Mas há também os invisíveis, que são ainda mais valiosos: equilíbrio hormonal, melhor digestão, mais qualidade no sono e mais clareza mental.
          </p>
        </div>
      </div>

      {/* Desafio dos próximos 90 dias */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6" />
          🔄 O desafio dos próximos 90 dias
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          A grande pergunta agora é: <strong>como manter esses resultados sem cair no efeito sanfona?</strong>
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          A resposta está em transformar o que você aprendeu em um estilo de vida. E para isso, criamos o <strong>Plano de Manutenção de 90 dias</strong>, que vai consolidar os hábitos adquiridos e garantir que seu corpo continue evoluindo.
        </p>
      </div>

      {/* Plano de Manutenção */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-purple-600" />
          ✅ Plano de Manutenção – 90 dias
        </h2>
        <div className="space-y-6">
          {maintenancePlan.map((section, index) => (
            <div key={index} className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist dos Próximos 90 dias */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-6 flex items-center gap-2">
          <CheckCircle className="w-6 h-6" />
          📅 Checklist dos Próximos 90 dias
        </h2>
        {/* Progress Indicator */}
        <div className="mb-6 p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              Progresso do Checklist
            </span>
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              {Object.values(checkedItems).filter(Boolean).length}/{checklistItems.length} concluídos
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.round((Object.values(checkedItems).filter(Boolean).length / checklistItems.length) * 100)}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {Math.round((Object.values(checkedItems).filter(Boolean).length / checklistItems.length) * 100)}% concluído
          </p>
        </div>
        
        <div className="grid gap-3">
          {checklistItems.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg cursor-pointer hover:bg-white/70 dark:hover:bg-gray-800/70 transition-colors"
            >
              <button
                type="button"
                onClick={() => handleCheckboxChange(item.id)}
                className="flex-shrink-0"
              >
                {checkedItems[item.id] ? (
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400" />
                )}
              </button>
              <span className={`text-gray-700 dark:text-gray-300 ${checkedItems[item.id] ? 'line-through opacity-75' : ''}`}>
                {item.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Mensagem Final */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-6 border border-pink-200 dark:border-pink-800">
        <h2 className="text-2xl font-bold text-pink-800 dark:text-pink-200 mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6" />
          ✨ Mensagem Final
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            Você não está mais presa ao ciclo das dietas restritivas que prometem milagres e entregam frustração. Agora, você possui um método realista, que respeita o seu corpo e pode ser mantido pelo resto da vida.
          </p>
          <p className="font-semibold text-pink-800 dark:text-pink-200">
            O Protocolo Reset da Barriga foi o ponto de virada.
          </p>
          <p>
            Você provou que consegue mudar, que tem disciplina e que merece um corpo mais leve, saudável e cheio de energia.
          </p>
          <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded-lg">
            <p className="font-medium">
              Sempre que pensar em desistir, lembre-se: <strong>não existe "tudo ou nada"</strong>. Se você sair da linha em algum momento, não é fracasso. Basta retomar no próximo prato e continuar.
            </p>
            <p className="mt-2 font-semibold text-pink-800 dark:text-pink-200">
              O verdadeiro sucesso não está em nunca errar, mas em nunca desistir de si mesma.
            </p>
          </div>
        </div>
      </div>

      {/* Resumo Final */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/50 dark:to-slate-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          ⚡ Resumo Final do Módulo:
        </h2>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p>
            O Reset não acaba em 21 dias — ele marca o início de uma nova jornada. Seguindo o Plano de 90 dias, você garante que os resultados se multipliquem e permaneçam.
          </p>
          <p className="font-semibold text-purple-800 dark:text-purple-200">
            Agora você tem o poder de controlar sua alimentação, seu metabolismo e sua saúde. Essa é a verdadeira liberdade.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-8">
        <button
          onClick={handleModuleComplete}
          disabled={isCompleted || moduleProgress?.completed}
          className={`flex-1 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-50 ${
            isCompleted || moduleProgress?.completed
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
          }`}
        >
          {isCompleted || moduleProgress?.completed ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5" />
              ✅ Protocolo Concluído!
            </span>
          ) : (
            'Concluir Protocolo Reset da Barriga'
          )}
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="flex-1 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-purple-300 text-purple-600 hover:bg-purple-50 dark:border-purple-600 dark:text-purple-400 dark:hover:bg-purple-900/20 transition-all duration-300"
        >
          Voltar ao Dashboard
        </button>
      </div>
      
      {(isCompleted || moduleProgress?.completed) && (
        <p className="mt-4 text-center text-green-600 dark:text-green-400 font-medium">
          🎉 Parabéns! Você completou toda a jornada de transformação! 🌟
        </p>
      )}
    </div>
  );
};

export default Module6Content;