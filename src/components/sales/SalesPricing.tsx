
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SalesPricing = () => {
  const plans = [{
    name: "Essencial",
    ideal: "Consultórios individuais",
    price: "R$ 97",
    period: "/mês",
    features: ["1 profissional", "Agenda básica", "Prontuário simples"]
  }, {
    name: "Profissional",
    ideal: "Clínicas pequenas e médias",
    price: "R$ 197",
    period: "/mês",
    features: ["Até 5 profissionais", "Relatórios completos", "Integração WhatsApp"],
    popular: true
  }, {
    name: "Enterprise",
    ideal: "Clínicas de grande porte",
    price: "R$ 397",
    period: "/mês",
    features: ["Suporte premium", "Controle financeiro", "Relatórios avançados"]
  }];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha o plano ideal para sua clínica
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todos os planos incluem 30 dias de teste gratuito
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border-2 p-8 ${
                plan.popular
                  ? 'border-green-500 relative transform scale-105 shadow-xl'
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.ideal}</p>
                <div>
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/subscription" className="block">
                <Button
                  className={`w-full py-3 ${
                    plan.popular
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  Começar teste grátis
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
