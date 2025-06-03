
import React from 'react';
import { Check, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const SalesHero = () => {
  return (
    <section className="py-20 px-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full animate-gentle-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-full animate-gentle-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-green-500/25 to-emerald-500/25 rounded-full animate-gentle-float"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 animate-gentle-fade-in">
          🚀 Novo: Prontuário digital avançado
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent leading-tight animate-gentle-fade-in">
          Modernize sua clínica com tecnologia de ponta
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto animate-gentle-fade-in">
          O sistema de gestão clínica mais completo do Brasil. Aumente sua produtividade, 
          melhore a experiência dos pacientes e potencialize seus resultados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center animate-gentle-fade-in">
          <Link to="/subscription">
            <Button size="lg" className="bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-800 hover:to-emerald-800 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300">
              Começar Teste Grátis <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300">
            <Play className="mr-2 h-5 w-5" />
            Ver Demonstração
          </Button>
        </div>
        <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 animate-gentle-fade-in">
          <div className="flex items-center hover:scale-110 transition-transform duration-200">
            <Check className="h-4 w-4 text-green-600 mr-2" />
            30 dias grátis
          </div>
          <div className="flex items-center hover:scale-110 transition-transform duration-200">
            <Check className="h-4 w-4 text-green-600 mr-2" />
            Sem compromisso
          </div>
          <div className="flex items-center hover:scale-110 transition-transform duration-200">
            <Check className="h-4 w-4 text-green-600 mr-2" />
            Suporte incluído
          </div>
        </div>
      </div>
    </section>
  );
};
