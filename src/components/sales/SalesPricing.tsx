
import React from 'react';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const SalesPricing = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "97",
      period: "/mês",
      description: "Ideal para consultórios pequenos e médicos iniciantes",
      target: "Até 2 profissionais",
      features: [
        "Agenda para 2 profissionais",
        "Prontuário eletrônico básico",
        "1.000 pacientes cadastrados",
        "Relatórios essenciais",
        "Suporte por email",
        "Backup automático"
      ],
      highlight: false,
      cta: "Começar Teste Grátis",
      savings: null
    },
    {
      name: "Professional",
      icon: Star,
      price: "197", 
      period: "/mês",
      description: "Perfeito para clínicas em crescimento e grupos médicos",
      target: "Até 10 profissionais",
      features: [
        "Agenda para 10 profissionais",
        "Prontuário eletrônico completo",
        "Pacientes ilimitados",
        "Todos os relatórios + BI",
        "Integração WhatsApp",
        "Prescrição digital",
        "Suporte prioritário",
        "Múltiplas unidades"
      ],
      highlight: true,
      cta: "Mais Escolhido",
      savings: "Economize R$ 600/ano"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "397",
      period: "/mês", 
      description: "Para hospitais e grandes redes médicas",
      target: "Profissionais ilimitados",
      features: [
        "Profissionais ilimitados",
        "Todas as funcionalidades",
        "API personalizada",
        "Relatórios personalizados",
        "Gerente de conta dedicado",
        "Treinamento presencial",
        "Suporte 24/7",
        "Integração com sistemas"
      ],
      highlight: false,
      cta: "Falar com Especialista",
      savings: "Consultoria incluída"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <Badge className="bg-blue-100 text-blue-700 px-6 py-2 text-lg font-semibold mb-6">
            Planos e Preços
          </Badge>
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Escolha o Plano Ideal para sua Clínica
          </h2>
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
            Todos os planos incluem 30 dias grátis, sem compromisso e sem taxa de instalação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-500 transform hover:-translate-y-4 ${
                  plan.highlight 
                    ? 'border-4 border-blue-500 shadow-2xl scale-105' 
                    : 'border-2 border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center py-3 font-bold text-lg">
                    <Rocket className="inline-block mr-2 h-5 w-5" />
                    MAIS ESCOLHIDO
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.highlight ? 'pt-16' : 'pt-8'} pb-6`}>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      plan.highlight 
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-3xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <CardDescription className="text-lg text-slate-600 mb-4">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-slate-900">R$ {plan.price}</span>
                    <span className="text-xl text-slate-600">{plan.period}</span>
                  </div>
                  
                  <div className="text-lg font-semibold text-blue-600 mb-4">
                    {plan.target}
                  </div>
                  
                  {plan.savings && (
                    <Badge className="bg-green-100 text-green-700 font-semibold">
                      {plan.savings}
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/subscription" className="block">
                    <Button 
                      className={`w-full py-4 text-lg font-bold rounded-xl transition-all duration-300 ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced guarantee section */}
        <div className="bg-slate-50 rounded-3xl p-10 text-center border-2 border-slate-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Garantia de Satisfação de 30 Dias
          </h3>
          <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
            Teste o Salus por 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.
          </p>
          <div className="flex justify-center items-center space-x-8 text-slate-600">
            <div className="flex items-center space-x-2">
              <Check className="h-6 w-6 text-green-600" />
              <span className="font-semibold">Sem fidelidade</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-6 w-6 text-green-600" />
              <span className="font-semibold">Cancele quando quiser</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-6 w-6 text-green-600" />
              <span className="font-semibold">Suporte especializado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesPricing;
