import React from 'react';
import { ArrowLeft, Clock, CheckCircle, Gift, Lightbulb, Target, ChefHat, CheckSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Bonus1Content = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    console.log('Completed Bonus 1');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => navigate('/')}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div>
            <h1 className="text-lg font-semibold">Bônus 1</h1>
            <p className="text-sm opacity-90">Lista das Substituições Inteligentes</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm opacity-90">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>15 min</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            <span>Conteúdo Premium</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Introdução */}
        <Card className="border-l-4 border-l-amber-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Gift className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">🎁 Lista das Substituições Inteligentes</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Um dos maiores erros das dietas tradicionais é pedir que você corte de vez os alimentos que mais gosta: 
                  pão, massas, doces. Isso cria um ciclo de frustração e compulsão.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  A solução não é cortar, mas sim <strong>substituir inteligentemente</strong>. Esta lista mostra como trocar 
                  alimentos que travam o metabolismo por alternativas mais equilibradas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Por que Substituir é Melhor */}
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Por que Substituir é Melhor que Cortar</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Quanto mais você tenta evitar, mais o corpo e a mente pedem. É por isso que tantas pessoas desistem 
                  e voltam ao ponto de partida.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-800 font-medium mb-2">👉 Princípio central:</p>
                  <p className="text-blue-700">
                    Não se trata de nunca mais comer pão ou doce, mas de saber qual pão e qual doce escolher 
                    para que o corpo continue queimando gordura.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Como Funcionam as Substituições */}
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Como Funcionam as Substituições Inteligentes</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Toda substituição inteligente é baseada em três critérios:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-green-700"><strong>Baixo impacto glicêmico</strong> – alimentos que não causam picos de glicose</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-green-700"><strong>Mais fibras e proteínas</strong> – aumentam a saciedade e reduzem a fome oculta</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-green-700"><strong>Nutrientes funcionais</strong> – ajudam o metabolismo a continuar ativo</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h4 className="font-semibold text-gray-800 mb-2">Exemplo prático:</h4>
                  <p className="text-gray-600 mb-2">
                    <span className="text-red-600">❌ Pão francês comum</span> → farinha refinada, alto índice glicêmico → fome em 1 hora
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="text-green-600">✅ Pão integral de fermentação natural</span> → fibras + fermentação lenta → mais saciedade
                  </p>
                  <p className="text-gray-700 font-medium">
                    <strong>Resultado:</strong> você continua comendo pão no café da manhã, mas seu corpo não armazena gordura da mesma forma.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de Substituições */}
        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              Substituições do Dia a Dia
            </h3>
            
            <div className="space-y-6">
              {/* Pães e Massas */}
              <div>
                <h4 className="text-lg font-semibold text-purple-700 mb-3 flex items-center gap-2">
                  🍞 Pães e Massas
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Pão francês</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">pão integral de fermentação natural</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Macarrão comum</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">macarrão integral ou de grão-de-bico</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Pizza tradicional</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">pizza de massa integral com vegetais</span>
                  </div>
                </div>
              </div>

              {/* Doces */}
              <div>
                <h4 className="text-lg font-semibold text-purple-700 mb-3 flex items-center gap-2">
                  🍫 Doces
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Chocolate ao leite</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">chocolate 70% cacau (1 quadradinho)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Sorvete comum</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">sorvete de banana batida congelada com cacau</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Brigadeiro</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">brigadeiro fit com cacau + leite em pó sem açúcar</span>
                  </div>
                </div>
              </div>

              {/* Laticínios */}
              <div>
                <h4 className="text-lg font-semibold text-purple-700 mb-3 flex items-center gap-2">
                  🥛 Laticínios
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Creme de leite</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">iogurte natural integral</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Queijo amarelo</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">queijo branco ou cottage</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Leite integral UHT</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">leite semidesnatado ou vegetal (aveia, amêndoas)</span>
                  </div>
                </div>
              </div>

              {/* Bebidas */}
              <div>
                <h4 className="text-lg font-semibold text-purple-700 mb-3 flex items-center gap-2">
                  🥤 Bebidas
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Refrigerante</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">água com gás + limão</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Sucos industrializados</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">suco natural sem açúcar</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-red-500">❌</span>
                    <span className="text-gray-600">Energéticos</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">chá verde ou kombucha</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Receitas Simples */}
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <ChefHat className="h-6 w-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Sugestões de Receitas Simples</h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">☀️ Café da manhã</h4>
                    <p className="text-orange-700">Omelete + pão integral de fermentação natural + café sem açúcar</p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">🥤 Lanche da tarde</h4>
                    <p className="text-orange-700">Iogurte natural + frutas vermelhas + 1 colher de chia</p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">🍨 Sobremesa saudável</h4>
                    <p className="text-orange-700">Mousse de cacau: banana congelada batida + cacau 70% + 1 colher de pasta de amendoim</p>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">🌙 Jantar leve</h4>
                    <p className="text-orange-700">Pizza fit: massa integral + molho de tomate caseiro + frango desfiado + vegetais + queijo branco</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist */}
        <Card className="border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <CheckSquare className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Checklist de Aplicação</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Para garantir que você aplique as substituições sem dificuldade, siga este checklist:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-emerald-500 rounded flex-shrink-0 mt-0.5"></div>
                    <p className="text-gray-700">Troque pelo menos 1 alimento tradicional por 1 substituto inteligente por refeição</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-emerald-500 rounded flex-shrink-0 mt-0.5"></div>
                    <p className="text-gray-700">No café da manhã → prefira pães de fermentação natural ou integrais</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-emerald-500 rounded flex-shrink-0 mt-0.5"></div>
                    <p className="text-gray-700">No almoço/jantar → inclua sempre fibras (saladas, legumes) junto às massas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-emerald-500 rounded flex-shrink-0 mt-0.5"></div>
                    <p className="text-gray-700">No lanche da tarde → substitua doces processados por frutas com fibras + proteína</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-emerald-500 rounded flex-shrink-0 mt-0.5"></div>
                    <p className="text-gray-700">Se for comer doce → opte por versão 70% cacau ou receitas fit</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 border-2 border-emerald-500 rounded flex-shrink-0 mt-0.5"></div>
                    <p className="text-gray-700 font-medium">Lembre-se: não é sobre perfeição, mas sobre progresso diário</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            onClick={handleComplete}
            className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
          >
            Concluir Bônus
          </Button>
          
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="flex-1 px-8 py-4 rounded-xl border-2 border-amber-200 hover:border-amber-300 text-amber-700 hover:bg-amber-50 transition-all duration-300"
          >
            Voltar ao Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bonus1Content;