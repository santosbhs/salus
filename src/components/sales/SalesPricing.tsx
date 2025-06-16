
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SalesPricing = () => {
  const plans = [{
    name: 'Básico',
    price: 'R$ 97',
    period: '/mês',
    description: 'Ideal para profissionais autônomos',
    features: ['Até 50 pacientes', 'Agendamentos básicos', 'Prontuário eletrônico', 'Relatórios básicos', 'Suporte por email'],
    buttonText: 'Começar Agora',
    popular: false
  }, {
    name: 'Profissional',
    price: 'R$ 197',
    period: '/mês',
    description: 'Para clínicas pequenas e médias',
    features: ['Até 500 pacientes', 'Múltiplos profissionais', 'Triagem Manchester', 'Prescrições e atestados', 'Relatórios avançados', 'Suporte prioritário'],
    buttonText: 'Teste Grátis',
    popular: true
  }, {
    name: 'Enterprise',
    price: 'R$ 397',
    period: '/mês',
    description: 'Para hospitais e clínicas grandes',
    features: ['Pacientes ilimitados', 'Equipe completa', 'Integração com laboratórios', 'Dashboard executivo', 'API personalizada', 'Suporte dedicado'],
    buttonText: 'Falar com Vendas',
    popular: false
  }];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Escolha seu plano
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis para todas as necessidades
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-green-500 scale-105 shadow-xl' : 'border-gray-200'} transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 text-sm font-semibold rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-600 mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesPricing;
