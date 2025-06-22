
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
      description: "Para médicos que querem organizar a clínica sem complicação",
      target: "Ideal para consultórios pequenos (até 2 profissionais)",
      features: [
        "Agenda para 2 profissionais",
        "Prontuário eletrônico CFM",
        "1.000 pacientes cadastrados",
        "Relatórios essenciais",
        "Suporte por email",
        "Backup automático seguro"
      ],
      highlight: false,
      cta: "Começar Teste Grátis",
      savings: null,
      popular: false
    },
    {
      name: "Professional",
      icon: Star,
      price: "197", 
      period: "/mês",
      description: "Para clínicas que querem crescer e faturar mais",
      target: "Perfeito para clínicas em crescimento (até 10 profissionais)",
      features: [
        "Agenda para 10 profissionais",
        "Prontuário eletrônico completo",
        "Pacientes ilimitados",
        "Relatórios avançados + BI",
        "Integração WhatsApp nativa",
        "Prescrição digital válida",
        "Suporte prioritário",
        "Múltiplas unidades"
      ],
      highlight: true,
      cta: "Mais Escolhido - 30 Dias Grátis",
      savings: "Economize R$ 1.200 por ano",
      popular: true
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "397",
      period: "/mês", 
      description: "Para hospitais e redes que precisam de máxima performance",
      target: "Hospitais e grandes redes (profissionais ilimitados)",
      features: [
        "Profissionais ilimitados",
        "Todas as funcionalidades premium",
        "API personalizada para integrações",
        "Relatórios personalizados",
        "Gerente de conta dedicado",
        "Treinamento presencial incluso",
        "Suporte 24/7 com SLA",
        "Integração com sistemas existentes"
      ],
      highlight: false,
      cta: "Falar com Especialista",
      savings: "Consultoria de implementação gratuita",
      popular: false
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-8 py-3 text-xl font-bold mb-8 border-0">
            💰 Planos e Preços Especiais
          </Badge>
          <h2 className="text-6xl font-bold text-slate-900 mb-10">
            Pare de Pagar Caro por Sistemas Ruins
          </h2>
          <p className="text-3xl text-slate-600 max-w-5xl mx-auto font-medium leading-relaxed">
            O Salus custa menos que 2 consultas particulares por mês. <br/>
            <span className="font-bold text-slate-900">Todos os planos com 30 dias grátis</span> - sem cartão, sem compromisso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-500 transform hover:-translate-y-6 ${
                  plan.highlight 
                    ? 'border-4 border-blue-500 shadow-3xl scale-110 bg-white' 
                    : 'border-2 border-slate-200 hover:border-blue-300 shadow-2xl hover:shadow-3xl bg-white'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white text-center py-4 font-bold text-xl">
                    <Rocket className="inline-block mr-3 h-6 w-6" />
                    🔥 MAIS ESCOLHIDO - MELHOR CUSTO BENEFÍCIO
                  </div>
                )}
                
                <CardHeader className={`text-center ${plan.highlight ? 'pt-20' : 'pt-10'} pb-8`}>
                  <div className="flex justify-center mb-6">
                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl ${
                      plan.highlight 
                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="h-10 w-10" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-4xl font-bold text-slate-900 mb-4">
                    {plan.name}
                  </CardTitle>
                  
                  <CardDescription className="text-xl text-slate-600 mb-6 font-medium leading-relaxed">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mb-6">
                    <span className="text-6xl font-black text-slate-900">R$ {plan.price}</span>
                    <span className="text-2xl text-slate-600">{plan.period}</span>
                  </div>
                  
                  <div className="text-xl font-bold text-blue-600 mb-6 bg-blue-50 p-4 rounded-xl">
                    {plan.target}
                  </div>
                  
                  {plan.savings && (
                    <Badge className={`font-bold text-lg py-2 px-4 ${
                      plan.highlight 
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      💡 {plan.savings}
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="px-10 pb-10">
                  <ul className="space-y-5 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-4">
                        <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-700 font-semibold text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/subscription" className="block">
                    <Button 
                      className={`w-full py-6 text-xl font-bold rounded-2xl transition-all duration-300 ${
                        plan.highlight
                          ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-700 hover:via-purple-700 hover:to-green-700 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105'
                          : 'bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl'
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
        <div className="bg-white rounded-3xl p-16 text-center border-2 border-slate-200 shadow-2xl">
          <h3 className="text-4xl font-bold text-slate-900 mb-8">
            🛡️ Garantia Total de Satisfação
          </h3>
          <p className="text-2xl text-slate-600 mb-10 max-w-4xl mx-auto font-medium">
            Teste o Salus por <span className="font-bold text-slate-900">30 dias completos</span>. 
            Se não ficar 100% satisfeito, devolvemos todo seu dinheiro.
          </p>
          <div className="flex justify-center items-center space-x-16 text-slate-600">
            <div className="flex items-center space-x-3">
              <Check className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl">Sem fidelidade</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl">Cancele quando quiser</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl">Suporte especializado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesPricing;
