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
  return;
};