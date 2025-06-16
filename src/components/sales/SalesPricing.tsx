
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SalesPricing = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 97',
      period: '/mês',
      description: 'Ideal para profissionais autônomos',
      features: [
        'Até 50 pacientes',
        'Agendamentos básicos',
        'Prontuário eletrônico',
        'Relatórios básicos',
        'Suporte por email'
      ],
      buttonText: 'Começar Agora',
      popular: false
    },
    {
      name: 'Profissional',
      price: 'R$ 197',
      period: '/mês',
      description: 'Para clínicas pequenas e médias',
      features: [
        'Até 500 pacientes',
        'Múltiplos profissionais',
        'Triagem Manchester',
        'Prescrições e atestados',
        'Relatórios avançados',
        'Suporte prioritário'
      ],
      buttonText: 'Teste Grátis',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'R$ 397',
      period: '/mês',
      description: 'Para hospitais e clínicas grandes',
      features: [
        'Pacientes ilimitados',
        'Equipe completa',
        'Integração com laboratórios',
        'Dashboard executivo',
        'API personalizada',
        'Suporte dedicado'
      ],
      buttonText: 'Falar com Vendas',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planos que crescem com sua clínica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para suas necessidades. Todos incluem suporte técnico e atualizações gratuitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-emerald-500 shadow-2xl scale-105' : 'border border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 text-lg">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 text-lg font-semibold ${
                    plan.popular 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não tem certeza qual plano escolher? Fale conosco!
          </p>
          <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            Agendar Demonstração
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SalesPricing;
