import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Clock, Target, Utensils, Heart, Lightbulb } from 'lucide-react';

const Bonus2Content: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Utensils className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Bônus 2 – Cardápio Anti-Compulsão de 21 Dias
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Um plano alimentar estratégico para quebrar o ciclo da compulsão e recuperar o controle sobre sua alimentação
        </p>
      </div>

      {/* Página 1 - Por que a Compulsão Acontece */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-red-500" />
            Por que a Compulsão Acontece
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            A maioria das pessoas que luta contra a balança não sofre apenas por excesso de calorias, mas sim pela <strong>compulsão alimentar</strong>.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Essa vontade incontrolável de comer, geralmente por doces e carboidratos, está ligada a:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            <li><strong>Desequilíbrio hormonal</strong> (insulina, leptina e grelina)</li>
            <li><strong>Estresse e falta de sono</strong></li>
            <li><strong>Hábitos de picos de açúcar</strong> durante o dia</li>
          </ul>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-green-800 dark:text-green-200 font-medium">
              Este cardápio foi desenhado para quebrar esse ciclo, usando alimentos que estabilizam os hormônios e aumentam a saciedade.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Página 2 - Como Funciona */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-500" />
            Como Funciona o Cardápio Anti-Compulsão
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Duração</Badge>
                <span className="text-gray-700 dark:text-gray-300">21 dias, dividido em 3 fases semanais</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Estrutura</Badge>
                <span className="text-gray-700 dark:text-gray-300">4 a 5 refeições por dia</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Princípio</Badge>
                <span className="text-gray-700 dark:text-gray-300">Cada refeição contém pelo menos um gatilho alimentar</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Flexibilidade</Badge>
                <span className="text-gray-700 dark:text-gray-300">Substituições inteligentes sempre disponíveis</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Semana 1 */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge className="bg-purple-500">Semana 1</Badge>
            Reprogramação do Apetite
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-purple-700 dark:text-purple-300 font-medium">
            <strong>Objetivo:</strong> reduzir picos de glicose e estabilizar a fome.
          </p>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Exemplo de dia:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Café:</strong> Omelete de espinafre + chá verde</li>
              <li><strong>Almoço:</strong> Frango grelhado + arroz integral + legumes</li>
              <li><strong>Lanche:</strong> Iogurte natural + chia + morangos</li>
              <li><strong>Jantar:</strong> Peixe assado + batata-doce + brócolis</li>
              <li><strong>Ceia:</strong> Chá de camomila</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Semana 2 */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge className="bg-orange-500">Semana 2</Badge>
            Controle da Compulsão
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-orange-700 dark:text-orange-300 font-medium">
            <strong>Objetivo:</strong> reduzir a vontade de doces e aumentar saciedade.
          </p>
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">Exemplo de dia:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Café:</strong> Iogurte natural + granola sem açúcar + banana</li>
              <li><strong>Almoço:</strong> Carne magra cozida + quinoa + salada variada</li>
              <li><strong>Lanche:</strong> Abacate amassado com cacau 100%</li>
              <li><strong>Jantar:</strong> Omelete de claras + lentilha + vegetais refogados</li>
              <li><strong>Ceia:</strong> Chá de hortelã</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Semana 3 */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Badge className="bg-green-500">Semana 3</Badge>
            Estabilização e Prazer
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-green-700 dark:text-green-300 font-medium">
            <strong>Objetivo:</strong> consolidar hábitos, trazendo variedade e equilíbrio.
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Exemplo de dia:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Café:</strong> Panqueca de aveia com canela + café sem açúcar</li>
              <li><strong>Almoço:</strong> Frango desfiado + batata-doce + couve refogada</li>
              <li><strong>Lanche:</strong> Mix de castanhas + maçã</li>
              <li><strong>Jantar:</strong> Sopa de abóbora + frango desfiado</li>
              <li><strong>Ceia:</strong> Chá de lavanda</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Substituições */}
      <Card className="border-l-4 border-l-indigo-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-indigo-500" />
            Lista de Substituições Flexíveis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-700 dark:text-gray-300">Arroz integral</span>
                <span className="text-gray-400">→</span>
                <span className="text-indigo-600 dark:text-indigo-400">quinoa, batata-doce ou mandioca</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 dark:text-gray-300">Carne bovina</span>
                <span className="text-gray-400">→</span>
                <span className="text-indigo-600 dark:text-indigo-400">frango, peixe ou ovo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 dark:text-gray-300">Iogurte natural</span>
                <span className="text-gray-400">→</span>
                <span className="text-indigo-600 dark:text-indigo-400">kefir ou iogurte vegetal</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-700 dark:text-gray-300">Banana</span>
                <span className="text-gray-400">→</span>
                <span className="text-indigo-600 dark:text-indigo-400">maçã, pera ou mamão</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 dark:text-gray-300">Castanhas</span>
                <span className="text-gray-400">→</span>
                <span className="text-indigo-600 dark:text-indigo-400">sementes de abóbora ou girassol</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Receitas Doces */}
      <Card className="border-l-4 border-l-pink-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-pink-500" />
            Receitas Anti-Compulsão (Doces Fit)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">Mousse de cacau</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Banana congelada batida + cacau 70% + pasta de amendoim
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">Panqueca de banana</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                1 banana + 1 ovo + 2 colheres de aveia → frigideira antiaderente
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">Brigadeiro fit</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Leite em pó sem açúcar + cacau + adoçante natural
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Receitas Lanches */}
      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Utensils className="h-5 w-5 text-yellow-500" />
            Receitas Anti-Compulsão (Lanches)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">Iogurte com chia e frutas vermelhas</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">Omelete de claras com legumes</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">Wrap integral com frango desfiado e vegetais</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Checklist */}
      <Card className="border-l-4 border-l-teal-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-teal-500" />
            Checklist Diário Anti-Compulsão
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              'Café da manhã com proteína + fibra',
              'Almoço com estabilizador (arroz integral, quinoa, etc)',
              'Lanche da tarde com redutor da fome oculta (abacate, chia, castanhas)',
              'Jantar leve e nutritivo',
              'Ceia com chá calmante',
              'Evitar ficar mais de 4h sem se alimentar'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-teal-500 rounded flex items-center justify-center">
                  <CheckCircle className="h-3 w-3 text-teal-500" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resumo Final */}
      <Card className="border-l-4 border-l-emerald-500 bg-emerald-50 dark:bg-emerald-900/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-emerald-500" />
            Resumo e Estratégia Final
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-emerald-800 dark:text-emerald-200 font-medium">
            O Cardápio Anti-Compulsão é seu aliado contra a fome emocional. Ele funciona porque:
          </p>
          <ul className="list-disc list-inside space-y-2 text-emerald-700 dark:text-emerald-300 ml-4">
            <li>Mantém a glicemia estável</li>
            <li>Reduz desejos por açúcar</li>
            <li>Garante prazer e saciedade sem culpa</li>
          </ul>
          <div className="bg-emerald-100 dark:bg-emerald-800/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
            <p className="text-emerald-800 dark:text-emerald-200 font-bold text-lg">
              ⚡ Ao final dos 21 dias, você terá não apenas perdido peso, mas principalmente recuperado o controle sobre sua alimentação.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bonus2Content;