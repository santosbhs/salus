
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const SalesCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-700 to-emerald-700 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/20 rotate-45 animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-16 bg-white/10 rotate-12 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center text-white relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Pronto para revolucionar sua clínica?
        </h2>
        <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Junte-se a milhares de profissionais que já transformaram sua prática médica com o Salus
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Link to="/subscription">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300">
              Começar Teste Grátis Agora
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300">
            Falar com Especialista
          </Button>
        </div>
        <div className="mt-6 text-green-100 text-sm animate-fade-in flex items-center justify-center space-x-4">
          <span className="animate-bounce">💳</span>
          <span>Sem cartão de crédito</span>
          <span className="animate-pulse">⚡</span>
          <span>Ativação imediata</span>
          <span className="animate-bounce">🛡️</span>
          <span>Dados 100% seguros</span>
        </div>
      </div>
    </section>
  );
};
