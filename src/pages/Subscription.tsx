import React, { useState, useEffect } from 'react';
import { Check, Zap, CreditCard, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');
  const [loading, setLoading] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  const { toast } = useToast();

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

  useEffect(() => {
    checkSubscriptionStatus();
  }, []);

  const checkSubscriptionStatus = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error('Error checking subscription:', error);
        return;
      }

      setSubscriptionStatus(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubscribe = async (planId: string) => {
    try {
      setLoading(true);
      
      const { data: { session } } = await supabase.auth.getSession();
      
      // Se há uma sessão ativa, verificar se já usou o trial
      if (session && subscriptionStatus?.has_used_trial && !subscriptionStatus?.subscribed) {
        toast({
          title: "Teste já utilizado",
          description: "Você já utilizou seu período de teste gratuito.",
          variant: "destructive"
        });
        return;
      }

      // Chamar a função sem autenticação obrigatória
      const { data, error } = await supabase.functions.invoke('create-trial-checkout', {
        body: { planId },
        headers: session ? {
          Authorization: `Bearer ${session.access_token}`,
        } : {},
      });

      if (error) {
        throw error;
      }

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast({
        title: "Erro ao processar",
        description: error.message || "Ocorreu um erro ao processar sua solicitação.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error opening customer portal:', error);
      toast({
        title: "Erro",
        description: "Não foi possível abrir o painel de gerenciamento.",
        variant: "destructive"
      });
    }
  };

  const getTrialDaysLeft = () => {
    if (!subscriptionStatus?.trial_ends_at) return 0;
    const trialEnd = new Date(subscriptionStatus.trial_ends_at);
    const now = new Date();
    const diffTime = trialEnd.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center">
                <Zap className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">Salus</h1>
                <p className="text-xs text-gray-600">Saúde e inovação</p>
              </div>
            </div>
            <Link to="/login">
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                Já sou assinante
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Trial Status Banner */}
        {subscriptionStatus?.is_trial_active && (
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  🎉 Teste Gratuito Ativo!
                </h3>
                <p className="text-blue-700">
                  Você tem {getTrialDaysLeft()} dias restantes do seu teste gratuito.
                </p>
              </div>
              <Button onClick={handleManageSubscription} variant="outline">
                Gerenciar Assinatura
              </Button>
            </div>
          </div>
        )}

        {/* Subscription Status Banner */}
        {subscriptionStatus?.subscribed && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-green-900">
                  ✅ Assinatura Ativa
                </h3>
                <p className="text-green-700">
                  Plano {subscriptionStatus.subscription_tier} ativo
                </p>
              </div>
              <Button onClick={handleManageSubscription} variant="outline">
                Gerenciar Assinatura
              </Button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experimente 7 dias grátis
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comece sua jornada digital na medicina agora mesmo. Durante o checkout você pode criar sua conta.
          </p>
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg inline-block">
            <p className="text-sm text-yellow-800">
              ⚡ <strong>7 dias gratuitos</strong> → Cadastre-se durante a compra → Cobrança automática após o período de teste
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-green-600 scale-105' : 'hover:scale-105'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-700 to-emerald-700 text-white">
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
                  <div className="text-sm text-gray-500 mb-1">7 dias grátis, depois:</div>
                  <span className="text-4xl font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">{plan.price}</span>
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
                  disabled={loading}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-white' 
                      : 'border-green-700 text-green-700 hover:bg-green-700 hover:text-white'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Começar teste grátis
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
              <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cadastro Simplificado</h4>
              <p className="text-gray-600">
                Crie sua conta durante o processo de compra. Rápido e sem complicações.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Segurança</h4>
              <p className="text-gray-600">
                Dados protegidos com criptografia de ponta e backup automático
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-emerald-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white h-6 w-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Teste Sem Riscos</h4>
              <p className="text-gray-600">
                7 dias completamente grátis. Cancele a qualquer momento sem cobranças.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Como funciona:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Escolha seu plano e clique em "Começar teste grátis"</li>
              <li>• Complete seu cadastro e dados de pagamento no Stripe</li>
              <li>• Acesso imediato por 7 dias sem cobrança</li>
              <li>• Após 7 dias, cobrança automática do plano escolhido</li>
              <li>• Cancele a qualquer momento sem penalidades</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Já é assinante? 
            <Link to="/login" className="text-green-700 font-medium hover:underline ml-1">
              Faça login aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
