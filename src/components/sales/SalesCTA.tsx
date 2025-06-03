
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const SalesCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-700 to-emerald-700">
      <div className="container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para revolucionar sua clínica?
        </h2>
        <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto leading-relaxed">
          Junte-se a milhares de profissionais que já transformaram sua prática médica com o Salus
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/subscription">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6">
              Começar Teste Grátis Agora
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-6">
            Falar com Especialista
          </Button>
        </div>
        <p className="mt-6 text-green-100 text-sm">
          💳 Sem cartão de crédito • ⚡ Ativação imediata • 🛡️ Dados 100% seguros
        </p>
      </div>
    </section>
  );
};
