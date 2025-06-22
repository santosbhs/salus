
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SalesFinalCTA = () => {
  return (
    <section className="relative py-20 px-6 bg-slate-900 overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl text-center text-white relative z-10">
        {/* Main headline */}
        <div className="space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pronto para Modernizar
            <span className="block text-blue-400">
              sua Prática Médica?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Implemente uma solução profissional que cresce junto com sua clínica
          </p>
        </div>

        {/* Professional benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="font-bold text-lg mb-2">+5.000 Profissionais</h3>
            <p className="text-slate-300 text-sm">confiam no SALUS para gestão diária</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <Shield className="h-8 w-8 text-blue-400 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Certificação Completa</h3>
            <p className="text-slate-300 text-sm">ISO 27001, LGPD e CFM certificado</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <Clock className="h-8 w-8 text-green-400 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Implementação Rápida</h3>
            <p className="text-slate-300 text-sm">Setup completo em até 24 horas</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <Link to="/subscription">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-6 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              Iniciar Teste Gratuito
              <ChevronRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
          
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-xl px-12 py-6 rounded-lg font-bold transition-all duration-300">
            Falar com Especialista
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-slate-300 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>30 dias gratuitos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Sem taxa de instalação</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Suporte especializado</span>
          </div>
        </div>
        
        {/* Professional offer */}
        <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-lg p-6 border border-blue-400/30 max-w-2xl mx-auto">
          <p className="text-blue-200 font-medium">
            <span className="font-bold">Oferta Especial:</span> Consultoria gratuita de implementação para novos clientes
          </p>
        </div>
      </div>
    </section>
  );
};
