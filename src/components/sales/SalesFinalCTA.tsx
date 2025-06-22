
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Shield, Clock, Award, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SalesFinalCTA = () => {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-600 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl text-center text-white relative z-10">
        {/* Urgency badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-8 animate-pulse">
          <Clock className="mr-2 h-5 w-5" />
          Oferta por tempo limitado!
        </div>

        {/* Main headline */}
        <div className="space-y-8 mb-16">
          <h2 className="text-6xl md:text-7xl font-bold leading-tight animate-fade-in">
            Garanta Agora seus
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              30 Dias Gratuitos
            </span>
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Mais de 5.000 médicos já transformaram suas clínicas. Seja o próximo!
          </p>
        </div>

        {/* Social proof and benefits */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="font-bold text-xl mb-2">5.000+</h3>
            <p className="text-slate-300">Médicos Satisfeitos</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300">
            <Shield className="h-10 w-10 text-blue-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">100% Seguro</h3>
            <p className="text-slate-300">Certificação Completa</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300">
            <Zap className="h-10 w-10 text-green-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Setup Rápido</h3>
            <p className="text-slate-300">Funcionando em 24h</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300">
            <Award className="h-10 w-10 text-purple-400 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Garantia Total</h3>
            <p className="text-slate-300">30 dias ou devolução</p>
          </div>
        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
          <Link to="/subscription">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-2xl px-16 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110">
              Começar Agora - 30 Dias Grátis
              <ChevronRight className="ml-4 h-8 w-8" />
            </Button>
          </Link>
          
          <Button size="lg" variant="outline" className="border-3 border-white text-white hover:bg-white hover:text-slate-900 text-2xl px-16 py-8 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105">
            Falar com Especialista
          </Button>
        </div>
        
        {/* Final trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-12 text-slate-300 text-lg mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Sem cartão de crédito</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Ativação imediata</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Suporte especializado</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Cancelamento fácil</span>
          </div>
        </div>
        
        {/* Final urgency message */}
        <div className="bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-2xl p-8 border border-red-400/30 max-w-4xl mx-auto">
          <p className="text-red-200 font-bold text-xl">
            <span className="text-2xl">⚡</span> <span className="font-black">ÚLTIMAS VAGAS:</span> Consultoria gratuita de implementação disponível apenas para os próximos 50 cadastros
          </p>
        </div>
      </div>
    </section>
  );
};
