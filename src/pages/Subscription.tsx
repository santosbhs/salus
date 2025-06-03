
import React, { useState } from 'react';
import { Check, Zap, CreditCard, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      price: 'R$ 99',
      period: '/mês',
      description: 'Para clínicas pequenas',
      features: [
        'Até 100 pacientes',
        'Anamnese SOAP',
        'Agendamentos básicos',
        'Receitas médicas',
        'Suporte por email'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Profissional',
      price: 'R$ 199',
      period: '/mês',
      description: 'Para clínicas em crescimento',
      features: [
        'Pacientes ilimitados',
        'Todos os recursos do Básico',
        'Múltiplos profissionais',
        'Relatórios avançados',
        'Integração com laboratórios',
        'Suporte prioritário'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'R$ 399',
      period: '/mês',
      description: 'Para grandes clínicas',
      features: [
        'Todos os recursos do Profissional',
        'API personalizada',
        'Backup automático',
        'Treinamento incluído',
        'Suporte 24/7',
        'Customizações especiais'
      ],
      popular: false
    }
  ];

  const handleSubscribe = (planId: string) => {
    console.log(`Subscribing to plan: ${planId}`);
    // Aqui você implementaria a integração com o sistema de pagamento
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Salus</h1>
                <p className="text-xs text-gray-600">Saúde e inovação</p>
              </div>
            </div>
            <Link to="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Já sou assinante
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha seu plano
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modernize sua clínica com a plataforma mais inovadora do mercado. 
            Saúde e inovação em suas mãos!
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={() => handleSubscribe(plan.id)}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                      : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Assinar {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Por que escolher o Salus?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rapidez</h4>
              <p className="text-gray-600">
                Anamnese SOAP otimizada para máxima eficiência no atendimento
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Segurança</h4>
              <p className="text-gray-600">
                Dados protegidos com criptografia de ponta e backup automático
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Inovação</h4>
              <p className="text-gray-600">
                Tecnologia de ponta para modernizar sua prática médica
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Já é assinante? 
            <Link to="/login" className="text-blue-600 font-medium hover:underline ml-1">
              Faça login aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
