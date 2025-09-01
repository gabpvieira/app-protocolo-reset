import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Bonus5Content: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Bonus 5 - Guia do Sono Emagrecedor
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Tecnicas noturnas que potencializam a queima de gordura enquanto voce dorme.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                O Sono e o Emagrecimento
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                O sono e muito mais do que descanso. Durante a noite, seu corpo regula hormonios, 
                repara tecidos e controla processos que influenciam diretamente o emagrecimento.
              </p>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">Quando voce dorme mal:</h3>
                <ul className="space-y-2 text-red-700 dark:text-red-300">
                  <li>• Aumenta o cortisol (hormonio do estresse)</li>
                  <li>• Reduz a leptina (saciedade)</li>
                  <li>• Eleva a grelina (fome)</li>
                  <li>• Desregula a insulina (armazenamento de gordura)</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
                  Resultado: mais fome, menos energia e maior tendencia a acumular gordura abdominal.
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Como o Sono Acelera a Queima de Gordura
            </h2>
            
            <div className="grid gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">
                  Sono profundo (REM)
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  O corpo libera hormonios de crescimento que ajudam a queimar gordura e preservar massa magra.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">
                  Ciclo regular
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  7 a 8 horas continuas aumentam o equilibrio hormonal.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">
                  Qualidade maior que Quantidade
                </h3>
                <p className="text-purple-700 dark:text-purple-300">
                  Dormir 8 horas mal dormidas nao e tao eficaz quanto 6 horas bem dormidas.
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Ritual Noturno de 3 Passos
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                      Desconexao digital
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200">
                      Desligar telas pelo menos 1h antes de dormir.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">
                      Ambiente ideal
                    </h3>
                    <p className="text-green-800 dark:text-green-200">
                      Quarto escuro, silencioso e fresco.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
                      Relaxamento guiado
                    </h3>
                    <p className="text-purple-800 dark:text-purple-200">
                      Cha calmante + respiracao profunda ou leitura leve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-6">
              <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
                Esse ritual prepara corpo e mente para entrar rapidamente em sono profundo.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Alimentos que Ajudam o Sono
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-200 mb-4">
                  Inclua a noite:
                </h3>
                <ul className="space-y-3 text-green-700 dark:text-green-300">
                  <li>• Banana - rica em triptofano</li>
                  <li>• Aveia - libera melatonina</li>
                  <li>• Chas calmantes - camomila, melissa</li>
                  <li>• Leite morno - auxilia na liberacao de melatonina</li>
                </ul>
              </div>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-red-800 dark:text-red-200 mb-4">
                  Evite a noite:
                </h3>
                <ul className="space-y-3 text-red-700 dark:text-red-300">
                  <li>• Cafe, cha preto, energeticos</li>
                  <li>• Acucares refinados</li>
                  <li>• Alcool em excesso</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Tecnicas de Relaxamento
            </h2>
            
            <div className="grid gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">
                  Respiracao 4-7-8
                </h3>
                <p className="text-blue-700 dark:text-blue-300">
                  Inspire 4s, segure 7s, solte 8s - induz relaxamento rapido
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">
                  Alongamento leve
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  5 minutos de alongamento - reduzem tensao muscular
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">
                  Banho morno
                </h3>
                <p className="text-purple-700 dark:text-purple-300">
                  Relaxa musculos - reduz cortisol
                </p>
              </div>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3">
                  Escrita noturna
                </h3>
                <p className="text-orange-700 dark:text-orange-300">
                  Anote preocupacoes em papel antes de dormir
                </p>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Estrategia do Sono Emagrecedor em 21 Dias
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                      Semana 1
                    </h3>
                    <p className="text-blue-800 dark:text-blue-200">
                      Adotar o ritual noturno (cha + desconexao digital)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">
                      Semana 2
                    </h3>
                    <p className="text-green-800 dark:text-green-200">
                      Ajustar o ambiente (escuro total, temperatura fresca)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="font-bold text-purple-900 dark:text-purple-100 mb-2">
                      Semana 3
                    </h3>
                    <p className="text-purple-800 dark:text-purple-200">
                      Consolidar rotina (mesmo horario para dormir e acordar)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
              <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
                Em 21 dias, seu corpo entra em novo padrao hormonal, favorecendo emagrecimento natural.
              </p>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Checklist do Sono Emagrecedor
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center text-sm">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Dormir entre 7 e 8h por noite</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center text-sm">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Ritual noturno de 3 passos</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center text-sm">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Evitar telas e cafeina a noite</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center text-sm">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Praticar respiracao ou meditacao antes de dormir</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center text-sm">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Comer algo leve e funcional ate 2h antes de deitar</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center text-sm">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Acordar sempre no mesmo horario, inclusive aos fins de semana</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Resumo e Aplicacao
            </h2>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">😴</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  O Poder do Sono Emagrecedor
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  O sono pode ser seu maior aliado ou seu pior inimigo no emagrecimento.
                </p>
                <p>
                  Seguindo este guia, voce garante que seu corpo continue queimando gordura ate dormindo, 
                  sem esforco extra.
                </p>
                <p>
                  Mais do que isso: tera mais energia, disposicao e equilibrio hormonal para manter 
                  o resultado a longo prazo.
                </p>
              </div>
              
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-6 rounded-lg mt-6">
                <p className="text-yellow-800 dark:text-yellow-200 font-bold text-xl text-center">
                  O segredo nao e dormir mais, mas dormir melhor.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Pagina nao encontrada</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {renderPage()}
      
      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          <ChevronLeft size={20} />
          Anterior
        </button>
        
        <span className="text-gray-600 dark:text-gray-400">
          Pagina {currentPage} de {totalPages}
        </span>
        
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
        >
          Proxima
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Bonus5Content;