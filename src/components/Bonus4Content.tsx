import React from 'react';
import { ArrowLeft, Play, Clock, Target, CheckCircle, Calendar, Zap, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Bonus4Content: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-orange-100 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/bonuses')}
              className="p-2 hover:bg-orange-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Bônus 4 – Treino de 7 Minutos em Casa
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sequência compacta, realista e eficaz para acelerar a queima calórica
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Introdução */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                🏠 Sequência compacta, realista e eficaz
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Este bônus foi pensado para você que não quer ou não pode ir à academia, mas deseja resultados práticos com o mínimo de tempo e equipamento. Ele entrega um treino rápido, que pode ser feito no celular em casa, combinando eficácia, segurança e aplicabilidade.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Esse vídeo demonstra uma rotina simples e poderosa: 7 minutos completos de corpo inteiro, sem equipamentos — ideal para encaixar em qualquer dia corrido.
              </p>
            </div>
          </div>
        </div>

        {/* Vídeo do YouTube */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Vídeo Demonstrativo - Treino de 7 Minutos
            </h3>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/_rSW3GikiKs?start=6&controls=0&modestbranding=1&rel=0&showinfo=0"
              title="Treino de 7 Minutos em Casa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Página 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Por que um treino curto funciona de verdade
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  Estudos comprovam que treinos de alta intensidade e curta duração (HIIT) geram queima calórica prolongada após o treino.
                </p>
                <p>
                  Um protocolo prático de 7 minutos estimula taxa metabólica basal e condicionamento físico de forma eficiente e sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Página 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Como ele se encaixa no Reset da Barriga
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Aumenta o gasto calórico sem consumo de energia extra</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Complementa os gatilhos alimentares ativando queima hormonal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Pode ser feito diariamente, criando consistência</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Página 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Estrutura do Treino (script passo a passo)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cada exercício dura 30 segundos, com 5 segundos de transição:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Agachamento com salto',
                  'Flexão de braços adaptada (joelhos)',
                  'Corrida parada (joelhos altos)',
                  'Prancha isométrica',
                  'Polichinelos',
                  'Afundo alternado',
                  'Abdominal curto'
                ].map((exercise, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-orange-50 dark:bg-gray-700 rounded-lg">
                    <span className="w-6 h-6 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{exercise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Página 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Benefícios de cada exercício
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-1">Agachamento com salto</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Ativa grandes grupos musculares e acelera o metabolismo</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-1">Flexão adaptada</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Fortalece o core, peito e braços sem tensão excessiva</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-1">Corrida parada</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Cardio leve que queima calorias sem requerer espaço</p>
                </div>
                <div className="p-3 bg-orange-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-1">Prancha</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Ativa toda a musculatura central (core)</p>
                </div>
                <div className="p-3 bg-pink-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-pink-800 dark:text-pink-300 mb-1">Polichinelos</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Cardio funcional e queima rápida com baixo impacto</p>
                </div>
                <div className="p-3 bg-teal-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-teal-800 dark:text-teal-300 mb-1">Afundo</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Parte inferior do corpo e equilíbrio</p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-1">Abdominal curto</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Foca no core sem tensão excessiva na coluna</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Página 5 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Play className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Como copiar o vídeo passo a passo
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-700 dark:text-gray-300">Use o vídeo como temporizador visual e guia de forma</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-700 dark:text-gray-300">Faça em jejum leve ou antes do café da manhã para aumentar termogênese</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-yellow-500" />
                  <span className="text-gray-700 dark:text-gray-300">Respeite seu ritmo, sem forçar além do corpo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Página 6 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Variações para adaptar níveis
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-gray-700 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">🟢 Iniciante</h4>
                  <p className="text-gray-700 dark:text-gray-300">Retire o salto nos agachamentos e faça agachamento simples</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-gray-700 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">🟡 Intermediário</h4>
                  <p className="text-gray-700 dark:text-gray-300">Mantenha o salto e inclua movimento de braço nos polichinelos</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">🔴 Avançado</h4>
                  <p className="text-gray-700 dark:text-gray-300">Aumente tempo para 40 segundos e diminua descanso</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Página 7 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Integração com o Protocolo Reset
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-500" />
                  <span className="text-gray-700 dark:text-gray-300">Faça o treino antes ou após o café da manhã com ativador de queima (ex: chá verde + ovos)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-500" />
                  <span className="text-gray-700 dark:text-gray-300">Use dias alternados ou diariamente se tiver bom condicionamento</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Página 8 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Checklist Semanal
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-violet-600 rounded" />
                  <span className="text-gray-700 dark:text-gray-300">Treinar pelo menos 4 vezes na semana</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-violet-600 rounded" />
                  <span className="text-gray-700 dark:text-gray-300">Registrar nível de energia antes/depois</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-violet-600 rounded" />
                  <span className="text-gray-700 dark:text-gray-300">Manter alimentação do Reset nos dias de treino</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-violet-600 rounded" />
                  <span className="text-gray-700 dark:text-gray-300">Aumentar intensidade progressivamente</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Página 9 */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-orange-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Exemplo de semana de rotina
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-rose-50 dark:bg-gray-700">
                      <th className="border border-rose-200 dark:border-gray-600 px-4 py-2 text-left font-semibold text-rose-800 dark:text-rose-300">Dia</th>
                      <th className="border border-rose-200 dark:border-gray-600 px-4 py-2 text-left font-semibold text-rose-800 dark:text-rose-300">Treino de 7 min</th>
                      <th className="border border-rose-200 dark:border-gray-600 px-4 py-2 text-left font-semibold text-rose-800 dark:text-rose-300">Alimentação Reset</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Segunda', 'Sim', 'Gat. alimentação + Treino'],
                      ['Terça', 'Sim', 'Gat. alimentação + Treino'],
                      ['Quarta', 'Descanso leve', 'Alimentação leve + sono'],
                      ['Quinta', 'Sim', 'Alimentação Reset + Treino'],
                      ['Sexta', 'Sim', 'Gat. alimentação + Treino'],
                      ['Sábado', 'Opcional', 'Alimentação livre adaptada'],
                      ['Domingo', 'Descanso', 'Planejamento + análise']
                    ].map(([day, workout, nutrition], index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-rose-25 dark:bg-gray-750'}>
                        <td className="border border-rose-200 dark:border-gray-600 px-4 py-2 font-medium text-gray-900 dark:text-white">{day}</td>
                        <td className="border border-rose-200 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">{workout}</td>
                        <td className="border border-rose-200 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300">{nutrition}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Página 10 */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 shadow-sm text-white">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Resumo Final e Motivação
              </h3>
              <p className="text-white text-opacity-90 leading-relaxed">
                Este treino de 7 minutos não é apenas um exercício — é um catalisador. Se combinado com os gatilhos certos, ele amplifica o Reset metabólico e aumenta sua autoestima. O mais importante é fazer todos os dias, mesmo que seja devagar — consistência vence força. Você não precisa de academia, só precisa dar o primeiro passo todos os dias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonus4Content;