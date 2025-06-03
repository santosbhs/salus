
import React from 'react';
import { Check, Crown, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const ModernPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "R$ 97",
      period: "/mês",
      description: "Perfeito para consultórios individuais",
      icon: Star,
      features: [
        "Até 500 pacientes",
        "Agendamento online",
        "Prontuário digital",
        "Prescrições eletrônicas",
        "Suporte por email",
        "Backup automático"
      ],
      popular: false,
      gradient: "from-slate-600 to-slate-700",
      bgColor: "bg-white"
    },
    {
      name: "Professional",
      price: "R$ 197",
      period: "/mês",
      description: "Ideal para clínicas e múltiplos profissionais",
      icon: Rocket,
      features: [
        "Até 2.000 pacientes",
        "Usuários ilimitados",
        "Relatórios avançados com IA",
        "Integração WhatsApp",
        "API personalizada",
        "Suporte prioritário",
        "Branding personalizado"
      ],
      popular: true,
      gradient: "from-green-600 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      name: "Enterprise",
      price: "R$ 397",
      period: "/mês",
      description: "Solução completa para hospitais e redes",
      icon: Crown,
      features: [
        "Pacientes ilimitados",
        "Multi-tenant architecture",
        "IA avançada para diagnósticos",
        "Integração TISS completa",
        "Auditoria e compliance",
        "Suporte 24/7",
        "Gerente de conta dedicado"
      ],
      popular: false,
      gradient: "from-purple-600 to-indigo-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-green-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Planos que <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Escalam</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Escolha o plano perfeito para o tamanho da sua operação médica
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.bgColor} border-2 ${plan.popular ? 'border-green-500 scale-105 shadow-2xl' : 'border-slate-200 hover:border-slate-300'} transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                    <Crown className="w-4 h-4 mr-2" />
                    Mais Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-500 text-lg">{plan.period}</span>
                </div>
                <CardDescription className="text-slate-600 mt-2 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-slate-700">
                      <div className={`w-6 h-6 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/subscription" className="block w-full">
                  <Button 
                    className={`w-full mt-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-xl hover:shadow-green-500/25' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg'
                    }`}
                  >
                    Começar Agora
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <p className="text-slate-500 mb-4">Empresas que confiam em nossa tecnologia</p>
          <div className="flex justify-center items-center space-x-8 opacity-50">
            <div className="text-2xl font-bold text-slate-400">HOSPITAL+</div>
            <div className="text-2xl font-bold text-slate-400">CLINICA PRO</div>
            <div className="text-2xl font-bold text-slate-400">MEDTECH</div>
            <div className="text-2xl font-bold text-slate-400">SAÚDE 360</div>
          </div>
        </div>
      </div>
    </section>
  );
};
