import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Zap, Heart, Brain, Shield, CheckCircle, Target, Clock, Lightbulb, AlertTriangle } from 'lucide-react';

const Bonus3Content: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Zap className="h-8 w-8 text-yellow-500" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Bônus 3 – Reset Hormonal da Queima
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          ⚡ Guia para equilibrar os 4 hormônios que travam o emagrecimento (insulina, leptina, grelina e cortisol).
        </p>
      </div>

      {/* Página 1 - Importância dos Hormônios */}
      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-yellow-500" />
            A Importância dos Hormônios no Emagrecimento
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Muita gente acredita que emagrecer é apenas uma questão de "comer menos e gastar mais". Mas, na prática, o corpo não funciona como uma calculadora.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            O verdadeiro controle do peso está nos hormônios, que regulam fome, saciedade, estocagem de gordura e gasto energético.
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200 font-medium">
              Se seus hormônios estão desregulados, mesmo que você faça dieta ou exercícios, os resultados não aparecem.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            O Reset Hormonal da Queima existe para colocar esses 4 hormônios em equilíbrio, criando o ambiente perfeito para o corpo queimar gordura naturalmente.
          </p>
        </CardContent>
      </Card>

      {/* Página 2 - Os 4 Hormônios */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-blue-500" />
            Os 4 Hormônios que Precisam de Reset
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">Insulina</h4>
              <p className="text-red-700 dark:text-red-300 text-sm">
                Controla a entrada de glicose nas células. Desequilíbrio = acúmulo de gordura abdominal.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Leptina</h4>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Hormônio da saciedade. Desequilíbrio = você come sem parar porque não sente que está satisfeita.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Grelina</h4>
              <p className="text-purple-700 dark:text-purple-300 text-sm">
                Hormônio da fome. Desequilíbrio = fome constante, mesmo após comer.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Cortisol</h4>
              <p className="text-orange-700 dark:text-orange-300 text-sm">
                Hormônio do estresse. Desequilíbrio = mais gordura abdominal e compulsão por comida.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Página 3 - Reset da Insulina */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Reset da Insulina
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            <p className="text-red-800 dark:text-red-200 font-medium">
              👉 Problema: picos de açúcar causam compulsão, estocagem de gordura e cansaço.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Estratégias práticas:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Sempre combine carboidratos com fibras e proteínas (ex: arroz integral + feijão + frango).</li>
              <li>• Evite açúcar refinado e farinhas brancas.</li>
              <li>• Prefira carboidratos complexos: batata-doce, quinoa, arroz integral.</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">✅ Checklist da Insulina:</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <input type="checkbox" className="rounded" />
                Inclua 1 proteína por refeição.
              </label>
              <label className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <input type="checkbox" className="rounded" />
                Use fibras (verduras, legumes) em todas as refeições.
              </label>
              <label className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <input type="checkbox" className="rounded" />
                Evite refrigerantes e doces industrializados.
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Página 4 - Reset da Leptina */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Reset da Leptina
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <p className="text-green-800 dark:text-green-200 font-medium">
              👉 Problema: quando a leptina está "adormecida", você nunca sente saciedade.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Estratégias práticas:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Durma bem: sono regula diretamente a leptina.</li>
              <li>• Inclua gorduras boas (abacate, azeite, castanhas).</li>
              <li>• Faça refeições completas, sem pular café da manhã.</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">✅ Checklist da Leptina:</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <input type="checkbox" className="rounded" />
                Durma entre 7h e 8h por noite.
              </label>
              <label className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <input type="checkbox" className="rounded" />
                Consuma 1 fonte de gordura boa por refeição.
              </label>
              <label className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <input type="checkbox" className="rounded" />
                Evite jejum prolongado todos os dias.
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Página 5 - Reset da Grelina */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-purple-500" />
            Reset da Grelina
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <p className="text-purple-800 dark:text-purple-200 font-medium">
              👉 Problema: quando está desregulada, você sente fome constante e fora de hora.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Estratégias práticas:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Faça refeições em horários regulares (a cada 3-4h).</li>
              <li>• Use proteínas e fibras para retardar a digestão.</li>
              <li>• Beba água: sede é confundida com fome.</li>
            </ul>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">✅ Checklist da Grelina:</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                <input type="checkbox" className="rounded" />
                Coma de 3 em 3h ou 4h.
              </label>
              <label className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                <input type="checkbox" className="rounded" />
                Inclua fibras em cada refeição.
              </label>
              <label className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                <input type="checkbox" className="rounded" />
                Beba 2 litros de água/dia.
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Página 6 - Reset do Cortisol */}
      <Card className="border-l-4 border-l-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-orange-500" />
            Reset do Cortisol
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
            <p className="text-orange-800 dark:text-orange-200 font-medium">
              👉 Problema: altos níveis de estresse mantêm gordura abdominal e aumentam compulsão por doces.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Estratégias práticas:</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Durma em ambiente escuro e silencioso.</li>
              <li>• Evite café à noite.</li>
              <li>• Faça pausas de relaxamento diário (respiração profunda, meditação, caminhada leve).</li>
            </ul>
          </div>

          <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">✅ Checklist do Cortisol:</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-teal-700 dark:text-teal-300">
                <input type="checkbox" className="rounded" />
                Durma no escuro total.
              </label>
              <label className="flex items-center gap-2 text-teal-700 dark:text-teal-300">
                <input type="checkbox" className="rounded" />
                Evite café após 17h.
              </label>
              <label className="flex items-center gap-2 text-teal-700 dark:text-teal-300">
                <input type="checkbox" className="rounded" />
                Faça 1 atividade relaxante por dia.
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Página 7 - Como os Hormônios Trabalham Juntos */}
      <Card className="border-l-4 border-l-indigo-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-indigo-500" />
            Como os Hormônios Trabalham Juntos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            O segredo não é regular apenas um hormônio, mas sim o equilíbrio entre todos eles.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Quando a insulina está estável → menos estocagem de gordura.</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Quando a leptina está ativa → saciedade prolongada.</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Quando a grelina está equilibrada → fome controlada.</span>
              </div>
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Quando o cortisol está baixo → menos compulsão e barriga mais seca.</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Página 8 - Exemplo de Rotina */}
      <Card className="border-l-4 border-l-emerald-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-emerald-500" />
            Exemplo de Rotina Hormonal Equilibrada
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Café da manhã:</h4>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">Omelete de espinafre + chá verde (proteína + ativador).</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Almoço:</h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">Peixe + arroz integral + legumes (insulina estável).</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 dark:text-green-200">Lanche da tarde:</h4>
              <p className="text-green-700 dark:text-green-300 text-sm">Iogurte natural + chia + castanhas (leptina ativa).</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200">Jantar:</h4>
              <p className="text-purple-700 dark:text-purple-300 text-sm">Frango desfiado + batata-doce + salada (grelina controlada).</p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg border-l-4 border-indigo-400">
              <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">Noite:</h4>
              <p className="text-indigo-700 dark:text-indigo-300 text-sm">Chá de camomila + respiração 5 min (cortisol reduzido).</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Página 9 - Erros que Desregulam */}
      <Card className="border-l-4 border-l-red-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Erros que Desregulam os Hormônios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <ul className="space-y-2 text-red-800 dark:text-red-200">
              <li>❌ Pular café da manhã.</li>
              <li>❌ Comer pão francês + café com açúcar sozinho no desjejum.</li>
              <li>❌ Dormir menos de 6 horas.</li>
              <li>❌ Comer doces e farinhas brancas à noite.</li>
              <li>❌ Viver sob estresse constante sem pausas de relaxamento.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Página 10 - Resumo Final */}
      <Card className="border-l-4 border-l-emerald-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-emerald-500" />
            Resumo e Estratégia Final
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            O Reset Hormonal da Queima não é uma dieta, mas uma estratégia para ensinar seu corpo a funcionar corretamente.
          </p>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">Seguindo as orientações, você terá:</h4>
            <ul className="space-y-1 text-emerald-700 dark:text-emerald-300">
              <li>✅ Menos compulsão.</li>
              <li>✅ Mais saciedade.</li>
              <li>✅ Redução da gordura abdominal.</li>
              <li>✅ Emagrecimento mais estável e contínuo.</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">👉 Aplicação prática:</h4>
            <ul className="space-y-2 text-blue-700 dark:text-blue-300 text-sm">
              <li>• Regule insulina com carboidratos inteligentes.</li>
              <li>• Ative leptina com gorduras boas + sono de qualidade.</li>
              <li>• Equilibre grelina com refeições regulares.</li>
              <li>• Controle cortisol com sono e relaxamento.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200 font-medium">
              ⚡ Ao aplicar essas práticas diariamente, você cria o ambiente perfeito para emagrecer sem sofrimento e sem o risco de recuperar o peso.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bonus3Content;