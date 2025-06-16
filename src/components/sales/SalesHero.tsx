import React from 'react';
import { Check, ChevronRight, Play, Calendar, FileText, MessageSquare, BarChart3, FileCheck, Star, Rocket, Crown, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
export const SalesHero = () => {
  const plans = [{
    id: 'basic',
    name: 'Básico',
    price: 'R$ 97',
    period: '/mês',
    description: 'Para consultórios pequenos',
    icon: Star,
    features: ['Até 50 pacientes', '1 profissional', 'Agenda básica', 'Prontuário eletrônico', 'Anamnese SOAP', 'Sistema de triagem', 'Suporte por email'],
    popular: false,
    gradient: "from-gray-600 to-gray-700",
    bgColor: "bg-white"
  }, {
    id: 'professional',
    name: 'Profissional',
    price: 'R$ 197',
    period: '/mês',
    description: 'Para clínicas em crescimento',
    icon: Rocket,
    features: ['Até 200 pacientes', 'Até 5 profissionais', 'Agenda avançada', 'Prontuário completo', 'Relatórios detalhados', 'Integração WhatsApp', 'Sistema de triagem avançado', 'Suporte prioritário'],
    popular: true,
    gradient: "from-green-600 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
  }, {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'R$ 397',
    period: '/mês',
    description: 'Para grandes clínicas',
    icon: Crown,
    features: ['Pacientes ilimitados', 'Profissionais ilimitados', 'Múltiplas unidades', 'Funcionalidades avançadas', 'API personalizada', 'Backup automático', 'Treinamento incluído', 'Suporte 24/7'],
    popular: false,
    gradient: "from-blue-600 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50"
  }];
  return <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo principal */}
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                SALUS — Gestão inteligente para 
                <span className="text-blue-800"> clínicas modernas</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Plataforma completa para agendamento, prontuário, integração com WhatsApp e muito mais.
                Aumente a produtividade da sua clínica com segurança, tecnologia e simplicidade.
              </p>

              {/* Lista de benefícios */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Agenda online integrada</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Prontuário eletrônico seguro</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Relatórios e controle financeiro</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Suporte dedicado</span>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/subscription">
                  <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white text-lg px-8 py-4 rounded-lg">
                    Começar Teste Grátis
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
              </div>
            </div>

            {/* Imagem da médica */}
            <div className="relative">
              <img src="/lovable-uploads/219bbfd9-3e57-4298-9273-871bf2bf1fe8.png" alt="Médica profissional usando laptop em consultório" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Problema + Solução */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Seu consultório está crescendo, mas a gestão ainda é feita no papel?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Com o SALUS, você automatiza os processos da clínica, evita erros manuais e melhora a experiência do paciente.
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Agenda online</h3>
              <p className="text-sm text-gray-600">compartilhada</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Prontuário Eletrônico</h3>
              <p className="text-sm text-gray-600">com anamnese SOAP</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600">(planos PRO+)</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Relatórios</h3>
              <p className="text-sm text-gray-600">em tempo real</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Receitas</h3>
              <p className="text-sm text-gray-600">e atestados fáceis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Planos Detalhada */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experimente 30 dias grátis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Comece sua jornada digital na medicina agora mesmo. Durante o checkout você pode criar sua conta.
            </p>
            
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => <Card key={index} className={`relative ${plan.bgColor} border-2 ${plan.popular ? 'border-green-500 scale-105 shadow-xl' : 'border-gray-200 hover:border-gray-300'} transition-all duration-300 hover:shadow-lg`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-4 py-2 text-sm font-semibold">
                      Mais Popular
                    </Badge>
                  </div>}

                <CardHeader className="text-center pb-6">
                  
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <div className="text-sm text-gray-500 mb-1">30 dias grátis, depois:</div>
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 text-lg">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center space-x-3 text-gray-700">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>)}
                  </ul>

                  <Link to="/subscription" className="block w-full">
                    <Button className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${plan.popular ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Começar teste grátis
                    </Button>
                  </Link>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-8">
              Todos os planos incluem 30 dias de teste gratuito • Cancele a qualquer momento
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Como funciona o teste gratuito:
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Processo simples:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Escolha seu plano e clique em "Começar teste grátis"</li>
                    <li>• Complete seu cadastro e dados de pagamento no Stripe</li>
                    <li>• Acesso imediato por 30 dias sem cobrança</li>
                    <li>• Após 30 dias, cobrança automática do plano escolhido</li>
                    <li>• Cancele a qualquer momento sem penalidades</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Benefícios inclusos:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Dados protegidos com criptografia de ponta</li>
                    <li>• Backup automático</li>
                    <li>• Suporte dedicado durante o teste</li>
                    <li>• Acesso completo às funcionalidades</li>
                    <li>• Sem taxa de setup ou configuração</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};