
import React from 'react';
import { Check, ChevronRight, Play, Star, Users, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const SalesHero = () => {
  return (
    <section className="py-20 px-4 overflow-hidden relative bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-full animate-gentle-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-full animate-gentle-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full animate-gentle-float"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Trust indicators */}
        <div className="flex justify-center mb-8">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 animate-gentle-fade-in px-6 py-2">
            🏆 Escolhido por +5.000 profissionais de saúde
          </Badge>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-green-700 bg-clip-text text-transparent leading-tight animate-gentle-fade-in">
            Revolucione sua Clínica
          </h1>
          <p className="text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto animate-gentle-fade-in font-light">
            O sistema de gestão clínica que <strong className="text-green-700">aumenta sua receita em 40%</strong> e 
            <strong className="text-blue-700"> economiza 3 horas por dia</strong> do seu tempo administrativo.
          </p>

          {/* Social proof numbers */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 animate-gentle-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">5.000+</div>
              <div className="text-sm text-gray-600">Médicos Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">300%</div>
              <div className="text-sm text-gray-600">+ Produtividade</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center animate-gentle-fade-in">
            <Link to="/subscription">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xl px-12 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Teste GRÁTIS por 30 Dias <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-xl px-12 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
              <Play className="mr-2 h-6 w-6" />
              Ver Demonstração (2 min)
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 animate-gentle-fade-in mb-12">
            <div className="flex items-center hover:scale-110 transition-transform duration-200">
              <Shield className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-semibold">LGPD Compliant</span>
            </div>
            <div className="flex items-center hover:scale-110 transition-transform duration-200">
              <Clock className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold">Ativação em 5 min</span>
            </div>
            <div className="flex items-center hover:scale-110 transition-transform duration-200">
              <Users className="h-5 w-5 text-purple-600 mr-2" />
              <span className="font-semibold">Suporte 24/7</span>
            </div>
          </div>
        </div>

        {/* Customer testimonial preview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-green-100 max-w-4xl mx-auto animate-gentle-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="ml-3 text-gray-600 font-medium">4.9/5 - Mais de 1.000 avaliações</span>
          </div>
          <blockquote className="text-xl text-gray-700 text-center italic leading-relaxed mb-6">
            "O Salus transformou completamente minha clínica. Reduzi o tempo administrativo em 70% e 
            meus pacientes adoram o novo sistema de agendamento. Minha receita aumentou 35% no primeiro trimestre."
          </blockquote>
          <div className="text-center">
            <div className="font-semibold text-gray-900">Dr. Rafael Monteiro</div>
            <div className="text-green-600 font-medium">Cardiologista • Clínica CardioSaúde</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 animate-gentle-fade-in">
          <p className="text-lg text-gray-600 mb-6">
            <strong className="text-green-700">Sem compromisso</strong> • 
            <strong className="text-blue-700"> Sem cartão de crédito</strong> • 
            <strong className="text-purple-700"> Cancelamento gratuito</strong>
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Check className="h-4 w-4 text-green-600" />
            <span>Configuração em 5 minutos</span>
            <span className="mx-2">•</span>
            <Check className="h-4 w-4 text-green-600" />
            <span>Migração de dados gratuita</span>
            <span className="mx-2">•</span>
            <Check className="h-4 w-4 text-green-600" />
            <span>Treinamento incluído</span>
          </div>
        </div>
      </div>
    </section>
  );
};
