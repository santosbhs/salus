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
  return;
};
export default SalesPricing;